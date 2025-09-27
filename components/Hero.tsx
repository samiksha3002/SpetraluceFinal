"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- YOUR VIDEO PLAYLIST ---
const videos = [
  '/home.mp4',
  '/home2.mp4',
  '/home3.mp4',
  '/home4.mp4',
];

export const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // This useEffect hook preloads the next video for smoother transitions
  useEffect(() => {
    const nextVideoIndex = (currentVideoIndex + 1) % videos.length;
    const nextVideoUrl = videos[nextVideoIndex];
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = nextVideoUrl;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [currentVideoIndex]);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Video Player */}
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

      {/* --- Animated Hero Content (Using direct animation props) --- */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
        
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-sm font-medium uppercase tracking-widest text-gray-300"
        >
          Welcome to Spetraluce
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="font-serif text-5xl md:text-7xl font-bold mt-4"
        >
          Modern Decorative Light
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="mt-6 text-lg text-gray-200 max-w-xl mx-auto"
        >
          We transform spaces by blending cutting-edge lighting technology with refined design. Every fixture is crafted to create atmosphere, enhance architecture, and bring elegance to life.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
          className="mt-10"
        >
          <motion.a 
            href="/products"
            className="inline-block 
                       bg-amber-500 
                       text-gray-900 font-bold
                       shadow-lg
                       px-12 py-4 text-sm uppercase tracking-widest 
                       hover:bg-amber-600 
                       transition-colors duration-300"
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              delay: 2
            }}
          >
            CATALOGO DELLE VISTE
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

