import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  Server,
  Database,
  Cpu,
  Palette,
  Terminal,
  ExternalLink,
  GraduationCap,
  Briefcase,
  ChevronDown,
} from 'lucide-react';
import { profileData } from '../data/profile';
import ContactSection from '../components/ContactSection';
import CounterStat from '../components/CounterStat';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function About() {
  useDocumentTitle('About Arya Shah | Experience & Skills');
  const [activeTab, setActiveTab] = useState('about');
  const [activeServiceMobile, setActiveServiceMobile] = useState(null);

  const tabs = [
    { id: 'about', label: 'ABOUT ME' },
    { id: 'services', label: 'WHAT I CAN DO' },
    { id: 'journey', label: 'MY JOURNEY' },
    { id: 'stack', label: 'MY TECH STACK' },
  ];

  return (
    <div className="w-full">
      {/* ========================================================
          MOBILE VIEW (Stacked sequential sections)
         ======================================================== */}
      <div className="block lg:hidden w-full px-4 sm:px-6 pt-28 pb-16 space-y-20 max-w-xl mx-auto text-left">
        {/* Section 1: About Bio */}
        <section className="space-y-6">
          <h1 className="font-antonio font-bold text-6xl sm:text-7xl leading-[0.9] tracking-tight uppercase mb-3 text-white">
            ABOUT ME
          </h1>
          <div className="pt-2">
            <h2 className="font-antonio font-normal text-2xl sm:text-3xl leading-tight tracking-wide uppercase text-white/95">
              {profileData.name}
            </h2>
            <span className="font-inter text-xs text-[#d0ff71] font-semibold uppercase tracking-wider block mt-1">
              {profileData.title}
            </span>
          </div>

          <div className="space-y-4 max-w-xl text-[#b5b5b5] font-inter font-light text-base leading-relaxed">
            <p>{profileData.summary}</p>
            <p>
              With academic distinction (SPI: 9.55 at LJ Institute of Engineering and Technology) and real-world development experience at Jigisha Infotech Pvt. Ltd., I focus on high-reliability architectures, modular codebases, and seamless user experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-2">
            <a
              href={profileData.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-[#d0ff71] transition-colors"
            >
              GitHub &rarr;
            </a>
            <a
              href={profileData.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-[#d0ff71] transition-colors"
            >
              LinkedIn &rarr;
            </a>
          </div>

          {/* Visual Profile Card */}
          <div className="relative w-full h-[320px] sm:h-[380px] rounded-[28px] overflow-hidden shadow-xl border bg-[#1f1f22] border-white/10 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-32 h-32 rounded-full border-4 border-[#d0ff71]/30 flex items-center justify-center bg-[#252528] mb-4">
              <span className="font-antonio font-bold text-5xl text-[#d0ff71]">
                {profileData.initials}
              </span>
            </div>
            <span className="font-antonio font-bold text-2xl text-white uppercase">
              {profileData.name}
            </span>
            <span className="font-inter text-xs text-[#b5b5b5] mt-1">
              {profileData.location}
            </span>
          </div>
        </section>

        {/* Section 2: Services with Fluid Accordion */}
        <section className="space-y-6">
          <h2 className="font-antonio font-bold text-5xl sm:text-6xl leading-[0.92] tracking-tight uppercase text-white">
            WHAT I CAN DO FOR YOU
          </h2>
          <p className="font-inter font-light text-sm text-[#b5b5b5] leading-relaxed">
            As a full-stack engineer, I build modern, scalable, and responsive digital products.
          </p>

          <div className="w-full divide-y divide-[#2a2a2c]">
            {profileData.services.map((service) => {
              const isOpen = activeServiceMobile === service.id;
              return (
                <div key={service.id} className="py-4">
                  <button
                    type="button"
                    onClick={() => setActiveServiceMobile(isOpen ? null : service.id)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none cursor-pointer"
                  >
                    <span className="font-antonio font-normal text-2xl tracking-tight text-white group-hover:text-[#d0ff71]">
                      {service.number} {service.title}
                    </span>
                    <div
                      className={`shrink-0 transition-transform duration-300 transform ${
                        isOpen ? 'rotate-180 text-[#d0ff71]' : 'text-white/60 group-hover:text-[#d0ff71]'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 stroke-[2]" />
                    </div>
                  </button>

                  {/* Fluid Height Grid Wrapper */}
                  <div className={`accordion-wrapper ${isOpen ? 'is-open' : ''}`}>
                    <div className="accordion-body">
                      <div className="pt-3 font-inter font-light text-sm text-[#b5b5b5] leading-relaxed">
                        {service.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: Journey / Timeline */}
        <section className="space-y-6">
          <h2 className="font-antonio font-bold text-5xl sm:text-6xl leading-[0.92] tracking-tight uppercase text-white">
            DISCOVER MY JOURNEY
          </h2>
          <p className="font-inter font-light text-sm text-[#b5b5b5] leading-relaxed">
            A chronological timeline of my professional work experience, academic milestones, and engineering achievements.
          </p>

          <div className="space-y-6 pt-2">
            {/* Experience */}
            {profileData.experience.map((exp, i) => (
              <div
                key={i}
                className="border-b border-[#2a2a2c] pb-6 hover:border-[#d0ff71]/60 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-antonio font-bold text-2xl sm:text-3xl uppercase tracking-tight text-white block">
                      {exp.role}
                    </span>
                    <span className="font-inter font-medium text-sm text-[#d0ff71] block mt-1">
                      {exp.company}
                    </span>
                  </div>
                  <span className="font-inter text-xs text-[#8e8e93] shrink-0 text-right">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-3 font-inter font-light text-sm text-[#cccccc] leading-relaxed">
                  {exp.highlights[0]}
                </p>
              </div>
            ))}

            {/* Education */}
            {profileData.education.map((edu, i) => (
              <div
                key={i}
                className="border-b border-[#2a2a2c] pb-6 hover:border-[#d0ff71]/60 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-antonio font-bold text-2xl sm:text-3xl uppercase tracking-tight text-white block">
                      {edu.degree}
                    </span>
                    <span className="font-inter font-medium text-sm text-[#d0ff71] block mt-1">
                      {edu.institution}
                    </span>
                  </div>
                  <span className="font-inter text-xs text-[#8e8e93] shrink-0 text-right">
                    {edu.period}
                  </span>
                </div>
                <p className="mt-2 font-inter font-light text-xs text-[#b5b5b5]">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Tech Stack */}
        <section className="space-y-6">
          <h2 className="font-antonio font-bold text-5xl sm:text-6xl leading-[0.92] tracking-tight uppercase text-white">
            MY TECH STACK
          </h2>
          <p className="font-inter font-light text-sm text-[#b5b5b5] leading-relaxed">
            I engineer with intention. React and Next.js for blazing-fast interfaces. Node.js, Express, and Django for scalable backends. PostgreSQL and MongoDB for resilient data.
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-5 rounded-2xl bg-[#1f1f22] border border-white/10">
              <span className="font-antonio font-bold text-xl uppercase tracking-wider text-[#d0ff71] block mb-2">
                Languages
              </span>
              <div className="flex flex-wrap gap-2">
                {profileData.technicalSkills.languages.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 rounded-full text-xs font-inter bg-white/5 border border-white/10 text-white"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#1f1f22] border border-white/10">
              <span className="font-antonio font-bold text-xl uppercase tracking-wider text-[#d0ff71] block mb-2">
                Frontend
              </span>
              <div className="flex flex-wrap gap-2">
                {profileData.technicalSkills.frontend.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 rounded-full text-xs font-inter bg-white/5 border border-white/10 text-white"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#1f1f22] border border-white/10">
              <span className="font-antonio font-bold text-xl uppercase tracking-wider text-[#d0ff71] block mb-2">
                Backend &amp; APIs
              </span>
              <div className="flex flex-wrap gap-2">
                {profileData.technicalSkills.backend.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 rounded-full text-xs font-inter bg-white/5 border border-white/10 text-white"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#1f1f22] border border-white/10">
              <span className="font-antonio font-bold text-xl uppercase tracking-wider text-[#d0ff71] block mb-2">
                Databases &amp; AI
              </span>
              <div className="flex flex-wrap gap-2">
                {profileData.technicalSkills.databases.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 rounded-full text-xs font-inter bg-white/5 border border-white/10 text-white"
                  >
                    {skill.name}
                  </span>
                ))}
                {profileData.technicalSkills.toolsWorkflow.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 rounded-full text-xs font-inter bg-white/5 border border-white/10 text-white"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================
          DESKTOP VIEW (Two-column layout matching reference)
         ======================================================== */}
      <div className="hidden lg:block relative w-full pt-32 pb-24 px-10 xl:px-16 max-w-[1440px] mx-auto text-left">
        {/* Navigation Tabs with Active Glow Pill */}
        <div className="flex items-center gap-8 mb-12 border-b border-white/15 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-antonio font-bold text-2xl uppercase tracking-wider pb-2 transition-all cursor-pointer relative ${
                activeTab === tab.id
                  ? 'text-[#d0ff71]'
                  : 'text-[#888888] hover:text-white'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-[-17px] left-0 right-0 h-[3px] bg-[#d0ff71] rounded-full shadow-[0_0_12px_#d0ff71]"></span>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-16 items-start">
          {/* Left Column: Dynamic Content Based on Active Tab */}
          <div className="col-span-7 space-y-8">
            {activeTab === 'about' && (
              <div key="about" className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <h1 className="font-antonio font-bold text-7xl xl:text-[88px] leading-[0.9] tracking-tight uppercase text-white">
                  ABOUT ME
                </h1>
                <div className="pt-2">
                  <h2 className="font-antonio font-bold text-3xl uppercase tracking-wider text-[#d0ff71]">
                    {profileData.name} — {profileData.title}
                  </h2>
                </div>
                <div className="space-y-4 font-inter font-light text-lg leading-relaxed text-[#b5b5b5] max-w-2xl">
                  <p>{profileData.summary}</p>
                  <p>
                    Currently pursuing a B.E. in Information Technology at LJ Institute of Engineering and Technology (SPI: 9.55), with professional experience building production web applications as a Full Stack Developer at Jigisha Infotech Pvt. Ltd.
                  </p>
                  <p>
                    I bring rigorous attention to clean code, modular components, relational and document database modeling, JWT security, and end-to-end performance tuning.
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-8">
                  <div>
                    <span className="block text-xs uppercase text-[#888888]">Location</span>
                    <span className="font-semibold text-lg text-white">{profileData.location}</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-[#888888]">Direct Contact</span>
                    <span className="font-semibold text-lg text-white">{profileData.phone}</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-[#888888]">Status</span>
                    <span className="font-semibold text-lg text-[#d0ff71]">{profileData.availability}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div key="services" className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <h2 className="font-antonio font-bold text-7xl xl:text-[88px] leading-[0.9] tracking-tight uppercase text-white">
                  WHAT I CAN DO FOR YOU
                </h2>
                <p className="font-inter font-light text-lg text-[#b5b5b5] max-w-xl">
                  As a full-stack developer, I build modern, interactive, and user-focused digital experiences.
                </p>

                <div className="space-y-4 max-w-2xl pt-4">
                  {profileData.services.map((service) => (
                    <div
                      key={service.id}
                      className="border-b border-[#2a2a2c] pb-5 hover:border-[#d0ff71]/60 transition-colors"
                    >
                      <div className="flex items-baseline gap-4 mb-2">
                        <span className="font-antonio font-bold text-3xl text-[#d0ff71]">
                          {service.number}
                        </span>
                        <h3 className="font-antonio font-bold text-2xl uppercase tracking-tight text-white">
                          {service.title}
                        </h3>
                      </div>
                      <p className="font-inter font-light text-sm text-[#b5b5b5] pl-10 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'journey' && (
              <div key="journey" className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <h2 className="font-antonio font-bold text-7xl xl:text-[88px] leading-[0.9] tracking-tight uppercase text-white">
                  DISCOVER MY JOURNEY
                </h2>
                <p className="font-inter font-light text-lg text-[#b5b5b5] max-w-xl">
                  Documented industry employment and formal academic qualifications.
                </p>

                <div className="space-y-8 max-w-2xl pt-4">
                  {/* Experience */}
                  <div className="space-y-4">
                    <span className="font-antonio font-bold text-xl uppercase tracking-wider text-[#d0ff71] flex items-center gap-2">
                      <Briefcase className="w-5 h-5" /> Professional Employment
                    </span>
                    {profileData.experience.map((exp, i) => (
                      <div
                        key={i}
                        className="p-6 rounded-[24px] bg-[#1a1a1c] border border-white/10 space-y-3 hover:border-white/20 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-antonio font-bold text-2xl uppercase tracking-tight text-white">
                              {exp.role}
                            </h3>
                            <span className="font-inter font-medium text-sm text-[#d0ff71]">
                              {exp.company}
                            </span>
                          </div>
                          <span className="font-inter text-xs text-[#8e8e93]">
                            {exp.period}
                          </span>
                        </div>
                        <ul className="space-y-2 font-inter font-light text-sm text-[#cccccc]">
                          {exp.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <span className="text-[#d0ff71] mt-0.5">•</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Education */}
                  <div className="space-y-4 pt-2">
                    <span className="font-antonio font-bold text-xl uppercase tracking-wider text-[#d0ff71] flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" /> Education &amp; Degrees
                    </span>
                    {profileData.education.map((edu, i) => (
                      <div
                        key={i}
                        className="p-6 rounded-[24px] bg-[#1a1a1c] border border-white/10 space-y-2 hover:border-white/20 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-antonio font-bold text-2xl uppercase tracking-tight text-white">
                              {edu.degree}
                            </h3>
                            <span className="font-inter text-sm text-[#d0ff71]">
                              {edu.institution}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="font-inter font-bold text-sm text-[#d0ff71] block">
                              {edu.metric}
                            </span>
                            <span className="font-inter text-xs text-[#8e8e93]">
                              {edu.period}
                            </span>
                          </div>
                        </div>
                        <p className="font-inter font-light text-xs text-[#a1a1aa]">
                          {edu.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'stack' && (
              <div key="stack" className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <h2 className="font-antonio font-bold text-7xl xl:text-[88px] leading-[0.9] tracking-tight uppercase text-white">
                  MY TECH STACK
                </h2>
                <p className="font-inter font-light text-lg text-[#b5b5b5] max-w-xl">
                  Production-tested engineering tools and frameworks I use every day.
                </p>

                <div className="grid grid-cols-2 gap-4 max-w-2xl pt-4">
                  <div className="p-6 rounded-[24px] bg-[#1a1a1c] border border-white/10 space-y-3 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center gap-2 text-[#d0ff71]">
                      <Terminal className="w-5 h-5" />
                      <span className="font-antonio font-bold text-lg uppercase tracking-wider">Languages</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {profileData.technicalSkills.languages.map((s) => (
                        <span key={s.name} className="px-2.5 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white hover:border-[#d0ff71]/40 transition-colors">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-[24px] bg-[#1a1a1c] border border-white/10 space-y-3 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center gap-2 text-[#d0ff71]">
                      <Code className="w-5 h-5" />
                      <span className="font-antonio font-bold text-lg uppercase tracking-wider">Frontend</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {profileData.technicalSkills.frontend.map((s) => (
                        <span key={s.name} className="px-2.5 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white hover:border-[#d0ff71]/40 transition-colors">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-[24px] bg-[#1a1a1c] border border-white/10 space-y-3 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center gap-2 text-[#d0ff71]">
                      <Server className="w-5 h-5" />
                      <span className="font-antonio font-bold text-lg uppercase tracking-wider">Backend &amp; APIs</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {profileData.technicalSkills.backend.map((s) => (
                        <span key={s.name} className="px-2.5 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white hover:border-[#d0ff71]/40 transition-colors">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-[24px] bg-[#1a1a1c] border border-white/10 space-y-3 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center gap-2 text-[#d0ff71]">
                      <Database className="w-5 h-5" />
                      <span className="font-antonio font-bold text-lg uppercase tracking-wider">Databases &amp; AI</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {profileData.technicalSkills.databases.map((s) => (
                        <span key={s.name} className="px-2.5 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white hover:border-[#d0ff71]/40 transition-colors">
                          {s.name}
                        </span>
                      ))}
                      {profileData.technicalSkills.toolsWorkflow.map((s) => (
                        <span key={s.name} className="px-2.5 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white hover:border-[#d0ff71]/40 transition-colors">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Visual Persona Card with Animated Counter */}
          <div className="col-span-5 sticky top-32 group">
            <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden bg-[#1f1f22] border border-white/10 shadow-2xl flex flex-col justify-end p-6 sm:p-8 text-center transition-all duration-300 hover:border-white/20">
              <img
                src={profileData.avatar || profileData.heroImage}
                alt={profileData.name}
                className="absolute inset-0 w-full h-full object-cover object-top sm:object-[center_15%] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-50% to-transparent pointer-events-none"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <h3 className="font-antonio font-bold text-3xl sm:text-4xl text-always-white uppercase tracking-tight mb-2 drop-shadow-md">
                  {profileData.name}
                </h3>
                <span className="font-inter text-xs font-semibold uppercase tracking-widest text-[#d0ff71] bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#d0ff71]/40 mb-3 shadow-lg">
                  {profileData.title}
                </span>
                <p className="font-inter font-light text-xs sm:text-sm text-always-light max-w-xs leading-relaxed mb-4 drop-shadow">
                  Passionate about clean UI/UX, scalable backend APIs, and end-to-end software ownership.
                </p>

                <div className="pt-3 border-t border-white/15 w-full flex justify-around text-xs font-inter text-always-light bg-black/45 backdrop-blur-md rounded-2xl py-3 px-2 border border-white/10">
                  <div>
                    <strong className="block text-always-white text-base font-antonio">
                      <CounterStat value={9.55} decimals={2} />
                    </strong>
                    <span>SPI Score</span>
                  </div>
                  <div>
                    <strong className="block text-always-white text-base font-antonio">
                      <CounterStat value={6} suffix=" Mos" />
                    </strong>
                    <span>Work Exp</span>
                  </div>
                  <div>
                    <strong className="block text-always-white text-base font-antonio">
                      <CounterStat value={3} suffix="+" />
                    </strong>
                    <span>Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section at bottom */}
      <ContactSection />
    </div>
  );
}
