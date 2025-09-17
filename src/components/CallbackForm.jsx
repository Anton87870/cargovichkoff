import React from 'react';
import { getSupabase } from '../lib/supabaseClient.js';

export default function CallbackForm() {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [ok, setOk] = React.useState(false);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setOk(false);
    setError('');
    try {
      if (!name || !phone) throw new Error('Укажите имя и телефон');
      const supabase = getSupabase();
      if (!supabase) throw new Error('Supabase не настроен');
      const { error } = await supabase.from('callbacks').insert({ name, phone });
      if (error) throw error;
      setOk(true);
      setName('');
      setPhone('');
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="grid sm:grid-cols-3 gap-3">
      <input className="rounded border border-brand-gold/40 bg-black text-white p-3" placeholder="Ваше имя" value={name} onChange={e=>setName(e.target.value)} />
      <input className="rounded border border-brand-gold/40 bg-black text-white p-3" placeholder="Телефон" value={phone} onChange={e=>setPhone(e.target.value)} />
      <button disabled={loading} className="rounded bg-brand-gold text-black font-semibold px-4 py-3 disabled:opacity-60">Заказать звонок</button>
      {ok && <div className="sm:col-span-3 text-green-400">Заявка отправлена. Мы перезвоним.</div>}
      {error && <div className="sm:col-span-3 text-red-400">{error}</div>}
    </form>
  );
}


