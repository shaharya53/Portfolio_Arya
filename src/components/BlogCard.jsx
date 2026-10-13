import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function BlogCard({ blog }) {
  return (
    <Link
      to={`/blogs/${blog.slug}`}
      className="group block cursor-pointer text-left focus:outline-none"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-[16/10] rounded-[24px] sm:rounded-[32px] overflow-hidden mb-4 sm:mb-5 border transition-all duration-500 shadow-md bg-[#181819] border-white/10 group-hover:border-[#d0ff71]/50">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Hover Arrow Badge */}
        <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 pointer-events-none z-20">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-2xl bg-[#d0ff71] text-black shadow-[0_8px_20px_rgba(208,255,113,0.35)]">
            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.4]" />
          </div>
        </div>
      </div>

      {/* Meta tags */}
      <div className="flex items-center gap-3 mb-2.5">
        <span className="border rounded-full px-3.5 py-0.5 text-xs font-inter font-medium tracking-wide transition-colors duration-200 border-[#d0ff71]/40 text-[#d0ff71] bg-[#d0ff71]/5">
          {blog.category}
        </span>
        <span className="font-inter text-xs tracking-wide transition-colors duration-200 text-[#a1a1aa]">
          {blog.date}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-antonio font-bold text-2xl sm:text-3xl md:text-[32px] leading-[0.98] tracking-tight uppercase mb-2.5 transition-colors duration-200 text-white group-hover:text-[#d0ff71]">
        {blog.title}
      </h3>

      {/* Description */}
      <p className="font-inter font-light text-xs sm:text-sm md:text-[14.5px] leading-relaxed line-clamp-2 transition-colors duration-200 text-[#b5b5b5]">
        {blog.summary}
      </p>
    </Link>
  );
}
