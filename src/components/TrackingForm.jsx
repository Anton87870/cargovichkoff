import React, { useState } from 'react';

const mockTrackingData = {
  'KVK-20241201-ABC1': {
    status: 'В пути',
    location: 'Гуанчжоу, Китай',
    progress: 60,
    steps: [
      { status: 'completed', title: 'Заказ принят', date: '2024-12-01', time: '10:30' },
      { status: 'completed', title: 'Товар выкуплен', date: '2024-12-02', time: '14:20' },
      { status: 'completed', title: 'На складе в Китае', date: '2024-12-03', time: '09:15' },
      { status: 'current', title: 'В пути', date: '2024-12-05', time: '16:45' },
      { status: 'pending', title: 'Таможенное оформление', date: null, time: null },
      { status: 'pending', title: 'Доставка получателю', date: null, time: null }
    ]
  },
  'KVK-20241128-XYZ9': {
    status: 'Доставлен',
    location: 'Москва, Россия',
    progress: 100,
    steps: [
      { status: 'completed', title: 'Заказ принят', date: '2024-11-28', time: '11:15' },
      { status: 'completed', title: 'Товар выкуплен', date: '2024-11-29', time: '13:30' },
      { status: 'completed', title: 'На складе в Китае', date: '2024-11-30', time: '10:20' },
      { status: 'completed', title: 'В пути', date: '2024-12-02', time: '08:00' },
      { status: 'completed', title: 'Таможенное оформление', date: '2024-12-05', time: '12:30' },
      { status: 'completed', title: 'Доставлен', date: '2024-12-06', time: '15:45' }
    ]
  }
};

export default function TrackingForm() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrack = () => {
    if (!trackingNumber.trim()) {
      setError('Введите номер отслеживания');
      return;
    }

    setLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      const data = mockTrackingData[trackingNumber.toUpperCase()];
      if (data) {
        setTrackingData(data);
      } else {
        setError('Груз с таким номером не найден. Проверьте правильность ввода.');
      }
      setLoading(false);
    }, 1000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'current': return 'text-blue-600 bg-blue-100';
      case 'pending': return 'text-gray-400 bg-gray-100';
      default: return 'text-gray-400 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return '✓';
      case 'current': return '→';
      case 'pending': return '○';
      default: return '○';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-p">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Отслеживание груза
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Введите номер отслеживания для получения актуальной информации о статусе вашего груза
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <div className="flex gap-4">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Введите номер отслеживания (например: KVK-20241201-ABC1)"
                className="flex-1 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
              />
              <button
                onClick={handleTrack}
                disabled={loading}
                className="px-8 py-4 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Поиск...' : 'Отследить'}
              </button>
            </div>
            
            {error && (
              <div className="mt-4 p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg">
                {error}
              </div>
            )}
          </div>
          
          {trackingData && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Статус: {trackingData.status}
                </h3>
                <p className="text-gray-600">Текущее местоположение: {trackingData.location}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Прогресс доставки</span>
                  <span>{trackingData.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-brand-blue h-2 rounded-full transition-all duration-500"
                    style={{ width: `${trackingData.progress}%` }}
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-900 mb-4">История перемещений</h4>
                {trackingData.steps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${getStatusColor(step.status)}`}>
                      {getStatusIcon(step.status)}
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <h5 className={`font-medium ${step.status === 'current' ? 'text-brand-blue' : step.status === 'completed' ? 'text-gray-900' : 'text-gray-500'}`}>
                          {step.title}
                        </h5>
                        {step.date && (
                          <span className="text-sm text-gray-500">
                            {step.date} {step.time}
                          </span>
                        )}
                      </div>
                      {step.status === 'current' && (
                        <p className="text-sm text-gray-600 mt-1">
                          Груз находится в пути из Китая в Россию
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h5 className="font-bold text-blue-900 mb-2">Нужна помощь?</h5>
                <p className="text-sm text-blue-800 mb-3">
                  Если у вас есть вопросы по доставке или вы хотите изменить адрес доставки, 
                  свяжитесь с нашим менеджером.
                </p>
                <button className="text-brand-blue hover:text-blue-700 font-medium text-sm">
                  Связаться с менеджером →
                </button>
              </div>
            </div>
          )}
          
          {!trackingData && !error && (
            <div className="text-center text-gray-500">
              <p className="mb-4">Примеры номеров для тестирования:</p>
              <div className="space-y-2">
                <button 
                  onClick={() => setTrackingNumber('KVK-20241201-ABC1')}
                  className="block mx-auto text-brand-blue hover:text-blue-700"
                >
                  KVK-20241201-ABC1 (В пути)
                </button>
                <button 
                  onClick={() => setTrackingNumber('KVK-20241128-XYZ9')}
                  className="block mx-auto text-brand-blue hover:text-blue-700"
                >
                  KVK-20241128-XYZ9 (Доставлен)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
