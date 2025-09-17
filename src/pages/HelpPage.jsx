import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function HelpPage() {
  return (
    <div className="container-p py-10">
      <Helmet>
        <title>Помощь — Карговичкоф</title>
        <meta name="description" content="FAQ, контакты, поддержка клиентов Карговичкоф." />
      </Helmet>
      <h1 className="text-3xl font-bold">Помощь</h1>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border bg-white">
          <h2 className="font-bold text-lg">Частые вопросы</h2>
          <ul className="mt-3 text-gray-700 space-y-2 text-sm">
            <li>— Как рассчитать стоимость? Заполните форму заявки и укажите параметры груза.</li>
            <li>— Можно ли оплатить в юанях? Да, мы принимаем CNY и RUB.</li>
            <li>— Делаете ли вы таможенное оформление? Да, под ключ.</li>
          </ul>
        </div>
        <div className="p-6 rounded-xl border bg-white">
          <h2 className="font-bold text-lg">Контакты</h2>
          <div className="mt-3 text-gray-700 text-sm space-y-2">
            <div>Email: <a className="text-brand-blue" href="mailto:info@kargovichkof.com">info@kargovichkof.com</a></div>
            <div>Телефон: <a className="text-brand-blue" href="tel:+79999999999">+7 (999) 999-99-99</a></div>
            <div>Часы: Пн–Пт 10:00–19:00 МСК</div>
          </div>
        </div>
      </div>
    </div>
  );
}


