import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getSupabase } from '../lib/supabaseClient.js';
import { useAuth } from '../lib/auth.jsx';
import { Navigate } from 'react-router-dom';

export default function LoginPage() {
  const { user } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  if (user) return <Navigate to="/account" replace />;

  async function handleSignIn(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const supabase = getSupabase();
      if (!supabase) throw new Error('Не настроен Supabase');
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSignUp(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const supabase = getSupabase();
      if (!supabase) throw new Error('Не настроен Supabase');
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-p py-10 max-w-md">
      <Helmet><title>Вход — Карговичкоф</title></Helmet>
      <h1 className="text-3xl font-bold">Вход</h1>
      <form className="mt-6 grid gap-4" onSubmit={handleSignIn}>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="mt-1 w-full rounded border p-3" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium">Пароль</label>
          <input type="password" className="mt-1 w-full rounded border p-3" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        {error && <div className="text-red-600">{error}</div>}
        <div className="flex gap-3">
          <button disabled={loading} className="px-5 py-3 rounded bg-brand-blue text-white font-semibold disabled:opacity-60">Войти</button>
          <button disabled={loading} onClick={handleSignUp} className="px-5 py-3 rounded border font-semibold disabled:opacity-60" type="button">Создать аккаунт</button>
        </div>
      </form>
    </div>
  );
}


