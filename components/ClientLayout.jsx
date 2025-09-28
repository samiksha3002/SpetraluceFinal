"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import Preloader from './Preloader';
import { Header } from './Header'; // <-- IMPORTANT: Import your Header
// import { Footer } from './Footer'; // <-- IMPORTANT: Import your Footer if you have one

export const ClientLayout = ({ children }) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // On the initial load, we still want the preloader.
    // The timer hides it after the animation.
    const initialLoadTimer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(initialLoadTimer);
  }, []); // This effect runs only once

  useEffect(() => {
    // For subsequent page navigations
    setIsLoading(true);
    const transitionTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Use a shorter time for page transitions for better UX

    return () => clearTimeout(transitionTimer);
  }, [pathname]); // This effect re-runs every time the pathname changes

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <main>{children}</main>
          {/* <Footer /> */}
        </>
      )}
    </>
  );
};