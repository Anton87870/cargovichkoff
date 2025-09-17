import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';
import StepsTimeline from '../components/StepsTimeline.jsx';
import CostCalculator from '../components/CostCalculator.jsx';
import TrackingForm from '../components/TrackingForm.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';
import StickyCTA from '../components/StickyCTA.jsx';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Карговичкоф — карго из Китая, быстро и выгодно</title>
        <meta name="description" content="Доставка грузов из Китая под ключ: авиа, авто, ж/д. Онлайн-заявка и моментальный номер заказа." />
      </Helmet>
      <Hero />

      <ServicesGrid />

      <StepsTimeline />
      <CostCalculator />
      <TrackingForm />

      <section>
        <div className="container-p py-12">
          <h2 className="text-2xl font-bold">5 этапов доставки</h2>
          <ol className="mt-6 grid md:grid-cols-5 gap-4 list-decimal list-inside">
            {['Приём на складе в Китае','Проверка и пересчёт','Счёт за доставку','Таможенная очистка','Доставка до вашего города'].map((t,i)=> (
              <li key={i} className="p-4 rounded-xl border bg-white">{t}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Reviews section */}
      <section className="bg-gray-50">
        <div className="container-p py-12">
          <h2 className="text-2xl font-bold text-center mb-8">Отзывы о нашей работе</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              name: 'Андрей',
              date: '14.09.2025',
              text: 'Первый раз заказывал. Всё пришло целое. Но с размерами не угадал немного))'
            }, {
              name: 'Антонов К.М.',
              date: '08.09.2025', 
              text: 'Впервые воспользовался услугами компании. Получилось на отлично. 12 августа сделал заказ, 3 сентября получил. Хорошие сроки.'
            }, {
              name: 'Роман',
              date: '03.09.2025',
              text: 'Оформление заказа произошло удобно и быстро. Товары были надежно запакованы. Первый опыт с доставкой товаром из Китая удался.'
            }].map((review, i) => (
              <div key={i} className="p-6 rounded-xl border bg-white">
                <div className="flex justify-between items-start mb-3">
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.date}</div>
                </div>
                <p className="text-gray-700 text-sm">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News section like MasterTao */}
      <section>
        <div className="container-p py-12">
          <h2 className="text-2xl font-bold text-center mb-8">Новости</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              title: 'Временные задержки на маршруте в Москву',
              date: '15.09.2025',
              text: 'Уважаемые клиенты, сообщаем о профилактических рейдах таможенных служб на одном из транзитных участков маршрута в направлении Москвы.'
            }, {
              title: 'Курс на сайте равен 12.3 рублям за 1 юань',
              date: '10.09.2025',
              text: 'С 4-00 по московскому времени 11.09.2025 курс на сайте равен 12.3 рублям за 1 юань!'
            }, {
              title: 'Выкуп 1% для виртуалок и дебетовых карт',
              date: '13.07.2025',
              text: 'С 15 по 25 июля 2025 года комиссия Карговичкоф за выкуп заказа составит всего 1% вместо привычных 3%.'
            }].map((news, i) => (
              <div key={i} className="p-6 rounded-xl border bg-white hover:shadow-md transition-shadow">
                <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                <h3 className="font-bold text-lg mb-3">{news.title}</h3>
                <p className="text-gray-700 text-sm">{news.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms section */}
      <section className="bg-blue-50">
        <div className="container-p py-12">
          <h2 className="text-2xl font-bold text-center mb-8">Официальный посредник китайских платформ в России</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['TAOBAO', 'TMALL', '1688', 'JD'].map((platform, i) => (
              <div key={i} className="p-6 rounded-xl border bg-white text-center hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-brand-blue mb-2">{platform}</div>
                <div className="text-sm text-gray-600">{platform.toLowerCase()}.com</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-gray-700 max-w-3xl mx-auto">
            Карговичкоф — это официальный посредник Taobao, Tmall и 1688 в России. 
            Мы предлагаем услуги выкупа и доставки товара из Китая в любой город России по выгодным ценам.
          </p>
        </div>
      </section>

      <section className="bg-blue-50">
        <div className="container-p py-12 text-center">
          <h2 className="text-2xl font-bold">Готовы к расчёту стоимости?</h2>
          <p className="mt-2 text-gray-700">Заполните короткую форму и получите номер заявки.</p>
          <Link to="/order" className="mt-6 inline-flex px-6 py-3 rounded bg-brand-red text-white font-semibold shadow hover:opacity-90">Сделать заказ</Link>
        </div>
      </section>
      <FAQAccordion />
      <StickyCTA />
    </>
  );
}


