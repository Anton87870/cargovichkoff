import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Карговичкоф — карго из Китая, быстро и выгодно</title>
        <meta name="description" content="Доставка грузов из Китая под ключ: авиа, авто, ж/д. Онлайн-заявка и моментальный номер заказа." />
      </Helmet>
      <section className="bg-gradient-to-b from-white to-blue-50">
        <div className="container-p py-12 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-brand-dark">
              Надёжная доставка из Китая для вашего бизнеса
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              «Карговичкоф» — полный цикл логистики из Китая с прозрачной ценой и сроками.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/order" className="px-6 py-3 rounded bg-brand-red text-white font-semibold shadow hover:opacity-90">Сделать заказ</Link>
              <Link to="/help" className="px-6 py-3 rounded border border-brand-blue text-brand-blue font-semibold hover:bg-white">Помощь</Link>
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-brand-blue"/>Сроки от 7 дней</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-brand-blue"/>Таможенное оформление</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-brand-blue"/>Консолидация и упаковка</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-brand-blue"/>Оплата в юанях и рублях</li>
            </ul>
          </div>
          <div className="h-64 sm:h-80 lg:h-96 rounded-xl bg-[radial-gradient(circle_at_30%_30%,#dbeafe,transparent_60%),linear-gradient(135deg,#0A39A4,#E11D48)]" />
        </div>
      </section>

      <section>
        <div className="container-p py-12 grid md:grid-cols-3 gap-6">
          {[{
            t: 'Авто/Авиа/ЖД', d: 'Подберём оптимальный способ по срокам и бюджету.'
          }, { t: 'Страховка', d: 'Защитим груз на всех этапах перевозки.' }, { t: 'Склад в Китае', d: 'Приём, проверка, консолидация, фотоотчёт.' }].map((c, i) => (
            <div key={i} className="p-6 rounded-xl border bg-white">
              <div className="text-brand-blue font-bold text-lg">{c.t}</div>
              <div className="mt-2 text-gray-700">{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50">
        <div className="container-p py-12 text-center">
          <h2 className="text-2xl font-bold">Готовы к расчёту стоимости?</h2>
          <p className="mt-2 text-gray-700">Заполните короткую форму и получите номер заявки.</p>
          <Link to="/order" className="mt-6 inline-flex px-6 py-3 rounded bg-brand-red text-white font-semibold shadow hover:opacity-90">Сделать заказ</Link>
        </div>
      </section>
    </>
  );
}


