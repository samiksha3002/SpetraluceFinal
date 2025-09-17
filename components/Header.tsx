// app/components/Header.jsx
"use client"; 

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { ThemeSwitcher } from './ThemeSwitcher'; 

// --- SUB-COMPONENTS ---

// 1. TOP BAR
const TopBar = ({ isScrolled }) => {
  const textColorClass = isScrolled 
    ? "text-gray-700 dark:text-gray-300" 
    : "text-gray-300";
  const hoverColorClass = isScrolled
    ? "hover:text-black dark:hover:text-white"
    : "hover:text-white";
  const bgClass = isScrolled ? 'bg-white dark:bg-black' : 'bg-black';

  return (
    <div className={`text-xs py-2.5 px-6 transition-colors duration-300 ${bgClass}`}>
      <div className={`container mx-auto flex flex-col md:flex-row justify-between items-center text-center 
                      ${textColorClass}`}>
        <Link 
          href="/products" 
          className={`uppercase tracking-wider underline ${hoverColorClass} transition-colors`}
        >
         Designing with light for modern living
        </Link>
        <Link 
          href="/sale" 
          className={`uppercase tracking-wider underline ${hoverColorClass} transition-colors mt-1 md:mt-0`}
        >
          Contact Info – +39 345 588 2002
        </Link>
      </div>
    </div>
  );
};

// 2. SEARCH BAR
const SearchBar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const iconColorClass = isScrolled 
    ? "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
    : "text-gray-300 hover:text-white";

  if (isOpen) {
    return (
      <div className="relative flex items-center">
        <input 
          type="text" 
          placeholder="Search..." 
          autoFocus
          className="pl-4 pr-10 py-2 w-48 text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300" 
        />
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
          aria-label="Close Search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <button 
      onClick={() => setIsOpen(true)}
      className={`transition-colors ${iconColorClass}`}
      aria-label="Open Search"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </button>
  );
};


// --- 3. MAIN "SMART" HEADER COMPONENT ---
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme } = useTheme(); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > lastScrollY && currentScrollY > 200) { 
        setIsVisible(false);
      } else { 
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const linkColorClass = isScrolled
    ? "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
    : "text-gray-300 hover:text-white";

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out
                  ${isVisible ? 'translate-y-0' : '-translate-y-full'}
                  ${isScrolled ? 'shadow-lg' : ''}`}
    > 
      
      <TopBar isScrolled={isScrolled} />

      <nav className={`container mx-auto px-6 py-4 
                      grid grid-cols-3 items-center 
                      transition-colors duration-300
                      ${isScrolled ? 'bg-white/80 backdrop-blur-md dark:bg-black/80' : 'bg-transparent'}`}>
        
        <div className="justify-self-start flex items-center gap-4">
          <SearchBar isScrolled={isScrolled} />
          <ThemeSwitcher isScrolled={isScrolled} /> 
          
        </div>

        <div className="justify-self-center">
          <Link href="/">
            <Image
              src="/Logo.png" 
              alt="Spetraluce Logo"
              width={220}
              height={80}
              priority
              className={`${isScrolled && theme === 'light' ? 'block' : 'hidden'}`}
            />
            <Image
              src="/Logo.png" 
              alt="Spetraluce Logo"
              width={220}
              height={80}
              priority
              className={`${isScrolled && theme === 'light' ? 'hidden' : 'block'}`}
            />
          </Link>
        </div>

        {/* === UPDATED RIGHT SIDE === */}
        <div className="justify-self-end">
          <ul className="hidden md:flex items-center space-x-8">
            {/* Added 'whitespace-nowrap' to every link to stop word wrapping */}
            <li><Link href="/" className={`text-base font-medium ${linkColorClass} transition-colors whitespace-nowrap`}>Home</Link></li>
            <li><Link href="/about" className={`text-base font-medium ${linkColorClass} transition-colors whitespace-nowrap`}>About Us</Link></li>
            <li><Link href="/products" className={`text-base font-medium ${linkColorClass} transition-colors whitespace-nowrap`}>Products</Link></li>
            <li><Link href="/services" className={`text-base font-medium ${linkColorClass} transition-colors whitespace-nowrap`}>Our Services</Link></li>
            <li><Link href="/contact" className={`text-base font-medium ${linkColorClass} transition-colors whitespace-nowrap`}>Contact us</Link></li>
          </ul>
        </div>
        
      </nav>
    </header>
  );
};