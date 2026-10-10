import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  List, 
  X, 
  ArrowRight, 
  Calculator, 
  PhoneCall, 
  FileText,
  ShieldCheck,
  Drop
} from '@phosphor-icons/react';

export const Navbar = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu upon navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products & Series", path: "/products" },
    { name: "Heritage & Engineering", path: "/about" },
    { name: "Dealer Network", path: "/dealers" },
    { name: "Contact & Factory RFQ", path: "/contact" }
  ];

  const handleGoToCalculator = () => {
    if (location.pathname === '/') {
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
    <>
      {/* Top Precision Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-6 text-[11px] tracking-wide font-mono">
            <span className="flex items-center gap-1.5 text-slate-200">
              <span className="w-1.5 h-1.5 bg-emerald-500 inline-block"></span>
              ISO 9001:2015 &amp; BEE 5-STAR CERTIFIED
            </span>
            <span className="hidden md:inline-block text-slate-400">|</span>
            <span className="hidden md:inline-block text-slate-400">100% AISI 304/316 STAINLESS STEEL HYDRAULICS</span>
          </div>
          <div className="flex items-center space-x-5 text-[11px] font-mono text-slate-300">
            <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">
              <PhoneCall size={12} /> Tech Helpline: +91 8000 554 921
            </span>
            <span className="text-slate-600">/</span>
            <button 
              onClick={() => onOpenQuote("2026 Engineering Catalog Download")} 
              className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <FileText size={12} /> Download 2026 Catalog
            </button>
          </div>
        </div>
      </div>

      {/* Main Architectural Navigation */}
      <header className={`sticky top-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md ${
        isScrolled ? 'border-b border-slate-200/90 shadow-xs py-3' : 'border-b border-slate-100 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/assets/superflow-logo.png" 
              alt="Super Flow Submersible Pump Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
            <div className="border-l border-slate-200 pl-3 hidden lg:block">
              <span className="block text-[10px] font-mono font-semibold tracking-widest uppercase text-slate-400">
                Precision Submersibles
              </span>
              <span className="block text-[11px] font-semibold text-slate-700 tracking-tight">
                Hydraulic Fluid Division
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `px-3.5 py-2 text-xs font-semibold tracking-normal transition-colors rounded-xs ${
                  isActive
                    ? 'text-[#D9232D] font-bold bg-red-50/50'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={handleGoToCalculator}
              className="px-3.5 py-2 text-xs font-mono font-semibold text-sky-800 bg-sky-50 border border-sky-200 hover:bg-sky-100 hover:border-sky-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Calculator size={15} />
              <span>Pump Sizer Tool</span>
            </button>
            <button
              onClick={() => onOpenQuote("General Factory Quotation Request")}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#D9232D] hover:bg-[#be1c25] active:bg-[#a6171f] transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <span>Get Factory Quote</span>
              <ArrowRight size={13} weight="bold" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenQuote("Mobile Menu RFQ")}
              className="sm:hidden px-2.5 py-1.5 text-xs font-semibold text-white bg-[#D9232D]"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <List size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `block px-3 py-2 text-sm font-medium transition-colors border-l-2 ${
                  isActive
                    ? 'border-[#D9232D] text-[#D9232D] bg-red-50/50 font-bold'
                    : 'border-transparent text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleGoToCalculator();
                }}
                className="w-full py-2.5 px-4 text-xs font-mono font-semibold text-sky-800 bg-sky-50 border border-sky-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calculator size={16} />
                <span>Launch Pump Selector Tool</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote("Mobile Menu RFQ");
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#D9232D] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Factory Quote</span>
                <ArrowRight size={14} weight="bold" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
