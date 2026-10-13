import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowUpRight, Star, ShieldCheck, Zap, Layers, Cpu } from 'lucide-react';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { blogsData } from '../data/blogs';
import ProjectStickyCard from '../components/ProjectStickyCard';
import BlogCard from '../components/BlogCard';
import FAQAccordion from '../components/FAQAccordion';
import ContactSection from '../components/ContactSection';
import CounterStat from '../components/CounterStat';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { gsap, ScrollTrigger, isReducedMotion, setupStickyCards } from '../utils/motion';

export default function Home() {
  useDocumentTitle('Full-Stack Developer Portfolio');
  const [activeServiceMobile, setActiveServiceMobile] = useState(null);
  const [activeDesktopService, setActiveDesktopService] = useState(null);

  // Desktop Pinned Multi-Stage Hero & Services Refs
  const pinnedDesktopRef = useRef(null);
  const heroStageRef = useRef(null);
  const servicesStageRef = useRef(null);
  const cardMotionContainerRef = useRef(null);
  const cardRotatorRef = useRef(null);
  const badgeRef = useRef(null);
  const projectsContainerRef = useRef(null);

  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 4);
  const featuredBlogs = blogsData.slice(0, 2);

  // 1. GSAP ScrollTrigger Pinned Timeline: Dropping & Flipping Hero Photo into "What I Can Do"
  useEffect(() => {
    if (isReducedMotion() || !pinnedDesktopRef.current) return;

    const ctx = gsap.context(() => {
      // Headline entrance on initial load
      const revealLines = heroStageRef.current?.querySelectorAll('.hero-mask-line');
      if (revealLines && revealLines.length > 0) {
        gsap.fromTo(
          revealLines,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.0,
            stagger: 0.15,
            ease: 'power3.out',
            delay: 0.15,
          }
        );
      }

      const fadeElements = heroStageRef.current?.querySelectorAll('.hero-fade-in');
      if (fadeElements && fadeElements.length > 0) {
        gsap.fromTo(
          fadeElements,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power2.out',
            delay: 0.55,
          }
        );
      }

      // Initial card scale-in entrance
      if (cardMotionContainerRef.current) {
        gsap.fromTo(
          cardMotionContainerRef.current,
          { scale: 0.88, opacity: 0, y: 40 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: 'power3.out',
            delay: 0.3,
          }
        );
      }

      // -------------------------------------------------------------
      // SCROLL-DRIVEN TIMELINE:
      // Drop photo from center, glide to right column, flip 180 to
      // reveal workspace photo, while "WHAT I CAN DO FOR YOU" enters!
      // -------------------------------------------------------------
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: pinnedDesktopRef.current,
          start: 'top top',
          end: '+=240%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        },
      });

      // Step 1: Badge scales down and fades out immediately upon scrolling
      if (badgeRef.current) {
        scrollTl.to(badgeRef.current, { autoAlpha: 0, scale: 0.5, duration: 0.3 }, 0);
      }

      // Step 2: Hero headline texts slide up and fade out
      if (heroStageRef.current) {
        scrollTl.to(
          heroStageRef.current,
          { autoAlpha: 0, y: -70, duration: 0.8, ease: 'power2.inOut' },
          0.1
        );
      }

      // Step 3: Card container drops down and translates horizontally to right column
      // Math: (7/24) * containerWidth + offset moves from center of 12-col grid to col-span-5 center
      if (cardMotionContainerRef.current) {
        scrollTl.to(
          cardMotionContainerRef.current,
          {
            x: () => (7 / 24) * Math.min(window.innerWidth - 80, 1360) + 10,
            y: () => {
              const cardH = window.innerWidth >= 1280 ? 490 : 460;
              return 88 - (window.innerHeight / 2 - cardH / 2);
            },
            duration: 1.3,
            ease: 'power2.inOut',
          },
          0.1
        );
      }

      // Step 4: Card flips 180 degrees in 3D to reveal the workspace photo!
      if (cardRotatorRef.current) {
        scrollTl.to(
          cardRotatorRef.current,
          {
            rotateY: 180,
            duration: 1.3,
            ease: 'power2.inOut',
          },
          0.1
        );
      }

      // Step 5: What I Can Do section slides in from below and fades in
      if (servicesStageRef.current) {
        scrollTl.to(
          servicesStageRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: 'power2.out',
          },
          0.65
        );
      }

      // Step 6: Hold in place for comfortable reading before scrolling to Featured Projects
      scrollTl.to({}, { duration: 0.8 });
    }, pinnedDesktopRef);

    return () => ctx.revert();
  }, []);

  // 2. Interactive 3D pointer-tracking tilt when at rest on Hero
  const handleCardMouseMove = (e) => {
    if (isReducedMotion() || !cardRotatorRef.current || !cardMotionContainerRef.current) return;

    // Only apply tilt if at or near top of page (hero stage)
    if (window.scrollY > 80) return;

    const rect = cardMotionContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    const tiltX = -percentY * 10;
    const tiltY = percentX * 10;

    gsap.to(cardRotatorRef.current, {
      rotateX: tiltX,
      rotateY: tiltY,
      duration: 0.3,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  const handleCardMouseLeave = () => {
    if (isReducedMotion() || !cardRotatorRef.current) return;
    if (window.scrollY > 80) return;

    gsap.to(cardRotatorRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  // 3. Featured Projects Sticky Card Stacking (GSAP ScrollTrigger)
  useEffect(() => {
    if (!projectsContainerRef.current) return;
    const cleanup = setupStickyCards(projectsContainerRef.current);
    return cleanup;
  }, []);

  return (
    <div className="w-full relative">
      {/* Hidden SEO H1 */}
      <h1 className="sr-only">
        {profileData.name} — Full-Stack Developer &amp; Software Engineer Portfolio
      </h1>

      {/* ========================================================
          1. MOBILE VIEW (Naturally stacked sequential sections)
         ======================================================== */}
      <div className="block lg:hidden w-full transition-colors duration-300">
        {/* Mobile Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center items-center pt-28 sm:pt-32 pb-12 px-4 sm:px-6 text-center select-none overflow-hidden">
          <div className="overflow-hidden">
            <span className="font-antonio font-bold text-xl sm:text-2xl md:text-3xl tracking-wider uppercase mb-1 block transition-colors duration-300 text-white/95">
              {profileData.name}
            </span>
          </div>
          <div className="overflow-hidden">
            <h2 className="font-antonio font-bold text-6xl sm:text-7xl md:text-8xl leading-[0.9] tracking-tight uppercase mb-4 transition-colors duration-300 text-white">
              DIGITAL
            </h2>
          </div>

          <div className="relative my-2 sm:my-3 will-change-transform">
            <div className="relative w-[260px] sm:w-[300px] md:w-[340px] h-[330px] sm:h-[390px] md:h-[440px] rounded-[32px] overflow-hidden shadow-2xl border transition-shadow duration-300 bg-[#1f1f22] border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
              <img
                src={profileData.heroImage}
                alt={profileData.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="overflow-hidden">
            <h2 className="font-antonio font-bold text-6xl sm:text-7xl md:text-8xl leading-[0.9] tracking-tight uppercase mt-4 mb-3 transition-colors duration-300 text-white">
              DEVELOPER
            </h2>
          </div>
          <p className="font-inter font-light text-sm sm:text-base md:text-lg max-w-md mx-auto leading-relaxed transition-colors duration-300 text-[#b5b5b5]">
            {profileData.heroSubtitle}
          </p>
        </section>

        {/* Mobile "What I Can Do For You" Section with Fluid Accordion */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-xl mx-auto text-left">
          <h2 className="font-antonio font-bold text-4xl sm:text-5xl md:text-6xl leading-[0.94] tracking-tight uppercase mb-3 transition-colors duration-300 text-white">
            WHAT I CAN DO FOR YOU
          </h2>
          <p className="font-inter font-light text-sm sm:text-base leading-relaxed mb-8 transition-colors duration-300 text-[#b5b5b5]">
            As a full-stack engineer and digital architect, I craft scalable systems that connect intuitive interfaces with high-performance backends.
          </p>

          <div className="w-full divide-y transition-colors duration-200">
            {profileData.services.map((service) => {
              const isOpen = activeServiceMobile === service.id;
              return (
                <div key={service.id} className="border-b transition-colors duration-200 border-[#767676]/30 py-4">
                  <button
                    type="button"
                    onClick={() => setActiveServiceMobile(isOpen ? null : service.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                  >
                    <span className="font-antonio font-bold text-2xl sm:text-3xl tracking-tight transition-colors duration-200 text-white group-hover:text-[#d0ff71]">
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
                      <div className="pt-3 pb-2 font-inter font-light text-sm text-[#b5b5b5] leading-relaxed">
                        {service.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Mobile "About Me" Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-xl mx-auto text-left space-y-6">
          <div>
            <h2 className="font-antonio font-bold text-5xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight uppercase mb-3 transition-colors duration-300 text-white">
              ABOUT ME
            </h2>
            <p className="font-inter font-light text-base sm:text-lg leading-relaxed transition-colors duration-300 text-[#b5b5b5]">
              Hi, I'm Arya — a full-stack developer passionate about building scalable, responsive web applications across the MERN and Python/Django stacks.
            </p>
          </div>

          {/* Quick Stats Grid with Count-up */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            <div>
              <div className="font-antonio font-bold text-5xl sm:text-6xl leading-none text-[#d0ff71]">
                <CounterStat value={6} />
              </div>
              <div className="font-inter font-medium text-xs sm:text-sm mt-1.5 leading-snug text-[#b5b5b5]">
                Months of Exp
              </div>
            </div>
            <div>
              <div className="font-antonio font-bold text-5xl sm:text-6xl leading-none text-[#d0ff71]">
                <CounterStat value={9.55} decimals={2} />
              </div>
              <div className="font-inter font-medium text-xs sm:text-sm mt-1.5 leading-snug text-[#b5b5b5]">
                Engineering SPI
              </div>
            </div>
            <div>
              <div className="font-antonio font-bold text-5xl sm:text-6xl leading-none text-[#d0ff71]">
                <CounterStat value={3} suffix="+" />
              </div>
              <div className="font-inter font-medium text-xs sm:text-sm mt-1.5 leading-snug text-[#b5b5b5]">
                Major Projects
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-2 text-sm sm:text-base">
            <div>
              <span className="block text-xs text-[#888888]">Call Today :</span>
              <span className="font-medium text-base sm:text-lg text-white">{profileData.phone}</span>
            </div>
            <div>
              <span className="block text-xs text-[#888888]">Email :</span>
              <a
                href={`mailto:${profileData.email}`}
                className="font-medium text-base sm:text-lg transition-colors text-white hover:text-[#d0ff71]"
              >
                {profileData.email}
              </a>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/about"
              className="inline-flex items-center justify-center font-antonio font-bold text-base tracking-wider uppercase rounded-full px-8 py-2.5 transition-all shadow-sm border border-[#d0ff71] text-[#d0ff71] hover:bg-[#d0ff71] hover:text-black"
            >
              MY STORY
            </Link>
          </div>
        </section>
      </div>

      {/* ========================================================
          2. DESKTOP PINNED MULTI-STAGE HERO & "WHAT I CAN DO"
             (GSAP ScrollTrigger: Photo drops, glides right & flips!)
         ======================================================== */}
      <div
        ref={pinnedDesktopRef}
        className="hidden lg:block relative w-full h-screen min-h-[720px] overflow-hidden select-none transition-colors duration-300 bg-[#141415] text-white"
      >
        {/* Subtle Ambient Radial Lighting Background */}
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_50%_45%,rgba(208,255,113,0.08),transparent_60%)]"></div>

        {/* STAGE 1: HERO VIEW (Left: Name/DIGITAL, Right: DEVELOPER/Subtitle) */}
        <div
          ref={heroStageRef}
          className="absolute inset-0 w-full h-full flex flex-col justify-between items-center pt-28 pb-12 px-8 z-10 pointer-events-auto"
        >
          <div className="w-full h-4"></div>

          <div className="w-full max-w-[1440px] mx-auto grid grid-cols-[1fr_auto_1fr] items-center justify-center gap-8 my-auto relative">
            {/* Left Column: Name & "DIGITAL" with Masked Reveal */}
            <div className="flex flex-col items-end justify-center z-10 min-w-0 pr-2">
              <div className="relative inline-block text-left">
                <div className="absolute bottom-full left-0 mb-2 text-left overflow-hidden">
                  <span className="hero-mask-line font-antonio font-bold text-2xl xl:text-[32px] tracking-wider uppercase whitespace-nowrap block text-white/95">
                    {profileData.name}
                  </span>
                </div>
                <div className="overflow-hidden">
                  <h2 className="hero-mask-line font-antonio font-bold text-7xl lg:text-[96px] xl:text-[112px] 2xl:text-[124px] leading-none tracking-tight uppercase whitespace-nowrap text-white">
                    DIGITAL
                  </h2>
                </div>
              </div>
            </div>

            {/* Center Spacer for 3D Card */}
            <div className="w-[370px] xl:w-[400px] h-[460px] xl:h-[490px] shrink-0 mx-auto justify-self-center opacity-0 pointer-events-none"></div>

            {/* Right Column: "DEVELOPER" & Subtitle */}
            <div className="flex flex-col items-start justify-center z-10 min-w-0 pl-2">
              <div className="relative inline-block text-left">
                <div className="overflow-hidden">
                  <h2 className="hero-mask-line font-antonio font-bold text-7xl lg:text-[96px] xl:text-[112px] 2xl:text-[124px] leading-none tracking-tight uppercase whitespace-nowrap text-white">
                    DEVELOPER
                  </h2>
                </div>
                <div className="absolute top-full left-0 mt-3 w-[440px] text-left">
                  <p className="hero-fade-in font-inter font-light text-base lg:text-lg pl-2 leading-snug text-[#b5b5b5]">
                    {profileData.heroSubtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-8"></div>
        </div>

        {/* STAGE 2: "WHAT I CAN DO FOR YOU" (Left: Accordion, Right: Card Slot) */}
        <div
          ref={servicesStageRef}
          className="absolute inset-0 w-full h-full flex items-start justify-center pt-24 pb-8 px-10 max-w-[1360px] mx-auto z-20 pointer-events-auto opacity-0 invisible"
        >
          <div className="w-full grid grid-cols-12 gap-10 xl:gap-14 items-start">
            {/* Left 7 Columns: Title, Subtitle & 5 Services Accordion */}
            <div className="col-span-7 flex flex-col justify-start text-left pointer-events-auto space-y-3">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-[#181819] w-fit shadow-md mb-1">
                <div className="w-5 h-5 rounded-full overflow-hidden bg-[#252528] border border-white/20 flex items-center justify-center font-antonio font-bold text-[10px] text-[#d0ff71]">
                  {profileData.avatar ? (
                    <img src={profileData.avatar} alt={profileData.name} className="w-full h-full object-cover" />
                  ) : (
                    profileData.initials
                  )}
                </div>
                <span className="text-xs font-inter font-medium tracking-tight text-white/90">
                  {profileData.availability}
                </span>
              </div>

              <div>
                <h2 className="font-antonio font-bold text-6xl lg:text-[66px] xl:text-[72px] leading-[0.94] tracking-tight uppercase mb-2 text-white">
                  WHAT I CAN DO FOR YOU
                </h2>
                <p className="font-inter font-light text-base md:text-[17px] max-w-lg mb-3 leading-relaxed text-[#b5b5b5]">
                  As a digital designer and software developer, I craft scalable systems that connect intuitive interfaces with high-performance backends.
                </p>
              </div>

              {/* 5 Services Accordion matching the reference */}
              <div className="max-w-xl w-full pointer-events-auto divide-y divide-[#767676]/30">
                {profileData.services.map((service) => {
                  const isOpen = activeDesktopService === service.id;
                  return (
                    <div key={service.id} className="border-b border-[#767676]/30 py-3.5">
                      <button
                        type="button"
                        onClick={() => setActiveDesktopService(isOpen ? null : service.id)}
                        className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                      >
                        <span className="font-antonio font-bold text-3xl lg:text-[40px] tracking-tight transition-colors duration-200 text-white group-hover:text-[#d0ff71]">
                          {service.number} {service.title}
                        </span>
                        <div
                          className={`transition-transform duration-300 transform ${
                            isOpen ? 'rotate-180 text-[#d0ff71]' : 'text-white/60 group-hover:text-[#d0ff71]'
                          }`}
                        >
                          <ChevronDown className="w-6 h-6 stroke-[2]" />
                        </div>
                      </button>

                      <div className={`accordion-wrapper ${isOpen ? 'is-open' : ''}`}>
                        <div className="accordion-body">
                          <p className="pt-2.5 pb-1 font-inter font-light text-sm md:text-base text-[#b5b5b5] leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right 5 Columns: Target Slot Placeholder for the Dropping Card */}
            <div className="col-span-5 flex justify-center items-start pointer-events-none">
              <div className="w-[370px] xl:w-[400px] h-[460px] xl:h-[490px] opacity-0"></div>
            </div>
          </div>
        </div>

        {/* THE MOVING 3D CARD (Glides from Center to Right Column & Flips in 3D) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <div
            ref={cardMotionContainerRef}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            className="relative pointer-events-auto will-change-transform perspective-1500"
          >
            <div
              ref={cardRotatorRef}
              className="relative w-[370px] xl:w-[400px] h-[460px] xl:h-[490px] rounded-[36px] cursor-pointer shadow-[0_30px_70px_rgba(0,0,0,0.85)] transform-style-3d select-none overflow-visible"
            >
              {/* Front Face: Arya Shah Photo (Visible on Hero) */}
              <div
                className="absolute inset-0 w-full h-full rounded-[36px] overflow-hidden bg-[#1f1f22] border border-white/10 backface-hidden shadow-2xl group"
                style={{ transform: 'translateZ(1px)' }}
              >
                <img
                  src={profileData.heroImage}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Back Face: High-Res Workstation Image (Revealed when card drops & sets at right) */}
              <div
                className="absolute inset-0 w-full h-full rounded-[36px] overflow-hidden bg-[#181819] border border-white/15 backface-hidden shadow-2xl"
                style={{
                  transform: 'rotateY(180deg) translateZ(1px)',
                }}
              >
                <img
                  src="/images/workspace.jpg"
                  alt="Developer Workstation & Desk Setup"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          3. FEATURED PROJECTS SECTION (Sticky Stacked Cards)
         ======================================================== */}
      <section id="projects" className="relative w-full transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-36 pb-12 sm:pb-16 text-left">
          <h2 className="font-antonio font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[0.92] tracking-tight uppercase mb-4 transition-colors duration-300 text-white">
            FEATURED PROJECTS
          </h2>
          <p className="font-inter font-light text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed transition-colors duration-300 text-[#b5b5b5]">
            These selected projects reflect my passion for blending engineering depth with clean UX — solving real-world challenges through scalable architecture and performant code.
          </p>
        </div>

        {/* Sticky Stacked Cards with GSAP ScrollTrigger */}
        <div ref={projectsContainerRef} className="relative w-full max-w-[1400px] mx-auto px-3 sm:px-6">
          {featuredProjects.map((project, idx) => (
            <ProjectStickyCard key={project.slug} project={project} index={idx} />
          ))}
        </div>

        {/* "Browse All Projects" Button */}
        <div className="pt-8 sm:pt-6 pb-16 sm:pb-24 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center font-antonio font-bold text-base sm:text-lg tracking-[0.4em] uppercase rounded-[99px] px-12 sm:px-14 py-4 sm:py-4.5 transition-all duration-300 shadow-md hover:scale-105 cursor-pointer border-2 border-[#d0ff71] text-[#d0ff71] hover:bg-[#d0ff71] hover:text-black shadow-[0_4px_20px_rgba(208,255,113,0.15)]"
          >
            BROWSE ALL PROJECTS
          </Link>
        </div>
      </section>

      {/* ========================================================
          4. ENGINEERING HIGHLIGHTS & CREDIBILITY CARDS
         ======================================================== */}
      <section id="highlights" className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 max-w-[1400px] mx-auto transition-colors duration-300">
        <div className="text-left mb-14 sm:mb-20">
          <h2 className="font-antonio font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[0.92] tracking-tight uppercase mb-4 transition-colors duration-300 text-white">
            ENGINEERING HIGHLIGHTS
          </h2>
          <p className="font-inter font-light text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed transition-colors duration-300 text-[#b5b5b5]">
            Authentic career achievements, engineering principles, and academic performance backed by verified coursework and industry experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {/* Card 1: Production Engineering */}
          <div className="rounded-[28px] p-7 sm:p-8 flex flex-col justify-between min-h-[260px] sm:min-h-[280px] transition-all duration-300 border bg-[#252528] border-white/10 text-white shadow-lg shadow-black/20 hover:-translate-y-1.5 hover:border-white/20">
            <div>
              <div className="flex items-center gap-2 mb-5 text-[#d0ff71]">
                <Layers className="w-6 h-6" />
                <span className="font-antonio font-bold text-lg uppercase tracking-wide">Industry Experience</span>
              </div>
              <p className="font-inter font-light text-sm sm:text-base leading-relaxed mb-6 text-[#d4d4d4]">
                “Contributed to production web applications at Jigisha Infotech Pvt. Ltd., translating complex UI/UX designs into reusable React components and optimizing site performance.”
              </p>
            </div>
            <div className="flex items-center gap-3.5 pt-2">
              <div className="w-11 h-11 rounded-full bg-[#141415] border border-white/20 flex items-center justify-center font-antonio font-bold text-sm text-[#d0ff71] shrink-0">
                JI
              </div>
              <div className="text-left">
                <h4 className="font-antonio font-bold text-lg sm:text-xl uppercase tracking-tight leading-none text-white">
                  Jigisha Infotech
                </h4>
                <span className="font-inter font-light text-xs block mt-1 text-[#999999]">
                  Full Stack Developer (Mar – Aug 2026)
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: AI Pipeline & Multimodal Processing */}
          <div className="rounded-[28px] p-7 sm:p-8 flex flex-col justify-between min-h-[260px] sm:min-h-[280px] transition-all duration-300 border bg-[#252528] border-white/10 text-white shadow-lg shadow-black/20 hover:-translate-y-1.5 hover:border-white/20">
            <div>
              <div className="flex items-center gap-2 mb-5 text-[#d0ff71]">
                <Cpu className="w-6 h-6" />
                <span className="font-antonio font-bold text-lg uppercase tracking-wide">AI Architecture</span>
              </div>
              <p className="font-inter font-light text-sm sm:text-base leading-relaxed mb-6 text-[#d4d4d4]">
                “Architected multimodal duplicate detection using PyTorch, PGvector embeddings, and Celery asynchronous task queues in CivicFix, drastically reducing redundant complaint processing.”
              </p>
            </div>
            <div className="flex items-center gap-3.5 pt-2">
              <div className="w-11 h-11 rounded-full bg-[#141415] border border-white/20 flex items-center justify-center font-antonio font-bold text-sm text-[#d0ff71] shrink-0">
                CF
              </div>
              <div className="text-left">
                <h4 className="font-antonio font-bold text-lg sm:text-xl uppercase tracking-tight leading-none text-white">
                  CivicFix Platform
                </h4>
                <span className="font-inter font-light text-xs block mt-1 text-[#999999]">
                  FastAPI, Celery &amp; PGvector
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Academic Excellence Stat Card with Count-up */}
          <div className="rounded-[28px] p-7 sm:p-8 flex flex-col justify-between min-h-[260px] sm:min-h-[280px] transition-all duration-300 bg-[#252528] border border-white/10 text-white shadow-lg hover:-translate-y-1.5 hover:border-[#d0ff71]/30">
            <p className="font-inter font-light text-xs sm:text-sm max-w-[220px] leading-relaxed text-white/70">
              LJ Institute of Engineering &amp; Technology (2023 – 2027)
            </p>
            <div>
              <div className="font-antonio font-bold text-6xl sm:text-7xl lg:text-[76px] leading-none mb-1.5 text-white">
                <CounterStat value={9.55} decimals={2} />
              </div>
              <div className="font-inter font-light text-xs sm:text-sm tracking-wide text-white/70">
                Semester Performance Index (SPI)
              </div>
            </div>
          </div>

          {/* Card 4: Accent Lime Stat Card with Count-up */}
          <div className="rounded-[28px] p-7 sm:p-8 flex flex-col justify-between min-h-[260px] sm:min-h-[280px] transition-all duration-300 bg-[#d0ff71] text-black shadow-xl shadow-[#d0ff71]/20 border border-[#bbf455] hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(208,255,113,0.35)]">
            <p className="font-inter font-light text-xs sm:text-sm max-w-[220px] leading-relaxed text-black/80">
              AI Duplicate Ticket Clutter Reduction
            </p>
            <div>
              <div className="font-antonio font-bold text-6xl sm:text-7xl lg:text-[76px] leading-none mb-1.5 text-black">
                <CounterStat value={65} suffix="%" />
              </div>
              <div className="font-inter font-light text-xs sm:text-sm tracking-wide text-black/80">
                Ticket Deduplication Efficiency
              </div>
            </div>
          </div>

          {/* Card 5: Full-Stack Ownership */}
          <div className="rounded-[28px] p-7 sm:p-8 flex flex-col justify-between min-h-[260px] sm:min-h-[280px] transition-all duration-300 border bg-[#252528] border-white/10 text-white shadow-lg shadow-black/20 hover:-translate-y-1.5 hover:border-white/20">
            <div>
              <div className="flex items-center gap-2 mb-5 text-[#d0ff71]">
                <ShieldCheck className="w-6 h-6" />
                <span className="font-antonio font-bold text-lg uppercase tracking-wide">End-to-End Ownership</span>
              </div>
              <p className="font-inter font-light text-sm sm:text-base leading-relaxed mb-6 text-[#d4d4d4]">
                “Comfortable owning features end-to-end — from database schema design and secure JWT auth to polished, accessible, responsive React interfaces.”
              </p>
            </div>
            <div className="flex items-center gap-3.5 pt-2">
              <div className="w-11 h-11 rounded-full bg-[#141415] border border-white/20 flex items-center justify-center font-antonio font-bold text-sm text-[#d0ff71] shrink-0">
                FS
              </div>
              <div className="text-left">
                <h4 className="font-antonio font-bold text-lg sm:text-xl uppercase tracking-tight leading-none text-white">
                  MERN &amp; Django Stack
                </h4>
                <span className="font-inter font-light text-xs block mt-1 text-[#999999]">
                  REST APIs to Production React UI
                </span>
              </div>
            </div>
          </div>

          {/* Card 6: Performance Optimization */}
          <div className="rounded-[28px] p-7 sm:p-8 flex flex-col justify-between min-h-[260px] sm:min-h-[280px] transition-all duration-300 border bg-[#252528] border-white/10 text-white shadow-lg shadow-black/20 hover:-translate-y-1.5 hover:border-white/20">
            <div>
              <div className="flex items-center gap-2 mb-5 text-[#d0ff71]">
                <Zap className="w-6 h-6" />
                <span className="font-antonio font-bold text-lg uppercase tracking-wide">Performance Tuning</span>
              </div>
              <p className="font-inter font-light text-sm sm:text-base leading-relaxed mb-6 text-[#d4d4d4]">
                “Hands-on experience optimizing database query indexes in PostgreSQL and MongoDB, reducing latency and ensuring cross-browser stability.”
              </p>
            </div>
            <div className="flex items-center gap-3.5 pt-2">
              <div className="w-11 h-11 rounded-full bg-[#141415] border border-white/20 flex items-center justify-center font-antonio font-bold text-sm text-[#d0ff71] shrink-0">
                OP
              </div>
              <div className="text-left">
                <h4 className="font-antonio font-bold text-lg sm:text-xl uppercase tracking-tight leading-none text-white">
                  Fast Response Times
                </h4>
                <span className="font-inter font-light text-xs block mt-1 text-[#999999]">
                  Sub-100ms Query Optimization
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. FREQUENTLY ASKED QUESTIONS SECTION
         ======================================================== */}
      <FAQAccordion />

      {/* ========================================================
          6. BLOG ARTICLES SECTION
         ======================================================== */}
      <section id="blogs" className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 max-w-[1400px] mx-auto transition-colors duration-300">
        <div className="text-left mb-12 sm:mb-16">
          <div className="flex items-center gap-4 flex-wrap mb-4">
            <h2 className="font-antonio font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[0.92] tracking-tight uppercase transition-colors duration-300 text-white">
              DEV INSIGHTS &amp; IDEAS
            </h2>
          </div>
          <p className="font-inter font-light text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed transition-colors duration-300 text-[#b5b5b5]">
            From web development trends to creative code architecture, these articles offer insights to help you elevate your craft, solve challenges, and spark new ideas for your projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {featuredBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>

        <div className="mt-14 sm:mt-20 flex justify-center">
          <Link
            to="/blogs"
            className="font-antonio font-bold text-lg sm:text-2xl uppercase tracking-wider rounded-full border px-8 sm:px-14 py-3.5 sm:py-4 transition-all duration-300 hover:scale-105 border-white/20 text-white hover:border-[#d0ff71] hover:text-[#d0ff71] hover:shadow-[0_0_24px_rgba(208,255,113,0.2)]"
          >
            BROWSE ALL INSIGHTS
          </Link>
        </div>
      </section>

      {/* ========================================================
          7. CONTACT SECTION
         ======================================================== */}
      <ContactSection />
    </div>
  );
}
