import React from 'react';
import { 
  Cpu, 
  ShieldCheck, 
  CheckCircle, 
  Certificate, 
  Flask, 
  GearFine, 
  ArrowRight, 
  Drop 
} from '@phosphor-icons/react';

export const QualityEngineering = ({ onOpenQuote }) => {
  const steps = [
    {
      step: "01",
      title: "CNC Laser Impeller Stamping",
      detail: "AISI 304/316 sheet is cut using multi-kilowatt fiber lasers and stamped in high-tonnage progressive dies, ensuring zero hydraulic turbulence and pristine surface smoothness (Ra < 0.8 µm)."
    },
    {
      step: "02",
      title: "Computerized Dynamic Balancing",
      detail: "Every pump rotor and multi-stage impeller assembly is dynamically balanced on micro-sensor balancing rigs to ISO 1940 Grade G2.5, eliminating bearing fatigue and underwater harmonic hum."
    },
    {
      step: "03",
      title: "1.5x Hydrostatic Pressure Testing",
      detail: "Each casing and hydraulic bowl is submerged and subjected to 150% maximum shutoff operating pressure for 30 minutes to verify absolute structural integrity under severe water-hammer conditions."
    },
    {
      step: "04",
      title: "3,000V Submerged Dielectric Hi-Pot",
      detail: "Stator windings undergo submerged insulation breakdown tests at 3,000 Volts AC to prove zero micro-fissures in the dual poly-coated enamel before motor assembly is certified for dispatch."
    }
  ];

  return (
    <section id="engineering" className="py-22 bg-gradient-to-b from-[#EBF0F7] via-[#DFE6EF] to-[#D5DDE7] border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-slate-300 gap-4">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#D9232D] mb-2 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-[#D9232D]"></span>
              R&amp;D LAB &amp; ADVANCED METALLURGY
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              PRECISION MANUFACTURING PROTOCOLS
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 max-w-md font-mono">
            Zero shortcuts. Every Super Flow submersible unit is built with high-grade European testing equipment to ensure uninterrupted multi-year runtime.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((item, idx) => (
            <div 
              key={idx}
              className="border border-slate-300 p-6 bg-white shadow-sm hover:border-slate-500 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl font-extrabold font-mono text-[#D9232D] mb-3">
                  {item.step}
                </div>
                <h3 className="text-sm font-bold text-slate-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>QC PROTOCOL ISO-9001</span>
                <span className="text-emerald-700 font-bold">VERIFIED 100%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certified Standards Strip */}
        <div className="border border-slate-400 bg-slate-900 text-white p-8 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="text-xs font-mono text-red-400 uppercase tracking-widest flex items-center gap-2">
                <Certificate size={16} />
                REGULATORY ACCREDITATIONS &amp; CERTIFICATIONS
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Compliant with Indian &amp; Global Electromechanical Standards
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed max-w-2xl">
                Certified under IS:8472 (Submersible Pump-Sets for Clear, Cold Water), IS:9283 (Submersible Motors), 
                and certified with BEE 5-Star Star Rating for superior energy conservation.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={() => onOpenQuote("Compliance & BIS Certificate Dossier")}
                className="px-6 py-3 bg-[#D9232D] hover:bg-[#be1c25] text-white text-xs font-bold font-mono tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Request Quality Dossier</span>
                <ArrowRight size={13} weight="bold" />
              </button>
              <div className="text-center lg:text-left text-[11px] font-mono text-slate-400">
                Authorized for State Tenders &amp; Govt EPC Projects
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
