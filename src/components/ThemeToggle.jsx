import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto select-none">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle light/dark mode"
        className={`w-14 h-7 rounded-full p-0.5 transition-all duration-300 flex items-center shadow-xl border cursor-pointer focus:outline-none ${
          isDark
            ? 'bg-[#27272a] border-white/20 hover:border-white/40 shadow-black/50'
            : 'bg-[#5e67e6] border-[#4338ca] hover:bg-[#4f58d9] shadow-[0_4px_20px_rgba(94,103,230,0.45)]'
        }`}
      >
        <div
          className={`w-6 h-6 rounded-full transition-all duration-300 transform shadow-sm ${
            isDark ? 'translate-x-0.5 bg-[#d0ff71]' : 'translate-x-7 bg-white'
          }`}
        ></div>
      </button>
    </div>
  );
}
