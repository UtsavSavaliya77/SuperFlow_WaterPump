import React, { useState } from 'react';
import { 
  X, 
  CheckCircle, 
  ArrowRight, 
  PhoneCall, 
  Envelope, 
  MapPin, 
  ShieldCheck
} from '@phosphor-icons/react';

export const QuoteModal = ({ initialSubject, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    quantity: '1',
    state: 'Gujarat',
    subject: initialSubject || 'Super Flow Submersible Pump Quotation',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white border border-slate-300 w-full max-w-lg shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="text-[10px] font-mono text-[#D9232D] font-bold uppercase tracking-widest">
              SUPER FLOW™ COMMERCIAL DESK
            </div>
            <h3 className="text-base font-bold font-mono tracking-tight text-white mt-0.5">
              Request Factory Quotation &amp; Dispatch Timeline
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors"
            aria-label="Close Quotation Dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-3 font-mono text-xs text-center">
              <CheckCircle size={36} weight="fill" className="text-emerald-600 mx-auto" />
              <h4 className="text-sm font-bold text-emerald-900 uppercase">
                Quotation Request Generated (#SF-RFQ-{Math.floor(1000 + Math.random() * 9000)})
              </h4>
              <p>
                We have received your quotation request for <strong>{formData.subject}</strong>. Our commercial engineering team will call you directly at <strong>{formData.phone}</strong> with wholesale rates and delivery schedule.
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-slate-900 text-white text-xs font-bold"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs font-mono">
              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  Requested Configuration / Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full p-2 bg-slate-100 border border-slate-200 text-slate-800 font-semibold focus:bg-white outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Contact Person / Company *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2 bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98250 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2 bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Quantity Needed
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full p-2 bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 outline-none"
                  >
                    <option value="1">1 Unit (Individual / Farm)</option>
                    <option value="2-5">2 to 5 Units</option>
                    <option value="6-20">6 to 20 Units (Contractor Lot)</option>
                    <option value="20+">20+ Units (Dealer Consignment)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Destination State
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gujarat / Maharashtra"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full p-2 bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  Additional Notes (Borewell Depth, Cable, Panel Starter etc.)
                </label>
                <textarea
                  rows="2"
                  placeholder="Optional details..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-2 bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 outline-none font-sans"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#D9232D] hover:bg-[#be1c25] text-white font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <span>Submit for Priority Factory Quotation</span>
                  <ArrowRight size={13} weight="bold" />
                </button>
              </div>

              <div className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck size={14} className="text-emerald-600" />
                Factory Direct Pricing. Zero Obligation. Response within 3 hours.
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
