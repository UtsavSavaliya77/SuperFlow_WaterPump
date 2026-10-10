import React, { useState } from 'react';
import { 
  Plant, 
  SunDim, 
  Buildings, 
  Factory, 
  ArrowRight, 
  CheckSquareOffset,
  ShieldCheck
} from '@phosphor-icons/react';
import { APPLICATIONS_DATA } from '../data/pumpsData';

export const ApplicationsMatrix = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState(0);

  const getIcon = (name) => {
    switch (name) {
      case 'Plant': return <Plant size={18} weight="bold" />;
      case 'SunDim': return <SunDim size={18} weight="bold" />;
      case 'Buildings': return <Buildings size={18} weight="bold" />;
      case 'Factory': return <Factory size={18} weight="bold" />;
      default: return <Plant size={18} weight="bold" />;
    }
  };

  const current = APPLICATIONS_DATA[activeTab];

  return (
    <section id="applications" className="py-22 bg-gradient-to-b from-[#E0F2FE] via-[#EAF7EE] to-[#E6F4EA] border-b border-emerald-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-emerald-300/60 gap-4">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-800 mb-2 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-emerald-600"></span>
              SECTOR APPLICATIONS &amp; DEPLOYMENT
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              PUMPING SOLUTIONS BY INDUSTRY &amp; SECTOR
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 max-w-md font-mono">
            Purpose-engineered hydraulic solutions tailored to unique hydrological conditions, voltage stability challenges, and head profiles.
          </p>
        </div>

        {/* Sector Navigation Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-emerald-300/80 mb-8 bg-white shadow-sm">
          {APPLICATIONS_DATA.map((app, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={app.id}
                onClick={() => setActiveTab(index)}
                className={`p-4 text-left font-mono transition-all border-b md:border-b-0 border-r border-slate-200 last:border-r-0 cursor-pointer ${
                  isActive 
                    ? 'bg-slate-900 text-white border-t-2 border-t-[#D9232D] font-bold shadow-md' 
                    : 'text-slate-700 hover:text-slate-950 hover:bg-emerald-50/50'
                }`}
              >
                <div className="flex items-center gap-2 text-xs mb-1">
                  <span className={isActive ? 'text-[#D9232D]' : 'text-emerald-700'}>
                    {getIcon(app.iconName)}
                  </span>
                  <span className="text-[10px] text-slate-400">0{index + 1}</span>
                </div>
                <div className="text-xs truncate font-semibold">
                  {app.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Application Feature Card */}
        <div className="border border-emerald-300/80 bg-white shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Column: Technical Narrative & Bullet Points */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span className="text-[#D9232D] font-bold uppercase tracking-wider">
                  SECTOR SPECIFICATION
                </span>
                <span className="bg-emerald-100 text-emerald-950 px-2.5 py-1 border border-emerald-300 font-bold">
                  {current.stats}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-950 mt-2 mb-1">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800 font-mono mb-6 font-medium">
                {current.subtitle}
              </p>

              <p className="text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                {current.description}
              </p>

              {/* Engineering Capabilities Checklist */}
              <div className="space-y-2.5 border-t border-slate-100 pt-6">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Key Hydraulic Advantages:
                </div>
                {current.keyPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 bg-[#D9232D] mt-1.5 flex-shrink-0"></span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Recommendation & Inquiry */}
            <div className="pt-8 mt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                  Recommended Pump Architecture:
                </div>
                <div className="text-xs font-mono font-bold text-slate-900">
                  {current.recommendedModel}
                </div>
              </div>

              <button
                onClick={() => onOpenQuote(`Sector Inquiry: ${current.title}`)}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Request Project Proposal</span>
                <ArrowRight size={13} weight="bold" />
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Photography & Telemetry */}
          <div className="lg:col-span-5 relative bg-slate-100 min-h-[300px] lg:min-h-full overflow-hidden flex flex-col justify-end">
            <img 
              src={current.image} 
              alt={current.title}
              className="absolute inset-0 w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent"></div>
            
            <div className="relative p-6 text-white font-mono text-xs space-y-1">
              <div className="text-[10px] uppercase tracking-wider text-red-300 font-bold">
                FIELD VERIFIED DEPLOYMENT
              </div>
              <div className="text-sm font-bold">
                {current.title}
              </div>
              <div className="text-[11px] text-slate-300">
                Operating 24/7 across diverse soil &amp; water compositions.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
