import React, { useState } from 'react';
import { Palette, Eye, ZoomIn, Building2 } from 'lucide-react';
import { graphicProjects } from '../data/portfolioData';
import { GraphicCategory, GraphicProject } from '../types';
import { Lightbox } from './Lightbox';

export const GraphicPortfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GraphicCategory>('all');
  const [selectedProject, setSelectedProject] = useState<GraphicProject | null>(null);

  const categories: { id: GraphicCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Creatives', count: graphicProjects.length },
    { id: 'aqua-tech', label: 'Aqua Tech', count: graphicProjects.filter(p => p.category === 'aqua-tech').length },
    { id: 'real-estate', label: 'Real Estate', count: graphicProjects.filter(p => p.category === 'real-estate').length },
    { id: 'siddha-hospital', label: 'Siddha Hospital', count: graphicProjects.filter(p => p.category === 'siddha-hospital').length },
  ];

  const filteredProjects = activeCategory === 'all'
    ? graphicProjects
    : graphicProjects.filter((p) => p.category === activeCategory);

  const currentIndex = selectedProject
    ? filteredProjects.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedProject(filteredProjects[currentIndex - 1]);
    } else {
      setSelectedProject(filteredProjects[filteredProjects.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentIndex + 1]);
    } else {
      setSelectedProject(filteredProjects[0]);
    }
  };

  return (
    <section id="graphic-design" className="py-16 sm:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="space-y-2.5 sm:space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B6B]/10 text-[#FF6B6B] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <Palette className="w-3.5 h-3.5" />
              <span>Commercial Visual Design</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1128] font-display tracking-tight leading-tight">
              Social Media Graphic Portfolio
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Curated client designs built for Instagram and Facebook feeds. Each asset hooks viewer attention and prompts direct audience conversion.
            </p>
          </div>

          {/* Swipeable Category Filter Pills for Mobile */}
          <div className="flex overflow-x-auto no-scrollbar gap-2 p-1.5 bg-white rounded-2xl border border-gray-200/80 shadow-sm shrink-0 -mx-4 px-4 sm:mx-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-[#0A1128] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#0A1128] hover:bg-gray-100'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  activeCategory === cat.id
                    ? 'bg-[#FF6B6B] text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1 active:scale-[0.99]"
            >
              {/* Image Container with Zoom Overlay */}
              <div className="relative overflow-hidden bg-gray-900 aspect-[4/5] flex items-center justify-center">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.client}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Top Badge: Client & Category */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-[#0A1128]/85 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold tracking-wide border border-white/10 flex items-center gap-1 shadow-md truncate max-w-[170px]">
                    <Building2 className="w-3 h-3 text-[#14B8A6] shrink-0" />
                    <span className="truncate">{project.client}</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[#0A1128] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shadow-md shrink-0">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Mobile tap cue & desktop hover overlay */}
                <div className="absolute inset-0 bg-[#0A1128]/50 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4 text-center">
                  <div className="space-y-1">
                    <div className="w-10 h-10 rounded-full bg-white text-[#0A1128] flex items-center justify-center mx-auto shadow-lg">
                      <ZoomIn className="w-5 h-5 text-[#FF6B6B]" />
                    </div>
                    <p className="text-white text-[11px] font-bold uppercase tracking-widest">
                      Tap to Enlarge
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 space-y-2.5 bg-white">
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0A1128] group-hover:text-[#FF6B6B] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 mt-1 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#14B8A6] font-bold text-xs flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Inspect</span>
                    <Eye className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        currentIndex={currentIndex}
        totalCount={filteredProjects.length}
      />
    </section>
  );
};
