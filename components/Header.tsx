"use client"; 

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react'; 
import { usePathname } from 'next/navigation';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import MegaMenu from './MegaMenu';

// --- SUB-COMPONENTS (These are unchanged) ---
const TopBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-black text-gray-400 text-xs relative">
      <div className="container mx-auto h-10 flex flex-col md:flex-row justify-between items-center text-center px-6">
        <Link href="/products" className="uppercase tracking-wider hover:text-white transition-colors">
          Designing with light for modern living
        </Link>
        <Link href="/contact" className="uppercase tracking-wider hover:text-white transition-colors mt-1 md:mt-0">
          Contact Info – +39 345 588 2002
        </Link>
      </div>
      <motion.div 
        className="absolute top-0 left-0 right-0 h-full bg-spetra-orange-500/80 origin-left z-0" 
        style={{ scaleX }} 
      />
    </div>
  );
};
const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const iconColorClass = "text-gray-300 hover:text-white";

  if (isOpen) {
    return (
      <div className="relative flex items-center">
        <input type="text" placeholder="Search..." autoFocus className="pl-4 pr-10 py-2 w-48 text-sm bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-spetra-orange-500" />
        <button onClick={() => setIsOpen(false)} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white" aria-label="Close Search">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    );
  }
  return (
    <button onClick={() => setIsOpen(true)} className={`transition-colors ${iconColorClass}`} aria-label="Open Search">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
    </button>
  );
};

// --- MAIN INTERACTIVE HEADER COMPONENT ---
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const linkColorClass = "text-white"; 
  const underlineColorClass = "bg-spetra-orange-400";

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      onMouseLeave={() => setIsMenuOpen(false)}
    > 
      <TopBar />
      <nav className={`relative container mx-auto px-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2 bg-black/80 backdrop-blur-md shadow-lg' : 'py-4 bg-transparent'}`}>
        
        <div>
          <Link href="/">
            <Image
              src="/Logo.png" 
              alt="Spetraluce Logo"
              width={isScrolled ? 180 : 260}
              height={isScrolled ? 65 : 95}
              priority
              className="block transition-all duration-300" 
            />
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center space-x-12">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/productcategory", label: "Products" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
            ].map((item) => {
              const isActive = pathname === item.href;
              
              // --- THIS IS THE FIX ---
              if (item.label === "Products") {
                return (
                  // The parent <li> handles the hover event
                  <li key={item.href} onMouseEnter={() => setIsMenuOpen(true)}>
                    {/* The <Link> component inside handles the click for navigation */}
                    <Link href={item.href} className={`group relative text-xl font-semibold ${linkColorClass} transition-colors whitespace-nowrap`}>
                      <span>{item.label}</span>
                      <span 
                        className={`absolute -bottom-1 left-0 w-full h-0.5 ${underlineColorClass} transition-transform duration-300 origin-center ${isActive || isMenuOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                      ></span>
                    </Link>
                  </li>
                );
              }

              // All other links remain as they were
              return (
                <li key={item.href}>
                  <Link href={item.href} className={`group relative text-xl font-semibold ${linkColorClass} transition-colors whitespace-nowrap`}>
                    <span>{item.label}</span>
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${underlineColorClass} transition-transform duration-300 origin-center ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <SearchBar />
        </div>
        
        <AnimatePresence>
          {isMenuOpen && <MegaMenu />}
        </AnimatePresence>
      </nav>
    </header>
  );
};