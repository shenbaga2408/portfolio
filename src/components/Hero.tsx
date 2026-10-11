import React from 'react';
import { TrendingUp, Palette, ChevronRight, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#FAF8F5]">
      {/* Decorative ambient gradients */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[320px] sm:w-[700px] h-[300px] sm:h-[400px] bg-gradient-to-r from-[#FF6B6B]/15 via-[#14B8A6]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-64 sm:w-96 h-64 sm:h-96 bg-[#14B8A6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-[#FF6B6B]/20 shadow-sm text-[11px] sm:text-xs font-semibold text-[#0A1128] max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse shrink-0" />
              <span className="truncate">Available for Projects &amp; Media Buying</span>
              <span className="text-[#FF6B6B] hidden sm:inline">•</span>
              <span className="text-gray-500 font-normal hidden sm:inline">Meta &amp; Google Ads</span>
            </div>

            {/* Name & Title */}
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-[#FF6B6B] font-bold mb-1.5 font-display">
                Portfolio of {siteConfig.name}
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1128] tracking-tight leading-[1.15]">
                Creative Designs.{' '}
                <span className="text-gradient-coral-teal block sm:inline">
                  Meaningful Campaigns.
                </span>{' '}
                Stronger Brands.
              </h1>
            </div>

            {/* Brief Introduction */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {siteConfig.aboutIntro}
            </p>

            {/* Mobile-Optimized CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-1 sm:pt-2">
              <a
                href="#graphic-design"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0A1128] hover:bg-[#152238] text-white font-semibold text-sm shadow-xl shadow-[#0A1128]/20 transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
              >
                <Palette className="w-4 h-4 text-[#FF6B6B]" />
                <span>View Graphic Design</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>

              <a
                href="#paid-campaigns"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gray-50 text-[#0A1128] font-semibold text-sm border border-gray-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
              >
                <TrendingUp className="w-4 h-4 text-[#14B8A6]" />
                <span>Paid Campaign Results</span>
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi Shenbaga Devi, I saw your portfolio and would like to discuss a project.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md shadow-emerald-700/20 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 sm:hidden"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp ({siteConfig.contact.whatsappFormatted})</span>
              </a>
            </div>

            {/* Value bullets */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 sm:gap-x-6 text-[11px] sm:text-xs text-gray-600 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                <span>100% Real Client Creatives</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                <span>Verifiable Ad Account Data</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                <span>Full-Funnel Media Strategy</span>
              </span>
            </div>
          </div>

          {/* Right Column: Visual Showcase Preview Stack */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Back Card: Real Estate Creative */}
              <div className="relative z-10 rounded-2xl bg-white p-2.5 sm:p-3 shadow-2xl border border-gray-100 transform sm:rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-gray-900 group">
                  <img
                    src="./images/real-estate/hiliving-pristine-villas.png"
                    alt="Hi Living Pristine Signature Villas Creative by Shenbaga Devi C"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-5 text-white">
                    <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-[#14B8A6] mb-1">
                      Featured Real Estate Creative
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg leading-snug">
                      Hi Living Pristine Signature Villas
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-300 mt-1">
                      High-converting Instagram &amp; Facebook feed ad
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Aqua Tech / RO */}
              <div className="absolute -bottom-4 left-2 sm:-bottom-6 sm:-left-6 z-20 bg-white/95 backdrop-blur-md p-2.5 sm:p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2.5 sm:gap-3 animate-float max-w-[210px] sm:max-w-[240px]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 border border-gray-100">
                  <img
                    src="./images/aqua-tech/surya-ro-purifiers.jpg"
                    alt="Surya Aqua Tech creative thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <span className="block text-[9px] sm:text-[11px] font-bold text-[#FF6B6B] uppercase tracking-wider truncate">
                    Aqua Tech Client
                  </span>
                  <p className="text-[11px] sm:text-xs font-bold text-[#0A1128] leading-tight truncate">
                    Surya Aqua Tech
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-gray-500 truncate">
                    Product &amp; RO Creatives
                  </p>
                </div>
              </div>

              {/* Floating Badge 2: Campaign Result */}
              <div className="absolute -top-4 right-2 sm:-top-6 sm:-right-4 z-20 bg-[#0A1128]/95 backdrop-blur-md p-2.5 sm:p-3.5 rounded-2xl shadow-2xl border border-white/10 text-white flex items-center gap-2.5 sm:gap-3 animate-float-delayed max-w-[210px] sm:max-w-[240px]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#14B8A6]/20 border border-[#14B8A6]/40 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#14B8A6]" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[9px] sm:text-[10px] font-bold text-[#14B8A6] uppercase tracking-wider truncate">
                    Verified Result
                  </span>
                  <p className="text-xs sm:text-sm font-extrabold font-display leading-tight truncate">
                    1,277 Leads @ ₹4.59
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-gray-400 truncate">
                    SS Enterprises Meta Ads
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-gray-200/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {siteConfig.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm text-center lg:text-left"
              >
                <div className="text-2xl sm:text-4xl font-extrabold text-[#0A1128] font-display text-gradient-navy-teal">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-800 mt-1 line-clamp-1">
                  {stat.label}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 line-clamp-1">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
