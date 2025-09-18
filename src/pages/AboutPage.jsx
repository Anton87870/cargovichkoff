import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PartnersSection from '../components/PartnersSection.jsx';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>О компании Карговичкоф — 10+ лет опыта в логистике из Китая</title>
        <meta name="description" content="Карговичкоф — более 10 лет опыта в доставке товаров из Китая. Профессиональная команда, проверенные партнёры, полное сопровождение грузов." />
        <meta property="og:title" content="О компании Карговичкоф" />
        <meta property="og:description" content="Более 10 лет опыта в международной логистике. Ваш надёжный партнёр в торговле с Китаем." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-red text-white py-20">
        <div className="container-p">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              О компании «Карговичкоф»
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Более 10 лет надёжной доставки из Китая
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-p">
          <div className="max-w-4xl mx-auto">
            {/* Company Story */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">
                Наша история
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Уже более десяти лет «Карговичкоф» помогает бизнесу доставлять товары из Китая быстро, надёжно и выгодно. Мы специализируемся на перевозке сборных грузов и знаем все нюансы международной логистики — от выбора оптимального маршрута до безопасной консолидации товаров на складе.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  За годы работы мы наладили доверительные отношения с проверенными партнёрами в Китае и по всему миру, что позволяет нам обеспечивать стабильную и прозрачную доставку для клиентов любого масштаба — от небольших интернет-магазинов до крупных компаний.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Наша команда профессионалов не просто организует перевозку — мы создаём решение под конкретные потребности каждого клиента. Мы берём на себя все заботы: проверяем грузы, оптимизируем маршруты, отслеживаем доставку на каждом этапе и обеспечиваем полное сопровождение документов.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  «Карговичкоф» — это не просто логистика. Это ваш надёжный партнёр в международной торговле, который ценит время и деньги клиентов, помогает бизнесу расти и расширять горизонты с Китаем.
                </p>
              </div>
            </div>

            {/* Values & Mission */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-brand-dark mb-4">
                  Наша миссия
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Создавать надёжные мосты между Китаем и Россией, обеспечивая быструю, безопасную и экономически выгодную доставку товаров для развития бизнеса наших клиентов.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-brand-dark mb-4">
                  Наши ценности
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Надёжность и прозрачность</li>
                  <li>• Индивидуальный подход к каждому клиенту</li>
                  <li>• Профессионализм и опыт</li>
                  <li>• Долгосрочные партнёрские отношения</li>
                </ul>
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-gradient-to-r from-brand-blue to-brand-red text-white p-12 rounded-lg mb-16">
              <h3 className="text-3xl font-bold text-center mb-8">
                Наши достижения
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-lg opacity-90">лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">1000+</div>
                  <div className="text-lg opacity-90">довольных клиентов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-lg opacity-90">городов доставки</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">99%</div>
                  <div className="text-lg opacity-90">успешных доставок</div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-brand-dark mb-8 text-center">
                Почему выбирают нас
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Опыт и экспертиза</h4>
                  <p className="text-gray-600">
                    Более 10 лет работы в сфере международной логистики и глубокое знание всех нюансов
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Проверенные партнёры</h4>
                  <p className="text-gray-600">
                    Долгосрочные отношения с надёжными поставщиками и перевозчиками в Китае
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Полное сопровождение</h4>
                  <p className="text-gray-600">
                    От проверки товара до доставки — мы берём на себя все заботы о вашем грузе
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                Готовы начать сотрудничество?
              </h3>
              <p className="text-gray-600 mb-6">
                Свяжитесь с нами для консультации и расчёта стоимости доставки
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/order"
                  className="inline-flex items-center px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Сделать заказ
                </Link>
                <Link
                  to="/calculator"
                  className="inline-flex items-center px-6 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  Рассчитать стоимость
                </Link>
                <Link
                  to="/contacts"
                  className="inline-flex items-center px-6 py-3 border-2 border-brand-blue text-brand-blue font-semibold rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
                >
                  Связаться с нами
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />
    </>
  );
}

