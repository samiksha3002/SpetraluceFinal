// app/components/Hero.jsx
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

// --- YOUR VIDEO PLAYLIST ---
const videos = [
  '/home.mp4',
  '/Homefinal2.mp4',
  '/Homefinal3.mp4',
  '/Homefinal4.mp4',
];

export const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // This useEffect hook handles preloading the next video
  useEffect(() => {
    // Determine the index of the next video to preload
    const nextVideoIndex = (currentVideoIndex + 1) % videos.length;
    const nextVideoSrc = videos[nextVideoIndex];

    // Create a new video element and set its source to preload it
    const preloader = new Image(); // Using Image as a simple fetcher
    preloader.src = nextVideoSrc;
    
    // Clean up the preloader to prevent memory leaks
    return () => {
      preloader.src = '';
    };
  }, [currentVideoIndex]); // Re-run this effect whenever the video index changes

  const handleVideoEnd = () => {
    // It updates the index to the next video in the 'videos' array
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    // This main container is full-screen and relative
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* === THE VIDEO PLAYER === */}
      <video
        key={currentVideoIndex}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute z-0 w-full h-full object-cover"
        src={videos[currentVideoIndex]}
      >
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center 
                      h-full text-center text-white px-6">
        
        <span className="text-sm font-medium uppercase tracking-widest text-gray-300">
          Welcome to Spetraluce
        </span>

        <h1 className="font-serif text-5xl md:text-7xl font-bold mt-4">
          Modern Decorative Light
        </h1>

        <p className="mt-6 text-lg text-gray-200 max-w-xl mx-auto">
          we transform spaces by blending cutting-edge lighting technology with refined design. Every fixture is crafted to create atmosphere, enhance architecture, and bring elegance to life.
        </p>

        <div className="mt-10">
          <Link
            href="/products"
            className="inline-block 
                       bg-white text-gray-900 
                       rounded-full
                       px-10 py-3 text-sm font-medium uppercase tracking-wider 
                       hover:bg-gray-200 
                       transition-colors"
          >
            VIEW CATALOG
          </Link>
        </div>
      </div>
    </section>
  );
};