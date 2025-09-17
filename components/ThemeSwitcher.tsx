// app/components/ThemeSwitcher.jsx
"use client";

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

// Simple SVG for the Moon Icon
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 008.25-4.498z" />
  </svg>
);

// Simple SVG for the Sun Icon
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591" />
  </svg>
);

// This component still only needs the 'isScrolled' prop from the Header
export const ThemeSwitcher = ({ isScrolled }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // We re-create the SAME dynamic link color logic that the Header uses.
  // This keeps our button perfectly in sync with the nav links.
  const linkColorClass = isScrolled
    ? "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" // Scrolled colors
    : "text-gray-300 hover:text-white"; // Top-of-page (on hero) colors

  if (!mounted) {
    // Render a placeholder to avoid layout shift
    return <div className="h-10 w-32" />; 
  }

  const isDarkMode = theme === 'dark';
  const Icon = isDarkMode ? SunIcon : MoonIcon;
  const text = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <button
      onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
      // We apply the EXACT same classes as our Nav Links (plus flex)
      // This makes it a "big button" that matches the text style.
      className={`flex items-center gap-2 text-base font-medium ${linkColorClass} transition-colors whitespace-nowrap`}
      aria-label="Toggle theme"
    >
      <Icon />
      <span>{text}</span>
    </button>
  );
};