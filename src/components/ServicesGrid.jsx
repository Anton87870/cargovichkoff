import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: '📦',
    title: 'Консолидация грузов',
    description: 'Объединяем несколько посылок в одну отправку для экономии на доставке',
    features: ['Сбор на складе', 'Фотоотчёт', 'Оптимизация упаковки'],
    price: 'от 500₽'
  },
  {
    icon: '🛒',
    title: 'Выкуп товаров',
    description: 'Помогаем найти и выкупить товары на китайских площадках',
    features: ['Taobao, 1688, Tmall', 'Проверка качества', 'Переговоры с продавцом'],
    price: '5% от стоимости'
  },
  {
    icon: '✈️',
    title: 'Авиадоставка',
    description: 'Быстрая доставка воздушным транспортом',
    features: ['3-7 дней', 'До 30 кг', 'Полная страховка'],
    price: 'от 15₽/кг'
  },
  {
    icon: '🚛',
    title: 'Автодоставка',
    description: 'Экономичная доставка автомобильным транспортом',
    features: ['7-14 дней', 'До 1000 кг', 'Отслеживание'],
    price: 'от 8₽/кг'
  },
  {
    icon: '🚂',
    title: 'Железнодорожная',
    description: 'Доставка по железной дороге для крупных грузов',
    features: ['14-21 день', 'До 20 тонн', 'Контейнерная перевозка'],
    price: 'от 5₽/кг'
  },
  {
    icon: '📋',
    title: 'Таможенное оформление',
    description: 'Полное сопровождение таможенных процедур',
    features: ['Документооборот', 'Расчёт пошлин', 'Сертификация'],
    price: 'от 3000₽'
  },
  {
    icon: '🏠',
    title: 'Доставка до двери',
    description: 'Курьерская доставка в любую точку России',
    features: ['По всей России', 'Курьерская служба', 'СМС-уведомления'],
    price: 'от 500₽'
  },
  {
    icon: '📦',
    title: 'Упаковка и маркировка',
    description: 'Профессиональная упаковка для безопасной перевозки',
    features: ['Защитная упаковка', 'Маркировка', 'Фотофиксация'],
    price: 'от 200₽'
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-p">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр логистических услуг для доставки товаров из Китая в Россию
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
              
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-brand-blue rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-brand-gold">{service.price}</span>
                <Link 
                  to="/services" 
                  className="text-brand-blue hover:text-blue-700 font-medium text-sm"
                >
                  Подробнее →
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
