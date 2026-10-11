import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060B18] text-white border-t border-white/10 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Logo & Headline */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF6B6B] to-[#14B8A6] flex items-center justify-center text-white font-bold font-display text-sm">
                SD
              </div>
              <span className="text-lg font-bold font-display tracking-tight text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-sm">
              Social Media Graphic Designer & Digital Marketer. High-impact creatives paired with quantifiable campaign results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-300">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#graphic-design" className="hover:text-white transition-colors">Graphic Design</a>
            <a href="#paid-campaigns" className="hover:text-white transition-colors">Paid Campaigns</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white border border-white/10 transition-all hover:-translate-y-0.5"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#14B8A6]" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All original artwork & client data rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Built for static deployment on GitHub Pages</span>
            <span className="text-[#FF6B6B]">•</span>
            <span>Zero Runtime Dependencies</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
