import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Карговичкоф — карго из Китая, быстро и выгодно</title>
        <meta name="description" content="Доставка грузов из Китая под ключ: авиа, авто, ж/д. Онлайн-заявка и моментальный номер заказа." />
      </Helmet>
      <section className="bg-gradient-to-b from-white to-blue-50">
        <div className="container-p py-12 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-brand-dark">
              Надёжная доставка из Китая для вашего бизнеса
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              «Карговичкоф» — полный цикл логистики из Китая с прозрачной ценой и сроками.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/order" className="px-6 py-3 rounded bg-brand-red text-white font-semibold shadow hover:opacity-90">Сделать заказ</Link>
              <Link to="/help" className="px-6 py-3 rounded border border-brand-blue text-brand-blue font-semibold hover:bg-white">Помощь</Link>
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-brand-blue"/>Сроки от 7 дней</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-brand-blue"/>Таможенное оформление</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-brand-blue"/>Консолидация и упаковка</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-brand-blue"/>Оплата в юанях и рублях</li>
            </ul>
          </div>
          <div className="h-64 sm:h-80 lg:h-96 rounded-xl bg-[radial-gradient(circle_at_30%_30%,#dbeafe,transparent_60%),linear-gradient(135deg,#0A39A4,#E11D48)]" />
        </div>
      </section>

      <section>
        <div className="container-p py-12 grid md:grid-cols-3 gap-6">
          {[{
            t: 'Авто/Авиа/ЖД', d: 'Подберём оптимальный способ по срокам и бюджету.'
          }, { t: 'Страховка', d: 'Защитим груз на всех этапах перевозки.' }, { t: 'Склад в Китае', d: 'Приём, проверка, консолидация, фотоотчёт.' }].map((c, i) => (
            <div key={i} className="p-6 rounded-xl border bg-white">
              <div className="text-brand-blue font-bold text-lg">{c.t}</div>
              <div className="mt-2 text-gray-700">{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sections inspired by MasterTao with slight changes */}
      <section className="bg-blue-50">
        <div className="container-p py-12">
          <h2 className="text-2xl font-bold">3 простых шага</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[{n:'01',t:'Формирование заказа',d:'Зарегистрируйтесь и заполните заявку.'},{n:'02',t:'Оплата',d:'Оплатите удобным способом.'},{n:'03',t:'Готово',d:'Мы доставим в ваш город.'}].map(s=> (
              <div key={s.n} className="p-6 rounded-xl border bg-white">
                <div className="text-3xl font-extrabold text-brand-blue">{s.n}</div>
                <div className="mt-2 font-bold">{s.t}</div>
                <div className="mt-1 text-gray-700">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Reviews section like MasterTao */}
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

      {/* Platforms section like MasterTao */}
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
    </>
  );
}


