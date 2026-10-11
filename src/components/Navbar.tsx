import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Send } from 'lucide-react';
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        isScrolled
          ? 'bg-[#0A1128]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Shenbaga Devi C - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF6B6B] to-[#14B8A6] flex items-center justify-center text-white font-bold font-display shadow-md shadow-[#FF6B6B]/20 group-hover:scale-105 transition-transform">
              SD
            </div>
            <div>
              <span className={`text-lg font-bold font-display tracking-tight transition-colors ${
                isScrolled ? 'text-white' : 'text-[#0A1128]'
              }`}>
                {siteConfig.name}
              </span>
              <span className="block text-xs text-[#14B8A6] font-medium tracking-wide">
                Design & Digital Marketing
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

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#E64C4C] hover:from-[#E64C4C] hover:to-[#FF6B6B] text-white text-sm font-semibold shadow-md shadow-[#FF6B6B]/25 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>Let's Talk</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`p-2 rounded-xl md:hidden transition-colors ${
                isScrolled ? 'text-white hover:bg-white/10' : 'text-[#0A1128] hover:bg-black/5'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A1128]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-3 transition-all animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-gradient-to-r from-[#FF6B6B] to-[#14B8A6] text-white font-semibold'
                  : 'text-gray-200 hover:bg-white/10'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FF6B6B] text-white font-semibold shadow-lg text-sm"
            >
              <Send className="w-4 h-4" />
              <span>Contact Shenbaga Devi</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
