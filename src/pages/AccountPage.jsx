import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../lib/auth.jsx';
import { getSupabase } from '../lib/supabaseClient.js';
import { Link, Navigate } from 'react-router-dom';

function generateOrderNumber() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const r = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `KVK-${y}${m}${d}-${r}`;
}

export default function AccountPage() {
  const { user } = useAuth();
  const [orders, setOrders] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [form, setForm] = React.useState({ productType: '', dimensions: '', fromLocation: '', toLocation: '' });
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');

  if (!user) return <Navigate to="/login" replace />;

  React.useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) return;
    async function load() {
      setLoading(true);
      const { data, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
      if (!error) setOrders(data || []);
      setLoading(false);
    }
    load();
  }, [user?.id]);

  async function submitOrder(e) {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const supabase = getSupabase();
      if (!supabase) throw new Error('Не настроен Supabase');
      const number = generateOrderNumber();
      const insert = {
        order_number: number,
        product_type: form.productType,
        dimensions: form.dimensions,
        from_location: form.fromLocation,
        to_location: form.toLocation,
        user_id: user.id,
      };
      const { error } = await supabase.from('orders').insert(insert);
      if (error) throw error;
      setForm({ productType: '', dimensions: '', fromLocation: '', toLocation: '' });
      const { data } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
      setOrders(data || []);
    } catch (e) {
      setError(e.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function signOut() {
    const supabase = getSupabase();
    await supabase?.auth.signOut();
  }

  return (
    <div className="container-p py-10">
      <Helmet><title>Личный кабинет — Карговичкоф</title></Helmet>
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Личный кабинет</h1>
        <div className="flex gap-3">
          <Link to="/" className="px-4 py-2 rounded border">На главную</Link>
          <button onClick={signOut} className="px-4 py-2 rounded bg-gray-900 text-white">Выйти</button>
        </div>
      </div>

      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        <div className="p-6 border rounded-xl bg-white">
          <h2 className="font-bold text-lg">Новая заявка</h2>
          <form onSubmit={submitOrder} className="mt-4 grid gap-4">
            <input className="rounded border p-3" placeholder="Тип товара" value={form.productType} onChange={e=>setForm(v=>({...v, productType: e.target.value}))} />
            <input className="rounded border p-3" placeholder="Габариты" value={form.dimensions} onChange={e=>setForm(v=>({...v, dimensions: e.target.value}))} />
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="rounded border p-3" placeholder="Откуда" value={form.fromLocation} onChange={e=>setForm(v=>({...v, fromLocation: e.target.value}))} />
              <input className="rounded border p-3" placeholder="Куда" value={form.toLocation} onChange={e=>setForm(v=>({...v, toLocation: e.target.value}))} />
            </div>
            {error && <div className="text-red-600">{error}</div>}
            <button disabled={submitting} className="px-5 py-3 rounded bg-brand-blue text-white font-semibold disabled:opacity-60">{submitting ? 'Отправка…' : 'Отправить заявку'}</button>
          </form>
        </div>

        <div className="p-6 border rounded-xl bg-white">
          <h2 className="font-bold text-lg">Мои заявки</h2>
          {loading ? (
            <div className="mt-3 text-gray-600">Загрузка…</div>
          ) : orders.length === 0 ? (
            <div className="mt-3 text-gray-600">Заявок пока нет</div>
          ) : (
            <ul className="mt-4 divide-y">
              {orders.map(o => (
                <li key={o.id} className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="font-mono text-sm">{o.order_number}</div>
                  <div className="text-sm text-gray-700">{o.product_type}; {o.dimensions}; {o.from_location} → {o.to_location}</div>
                  <div className="text-xs text-gray-500">{new Date(o.created_at).toLocaleString()}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}


