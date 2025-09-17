import React from 'react';

const FAQS = [
  { q: 'Какие сроки доставки?', a: 'В среднем от 7 до 30 дней в зависимости от способа (авиа/ЖД/море) и маршрута.' },
  { q: 'Помогаете с выкупом на 1688/Taobao?', a: 'Да, сопровождаем покупку, проверяем продавцов, оформляем оплату.' },
  { q: 'Можно ли оплатить в CNY и RUB?', a: 'Да, принимаем оплату в CNY и RUB, предоставляем реквизиты.' },
  { q: 'Как происходит растаможка?', a: 'Оформляем декларации, сертификацию по необходимости, даём рекомендации.' },
];

export default function FAQAccordion() {
  const [open, setOpen] = React.useState(null);
  return (
    <section>
      <div className="container-p py-12">
        <h2 className="text-2xl font-bold text-center">FAQ</h2>
        <ul className="mt-6 max-w-3xl mx-auto divide-y rounded-xl border bg-white">
          {FAQS.map((f, i) => (
            <li key={i}>
              <button className="w-full text-left p-4 font-semibold flex items-center justify-between" onClick={()=>setOpen(open===i?null:i)}>
                {f.q}
                <span>{open===i?'−':'+'}</span>
              </button>
              {open===i && <div className="px-4 pb-4 text-gray-700">{f.a}</div>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


