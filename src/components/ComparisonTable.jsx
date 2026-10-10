import React from 'react';
import { 
  Check, 
  X, 
  ShieldCheck, 
  Sparkle, 
  ArrowRight, 
  Drop 
} from '@phosphor-icons/react';
import { TECHNICAL_COMPARISONS } from '../data/pumpsData';

export const ComparisonTable = ({ onOpenQuote }) => {
  return (
    <section id="benchmark" className="py-22 bg-gradient-to-b from-[#E4E9F2] via-[#ECEFF5] to-[#DFE5ED] border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-slate-300 gap-4">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#D9232D] mb-2 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-[#D9232D]"></span>
              AUTHORITATIVE ENGINEERING AUDIT
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              SUPER FLOW VS. CONVENTIONAL MARKET STANDARD
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 max-w-md font-mono">
            How Super Flow's metallurgical and hydraulic specifications compare to conventional market and competitor pumps.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="border border-slate-300 bg-white shadow-md overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100 font-mono text-xs">
                <th className="py-4 px-6 text-slate-700 font-bold uppercase tracking-wider w-1/4">
                  Engineering Parameter
                </th>
                <th className="py-4 px-6 bg-red-50/90 border-x border-red-200 text-[#D9232D] font-extrabold uppercase tracking-wider w-5/12">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#D9232D]"></span>
                    SUPER FLOW™ (Precision SS)
                  </div>
                </th>
                <th className="py-4 px-6 text-slate-600 font-bold uppercase tracking-wider w-1/3">
                  Market Conventional / Competitor Standard
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs font-mono">
              {TECHNICAL_COMPARISONS.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  {/* Parameter Name */}
                  <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/50">
                    {row.metric}
                  </td>
                  
                  {/* Super Flow Column (Highlighted) */}
                  <td className="py-4 px-6 bg-red-50/40 border-x border-red-100">
                    <div className="font-bold text-slate-950 flex items-start gap-2">
                      <Check size={16} weight="bold" className="text-[#D9232D] flex-shrink-0 mt-0.5" />
                      <span>{row.superflow}</span>
                    </div>
                    <div className="text-[11px] text-emerald-800 mt-1 pl-6 font-sans font-medium">
                      → {row.advantage}
                    </div>
                  </td>

                  {/* Competitor / Legacy Column */}
                  <td className="py-4 px-6 text-slate-600">
                    <div className="flex items-start gap-2">
                      <X size={15} weight="bold" className="text-slate-400 flex-shrink-0 mt-0.5" />
                      <span>{row.competitorStandard}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 p-6 bg-white border border-slate-300 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-sm flex-shrink-0">
              SF
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 font-mono">
                Verify with Factory Inspection Certificate
              </div>
              <div className="text-[11px] text-slate-600">
                Every Super Flow pump ships with batch metallurgical traceability and computerized test reports.
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenQuote("Inspection Certificate & Batch Specs Request")}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold font-mono tracking-wide transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer shadow-xs"
          >
            <span>Request Test Certificate</span>
            <ArrowRight size={13} weight="bold" />
          </button>
        </div>

      </div>
    </section>
  );
};
