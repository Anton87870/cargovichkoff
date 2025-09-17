import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: '📦',
    title: 'Консолидация грузов',
    description: 'Объединяем несколько посылок в одну отправку для экономии на доставке',
    features: [
      'Сбор товаров на нашем складе в Китае',
      'Фотоотчёт по каждому товару',
      'Оптимизация упаковки для экономии места',
      'Единый номер отслеживания для всех товаров'
    ],
    price: 'от 500₽',
    process: ['Получение товаров', 'Проверка и фотофиксация', 'Упаковка в общий груз', 'Отправка']
  },
  {
    icon: '🛒',
    title: 'Выкуп товаров',
    description: 'Помогаем найти и выкупить товары на китайских площадках',
    features: [
      'Работа с Taobao, 1688, Tmall, JD',
      'Проверка качества перед выкупом',
      'Переговоры с продавцом о скидках',
      'Оплата в юанях по выгодному курсу'
    ],
    price: '5% от стоимости',
    process: ['Поиск товара', 'Связь с продавцом', 'Выкуп и оплата', 'Доставка на склад']
  },
  {
    icon: '✈️',
    title: 'Авиадоставка',
    description: 'Быстрая доставка воздушным транспортом',
    features: [
      'Срок доставки: 3-7 дней',
      'Максимальный вес: 30 кг',
      'Полная страховка груза',
      'Приоритетная обработка'
    ],
    price: 'от 15₽/кг',
    process: ['Приём на складе', 'Таможенное оформление', 'Авиаперелёт', 'Доставка получателю']
  },
  {
    icon: '🚛',
    title: 'Автодоставка',
    description: 'Экономичная доставка автомобильным транспортом',
    features: [
      'Срок доставки: 7-14 дней',
      'Максимальный вес: 1000 кг',
      'Отслеживание в реальном времени',
      'Возможность изменения маршрута'
    ],
    price: 'от 8₽/кг',
    process: ['Погрузка в контейнер', 'Транспортировка', 'Таможня', 'Доставка по России']
  },
  {
    icon: '🚂',
    title: 'Железнодорожная доставка',
    description: 'Доставка по железной дороге для крупных грузов',
    features: [
      'Срок доставки: 14-21 день',
      'Максимальный вес: 20 тонн',
      'Контейнерная перевозка',
      'Идеально для крупных партий'
    ],
    price: 'от 5₽/кг',
    process: ['Загрузка в контейнер', 'Ж/д перевозка', 'Таможенное оформление', 'Выгрузка']
  },
  {
    icon: '📋',
    title: 'Таможенное оформление',
    description: 'Полное сопровождение таможенных процедур',
    features: [
      'Подготовка всех документов',
      'Расчёт таможенных пошлин',
      'Сертификация товаров',
      'Сопровождение на таможне'
    ],
    price: 'от 3000₽',
    process: ['Анализ товара', 'Подготовка документов', 'Подача декларации', 'Получение разрешений']
  },
  {
    icon: '🏠',
    title: 'Доставка до двери',
    description: 'Курьерская доставка в любую точку России',
    features: [
      'Доставка по всей России',
      'Курьерская служба',
      'СМС-уведомления о доставке',
      'Возможность переноса времени'
    ],
    price: 'от 500₽',
    process: ['Приём в городе назначения', 'Сортировка', 'Курьерская доставка', 'Вручение получателю']
  },
  {
    icon: '📦',
    title: 'Упаковка и маркировка',
    description: 'Профессиональная упаковка для безопасной перевозки',
    features: [
      'Защитная упаковка для хрупких товаров',
      'Маркировка на русском и китайском языках',
      'Фотофиксация процесса упаковки',
      'Использование качественных материалов'
    ],
    price: 'от 200₽',
    process: ['Анализ товара', 'Выбор упаковки', 'Упаковка', 'Маркировка']
  }
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Услуги доставки из Китая — Карговичкоф</title>
        <meta name="description" content="Полный спектр логистических услуг: консолидация, выкуп товаров, авиа/авто/ж/д доставка, таможенное оформление, упаковка." />
      </Helmet>
      
      <div className="py-16 bg-gray-50">
        <div className="container-p">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Наши услуги
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр логистических услуг для доставки товаров из Китая в Россию. 
              Мы работаем с любыми типами грузов и предлагаем оптимальные решения.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="text-5xl mr-4">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="text-2xl font-bold text-brand-gold">{service.price}</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Что входит в услугу:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Процесс работы:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.process.map((step, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {idx + 1}. {step}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to="/order" 
                    className="inline-flex items-center px-6 py-3 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Заказать услугу
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-brand-blue text-white rounded-xl p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
              <p className="text-xl mb-6">
                Наши специалисты помогут подобрать оптимальный набор услуг для вашего груза
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/calculator" 
                  className="px-8 py-3 bg-white text-brand-blue font-bold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Рассчитать стоимость
                </Link>
                <Link 
                  to="/contacts" 
                  className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-brand-blue transition-colors"
                >
                  Связаться с нами
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
