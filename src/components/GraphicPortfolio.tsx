import React, { useState } from 'react';
import { Palette, Eye, ZoomIn, Building2, Layers } from 'lucide-react';
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
    <section id="graphic-design" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B6B]/10 text-[#FF6B6B] text-xs font-bold uppercase tracking-wider">
              <Palette className="w-3.5 h-3.5" />
              <span>Commercial Visual Design</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1128] font-display tracking-tight">
              Social Media Graphic Portfolio
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Curated client designs built for Instagram and Facebook feeds. Each asset is created to hook viewer attention, convey clear value propositions, and prompt direct audience action.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-2xl border border-gray-200/80 shadow-sm shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-[#0A1128] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#0A1128] hover:bg-gray-100'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
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
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#0A1128]/85 backdrop-blur-md text-white text-[11px] font-bold tracking-wide border border-white/10 flex items-center gap-1.5 shadow-md">
                    <Building2 className="w-3 h-3 text-[#14B8A6]" />
                    {project.client}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[#0A1128] text-[10px] font-bold uppercase tracking-wider shadow-md">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Hover Action Overlay */}
                <div className="absolute inset-0 bg-[#0A1128]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
                    <div className="w-12 h-12 rounded-full bg-white text-[#0A1128] flex items-center justify-center mx-auto shadow-lg">
                      <ZoomIn className="w-6 h-6 text-[#FF6B6B]" />
                    </div>
                    <p className="text-white text-xs font-bold uppercase tracking-widest">
                      Click to Expand Artwork
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-5 flex flex-col justify-between flex-1 space-y-3 bg-white">
                <div>
                  <h3 className="font-display font-bold text-lg text-[#0A1128] group-hover:text-[#FF6B6B] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 mt-1.5 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#14B8A6] font-semibold text-xs flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>View</span>
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
