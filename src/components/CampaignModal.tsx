import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, TrendingUp, Building2, Calendar, Target, CheckCircle2 } from 'lucide-react';
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
  const touchStartX = useRef<number | null>(null);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      onNext();
    } else if (diff < -50) {
      onPrev();
    }
    touchStartX.current = null;
  };

  if (!campaign) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={campaign.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-0 sm:p-4 lg:p-6 animate-in fade-in duration-200"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Floating Bar for Mobile/Desktop */}
      <div className="absolute top-3 left-3 right-3 z-50 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto bg-[#0A1128]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold text-white tracking-wider border border-white/15 flex items-center gap-1.5 shadow-xl">
          <span>{currentIndex + 1} of {totalCount}</span>
          <span>•</span>
          <span className="text-[#14B8A6]">{campaign.platform}</span>
        </div>
        <button
          onClick={onClose}
          className="pointer-events-auto p-2.5 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 text-white transition-all border border-white/20 focus:outline-none shadow-xl"
          aria-label="Close campaign audit"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Desktop Navigation Side Arrows */}
      <button
        onClick={onPrev}
        className="hidden lg:flex absolute left-4 z-40 p-3.5 rounded-full bg-white/10 hover:bg-white/25 active:scale-90 text-white transition-all transform -translate-y-1/2 top-1/2 border border-white/15 shadow-2xl hover:scale-110 focus:outline-none"
        aria-label="Previous campaign"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="hidden lg:flex absolute right-4 z-40 p-3.5 rounded-full bg-white/10 hover:bg-white/25 active:scale-90 text-white transition-all transform -translate-y-1/2 top-1/2 border border-white/15 shadow-2xl hover:scale-110 focus:outline-none"
        aria-label="Next campaign"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Modal Container */}
      <div
        className="w-full h-full sm:h-auto sm:max-h-[92vh] max-w-6xl bg-[#0A1128] rounded-none sm:rounded-2xl border-0 sm:border border-white/15 text-white overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="pt-14 sm:pt-6 p-4 sm:p-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-[#0E172E] shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                campaign.platform === 'Google Ads'
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                  : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
              }`}>
                {campaign.platform}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Building2 className="w-3 h-3 text-[#14B8A6]" />
                <span className="truncate max-w-[150px] sm:max-w-none">{campaign.client}</span>
              </span>
            </div>
            <h2 className="text-base sm:text-xl font-bold font-display text-white leading-snug">
              {campaign.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] sm:text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Account Data</span>
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 pb-20 sm:pb-6">
          
          {/* Original Screenshot Section with pinch/scroll hint */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] text-gray-400">
              <span className="font-semibold uppercase tracking-wider flex items-center gap-1.5 text-gray-300">
                <TrendingUp className="w-3.5 h-3.5 text-[#FF6B6B]" />
                Original Dashboard Screenshot
              </span>
              <span className="text-gray-500 text-[10px] hidden sm:inline">Unmodified client screenshot</span>
            </div>
            <div className="relative rounded-xl overflow-x-auto border border-white/15 bg-black/70 shadow-inner max-h-[38vh] sm:max-h-[50vh] flex items-center justify-center p-1.5 sm:p-2">
              <img
                src={campaign.image}
                alt={`${campaign.title} dashboard screenshot`}
                className="max-h-[35vh] sm:max-h-[46vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Strategy Summary */}
          <div className="bg-white/5 rounded-xl p-4 sm:p-5 border border-white/10 space-y-1.5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#14B8A6] flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5" />
              <span>Campaign Strategy &amp; Objective</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              {campaign.summary}
            </p>
          </div>

          {/* Numerical Audit Table */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2.5">
              Key Account Metrics
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3.5">
              <div className="bg-[#132238] p-3 sm:p-4 rounded-xl border border-white/10">
                <span className="text-[10px] text-gray-400 block font-medium">Primary Results</span>
                <span className="text-base sm:text-lg font-extrabold text-[#14B8A6] font-display mt-0.5 block truncate">
                  {campaign.primaryResult}
                </span>
                <span className="text-[9px] text-gray-400 mt-0.5 block truncate">{campaign.primaryResultLabel}</span>
              </div>

              <div className="bg-[#132238] p-3 sm:p-4 rounded-xl border border-white/10">
                <span className="text-[10px] text-gray-400 block font-medium">Cost Per Result</span>
                <span className="text-base sm:text-lg font-extrabold text-[#FF6B6B] font-display mt-0.5 block truncate">
                  {campaign.costPerResult}
                </span>
                <span className="text-[9px] text-gray-400 mt-0.5 block truncate">Acquisition cost</span>
              </div>

              <div className="bg-[#132238] p-3 sm:p-4 rounded-xl border border-white/10">
                <span className="text-[10px] text-gray-400 block font-medium">Amount Spent</span>
                <span className="text-base sm:text-lg font-extrabold text-white font-display mt-0.5 block truncate">
                  {campaign.amountSpent}
                </span>
                <span className="text-[9px] text-gray-400 mt-0.5 block truncate">Ad budget</span>
              </div>

              <div className="bg-[#132238] p-3 sm:p-4 rounded-xl border border-white/10">
                <span className="text-[10px] text-gray-400 block font-medium">Impressions</span>
                <span className="text-base sm:text-lg font-extrabold text-white font-display mt-0.5 block truncate">
                  {campaign.impressions}
                </span>
                <span className="text-[9px] text-gray-400 mt-0.5 block truncate">Ad views served</span>
              </div>

              {campaign.reach && (
                <div className="bg-[#132238] p-3 sm:p-4 rounded-xl border border-white/10">
                  <span className="text-[10px] text-gray-400 block font-medium">Unique Reach</span>
                  <span className="text-base sm:text-lg font-extrabold text-white font-display mt-0.5 block truncate">
                    {campaign.reach}
                  </span>
                  <span className="text-[9px] text-gray-400 mt-0.5 block truncate">Unique audience</span>
                </div>
              )}

              {campaign.ctr && (
                <div className="bg-[#132238] p-3 sm:p-4 rounded-xl border border-white/10">
                  <span className="text-[10px] text-gray-400 block font-medium">Click-Through (CTR)</span>
                  <span className="text-base sm:text-lg font-extrabold text-emerald-400 font-display mt-0.5 block truncate">
                    {campaign.ctr}
                  </span>
                  <span className="text-[9px] text-gray-400 mt-0.5 block truncate">High engagement</span>
                </div>
              )}

              {campaign.conversionRate && (
                <div className="bg-[#132238] p-3 sm:p-4 rounded-xl border border-white/10">
                  <span className="text-[10px] text-gray-400 block font-medium">Conversion Rate</span>
                  <span className="text-base sm:text-lg font-extrabold text-amber-300 font-display mt-0.5 block truncate">
                    {campaign.conversionRate}
                  </span>
                  <span className="text-[9px] text-gray-400 mt-0.5 block truncate">Lead conversion</span>
                </div>
              )}
            </div>
          </div>

          {/* Breakdown List */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
              Ad Set Breakdown
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {campaign.keyMetrics.map((km, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="min-w-0 pr-2">
                    <span className="text-xs font-bold text-gray-200 block truncate">{km.label}</span>
                    {km.subtext && (
                      <span className="text-[10px] text-gray-400 truncate block">{km.subtext}</span>
                    )}
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-[#14B8A6] font-display shrink-0">
                    {km.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile Fixed Bottom Navigation Bar */}
        <div className="p-3 sm:p-4 border-t border-white/10 bg-[#0E172E] flex items-center justify-between text-xs text-gray-400 shrink-0">
          <div className="flex items-center gap-2 w-full justify-between sm:w-auto">
            <button
              onClick={onPrev}
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-white/10 text-white font-semibold text-xs active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <span className="text-[11px] text-gray-300 sm:hidden">
              {currentIndex + 1} of {totalCount}
            </span>

            <button
              onClick={onNext}
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-[#14B8A6] text-white font-semibold text-xs active:scale-95 shadow-md"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
          >
            Close Audit View
          </button>
        </div>
      </div>
    </div>
  );
};
