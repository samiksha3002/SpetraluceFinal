"use client"; 

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// --- SUB-COMPONENTS (These are unchanged) ---

// 1. TOP BAR
const TopBar = () => {
  return (
    <div className="bg-black text-gray-400 text-xs py-2.5 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center">
        <Link href="/products" className="uppercase tracking-wider hover:text-white transition-colors">
          Designing with light for modern living
        </Link>
        <Link href="/contact" className="uppercase tracking-wider hover:text-white transition-colors mt-1 md:mt-0">
          Contact Info – +39 345 588 2002
        </Link>
      </div>
    </div>
  );
};

// 2. SEARCH BAR (We will place this inside the main nav for this layout)
const SearchBar = ({ isScrolled }: { isScrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const iconColorClass = isScrolled 
    ? "text-gray-600 hover:text-black"
    : "text-gray-300 hover:text-white";

  if (isOpen) {
    return (
      <div className="relative flex items-center">
        <input 
          type="text" 
          placeholder="Search..." 
          autoFocus
          className="pl-4 pr-10 py-2 w-48 text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-spetra-orange-500" 
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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </button>
  );
};


// --- 3. MAIN HEADER COMPONENT (WITH NEW LAYOUT) ---
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll logic is unchanged
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

  // Dynamic colors for links
  const linkColorClass = isScrolled ? "text-gray-900" : "text-white";
  const underlineColorClass = isScrolled ? "bg-spetra-orange-500" : "bg-spetra-orange-400";

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out
                  ${isVisible ? 'translate-y-0' : '-translate-y-full'}
                  ${isScrolled ? 'shadow-lg' : ''}`}
    > 
      
      <TopBar />

      {/* Main Navigation - NEW 2-COLUMN LAYOUT */}
      <nav className={`container mx-auto px-6 py-4 
                      flex justify-between items-center
                      transition-colors duration-300
                      ${isScrolled ? 'bg-white/80 backdrop-blur-md dark:bg-black/80' : 'bg-transparent'}`}>
        
        {/* === 1. LEFT SIDE: BIGGER LOGO === */}
        <div>
          <Link href="/">
            {/* BLACK LOGO (Visible when scrolled) */}
            <Image
              src="/Logo-black.png" 
              alt="Spetraluce Logo"
              width={260} // <-- BIGGER SIZE
              height={95}
              priority
              className={`${isScrolled ? 'block' : 'hidden'}`}
            />
            {/* WHITE LOGO (Visible at top on hero) */}
            <Image
              src="/Logo.png" 
              alt="Spetraluce Logo"
              width={260} // <-- BIGGER SIZE
              height={95}
              priority
              className={`${isScrolled ? 'hidden' : 'block'}`}
            />
          </Link>
        </div>

        {/* === 2. RIGHT SIDE: BIG & BOLD NAV ITEMS (Left-aligned in their column) === */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center space-x-12"> {/* Increased spacing */}
            <li>
              <Link href="/" className={`group relative text-xl font-semibold ${linkColorClass} transition-colors whitespace-nowrap`}> {/* text-xl & font-semibold */}
                <span>Home</span>
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${underlineColorClass} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center`}></span>
              </Link>
            </li>
            <li>
              <Link href="/about" className={`group relative text-xl font-semibold ${linkColorClass} transition-colors whitespace-nowrap`}> {/* text-xl & font-semibold */}
                <span>About Us</span>
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${underlineColorClass} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center`}></span>
              </Link>
            </li>
            <li>
              <Link href="/productcategory" className={`group relative text-xl font-semibold ${linkColorClass} transition-colors whitespace-nowrap`}> {/* text-xl & font-semibold */}
                <span>Products</span>
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${underlineColorClass} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center`}></span>
              </Link>
            </li>
            <li>
              <Link href="/services" className={`group relative text-xl font-semibold ${linkColorClass} transition-colors whitespace-nowrap`}> {/* text-xl & font-semibold */}
                <span>Services</span>
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${underlineColorClass} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center`}></span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className={`group relative text-xl font-semibold ${linkColorClass} transition-colors whitespace-nowrap`}> {/* text-xl & font-semibold */}
                <span>Contact</span>
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${underlineColorClass} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center`}></span>
              </Link>
            </li>
          </ul>
          <SearchBar isScrolled={isScrolled} />
        </div>
        
      </nav>
    </header>
  );
};