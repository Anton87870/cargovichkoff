import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import CallbackForm from '../components/CallbackForm.jsx';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Карговичкоф — карго из Китая, быстро и выгодно</title>
        <meta name="description" content="Доставка грузов из Китая под ключ: авиа, авто, ж/д. Онлайн-заявка и моментальный номер заказа." />
      </Helmet>
      <section className="bg-gradient-to-b from-black to-neutral-900">
        <div className="container-p py-12 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              Надёжная доставка из Китая для вашего бизнеса
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              «Карговичкоф» — полный цикл логистики из Китая с прозрачной ценой и сроками.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/order" className="px-6 py-3 rounded bg-brand-gold text-black font-semibold shadow hover:opacity-90">Сделать заказ</Link>
              <Link to="/help" className="px-6 py-3 rounded border border-brand-gold text-brand-gold font-semibold">Помощь</Link>
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-brand-gold"/>Сроки от 7 дней</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-brand-gold"/>Таможенное оформление</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-brand-gold"/>Консолидация и упаковка</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-brand-gold"/>Оплата в юанях и рублях</li>
            </ul>
          </div>
          <div className="h-64 sm:h-80 lg:h-96 rounded-xl bg-[radial-gradient(circle_at_30%_30%,#1f2937,transparent_60%),linear-gradient(135deg,#C9A227,#111111)]" />
        </div>
      </section>

      {/* Callback form */}
      <section className="bg-black">
        <div className="container-p py-12">
          <h2 className="text-2xl font-bold text-brand-gold text-center mb-6">Нужна консультация? Перезвоним вам</h2>
          <CallbackForm />
        </div>
      </section>

      {/* Warehouses */}
      <section className="bg-black">
        <div className="container-p py-12">
          <h2 className="text-2xl font-bold text-brand-gold text-center mb-8">Адреса складов</h2>
          <div className="grid md:grid-cols-2 gap-6 text-white">
            {[{
              title: '满洲里东信果网络贸易有限公司',
              lines: ['地址：内蒙古自治区满洲里市湖滨小区5号楼门市—7','法人：孔炜国','电话：18606752726','收款账号：155672362549','开户银行：中国银行满洲里市分行营业部','银行地址：满洲里一道街26号']
            },{
              title: '满洲里国森货运代理有限公司',
              lines: ['地址：内蒙古自治区满洲里市湖滨小区5号楼门市—14','法人：孔炜国','电话：18606752726']
            },{
              title: '广东省广州市 白云区',
              lines: ['大岗西街13号大管家仓储 仓储楼1栋1楼106','姜岩 电话 13367439399']
            },{
              title: '浙江省金华市义乌市北苑街道',
              lines: ['凌云8区135栋一楼K59库房']
            },{
              title: '黑河市爱辉区',
              lines: ['龙腾路77号华运国际物流（腾冲公园后身老保税库）','李业龙 13846506132 / 17648297102']
            }].map((w,i)=> (
              <div key={i} className="p-5 rounded-xl border border-brand-gold/30 bg-black">
                <div className="font-bold text-brand-gold">{w.title}</div>
                <ul className="mt-2 text-gray-300 text-sm space-y-1">
                  {w.lines.map((l,idx)=>(<li key={idx}>{l}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-p py-12 grid md:grid-cols-3 gap-6">
          {[{
            t: 'Авто/Авиа/ЖД', d: 'Подберём оптимальный способ по срокам и бюджету.'
          }, { t: 'Страховка', d: 'Защитим груз на всех этапах перевозки.' }, { t: 'Склад в Китае', d: 'Приём, проверка, консолидация, фотоотчёт.' }].map((c, i) => (
            <div key={i} className="p-6 rounded-xl border border-brand-gold/30 bg-black text-white">
              <div className="text-brand-gold font-bold text-lg">{c.t}</div>
              <div className="mt-2 text-gray-300">{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sections inspired by MasterTao with slight changes */}
      <section className="bg-black">
        <div className="container-p py-12">
          <h2 className="text-2xl font-bold text-brand-gold">3 простых шага</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[{n:'01',t:'Формирование заказа',d:'Зарегистрируйтесь и заполните заявку.'},{n:'02',t:'Оплата',d:'Оплатите удобным способом.'},{n:'03',t:'Готово',d:'Мы доставим в ваш город.'}].map(s=> (
              <div key={s.n} className="p-6 rounded-xl border border-brand-gold/30 bg-black">
                <div className="text-3xl font-extrabold text-brand-gold">{s.n}</div>
                <div className="mt-2 font-bold text-white">{s.t}</div>
                <div className="mt-1 text-gray-300">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-p py-12">
          <h2 className="text-2xl font-bold text-brand-gold">5 этапов доставки</h2>
          <ol className="mt-6 grid md:grid-cols-5 gap-4 list-decimal list-inside text-white">
            {['Приём на складе в Китае','Проверка и пересчёт','Счёт за доставку','Таможенная очистка','Доставка до вашего города'].map((t,i)=> (
              <li key={i} className="p-4 rounded-xl border border-brand-gold/30 bg-black">{t}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Reviews section like MasterTao */}
      <section className="bg-black">
        <div className="container-p py-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-brand-gold">Отзывы о нашей работе</h2>
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
              <div key={i} className="p-6 rounded-xl border border-brand-gold/30 bg-black text-white">
                <div className="flex justify-between items-start mb-3">
                  <div className="font-semibold text-brand-gold">{review.name}</div>
                  <div className="text-sm text-gray-400">{review.date}</div>
                </div>
                <p className="text-gray-300 text-sm">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News section like MasterTao */}
      <section>
        <div className="container-p py-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-brand-gold">Новости</h2>
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
              <div key={i} className="p-6 rounded-xl border border-brand-gold/30 bg-gradient-to-br from-black to-neutral-900 hover:shadow-[0_0_30px_rgba(201,162,39,0.3)] transition-shadow">
                <div className="text-sm text-brand-gold mb-2">{news.date}</div>
                <h3 className="font-bold text-lg mb-3 text-white">{news.title}</h3>
                <p className="text-gray-300 text-sm">{news.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms section like MasterTao */}
      <section className="bg-black">
        <div className="container-p py-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-brand-gold">Официальный посредник китайских платформ в России</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['TAOBAO', 'TMALL', '1688', 'JD'].map((platform, i) => (
              <div key={i} className="p-6 rounded-xl border border-brand-gold/30 bg-black text-center hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-brand-gold mb-2">{platform}</div>
                <div className="text-sm text-gray-400">{platform.toLowerCase()}.com</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-gray-300 max-w-3xl mx-auto">
            Карговичкоф — это официальный посредник Taobao, Tmall и 1688 в России. 
            Мы предлагаем услуги выкупа и доставки товара из Китая в любой город России по выгодным ценам.
          </p>
        </div>
      </section>

      <section className="bg-black">
        <div className="container-p py-12 text-center">
          <h2 className="text-2xl font-bold text-brand-gold">Готовы к расчёту стоимости?</h2>
          <p className="mt-2 text-gray-300">Заполните короткую форму и получите номер заявки.</p>
          <Link to="/order" className="mt-6 inline-flex px-6 py-3 rounded bg-brand-gold text-black font-semibold shadow hover:opacity-90">Сделать заказ</Link>
        </div>
      </section>
    </>
  );
}


