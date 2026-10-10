import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { 
  PhoneCall, 
  Envelope, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  Drop, 
  Kanban, 
  ChatCircleDots, 
  UserCheck 
} from '@phosphor-icons/react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    inquiryType: 'Factory Pricing & Quotation',
    pumpSeries: 'SF-4 Borewell Submersible',
    depthHead: '120 meters',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageTransition>
      {/* 1. Architectural Contact & Commercial Desk Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E8EEF5] via-[#DFE7F0] to-[#D4DFEC] border-b border-slate-300 bg-grid-pattern pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 border border-slate-300 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 text-xs text-slate-800 font-mono mb-6 shadow-xs">
            <span className="w-2 h-2 bg-[#D9232D]"></span>
            <span className="font-bold tracking-wider uppercase">COMMERCIAL &amp; ENGINEERING HEADQUARTERS</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">DIRECT FACTORY COMMUNICATION DESK</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
                DIRECT FACTORY DESK. <br />
                <span className="text-[#D9232D] underline decoration-2 decoration-[#D9232D]/30 underline-offset-8">
                  FAST RESPONSE SLA.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl">
                Bypass middleman trading markups. Connect directly with Super Flow hydraulic application engineers to size exact borehole stages, configure solar hybrid controllers, or schedule bulk dealer consignments with guaranteed dispatch dates.
              </p>

              {/* Direct Contact Phone & Hotline Strip */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="tel:+918000554921"
                  className="px-6 py-3.5 bg-[#D9232D] hover:bg-[#be1c25] text-white font-mono text-xs font-bold tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <PhoneCall size={16} />
                  <span>Call Priority Sales Desk: +91 8000 554 921</span>
                </a>

                <a
                  href="mailto:commercial@superflowpumps.com"
                  className="px-5 py-3.5 bg-white border border-slate-300 hover:border-slate-500 text-slate-800 font-mono text-xs font-semibold tracking-wider flex items-center gap-2 transition-colors shadow-xs"
                >
                  <Envelope size={15} />
                  <span>Email Commercial Lead</span>
                </a>
              </div>
            </div>

            {/* Right Column: Service Level Agreement (SLA) Telemetry Box */}
            <div className="lg:col-span-5">
              <div className="border border-slate-400 bg-white shadow-lg">
                <div className="bg-slate-900 text-white px-5 py-3 flex items-center justify-between text-xs font-mono border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500"></span>
                    <span className="font-bold tracking-wider">COMMERCIAL COMMITMENTS</span>
                  </div>
                  <span className="text-slate-400 text-[10px]">VERIFIED SLA</span>
                </div>

                <div className="p-6 bg-[#F4F7FB] divide-y divide-slate-200 text-xs font-mono space-y-3">
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-slate-600">RFQ Response Guarantee:</span>
                    <span className="text-emerald-700 font-bold text-sm">&lt; 3 Business Hours</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-slate-600">Pricing Advantage:</span>
                    <span className="text-slate-950 font-bold text-sm">Direct Factory Wholesale</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-slate-600">Stage Customization:</span>
                    <span className="text-sky-800 font-bold">Free Engineering Review</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-slate-600">Warranty Backing:</span>
                    <span className="text-[#D9232D] font-bold">Direct Laser Serial Trace</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-slate-600">Export Documentation:</span>
                    <span className="text-slate-950 font-bold">Full Phytosanitary &amp; CE</span>
                  </div>
                </div>

                <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-600">
                  <span>Factory Open 6 Days a Week</span>
                  <span className="text-emerald-700 font-bold">8:30 AM – 7:30 PM IST</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Main Grid: Factory Info & RFQ Form in Cool Slate Canvas */}
      <section className="bg-[#DFE7F0] py-18 border-b border-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-slate-300 bg-white p-6 sm:p-8 space-y-6 shadow-md">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">
                  Factory Headquarters &amp; Plant
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#D9232D] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-slate-950 block">Manufacturing Plant:</span>
                      <span className="text-slate-700 font-sans">
                        Super Flow Engineering Works, Plot No. 44-48, Industrial Area Phase II, Gujarat, India.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <PhoneCall size={18} className="text-sky-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-slate-950 block">Direct Telephones:</span>
                      <span className="text-slate-700">
                        Sales &amp; RFQ: +91 8000 554 921 <br />
                        Technical Support: +91 98250 14890
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Envelope size={18} className="text-emerald-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-slate-950 block">Email Inquiries:</span>
                      <span className="text-slate-700">
                        commercial@superflowpumps.com <br />
                        export@superflowpumps.com
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-slate-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-slate-950 block">Dispatch Desk Operating Hours:</span>
                      <span className="text-slate-700 font-sans">
                        Monday to Saturday: 8:30 AM – 7:30 PM IST
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality & Dispatch Note */}
              <div className="border border-slate-300 bg-white p-6 font-mono text-xs space-y-2 shadow-sm">
                <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-emerald-700" />
                  Factory Direct Warranty Backing
                </span>
                <p className="text-slate-600 font-sans leading-relaxed text-xs">
                  Every Super Flow submersible pump is serialized with a laser-etched nameplate. Warranty registration and technical claims are handled directly without intermediary hurdles.
                </p>
              </div>
            </div>

            {/* Direct RFQ Form */}
            <div className="lg:col-span-7 border border-slate-300 bg-white p-6 sm:p-10 shadow-lg">
              <div className="border-b border-slate-200 pb-4 mb-6">
                <div className="text-[11px] font-mono text-[#D9232D] font-bold uppercase tracking-widest mb-1">
                  COMMERCIAL INQUIRY DESK
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                  Request Factory Quotation &amp; Specification Sizing
                </h2>
                <p className="text-xs text-slate-500 font-mono mt-1">
                  Fill in your application details for an exact price quote with delivery timeline.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-3 font-mono text-xs text-center">
                  <CheckCircle size={40} weight="fill" className="text-emerald-600 mx-auto" />
                  <h3 className="text-base font-bold text-emerald-900 uppercase">
                    Quotation Request Registered (#SF-RFQ-{Math.floor(1000 + Math.random() * 9000)})
                  </h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Our engineering sales lead will contact you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> with full wholesale pricing and delivery schedules.
                  </p>
                  <div className="pt-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2 bg-slate-900 text-white text-xs font-bold cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patel"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">
                        Company / Farm Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Patel Agro Farms"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98250 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="ramesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 outline-none"
                      >
                        <option value="Factory Pricing & Quotation">Factory Pricing &amp; Quotation</option>
                        <option value="Dealership Onboarding">Dealership Onboarding</option>
                        <option value="Solar KUSUM Project">Solar KUSUM Project</option>
                        <option value="Government Tender / EPC Supply">Government Tender / EPC Supply</option>
                        <option value="International Export Inquiry">International Export Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">
                        Interested Pump Series
                      </label>
                      <select
                        value={formData.pumpSeries}
                        onChange={(e) => setFormData({ ...formData, pumpSeries: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 outline-none"
                      >
                        <option value="SF-4 Borewell Submersible">4" Stainless Borewell (SF-4)</option>
                        <option value="SF-6 Heavy Agri Submersible">6" Heavy Duty Agricultural (SF-6)</option>
                        <option value="SF-Solar Helios Pro">Solar Hybrid DC/AC (Helios Pro)</option>
                        <option value="SF-OW Openwell Monoblock">Openwell Submersible Monoblock</option>
                        <option value="SF-8 Municipal Deepwell">8" &amp; 10" Municipal Deepwell</option>
                        <option value="SF-DW Vortex Effluent">Vortex Dewatering &amp; Sewage</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">
                      Application Details (Borewell Depth, Water Condition, Desired Discharge)
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Specify total depth in feet/meters, motor HP, single or three phase power..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 outline-none font-sans"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#D9232D] hover:bg-[#be1c25] text-white font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>Submit for Priority Factory Quotation</span>
                    <ArrowRight size={13} weight="bold" />
                  </button>

                  <div className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1 font-semibold">
                    <ShieldCheck size={14} className="text-emerald-700" />
                    Direct Factory Response Guaranteed within 3 Hours on Business Days
                  </div>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
};
