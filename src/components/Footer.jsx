import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  PhoneCall, 
  Envelope, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Certificate, 
  Drop,
  FileText
} from '@phosphor-icons/react';

export const Footer = ({ onOpenQuote }) => {
  const navigate = useNavigate();

  const handleGoToCalculator = () => {
    if (window.location.pathname === '/') {
      const el = document.getElementById('calculator-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#calculator-section');
      setTimeout(() => {
        const el = document.getElementById('calculator-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      
      {/* Top Value Banner */}
      <div className="border-b border-slate-800 py-10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-950/60 border border-red-800 text-[#D9232D]">
              <Drop size={24} weight="bold" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                Engineering Custom Borewell &amp; Pumping Solutions
              </h4>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Have specific aquifer depth or aggressive chemical conditions? Our R&amp;D team customizes impeller stages.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleGoToCalculator}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-sky-400 border border-slate-700 text-xs font-mono font-semibold cursor-pointer"
            >
              Open Pump Sizer Tool
            </button>
            <button
              onClick={() => onOpenQuote("Custom Engineering Request")}
              className="px-5 py-2.5 bg-[#D9232D] hover:bg-[#be1c25] text-white text-xs font-mono font-bold tracking-wider cursor-pointer"
            >
              Consult Factory Engineers
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="bg-white p-2.5 inline-block border border-slate-700">
              <img 
                src="/assets/superflow-logo.png" 
                alt="Super Flow Submersible Pump Logo" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              <strong>SUPER FLOW SUBMERSIBLE PUMP™</strong> is a recognized leader in high-performance fluid extraction machinery. 
              Engineering 100% AISI 304/316 stainless steel borewell pumps, agricultural openwell submersibles, and off-grid solar pumping systems with BEE 5-Star efficiency.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-slate-400">
              <span className="border border-slate-800 px-2 py-1 bg-slate-900">ISO 9001:2015</span>
              <span className="border border-slate-800 px-2 py-1 bg-slate-900">IS:8472 &amp; IS:9283</span>
              <span className="border border-slate-800 px-2 py-1 bg-slate-900">BEE 5-STAR CERTIFIED</span>
              <span className="border border-slate-800 px-2 py-1 bg-slate-900">CE ACCREDITED</span>
            </div>
          </div>

          {/* Column 2: Product Series */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-white font-bold uppercase tracking-wider border-b border-slate-800 pb-2">
              Product Series
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  4" Stainless Borewell (SF-4 Series)
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  6" High-Flow Agricultural (SF-6 Series)
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Solar Hybrid DC/AC (Helios Pro)
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Openwell Submersible Monoblock
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  8" - 10" Municipal Deepwell
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Stainless Sewage &amp; Vortex Dewatering
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & Technical */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <div className="text-white font-bold uppercase tracking-wider border-b border-slate-800 pb-2">
              Corporate &amp; Lab
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={handleGoToCalculator} className="hover:text-white transition-colors text-left cursor-pointer">
                  Hydraulic Head Sizer
                </button>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Heritage &amp; Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/about#metallurgy" className="hover:text-white transition-colors">
                  Metallurgy &amp; R&amp;D Standards
                </Link>
              </li>
              <li>
                <Link to="/dealers" className="hover:text-white transition-colors">
                  Dealer Network &amp; Logistics
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Factory Direct RFQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Factory Desk */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-white font-bold uppercase tracking-wider border-b border-slate-800 pb-2">
              Factory &amp; Commercial Desk
            </div>
            
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-[#D9232D] mt-0.5 flex-shrink-0" />
                <span>
                  Super Flow Engineering Works, Industrial Area Phase II, Gujarat, India.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall size={15} className="text-sky-400 flex-shrink-0" />
                <span>+91 8000 554 921 / +91 98250 14890</span>
              </div>
              <div className="flex items-center gap-2">
                <Envelope size={15} className="text-emerald-400 flex-shrink-0" />
                <span>commercial@superflowpumps.com</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="w-full py-2 bg-slate-900 border border-slate-700 hover:border-slate-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Direct Contact &amp; Inquiry</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-14 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} SUPER FLOW SUBMERSIBLE PUMP™. All Rights Reserved. Registered Trademark (TM).
          </div>
          <div className="flex items-center space-x-6 text-slate-400">
            <Link to="/about" className="hover:text-white">Quality Manual</Link>
            <span>/</span>
            <Link to="/dealers" className="hover:text-white">Dispatch Logistics</Link>
            <span>/</span>
            <Link to="/contact" className="hover:text-white">Commercial RFQ</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
