import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectGridCard({ project }) {
  return (
    <div className="group">
      <Link to={`/projects/${project.slug}`} className="block group cursor-pointer text-left">
        {/* Preview image */}
        <div className="relative w-full aspect-[16/10] rounded-[24px] sm:rounded-[28px] overflow-hidden mb-5 border transition-all duration-500 shadow-md bg-[#1a1a1c] border-white/10 group-hover:border-[#d0ff71]/50">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Category Badge & Live / GitHub Links */}
        <div className="mb-3 flex items-center justify-between gap-2 flex-wrap">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-inter font-medium tracking-wide border transition-colors duration-300 border-[#d0ff71]/40 text-[#d0ff71] bg-[#d0ff71]/5">
            {project.category}
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-inter font-semibold transition-all duration-300 bg-[#d0ff71] text-black hover:scale-105 shadow-sm shadow-[#d0ff71]/25 cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-pulse"></span>
                <span>Live Project</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-inter font-medium transition-all duration-300 border border-white/20 hover:border-[#d0ff71] text-white hover:text-black hover:bg-[#d0ff71] shadow-sm hover:scale-105 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-antonio font-bold text-2xl sm:text-3xl md:text-[34px] leading-[0.98] uppercase tracking-tight mb-2.5 transition-colors duration-200 text-white group-hover:text-[#d0ff71]">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="font-inter font-normal text-sm sm:text-[15px] md:text-base leading-relaxed transition-colors duration-300 text-[#cccccc] line-clamp-3">
          {project.overview}
        </p>
      </Link>
    </div>
  );
}
