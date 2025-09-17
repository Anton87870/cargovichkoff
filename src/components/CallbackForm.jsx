import React from 'react';
import { getSupabase } from '../lib/supabaseClient.js';

export default function CallbackForm({ compact = false }) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (!name || !phone) throw new Error('Укажите имя и телефон');
      const supabase = getSupabase();
      if (supabase) {
        await supabase.from('callbacks').insert({ name, phone });
        setSent(true);
        setName('');
        setPhone('');
      } else {
        window.location.href = `mailto:info@kargovichkof.com?subject=Обратный звонок&body=Имя: ${encodeURIComponent(name)}%0AТелефон: ${encodeURIComponent(phone)}`;
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className={compact ? 'grid grid-cols-1 sm:grid-cols-3 gap-3' : 'grid gap-4 max-w-2xl'}>
      <input className="rounded border p-3" placeholder="Ваше имя" value={name} onChange={e=>setName(e.target.value)} />
      <input className="rounded border p-3" placeholder="Телефон" value={phone} onChange={e=>setPhone(e.target.value)} />
      <button disabled={loading} className="rounded bg-brand-blue text-white font-semibold px-5 py-3 disabled:opacity-60">Заказать звонок</button>
      {sent && <div className="text-green-600 sm:col-span-3">Заявка отправлена. Мы свяжемся с вами.</div>}
      {error && <div className="text-red-600 sm:col-span-3">{error}</div>}
    </form>
  );
}


