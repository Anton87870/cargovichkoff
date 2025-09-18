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
import PartnersSection from '../components/PartnersSection.jsx';
import LazySection from '../components/LazySection.jsx';
import { useCriticalResourcePreloading } from '../hooks/usePerformance.js';

export default function HomePage() {
  // Предзагрузка критических ресурсов
  useCriticalResourcePreloading();

  return (
    <>
      <Helmet>
        <title>Карговичкоф — быстрая и надёжная доставка из Китая</title>
        <meta name="description" content="Профессиональная доставка товаров из Китая в Россию. Авиа, авто, ж/д. Таможенное оформление, страхование, отслеживание. Сроки от 3 дней." />
        <meta property="og:title" content="Карговичкоф — доставка из Китая" />
        <meta property="og:description" content="Быстрая и надёжная доставка товаров из Китая в Россию. Полный цикл логистических услуг." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Hero />

      <LazySection>
        <ServicesGrid />
      </LazySection>

      <LazySection>
        <StepsTimeline />
      </LazySection>

      <LazySection>
        <CostCalculator />
      </LazySection>

      <LazySection>
        <TrackingForm />
      </LazySection>

              <LazySection>
                <PartnersSection />
              </LazySection>

              <LazySection>
                <FAQAccordion />
              </LazySection>

              <StickyCTA />
    </>
  );
}


