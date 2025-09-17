import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat" />
      </div>
      
      <div className="relative z-20 container-p text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Быстрая и надёжная доставка из Китая
            <span className="block text-brand-gold">для бизнеса и частных заказов</span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Полный цикл логистических услуг: от выкупа товаров до доставки до двери. 
            Сроки от 7 дней, таможенное оформление, страхование груза.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              to="/calculator" 
              className="px-8 py-4 bg-brand-gold text-black font-bold text-lg rounded-lg hover:bg-yellow-500 transition-colors shadow-lg"
            >
              Рассчитать доставку
            </Link>
            <Link 
              to="/tracking" 
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              Отследить груз
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-gold">10+</div>
              <div className="text-sm text-gray-300">лет опыта</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-gold">1000+</div>
              <div className="text-sm text-gray-300">доставок</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-gold">24/7</div>
              <div className="text-sm text-gray-300">поддержка</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-gold">99%</div>
              <div className="text-sm text-gray-300">успешных</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
