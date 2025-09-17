import React from 'react';

const STEPS = [
  { title: 'Заказ', time: '1 день', icon: '📝', desc: 'Заявка и согласование условий' },
  { title: 'Выкуп/Упаковка', time: '1–3 дня', icon: '📦', desc: 'Проверка, консолидация, упаковка' },
  { title: 'Транспортировка', time: '7–25 дней', icon: '🚛', desc: 'Авиа/ЖД/Море — по задаче' },
  { title: 'Растаможка', time: '1–3 дня', icon: '🧾', desc: 'Оформление и сертификация' },
  { title: 'Доставка', time: '1–5 дней', icon: '📬', desc: 'По России до склада/двери' },
];

export default function StepsTimeline() {
  return (
    <section className="bg-blue-50">
      <div className="container-p py-12">
        <h2 className="text-2xl font-bold">Как мы работаем</h2>
        <ol className="mt-6 grid md:grid-cols-5 gap-4">
          {STEPS.map((s, i) => (
            <li key={i} className="p-5 rounded-xl border bg-white">
              <div className="text-2xl" aria-hidden>{s.icon}</div>
              <div className="mt-2 font-bold">{s.title}</div>
              <div className="text-sm text-gray-700">{s.desc}</div>
              <div className="text-xs text-gray-500 mt-1">Ориентир: {s.time}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


