import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { DealerNetwork } from '../components/DealerNetwork';
import { 
  Truck, 
  MapPin, 
  Handshake, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight, 
  PhoneCall, 
  Kanban, 
  FileText, 
  ClockAfternoon 
} from '@phosphor-icons/react';

export const DealersPage = ({ onOpenQuote }) => {
  return (
    <PageTransition>
      {/* 1. Architectural Distribution & Logistics Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E1F0FA] via-[#E9F3FA] to-[#D9ECF7] border-b border-sky-300 bg-grid-pattern pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 border border-sky-300 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 text-xs text-slate-800 font-mono mb-6 shadow-xs">
            <span className="w-2 h-2 bg-[#D9232D]"></span>
            <span className="font-bold tracking-wider uppercase">COMMERCIAL SUPPLY CHAIN &amp; DEALERS</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">COVERING 22+ AGRARIAN STATES &amp; GLOBAL PORTS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
                NATIONWIDE LOGISTICS. <br />
                <span className="text-[#D9232D] underline decoration-2 decoration-[#D9232D]/30 underline-offset-8">
                  24-HOUR FACTORY DISPATCH.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl">
                Partner with Super Flow. Benefit from protected territorial exclusivity, rapid same-day or next-day truck loading from factory inventory, and direct access to genuine replacement Michell thrust bearings, impellers, and winding kits.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenQuote("New Authorized Dealership Application")}
                  className="px-6 py-3.5 bg-[#D9232D] hover:bg-[#be1c25] text-white font-mono text-xs font-bold tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <Handshake size={16} />
                  <span>Apply for Exclusive Dealership</span>
                </button>

                <button
                  onClick={() => onOpenQuote("Wholesale Price List & Dealer Rebate Structure")}
                  className="px-5 py-3.5 bg-white border border-sky-300 hover:border-sky-500 text-slate-900 font-mono text-xs font-semibold tracking-wider flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <FileText size={15} />
                  <span>Request Wholesale Price List</span>
                </button>
              </div>
            </div>

            {/* Right Column: Logistics Telemetry Box */}
            <div className="lg:col-span-5">
              <div className="border border-sky-300/80 bg-white shadow-lg">
                <div className="bg-slate-900 text-white px-5 py-3 flex items-center justify-between text-xs font-mono border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500"></span>
                    <span className="font-bold tracking-wider">SUPPLY CHAIN METRICS</span>
                  </div>
                  <span className="text-slate-400 text-[10px]">READY INVENTORY</span>
                </div>

                <div className="p-6 bg-[#F4F9FD] divide-y divide-sky-200/60 text-xs font-mono space-y-3">
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-slate-600">Stock Dispatch SLA:</span>
                    <span className="text-emerald-700 font-bold text-sm">24 – 48 Hours Direct</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-slate-600">Authorized Touchpoints:</span>
                    <span className="text-slate-950 font-bold text-sm">500+ Hubs Nationwide</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-slate-600">Geographic Coverage:</span>
                    <span className="text-sky-800 font-bold">22+ States &amp; 45+ Export Ports</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-slate-600">Genuine Spare Availability:</span>
                    <span className="text-slate-950 font-bold">100% Guaranteed Stock</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-slate-600">Territory Protection:</span>
                    <span className="text-[#D9232D] font-bold">Exclusive Taluka Rights</span>
                  </div>
                </div>

                <div className="p-3 bg-white border-t border-sky-200 flex items-center justify-between text-[11px] font-mono text-slate-600">
                  <span>Fast Full-Truck &amp; Part-Load Freight</span>
                  <span className="text-emerald-700 font-bold">Zero Farmer Downtime</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Dealer Benefits Strip in Rich Cool Slate */}
      <section className="bg-[#E5EDF5] py-16 border-b border-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <div className="border border-slate-300 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-red-50 border border-red-200 flex items-center justify-center text-[#D9232D] mb-4">
              <Truck size={20} weight="bold" />
            </div>
            <h3 className="font-bold text-slate-950 text-sm mb-2">24-Hr Dispatch Guarantee</h3>
            <p className="text-slate-600 font-sans text-xs">
              Fast-moving 4" and 6" agricultural submersibles are dispatched within 24 to 48 hours directly from factory stocks to prevent farmer downtime.
            </p>
          </div>

          <div className="border border-slate-300 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-800 mb-4">
              <Handshake size={20} weight="bold" />
            </div>
            <h3 className="font-bold text-slate-950 text-sm mb-2">Protected Territorial Margins</h3>
            <p className="text-slate-600 font-sans text-xs">
              Authorized dealers receive assigned taluka and district boundaries with guaranteed wholesale pricing margins and annual volume rebates.
            </p>
          </div>

          <div className="border border-slate-300 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 mb-4">
              <ShieldCheck size={20} weight="bold" />
            </div>
            <h3 className="font-bold text-slate-950 text-sm mb-2">100% Genuine Spare Parts</h3>
            <p className="text-slate-600 font-sans text-xs">
              Direct access to genuine replacement Michell thrust pads, Noryl/SS impellers, mechanical seals, and waterproof winding wire kits.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Main Form & Hubs */}
      <DealerNetwork onOpenQuote={onOpenQuote} />
    </PageTransition>
  );
};
