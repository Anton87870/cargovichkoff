import React, { useState } from 'react';

const cities = [
  'Гуанчжоу', 'Шэньчжэнь', 'Шанхай', 'Пекин', 'Иу', 'Ханчжоу', 'Нинбо', 'Циндао', 'Другое'
];

const destinations = [
  'Москва', 'Санкт-Петербург', 'Екатеринбург', 'Новосибирск', 'Казань', 'Нижний Новгород', 'Челябинск', 'Самара', 'Другое'
];

const cargoTypes = [
  { value: 'electronics', label: 'Электроника', multiplier: 1.2 },
  { value: 'clothing', label: 'Одежда', multiplier: 1.0 },
  { value: 'shoes', label: 'Обувь', multiplier: 1.1 },
  { value: 'accessories', label: 'Аксессуары', multiplier: 1.0 },
  { value: 'home', label: 'Товары для дома', multiplier: 0.9 },
  { value: 'toys', label: 'Игрушки', multiplier: 0.8 },
  { value: 'other', label: 'Другое', multiplier: 1.0 }
];

const transportTypes = [
  { value: 'air', label: 'Авиа', baseRate: 15, days: 3 },
  { value: 'auto', label: 'Авто', baseRate: 8, days: 7 },
  { value: 'rail', label: 'Железная дорога', baseRate: 5, days: 14 }
];

export default function CostCalculator() {
  const [formData, setFormData] = useState({
    fullName: '',
    clientType: '',
    fromCity: '',
    toCity: '',
    customFromCity: '',
    customToCity: '',
    weight: '',
    volume: '',
    cargoValue: '',
    cargoType: '',
    transportType: '',
    packaging: false,
    customs: false,
    productPhoto: null
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Проверяем размер файла (максимум 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Размер файла не должен превышать 5MB');
        return;
      }
      
      // Проверяем тип файла (только изображения)
      if (!file.type.startsWith('image/')) {
        alert('Пожалуйста, выберите файл изображения');
        return;
      }
      
      setFormData(prev => ({ ...prev, productPhoto: file }));
    }
  };

  const sendToManager = () => {
    setLoading(true);
    
    // Валидация обязательных полей
    if (!formData.fullName.trim()) {
      alert('Пожалуйста, укажите ФИО');
      setLoading(false);
      return;
    }
    
    if (!formData.clientType) {
      alert('Пожалуйста, выберите тип клиента');
      setLoading(false);
      return;
    }
    
    const weight = parseFloat(formData.weight) || 0;
    const volume = parseFloat(formData.volume) || 0;
    
    if (weight === 0 && volume === 0) {
      alert('Укажите вес или объём груза');
      setLoading(false);
      return;
    }
    
    const transport = transportTypes.find(t => t.value === formData.transportType);
    const cargo = cargoTypes.find(c => c.value === formData.cargoType);
    
    if (!transport || !cargo) {
      alert('Выберите тип транспорта и груза');
      setLoading(false);
      return;
    }
    
    // Подготовка данных для отправки
    const requestData = {
      fullName: formData.fullName,
      clientType: formData.clientType,
      fromCity: formData.fromCity === 'Другое' ? formData.customFromCity : formData.fromCity,
      toCity: formData.toCity === 'Другое' ? formData.customToCity : formData.toCity,
      weight: formData.weight,
      volume: formData.volume,
      cargoValue: formData.cargoValue,
      cargoType: cargo.label,
      transportType: transport.label,
      packaging: formData.packaging,
      customs: formData.customs,
      productPhoto: formData.productPhoto ? formData.productPhoto.name : null,
      timestamp: new Date().toLocaleString('ru-RU')
    };
    
    // Simulate API call - отправка данных менеджеру
    setTimeout(() => {
      console.log('Данные отправлены менеджеру:', requestData);
      
      // Отправка данных менеджеру в виде таблицы
      sendToManagerEmail(requestData);
      
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-p">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
            Калькулятор стоимости
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Рассчитайте стоимость доставки вашего груза из Китая в Россию
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* Поля ФИО и тип клиента */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ФИО *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="Введите ваше ФИО"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Тип клиента *
                </label>
                <select
                  value={formData.clientType}
                  onChange={(e) => handleInputChange('clientType', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  required
                >
                  <option value="">Выберите тип</option>
                  <option value="individual">Физическое лицо</option>
                  <option value="entrepreneur">ИП</option>
                  <option value="legal">Юридическое лицо</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Город отправления
                </label>
                <select
                  value={formData.fromCity}
                  onChange={(e) => handleInputChange('fromCity', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                >
                  <option value="">Выберите город</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                {formData.fromCity === 'Другое' && (
                  <input
                    type="text"
                    value={formData.customFromCity}
                    onChange={(e) => handleInputChange('customFromCity', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent mt-2"
                    placeholder="Укажите город отправления"
                  />
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Город назначения
                </label>
                <select
                  value={formData.toCity}
                  onChange={(e) => handleInputChange('toCity', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                >
                  <option value="">Выберите город</option>
                  {destinations.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                {formData.toCity === 'Другое' && (
                  <input
                    type="text"
                    value={formData.customToCity}
                    onChange={(e) => handleInputChange('customToCity', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent mt-2"
                    placeholder="Укажите город назначения"
                  />
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Вес (кг)
                </label>
                <input
                  type="number"
                  value={formData.weight}
                  onChange={(e) => handleInputChange('weight', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Объём (м³)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.volume}
                  onChange={(e) => handleInputChange('volume', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="0"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Стоимость груза (₽)
                </label>
                <input
                  type="number"
                  value={formData.cargoValue}
                  onChange={(e) => handleInputChange('cargoValue', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Фото товара
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-blue file:text-white hover:file:bg-blue-700"
                  />
                  {formData.productPhoto && (
                    <div className="mt-2 text-sm text-green-600">
                      ✓ Файл загружен: {formData.productPhoto.name}
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Максимальный размер: 5MB. Поддерживаемые форматы: JPG, PNG, GIF
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Тип груза
                </label>
                <select
                  value={formData.cargoType}
                  onChange={(e) => handleInputChange('cargoType', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                >
                  <option value="">Выберите тип</option>
                  {cargoTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Способ доставки
                </label>
                <select
                  value={formData.transportType}
                  onChange={(e) => handleInputChange('transportType', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                >
                  <option value="">Выберите способ</option>
                  {transportTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.packaging}
                  onChange={(e) => handleInputChange('packaging', e.target.checked)}
                  className="mr-3 h-4 w-4 text-brand-blue focus:ring-brand-blue border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">Услуги упаковки (от 500₽)</span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.customs}
                  onChange={(e) => handleInputChange('customs', e.target.checked)}
                  className="mr-3 h-4 w-4 text-brand-blue focus:ring-brand-blue border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">Таможенное оформление (15000₽ за декларацию, при условии предоставления всех документов)</span>
              </label>
            </div>
            
            <button
              onClick={sendToManager}
              disabled={loading}
              className="w-full bg-brand-blue text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Отправляем запрос...' : 'Отправить запрос менеджеру'}
            </button>
            
            {submitted && (
              <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                <div className="text-center">
                  <div className="text-green-600 text-2xl mb-2">✅</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Запрос отправлен!</h3>
                  <p className="text-green-700">
                    Ваш запрос на расчёт стоимости доставки отправлен менеджеру. 
                    Мы свяжемся с вами в ближайшее время для уточнения деталей и предоставления коммерческого предложения.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Функция для отправки данных менеджеру в виде таблицы
const sendToManagerEmail = (data) => {
  const clientTypeLabels = {
    'individual': 'Физическое лицо',
    'entrepreneur': 'ИП',
    'legal': 'Юридическое лицо'
  };

  const emailContent = `
    <h2>Новый запрос на расчёт стоимости доставки</h2>
    <p><strong>Дата и время:</strong> ${data.timestamp}</p>
    
    <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <tr style="background-color: #f5f5f5;">
        <th style="text-align: left; padding: 10px;">Параметр</th>
        <th style="text-align: left; padding: 10px;">Значение</th>
      </tr>
      <tr>
        <td style="padding: 10px;"><strong>ФИО клиента</strong></td>
        <td style="padding: 10px;">${data.fullName}</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><strong>Тип клиента</strong></td>
        <td style="padding: 10px;">${clientTypeLabels[data.clientType]}</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><strong>Город отправления</strong></td>
        <td style="padding: 10px;">${data.fromCity}</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><strong>Город назначения</strong></td>
        <td style="padding: 10px;">${data.toCity}</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><strong>Вес (кг)</strong></td>
        <td style="padding: 10px;">${data.weight || 'Не указан'}</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><strong>Объём (м³)</strong></td>
        <td style="padding: 10px;">${data.volume || 'Не указан'}</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><strong>Стоимость груза (₽)</strong></td>
        <td style="padding: 10px;">${data.cargoValue || 'Не указана'}</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><strong>Тип груза</strong></td>
        <td style="padding: 10px;">${data.cargoType}</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><strong>Фото товара</strong></td>
        <td style="padding: 10px;">${data.productPhoto || 'Не загружено'}</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><strong>Способ доставки</strong></td>
        <td style="padding: 10px;">${data.transportType}</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><strong>Услуги упаковки</strong></td>
        <td style="padding: 10px;">${data.packaging ? 'Да (от 500₽)' : 'Нет'}</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><strong>Таможенное оформление</strong></td>
        <td style="padding: 10px;">${data.customs ? 'Да (15000₽ за декларацию)' : 'Нет'}</td>
      </tr>
    </table>
    
    <p><strong>Примечание:</strong> Клиент запросил расчёт стоимости доставки. Необходимо связаться с клиентом для уточнения деталей и предоставления коммерческого предложения.</p>
  `;

  // Здесь можно добавить реальную отправку email
  // Например, через EmailJS, SendGrid, или другой сервис
  console.log('Email для менеджера:', emailContent);
  
  // Для демонстрации показываем alert с данными
  alert(`Данные отправлены менеджеру:\n\nФИО: ${data.fullName}\nТип: ${clientTypeLabels[data.clientType]}\nМаршрут: ${data.fromCity} → ${data.toCity}\nГруз: ${data.cargoType} (${data.weight}кг, ${data.volume}м³)\nСтоимость: ${data.cargoValue || 'Не указана'}₽\nФото: ${data.productPhoto || 'Не загружено'}\nТранспорт: ${data.transportType}`);
};