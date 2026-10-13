import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profileData } from '../data/profile';
import { isReducedMotion } from '../utils/motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const location = useLocation();

  // Close mobile menu and reset navbar on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setIsScrolledDown(false);
  }, [location.pathname]);

  // Scroll listener: collapse to compact pill when scrolling down, expand to normal when scrolling up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 60) {
        setIsScrolledDown(false);
      } else if (currentScrollY > lastScrollY + 8) {
        // Scrolling down -> compact pill
        setIsScrolledDown(true);
      } else if (currentScrollY < lastScrollY - 8) {
        // Scrolling up -> normal full navbar
        setIsScrolledDown(false);
      }

      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blogs', path: '/blogs' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 sm:pt-6 md:pt-7 px-4 pointer-events-none transition-all duration-300">
      {/* Mobile Floating Pill Navigation */}
      <div className="flex md:hidden pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-500">
        <div className="flex items-center gap-3 sm:gap-3.5 pl-3 pr-2.5 py-2 sm:py-2.5 rounded-full backdrop-blur-xl transition-all duration-300 shadow-xl border bg-[#141416]/90 border-white/15 text-white shadow-black/50">
          <Link
            to="/"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-white/20 shrink-0 shadow-sm transition-transform active:scale-95 bg-[#252528] flex items-center justify-center font-antonio font-bold text-xs text-[#d0ff71]"
            aria-label="Home"
          >
            {profileData.avatar ? (
              <img src={profileData.avatar} alt={profileData.name} className="w-full h-full object-cover" />
            ) : (
              profileData.initials
            )}
          </Link>
          <span className="text-sm sm:text-[15px] font-inter font-medium tracking-tight whitespace-nowrap px-1">
            {profileData.availability}
          </span>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 cursor-pointer shadow-md transition-transform duration-200 active:scale-90 hover:scale-105 bg-[#d0ff71] text-black"
          >
            <div className="flex flex-col justify-center items-center gap-1.5 w-4 h-3">
              <span
                className={`w-3.5 sm:w-4 h-[2px] rounded-full bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[4px]' : ''
                }`}
              ></span>
              <span
                className={`w-3.5 sm:w-4 h-[2px] rounded-full bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Desktop Floating Pill Navigation */}
      <div className="hidden md:flex pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-500">
        <nav
          onClick={() => {
            if (isScrolledDown) setIsScrolledDown(false);
          }}
          className={`flex items-center backdrop-blur-xl transition-all duration-500 ease-out border ${
            isScrolledDown
              ? 'gap-3 pl-3.5 pr-5 py-2.5 rounded-full cursor-pointer hover:scale-105 shadow-[0_12px_32px_rgba(0,0,0,0.14)]'
              : 'justify-between gap-7 lg:gap-9 px-8 lg:px-9 py-3 lg:py-3.5 rounded-[99px] shadow-2xl shadow-black/50'
          } bg-[#141416]/90 border-white/15 text-white`}
        >
          {/* Avatar / Home */}
          <Link
            to="/"
            onClick={(e) => {
              if (isScrolledDown) {
                e.stopPropagation();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsScrolledDown(false);
              }
            }}
            className="flex items-center gap-2 group shrink-0"
            aria-label="Home"
          >
            <div
              className={`${
                isScrolledDown
                  ? 'w-8 h-8 text-xs'
                  : 'w-10 h-10 lg:w-11 lg:h-11 text-sm'
              } rounded-full overflow-hidden border-2 border-white/20 transition-all duration-300 group-hover:scale-105 shrink-0 shadow-sm bg-[#252528] flex items-center justify-center font-antonio font-bold text-[#d0ff71]`}
            >
              {profileData.avatar ? (
                <img src={profileData.avatar} alt={profileData.name} className="w-full h-full object-cover" />
              ) : (
                profileData.initials
              )}
            </div>
          </Link>

          {/* Compact State: "Available for work" (as shown in reference screenshot) */}
          <div
            className={`transition-all duration-500 overflow-hidden flex items-center ${
              isScrolledDown
                ? 'max-w-[200px] opacity-100 pl-0.5 pointer-events-auto'
                : 'max-w-0 opacity-0 pointer-events-none'
            }`}
          >
            <span className="text-sm font-inter font-medium tracking-tight whitespace-nowrap text-white">
              {profileData.availability}
            </span>
          </div>

          {/* Links with animated pill indicator (collapses smoothly when scrolled down) */}
          <div
            className={`relative flex items-center gap-2 lg:gap-3 text-sm lg:text-base font-inter font-normal text-[#b5b5b5] bg-white/[0.04] p-1.5 rounded-full border border-white/5 transition-all duration-500 overflow-hidden ${
              isScrolledDown
                ? 'max-w-0 opacity-0 pointer-events-none p-0 border-0 m-0'
                : 'max-w-[600px] opacity-100 pointer-events-auto'
            }`}
          >
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium tracking-wide transition-all duration-300 whitespace-nowrap ${
                    active
                      ? 'text-black bg-[#d0ff71] shadow-[0_2px_12px_rgba(208,255,113,0.35)] font-semibold'
                      : 'text-[#b5b5b5] hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Contact button (collapses smoothly when scrolled down) */}
          <div
            className={`transition-all duration-500 overflow-hidden ${
              isScrolledDown
                ? 'max-w-0 opacity-0 pointer-events-none'
                : 'max-w-[240px] opacity-100 pointer-events-auto'
            }`}
          >
            <Link
              to="/contact"
              className="relative overflow-hidden group inline-flex items-center justify-center font-antonio font-bold text-sm lg:text-base uppercase tracking-wider rounded-[99px] px-7 lg:px-8 py-2.5 lg:py-3 transition-all duration-300 shrink-0 cursor-pointer shadow-md select-none whitespace-nowrap bg-[#d0ff71] text-black shadow-[#d0ff71]/20 hover:shadow-[0_0_24px_rgba(208,255,113,0.4)] hover:scale-[1.03]"
            >
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-500 ease-out group-hover:w-[240%] group-hover:h-[400%] group-hover:rounded-none -z-0 pointer-events-none bg-[#bdf354]"></span>
              <span className="absolute right-2.5 bottom-2 w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-150 bg-black/30"></span>
              <span className="relative z-10">Contact</span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center pointer-events-auto p-6 md:hidden animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-[32px] bg-[#1a1a1c] border border-white/15 p-8 flex flex-col gap-6 text-center shadow-2xl animate-in zoom-in-95 duration-200"
          >
            <div className="w-16 h-16 rounded-full mx-auto border-2 border-[#d0ff71] flex items-center justify-center font-antonio font-bold text-2xl text-[#d0ff71] bg-[#252528] shadow-lg shadow-[#d0ff71]/20 overflow-hidden">
              {profileData.avatar ? (
                <img src={profileData.avatar} alt={profileData.name} className="w-full h-full object-cover" />
              ) : (
                profileData.initials
              )}
            </div>
            <div>
              <div className="text-xl font-antonio font-bold uppercase tracking-wider text-white">
                {profileData.name}
              </div>
              <div className="text-xs font-inter text-[#d0ff71] mt-0.5">
                {profileData.title}
              </div>
            </div>

            <div className="flex flex-col gap-3 font-antonio font-bold text-2xl uppercase tracking-wider">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${idx * 60}ms` }}
                  className={`py-2.5 px-4 rounded-2xl transition-all duration-200 animate-in fade-in slide-in-from-bottom-2 ${
                    isActive(link.path)
                      ? 'bg-[#d0ff71] text-black shadow-md shadow-[#d0ff71]/20'
                      : 'text-white hover:text-[#d0ff71] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 py-3 bg-[#d0ff71] text-black rounded-full font-bold uppercase transition-transform active:scale-95 shadow-md shadow-[#d0ff71]/20"
              >
                Contact
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-widest text-[#a1a1aa] hover:text-white pt-2 cursor-pointer transition-colors"
            >
              Close Menu [Esc]
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
