import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getSupabase } from '../lib/supabaseClient.js';

function generateOrderNumber() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const r = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `KVK-${y}${m}${d}-${r}`;
}

export default function OrderPage() {
  const [form, setForm] = React.useState({ productType: '', dimensions: '', fromLocation: '', toLocation: '' });
  const [submitting, setSubmitting] = React.useState(false);
  const [orderNumber, setOrderNumber] = React.useState('');
  const [error, setError] = React.useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const supabase = getSupabase();
      if (!supabase) {
        throw new Error('Не настроен доступ к базе. Укажите VITE_SUPABASE_URL и VITE_SUPABASE_ANON_KEY.');
      }
      if (!form.productType || !form.dimensions || !form.fromLocation || !form.toLocation) {
        throw new Error('Пожалуйста, заполните все поля');
      }
      const number = generateOrderNumber();
      const { error: dbError } = await supabase.from('orders').insert({
        order_number: number,
        product_type: form.productType,
        dimensions: form.dimensions,
        from_location: form.fromLocation,
        to_location: form.toLocation,
      });
      if (dbError) throw dbError;
      setOrderNumber(number);
      setForm({ productType: '', dimensions: '', fromLocation: '', toLocation: '' });
    } catch (err) {
      setError(err.message || 'Ошибка отправки');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="container-p py-10">
      <Helmet>
        <title>Сделать заказ — Карговичкоф</title>
      </Helmet>
      <h1 className="text-3xl font-bold">Сделать заказ</h1>
      <p className="mt-2 text-gray-700">Заполните форму, и мы свяжемся с вами для уточнения деталей.</p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 max-w-2xl">
        <div>
          <label className="block text-sm font-medium">Тип товара</label>
          <input className="mt-1 w-full rounded border p-3" placeholder="Например: электроника" value={form.productType} onChange={e=>setForm(v=>({...v, productType: e.target.value}))} />
        </div>
        <div>
          <label className="block text-sm font-medium">Габариты</label>
          <input className="mt-1 w-full rounded border p-3" placeholder="Вес, объем или размеры" value={form.dimensions} onChange={e=>setForm(v=>({...v, dimensions: e.target.value}))} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Откуда доставка</label>
            <input className="mt-1 w-full rounded border p-3" placeholder="Город в Китае" value={form.fromLocation} onChange={e=>setForm(v=>({...v, fromLocation: e.target.value}))} />
          </div>
          <div>
            <label className="block text-sm font-medium">Куда доставка</label>
            <input className="mt-1 w-full rounded border p-3" placeholder="Город доставки" value={form.toLocation} onChange={e=>setForm(v=>({...v, toLocation: e.target.value}))} />
          </div>
        </div>
        <button disabled={submitting} className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded bg-brand-blue text-white font-semibold hover:opacity-90 disabled:opacity-60">
          {submitting ? 'Отправка…' : 'Отправить заявку'}
        </button>
      </form>

      {error && <div className="mt-4 text-red-600">{error}</div>}
      {orderNumber && (
        <div className="mt-6 p-4 rounded border bg-green-50 text-green-900">
          Заявка принята. Ваш номер: <span className="font-semibold">{orderNumber}</span>
        </div>
      )}
    </div>
  );
}


