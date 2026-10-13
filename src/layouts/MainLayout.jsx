import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

export default function MainLayout() {
  const { pathname } = useLocation();
  const { isDark } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className={`min-h-screen relative overflow-x-clip transition-colors duration-300 ${
        isDark
          ? 'bg-[#141415] text-white selection:bg-[#d0ff71] selection:text-black'
          : 'bg-[#fafafa] text-[#111111] selection:bg-[#5e67e6] selection:text-white'
      }`}
    >
      <Header />
      <Outlet />
      <Footer />
      <ThemeToggle />
    </div>
  );
}
