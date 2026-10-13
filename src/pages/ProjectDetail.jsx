import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Layers, Cpu, Calendar, Clock, Building2, Tag } from 'lucide-react';
import { projectsData } from '../data/projects';
import ProjectGridCard from '../components/ProjectGridCard';
import ContactSection from '../components/ContactSection';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function ProjectDetail() {
  const { slug } = useParams();

  // Find matching project by slug
  const project = projectsData.find((p) => p.slug === slug);
  useDocumentTitle(project ? project.title : 'Project Detail');

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-32 px-4 text-center">
        <h1 className="font-antonio font-bold text-6xl text-[#d0ff71] mb-4">404</h1>
        <h2 className="font-antonio font-bold text-3xl uppercase tracking-wider text-white mb-4">
          Project Not Found
        </h2>
        <p className="font-inter text-sm text-[#b5b5b5] max-w-md mb-8">
          The requested project case study could not be located. Browse all engineering projects below.
        </p>
        <Link
          to="/projects"
          className="font-antonio font-bold uppercase tracking-wider px-8 py-3 rounded-full bg-[#d0ff71] text-black"
        >
          View All Projects
        </Link>
      </div>
    );
  }

  // All other projects displayed in bottom "MORE PROJECTS" section
  const relatedProjects = projectsData.filter((p) => p.slug !== project.slug);

  return (
    <div className="w-full">
      <main className="pt-32 sm:pt-40 px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1400px] mx-auto w-full text-left">
        {/* Back navigation & Category badge */}
        <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
          <div className="flex items-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-inter text-[#b5b5b5] hover:text-[#d0ff71] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Projects
            </Link>
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-inter font-medium tracking-wide border transition-colors duration-300 border-[#d0ff71]/40 text-[#d0ff71] bg-[#d0ff71]/5">
              {project.category}
            </span>
          </div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-antonio font-bold uppercase tracking-wider bg-[#d0ff71] text-black hover:scale-105 transition-all shadow-md shadow-[#d0ff71]/20 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>View on GitHub &rarr;</span>
            </a>
          )}
        </div>

        {/* Title */}
        <h1 className="font-antonio font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[88px] uppercase tracking-tight leading-[0.92] mb-6 transition-colors duration-300 text-white">
          {project.title}
        </h1>

        {/* Tagline / Overview */}
        <p className="font-inter font-normal text-lg sm:text-xl md:text-2xl max-w-4xl leading-relaxed mb-12 transition-colors duration-300 text-[#b5b5b5]">
          {project.overview}
        </p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pb-12 sm:pb-16 border-b transition-colors duration-300 border-white/10">
          <div>
            <span className="block text-xs sm:text-sm font-inter uppercase tracking-wider text-[#9ca3af] mb-1.5">
              Year :
            </span>
            <span className="text-base sm:text-lg md:text-xl font-inter font-semibold transition-colors duration-300 text-[#d0ff71]">
              {project.year || '2026'}
            </span>
          </div>
          <div>
            <span className="block text-xs sm:text-sm font-inter uppercase tracking-wider text-[#9ca3af] mb-1.5">
              Industry :
            </span>
            <span className="text-base sm:text-lg md:text-xl font-inter font-semibold transition-colors duration-300 text-[#d0ff71]">
              {project.industry}
            </span>
          </div>
          <div>
            <span className="block text-xs sm:text-sm font-inter uppercase tracking-wider text-[#9ca3af] mb-1.5">
              Role / Focus :
            </span>
            <span className="text-base sm:text-lg md:text-xl font-inter font-semibold transition-colors duration-300 text-[#d0ff71]">
              {project.role}
            </span>
          </div>
          <div>
            <span className="block text-xs sm:text-sm font-inter uppercase tracking-wider text-[#9ca3af] mb-1.5">
              Project Duration :
            </span>
            <span className="text-base sm:text-lg md:text-xl font-inter font-semibold transition-colors duration-300 text-[#d0ff71]">
              {project.duration || '8 weeks'}
            </span>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="py-6 border-b border-white/10 flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase font-inter tracking-wider text-[#888888] mr-2">
            Technologies :
          </span>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-inter bg-[#1f1f22] border border-white/10 text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Primary Hero Image */}
        <div className="relative w-full max-w-4xl mx-auto h-[260px] sm:h-[360px] md:h-[420px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl my-8 sm:my-12 border transition-all duration-300 bg-[#1a1a1c] border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* ========================================================
            PROBLEM SECTION
           ======================================================== */}
        <div className="mb-20 sm:mb-28">
          <h2 className="font-antonio font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] uppercase tracking-tight mb-7 transition-colors duration-300 text-white">
            PROBLEM :
          </h2>
          <div className="font-inter font-normal text-base sm:text-lg md:text-[19px] lg:text-[20px] leading-[1.8] max-w-5xl space-y-5 mb-10 sm:mb-14 transition-colors duration-300 text-[#d1d5db]">
            {project.problem.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {project.detailImages && project.detailImages[0] && (
            <div className="relative w-full max-w-4xl mx-auto h-[260px] sm:h-[360px] md:h-[420px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border transition-all duration-300 bg-[#1a1a1c] border-white/10">
              <img
                src={project.detailImages[0]}
                alt="Problem Overview"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}
        </div>

        {/* ========================================================
            SOLUTION SECTION
           ======================================================== */}
        <div className="mb-20 sm:mb-28">
          <h2 className="font-antonio font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] uppercase tracking-tight mb-7 transition-colors duration-300 text-white">
            SOLUTION :
          </h2>
          <div className="font-inter font-normal text-base sm:text-lg md:text-[19px] lg:text-[20px] leading-[1.8] max-w-5xl space-y-5 mb-10 sm:mb-14 transition-colors duration-300 text-[#d1d5db]">
            {project.solution.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Solution Visuals (Grid of 2) */}
          {project.detailImages && project.detailImages.length > 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="relative w-full aspect-[4/3] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl border transition-all duration-300 bg-[#1a1a1c] border-white/10">
                <img
                  src={project.detailImages[1]}
                  alt="Solution Visual 1"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="relative w-full aspect-[4/3] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl border transition-all duration-300 bg-[#1a1a1c] border-white/10">
                <img
                  src={project.detailImages[2]}
                  alt="Solution Visual 2"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          )}
        </div>

        {/* ========================================================
            KEY FEATURES LIST
           ======================================================== */}
        {project.features && (
          <div className="mb-20 sm:mb-28 p-8 sm:p-12 rounded-[32px] bg-[#1a1a1c] border border-white/10 space-y-6">
            <h2 className="font-antonio font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#d0ff71]">
              CORE ARCHITECTURAL FEATURES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#d0ff71] shrink-0 mt-0.5" />
                  <span className="font-inter font-normal text-sm sm:text-base text-[#e5e7eb]">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            CHALLENGE & SUMMARY SECTIONS
           ======================================================== */}
        <div className="mb-20 sm:mb-28 space-y-14">
          <div>
            <h2 className="font-antonio font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] uppercase tracking-tight mb-7 transition-colors duration-300 text-white">
              CHALLENGE :
            </h2>
            <p className="font-inter font-normal text-base sm:text-lg md:text-[19px] lg:text-[20px] leading-[1.8] max-w-5xl transition-colors duration-300 text-[#d1d5db]">
              {project.challenge}
            </p>
          </div>

          <div>
            <h2 className="font-antonio font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] uppercase tracking-tight mb-7 transition-colors duration-300 text-white">
              SUMMARY :
            </h2>
            <div className="font-inter font-normal text-base sm:text-lg md:text-[19px] lg:text-[20px] leading-[1.8] max-w-5xl space-y-5 mb-10 sm:mb-14 transition-colors duration-300 text-[#d1d5db]">
              {project.summary.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {project.detailImages && project.detailImages[3] && (
              <div className="relative w-full max-w-4xl mx-auto h-[260px] sm:h-[360px] md:h-[420px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border transition-all duration-300 bg-[#1a1a1c] border-white/10">
                <img
                  src={project.detailImages[3]}
                  alt="Summary Overview"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}
          </div>
        </div>
      </main>

      {/* ========================================================
          MORE PROJECTS SECTION
         ======================================================== */}
      <section className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 pb-24 sm:pb-32">
        <div className="flex items-center gap-6 mb-12 sm:mb-16">
          <h2 className="font-antonio font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] uppercase tracking-tight whitespace-nowrap leading-none transition-colors duration-300 text-white">
            MORE PROJECTS
          </h2>
          <div className="flex-1 h-[1px] transition-colors duration-300 bg-white/15"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 sm:gap-y-16">
          {relatedProjects.map((p) => (
            <ProjectGridCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* Contact Section at bottom */}
      <ContactSection />
    </div>
  );
}
