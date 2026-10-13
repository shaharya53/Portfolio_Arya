import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { blogsData } from '../data/blogs';
import { profileData } from '../data/profile';
import BlogCard from '../components/BlogCard';
import ContactSection from '../components/ContactSection';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Blogs() {
  useDocumentTitle('Dev Insights & Engineering Articles');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const mostViewed = blogsData[0];

  const categories = ['All', 'Architecture', 'Languages', 'Styling', 'React & Next.js', 'State & Logic'];

  const filteredBlogs = blogsData.filter((b) => {
    if (selectedCategory === 'All') return true;
    return b.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div className="w-full">
      <main className="pt-32 sm:pt-40 px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1400px] mx-auto text-left">
        {/* Page Title */}
        <div className="mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom-3 duration-500">
          <h1 className="font-antonio font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[0.92] tracking-tight uppercase mb-4 transition-colors duration-300 text-white">
            DEV INSIGHTS &amp; IDEAS
          </h1>
          <p className="font-inter font-light text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed transition-colors duration-300 text-[#b5b5b5]">
            From frontend architectures to database optimizations and full-stack patterns, explore deep dives written from hands-on engineering experience.
          </p>
        </div>

        {/* Featured / Most Viewed Hero Blog */}
        {mostViewed && (
          <div className="mb-14 sm:mb-20 animate-in fade-in duration-700">
            <Link
              to={`/blogs/${mostViewed.slug}`}
              className="group block cursor-pointer text-left focus:outline-none"
            >
              <div className="relative w-full h-[260px] sm:h-[360px] md:h-[420px] rounded-[24px] sm:rounded-[32px] overflow-hidden mb-6 border transition-all duration-500 shadow-xl bg-[#181819] border-white/10 group-hover:border-[#d0ff71]/50 group-hover:-translate-y-1">
                <img
                  src={mostViewed.image}
                  alt={mostViewed.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Most Viewed Badge */}
                <div className="absolute top-5 left-5 sm:top-7 sm:left-7 z-20">
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-inter font-semibold tracking-wide uppercase shadow-lg bg-[#d0ff71] text-black shadow-[0_4px_14px_rgba(208,255,113,0.35)]">
                    MOST VIEWED
                  </span>
                </div>

                {/* Floating Arrow Badge */}
                <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 pointer-events-none z-20">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-2xl bg-[#d0ff71] text-black shadow-[0_8px_24px_rgba(208,255,113,0.4)]">
                    <ArrowUpRight className="w-6 h-6 stroke-[2.4]" />
                  </div>
                </div>
              </div>

              {/* Tag & Date */}
              <div className="flex items-center gap-3 mb-3">
                <span className="border rounded-full px-3.5 py-0.5 text-xs font-inter font-medium tracking-wide transition-colors duration-200 border-[#d0ff71]/40 text-[#d0ff71] bg-[#d0ff71]/5">
                  {mostViewed.category}
                </span>
                <span className="font-inter text-xs tracking-wide transition-colors duration-200 text-[#a1a1aa]">
                  {mostViewed.date}
                </span>
                <span className="font-inter text-xs tracking-wide text-[#767676]">
                  • {mostViewed.readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-antonio font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[0.98] tracking-tight uppercase mb-3 transition-colors duration-200 text-white group-hover:text-[#d0ff71]">
                {mostViewed.title}
              </h2>

              {/* Description */}
              <p className="font-inter font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl transition-colors duration-200 text-[#b5b5b5]">
                {mostViewed.summary}
              </p>

              {/* Divider */}
              <div className="w-full h-[1px] mt-10 sm:mt-14 transition-colors duration-300 bg-white/15"></div>
            </Link>
          </div>
        )}

        {/* Available For Work Pill Banner */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border shadow-sm transition-colors duration-300 bg-[#181819] border-white/10 text-white">
            <div className="w-5 h-5 rounded-full bg-[#252528] border border-white/20 flex items-center justify-center font-antonio font-bold text-[10px] text-[#d0ff71]">
              {profileData.initials}
            </div>
            <span className="text-xs sm:text-sm font-inter font-normal tracking-tight">
              {profileData.availability}
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs uppercase font-inter text-[#888888] mr-2">Filter By:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-inter font-medium tracking-wide transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#d0ff71] text-black shadow-md shadow-[#d0ff71]/20 scale-105'
                  : 'bg-[#1f1f22] text-[#b5b5b5] hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2-Column Grid of Articles with Animated Transition */}
        <div
          key={selectedCategory}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 pb-24 sm:pb-32 animate-in fade-in duration-300"
        >
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </main>

      {/* Contact Section at bottom */}
      <ContactSection />
    </div>
  );
}
