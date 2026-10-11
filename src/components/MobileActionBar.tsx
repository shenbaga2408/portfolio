import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/portfolioData';

export const MobileActionBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0A1128]/95 backdrop-blur-xl border-t border-white/10 px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi Shenbaga Devi, I saw your portfolio and would like to discuss a project.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs shadow-md"
        aria-label="Chat on WhatsApp"
      >
        <Phone className="w-4 h-4 shrink-0" />
        <span className="truncate">WhatsApp</span>
      </a>

      {/* Direct Phone Call */}
      <a
        href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white font-semibold text-xs border border-white/10"
        aria-label="Call Shenbaga Devi"
      >
        <Phone className="w-3.5 h-3.5 text-[#14B8A6]" />
        <span>Call</span>
      </a>

      {/* Direct Email */}
      <a
        href={`mailto:${siteConfig.contact.email}`}
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#FF6B6B] to-[#E64C4C] active:scale-95 text-white font-bold text-xs shadow-md"
        aria-label="Email Shenbaga Devi"
      >
        <Mail className="w-4 h-4 shrink-0" />
        <span className="truncate">Email Me</span>
      </a>
    </div>
  );
};
