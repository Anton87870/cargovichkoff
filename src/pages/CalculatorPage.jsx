import React from 'react';
import { Helmet } from 'react-helmet-async';
import CostCalculator from '../components/CostCalculator.jsx';

export default function CalculatorPage() {
  return (
    <>
      <Helmet>
        <title>Калькулятор стоимости доставки — Карговичкоф</title>
        <meta name="description" content="Рассчитайте стоимость доставки товаров из Китая в Россию. Удобный калькулятор с учётом веса, объёма, типа груза и способа доставки." />
      </Helmet>
      <div className="py-8">
        <CostCalculator />
      </div>
    </>
  );
}
