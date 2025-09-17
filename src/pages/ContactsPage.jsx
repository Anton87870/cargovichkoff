import React from 'react';
import { Helmet } from 'react-helmet-async';
import CallbackForm from '../components/CallbackForm.jsx';

export default function ContactsPage() {
  return (
    <div className="container-p py-10" id="contact">
      <Helmet><title>Контакты — Карговичкоф</title></Helmet>
      <h1 className="text-3xl font-bold">Контакты</h1>
      <div className="mt-4 grid lg:grid-cols-2 gap-8">
        <div>
          <div className="p-6 rounded-xl border bg-white">
            <h2 className="font-bold text-lg">Напишите нам</h2>
            <div className="text-sm text-gray-700 mt-2">Email: <a className="text-brand-blue" href="mailto:info@kargovichkof.com">info@kargovichkof.com</a></div>
            <div className="text-sm text-gray-700">Телефон: <a className="text-brand-blue" href="tel:+79999999999">+7 (999) 999-99-99</a></div>
            <div className="mt-4">
              <CallbackForm />
            </div>
          </div>
        </div>
        <div className="p-6 rounded-xl border bg-white">
          <h2 className="font-bold text-lg">Офисы и склады</h2>
          <ul className="mt-3 text-sm text-gray-700 space-y-2">
            <li>满洲里东信果网络贸易有限公司 — 地址：内蒙古自治区满洲里市湖滨小区5号楼门市—7; 法人：孔炜国; 电话：18606752726; 收款账号：155672362549; 开户银行：中国银行满洲里市分行营业部; 银行地址：满洲里一道街26号</li>
            <li>满洲里国森货运代理有限公司 — 地址：内蒙古自治区满洲里市湖滨小区5号楼门市—14; 法人：孔炜国; 电话：18606752726</li>
            <li>广东省广州市 白云区 大岗西街13号大管家仓储 仓储楼1栋1楼106 姜岩 电话 13367439399</li>
            <li>浙江省金华市义乌市北苑街道 凌云8区135栋一楼K59库房</li>
            <li>黑河市爱辉区 龙腾路77号华运国际物流（腾冲公园后身老保税库） 李业龙 13846506132 / 17648297102</li>
          </ul>
          <div className="mt-4 aspect-video w-full rounded-lg overflow-hidden">
            <iframe title="map" src="https://www.openstreetmap.org/export/embed.html?bbox=37.6%2C55.6%2C37.9%2C55.9&layer=mapnik" className="w-full h-full border-0" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}


