import React from 'react';

const SERVICES = [
  { title: 'Консолидация', desc: 'Приём, проверка, объединение посылок на складе', icon: '📦' },
  { title: 'Выкуп товаров', desc: 'Покупка на Taobao, 1688, Tmall с сопровождением', icon: '🛒' },
  { title: 'Доставка морем', desc: 'Экономичная доставка крупногабаритных грузов', icon: '🚢' },
  { title: 'Доставка авиа', desc: 'Самый быстрый способ для срочных грузов', icon: '✈️' },
  { title: 'Железнодорожная', desc: 'Баланс цены и сроков для средних объёмов', icon: '🚆' },
  { title: 'Упаковка', desc: 'Надёжная упаковка, паллетирование, обрешётка', icon: '🎁' },
  { title: 'Таможенное оформление', desc: 'Декларации, сертификация, сопровождение', icon: '🧾' },
  { title: 'Доставка до двери', desc: 'Последняя миля по России, удобная выдача', icon: '🚚' },
];

export default function ServicesGrid() {
  return (
    <section>
      <div className="container-p py-12">
        <h2 className="text-2xl font-bold text-center">Услуги</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <div key={i} className="p-6 rounded-xl border bg-white hover:shadow-md transition-shadow">
              <div className="text-3xl" aria-hidden>{s.icon}</div>
              <div className="mt-2 font-bold">{s.title}</div>
              <div className="mt-1 text-gray-700 text-sm">{s.desc}</div>
              <button className="mt-3 text-brand-blue text-sm font-semibold">Подробнее →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


