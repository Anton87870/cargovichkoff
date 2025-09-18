import React from 'react';

// API ЦБ РФ для получения курса доллара
const CBR_API_URL = 'https://www.cbr-xml-daily.ru/daily_json.js';

export default function RateTicker() {
  const [rates, setRates] = React.useState(null);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        setError('');
        const res = await fetch(CBR_API_URL, { cache: 'no-store' });
        if (!res.ok) throw new Error('Ошибка загрузки курса ЦБ');
        const data = await res.json();
        if (ignore) return;
        
        // Получаем курс доллара от ЦБ РФ
        const usdRate = data?.Valute?.USD?.Value;
        if (!usdRate) throw new Error('Нет данных по курсу доллара от ЦБ');
        
        // Рассчитываем курс юаня к рублю через доллар
        // 1 USD = usdRate RUB (от ЦБ)
        // 1 USD ≈ 7.2 CNY (примерный курс)
        // 1 CNY = usdRate / 7.2 RUB
        const cnyToRub = usdRate / 7.2;
        
        // Применяем маржу +3%
        const margin = 1.03;
        const cnyToRubWithMargin = cnyToRub * margin;
        const cnyToUsd = 1 / 7.2 * margin; // 1 CNY в USD с маржой
        
        setRates({ 
          usd: cnyToUsd, 
          rub: cnyToRubWithMargin, 
          date: new Date().toLocaleDateString('ru-RU'),
          cbrDate: data.Date
        });
      } catch (e) {
        if (!ignore) setError(e.message);
      }
    }
    load();
    const id = setInterval(load, 60_000 * 30); // Обновляем каждые 30 минут
    return () => { ignore = true; clearInterval(id); };
  }, []);

  return (
    <div className="w-full bg-brand-blue text-white">
      <div className="container-p py-2 text-sm flex flex-wrap items-center gap-4">
        <div className="font-semibold">Курс CNY (+3%):</div>
        {error && <div className="text-red-200">{error}</div>}
        {rates ? (
          <div className="flex flex-wrap items-center gap-6">
            <div>1 CNY = <span className="font-semibold">{rates.usd.toFixed(4)}</span> USD</div>
            <div>1 CNY = <span className="font-semibold">{rates.rub.toFixed(2)}</span> RUB</div>
            <div className="opacity-80">обновлено: {rates.date}</div>
          </div>
        ) : !error ? (
          <div>Загрузка курса…</div>
        ) : null}
      </div>
    </div>
  );
}


