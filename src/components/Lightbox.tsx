import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Tag, Building2, Sparkles } from 'lucide-react';
import { GraphicProject } from '../types';

interface LightboxProps {
  project: GraphicProject | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalCount: number;
}

export const Lightbox: React.FC<LightboxProps> = ({
  project,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalCount,
}) => {
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!project) return;

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
  }, [project, onClose, onPrev, onNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      onNext(); // swipe left -> next
    } else if (diff < -50) {
      onPrev(); // swipe right -> prev
    }
    touchStartX.current = null;
  };

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 sm:p-6 animate-in fade-in duration-200"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar with counter & close */}
      <div className="absolute top-3 left-3 right-3 z-50 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold text-white tracking-wider border border-white/15 flex items-center gap-1.5 shadow-md">
          <span>{currentIndex + 1} / {totalCount}</span>
          <span>•</span>
          <span className="text-[#FF6B6B]">{project.categoryLabel}</span>
        </div>
        <button
          onClick={onClose}
          className="pointer-events-auto p-2.5 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 text-white transition-all border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] shadow-lg"
          aria-label="Close image lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Desktop Navigation Side Arrows */}
      <button
        onClick={onPrev}
        className="hidden md:flex absolute left-4 z-40 p-3.5 rounded-full bg-white/10 hover:bg-white/25 active:scale-90 text-white transition-all transform -translate-y-1/2 top-1/2 border border-white/15 shadow-xl hover:scale-110 focus:outline-none"
        aria-label="Previous artwork"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="hidden md:flex absolute right-4 z-40 p-3.5 rounded-full bg-white/10 hover:bg-white/25 active:scale-90 text-white transition-all transform -translate-y-1/2 top-1/2 border border-white/15 shadow-xl hover:scale-110 focus:outline-none"
        aria-label="Next artwork"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Container */}
      <div
        className="w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 overflow-y-auto lg:overflow-visible p-1 sm:p-2 pt-14 pb-16 md:py-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Creative Artwork Container */}
        <div className="relative max-h-[48vh] sm:max-h-[65vh] lg:max-h-[82vh] flex items-center justify-center shrink-0 w-full lg:w-auto">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[45vh] sm:max-h-[62vh] lg:max-h-[80vh] w-auto max-w-full rounded-xl shadow-2xl object-contain border border-white/10 mx-auto"
          />
        </div>

        {/* Project Information Card */}
        <div className="w-full lg:w-96 bg-[#0A1128]/95 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/15 text-white space-y-3 sm:space-y-4 shrink-0 shadow-2xl">
          <div className="flex items-center justify-between text-xs">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FF6B6B]/20 text-[#FF6B6B] font-bold border border-[#FF6B6B]/30 uppercase tracking-wider text-[10px] sm:text-xs">
              {project.categoryLabel}
            </span>
            <span className="flex items-center gap-1.5 text-gray-300 text-xs">
              <Building2 className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span className="truncate max-w-[140px]">{project.client}</span>
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold font-display leading-snug text-white">
            {project.title}
          </h2>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {project.description}
          </p>

          <div className="pt-2 border-t border-white/10">
            <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
              Key Creative Highlights
            </h3>
            <ul className="space-y-1 text-xs text-gray-200">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] shrink-0" />
                  <span className="truncate">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-1 flex flex-wrap gap-1.5">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/10"
              >
                <Tag className="w-2.5 h-2.5 text-[#FF6B6B]" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Thumb Navigation Bar */}
      <div className="md:hidden fixed bottom-3 inset-x-3 z-50 flex items-center justify-between bg-[#0A1128]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 shadow-2xl">
        <button
          onClick={onPrev}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 text-white font-semibold text-xs active:scale-95"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <span className="text-[11px] text-gray-300 font-medium">
          {currentIndex + 1} of {totalCount}
        </span>

        <button
          onClick={onNext}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#14B8A6] text-white font-semibold text-xs active:scale-95 shadow-md"
          aria-label="Next image"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
