// app/components/Hero.jsx
"use client"; // <-- 1. CONVERTED TO A CLIENT COMPONENT

import Link from 'next/link';
import { useState } from 'react'; // <-- 2. IMPORTED useState

// --- 3. YOUR VIDEO PLAYLIST ---
// Add the paths to all your hero videos from the /public folder here
const videos = [
  '/home.mp4',
  '/HomeFinal2.mp4',
  '/HomeFinal3.mp4',
  '/HomeFinal4.mp4',
  // You can add a fourth one here: '/video4.mp4'
];

export const Hero = () => {
  // 4. Set up state to track which video index is playing
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // 5. This function runs when a video finishes
  const handleVideoEnd = () => {
    // It updates the index to the next video in the 'videos' array
    // The '%' (modulo) operator makes it loop back to 0 when it reaches the end
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    // This main container is full-screen and relative
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* === THIS IS THE UPDATED VIDEO TAG ===
      */}
      <video 
        // 6. This 'key' is critical. It tells React to create a *new*
        //    video element when the index changes, which guarantees autoplay.
        key={currentVideoIndex}
        autoPlay 
        muted 
        playsInline 
        onEnded={handleVideoEnd} // <-- 7. Calls our function when the video ends
        className="absolute z-0 w-full h-full object-cover"
        src={videos[currentVideoIndex]} // <-- 8. Sets the 'src' from our state
      >
        {/* We removed the <source> tag because 'src' is now on the <video> tag */}
        Your browser does not support the video tag.
      </video>


      {/* Dark Overlay (This part is unchanged) */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>


      {/* HERO CONTENT (This part is unchanged) */}
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