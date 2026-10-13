import React from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profile';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('404 Page Not Found');
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 text-center">
      <div className="w-24 h-24 rounded-full border-4 border-[#d0ff71] flex items-center justify-center font-antonio font-bold text-4xl text-[#d0ff71] bg-[#1f1f22] mb-6 shadow-2xl">
        {profileData.initials}
      </div>
      <h1 className="font-antonio font-bold text-8xl sm:text-9xl text-[#d0ff71] leading-none mb-2">
        404
      </h1>
      <h2 className="font-antonio font-bold text-3xl sm:text-4xl uppercase tracking-wider text-white mb-4">
        Page Not Found
      </h2>
      <p className="font-inter font-light text-base sm:text-lg text-[#b5b5b5] max-w-md mb-8 leading-relaxed">
        The page you are looking for doesn't exist or has been relocated. Return to the home feed or explore my projects.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="font-antonio font-bold text-base uppercase tracking-wider rounded-full px-8 py-3 bg-[#d0ff71] text-black hover:bg-[#bdf354] transition-all shadow-md"
        >
          Return Home
        </Link>
        <Link
          to="/projects"
          className="font-antonio font-bold text-base uppercase tracking-wider rounded-full px-8 py-3 border border-white/20 text-white hover:border-[#d0ff71] hover:text-[#d0ff71] transition-all"
        >
          Explore Projects
        </Link>
      </div>
    </div>
  );
}
