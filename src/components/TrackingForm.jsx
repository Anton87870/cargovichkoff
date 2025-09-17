import React from 'react';

export default function TrackingForm() {
  const [code, setCode] = React.useState('');
  const [status, setStatus] = React.useState(null);

  function onCheck(e) {
    e.preventDefault();
    if (!code) return;
    // Placeholder: show mock status message; real API can be integrated later
    setStatus({ phase: 'В обработке', text: 'Статус доступен в личном кабинете. Свяжитесь с менеджером для уточнения.' });
  }

  return (
    <section className="bg-blue-50">
      <div className="container-p py-12">
        <h2 className="text-2xl font-bold text-center">Отслеживание груза</h2>
        <form onSubmit={onCheck} className="mt-4 flex flex-wrap gap-3 justify-center">
          <input className="rounded border p-3 min-w-[260px]" placeholder="Номер груза или накладной" value={code} onChange={e=>setCode(e.target.value)} />
          <button className="px-6 py-3 rounded bg-brand-blue text-white font-semibold">Проверить</button>
        </form>
        {status && (
          <div className="mt-4 max-w-xl mx-auto p-4 rounded border bg-white text-center">
            <div className="font-semibold">{status.phase}</div>
            <div className="text-gray-700 text-sm mt-1">{status.text}</div>
          </div>
        )}
      </div>
    </section>
  );
}


