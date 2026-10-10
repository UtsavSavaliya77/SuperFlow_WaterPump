import React from 'react';
import { 
  X, 
  FileText, 
  Check, 
  ShieldCheck, 
  ArrowRight,
  Drop,
  Gauge,
  Lightning,
  Gear
} from '@phosphor-icons/react';

export const TechSpecsModal = ({ product, onClose, onOpenQuote }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white border border-slate-300 w-full max-w-2xl max-h-[90vh] overflow-y-auto no-scrollbar shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800 z-10">
          <div>
            <div className="text-[10px] font-mono text-[#D9232D] font-bold uppercase tracking-widest">
              SUPER FLOW™ TECHNICAL SPECIFICATION DOSSIER
            </div>
            <h3 className="text-lg font-bold font-mono tracking-tight text-white mt-0.5">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors"
            aria-label="Close Datasheet"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {/* Tagline & Core metrics */}
          <div className="p-4 bg-slate-50 border border-slate-200">
            <div className="text-xs text-slate-700 font-medium">
              {product.tagline}
            </div>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
              <div className="bg-white p-2 border border-slate-200">
                <span className="text-[10px] text-slate-400 block">HEAD</span>
                <span className="font-bold text-sky-800">{product.headRange}</span>
              </div>
              <div className="bg-white p-2 border border-slate-200">
                <span className="text-[10px] text-slate-400 block">FLOW</span>
                <span className="font-bold text-slate-900">{product.dischargeRange}</span>
              </div>
              <div className="bg-white p-2 border border-slate-200">
                <span className="text-[10px] text-slate-400 block">HP RANGE</span>
                <span className="font-bold text-slate-900">{product.hpRange}</span>
              </div>
              <div className="bg-white p-2 border border-slate-200">
                <span className="text-[10px] text-slate-400 block">EFFICIENCY</span>
                <span className="font-bold text-emerald-700">{product.efficiencyRating.split(' ')[0]}</span>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <Gear size={14} className="text-[#D9232D]" />
              Engineering Specifications
            </h4>
            <div className="border border-slate-200 divide-y divide-slate-100 text-xs font-mono">
              <div className="grid grid-cols-2 p-2.5 bg-slate-50/50">
                <span className="text-slate-500">Operating Voltage / Frequency:</span>
                <span className="font-bold text-slate-900">{product.specs.voltage}</span>
              </div>
              <div className="grid grid-cols-2 p-2.5">
                <span className="text-slate-500">Synchronous Speed:</span>
                <span className="font-bold text-slate-900">{product.specs.rpm}</span>
              </div>
              <div className="grid grid-cols-2 p-2.5 bg-slate-50/50">
                <span className="text-slate-500">Discharge Outlet Size:</span>
                <span className="font-bold text-slate-900">{product.specs.outletSize}</span>
              </div>
              <div className="grid grid-cols-2 p-2.5">
                <span className="text-slate-500">Impeller &amp; Diffuser Metallurgy:</span>
                <span className="font-bold text-slate-900">{product.metallurgy}</span>
              </div>
              <div className="grid grid-cols-2 p-2.5 bg-slate-50/50">
                <span className="text-slate-500">Motor Stator Winding:</span>
                <span className="font-bold text-slate-900">{product.specs.winding}</span>
              </div>
              <div className="grid grid-cols-2 p-2.5">
                <span className="text-slate-500">Thrust Bearing Architecture:</span>
                <span className="font-bold text-slate-900">{product.specs.thrustBearing}</span>
              </div>
              <div className="grid grid-cols-2 p-2.5 bg-slate-50/50">
                <span className="text-slate-500">Sand &amp; Silt Tolerance:</span>
                <span className="font-bold text-emerald-700">{product.sandTolerance}</span>
              </div>
              <div className="grid grid-cols-2 p-2.5">
                <span className="text-slate-500">Max Permissible Fluid Temp:</span>
                <span className="font-bold text-slate-900">{product.specs.maxWaterTemp}</span>
              </div>
            </div>
          </div>

          {/* Key Engineering Features */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-700" />
              Standard Architectural Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 border border-slate-100 bg-slate-50/40">
                  <Check size={14} className="text-[#D9232D] mt-0.5 flex-shrink-0" weight="bold" />
                  <span className="text-slate-700">{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 border border-slate-300 text-xs font-mono font-semibold text-slate-700 hover:bg-slate-100"
          >
            Close Datasheet
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenQuote(`Direct RFQ for ${product.name}`);
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#D9232D] hover:bg-[#be1c25] text-white text-xs font-bold font-mono tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <span>Request Factory Pricing</span>
            <ArrowRight size={13} weight="bold" />
          </button>
        </div>

      </div>
    </div>
  );
};
