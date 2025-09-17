import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline poster="/hero-poster.jpg">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20" />
      </div>
      <div className="container-p py-16 sm:py-24 lg:py-28">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white max-w-3xl">Быстрая и надёжная доставка из Китая для бизнеса и частных заказов</h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl">Выкуп, консолидация, упаковка, таможня и доставка до двери. Сроки от 7 дней в зависимости от способа перевозки.</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link to="/order" className="px-6 py-3 rounded bg-brand-red text-white font-semibold shadow hover:opacity-90">Рассчитать доставку</Link>
          <Link to="/tracking" className="px-6 py-3 rounded border border-white text-white font-semibold">Отследить груз</Link>
        </div>
      </div>
    </section>
  );
}


