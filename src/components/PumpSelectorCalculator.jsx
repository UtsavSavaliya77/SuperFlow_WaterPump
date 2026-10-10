import React, { useState } from 'react';
import { 
  Calculator, 
  ArrowRight, 
  Drop, 
  Lightning, 
  Sparkle, 
  CheckCircle,
  FilePdf,
  Wrench,
  Gauge
} from '@phosphor-icons/react';

export const PumpSelectorCalculator = ({ onOpenQuote }) => {
  const [headMeters, setHeadMeters] = useState(120);
  const [flowLpm, setFlowLpm] = useState(180);
  const [powerSource, setPowerSource] = useState('3phase'); // '3phase' | '1phase' | 'solar'
  const [sandCondition, setSandCondition] = useState('normal'); // 'normal' | 'sandy'

  // Hydraulic physics calculations
  // Q in m3/s = (flowLpm / 60) / 1000
  // Hydraulic Power (kW) = (rho * g * Q * H) / 1000 = (1000 * 9.81 * (flowLpm / 60000) * headMeters) / 1000
  // P_hyd (kW) = (9.81 * flowLpm * headMeters) / 60000
  const flowM3h = (flowLpm * 60) / 1000;
  const hydraulicPowerKw = (9.81 * flowLpm * headMeters) / 60000;
  
  // Super Flow high efficiency ~68-72%
  const pumpEfficiency = 0.70;
  const motorEfficiency = 0.82;
  const overallEfficiency = pumpEfficiency * motorEfficiency;
  
  const electricalPowerKw = hydraulicPowerKw / overallEfficiency;
  const calculatedHp = electricalPowerKw * 1.341;
  
  // Standard recommended commercial motor HP ratings: 1, 1.5, 2, 3, 4, 5, 6, 7.5, 10, 12.5, 15, 20, 25, 30
  const standardHpList = [1.0, 1.5, 2.0, 3.0, 4.0, 5.0, 6.0, 7.5, 10.0, 12.5, 15.0, 20.0, 25.0, 30.0];
  const recommendedHp = standardHpList.find(hp => hp >= calculatedHp * 1.15) || 30.0;
  
  // Estimate stages (typical 8-12m per stage for 4", 15-20m for 6")
  const is6Inch = flowLpm > 300 || headMeters > 280;
  const headPerStage = is6Inch ? 16 : 10;
  const estimatedStages = Math.ceil(headMeters / headPerStage);

  // Recommended pipe size in mm
  let pipeSize = "32 mm (1.25\")";
  if (flowLpm > 120 && flowLpm <= 250) pipeSize = "40 mm (1.5\")";
  else if (flowLpm > 250 && flowLpm <= 500) pipeSize = "50 mm (2.0\")";
  else if (flowLpm > 500 && flowLpm <= 900) pipeSize = "65 mm (2.5\")";
  else if (flowLpm > 900) pipeSize = "80 mm (3.0\")";

  // Model naming
  const modelCode = powerSource === 'solar'
    ? `SF-Solar-${recommendedHp}HP / ${estimatedStages}ST`
    : is6Inch
      ? `SF-6/${estimatedStages} (${recommendedHp} HP Heavy Duty)`
      : `SF-4/${estimatedStages} (${recommendedHp} HP Radial)`;

  // Annual estimated power savings vs standard 50% efficiency pump (operating 6 hrs/day for 280 days)
  const conventionalKw = hydraulicPowerKw / 0.48;
  const kwhSavedPerYear = Math.max(0, (conventionalKw - electricalPowerKw) * 6 * 280);
  const costSavingsInInr = Math.round(kwhSavedPerYear * 7.5); // avg agricultural/commercial tariff

  return (
    <section id="calculator" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-slate-800 gap-4">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-red-400 mb-2 flex items-center gap-2">
              <Calculator size={15} />
              INTERACTIVE FLUID TOOL
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              HYDRAULIC HEAD &amp; PUMP SIZER
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-mono">
            Input your well depth and required flow rate to simulate exact pump sizing, recommended HP, pipe dimensions, and annual energy savings.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 p-6 sm:p-8 space-y-6">
            
            {/* Input 1: Total Dynamic Head */}
            <div>
              <div className="flex justify-between items-center mb-2 font-mono text-xs">
                <label className="text-slate-300 font-bold uppercase tracking-wider">
                  1. Total Dynamic Head / Depth (Meters)
                </label>
                <div className="bg-slate-800 px-3 py-1 border border-slate-700 text-sky-400 font-bold">
                  {headMeters} m <span className="text-slate-500 font-normal">({Math.round(headMeters * 3.28)} ft)</span>
                </div>
              </div>
              <input
                type="range"
                min="15"
                max="450"
                step="5"
                value={headMeters}
                onChange={(e) => setHeadMeters(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 accent-[#D9232D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>15 m (Shallow)</span>
                <span>150 m (Standard)</span>
                <span>300 m (Deep)</span>
                <span>450 m (Ultra-Deep)</span>
              </div>
            </div>

            {/* Input 2: Discharge Flow */}
            <div>
              <div className="flex justify-between items-center mb-2 font-mono text-xs">
                <label className="text-slate-300 font-bold uppercase tracking-wider">
                  2. Required Discharge Flow (LPM)
                </label>
                <div className="bg-slate-800 px-3 py-1 border border-slate-700 text-sky-400 font-bold">
                  {flowLpm} LPM <span className="text-slate-500 font-normal">({flowM3h.toFixed(1)} m³/hr)</span>
                </div>
              </div>
              <input
                type="range"
                min="30"
                max="1200"
                step="10"
                value={flowLpm}
                onChange={(e) => setFlowLpm(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 accent-sky-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>30 LPM (Drip)</span>
                <span>250 LPM (Flood 2")</span>
                <span>600 LPM (Canal 3")</span>
                <span>1,200 LPM (Commercial)</span>
              </div>
            </div>

            {/* Input 3: Power Supply */}
            <div>
              <label className="block text-slate-300 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                3. Electrical Power Supply
              </label>
              <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setPowerSource('3phase')}
                  className={`p-3 border text-left transition-colors ${
                    powerSource === '3phase'
                      ? 'border-[#D9232D] bg-red-950/40 text-white font-bold'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs">3-Phase 415V</div>
                  <div className="text-[10px] text-slate-400">Standard Grid</div>
                </button>
                <button
                  type="button"
                  onClick={() => setPowerSource('1phase')}
                  className={`p-3 border text-left transition-colors ${
                    powerSource === '1phase'
                      ? 'border-[#D9232D] bg-red-950/40 text-white font-bold'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs">1-Phase 220V</div>
                  <div className="text-[10px] text-slate-400">Domestic / Light</div>
                </button>
                <button
                  type="button"
                  onClick={() => setPowerSource('solar')}
                  className={`p-3 border text-left transition-colors ${
                    powerSource === 'solar'
                      ? 'border-emerald-500 bg-emerald-950/40 text-white font-bold'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs">Solar Hybrid DC</div>
                  <div className="text-[10px] text-emerald-400">Zero Grid / MPPT</div>
                </button>
              </div>
            </div>

            {/* Input 4: Borewell Geology / Sand Content */}
            <div>
              <label className="block text-slate-300 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                4. Borewell Water Condition
              </label>
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setSandCondition('normal')}
                  className={`p-3 border text-left ${
                    sandCondition === 'normal'
                      ? 'border-sky-500 bg-sky-950/30 text-white font-bold'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400'
                  }`}
                >
                  <div className="text-xs">Clear Groundwater</div>
                  <div className="text-[10px] text-slate-400">&lt; 25 g/m³ Particulates</div>
                </button>
                <button
                  type="button"
                  onClick={() => setSandCondition('sandy')}
                  className={`p-3 border text-left ${
                    sandCondition === 'sandy'
                      ? 'border-amber-500 bg-amber-950/30 text-white font-bold'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400'
                  }`}
                >
                  <div className="text-xs">Sandy / Silt Aquifer</div>
                  <div className="text-[10px] text-amber-400">High Sand Floating Kit</div>
                </button>
              </div>
            </div>

          </div>

          {/* Results Diagnostic Card */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-700 p-6 sm:p-8 space-y-6">
            
            <div className="border-b border-slate-800 pb-4">
              <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 bg-emerald-500"></span>
                OPTIMAL HYDRAULIC CONFIGURATION
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                {modelCode}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Calculated at {overallEfficiency * 100}% system hydraulic efficiency.
              </p>
            </div>

            {/* Telemetry Grid */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Recommended Motor Size:</span>
                <span className="text-white font-bold text-sm text-[#D9232D]">
                  {recommendedHp} HP ({((recommendedHp * 0.746)).toFixed(2)} kW)
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Impeller Stage Count:</span>
                <span className="text-white font-bold">{estimatedStages} Hydraulic Stages</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Recommended Delivery Pipe:</span>
                <span className="text-sky-400 font-bold">{pipeSize}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Hydraulic Pressure Head:</span>
                <span className="text-white font-bold">{(headMeters * 0.09806).toFixed(1)} Bar ({headMeters} m)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Estimated Annual Power Savings:</span>
                <span className="text-emerald-400 font-bold">₹{costSavingsInInr.toLocaleString()} / ~{Math.round(kwhSavedPerYear)} kWh</span>
              </div>
            </div>

            {/* Note */}
            <div className="p-3 bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400 leading-relaxed">
              <strong>Super Flow Advantage:</strong> Features laser-welded SS-304 bowls with floating impellers to eliminate sand binding and reduce friction loss.
            </div>

            {/* Action */}
            <div className="pt-2 space-y-2">
              <button
                onClick={() => onOpenQuote(`Sizer Config: ${modelCode} (${headMeters}m Head, ${flowLpm} LPM, ${powerSource})`)}
                className="w-full py-3.5 bg-[#D9232D] hover:bg-[#be1c25] text-white text-xs font-bold font-mono tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Price &amp; Dispatch Date for this Model</span>
                <ArrowRight size={14} weight="bold" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
