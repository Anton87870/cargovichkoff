import React from 'react';

const API_URL = 'https://api.exchangerate.host/latest?base=CNY&symbols=USD,RUB';

export default function RateTicker() {
  const [rates, setRates] = React.useState(null);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        setError('');
        const res = await fetch(API_URL, { cache: 'no-store' });
        if (!res.ok) throw new Error('Ошибка загрузки курса');
        const data = await res.json();
        if (ignore) return;
        const usd = data?.rates?.USD;
        const rub = data?.rates?.RUB;
        if (!usd || !rub) throw new Error('Нет данных по курсам');
        const margin = 1.03;
        setRates({ usd: usd * margin, rub: rub * margin, date: data.date });
      } catch (e) {
        if (!ignore) setError(e.message);
      }
    }
    load();
    const id = setInterval(load, 60_000 * 30);
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


