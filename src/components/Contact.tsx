import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Social Media Graphic Design',
    message: '',
  });
  const [submittedVia, setSubmittedVia] = useState<'email' | 'whatsapp' | null>(null);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name} - [${formData.service}]`);
    const body = encodeURIComponent(
      `Hello Shenbaga Devi,\n\n` +
      `My name is: ${formData.name}\n` +
      `My email is: ${formData.email}\n` +
      `Service requested: ${formData.service}\n\n` +
      `Message:\n${formData.message}\n`
    );
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setSubmittedVia('email');
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    const text = encodeURIComponent(
      `Hi Shenbaga Devi, I'm ${formData.name}.\n` +
      `I'm interested in: ${formData.service}.\n` +
      `Message: ${formData.message}`
    );
    window.open(`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
    setSubmittedVia('whatsapp');
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B6B]/10 text-[#FF6B6B] text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1128] font-display tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed font-normal">
            Have a project in mind or need performance ad creatives that drive measurable ROI? Get in touch directly via WhatsApp or Email.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Action Buttons & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Action Card */}
            <div className="bg-[#0A1128] text-white p-8 rounded-3xl shadow-xl border border-white/10 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#14B8A6]">
                  Instant Contact Channels
                </span>
                <h3 className="text-xl font-bold font-display text-white">
                  Fastest Ways to Reach Shenbaga Devi
                </h3>
              </div>

              {/* Direct WhatsApp Button */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi Shenbaga Devi, I saw your portfolio and would like to discuss a project.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="block text-xs text-emerald-100">Direct Chat</span>
                    <span className="text-sm font-bold">Chat on WhatsApp</span>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-white/20 text-white font-semibold">
                  Instant
                </span>
              </a>

              {/* Direct Email Button */}
              <a
                href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("Project Inquiry for Shenbaga Devi C")}`}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#FF6B6B] hover:bg-[#E64C4C] text-white font-semibold shadow-lg shadow-[#FF6B6B]/20 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="block text-xs text-rose-100">Direct Mail</span>
                    <span className="text-sm font-bold">Send an Email</span>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-white/20 text-white font-semibold">
                  Direct
                </span>
              </a>

              {/* Social links */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
                  Professional Profiles
                </span>
                
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={siteConfig.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-200 transition-colors"
                  >
                    <svg className="w-4 h-4 text-[#FF6B6B] fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="truncate">{siteConfig.contact.instagramHandle}</span>
                  </a>

                  <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-200 transition-colors"
                  >
                    <svg className="w-4 h-4 text-[#14B8A6] fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>

              {/* Location & Availability */}
              <div className="pt-2 text-xs text-gray-400 space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>{siteConfig.contact.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>{siteConfig.contact.availability}</span>
                </div>
              </div>
            </div>

            {/* Note on Configurable Fields */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold">Configurable Contact Information:</strong>
                <span>Contact channels use placeholders that can be updated in <code className="bg-amber-100/80 px-1 py-0.5 rounded font-mono">src/data/portfolioData.ts</code> with zero design alteration.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Dispatch Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold font-display text-[#0A1128]">
                Send a Message or Project Request
              </h3>
              <p className="text-xs text-gray-500">
                Choose to dispatch directly via your Email client or WhatsApp message.
              </p>
            </div>

            {submittedVia && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>
                  Preparing inquiry for <strong>{submittedVia === 'email' ? 'Email' : 'WhatsApp'}</strong>. Check your application window!
                </span>
              </div>
            )}

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="client-name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anand Kumar"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="client-email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    id="client-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. anand@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service-select" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Project Requirement
                </label>
                <select
                  id="service-select"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent transition-all bg-white"
                >
                  <option value="Social Media Graphic Design">Social Media Graphic Design (Feed & Story Creatives)</option>
                  <option value="Paid Digital Marketing (Meta Ads)">Paid Digital Marketing (Meta Ads / Facebook & IG)</option>
                  <option value="Google Ads Search Campaigns">Google Ads Search Campaigns & Lead Generation</option>
                  <option value="Full Creative & Performance Package">Full Package: Creative Design + Paid Acquisition</option>
                  <option value="Full-Time / Contract Employment">Full-Time / Contract Position Opportunity</option>
                </select>
              </div>

              <div>
                <label htmlFor="message-text" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Project Brief or Message *
                </label>
                <textarea
                  id="message-text"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your design goals, target audience, ad budget, or timeline..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
                />
              </div>

              {/* Submission Notice Explaining Backend */}
              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 text-[11px] text-gray-600 space-y-1">
                <span className="font-semibold block text-gray-700">Notice on Static Hosting:</span>
                <p>
                  As a zero-dependency static site hosted on GitHub Pages, messages are not silently discarded by a mock endpoint. Clicking below connects directly to your verified mail client or WhatsApp with your pre-filled inquiry.
                </p>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A1128] hover:bg-[#152238] text-white font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4 text-[#FF6B6B]" />
                  <span>Send via Email Client</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
