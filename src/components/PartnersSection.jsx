import React from 'react';

const partners = [
  {
    name: 'Taobao',
    logo: 'https://img.alicdn.com/imgextra/i1/O1CN01QyQyQy1QyQyQyQyQy_!!6000000000000-0-tps-200-200.jpg',
    description: 'Крупнейшая китайская торговая площадка',
    category: 'Торговые площадки'
  },
  {
    name: '1688.com',
    logo: 'https://img.alicdn.com/imgextra/i1/O1CN01QyQyQy1QyQyQyQyQy_!!6000000000000-0-tps-200-200.jpg',
    description: 'B2B платформа для оптовых закупок',
    category: 'Торговые площадки'
  },
  {
    name: 'Tmall',
    logo: 'https://img.alicdn.com/imgextra/i1/O1CN01QyQyQy1QyQyQyQyQy_!!6000000000000-0-tps-200-200.jpg',
    description: 'Премиум сегмент Alibaba Group',
    category: 'Торговые площадки'
  },
  {
    name: 'JD.com',
    logo: 'https://img.alicdn.com/imgextra/i1/O1CN01QyQyQy1QyQyQyQyQy_!!6000000000000-0-tps-200-200.jpg',
    description: 'Вторая по величине китайская площадка',
    category: 'Торговые площадки'
  },
  {
    name: 'Pinduoduo',
    logo: 'https://img.alicdn.com/imgextra/i1/O1CN01QyQyQy1QyQyQyQyQy_!!6000000000000-0-tps-200-200.jpg',
    description: 'Социальная коммерция и групповые покупки',
    category: 'Торговые площадки'
  },
  {
    name: 'AliExpress',
    logo: 'https://img.alicdn.com/imgextra/i1/O1CN01QyQyQy1QyQyQyQyQy_!!6000000000000-0-tps-200-200.jpg',
    description: 'Международная торговая площадка',
    category: 'Торговые площадки'
  },
  {
    name: 'Poizon',
    logo: 'https://img.alicdn.com/imgextra/i1/O1CN01QyQyQy1QyQyQyQyQy_!!6000000000000-0-tps-200-200.jpg',
    description: 'Платформа для продажи кроссовок и одежды',
    category: 'Торговые площадки'
  },
  {
    name: 'Suning',
    logo: 'https://img.alicdn.com/imgextra/i1/O1CN01QyQyQy1QyQyQyQyQy_!!6000000000000-0-tps-200-200.jpg',
    description: 'Крупная китайская розничная сеть',
    category: 'Торговые площадки'
  },
  {
    name: 'Ozon',
    logo: 'https://img.alicdn.com/imgextra/i1/O1CN01QyQyQy1QyQyQyQyQy_!!6000000000000-0-tps-200-200.jpg',
    description: 'Крупнейший российский маркетплейс',
    category: 'Российские площадки'
  },
  {
    name: 'Wildberries',
    logo: 'https://img.alicdn.com/imgextra/i1/O1CN01QyQyQy1QyQyQyQyQy_!!6000000000000-0-tps-200-200.jpg',
    description: 'Популярный российский маркетплейс',
    category: 'Российские площадки'
  },
  {
    name: 'ООО ХЖЛ',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjwhLS0gWCAtLT4KPHBhdGggZD0iTTQwIDQwTDEwMCA4MEw2MCAxMjBMMTAwIDE2MEw0MCAxMjBMMTAwIDgwWiIgZmlsbD0iIzAwNTAwMCIvPgo8cGF0aCBkPSJNNDAgNDBMMTAwIDgwTDYwIDEyMEwxMDAgMTYwTDQwIDEyMEwxMDAgODBaIiBmaWxsPSIjMDA3N0JCIi8+CjwhLS0gRyAtLT4KPGNpcmNsZSBjeD0iMTMwIiBjeT0iMTAwIiByPSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDA1MDAwIiBzdHJva2Utd2lkdGg9IjgiLz4KPHBhdGggZD0iTTEzMCA2MEwxMzAgMTAwTDE1MCAxMDAiIGZpbGw9IiMwMDUwMDAiLz4KPHBhdGggZD0iTTEzMCA2MEwxMzAgMTAwTDE1MCAxMDAiIGZpbGw9IiMwMDUwMDAiLz4KPCEtLSBMIC0tPgo8cGF0aCBkPSJNMTYwIDQwTDE2MCAxNjBMMjAwIDE2MCIgZmlsbD0iIzAwNTAwMCIgc3Ryb2tlLXdpZHRoPSI4Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTkwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiMzMzMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnhHTExvZ2lzdGljczwvdGV4dD4KPC9zdmc+',
    description: 'Основной партнер по логистике',
    category: 'Логистические партнеры'
  },
  {
    name: 'К2 Forwarding',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjwhLS0gSyAtLT4KPHBhdGggZD0iTTQwIDQwTDQwIDE2MEw4MCAxNjBMODAgMTIwTDEyMCAxMjBMODAgODBMODAgNDBaIiBmaWxsPSIjMDA3N0JCIi8+CjwhLS0gMiAtLT4KPHBhdGggZD0iTTE0MCA0MEwxNDAgODBMMTgwIDgwTDE4MCA0MEwxNDAgNDBaIiBmaWxsPSIjMDA3N0JCIi8+CjxwYXRoIGQ9Ik0xNDAgMTAwTDE0MCAxNDBMMTgwIDE0MEwxODAgMTAwTDE0MCAxMDBaIiBmaWxsPSIjMDA3N0JCIi8+CjxwYXRoIGQ9Ik0xNDAgMTYwTDE0MCAyMDBMMTgwIDIwMEwxODAgMTYwTDE0MCAxNjBaIiBmaWxsPSIjMDA3N0JCIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTkwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiMzMzMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPktGcm9yd2FyZGluZzwvdGV4dD4KPC9zdmc+',
    description: 'Международные грузоперевозки',
    category: 'Транспортные партнеры'
  }
];

export default function PartnersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-p">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Наши партнеры
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы работаем с ведущими торговыми площадками и логистическими компаниями
          </p>
        </div>
        
        {/* Группировка по категориям */}
        <div className="space-y-12">
          {['Торговые площадки', 'Российские площадки', 'Логистические партнеры', 'Транспортные партнеры'].map(category => {
            const categoryPartners = partners.filter(partner => partner.category === category);
            if (categoryPartners.length === 0) return null;
            
            return (
              <div key={category}>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">{category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {categoryPartners.map((partner, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200 group"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                          <img 
                            src={partner.logo} 
                            alt={`Логотип ${partner.name}`}
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                          <div 
                            className="hidden w-full h-full flex items-center justify-center text-2xl font-bold text-brand-blue"
                            style={{ display: 'none' }}
                          >
                            {partner.name.charAt(0)}
                          </div>
                        </div>
                        <h4 className="font-medium text-sm text-gray-800 mb-1">{partner.name}</h4>
                        <p className="text-xs text-gray-500 leading-tight">{partner.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* QR код для XGL */}
        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-xl p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Связь с партнерами</h3>
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img 
                  src="/images/xgl-qr.svg" 
                  alt="QR код XGL Logistics" 
                  className="w-32 h-32 mx-auto"
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Отсканируйте QR-код для связи с XGL Logistics</p>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-12 text-center">
          <div className="bg-brand-blue/5 rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-brand-dark mb-2">
              Почему выбирают нас?
            </h3>
            <p className="text-gray-600 text-sm">
              Мы имеем прямые договоры с ведущими китайскими и российскими площадками, 
              что позволяет нам предлагать выгодные условия и быструю обработку заказов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
