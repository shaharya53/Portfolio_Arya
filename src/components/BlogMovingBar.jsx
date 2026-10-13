import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogsData } from '../data/blogs';

export default function BlogMovingBar({ currentSlug }) {
  // Exclude current blog if available so user explores other articles
  const availableBlogs = blogsData.filter((b) => b.slug !== currentSlug);
  const items = availableBlogs.length >= 3 ? availableBlogs : blogsData;

  // Build duplicated list for a mathematically seamless infinite loop
  let baseList = items;
  while (baseList.length < 6) {
    baseList = [...baseList, ...items];
  }
  const marqueeItems = [...baseList, ...baseList];

  const scrollContainerRef = useRef(null);

  const handleManualScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full py-4 group/bar">
      {/* Edge Gradient Masks for Smooth Fade */}
      <div className="marquee-fade-left absolute top-0 bottom-0 left-0 w-12 sm:w-24 md:w-32 z-20 pointer-events-none transition-opacity duration-300"></div>
      <div className="marquee-fade-right absolute top-0 bottom-0 right-0 w-12 sm:w-24 md:w-32 z-20 pointer-events-none transition-opacity duration-300"></div>

      {/* Manual Scroll Arrow Controls (Visible on hover for quick navigation) */}
      <div className="hidden sm:flex items-center justify-between absolute inset-x-2 top-1/2 -translate-y-1/2 z-30 pointer-events-none opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => handleManualScroll('left')}
          aria-label="Scroll Left"
          className="pointer-events-auto w-11 h-11 rounded-full flex items-center justify-center bg-[#181819]/90 hover:bg-[#d0ff71] text-white hover:text-black border border-white/20 hover:border-[#d0ff71] backdrop-blur-md shadow-xl transition-all duration-200 hover:scale-110 cursor-pointer active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </button>
        <button
          onClick={() => handleManualScroll('right')}
          aria-label="Scroll Right"
          className="pointer-events-auto w-11 h-11 rounded-full flex items-center justify-center bg-[#181819]/90 hover:bg-[#d0ff71] text-white hover:text-black border border-white/20 hover:border-[#d0ff71] backdrop-blur-md shadow-xl transition-all duration-200 hover:scale-110 cursor-pointer active:scale-95"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>

      {/* Overflow Container */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto scrollbar-none"
      >
        {/* Animated Marquee Strip */}
        <div className="animate-marquee-scroll flex gap-6 sm:gap-8 py-3 w-max">
          {marqueeItems.map((blog, idx) => (
            <Link
              key={`${blog.slug}-${idx}`}
              to={`/blogs/${blog.slug}`}
              className="group/card relative flex flex-col w-[290px] sm:w-[340px] md:w-[380px] shrink-0 rounded-[24px] sm:rounded-[28px] bg-[#181819] border border-white/10 hover:border-[#d0ff71]/60 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 cursor-pointer text-left"
            >
              {/* Card Image Container */}
              <div className="relative w-full h-[180px] sm:h-[210px] overflow-hidden bg-[#121213]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/card:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181819] via-transparent to-transparent opacity-60"></div>

                {/* Hover Action Badge */}
                <div className="absolute top-3.5 right-3.5 z-20">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center opacity-0 scale-75 group-hover/card:opacity-100 group-hover/card:scale-100 transition-all duration-300 shadow-xl bg-[#d0ff71] text-black shadow-[0_4px_16px_rgba(208,255,113,0.4)]">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

                {/* Category Pill */}
                <div className="absolute bottom-3 left-4 z-20">
                  <span className="border rounded-full px-3 py-0.5 text-[11px] font-inter font-medium tracking-wide border-[#d0ff71]/40 text-[#d0ff71] bg-black/75 backdrop-blur-md">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Card Text & Metadata */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-inter text-[#888888]">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h3 className="font-antonio font-bold text-xl sm:text-2xl uppercase tracking-tight line-clamp-2 leading-[1.05] transition-colors duration-200 text-white group-hover/card:text-[#d0ff71]">
                    {blog.title}
                  </h3>
                </div>

                <p className="font-inter font-light text-xs sm:text-sm leading-relaxed line-clamp-2 mt-3 text-[#b5b5b5]">
                  {blog.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
