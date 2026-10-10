import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { PUMP_SERIES } from '../data/pumpsData';
import { PumpSelectorCalculator } from '../components/PumpSelectorCalculator';
import { ComparisonTable } from '../components/ComparisonTable';
import { 
  MagnifyingGlass, 
  FileText, 
  ArrowRight, 
  Check, 
  SlidersHorizontal,
  Drop, 
  Gauge, 
  Lightning, 
  Sparkle,
  Calculator,
  CaretDown,
  CaretUp,
  ShieldCheck,
  CheckCircle,
  GearFine
} from '@phosphor-icons/react';

export const ProductsPage = ({ onSelectProduct, onOpenQuote }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showSizer, setShowSizer] = useState(false);

  const categories = [
    'All',
    'Borewell Submersible',
    'Solar Submersible',
    'Openwell Submersible',
    'Industrial Dewatering'
  ];

  const filteredProducts = PUMP_SERIES.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.series.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.metallurgy.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.idealFor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageTransition>
      {/* 1. Architectural Products Hero Section */}
      <section className="relative bg-gradient-to-b from-[#F0F7FF] via-[#F8FAFC] to-white border-b border-slate-200 bg-grid-pattern pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Top Tag & Certification Badge */}
          <div className="inline-flex items-center gap-2 border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-700 font-mono mb-6 shadow-xs">
            <span className="w-2 h-2 bg-[#D9232D]"></span>
            <span className="font-semibold text-slate-900 tracking-wider uppercase">COMMERCIAL FLUID CATALOG 2026</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500">0.5 HP TO 100 HP CONTINUOUS DUTY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
                THE COMPLETE <br />
                <span className="text-[#D9232D] underline decoration-2 decoration-[#D9232D]/30 underline-offset-8">
                  HYDRAULIC LINEUP.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                From 4-inch domestic high-head borehole extractors to 10-inch heavy municipal flood lifting systems. 
                Every Super Flow model is assembled with <strong className="text-slate-900 font-semibold">100% AISI 304/316 laser-welded stainless hydraulics</strong> and high-torque water-cooled motors built to survive harsh sands and voltage drops.
              </p>

              {/* Action buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setShowSizer(!showSizer)}
                  className="px-6 py-3.5 bg-white text-sky-900 border border-sky-300 hover:bg-sky-50 hover:border-sky-400 font-mono text-xs font-bold tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  <Calculator size={16} />
                  <span>{showSizer ? "Hide Hydraulic Sizer" : "Launch Hydraulic Sizer Tool"}</span>
                  {showSizer ? <CaretUp size={14} /> : <CaretDown size={14} />}
                </button>

                <button
                  onClick={() => onOpenQuote("2026 Full Master Catalog PDF")}
                  className="px-5 py-3.5 bg-white border border-slate-300 hover:border-slate-500 text-slate-800 font-mono text-xs font-semibold tracking-wider flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <FileText size={15} />
                  <span>Download Spec Catalog</span>
                </button>
              </div>
            </div>

            {/* Right Column: Architectural Telemetry HUD Box */}
            <div className="lg:col-span-5">
              <div className="border border-slate-300 bg-white shadow-md">
                <div className="bg-slate-900 text-white px-5 py-3 flex items-center justify-between text-xs font-mono border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500"></span>
                    <span className="font-bold tracking-wider">PORTFOLIO TELEMETRY</span>
                  </div>
                  <span className="text-slate-400 text-[10px]">6 STANDARDIZED SERIES</span>
                </div>

                <div className="p-6 bg-slate-50/70 divide-y divide-slate-200 text-xs font-mono space-y-3">
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-slate-500">Dynamic Head Span:</span>
                    <span className="text-slate-950 font-bold text-sm">12 m – 520 m</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-slate-500">Discharge Flow Capacity:</span>
                    <span className="text-slate-950 font-bold text-sm">10 – 3,600 LPM</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-slate-500">Impeller Metallurgy:</span>
                    <span className="text-[#D9232D] font-bold">AISI 304 / 316 Stainless</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-slate-500">Energy Class Certification:</span>
                    <span className="text-emerald-700 font-bold">BEE 5-Star / IE3 Class</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-slate-500">Sand &amp; Silt Tolerance:</span>
                    <span className="text-slate-950 font-bold">Up to 150 g/m³</span>
                  </div>
                </div>

                <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Tested to ISO 9906 Grade 2B</span>
                  <span className="text-[#D9232D] font-bold">24-Month Warranty</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Sizer Drawer (Smooth toggle) */}
      {showSizer && (
        <div className="border-b border-slate-300 animate-in fade-in slide-in-from-top-3 duration-200">
          <PumpSelectorCalculator onOpenQuote={onOpenQuote} />
        </div>
      )}

      {/* 2. Main Product Catalog in Architectural Slate Contrast */}
      <section className="bg-[#F8FAFC] py-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Search & Filter Toolbar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
            
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono tracking-tight whitespace-nowrap transition-colors border cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white border-slate-900 font-bold'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[280px]">
              <MagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by series, HP, or metallurgy..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs font-mono bg-white border border-slate-300 focus:border-slate-900 focus:outline-none shadow-xs"
              />
            </div>

          </div>

          {/* Results Counter */}
          <div className="text-xs font-mono text-slate-500 mb-6 flex items-center justify-between">
            <span>Showing <strong className="text-slate-900">{filteredProducts.length}</strong> Verified Pump Series</span>
            <span>Factory ISO 9001:2015 Tested</span>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((pump, idx) => (
              <div
                key={pump.id}
                className="border border-slate-200 bg-white hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Card Top */}
                <div className="p-6 border-b border-slate-100">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span className="uppercase tracking-wider font-semibold text-[#D9232D]">
                      {pump.series}
                    </span>
                    <span>REF #{idx + 101}</span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-950 leading-snug">
                    <Link to={`/products/${pump.id}`} className="hover:text-[#D9232D] transition-colors">
                      {pump.name}
                    </Link>
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 font-sans">
                    {pump.tagline}
                  </p>
                </div>

                {/* Technical Specifications Matrix */}
                <div className="p-6 bg-slate-50/70 space-y-2 font-mono text-xs border-b border-slate-100 flex-grow">
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Installation Well Size:</span>
                    <span className="font-semibold text-slate-900">{pump.boreSize}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Horsepower Envelope:</span>
                    <span className="font-semibold text-slate-900">{pump.hpRange}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Dynamic Head Range:</span>
                    <span className="font-semibold text-sky-800">{pump.headRange}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Discharge Flow Rate:</span>
                    <span className="font-semibold text-slate-900">{pump.dischargeRange}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Impeller Metallurgy:</span>
                    <span className="font-semibold text-slate-800 truncate max-w-[170px]">{pump.metallurgy}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Energy Class:</span>
                    <span className="font-bold text-emerald-700">{pump.efficiencyRating}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-4 bg-white grid grid-cols-2 gap-2">
                  <Link
                    to={`/products/${pump.id}`}
                    className="py-2.5 px-3 text-xs font-mono font-medium text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors flex items-center justify-center gap-1"
                  >
                    <FileText size={14} />
                    <span>Full Specs</span>
                  </Link>

                  <button
                    onClick={() => onOpenQuote(`Quote Request for ${pump.name}`)}
                    className="py-2.5 px-3 text-xs font-semibold text-white bg-[#D9232D] hover:bg-[#be1c25] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Request Quote</span>
                    <ArrowRight size={12} weight="bold" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Technical Benchmark Matrix embedded on Products */}
      <ComparisonTable onOpenQuote={onOpenQuote} />
    </PageTransition>
  );
};
