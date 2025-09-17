import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  return (
    <div className="container-p py-10">
      <Helmet><title>О компании — Карговичкоф</title></Helmet>
      <h1 className="text-3xl font-bold">О компании</h1>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border bg-white">
          <h2 className="font-bold text-lg">Миссия и ценности</h2>
          <p className="mt-2 text-gray-700">Мы обеспечиваем прозрачную и надёжную логистику из Китая, берём на себя выкуп, проверку, упаковку, растаможку и доставку. Ценим сроки, качество сервиса и долгосрочные отношения с клиентами.</p>
        </div>
        <div className="p-6 rounded-xl border bg-white">
          <h2 className="font-bold text-lg">Преимущества</h2>
          <ul className="mt-2 text-gray-700 list-disc list-inside space-y-1">
            <li>Опытная команда и проверенные партнёры</li>
            <li>Гибкие маршруты и способы доставки</li>
            <li>Консолидация и фото/видео отчёты</li>
            <li>Поддержка в оплате и документообороте</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


