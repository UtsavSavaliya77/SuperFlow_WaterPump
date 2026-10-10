import React, { useState } from 'react';
import { 
  ArrowRight, 
  Calculator, 
  ShieldCheck, 
  Drop, 
  Cpu, 
  Gauge, 
  Sparkle, 
  CheckSquareOffset,
  WaveTriangle,
  GearFine,
  Lightning
} from '@phosphor-icons/react';

export const Hero = ({ onOpenCalculator, onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState('cutaway'); // 'cutaway' | 'performance' | 'metallurgy'

  return (
    <section id="overview" className="relative bg-gradient-to-br from-[#EBF5FF] via-[#F0F7FD] to-[#E0F2FE] border-b border-sky-200 overflow-hidden bg-grid-pattern">
      {/* Precision hairline layout structure */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24">
        
        {/* Top Architectural Subheading / Certification Pill */}
        <div className="inline-flex items-center gap-2 border border-sky-300 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 text-xs text-slate-800 font-mono mb-6 shadow-xs">
          <span className="w-2 h-2 bg-[#D9232D]"></span>
          <span className="font-bold text-slate-900 tracking-wider uppercase">INDUSTRIAL FLUID ARCHITECTURE</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-600">ISO 9001:2015 &amp; ISI 8472 COMPLIANT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
              HYDRAULIC MASTERY. <br />
              <span className="text-[#D9232D] underline decoration-2 decoration-[#D9232D]/30 underline-offset-8">
                ZERO COMPROMISE.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              Engineered for the harshest deep-well aquifers, erratic rural grid voltages, and demanding continuous irrigation. 
              <strong className="text-slate-950 font-semibold"> Super Flow Submersible Pumps </strong> 
              combine 100% laser-welded AISI 304/316 stainless hydraulics with high-torque water-cooled motors to deliver up to 
              <span className="text-emerald-700 font-bold"> 32% lower electricity consumption</span> and extreme sand resistance.
            </p>

            {/* Quick Spec Matrix Pill Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-2 max-w-xl font-mono text-xs">
              <div className="border border-sky-200 bg-white p-3 shadow-xs">
                <div className="text-slate-500 text-[10px] uppercase tracking-wider font-semibold">Dynamic Head</div>
                <div className="text-slate-900 font-extrabold text-sm mt-0.5">12 m – 520 m</div>
                <div className="text-slate-600 text-[10px]">Deep Aquifer Extraction</div>
              </div>
              <div className="border border-sky-200 bg-white p-3 shadow-xs">
                <div className="text-slate-500 text-[10px] uppercase tracking-wider font-semibold">Discharge Flow</div>
                <div className="text-slate-900 font-extrabold text-sm mt-0.5">10 – 3,600 LPM</div>
                <div className="text-slate-600 text-[10px]">High Volumetric Yield</div>
              </div>
              <div className="border border-sky-200 bg-white p-3 col-span-2 sm:col-span-1 shadow-xs">
                <div className="text-slate-500 text-[10px] uppercase tracking-wider font-semibold">Metallurgy</div>
                <div className="text-slate-900 font-extrabold text-sm mt-0.5">SS-304 / SS-316</div>
                <div className="text-emerald-700 text-[10px] font-bold">100% Anti-Corrosive</div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#products"
                className="px-6 py-3.5 bg-[#D9232D] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#b81d25] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Explore Pump Series</span>
                <ArrowRight size={15} weight="bold" />
              </a>

              <button
                onClick={onOpenCalculator}
                className="px-6 py-3.5 bg-white text-sky-950 border border-sky-300 text-xs font-mono font-bold tracking-wider hover:bg-sky-50 hover:border-sky-400 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Calculator size={16} />
                <span>Calculate Required HP (Sizer)</span>
              </button>

              <button
                onClick={() => onOpenQuote("Datasheet Request")}
                className="px-4 py-3.5 bg-white border border-slate-300 text-slate-800 hover:text-slate-950 hover:border-slate-400 text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Request Datasheet</span>
              </button>
            </div>

            {/* Micro reassurance badges */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] text-slate-600 font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-600" weight="bold" />
                24 Months Factory Warranty
              </span>
              <span className="flex items-center gap-1.5">
                <Lightning size={14} className="text-amber-600" weight="bold" />
                Voltage Tolerant (280V – 440V)
              </span>
              <span className="flex items-center gap-1.5">
                <Drop size={14} className="text-sky-600" weight="bold" />
                150 g/m³ Anti-Sand Tolerance
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Engineering Stage */}
          <div className="lg:col-span-5">
            <div className="border border-sky-300/80 bg-white shadow-lg">
              
              {/* Stage Top Bar */}
              <div className="bg-slate-900 text-slate-200 px-4 py-2.5 flex items-center justify-between border-b border-slate-800 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D9232D]"></span>
                  <span className="font-semibold tracking-wider text-slate-100">SUPER FLOW | CAD STAGE V4</span>
                </div>
                <div className="text-[10px] text-slate-400">MODEL: SF-4 / SF-6 SERIES</div>
              </div>

              {/* Mode Switcher Tabs */}
              <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-100 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('cutaway')}
                  className={`py-2 px-2 text-center transition-colors border-r border-slate-200 cursor-pointer ${
                    activeTab === 'cutaway'
                      ? 'bg-white text-slate-950 font-bold border-b-2 border-b-[#D9232D]'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Cutaway Architecture
                </button>
                <button
                  onClick={() => setActiveTab('performance')}
                  className={`py-2 px-2 text-center transition-colors border-r border-slate-200 cursor-pointer ${
                    activeTab === 'performance'
                      ? 'bg-white text-slate-950 font-bold border-b-2 border-b-sky-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Head-Discharge Curve
                </button>
                <button
                  onClick={() => setActiveTab('metallurgy')}
                  className={`py-2 px-2 text-center transition-colors cursor-pointer ${
                    activeTab === 'metallurgy'
                      ? 'bg-white text-slate-950 font-bold border-b-2 border-b-emerald-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Material Metallurgy
                </button>
              </div>

              {/* Interactive Stage Content */}
              <div className="p-5 sm:p-6 bg-[#F8FAFC] min-h-[360px] flex flex-col justify-between">
                
                {activeTab === 'cutaway' && (
                  <div className="space-y-4">
                    <div className="relative border border-slate-200 bg-white p-4 shadow-xs">
                      {/* Technical Schematic Graphic representation */}
                      <div className="flex flex-col items-center justify-center py-4">
                        <div className="w-full max-w-[280px] bg-slate-100 border border-slate-300 p-3 space-y-2 relative">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 flex justify-between">
                            <span>Stage Assembly</span>
                            <span className="text-[#D9232D] font-bold">100% SS-304</span>
                          </div>
                          
                          {/* Impeller section */}
                          <div className="bg-sky-50 border border-sky-200 p-2 text-[11px] font-mono flex items-center justify-between">
                            <span className="font-semibold text-sky-900">1. Laser Impeller Stack</span>
                            <span className="text-sky-700 text-[10px]">Anti-Sand Floating</span>
                          </div>
                          
                          {/* Diffuser / NRV */}
                          <div className="bg-slate-50 border border-slate-200 p-2 text-[11px] font-mono flex items-center justify-between">
                            <span className="text-slate-800">2. Hydraulic NRV Valve</span>
                            <span className="text-slate-600 text-[10px]">Zero Water Hammer</span>
                          </div>

                          {/* Splined Shaft */}
                          <div className="bg-amber-50 border border-amber-200 p-2 text-[11px] font-mono flex items-center justify-between">
                            <span className="font-semibold text-amber-900">3. NEMA Spline Shaft</span>
                            <span className="text-amber-700 text-[10px]">DIN 5482 Spec</span>
                          </div>

                          {/* Motor Stator */}
                          <div className="bg-red-50 border border-red-200 p-2 text-[11px] font-mono flex items-center justify-between">
                            <span className="font-semibold text-red-900">4. Poly Copper Stator</span>
                            <span className="text-red-700 text-[10px]">100% Electrolytic</span>
                          </div>

                          {/* Thrust pad */}
                          <div className="bg-emerald-50 border border-emerald-200 p-2 text-[11px] font-mono flex items-center justify-between">
                            <span className="font-semibold text-emerald-900">5. Michell Thrust Pad</span>
                            <span className="text-emerald-700 text-[10px]">45 kN Axial Load</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-center text-[11px] text-slate-500 font-mono mt-2">
                        Precision Submersible Pump Cutaway Cross-Section
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="border border-slate-200 bg-white p-2.5">
                        <span className="text-slate-400 text-[10px] block">COOLING SPEC</span>
                        <span className="font-bold text-slate-800">Water-Filled Wet Type</span>
                      </div>
                      <div className="border border-slate-200 bg-white p-2.5">
                        <span className="text-slate-400 text-[10px] block">ROTOR BALANCE</span>
                        <span className="font-bold text-slate-800">ISO 1940 Grade G2.5</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'performance' && (
                  <div className="space-y-4">
                    <div className="border border-slate-200 bg-white p-4 shadow-xs">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-mono font-bold text-slate-800">H-Q Performance Curve</span>
                        <span className="text-[10px] font-mono text-sky-700 bg-sky-50 px-2 py-0.5 border border-sky-200">
                          η Max = 72%
                        </span>
                      </div>
                      
                      <div className="h-44 w-full relative flex items-end">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 300 120" preserveAspectRatio="none">
                          <line x1="0" y1="30" x2="300" y2="30" stroke="#f1f5f9" strokeWidth="1" />
                          <line x1="0" y1="60" x2="300" y2="60" stroke="#f1f5f9" strokeWidth="1" />
                          <line x1="0" y1="90" x2="300" y2="90" stroke="#f1f5f9" strokeWidth="1" />
                          
                          <path
                            d="M 10 20 Q 150 50, 290 115"
                            fill="none"
                            stroke="#94a3b8"
                            strokeWidth="2"
                            strokeDasharray="4,4"
                          />
                          <path
                            d="M 10 10 Q 160 35, 290 95"
                            fill="none"
                            stroke="#D9232D"
                            strokeWidth="3"
                          />
                          
                          <circle cx="160" cy="35" r="5" fill="#0284C7" stroke="#ffffff" strokeWidth="2" />
                        </svg>
                      </div>

                      <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-200">
                        <span>0 LPM (Shutoff Head)</span>
                        <span className="text-[#0284C7] font-bold">Duty Point (BEP)</span>
                        <span>Max Flow Rate</span>
                      </div>

                      <div className="mt-3 flex items-center justify-between text-[11px] font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-1 bg-[#D9232D]"></span>
                          <span className="font-semibold text-slate-800">Super Flow SF-4/10</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <span className="w-3 h-1 bg-slate-400 border-dashed"></span>
                          <span>Industry Benchmark</span>
                        </div>
                      </div>
                    </div>

                    <div className="border border-sky-100 bg-sky-50/70 p-3 text-xs text-sky-950 font-mono">
                      <strong>Hydraulic Advantage:</strong> Flat head curve maintains stable discharge even when borewell water table drops by 35 meters during peak summer months.
                    </div>
                  </div>
                )}

                {activeTab === 'metallurgy' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="border border-slate-200 bg-white p-3 shadow-xs">
                      <div className="flex justify-between text-slate-900 font-bold">
                        <span>Bowls &amp; Impellers</span>
                        <span className="text-[#D9232D]">AISI 304 / 316 SS</span>
                      </div>
                      <div className="text-slate-500 text-[11px] mt-1">
                        Laser stamped with mirror finish to virtually eliminate turbulent hydraulic shear.
                      </div>
                    </div>

                    <div className="border border-slate-200 bg-white p-3 shadow-xs">
                      <div className="flex justify-between text-slate-900 font-bold">
                        <span>Motor Winding Wire</span>
                        <span className="text-amber-700">100% Poly Copper</span>
                      </div>
                      <div className="text-slate-500 text-[11px] mt-1">
                        Dual coated high dielectric insulation withstands temperatures up to 130°C.
                      </div>
                    </div>

                    <div className="border border-slate-200 bg-white p-3 shadow-xs">
                      <div className="flex justify-between text-slate-900 font-bold">
                        <span>Shaft Metallurgy</span>
                        <span className="text-sky-700">EN-8 / AISI 410 Steel</span>
                      </div>
                      <div className="text-slate-500 text-[11px] mt-1">
                        Ground to &lt; 0.005 mm concentricity to eliminate shaft runout and seal degradation.
                      </div>
                    </div>

                    <div className="border border-slate-200 bg-white p-3 shadow-xs">
                      <div className="flex justify-between text-slate-900 font-bold">
                        <span>Thrust Bearing</span>
                        <span className="text-emerald-700">Carbon vs Hard SS</span>
                      </div>
                      <div className="text-slate-500 text-[11px] mt-1">
                        Self-lubricating tilting pad taking up to 45 kN continuous downward hydraulic force.
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Factory Hydro Tested at 1.5x</span>
                  <button 
                    onClick={() => onOpenQuote("Engineering CAD & Datasheet")}
                    className="text-[#D9232D] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    View Engineering Specs <ArrowRight size={11} />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
