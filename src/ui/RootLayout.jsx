import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import RateTicker from '../components/RateTicker.jsx';

function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="border-b border-gray-200 sticky top-0 z-40 bg-white/90 backdrop-blur">
      <div className="container-p flex items-center justify-between py-3">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-brand-blue" />
          <span className="font-bold text-brand-blue">Карговичкоф</span>
        </NavLink>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({isActive})=>`hover:text-brand-blue ${isActive?'text-brand-blue font-semibold':''}`}>Главная</NavLink>
          <NavLink to="/order" className={({isActive})=>`hover:text-brand-blue ${isActive?'text-brand-blue font-semibold':''}`}>Сделать заказ</NavLink>
          <NavLink to="/payment" className={({isActive})=>`hover:text-brand-blue ${isActive?'text-brand-blue font-semibold':''}`}>Оплата</NavLink>
          <NavLink to="/terms" className={({isActive})=>`hover:text-brand-blue ${isActive?'text-brand-blue font-semibold':''}`}>Условия</NavLink>
          <NavLink to="/help" className={({isActive})=>`hover:text-brand-blue ${isActive?'text-brand-blue font-semibold':''}`}>Помощь</NavLink>
        </nav>
        <div className="hidden md:block">
          <NavLink to="/order" className="inline-flex items-center px-4 py-2 rounded bg-brand-red text-white font-semibold shadow hover:opacity-90">Сделать заказ</NavLink>
        </div>
        <button aria-label="menu" className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded border" onClick={()=>setOpen(v=>!v)}>
          <span className="i">≡</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container-p py-3 flex flex-col gap-3">
            <NavLink onClick={()=>setOpen(false)} to="/">Главная</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/order">Сделать заказ</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/payment">Оплата</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/terms">Условия</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/help">Помощь</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/order" className="inline-flex items-center px-4 py-2 rounded bg-brand-red text-white font-semibold shadow w-max">Сделать заказ</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <html lang="ru" />
        <title>Карговичкоф — доставка из Китая</title>
      </Helmet>
      <RateTicker />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-gray-200">
        <div className="container-p py-6 text-sm text-gray-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Карговичкоф</div>
          <div className="flex gap-4">
            <a href="mailto:info@kargovichkof.com" className="hover:text-brand-blue">info@kargovichkof.com</a>
            <a href="tel:+79999999999" className="hover:text-brand-blue">+7 (999) 999-99-99</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


