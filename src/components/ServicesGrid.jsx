import React from 'react';
import { Link } from 'react-router-dom';

// Основная услуга - доставка товаров
const mainService = {
  title: 'Доставка товаров с любой точки Китая до любой точки РФ',
  description: 'Комплексная логистическая услуга по доставке грузов из Китая в Россию любым видом транспорта',
  price: 'от 5₽/кг',
  icon: '🚚',
  features: [
    'Любые виды грузов',
    'Отслеживание в реальном времени',
    'Страхование груза',
    'Полное документальное сопровождение'
  ],
  deliveryTypes: [
    {
      id: 1,
      title: 'Автоперевозка',
      description: 'Экономичная доставка автомобильным транспортом',
      price: 'от 8₽/кг',
      icon: '🚛',
      timeframe: '7-15 дней',
      features: [
        'Минимум 100 кг',
        'Оптимальное соотношение цена/скорость',
        'Габаритные грузы',
        'Доставка до склада'
      ],
      workflow: [
        'Приём груза на складе в Китае',
        'Оформление транспортных документов',
        'Отправка автомобильным транспортом',
        'Доставка на склад в России'
      ]
    },
    {
      id: 2,
      title: 'Авиаперевозка',
      description: 'Быстрая доставка авиатранспортом',
      price: 'от 15₽/кг',
      icon: '✈️',
      timeframe: '3-7 дней',
      features: [
        'Минимум 10 кг',
        'Приоритетная обработка',
        'Экспресс-доставка',
        'Доставка до двери'
      ],
      workflow: [
        'Приём груза на складе в Китае',
        'Оформление авиационных документов',
        'Отправка авиатранспортом',
        'Доставка до двери получателя'
      ]
    },
    {
      id: 3,
      title: 'Ж/Д перевозка',
      description: 'Самый экономичный способ доставки крупных партий',
      price: 'от 5₽/кг',
      icon: '🚂',
      timeframe: '15-25 дней',
      features: [
        'Минимум 200 кг',
        'Экономично для крупных партий',
        'Приоритетная обработка',
        'Доставка на склад'
      ],
      workflow: [
        'Забор груза со склада в Китае',
        'Оформление железнодорожных документов',
        'Отправка железнодорожным транспортом',
        'Доставка на склад в России'
      ]
    }
  ]
};

// Дополнительные услуги
const additionalServices = [
  {
    id: 1,
    title: 'Выкуп товаров',
    description: 'Помогаем найти и выкупить товары на китайских площадках',
    price: '5% от стоимости',
    icon: '🛒',
    features: [
      'Работа с Taobao, 1688, Tmall, JD',
      'Проверка качества товара',
      'Переговоры о скидках',
      'Выгодный курс валют'
    ],
    workflow: [
      'Поиск товара на площадках',
      'Согласование с клиентом',
      'Выкуп товара',
      'Доставка на наш склад'
    ]
  },
  {
    id: 2,
    title: 'Таможенное оформление',
    description: 'Полное сопровождение таможенных процедур',
    price: 'от 3000₽',
    icon: '📋',
    features: [
      'Подготовка всех документов',
      'Расчёт таможенных пошлин',
      'Сертификация товаров',
      'Таможенное сопровождение'
    ],
    workflow: [
      'Анализ товара и документов',
      'Подготовка таможенной декларации',
      'Подача декларации в таможню',
      'Получение разрешений на ввоз'
    ]
  },
  {
    id: 3,
    title: 'Упаковка и маркировка',
    description: 'Профессиональная упаковка и маркировка товаров',
    price: 'от 200₽',
    icon: '📦',
    features: [
      'Защитная упаковка',
      'Фотофиксация процесса',
      'Русская/китайская маркировка',
      'Качественные материалы'
    ],
    workflow: [
      'Анализ товара',
      'Выбор упаковки',
      'Упаковка товара',
      'Маркировка и фотоотчёт'
    ]
  },
  {
    id: 4,
    title: 'Доставка до двери',
    description: 'Курьерская доставка по всей России',
    price: 'от 500₽',
    icon: '🏠',
    features: [
      'Доставка по всей России',
      'Курьерская служба',
      'SMS-уведомления',
      'Страхование груза'
    ],
    workflow: [
      'Приём груза на складе',
      'Сортировка по регионам',
      'Курьерская доставка',
      'Передача получателю'
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

        {/* Основная услуга - доставка товаров */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{mainService.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                {mainService.title}
              </h3>
              <p className="text-lg text-gray-600 mb-4">{mainService.description}</p>
              <div className="text-3xl font-bold text-brand-blue mb-6">{mainService.price}</div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">Особенности:</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {mainService.features.map((feature, index) => (
                  <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/order"
                className="inline-flex items-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
              >
                Заказать доставку
              </Link>
            </div>
          </div>

          {/* Виды доставки */}
          <div className="grid md:grid-cols-3 gap-6">
            {mainService.deliveryTypes.map((delivery) => (
              <div key={delivery.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 text-center">{delivery.icon}</div>
                <h4 className="text-xl font-semibold text-brand-dark mb-2 text-center">{delivery.title}</h4>
                <p className="text-gray-600 mb-4 text-center">{delivery.description}</p>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-brand-blue">{delivery.price}</div>
                  <div className="text-sm text-gray-500">{delivery.timeframe}</div>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-800 mb-2">Особенности:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {delivery.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold text-gray-800 mb-2">Процесс работы:</h5>
                  <div className="space-y-2">
                    {delivery.workflow.map((step, index) => (
                      <div key={index} className="bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm">
                        {index + 1}. {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Дополнительные услуги */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">
            Дополнительные услуги
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h4 className="text-xl font-semibold text-brand-dark mb-2 text-center">{service.title}</h4>
                <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                <div className="text-2xl font-bold text-brand-blue mb-4 text-center">{service.price}</div>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-800 mb-2">Особенности:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-gray-800 mb-2">Процесс работы:</h5>
                  <div className="space-y-2">
                    {service.workflow.map((step, index) => (
                      <div key={index} className="bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm">
                        {index + 1}. {step}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/order"
                  className="w-full bg-brand-blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block"
                >
                  Заказать услугу
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}