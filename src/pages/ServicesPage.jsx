import React from 'react';
import { Helmet } from 'react-helmet-async';
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

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Услуги доставки из Китая — Карговичкоф</title>
        <meta name="description" content="Полный спектр логистических услуг: доставка товаров, автоперевозка, авиаперевозка, ж/д перевозка, выкуп товаров, таможенное оформление, упаковка." />
      </Helmet>
      
      <div className="py-16 bg-gray-50">
        <div className="container-p">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-6">
              Наши услуги
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр логистических услуг для доставки товаров из Китая в Россию. 
              Мы работаем с любыми типами грузов и предлагаем оптимальные решения.
            </p>
          </div>

          {/* Основная услуга - доставка товаров */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{mainService.icon}</div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                  {mainService.title}
                </h2>
                <p className="text-lg text-gray-600 mb-4">{mainService.description}</p>
                <div className="text-3xl font-bold text-brand-blue mb-6">{mainService.price}</div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Особенности:</h3>
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
            <div className="grid md:grid-cols-3 gap-8">
              {mainService.deliveryTypes.map((delivery) => (
                <div key={delivery.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className="text-5xl mb-4">{delivery.icon}</div>
                      <h3 className="text-2xl font-bold text-brand-dark mb-2">{delivery.title}</h3>
                      <p className="text-gray-600 mb-4">{delivery.description}</p>
                      <div className="text-2xl font-bold text-brand-blue mb-2">{delivery.price}</div>
                      <div className="text-sm text-gray-500">{delivery.timeframe}</div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Особенности:</h4>
                      <ul className="space-y-2">
                        {delivery.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Процесс работы:</h4>
                      <div className="space-y-2">
                        {delivery.workflow.map((step, idx) => (
                          <div key={idx} className="bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm">
                            {idx + 1}. {step}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Дополнительные услуги */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8 text-center">
              Дополнительные услуги
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {additionalServices.map((service) => (
                <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start mb-6">
                      <div className="text-5xl mr-4">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-brand-dark mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="text-2xl font-bold text-brand-blue">{service.price}</div>
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
                      <div className="space-y-2">
                        {service.workflow.map((step, idx) => (
                          <div key={idx} className="bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm">
                            {idx + 1}. {step}
                          </div>
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