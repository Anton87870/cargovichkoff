import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
      isMinimized ? 'transform translate-y-0' : 'transform translate-y-0'
    }`}>
      <div className={`bg-white rounded-lg shadow-2xl border border-gray-200 transition-all duration-300 ${
        isMinimized ? 'w-16 h-16' : 'w-80'
      }`}>
        {isMinimized ? (
          <button
            onClick={() => setIsMinimized(false)}
            className="w-full h-full flex items-center justify-center bg-brand-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span className="text-2xl">💬</span>
          </button>
        ) : (
          <div className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold mr-3">
                  К
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Карговичкоф</h4>
                  <p className="text-sm text-gray-600">Онлайн</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  −
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  ×
                </button>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-700 mb-3">
                Нужна помощь с доставкой? Мы онлайн и готовы ответить на ваши вопросы!
              </p>
              
              <div className="space-y-2">
                <Link
                  to="/calculator"
                  className="block w-full text-center bg-brand-blue text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Рассчитать доставку
                </Link>
                <Link
                  to="/order"
                  className="block w-full text-center border border-brand-blue text-brand-blue py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors"
                >
                  Оставить заявку
                </Link>
              </div>
            </div>
            
            <div className="flex items-center text-xs text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Обычно отвечаем в течение 1 минуты
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
