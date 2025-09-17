import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PaymentPage() {
  return (
    <div className="container-p py-10">
      <Helmet>
        <title>Оплата — Карговичкоф</title>
        <meta name="description" content="Условия оплаты: предоплата, безналичные платежи, оплата в юанях и рублях." />
      </Helmet>
      <h1 className="text-3xl font-bold">Оплата</h1>
      <div className="mt-4 prose max-w-none">
        <p>Мы принимаем оплату по безналичному расчёту, а также в CNY и RUB. Возможна поэтапная оплата: предоплата и окончательный расчёт по факту прибытия на склад.</p>
        <h2>Реквизиты</h2>
        <ul>
          <li>ООО «Карговичкоф»</li>
          <li>ИНН: 7700000000</li>
          <li>КПП: 770001001</li>
          <li>р/с: 40702810900000000001</li>
          <li>Банк: ПАО «Банк» БИК 044525225</li>
        </ul>
      </div>
    </div>
  );
}


