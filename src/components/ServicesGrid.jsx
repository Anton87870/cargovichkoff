import React from 'react';
import { Link } from 'react-router-dom';

// Краткая информация об услугах для главной страницы
const services = [
  {
    id: 1,
    title: 'Доставка товаров',
    description: 'Комплексная логистическая услуга по доставке грузов из Китая в Россию любым видом транспорта',
    icon: '🚛',
    features: [
      'Автоперевозка',
      'Авиаперевозка', 
      'Ж/Д перевозка'
    ]
  },
  {
    id: 2,
    title: 'Выкуп товаров',
    description: 'Помогаем найти и выкупить товары на китайских площадках',
    icon: '🛍️',
    features: [
      'Taobao, 1688, Tmall, JD',
      'Проверка качества',
      'Переговоры о скидках'
    ]
  },
  {
    id: 3,
    title: 'Таможенное оформление',
    description: 'Полное сопровождение таможенных процедур',
    icon: '📄',
    features: [
      'Подготовка документов',
      'Расчёт пошлин',
      'Сертификация товаров'
    ]
  },
  {
    id: 4,
    title: 'Упаковка и маркировка',
    description: 'Профессиональная упаковка и маркировка товаров',
    icon: '📦',
    features: [
      'Защитная упаковка',
      'Фотофиксация',
      'Русская/китайская маркировка'
    ]
  },
  {
    id: 5,
    title: 'Доставка до двери',
    description: 'Курьерская доставка по всей России',
    icon: '🏠',
    features: [
      'По всей России',
      'Курьерская служба',
      'SMS-уведомления'
    ]
  },
  {
    id: 6,
    title: 'Консолидация грузов',
    description: 'Объединяем несколько посылок в одну отправку',
    icon: '📦',
    features: [
      'Сбор на складе',
      'Оптимизация упаковки',
      'Единый номер отслеживания'
    ]
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-p">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Полный спектр логистических услуг для доставки товаров из Китая в Россию. 
            Мы работаем с любыми типами грузов и предлагаем оптимальные решения.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-brand-dark mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm text-center">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-brand-blue rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col gap-2">
                <Link 
                  to="/services" 
                  className="text-brand-blue hover:text-blue-700 font-medium text-sm text-center py-2"
                >
                  Подробная информация →
                </Link>
                <Link 
                  to="/order" 
                  className="w-full bg-brand-blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Заказать услугу
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center px-8 py-3 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Все услуги
          </Link>
        </div>
      </div>
    </section>
  );
}