import React, { useState, useRef, useEffect } from 'react';
import { projectsData } from '../data/projects';
import ProjectStickyCard from '../components/ProjectStickyCard';
import ProjectGridCard from '../components/ProjectGridCard';
import ContactSection from '../components/ContactSection';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { setupStickyCards } from '../utils/motion';

export default function Projects() {
  useDocumentTitle('Projects & Technical Case Studies');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const featuredContainerRef = useRef(null);

  const featuredProjects = projectsData.filter((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  const categories = ['All', 'Full-Stack', 'Game Dev & Logic', 'Web Applications'];

  // Setup GSAP ScrollTrigger card stacking for featured projects
  useEffect(() => {
    if (!featuredContainerRef.current) return;
    const cleanup = setupStickyCards(featuredContainerRef.current);
    return cleanup;
  }, []);

  const filteredMoreProjects = otherProjects.filter((p) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Full-Stack') {
      return (
        p.category.includes('Full-Stack') ||
        p.category.includes('E-Commerce')
      );
    }
    if (selectedFilter === 'Game Dev & Logic') {
      return (
        p.category.includes('Game') ||
        p.category.includes('Logic') ||
        p.category.includes('Analytics')
      );
    }
    if (selectedFilter === 'Web Applications') {
      return (
        p.category.includes('Web') ||
        p.category.includes('Application')
      );
    }
    return true;
  });

  return (
    <div className="w-full">
      {/* ========================================================
          1. FEATURED PROJECTS (Sticky Stacked Cards)
         ======================================================== */}
      <section id="projects" className="relative w-full transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-36 pb-12 sm:pb-16 text-left">
          <h1 className="font-antonio font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[0.92] tracking-tight uppercase mb-4 transition-colors duration-300 text-white animate-in fade-in slide-in-from-bottom-3 duration-500">
            FEATURED PROJECTS
          </h1>
          <p className="font-inter font-light text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed transition-colors duration-300 text-[#b5b5b5] animate-in fade-in slide-in-from-bottom-2 duration-700">
            These selected projects reflect my passion for blending engineering precision with clean UI/UX — solving real challenges through thoughtful architecture and scalable digital products.
          </p>
        </div>

        {/* Sticky Stacked Cards with GSAP ScrollTrigger */}
        <div ref={featuredContainerRef} className="relative w-full max-w-[1400px] mx-auto px-3 sm:px-6">
          {featuredProjects.map((project, idx) => (
            <ProjectStickyCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* ========================================================
          2. MORE PROJECTS (2-Column Grid with Category Filter)
         ======================================================== */}
      <section className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 pb-24 sm:pb-32">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-6">
            <h2 className="font-antonio font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] uppercase tracking-tight whitespace-nowrap leading-none transition-colors duration-300 text-white">
              MORE PROJECTS
            </h2>
            <div className="hidden md:block flex-1 h-[1px] w-24 transition-colors duration-300 bg-white/15"></div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-inter font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-[#d0ff71] text-black shadow-md shadow-[#d0ff71]/25 scale-105'
                    : 'bg-[#1f1f22] text-[#b5b5b5] hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Grid with Animated Transition */}
        <div
          key={selectedFilter}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 sm:gap-y-16 animate-in fade-in duration-300"
        >
          {filteredMoreProjects.map((project) => (
            <ProjectGridCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Contact Section at bottom */}
      <ContactSection />
    </div>
  );
}
