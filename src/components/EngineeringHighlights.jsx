import React from 'react';
import { 
  ShieldCheck, 
  Drop, 
  Lightning, 
  ChartLineUp, 
  Cpu, 
  CheckCircle,
  Gear,
  Kanban
} from '@phosphor-icons/react';
import { COMPANY_METRICS } from '../data/pumpsData';

export const EngineeringHighlights = () => {
  return (
    <section className="bg-[#EAEFF6] border-b border-slate-300 py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-300">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#D9232D] mb-2 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-[#D9232D]"></span>
              METALLURGY &amp; PERFORMANCE BENCHMARKS
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              ENGINEERED FOR EXTREME HYDRODYNAMICS
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-xs sm:text-sm text-slate-700 max-w-md font-mono">
            Designed to solve the real failures in farming and deep extraction: motor burnout from low voltage, sand jamming, and high electricity bills.
          </p>
        </div>

        {/* 4 Quantitative Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {COMPANY_METRICS.map((item, index) => (
            <div 
              key={index} 
              className="border border-slate-300 bg-white p-6 shadow-sm transition-all duration-200 hover:border-slate-400 hover:shadow-md"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-mono tracking-tight flex items-baseline gap-1">
                <span className={index === 0 ? 'text-[#D9232D]' : index === 2 ? 'text-sky-700' : 'text-slate-900'}>
                  {item.value}
                </span>
              </div>
              <div className="mt-2 text-xs font-bold text-slate-900 tracking-wide uppercase">
                {item.label}
              </div>
              <div className="mt-1 text-[11px] text-slate-600 font-mono leading-relaxed">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1 */}
          <div className="border border-slate-300 bg-white p-7 shadow-sm relative hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-red-50 border border-red-200 flex items-center justify-center text-[#D9232D] mb-5">
              <Drop size={22} weight="bold" />
            </div>
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">Pillar 01</div>
            <h3 className="text-base font-bold text-slate-950 mb-3">
              150 g/m³ Anti-Sand Hydraulic Floating Stages
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
              Conventional borewell impellers seize when sandy aquifers scour diffuser clearances. Super Flow integrates dynamic axial float impellers with tungsten carbide wear rings, ejecting abrasive particulates safely without abrasive thermal binding.
            </p>
            <ul className="text-xs font-mono text-slate-800 space-y-1.5 border-t border-slate-100 pt-3">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D9232D]"></span>
                Noryl GFN2 &amp; SS-304 Impellers
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D9232D]"></span>
                Zero Sand Seizure Warranty
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="border border-slate-300 bg-white p-7 shadow-sm relative hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 mb-5">
              <Lightning size={22} weight="bold" />
            </div>
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">Pillar 02</div>
            <h3 className="text-base font-bold text-slate-950 mb-3">
              280V – 440V Wide Voltage Fluctuation Immunity
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
              Rural grids often experience severe voltage drop and phase imbalance. Our high-slot stators are wound with 100% dual-insulated electrolytic copper wire, operating coolly even when grid voltage plummets below nominal limits.
            </p>
            <ul className="text-xs font-mono text-slate-800 space-y-1.5 border-t border-slate-100 pt-3">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-600"></span>
                Water-Cooled Wet Rewindable Stator
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-600"></span>
                Thermal Breakdown Resistance to 130°C
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="border border-slate-300 bg-white p-7 shadow-sm relative hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
              <Gear size={22} weight="bold" />
            </div>
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">Pillar 03</div>
            <h3 className="text-base font-bold text-slate-950 mb-3">
              NEMA Standard Universal Splined Couplings
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
              Built strictly to international NEMA dimensional standards. Super Flow pump wet-ends and motors are completely interchangeable with global drilling and pump rigs, simplifying field servicing, spare replacements, and retrofits.
            </p>
            <ul className="text-xs font-mono text-slate-800 space-y-1.5 border-t border-slate-100 pt-3">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-600"></span>
                Universal 4\" &amp; 6\" Spline Shaft Standard
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-600"></span>
                Michell Self-Aligning Thrust Bearing
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
