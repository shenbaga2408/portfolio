import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Phone } from 'lucide-react';
import { siteConfig } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Graphic Design', href: '#graphic-design', id: 'graphic-design' },
    { label: 'Paid Campaigns', href: '#paid-campaigns', id: 'paid-campaigns' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#0A1128]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand / Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            aria-label="Shenbaga Devi C - Home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#FF6B6B] to-[#14B8A6] flex items-center justify-center text-white font-bold font-display shadow-md shadow-[#FF6B6B]/20 group-hover:scale-105 transition-transform text-sm sm:text-base shrink-0">
              SD
            </div>
            <div className="min-w-0">
              <span className="text-base sm:text-lg font-bold font-display tracking-tight text-white sm:text-[#0A1128] block truncate">
                {siteConfig.name}
              </span>
              <span className="block text-[10px] sm:text-xs text-[#14B8A6] font-medium tracking-wide truncate">
                Graphic Design &amp; Paid Ads
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0A1128]/5 backdrop-blur-sm p-1.5 rounded-full border border-black/5 dark:border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0A1128] text-white shadow-sm'
                      : isScrolled
                      ? 'text-gray-300 hover:text-white hover:bg-white/10'
                      : 'text-gray-700 hover:text-[#0A1128] hover:bg-black/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct WhatsApp Callout on mobile */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi Shenbaga Devi, I saw your portfolio and would like to discuss a project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex sm:hidden p-2 rounded-full bg-emerald-600 text-white shadow-sm hover:bg-emerald-500 transition-colors"
              aria-label="Direct WhatsApp Message"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Desktop Let's Talk CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#E64C4C] hover:from-[#E64C4C] hover:to-[#FF6B6B] text-white text-sm font-semibold shadow-md shadow-[#FF6B6B]/25 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>Let's Talk</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl md:hidden text-white sm:text-[#0A1128] hover:bg-white/10 sm:hover:bg-black/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white sm:text-[#0A1128]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[61px] bottom-0 bg-[#0A1128]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 overflow-y-auto flex flex-col justify-between animate-in fade-in duration-200 z-50">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3.5 rounded-2xl text-base font-semibold transition-all ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-[#FF6B6B] to-[#14B8A6] text-white shadow-lg'
                    : 'text-gray-200 hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3 pb-8">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi Shenbaga Devi, I saw your portfolio and would like to discuss a project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Chat on WhatsApp ({siteConfig.contact.whatsappFormatted})</span>
            </a>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#FF6B6B] text-white font-bold text-sm shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>Email: {siteConfig.contact.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
