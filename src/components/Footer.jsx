import React from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profile';

export default function Footer() {
  return (
    <footer className="w-full pt-12 sm:pt-16 pb-10 sm:pb-12 px-6 sm:px-10 md:px-14 transition-colors duration-300 bg-[#d0ff71] text-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-start">
          {/* Email */}
          <div className="space-y-1">
            <span className="block text-xs sm:text-sm font-inter tracking-wide text-black/70">
              Email :
            </span>
            <a
              href={`mailto:${profileData.email}`}
              className="text-lg sm:text-xl font-bold font-inter tracking-tight hover:underline inline-block text-black"
            >
              {profileData.email}
            </a>
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <span className="block text-xs sm:text-sm font-inter tracking-wide text-black/70">
              Call Today :
            </span>
            <a
              href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
              className="text-lg sm:text-xl font-bold font-inter tracking-tight hover:underline inline-block text-black"
            >
              {profileData.phone}
            </a>
          </div>

          {/* Social Links */}
          <div className="space-y-2 md:text-right">
            <span className="block text-xs sm:text-sm font-inter tracking-wide text-black/70">
              Social :
            </span>
            <div className="flex items-center md:justify-end gap-3.5 pt-0.5">
              <a
                href={profileData.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="hover:scale-125 transition-transform duration-200 text-black"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a
                href={profileData.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:scale-125 transition-transform duration-200 text-black"
              >
                <svg
                  className="w-5 h-5 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:scale-125 transition-transform duration-200 text-black"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  ></path>
                </svg>
              </a>
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:scale-125 transition-transform duration-200 text-black"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0-.02-3.36 1.68 1.68 0 0 0 .02 3.36M5.07 18.5h2.78v-8.37H5.07v8.37z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-8 sm:my-10 border-black/20"></div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-inter">
          <div>
            <span>© Copyright 2026. All Rights Reserved by </span>
            <Link to="/" className="underline font-semibold hover:opacity-80 transition-opacity">
              Arya
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-black/80">Created by</span>
            <div className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center font-antonio font-bold text-xs shadow-sm transition-transform duration-200 hover:scale-110 bg-[#141415] text-[#d0ff71]">
              {profileData.avatar ? (
                <img src={profileData.avatar} alt={profileData.name} className="w-full h-full object-cover" />
              ) : (
                profileData.initials
              )}
            </div>
            <Link
              to="/"
              className="font-bold underline hover:opacity-80 transition-opacity tracking-tight"
            >
              {profileData.name}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
