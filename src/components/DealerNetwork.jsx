import React, { useState } from 'react';
import { 
  Buildings, 
  MapPin, 
  PhoneCall, 
  Envelope, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  Truck
} from '@phosphor-icons/react';

export const DealerNetwork = ({ onOpenQuote }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    state: 'Gujarat',
    category: 'Dealership Inquiry',
    comments: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const regions = [
    { state: "Western Region", hubs: "Gujarat, Maharashtra, Rajasthan, Madhya Pradesh", centers: "180+ Authorized Touchpoints" },
    { state: "Northern Region", hubs: "Punjab, Haryana, Uttar Pradesh, Uttarakhand", centers: "140+ Authorized Touchpoints" },
    { state: "Southern Region", hubs: "Karnataka, Tamil Nadu, Andhra Pradesh, Telangana", centers: "210+ Authorized Touchpoints" },
    { state: "Eastern & Exports", hubs: "West Bengal, Odisha, Bihar & 45+ Global Export Markets", centers: "Factory Direct & Global Consignments" }
  ];

  return (
    <section id="dealers" className="py-22 bg-gradient-to-b from-[#DFE6F0] via-[#D5DFEC] to-[#CBD6E4] border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-slate-300 gap-4">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#D9232D] mb-2 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-[#D9232D]"></span>
              DISTRIBUTION &amp; FIELD SUPPORT
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              DEALER NETWORK &amp; GLOBAL LOGISTICS
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 max-w-md font-mono">
            Direct factory dispatch for bulk consignments, fast spare parts availability, and technical service support across key agrarian and industrial zones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Distribution Map Info */}
          <div className="lg:col-span-6 space-y-4">
            <div className="border border-slate-300 bg-white p-6 shadow-md space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
                <span>Distribution Hubs &amp; Coverage</span>
                <span className="text-emerald-700 font-bold">500+ DEALERS</span>
              </div>
              
              <div className="space-y-4">
                {regions.map((reg, idx) => (
                  <div key={idx} className="border-b border-slate-100 last:border-b-0 pb-3 last:pb-0">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-slate-900">{reg.state}</span>
                      <span className="text-[11px] text-slate-500 font-semibold">{reg.centers}</span>
                    </div>
                    <div className="text-xs text-slate-600 mt-1 font-sans">
                      {reg.hubs}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Dispatch Guarantee */}
            <div className="border border-slate-300 bg-white p-6 shadow-md font-mono text-xs space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <Truck size={18} className="text-[#D9232D]" weight="bold" />
                <span>Super Flow 24-Hour Dispatch Assurance</span>
              </div>
              <p className="text-slate-600 font-sans leading-relaxed text-xs">
                All fast-moving 4\" and 6\" submersible pumps and standard water-cooled motors are maintained in ready inventory for immediate same-day or next-day truck loading.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Dealership / Bulk RFQ Form */}
          <div className="lg:col-span-6 border border-slate-300 bg-white p-6 sm:p-8 shadow-md">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <div className="text-[11px] font-mono text-[#D9232D] font-bold uppercase tracking-widest mb-1">
                FACTORY DIRECT DESK
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Inquire for Dealership or Bulk Supply
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-1">
                Connect directly with our regional commercial sales managers.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-sm font-bold text-emerald-800">
                  <CheckCircle size={20} weight="fill" className="text-emerald-600" />
                  Inquiry Dispatched Successfully!
                </div>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Our Area Sales Manager for <strong>{formData.state}</strong> will contact you at <strong>{formData.phone}</strong> within 3 business hours with pricing terms and dealership catalog.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-emerald-800 underline font-bold cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Your Name / Enterprise Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Patel Machinery & Agro Equipment"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 focus:border-slate-900 focus:bg-white outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 focus:border-slate-900 focus:bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">
                      State / Location *
                    </label>
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 focus:border-slate-900 focus:bg-white outline-none"
                    >
                      <option value="Gujarat">Gujarat</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Telangana">Telangana</option>
                      <option value="International Export">International Export</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Inquiry Intent
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 focus:border-slate-900 focus:bg-white outline-none"
                  >
                    <option value="New Authorized Dealership">New Authorized Dealership</option>
                    <option value="Agricultural Project / Bulk Purchase">Agricultural Project / Bulk Purchase</option>
                    <option value="Solar KUSUM Scheme Supply">Solar KUSUM Scheme Supply</option>
                    <option value="MEP Contractor / Commercial Building">MEP Contractor / Commercial Building</option>
                    <option value="International Export Agency">International Export Agency</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Specific Requirements or Pump Ratings
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Specify HP ratings, quantities, borewell depths, or expected annual volume..."
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 focus:border-slate-900 focus:bg-white outline-none font-sans"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#D9232D] hover:bg-[#be1c25] text-white font-bold tracking-wider transition-colors flex items-center justify-center gap-2 uppercase cursor-pointer shadow-xs"
                >
                  <span>Submit Inquiry to Sales Team</span>
                  <ArrowRight size={13} weight="bold" />
                </button>

                <div className="text-[10px] text-slate-400 text-center">
                  Direct Factory Response Guaranteed within 3 Hours on Business Days
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
