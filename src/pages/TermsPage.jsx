import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function TermsPage() {
  return (
    <div className="container-p py-10">
      <Helmet>
        <title>Условия — Карговичкоф</title>
        <meta name="description" content="Правила работы и доставки: сроки, страховка, ответственность, хранение." />
      </Helmet>
      <h1 className="text-3xl font-bold">Условия</h1>
      <div className="mt-4 prose max-w-none">
        <h2>Сроки</h2>
        <p>Сроки зависят от маршрута и способа доставки. Мы предоставляем расчёт при оформлении заявки.</p>
        <h2>Страхование</h2>
        <p>Страхование груза по запросу клиента на полную стоимость.</p>
        <h2>Ответственность</h2>
        <p>Мы не перевозим запрещённые к перевозке товары. Клиент подтверждает законность груза.</p>
      </div>
    </div>
  );
}


