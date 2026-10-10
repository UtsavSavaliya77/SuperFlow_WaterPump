import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { PUMP_SERIES } from '../data/pumpsData';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  FileText, 
  ShieldCheck, 
  Drop, 
  Gauge, 
  Lightning, 
  Sparkle,
  PhoneCall,
  Gear,
  Kanban,
  Calculator,
  CheckCircle,
  Cpu
} from '@phosphor-icons/react';

export const ProductDetailPage = ({ onOpenQuote }) => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'curves' | 'metallurgy'

  const product = PUMP_SERIES.find(p => p.id === id) || PUMP_SERIES[0];

  return (
    <PageTransition>
      {/* 1. Top Breadcrumb & Status Bar */}
      <div className="bg-slate-900 text-slate-300 border-b border-slate-800 py-2.5 px-4 sm:px-8 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
            <span className="text-slate-600">/</span>
            <Link to="/products" className="text-slate-400 hover:text-white transition-colors">Products</Link>
            <span className="text-slate-600">/</span>
            <span className="text-white font-bold">{product.name}</span>
          </div>

          <Link to="/products" className="hover:text-red-400 transition-colors flex items-center gap-1 font-semibold text-slate-400">
            <ArrowLeft size={13} /> Return to Lineup
          </Link>
        </div>
      </div>

      {/* 2. Architectural Product Showcase Hero Section */}
      <section className="relative bg-gradient-to-b from-[#F1F5F9] via-slate-50 to-white border-b border-slate-200 bg-grid-pattern pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Model Identifiers & High-Impact Narrative */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="bg-red-50 text-[#D9232D] border border-red-200 px-3 py-1 font-bold">
                  {product.series}
                </span>
                <span className="border border-slate-300 bg-white px-3 py-1 text-slate-700 shadow-xs">
                  Installation Bore: <strong>{product.boreSize}</strong>
                </span>
                <span className="border border-emerald-200 bg-emerald-50 text-emerald-800 px-3 py-1 font-bold">
                  {product.efficiencyRating.split(' ')[0]} Star Certified
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl">
                {product.tagline}
              </p>

              {/* High-Contrast Telemetry Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-xs">
                <div className="border border-slate-200 bg-white p-3.5 shadow-xs">
                  <span className="text-slate-400 text-[10px] uppercase block">Dynamic Head</span>
                  <span className="text-sky-800 font-bold text-base mt-0.5 block">{product.headRange}</span>
                  <span className="text-slate-500 text-[10px]">Aquifer Lifting Span</span>
                </div>
                <div className="border border-slate-200 bg-white p-3.5 shadow-xs">
                  <span className="text-slate-400 text-[10px] uppercase block">Discharge Flow</span>
                  <span className="text-slate-900 font-bold text-base mt-0.5 block">{product.dischargeRange}</span>
                  <span className="text-slate-500 text-[10px]">Volumetric Output</span>
                </div>
                <div className="border border-slate-200 bg-white p-3.5 shadow-xs">
                  <span className="text-slate-400 text-[10px] uppercase block">Motor Rating</span>
                  <span className="text-slate-900 font-bold text-base mt-0.5 block">{product.hpRange}</span>
                  <span className="text-slate-500 text-[10px]">100% Copper Stator</span>
                </div>
                <div className="border border-slate-200 bg-white p-3.5 shadow-xs">
                  <span className="text-slate-400 text-[10px] uppercase block">Sand Tolerance</span>
                  <span className="text-emerald-700 font-bold text-base mt-0.5 block">{product.sandTolerance.split(' ')[2]} g/m³</span>
                  <span className="text-slate-500 text-[10px]">Floating Impeller Kit</span>
                </div>
              </div>

              {/* Direct Reassurances */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] text-slate-500 font-mono pt-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-600" weight="bold" />
                  24-Month Comprehensive Factory Warranty
                </span>
                <span className="flex items-center gap-1.5">
                  <Lightning size={14} className="text-amber-600" weight="bold" />
                  Fluctuating Voltage Buffer (280V – 440V)
                </span>
                <span className="flex items-center gap-1.5">
                  <Drop size={14} className="text-sky-600" weight="bold" />
                  Laser-Welded AISI 304/316 Stainless
                </span>
              </div>
            </div>

            {/* Right Column: Commercial Order & Dispatch Box */}
            <div className="lg:col-span-4 border border-slate-300 bg-white shadow-md p-6 sm:p-7 space-y-5">
              <div className="border-b border-slate-200 pb-3 flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400 uppercase tracking-wider">FACTORY INVENTORY</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 inline-block"></span>
                  READY FOR DISPATCH
                </span>
              </div>

              <div className="text-xs font-mono text-slate-700 space-y-2.5">
                <div className="flex items-start gap-2">
                  <Check size={15} className="text-[#D9232D] mt-0.5 flex-shrink-0" weight="bold" />
                  <span>Immediate 24-hr consignment dispatch from factory stocks</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={15} className="text-[#D9232D] mt-0.5 flex-shrink-0" weight="bold" />
                  <span>Hydrostatic test certificate &amp; serialized barcode included</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={15} className="text-[#D9232D] mt-0.5 flex-shrink-0" weight="bold" />
                  <span>NEMA standard universal spline shaft compatibility</span>
                </div>
              </div>

              <div className="pt-2 space-y-2.5">
                <button
                  onClick={() => onOpenQuote(`Commercial Inquiry: ${product.name}`)}
                  className="w-full py-3.5 bg-[#D9232D] hover:bg-[#be1c25] text-white text-xs font-mono font-bold tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Request Factory Quote &amp; Delivery Date</span>
                  <ArrowRight size={14} weight="bold" />
                </button>

                <Link
                  to="/#calculator-section"
                  className="w-full py-2.5 bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-300 text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Calculator size={15} />
                  <span>Simulate in Pump Sizer Tool</span>
                </Link>
              </div>

              <div className="text-[10px] text-slate-400 text-center font-mono pt-1">
                Wholesale Dealer &amp; EPC Contractor Pricing Available
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Engineering Tabs Section in Soft Slate */}
      <section className="bg-[#F8FAFC] py-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-300 mb-8 font-mono text-xs overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('specs')}
              className={`py-3 px-6 border-b-2 font-bold transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'specs'
                  ? 'border-[#D9232D] text-slate-950 bg-white shadow-xs'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              Technical Engineering Specifications
            </button>
            <button
              onClick={() => setActiveTab('curves')}
              className={`py-3 px-6 border-b-2 font-bold transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'curves'
                  ? 'border-sky-600 text-slate-950 bg-white shadow-xs'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              Hydraulic Head-Flow Performance (H-Q)
            </button>
            <button
              onClick={() => setActiveTab('metallurgy')}
              className={`py-3 px-6 border-b-2 font-bold transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'metallurgy'
                  ? 'border-emerald-600 text-slate-950 bg-white shadow-xs'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              Material Metallurgy &amp; Construction
            </button>
          </div>

          {/* Tab 1: Detailed Specifications Matrix */}
          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 border border-slate-200 bg-white shadow-xs">
                <div className="bg-slate-900 text-white px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider flex justify-between">
                  <span>Electro-Mechanical Parameters</span>
                  <span className="text-[#D9232D]">IS:8472 &amp; IS:9283</span>
                </div>
                <div className="p-6 divide-y divide-slate-100 font-mono text-xs">
                  <div className="grid grid-cols-2 py-3">
                    <span className="text-slate-500">Power Supply Specification:</span>
                    <span className="font-bold text-slate-900">{product.specs.voltage}</span>
                  </div>
                  <div className="grid grid-cols-2 py-3">
                    <span className="text-slate-500">Synchronous Operating Speed:</span>
                    <span className="font-bold text-slate-900">{product.specs.rpm}</span>
                  </div>
                  <div className="grid grid-cols-2 py-3">
                    <span className="text-slate-500">Discharge Outlet Diameter:</span>
                    <span className="font-bold text-slate-900">{product.specs.outletSize}</span>
                  </div>
                  <div className="grid grid-cols-2 py-3">
                    <span className="text-slate-500">Stator Winding Wire:</span>
                    <span className="font-bold text-slate-900">{product.specs.winding}</span>
                  </div>
                  <div className="grid grid-cols-2 py-3">
                    <span className="text-slate-500">Thrust Bearing Architecture:</span>
                    <span className="font-bold text-slate-900">{product.specs.thrustBearing}</span>
                  </div>
                  <div className="grid grid-cols-2 py-3">
                    <span className="text-slate-500">Sand &amp; Silt Tolerance:</span>
                    <span className="font-bold text-emerald-700">{product.sandTolerance}</span>
                  </div>
                  <div className="grid grid-cols-2 py-3">
                    <span className="text-slate-500">Max Permissible Water Temperature:</span>
                    <span className="font-bold text-slate-900">{product.specs.maxWaterTemp}</span>
                  </div>
                  <div className="grid grid-cols-2 py-3">
                    <span className="text-slate-500">Energy Star Conservation Rating:</span>
                    <span className="font-bold text-emerald-700">{product.efficiencyRating}</span>
                  </div>
                </div>
              </div>

              {/* Features Sidebar */}
              <div className="lg:col-span-4 space-y-4">
                <div className="border border-slate-200 bg-white p-6 shadow-xs">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                    <Gear size={15} className="text-[#D9232D]" />
                    Standard Construction Features
                  </h3>
                  <ul className="space-y-3 text-xs text-slate-700 font-sans">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check size={14} className="text-[#D9232D] mt-0.5 flex-shrink-0" weight="bold" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-slate-200 bg-sky-50/70 p-6 text-xs font-mono text-sky-950 shadow-xs">
                  <span className="font-bold block mb-1">Recommended Application:</span>
                  <p className="font-sans leading-relaxed text-sky-900">
                    {product.idealFor}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Hydraulic Performance */}
          {activeTab === 'curves' && (
            <div className="border border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-lg font-bold text-slate-950 font-mono">
                  Hydraulic Performance Profile (H-Q Operating Envelope)
                </h3>
                <p className="text-xs text-slate-500 font-mono mt-1">
                  Measured at 2880 RPM with cold clean water at 20°C as per ISO 9906 Grade 2B testing standards.
                </p>
              </div>

              <div className="h-64 w-full border border-slate-200 bg-slate-50 p-4 relative flex items-end">
                <svg className="w-full h-full" viewBox="0 0 500 180" preserveAspectRatio="none">
                  <line x1="0" y1="45" x2="500" y2="45" stroke="#e2e8f0" strokeWidth="1" />
                  <line x1="0" y1="90" x2="500" y2="90" stroke="#e2e8f0" strokeWidth="1" />
                  <line x1="0" y1="135" x2="500" y2="135" stroke="#e2e8f0" strokeWidth="1" />
                  
                  {/* Curve for this model */}
                  <path
                    d="M 15 20 Q 250 50, 485 160"
                    fill="none"
                    stroke="#D9232D"
                    strokeWidth="3"
                  />
                  <circle cx="250" cy="50" r="6" fill="#0284C7" stroke="#ffffff" strokeWidth="2" />
                </svg>
              </div>

              <div className="grid grid-cols-3 text-center text-xs font-mono border border-slate-200 p-4 bg-slate-50">
                <div>
                  <span className="text-slate-400 block text-[10px]">MIN FLOW / SHUTOFF</span>
                  <span className="font-bold text-slate-900">{product.headRange.split('–')[1] || product.headRange} Shutoff Head</span>
                </div>
                <div className="border-x border-slate-200">
                  <span className="text-slate-400 block text-[10px]">OPTIMAL DUTY POINT</span>
                  <span className="font-bold text-[#D9232D]">Best Efficiency Point (BEP)</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">MAX DISCHARGE</span>
                  <span className="font-bold text-sky-800">{product.dischargeRange.split('–')[1] || product.dischargeRange}</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Metallurgy & Construction */}
          {activeTab === 'metallurgy' && (
            <div className="border border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-lg font-bold text-slate-950 font-mono">
                  Metallurgical Composition &amp; Material Traceability
                </h3>
                <p className="text-xs text-slate-500 font-mono mt-1">
                  Certified chemical composition tested via optical emission spectrometry.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
                <div className="border border-slate-200 p-4 bg-slate-50">
                  <span className="text-slate-400 text-[10px] block">PUMP CASING &amp; BOWLS</span>
                  <span className="font-bold text-slate-950 text-sm block mt-1">{product.metallurgy}</span>
                  <p className="font-sans text-slate-600 text-xs mt-2">
                    Passivated stainless steel with laser-welded joints for zero internal friction loss.
                  </p>
                </div>

                <div className="border border-slate-200 p-4 bg-slate-50">
                  <span className="text-slate-400 text-[10px] block">DRIVE SHAFT</span>
                  <span className="font-bold text-slate-950 text-sm block mt-1">AISI 410 / EN-8 Steel</span>
                  <p className="font-sans text-slate-600 text-xs mt-2">
                    Centerless ground to ±0.005mm ensuring vibration-free dynamic rotation.
                  </p>
                </div>

                <div className="border border-slate-200 p-4 bg-slate-50">
                  <span className="text-slate-400 text-[10px] block">THRUST BEARING ASSEMBLY</span>
                  <span className="font-bold text-slate-950 text-sm block mt-1">Segmental Tilting Pads</span>
                  <p className="font-sans text-slate-600 text-xs mt-2">
                    Hydrodynamic self-aligning pads handle extreme downward axial hydraulic thrust.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </PageTransition>
  );
};
