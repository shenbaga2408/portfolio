import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Tag, Building2 } from 'lucide-react';
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

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-xl p-3 sm:p-6 animate-in fade-in duration-200"
    >
      {/* Top Bar with counter & close */}
      <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-white tracking-wider border border-white/10">
          {currentIndex + 1} / {totalCount} • {project.categoryLabel}
        </div>
        <button
          onClick={onClose}
          className="pointer-events-auto p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
          aria-label="Close image lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-3 sm:left-6 z-40 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform -translate-y-1/2 top-1/2 border border-white/10 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
        aria-label="Previous artwork"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-3 sm:right-6 z-40 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform -translate-y-1/2 top-1/2 border border-white/10 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
        aria-label="Next artwork"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Content Container */}
      <div
        className="w-full max-w-5xl max-h-[90vh] flex flex-col lg:flex-row items-center justify-center gap-6 overflow-y-auto lg:overflow-visible p-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Creative Image */}
        <div className="relative max-h-[75vh] lg:max-h-[85vh] flex items-center justify-center shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[72vh] lg:max-h-[82vh] w-auto max-w-full rounded-xl shadow-2xl object-contain border border-white/10"
          />
        </div>

        {/* Project Info Panel */}
        <div className="w-full lg:w-96 bg-[#0A1128]/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-white space-y-4 shrink-0">
          <div className="flex items-center justify-between text-xs">
            <span className="px-3 py-1 rounded-full bg-[#FF6B6B]/20 text-[#FF6B6B] font-bold border border-[#FF6B6B]/30 uppercase tracking-wider">
              {project.categoryLabel}
            </span>
            <span className="flex items-center gap-1.5 text-gray-400">
              <Building2 className="w-3.5 h-3.5 text-[#14B8A6]" />
              {project.client}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold font-display leading-snug text-white">
            {project.title}
          </h2>

          <p className="text-sm text-gray-300 leading-relaxed">
            {project.description}
          </p>

          <div className="pt-2 border-t border-white/10">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Key Creative Highlights
            </h3>
            <ul className="space-y-1.5 text-xs text-gray-200">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 flex flex-wrap gap-1.5">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10"
              >
                <Tag className="w-2.5 h-2.5 text-[#FF6B6B]" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
