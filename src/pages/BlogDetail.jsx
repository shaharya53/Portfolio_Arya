import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, Calendar, Share2, ArrowUpRight } from 'lucide-react';
import { blogsData } from '../data/blogs';
import { profileData } from '../data/profile';
import BlogCard from '../components/BlogCard';
import BlogMovingBar from '../components/BlogMovingBar';
import ContactSection from '../components/ContactSection';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function BlogDetail() {
  const { slug } = useParams();

  // Find blog by slug, with aliases support (e.g. server-vs-client-components-nextjs)
  const normalizedSlug =
    slug === 'server-vs-client-components-nextjs'
      ? 'server-components-vs-client-components-nextjs'
      : slug;

  const blog =
    blogsData.find((b) => b.slug === normalizedSlug) ||
    blogsData.find((b) => b.slug.includes(slug) || slug.includes(b.slug));

  useDocumentTitle(blog ? blog.title : 'Engineering Insight');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-32 px-4 text-center">
        <h1 className="font-antonio font-bold text-6xl text-[#d0ff71] mb-4">404</h1>
        <h2 className="font-antonio font-bold text-3xl uppercase tracking-wider text-white mb-4">
          Article Not Found
        </h2>
        <p className="font-inter text-sm text-[#b5b5b5] max-w-md mb-8">
          The requested engineering article could not be found. Browse our technical insights below.
        </p>
        <Link
          to="/blogs"
          className="font-antonio font-bold uppercase tracking-wider px-8 py-3 rounded-full bg-[#d0ff71] text-black"
        >
          View All Insights
        </Link>
      </div>
    );
  }

  // Related articles
  const relatedBlogs = blogsData.filter((b) => b.slug !== blog.slug).slice(0, 2);

  return (
    <div className="w-full">
      <main className="pt-32 sm:pt-40 px-4 sm:px-6 md:px-8 max-w-[1400px] mx-auto text-left">
        {/* Back Link & Category */}
        <div className="flex items-center gap-4 mb-4">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-inter text-[#b5b5b5] hover:text-[#d0ff71] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Insights
          </Link>
          <span className="border rounded-full px-3.5 py-0.5 text-xs font-inter font-medium tracking-wide transition-colors duration-200 border-[#d0ff71]/40 text-[#d0ff71] bg-[#d0ff71]/5">
            {blog.category}
          </span>
          <span className="font-inter text-xs tracking-wide text-[#a1a1aa]">
            {blog.date}
          </span>
          <span className="font-inter text-xs tracking-wide text-[#767676]">
            • {blog.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-antonio font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[88px] uppercase tracking-tight leading-[0.92] mb-6 transition-colors duration-300 text-white">
          {blog.title}
        </h1>

        {/* Summary Intro */}
        <p className="font-inter font-light text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed mb-12 sm:mb-16 transition-colors duration-300 text-[#b5b5b5]">
          {blog.summary}
        </p>

        {/* Hero Cover Image */}
        <div className="relative w-full max-w-4xl mx-auto h-[260px] sm:h-[360px] md:h-[420px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl mb-12 sm:mb-16 border transition-all duration-300 bg-[#1a1a1c] border-white/10">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Table of Contents */}
        {blog.sections && blog.sections.length > 0 && (
          <div className="mb-16 p-6 sm:p-8 rounded-[24px] bg-[#1a1a1c] border border-white/10 max-w-2xl">
            <div className="flex items-center gap-2 mb-4 text-[#d0ff71]">
              <BookOpen className="w-5 h-5" />
              <span className="font-antonio font-bold text-lg uppercase tracking-wider">
                Table of Contents
              </span>
            </div>
            <ul className="space-y-2.5 font-inter text-sm">
              {blog.sections.map((sec, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#d0ff71] font-mono text-xs">{idx + 1}.</span>
                  <a
                    href={`#section-${idx}`}
                    className="text-[#cccccc] hover:text-[#d0ff71] transition-colors"
                  >
                    {sec.heading}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Sections */}
        {blog.sections &&
          blog.sections.map((sec, idx) => (
            <div key={idx} id={`section-${idx}`} className="mb-20 sm:mb-28 scroll-mt-32">
              <h2 className="font-antonio font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] uppercase tracking-tight mb-6 transition-colors duration-300 text-white">
                {sec.heading} :
              </h2>

              <div className="font-inter font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl space-y-4 mb-10 sm:mb-14 transition-colors duration-300 text-[#b5b5b5]">
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Code Snippet (if available) */}
              {sec.code && (
                <div className="mb-10 max-w-4xl rounded-[20px] bg-[#0d0d0e] border border-white/15 p-5 sm:p-6 overflow-x-auto shadow-xl">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono text-[#a1a1aa]">
                    <span>Architecture Blueprint</span>
                    <span className="text-[#d0ff71]">Verified Code</span>
                  </div>
                  <pre className="font-mono text-xs sm:text-sm text-[#e5e7eb] leading-relaxed">
                    <code>{sec.code}</code>
                  </pre>
                </div>
              )}

              {/* Section Image */}
              {sec.image && (
                <div className="relative w-full max-w-4xl mx-auto h-[260px] sm:h-[360px] md:h-[420px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border transition-all duration-300 bg-[#1a1a1c] border-white/10">
                  <img
                    src={sec.image}
                    alt={sec.heading}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
            </div>
          ))}

        {/* Available For Work Badge */}
        <div className="flex justify-center my-14 sm:my-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border shadow-sm transition-colors duration-300 bg-[#181819] border-white/10 text-white">
            <div className="w-5 h-5 rounded-full bg-[#252528] border border-white/20 flex items-center justify-center font-antonio font-bold text-[10px] text-[#d0ff71]">
              {profileData.initials}
            </div>
            <span className="text-xs sm:text-sm font-inter font-normal tracking-tight">
              {profileData.availability}
            </span>
          </div>
        </div>

        {/* Discover More Section (Moving Images Bar) */}
        <section className="pt-10 sm:pt-16 pb-12 sm:pb-16 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
            <div className="flex items-center gap-6">
              <h2 className="font-antonio font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] uppercase tracking-tight whitespace-nowrap leading-none transition-colors duration-300 text-white">
                DISCOVER MORE
              </h2>
              <div className="hidden md:block flex-1 h-[1px] w-20 lg:w-36 transition-colors duration-300 bg-white/15"></div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 text-xs font-inter text-[#888888] bg-[#1a1a1c] border border-white/10 px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#d0ff71] animate-pulse"></span>
                Moving Articles • Hover to pause
              </span>
            </div>
          </div>

          <BlogMovingBar currentSlug={blog.slug} />
        </section>
      </main>

      {/* Contact Section at bottom */}
      <ContactSection />
    </div>
  );
}
