import React from 'react';
import { Helmet } from 'react-helmet-async';
import TrackingForm from '../components/TrackingForm.jsx';

export default function TrackingPage() {
  return (
    <>
      <Helmet>
        <title>Отслеживание груза — Карговичкоф</title>
        <meta name="description" content="Отследите статус доставки вашего груза из Китая. Введите номер отслеживания для получения актуальной информации о местоположении." />
      </Helmet>
      <div className="py-8">
        <TrackingForm />
      </div>
    </>
  );
}
