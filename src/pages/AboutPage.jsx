import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { QualityEngineering } from '../components/QualityEngineering';
import { 
  Buildings, 
  Certificate, 
  Drop, 
  GlobeHemisphereWest, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Cpu, 
  Flask,
  CalendarCheck,
  FileText
} from '@phosphor-icons/react';

export const AboutPage = ({ onOpenQuote }) => {
  return (
    <PageTransition>
      {/* 1. Architectural Heritage & Engineering Hero Section in Warm Sandstone Bronze */}
      <section className="relative bg-gradient-to-br from-[#FDF4EB] via-[#FAF0E6] to-[#F3E7DB] border-b border-amber-200/80 bg-grid-pattern pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 border border-amber-300 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 text-xs text-amber-950 font-mono mb-6 shadow-xs">
            <span className="w-2 h-2 bg-[#D9232D]"></span>
            <span className="font-bold tracking-wider uppercase">METALLURGICAL HERITAGE &amp; R&amp;D</span>
            <span className="text-amber-300">|</span>
            <span className="text-amber-800">HEADQUARTERED IN GUJARAT, INDIA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Vision */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
                FOUNDED ON PRECISION. <br />
                <span className="text-[#D9232D] underline decoration-2 decoration-[#D9232D]/30 underline-offset-8">
                  ENGINEERED TO OUTLAST.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal max-w-2xl">
                Super Flow was created to solve the real failures in deep aquifer pumping: premature sand erosion, motor burnout during rural voltage drops, and excessive electrical consumption. 
                We engineer fluid machinery with pure <strong className="text-slate-950 font-bold">austenitic stainless steel metallurgy</strong> and high-torque water-cooled motors tested under strict European test benches.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenQuote("Factory Visit & Quality Audit Booking")}
                  className="px-6 py-3.5 bg-[#D9232D] hover:bg-[#be1c25] text-white font-mono text-xs font-bold tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <CalendarCheck size={16} />
                  <span>Schedule Factory QC Audit</span>
                </button>

                <button
                  onClick={() => onOpenQuote("Quality Manual & BIS Dossier Request")}
                  className="px-5 py-3.5 bg-white border border-amber-300 hover:border-amber-500 text-slate-900 font-mono text-xs font-semibold tracking-wider flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <FileText size={15} />
                  <span>Download Quality Manual</span>
                </button>
              </div>
            </div>

            {/* Right Column: Telemetry Performance Matrix */}
            <div className="lg:col-span-5">
              <div className="border border-amber-300/80 bg-white shadow-lg">
                <div className="bg-slate-900 text-white px-5 py-3 flex items-center justify-between text-xs font-mono border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#D9232D]"></span>
                    <span className="font-bold tracking-wider">HERITAGE FOOTPRINT</span>
                  </div>
                  <span className="text-slate-400 text-[10px]">ISO 9001:2015</span>
                </div>

                <div className="p-6 bg-[#FCF8F4] divide-y divide-amber-200/60 text-xs font-mono space-y-3">
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-slate-600">Global Export Reach:</span>
                    <span className="text-slate-950 font-bold text-sm">45+ Countries</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-slate-600">Average Electrical Savings:</span>
                    <span className="text-emerald-700 font-bold text-sm">Up to 32% (BEE 5-Star)</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-slate-600">Domestic Touchpoints:</span>
                    <span className="text-slate-950 font-bold text-sm">500+ Authorized Centers</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-slate-600">Hydrostatic Pressure Testing:</span>
                    <span className="text-sky-800 font-bold">100% Units Tested @ 1.5x</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-slate-600">Raw Material Policy:</span>
                    <span className="text-[#D9232D] font-bold">Zero Scrap Re-melting</span>
                  </div>
                </div>

                <div className="p-3 bg-white border-t border-amber-200 flex items-center justify-between text-[11px] font-mono text-slate-600">
                  <span>Tested to IS:8472 &amp; IS:9283</span>
                  <span className="text-emerald-700 font-bold">CE Conformity</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Main Narrative Story in Warm Stone Foundry Tone */}
      <section className="bg-[#F6EFE7] py-18 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono font-bold uppercase text-[#D9232D] tracking-wider">
                OUR MISSION &amp; ORIGIN
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
                Solving the Critical Failures of Deep Groundwater Extraction
              </h2>
              <p className="text-sm text-slate-800 leading-relaxed font-sans">
                For decades, farmers and deep aquifer contractors faced recurring headaches: cast-iron impellers eroding from abrasive sand within months, motors burning out from erratic village voltage swings, and massive electricity bills draining farm profits.
              </p>
              <p className="text-sm text-slate-800 leading-relaxed font-sans">
                <strong>SUPER FLOW SUBMERSIBLE PUMP™</strong> was established to eliminate these compromises. By transitioning from heavy, brittle cast iron to 100% laser-welded austenitic stainless steel, and replacing standard commercial winding with heavy dual-poly coated copper stators, we engineered pumps that run continuously without cavitation or burnout.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-amber-300 font-mono text-xs">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-950 block">45+</span>
                  <span className="text-slate-600 text-[11px] font-semibold">Countries Exported</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#D9232D] block">32%</span>
                  <span className="text-slate-600 text-[11px] font-semibold">Energy Reduction</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-sky-800 block">500+</span>
                  <span className="text-slate-600 text-[11px] font-semibold">Authorized Dealers</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 border border-amber-300 bg-white p-6 shadow-md space-y-4 font-mono text-xs">
              <div className="border-b border-slate-200 pb-3 flex justify-between items-center">
                <span className="font-bold text-slate-900 uppercase">Core Quality Standards</span>
                <span className="text-[#D9232D] font-bold">100% VERIFIED</span>
              </div>
              
              <div className="space-y-3 font-sans text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <Check size={16} className="text-[#D9232D] mt-0.5 flex-shrink-0" weight="bold" />
                  <span><strong>No Reground Impellers:</strong> Only virgin medical/food-grade stainless steel sheet and precision Noryl resins.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check size={16} className="text-[#D9232D] mt-0.5 flex-shrink-0" weight="bold" />
                  <span><strong>Voltage Tolerance Envelope:</strong> Guaranteed continuous operation even down to 280V 3-phase rural line drops.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check size={16} className="text-[#D9232D] mt-0.5 flex-shrink-0" weight="bold" />
                  <span><strong>Complete Test Traceability:</strong> Every pump receives an individual hydrostatic and electrical test barcode.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => onOpenQuote("Plant Visit & Factory Audit Request")}
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-bold transition-colors cursor-pointer"
                >
                  Schedule Factory Visit &amp; QC Audit
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. R&D & Manufacturing Testing Protocols */}
      <div id="metallurgy">
        <QualityEngineering onOpenQuote={onOpenQuote} />
      </div>

      {/* 4. Metallurgical Traceability Policy */}
      <section className="bg-[#DDE5ED] border-t border-slate-300 py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto border border-slate-300 p-8 sm:p-12 bg-white shadow-md">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-2">
              <ShieldCheck size={18} />
              METALLURGICAL TRACEABILITY &amp; PURITY GUARANTEE
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono">
              Raw Material Composition &amp; Laser Welding Standards
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed font-sans">
              Super Flow strictly enforces zero scrap re-melting in all wetted components. Our 304/316 austenitic stainless steel is certified with a minimum 18% Chromium and 8% Nickel content to prevent intergranular stress corrosion cracking (SCC) even in brackish borewells.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 font-mono text-xs text-slate-600">
              <div className="border border-slate-200 bg-slate-50 px-3 py-1.5">
                AISI 304 Austenitic Stainless
              </div>
              <div className="border border-slate-200 bg-slate-50 px-3 py-1.5">
                EN-8 Precision Ground Rotor Shaft
              </div>
              <div className="border border-slate-200 bg-slate-50 px-3 py-1.5">
                100% Electrolytic Poly Copper (99.9% Cu)
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
