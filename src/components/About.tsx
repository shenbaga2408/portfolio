import React from 'react';
import { User, Award, CheckCircle2, Sparkles, Layers, TrendingUp, Palette, FileEdit } from 'lucide-react';
import { siteConfig } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14B8A6]/10 text-[#0F766E] text-xs font-bold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Professional Profile & Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1128] font-display tracking-tight">
            About Shenbaga Devi C
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed font-normal">
            A versatile creative designer and digital marketer bridging aesthetic design with data-backed media buying.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-5">
              <h3 className="text-xl font-bold font-display text-[#0A1128] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#FF6B6B]" />
                <span>The Synergy: Design That Converts</span>
              </h3>

              {siteConfig.aboutStory.map((paragraph, index) => (
                <p key={index} className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Config File Notice */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400">
                <FileEdit className="w-4 h-4 text-[#14B8A6]" />
                <span>Biography and skill configurations are centralized in <code className="bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded font-mono">portfolioData.ts</code></span>
              </div>
            </div>

            {/* Core Value Proposition Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B6B]/10 text-[#FF6B6B] flex items-center justify-center font-bold">
                  <Palette className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-[#0A1128]">
                  Brand Visual Identity
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  High-resolution social media creative graphics tailored to industries ranging from luxury real estate to healthcare clinics.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-[#0A1128]">
                  Performance Marketing
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  ROI-focused campaign architecture on Meta Ads and Google Ads with aggressive CPL reduction and scalable conversion volume.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Skills Matrix & Tools */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Skills Breakdown by Domain */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-6">
              <h3 className="text-lg font-bold font-display text-[#0A1128] flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#14B8A6]" />
                <span>Specialized Capabilities</span>
              </h3>

              <div className="space-y-6">
                {siteConfig.skills.map((skillGroup, idx) => (
                  <div key={idx} className="space-y-2.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF6B6B]">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200/60 text-gray-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6]" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Tools */}
            <div className="bg-[#0A1128] text-white p-8 rounded-3xl border border-white/10 shadow-xl space-y-5">
              <h3 className="text-base font-bold font-display text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-[#FF6B6B]" />
                <span>Primary Design & Marketing Tools</span>
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {siteConfig.tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5 hover:bg-white/10 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#14B8A6]" />
                    <span className="text-xs font-semibold text-gray-200">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
