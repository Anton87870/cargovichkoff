import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Подача заявки',
    description: 'Заполните форму заказа или отправьте ссылки на товары',
    icon: '📝',
    duration: '5 минут',
    details: ['Онлайн-форма', 'Загрузка ссылок', 'Описание товаров']
  },
  {
    number: '02',
    title: 'Выкуп и проверка',
    description: 'Наши специалисты выкупают товары и проверяют качество',
    icon: '🛒',
    duration: '1-3 дня',
    details: ['Выкуп на площадках', 'Проверка товара', 'Фотоотчёт']
  },
  {
    number: '03',
    title: 'Консолидация',
    description: 'Объединяем все товары в одну отправку на нашем складе',
    icon: '📦',
    duration: '1-2 дня',
    details: ['Сбор на складе', 'Упаковка', 'Маркировка']
  },
  {
    number: '04',
    title: 'Транспортировка',
    description: 'Отправляем груз выбранным способом доставки',
    icon: '🚛',
    duration: '3-21 день',
    details: ['Выбор транспорта', 'Отслеживание', 'Уведомления']
  },
  {
    number: '05',
    title: 'Таможенное оформление',
    description: 'Проходим все таможенные процедуры и оплачиваем пошлины',
    icon: '🏛️',
    duration: '1-3 дня',
    details: ['Документооборот', 'Расчёт пошлин', 'Сертификация']
  },
  {
    number: '06',
    title: 'Доставка получателю',
    description: 'Доставляем груз до указанного адреса',
    icon: '🏠',
    duration: '1-2 дня',
    details: ['Курьерская доставка', 'СМС-уведомления', 'Подпись о получении']
  }
];

export default function StepsTimeline() {
  return (
    <section className="py-16 bg-white">
      <div className="container-p">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Как мы работаем
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Простой и прозрачный процесс доставки товаров из Китая
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-blue rounded-full border-4 border-white z-10" />
                
                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-sm font-bold text-brand-blue mb-2">ШАГ {step.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="text-sm font-medium text-gray-700">Время выполнения:</div>
                    <div className="text-lg font-bold text-brand-gold">{step.duration}</div>
                  </div>
                  
                  <ul className="space-y-2 text-sm text-gray-500">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-brand-blue text-white rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Готовы начать?</h3>
            <p className="text-lg mb-6">Заполните заявку и получите расчёт стоимости доставки</p>
            <button className="px-8 py-3 bg-white text-brand-blue font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Рассчитать стоимость
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
