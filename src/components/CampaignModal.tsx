import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, TrendingUp, Building2, Calendar, Target, CheckCircle2, DollarSign, Users, MousePointerClick, ExternalLink } from 'lucide-react';
import { PaidCampaign } from '../types';

interface CampaignModalProps {
  campaign: PaidCampaign | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalCount: number;
}

export const CampaignModal: React.FC<CampaignModalProps> = ({
  campaign,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalCount,
}) => {
  useEffect(() => {
    if (!campaign) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [campaign, onClose, onPrev, onNext]);

  if (!campaign) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={campaign.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-xl p-3 sm:p-6 animate-in fade-in duration-200"
    >
      {/* Top Bar */}
      <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-white tracking-wider border border-white/10 flex items-center gap-2">
          <span>{currentIndex + 1} of {totalCount}</span>
          <span>•</span>
          <span className="text-[#14B8A6]">{campaign.platform}</span>
          <span>•</span>
          <span className="text-gray-300">{campaign.industry}</span>
        </div>
        <button
          onClick={onClose}
          className="pointer-events-auto p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
          aria-label="Close campaign audit"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-3 sm:left-6 z-40 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform -translate-y-1/2 top-1/2 border border-white/10 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
        aria-label="Previous campaign"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-3 sm:right-6 z-40 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform -translate-y-1/2 top-1/2 border border-white/10 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
        aria-label="Next campaign"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Modal Container */}
      <div
        className="w-full max-w-6xl max-h-[92vh] bg-[#0A1128] rounded-2xl border border-white/10 text-white overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-[#0E172E]">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                campaign.platform === 'Google Ads'
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                  : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
              }`}>
                {campaign.platform}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#14B8A6]" />
                {campaign.client}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1.5 hidden sm:inline-flex">
                <Calendar className="w-3.5 h-3.5 text-gray-500" />
                {campaign.dateRange}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
              {campaign.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Verified Client Dashboard</span>
            </span>
          </div>
        </div>

        {/* Modal Body: Two Columns (Screenshot & Metrics) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Original Screenshot Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span className="font-semibold uppercase tracking-wider flex items-center gap-1.5 text-gray-300">
                <TrendingUp className="w-4 h-4 text-[#FF6B6B]" />
                Original Dashboard Screenshot from Presentation
              </span>
              <span className="text-gray-500">Unmodified source screenshot</span>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-white/15 bg-black/60 shadow-inner max-h-[50vh] flex items-center justify-center p-2">
              <img
                src={campaign.image}
                alt={`${campaign.title} dashboard screenshot`}
                className="max-h-[46vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Strategy Summary */}
          <div className="bg-white/5 rounded-xl p-5 border border-white/10 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#14B8A6] flex items-center gap-1.5">
              <Target className="w-4 h-4" />
              <span>Campaign Strategy & Objective</span>
            </div>
            <p className="text-sm text-gray-200 leading-relaxed">
              {campaign.summary}
            </p>
          </div>

          {/* Numerical Audit Table / Cards */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Performance Metrics (Read Directly from Ad Account)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              <div className="bg-[#132238] p-4 rounded-xl border border-white/10">
                <span className="text-[11px] text-gray-400 block font-medium">Primary Results</span>
                <span className="text-lg font-extrabold text-[#14B8A6] font-display mt-1 block">
                  {campaign.primaryResult}
                </span>
                <span className="text-[10px] text-gray-400 mt-0.5 block">{campaign.primaryResultLabel}</span>
              </div>

              <div className="bg-[#132238] p-4 rounded-xl border border-white/10">
                <span className="text-[11px] text-gray-400 block font-medium">Cost Per Result</span>
                <span className="text-lg font-extrabold text-[#FF6B6B] font-display mt-1 block">
                  {campaign.costPerResult}
                </span>
                <span className="text-[10px] text-gray-400 mt-0.5 block">Calculated efficiency</span>
              </div>

              <div className="bg-[#132238] p-4 rounded-xl border border-white/10">
                <span className="text-[11px] text-gray-400 block font-medium">Amount Spent</span>
                <span className="text-lg font-extrabold text-white font-display mt-1 block">
                  {campaign.amountSpent}
                </span>
                <span className="text-[10px] text-gray-400 mt-0.5 block">Ad spend deployed</span>
              </div>

              <div className="bg-[#132238] p-4 rounded-xl border border-white/10">
                <span className="text-[11px] text-gray-400 block font-medium">Impressions</span>
                <span className="text-lg font-extrabold text-white font-display mt-1 block">
                  {campaign.impressions}
                </span>
                <span className="text-[10px] text-gray-400 mt-0.5 block">Ad views served</span>
              </div>

              {campaign.reach && (
                <div className="bg-[#132238] p-4 rounded-xl border border-white/10">
                  <span className="text-[11px] text-gray-400 block font-medium">Unique Reach</span>
                  <span className="text-lg font-extrabold text-white font-display mt-1 block">
                    {campaign.reach}
                  </span>
                  <span className="text-[10px] text-gray-400 mt-0.5 block">Unique users reached</span>
                </div>
              )}

              {campaign.ctr && (
                <div className="bg-[#132238] p-4 rounded-xl border border-white/10">
                  <span className="text-[11px] text-gray-400 block font-medium">Click-Through (CTR)</span>
                  <span className="text-lg font-extrabold text-emerald-400 font-display mt-1 block">
                    {campaign.ctr}
                  </span>
                  <span className="text-[10px] text-gray-400 mt-0.5 block">High engagement rate</span>
                </div>
              )}

              {campaign.conversionRate && (
                <div className="bg-[#132238] p-4 rounded-xl border border-white/10">
                  <span className="text-[11px] text-gray-400 block font-medium">Conversion Rate</span>
                  <span className="text-lg font-extrabold text-amber-300 font-display mt-1 block">
                    {campaign.conversionRate}
                  </span>
                  <span className="text-[10px] text-gray-400 mt-0.5 block">Click to enquiry</span>
                </div>
              )}
            </div>
          </div>

          {/* Breakdown List */}
          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Individual Ad Set & Campaign Breakdown
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {campaign.keyMetrics.map((km, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                  <div>
                    <span className="text-xs font-bold text-gray-200 block">{km.label}</span>
                    {km.subtext && (
                      <span className="text-[11px] text-gray-400">{km.subtext}</span>
                    )}
                  </div>
                  <span className="text-sm font-extrabold text-[#14B8A6] font-display ml-3 shrink-0">
                    {km.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-[#0E172E] flex items-center justify-between text-xs text-gray-400">
          <span>Shenbaga Devi C • Paid Digital Marketing Portfolio</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
          >
            Close Audit View
          </button>
        </div>
      </div>
    </div>
  );
};
