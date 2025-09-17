import React, { useState } from 'react';

const faqs = [
  {
    question: 'Какие товары можно заказать из Китая?',
    answer: 'Мы работаем с большинством товаров, включая электронику, одежду, обувь, аксессуары, товары для дома, игрушки и многое другое. Некоторые товары могут иметь ограничения по таможенному законодательству.'
  },
  {
    question: 'Сколько времени занимает доставка?',
    answer: 'Сроки доставки зависят от выбранного способа транспортировки: авиадоставка - 3-7 дней, автодоставка - 7-14 дней, железнодорожная доставка - 14-21 день. Время может увеличиться из-за таможенного оформления.'
  },
  {
    question: 'Как рассчитывается стоимость доставки?',
    answer: 'Стоимость зависит от веса и объёма груза, выбранного способа доставки, типа товара и дополнительных услуг (упаковка, таможенное оформление). Используйте наш калькулятор для предварительного расчёта.'
  },
  {
    question: 'Нужно ли платить таможенные пошлины?',
    answer: 'Да, при ввозе товаров в Россию необходимо уплачивать таможенные пошлины и НДС. Мы поможем рассчитать точную сумму и оформим все необходимые документы.'
  },
  {
    question: 'Как отследить мой заказ?',
    answer: 'После оформления заказа вы получите номер отслеживания. Используйте его в нашем трекере для получения актуальной информации о статусе доставки.'
  },
  {
    question: 'Что делать, если товар пришёл повреждённым?',
    answer: 'Мы страхуем все отправления. В случае повреждения товара при транспортировке, мы компенсируем ущерб в соответствии с условиями страхования. Свяжитесь с нашим менеджером для решения вопроса.'
  },
  {
    question: 'Можно ли изменить адрес доставки после отправки?',
    answer: 'Да, в большинстве случаев можно изменить адрес доставки до прибытия груза в город назначения. Дополнительная плата за изменение адреса составляет 500₽.'
  },
  {
    question: 'Какие документы нужны для таможенного оформления?',
    answer: 'Для физических лиц: паспорт, заявление. Для юридических лиц: учредительные документы, доверенность, заявление. Мы поможем подготовить все необходимые документы.'
  },
  {
    question: 'Есть ли ограничения по весу и размеру?',
    answer: 'Авиадоставка: до 30 кг, максимальные размеры 120x80x80 см. Автодоставка: до 1000 кг. Железнодорожная: до 20 тонн. Для крупногабаритных грузов возможны индивидуальные решения.'
  },
  {
    question: 'Как происходит оплата?',
    answer: 'Мы принимаем оплату банковскими картами, переводом на расчётный счёт, наличными при получении. Возможна частичная предоплата с доплатой при получении.'
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-p">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о доставке товаров из Китая
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  <span className={`text-2xl text-gray-400 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-brand-blue text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Не нашли ответ на свой вопрос?</h3>
              <p className="text-lg mb-6">
                Наши специалисты готовы помочь вам с любыми вопросами о доставке
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-white text-brand-blue font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Задать вопрос
                </button>
                <button className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-brand-blue transition-colors">
                  Позвонить нам
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
