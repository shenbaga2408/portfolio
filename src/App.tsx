import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GraphicPortfolio } from './components/GraphicPortfolio';
import { PaidCampaigns } from './components/PaidCampaigns';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'graphic-design', 'paid-campaigns', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0A1128] flex flex-col">
      <Navbar activeSection={activeSection} />
      <main className="flex-1">
        <Hero />
        <GraphicPortfolio />
        <PaidCampaigns />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
