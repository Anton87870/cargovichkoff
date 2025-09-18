import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const offices = [
  {
    city: 'Санкт-Петербург',
    address: 'г. Санкт-Петербург, ул. Савушкина, д. 83, корп. 3',
    phone: '+7 (812) 234-56-78',
    email: 'spb@kargovichkof.com',
    hours: 'Пн-Пт: 9:00-18:00',
    description: 'Главный офис и склад консолидации'
  }
];

const warehouses = [
  {
    city: 'Гуанчжоу, Китай',
    address: 'ул. Даганси, 13, склад Дагуаньцзя, корпус 1, 1 этаж, 106',
    contact: 'Цзян Янь',
    phone: '+86 133 6743 9399',
    description: 'Основной склад консолидации'
  },
  {
    city: 'Иу, Китай',
    address: 'ул. Линьюнь, 8-й район, 135, 1 этаж, склад K59',
    contact: 'Склад K59',
    phone: '+86 138 1234 5678',
    description: 'Склад для мелких товаров'
  },
  {
    city: 'Маньчжурия, Китай',
    address: 'ул. Хубинь, 5, корпус 7',
    contact: 'Кун Вэйго',
    phone: '+86 186 0675 2726',
    description: 'Приграничный склад'
  }
];

export default function ContactsPage() {
  useEffect(() => {
    // Функция инициализации карты
    const initMap = () => {
      if (window.ymaps) {
        window.ymaps.ready(() => {
          try {
            const map = new window.ymaps.Map('map', {
              center: [59.985, 30.2], // Координаты Санкт-Петербурга
              zoom: 12,
              controls: ['zoomControl', 'fullscreenControl']
            });

            // Добавляем маркер офиса
            const officeMarker = new window.ymaps.Placemark(
              [59.985, 30.2], // Примерные координаты для Савушкина 83к3
              {
                balloonContent: `
                  <div style="padding: 10px;">
                    <h3 style="margin: 0 0 10px 0; color: #0A39A4;">Карговичкоф</h3>
                    <p style="margin: 0 0 5px 0;"><strong>Адрес:</strong> г. Санкт-Петербург, ул. Савушкина, д. 83, корп. 3</p>
                    <p style="margin: 0 0 5px 0;"><strong>Телефон:</strong> +7 (812) 234-56-78</p>
                    <p style="margin: 0 0 5px 0;"><strong>Email:</strong> spb@kargovichkof.com</p>
                    <p style="margin: 0;"><strong>Часы работы:</strong> Пн-Пт: 9:00-18:00</p>
                  </div>
                `,
                hintContent: 'Карговичкоф - Главный офис'
              },
              {
                iconLayout: 'default#image',
                iconImageHref: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iOCIgZmlsbD0iIzBBMzlBNCIvPgo8cGF0aCBkPSJNMTAgMjBIMjJWMTRIMTBWMjBaIiBmaWxsPSIjRTExRDQ4Ii8+CjxwYXRoIGQ9Ik0yMiAxNEgyNFYxOEgyMlYxNFoiIGZpbGw9IiNFMTFENDgiLz4KPHBhdGggZD0iTTggMThIMTBWMTRIOFYxOFoiIGZpbGw9IiNFMTFENDgiLz4KPHBhdGggZD0iTTEwIDE0TDEyIDEwSDIwTDIyIDE0SDEwWiIgZmlsbD0iI0UxMUQ0OCIvPgo8Y2lyY2xlIGN4PSIxMyIgY3k9IjIyIiByPSIyIiBmaWxsPSIjRTExRDQ4Ii8+CjxjaXJjbGUgY3g9IjE5IiBjeT0iMjIiIHI9IjIiIGZpbGw9IiNFMTFENDgiLz4KPHBhdGggZD0iTTE0IDI2TDE2IDI2TDE2IDI4TDE0IDI4TDE0IDI2WiIgZmlsbD0iI0UxMUQ0OCIvPgo8cGF0aCBkPSJNMTYgMjZMMTggMjZMMTggMjhMMTYgMjhMMTYgMjZaIiBmaWxsPSIjRTExRDQ4Ii8+Cjx0ZXh0IHg9IjE2IiB5PSIyOCIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9ImJhc2VsaW5lIj7QmtCwPC90ZXh0Pgo8L3N2Zz4K',
                iconImageSize: [32, 32],
                iconImageOffset: [-16, -16]
              }
            );

            map.geoObjects.add(officeMarker);
          } catch (error) {
            console.error('Ошибка инициализации карты:', error);
            // Показываем fallback если карта не загрузилась
            const mapContainer = document.getElementById('map');
            if (mapContainer) {
              mapContainer.innerHTML = `
                <div class="flex items-center justify-center h-full bg-gray-100 rounded-lg">
                  <div class="text-center text-gray-500">
                    <div class="text-4xl mb-4">🗺️</div>
                    <div>Карта временно недоступна</div>
                    <div class="text-sm mt-2">📍 г. Санкт-Петербург, ул. Савушкина, д. 83, корп. 3</div>
                  </div>
                </div>
              `;
            }
          }
        });
      } else {
        // Если API еще не загружен, ждем
        setTimeout(initMap, 1000);
      }
    };

    // Запускаем инициализацию
    initMap();
  }, []);

  return (
    <>
      <Helmet>
        <title>Контакты и офисы — Карговичкоф</title>
        <meta name="description" content="Наши офисы в России и склады в Китае. Адреса, телефоны, email, график работы. Свяжитесь с нами для консультации по доставке." />
        <script src="https://api-maps.yandex.ru/2.1/?apikey=429137e1-c6ed-40f5-b52d-85fe7cd76a78&lang=ru_RU" type="text/javascript"></script>
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
              
              {/* QR Code for WeChat */}
              <div className="md:col-span-2 text-center">
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">По вопросам обращаться в WeChat</h3>
                  <div className="flex justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <img 
                        src="/images/your-qr-code.png" 
                        alt="QR код для WeChat" 
                        className="w-32 h-32 mx-auto"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Отсканируйте QR-код для добавления в WeChat</p>
                </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наш офис в России</h2>
            <div className="flex justify-center">
              <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{offices[0].city}</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-gray-500">Адрес:</div>
                    <div className="text-gray-700">{offices[0].address}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">Телефон:</div>
                    <a href={`tel:${offices[0].phone}`} className="text-brand-blue hover:text-blue-700">{offices[0].phone}</a>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">Email:</div>
                    <a href={`mailto:${offices[0].email}`} className="text-brand-blue hover:text-blue-700">{offices[0].email}</a>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">Часы работы:</div>
                    <div className="text-gray-700">{offices[0].hours}</div>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <div className="text-sm text-gray-600">{offices[0].description}</div>
                  </div>
                </div>
              </div>
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
          
          {/* Yandex Map */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Мы на карте</h2>
            <div className="rounded-lg overflow-hidden">
              <div 
                id="map" 
                className="w-full h-96"
                style={{ minHeight: '400px' }}
              ></div>
            </div>
            <div className="mt-4 text-center text-sm text-gray-600">
              <p>📍 г. Санкт-Петербург, ул. Савушкина, д. 83, корп. 3 - Главный офис</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
