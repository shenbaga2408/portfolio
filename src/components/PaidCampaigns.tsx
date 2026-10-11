import React, { useState } from 'react';
import { TrendingUp, BarChart3, Search, ChevronRight, Eye, ShieldCheck, DollarSign, Users, Award, ExternalLink } from 'lucide-react';
import { paidCampaigns } from '../data/portfolioData';
import { PaidCampaign } from '../types';
import { CampaignModal } from './CampaignModal';

export const PaidCampaigns: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedCampaign, setSelectedCampaign] = useState<PaidCampaign | null>(null);

  const filterOptions = [
    { id: 'all', label: 'All Campaigns', count: paidCampaigns.length },
    { id: 'Meta Ads', label: 'Meta Ads (Facebook & IG)', count: paidCampaigns.filter(c => c.platform === 'Meta Ads').length },
    { id: 'Google Ads', label: 'Google Search Ads', count: paidCampaigns.filter(c => c.platform === 'Google Ads').length },
    { id: 'Real Estate', label: 'Real Estate', count: paidCampaigns.filter(c => c.industry === 'Real Estate').length },
    { id: 'Aqua Tech', label: 'Aqua Tech', count: paidCampaigns.filter(c => c.industry === 'Aqua Tech').length },
    { id: 'Finance', label: 'Finance & Tech', count: paidCampaigns.filter(c => ['Mortgage Loan Business', 'Business Loan Client', 'Trading Software', 'AI Software Selling Business'].includes(c.industry)).length },
    { id: 'Retail & Services', label: 'Retail & Services', count: paidCampaigns.filter(c => ['Electronic Shop', 'Interiors & Architecture', 'Interior Designer', 'Career Re-Launch Program', 'Marketing Service / Google Ads'].includes(c.industry)).length },
  ];

  const filteredCampaigns = paidCampaigns.filter((camp) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'Meta Ads') return camp.platform === 'Meta Ads';
    if (activeFilter === 'Google Ads') return camp.platform === 'Google Ads';
    if (activeFilter === 'Real Estate') return camp.industry === 'Real Estate';
    if (activeFilter === 'Aqua Tech') return camp.industry === 'Aqua Tech';
    if (activeFilter === 'Finance') {
      return ['Mortgage Loan Business', 'Business Loan Client', 'Trading Software', 'AI Software Selling Business'].includes(camp.industry);
    }
    if (activeFilter === 'Retail & Services') {
      return ['Electronic Shop', 'Interiors & Architecture', 'Interior Designer', 'Career Re-Launch Program', 'Marketing Service / Google Ads'].includes(camp.industry);
    }
    return true;
  });

  const currentIndex = selectedCampaign
    ? filteredCampaigns.findIndex((c) => c.id === selectedCampaign.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedCampaign(filteredCampaigns[currentIndex - 1]);
    } else {
      setSelectedCampaign(filteredCampaigns[filteredCampaigns.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredCampaigns.length - 1) {
      setSelectedCampaign(filteredCampaigns[currentIndex + 1]);
    } else {
      setSelectedCampaign(filteredCampaigns[0]);
    }
  };

  return (
    <section id="paid-campaigns" className="py-24 bg-[#0A1128] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#14B8A6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#FF6B6B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14B8A6]/15 text-[#14B8A6] text-xs font-bold uppercase tracking-wider border border-[#14B8A6]/30">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Verifiable Paid Advertising Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
              Paid Digital Marketing Campaigns
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Real performance audits from live client advertising accounts across Meta Ads (Facebook & Instagram) and Google Ads. Every lead, conversion, click, and cost is pulled directly from the campaign dashboard screenshots.
            </p>
          </div>

          {/* Audit Guarantee Badge */}
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                100% Verifiable Data
              </p>
              <p className="text-[11px] text-gray-400">
                Original Meta & Google Ads screenshots included
              </p>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-white/10">
          {filterOptions.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-[#FF6B6B] to-[#14B8A6] text-white shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              <span>{filter.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                activeFilter === filter.id
                  ? 'bg-black/30 text-white'
                  : 'bg-white/10 text-gray-400'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Campaign Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCampaigns.map((camp) => (
            <div
              key={camp.id}
              onClick={() => setSelectedCampaign(camp)}
              className="group bg-[#0F1C31] hover:bg-[#13243F] rounded-2xl border border-white/10 hover:border-[#14B8A6]/50 shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1.5 overflow-hidden"
            >
              <div>
                {/* Screenshot Preview Header */}
                <div className="relative aspect-[16/7] bg-black/60 overflow-hidden border-b border-white/10 flex items-center justify-center p-2">
                  <img
                    src={camp.image}
                    alt={`${camp.title} dashboard screenshot`}
                    className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C31] via-transparent to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-md shadow-md ${
                      camp.platform === 'Google Ads'
                        ? 'bg-amber-400/90 text-black'
                        : 'bg-blue-600/90 text-white'
                    }`}>
                      {camp.platform}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-gray-200 border border-white/10">
                      {camp.industry}
                    </span>
                  </div>

                  {/* Hover Prompt */}
                  <div className="absolute inset-0 bg-[#0A1128]/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <div className="text-center px-4 space-y-1">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#14B8A6] text-white text-xs font-bold shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Full Audit</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-4">
                  <div>
                    <span className="text-xs text-gray-400 font-medium">Client Account</span>
                    <h3 className="text-base font-bold font-display text-white group-hover:text-[#14B8A6] transition-colors leading-snug line-clamp-1">
                      {camp.client}
                    </h3>
                  </div>

                  {/* Two Key Numerical Highlights */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-[#182B49] p-3 rounded-xl border border-white/5">
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                        Volume
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-[#14B8A6] font-display mt-0.5 block truncate">
                        {camp.primaryResult}
                      </span>
                      <span className="text-[9px] text-gray-400 truncate block">
                        {camp.primaryResultLabel}
                      </span>
                    </div>

                    <div className="bg-[#182B49] p-3 rounded-xl border border-white/5">
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                        Cost Efficiency
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-[#FF6B6B] font-display mt-0.5 block truncate">
                        {camp.costPerResult}
                      </span>
                      <span className="text-[9px] text-gray-400 truncate block">
                        Cost per result
                      </span>
                    </div>
                  </div>

                  {/* Quick secondary metrics */}
                  <div className="flex items-center justify-between text-[11px] text-gray-300 pt-1">
                    <span>
                      <strong className="text-white">Spend:</strong> {camp.amountSpent}
                    </span>
                    <span>
                      <strong className="text-white">Impr:</strong> {camp.impressions}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {camp.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-5 py-3.5 bg-[#0C1729] border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
                <span className="text-gray-400">{camp.dateRange}</span>
                <span className="text-[#14B8A6] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Campaign Detail Modal */}
      <CampaignModal
        campaign={selectedCampaign}
        onClose={() => setSelectedCampaign(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        currentIndex={currentIndex}
        totalCount={filteredCampaigns.length}
      />
    </section>
  );
};
