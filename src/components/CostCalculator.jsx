import React, { useState } from 'react';

const cities = [
  'Гуанчжоу', 'Шэньчжэнь', 'Шанхай', 'Пекин', 'Иу', 'Ханчжоу', 'Нинбо', 'Циндао'
];

const destinations = [
  'Москва', 'Санкт-Петербург', 'Екатеринбург', 'Новосибирск', 'Казань', 'Нижний Новгород', 'Челябинск', 'Самара'
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
    fromCity: '',
    toCity: '',
    weight: '',
    volume: '',
    cargoType: '',
    transportType: '',
    packaging: false,
    customs: false
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateCost = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const weight = parseFloat(formData.weight) || 0;
      const volume = parseFloat(formData.volume) || 0;
      
      if (weight === 0 && volume === 0) {
        setResult({ error: 'Укажите вес или объём груза' });
        setLoading(false);
        return;
      }
      
      const transport = transportTypes.find(t => t.value === formData.transportType);
      const cargo = cargoTypes.find(c => c.value === formData.cargoType);
      
      if (!transport || !cargo) {
        setResult({ error: 'Выберите тип транспорта и груза' });
        setLoading(false);
        return;
      }
      
      // Calculate base cost
      let baseCost = transport.baseRate * Math.max(weight, volume * 200); // 200 kg per m³
      baseCost *= cargo.multiplier;
      
      // Add services
      if (formData.packaging) baseCost += 500;
      if (formData.customs) baseCost += 3000;
      
      // Add margin
      baseCost *= 1.1;
      
      setResult({
        cost: Math.round(baseCost),
        days: transport.days,
        transport: transport.label,
        cargo: cargo.label
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-p">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Калькулятор стоимости
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Рассчитайте стоимость доставки вашего груза из Китая в Россию
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
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
                <span className="text-sm text-gray-700">Услуги упаковки (+500₽)</span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.customs}
                  onChange={(e) => handleInputChange('customs', e.target.checked)}
                  className="mr-3 h-4 w-4 text-brand-blue focus:ring-brand-blue border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">Таможенное оформление (+3000₽)</span>
              </label>
            </div>
            
            <button
              onClick={calculateCost}
              disabled={loading}
              className="w-full bg-brand-blue text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Рассчитываем...' : 'Рассчитать стоимость'}
            </button>
            
            {result && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                {result.error ? (
                  <div className="text-red-600 text-center">{result.error}</div>
                ) : (
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Результат расчёта</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Стоимость доставки</div>
                        <div className="text-2xl font-bold text-brand-gold">{result.cost.toLocaleString()}₽</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Срок доставки</div>
                        <div className="text-2xl font-bold text-brand-blue">{result.days} дней</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Способ</div>
                        <div className="text-lg font-semibold text-gray-900">{result.transport}</div>
                      </div>
                    </div>
                    <button className="mt-6 px-8 py-3 bg-brand-gold text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors">
                      Получить коммерческое предложение
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
