import React from 'react';

export default function CostCalculator() {
  const [from, setFrom] = React.useState('Китай');
  const [to, setTo] = React.useState('Москва');
  const [weight, setWeight] = React.useState('');
  const [volume, setVolume] = React.useState('');
  const [type, setType] = React.useState('Обычный');
  const [pack, setPack] = React.useState(false);
  const [customs, setCustoms] = React.useState(false);
  const [estimate, setEstimate] = React.useState(null);

  function onCalc(e) {
    e.preventDefault();
    const w = Number(weight) || 0;
    const v = Number(volume) || 0;
    const base = 250 + w * 2.5 + v * 150;
    const modeK = type === 'Срочный (авиа)' ? 1.6 : type === 'ЖД' ? 1.2 : 1;
    const addons = (pack ? 50 : 0) + (customs ? 120 : 0);
    const price = Math.round((base * modeK + addons) * 100) / 100;
    const days = type === 'Срочный (авиа)' ? '7–10' : type === 'ЖД' ? '12–18' : '20–30';
    setEstimate({ price, days });
  }

  return (
    <section>
      <div className="container-p py-12">
        <h2 className="text-2xl font-bold text-center">Калькулятор стоимости</h2>
        <form onSubmit={onCalc} className="mt-6 grid gap-4 max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="rounded border p-3" value={from} onChange={e=>setFrom(e.target.value)} placeholder="Откуда" />
            <input className="rounded border p-3" value={to} onChange={e=>setTo(e.target.value)} placeholder="Куда" />
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <input className="rounded border p-3" value={weight} onChange={e=>setWeight(e.target.value)} placeholder="Вес, кг" />
            <input className="rounded border p-3" value={volume} onChange={e=>setVolume(e.target.value)} placeholder="Объём, м³" />
            <select className="rounded border p-3" value={type} onChange={e=>setType(e.target.value)}>
              <option>Обычный (авто/море)</option>
              <option>ЖД</option>
              <option>Срочный (авиа)</option>
            </select>
          </div>
          <div className="flex items-center gap-6">
            <label className="inline-flex items-center gap-2 text-sm"><input type="checkbox" checked={pack} onChange={e=>setPack(e.target.checked)} /> Упаковка</label>
            <label className="inline-flex items-center gap-2 text-sm"><input type="checkbox" checked={customs} onChange={e=>setCustoms(e.target.checked)} /> Растаможка</label>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 rounded bg-brand-blue text-white font-semibold">Рассчитать</button>
            <a href="#contact" className="px-6 py-3 rounded border font-semibold">Получить КП</a>
          </div>
        </form>
        {estimate && (
          <div className="mt-6 max-w-3xl mx-auto p-4 rounded border bg-white">
            Ориентировочно: <span className="font-semibold">{estimate.price} ₽</span>, срок: <span className="font-semibold">{estimate.days}</span> дней.
          </div>
        )}
      </div>
    </section>
  );
}


