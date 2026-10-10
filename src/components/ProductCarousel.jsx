import React, { useState, useRef } from 'react';
import { 
  CaretLeft, 
  CaretRight, 
  ArrowRight, 
  FileText, 
  Check, 
  Drop, 
  Gauge, 
  Sparkle,
  SlidersHorizontal,
  MagnifyingGlass
} from '@phosphor-icons/react';
import { PUMP_SERIES } from '../data/pumpsData';

export const ProductCarousel = ({ onSelectProduct, onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const categories = [
    'All',
    'Borewell Submersible',
    'Solar Submersible',
    'Openwell Submersible',
    'Industrial Dewatering'
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? PUMP_SERIES 
    : PUMP_SERIES.filter(p => p.category === selectedCategory);

  const handleNext = () => {
    if (currentIndex < filteredProducts.length - 1) {
      const next = currentIndex + 1;
      setCurrentIndex(next);
      scrollToCard(next);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prev = currentIndex - 1;
      setCurrentIndex(prev);
      scrollToCard(prev);
    }
  };

  const scrollToCard = (index) => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.children[0]?.clientWidth || 360;
      containerRef.current.scrollTo({
        left: index * (cardWidth + 24),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="products" className="py-20 bg-[#F4F7FB] border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-6 border-b border-slate-300 gap-4">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#D9232D] mb-2 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-[#D9232D]"></span>
              SUPER FLOW PRODUCT LINEUP
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              PRECISION SUBMERSIBLE PUMP SERIES
            </h2>
          </div>

          {/* Carousel Navigation Buttons & Counter */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-600 mr-2">
              Showing <strong className="text-slate-950">{filteredProducts.length}</strong> Models
            </span>
            <div className="flex items-center border border-slate-300 bg-white shadow-xs">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-2.5 text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-white transition-colors border-r border-slate-300 cursor-pointer"
                aria-label="Previous pump"
              >
                <CaretLeft size={16} weight="bold" />
              </button>
              <div className="px-3.5 text-xs font-mono font-bold text-slate-900">
                {String(currentIndex + 1).padStart(2, '0')} / {String(filteredProducts.length).padStart(2, '0')}
              </div>
              <button
                onClick={handleNext}
                disabled={currentIndex >= filteredProducts.length - 1}
                className="p-2.5 text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-white transition-colors cursor-pointer"
                aria-label="Next pump"
              >
                <CaretRight size={16} weight="bold" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-slate-300">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
                if (containerRef.current) containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
              }}
              className={`px-3.5 py-1.5 text-xs font-mono tracking-tight whitespace-nowrap transition-colors border cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white border-slate-900 font-bold shadow-xs'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-slate-500 hover:text-slate-950'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel Reel */}
        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 pt-1"
        >
          {filteredProducts.map((pump, idx) => (
            <div
              key={pump.id}
              className="min-w-[320px] sm:min-w-[380px] max-w-[400px] flex-shrink-0 snap-start border border-slate-300 bg-white hover:border-slate-500 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              {/* Card Header */}
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                  <span className="uppercase tracking-wider font-bold text-[#D9232D]">
                    {pump.series}
                  </span>
                  <span>REF #{idx + 101}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-950 leading-snug">
                  {pump.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 font-sans">
                  {pump.tagline}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="p-6 bg-slate-50/80 space-y-2.5 font-mono text-xs border-b border-slate-200 flex-grow">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Installation Diameter:</span>
                  <span className="font-semibold text-slate-900">{pump.boreSize}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Horsepower Envelope:</span>
                  <span className="font-semibold text-slate-900">{pump.hpRange}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Dynamic Head Range:</span>
                  <span className="font-bold text-sky-800">{pump.headRange}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Discharge Flow Rate:</span>
                  <span className="font-semibold text-slate-900">{pump.dischargeRange}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Impeller Metallurgy:</span>
                  <span className="font-semibold text-slate-800 truncate max-w-[190px]">{pump.metallurgy}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Energy Standard:</span>
                  <span className="font-bold text-emerald-700">{pump.efficiencyRating}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 bg-white grid grid-cols-2 gap-2">
                <button
                  onClick={() => onSelectProduct(pump)}
                  className="py-2.5 px-3 text-xs font-mono font-medium text-slate-800 bg-slate-50 border border-slate-300 hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <FileText size={14} />
                  <span>Full Datasheet</span>
                </button>
                <button
                  onClick={() => onOpenQuote(`Quote Request for ${pump.name}`)}
                  className="py-2.5 px-3 text-xs font-semibold text-white bg-[#D9232D] hover:bg-[#be1c25] transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-xs"
                >
                  <span>Request Quote</span>
                  <ArrowRight size={12} weight="bold" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-8 pt-4 border-t border-slate-300 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 font-mono gap-3">
          <div>
            Need exact impeller stage selection for your borewell depth?
          </div>
          <a
            href="#calculator-section"
            className="text-sky-700 hover:text-sky-900 font-bold underline underline-offset-4 flex items-center gap-1"
          >
            Launch Interactive Hydraulic Sizer Tool <ArrowRight size={12} />
          </a>
        </div>

      </div>
    </section>
  );
};
