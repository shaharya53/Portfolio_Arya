import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectStickyCard({ project, index }) {
  return (
    <div
      className="project-sticky-card sticky top-20 sm:top-24 md:top-26 w-full h-[80vh] sm:h-[84vh] mb-[10vh] sm:mb-[16vh] rounded-[32px] sm:rounded-[44px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.7)] border border-white/10 bg-[#1a1a1c] will-change-transform origin-top"
      style={{ zIndex: (index + 1) * 10 }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group block relative w-full h-full cursor-pointer overflow-hidden"
      >
        {/* Background Image */}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30 group-hover:via-black/40 transition-colors duration-500"></div>

        {/* Scroll dim overlay controlled by GSAP ScrollTrigger */}
        <div className="card-dim-overlay absolute inset-0 bg-black/70 opacity-0 pointer-events-none transition-opacity duration-200 z-10"></div>

        {/* Floating Top Right Arrow Badge */}
        <div className="absolute top-5 right-5 sm:top-10 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ease-out transform opacity-100 sm:opacity-0 sm:scale-75 group-hover:opacity-100 group-hover:scale-100 z-20 bg-[#d0ff71] text-black shadow-[0_12px_30px_rgba(208,255,113,0.45)]">
          <ArrowUpRight className="w-5 h-5 sm:w-7 sm:h-7 stroke-[2.5]" />
        </div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 sm:px-12 md:px-20 text-center z-20 pointer-events-none">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-inter font-semibold tracking-wide mb-3 sm:mb-5 transition-colors duration-300 shadow-md bg-[#d0ff71] text-black shadow-[0_4px_14px_rgba(208,255,113,0.35)]">
            {project.category}
          </span>
          <h3 className="font-antonio font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-white uppercase tracking-tight mb-3 sm:mb-4 max-w-4xl drop-shadow-lg leading-[0.94]">
            {project.title}
          </h3>
          <p className="font-inter font-normal text-sm sm:text-base md:text-[17px] text-white/90 max-w-3xl leading-relaxed drop-shadow-sm line-clamp-3 sm:line-clamp-none">
            {project.overview}
          </p>

          {/* Quick tech tags if present */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="hidden sm:flex flex-wrap gap-2 justify-center mt-5">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-inter bg-black/50 border border-white/20 text-white/80 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
