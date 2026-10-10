import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { EngineeringHighlights } from '../components/EngineeringHighlights';
import { ProductCarousel } from '../components/ProductCarousel';
import { PumpSelectorCalculator } from '../components/PumpSelectorCalculator';
import { ApplicationsMatrix } from '../components/ApplicationsMatrix';
import { ComparisonTable } from '../components/ComparisonTable';
import { QualityEngineering } from '../components/QualityEngineering';
import { DealerNetwork } from '../components/DealerNetwork';
import { PageTransition } from '../components/PageTransition';
import { 
  Calculator, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Drop,
  Sparkle,
  Kanban
} from '@phosphor-icons/react';

export const HomePage = ({ onSelectProduct, onOpenQuote }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#calculator-section') {
      setTimeout(() => {
        const el = document.getElementById('calculator-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageTransition>
      {/* 1. Hero with Interactive CAD Stage */}
      <Hero 
        onOpenCalculator={scrollToCalculator}
        onOpenQuote={onOpenQuote}
      />

      {/* 2. Engineering Highlights & Quantitative Telemetry */}
      <EngineeringHighlights />

      {/* 3. Featured Pump Series Carousel */}
      <div className="relative">
        <ProductCarousel 
          onSelectProduct={onSelectProduct}
          onOpenQuote={onOpenQuote}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-12 flex justify-end">
          <Link
            to="/products"
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-semibold flex items-center gap-2 tracking-wider transition-colors"
          >
            <span>Explore Complete Product Catalog &amp; Datasheets</span>
            <ArrowRight size={13} weight="bold" />
          </Link>
        </div>
      </div>

      {/* 4. Embedded Hydraulic Head & Pump Sizer Tool */}
      <div id="calculator-section">
        <PumpSelectorCalculator onOpenQuote={onOpenQuote} />
      </div>

      {/* 5. Sector Applications Matrix */}
      <ApplicationsMatrix onOpenQuote={onOpenQuote} />

      {/* 6. Authoritative Benchmark: Super Flow vs Conventional Market Standard */}
      <ComparisonTable onOpenQuote={onOpenQuote} />

      {/* 7. Precision Manufacturing & Quality Lab */}
      <QualityEngineering onOpenQuote={onOpenQuote} />

      {/* 8. Dealer Network & Logistics */}
      <DealerNetwork onOpenQuote={onOpenQuote} />
    </PageTransition>
  );
};
