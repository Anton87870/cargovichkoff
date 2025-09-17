import React from 'react';
import { Helmet } from 'react-helmet-async';

const offices = [
  {
    city: 'Москва',
    address: 'ул. Тверская, 15, офис 201',
    phone: '+7 (495) 123-45-67',
    email: 'moscow@kargovichkof.com',
    hours: 'Пн-Пт: 9:00-18:00, Сб: 10:00-16:00',
    description: 'Главный офис и склад консолидации'
  },
  {
    city: 'Санкт-Петербург',
    address: 'Невский проспект, 28, офис 305',
    phone: '+7 (812) 234-56-78',
    email: 'spb@kargovichkof.com',
    hours: 'Пн-Пт: 9:00-18:00',
    description: 'Региональное представительство'
  },
  {
    city: 'Екатеринбург',
    address: 'ул. Ленина, 5, офис 102',
    phone: '+7 (343) 345-67-89',
    email: 'ekb@kargovichkof.com',
    hours: 'Пн-Пт: 9:00-17:00',
    description: 'Уральский филиал'
  }
];

const warehouses = [
  {
    city: 'Гуанчжоу, Китай',
    address: '广州市白云区大岗西街13号大管家仓储 仓储楼1栋1楼106',
    contact: '姜岩',
    phone: '+86 133 6743 9399',
    description: 'Основной склад консолидации'
  },
  {
    city: 'Иу, Китай',
    address: '浙江省金华市义乌市北苑街道凌云8区135栋一楼K59库房',
    contact: 'Склад K59',
    phone: '+86 138 1234 5678',
    description: 'Склад для мелких товаров'
  },
  {
    city: '满洲里, Китай',
    address: '内蒙古自治区满洲里市湖滨小区5号楼门市—7',
    contact: '孔炜国',
    phone: '+86 186 0675 2726',
    description: 'Приграничный склад'
  }
];

export default function ContactsPage() {
  return (
    <>
      <Helmet>
        <title>Контакты и офисы — Карговичкоф</title>
        <meta name="description" content="Наши офисы в России и склады в Китае. Адреса, телефоны, email, график работы. Свяжитесь с нами для консультации по доставке." />
      </Helmet>
      
      <div className="py-16 bg-gray-50">
        <div className="container-p">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Контакты
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Свяжитесь с нами любым удобным способом. Мы работаем по всей России и имеем склады в Китае.
            </p>
          </div>
          
          {/* Contact form */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Оставить заявку</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Город</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                <textarea rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent" placeholder="Опишите ваш груз или задайте вопрос"></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <button type="submit" className="px-8 py-3 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                  Отправить заявку
                </button>
              </div>
            </form>
          </div>
          
          {/* Offices in Russia */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наши офисы в России</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offices.map((office, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{office.city}</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-gray-500">Адрес:</div>
                      <div className="text-gray-700">{office.address}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">Телефон:</div>
                      <a href={`tel:${office.phone}`} className="text-brand-blue hover:text-blue-700">{office.phone}</a>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">Email:</div>
                      <a href={`mailto:${office.email}`} className="text-brand-blue hover:text-blue-700">{office.email}</a>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">Часы работы:</div>
                      <div className="text-gray-700">{office.hours}</div>
                    </div>
                    <div className="pt-2 border-t border-gray-100">
                      <div className="text-sm text-gray-600">{office.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Warehouses in China */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наши склады в Китае</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {warehouses.map((warehouse, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{warehouse.city}</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-gray-500">Адрес:</div>
                      <div className="text-gray-700 text-sm">{warehouse.address}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">Контактное лицо:</div>
                      <div className="text-gray-700">{warehouse.contact}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">Телефон:</div>
                      <a href={`tel:${warehouse.phone}`} className="text-brand-blue hover:text-blue-700">{warehouse.phone}</a>
                    </div>
                    <div className="pt-2 border-t border-gray-100">
                      <div className="text-sm text-gray-600">{warehouse.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Map placeholder */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Мы на карте</h2>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-4">🗺️</div>
                <div>Интерактивная карта с нашими офисами</div>
                <div className="text-sm mt-2">(Интеграция с Яндекс.Картами или Google Maps)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
