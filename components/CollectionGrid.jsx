"use client"; // Carousels require client-side JavaScript

import React, { useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// --- Re-usable sub-component for each item in the carousel ---
const CollectionItem = ({ href, imageUrl, label }) => (
  <div className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/6 px-4">
    <Link href={href} className="group text-center block">
      <div className="relative w-full aspect-square overflow-hidden bg-gray-900 rounded-lg">
        <Image
          src={imageUrl}
          alt={label}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
          className="
            object-contain object-center transition-transform duration-500 ease-in-out 
            group-hover:scale-105 
            
            // --- 👇 NEW CLASSES ADDED HERE ---
            animate-pulse-slow       // Apply the continuous zoom animation
            group-hover:animate-none // Pause the animation on hover
          "
        />
      </div>
      <h3 className="mt-5 text-xl font-medium text-gray-300 group-hover:text-white transition-all">
        {label}
      </h3>
    </Link>
  </div>
);


// --- This is the main component for the section (no other changes needed) ---
export const CollectionGrid = () => {
  const categories = [
    { href: "/products/indoor", imageUrl: "/product1.jpg", label: "Indoor" },
    { href: "/products/outdoor", imageUrl: "/product2.jpg", label: "Downlight" },
    { href: "/products/industrial", imageUrl: "/product3.jpg", label: "Magnetic Track Channel" },
    { href: "/products/furniture", imageUrl: "/product4.jpg", label: "pendant" },
    { href: "/products/accessories", imageUrl: "/product5.jpg", label: "Magnetic System" },
    { href: "/products/body-beauty", imageUrl: "/product7.jpg", label: "Linear" },
    { href: "/products/new-arrivals", imageUrl: "/product1.jpg", label: "New Arrivals" },
    { href: "/products/best-sellers", imageUrl: "/product2.jpg", label: "Best Sellers" },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true }, 
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );
  
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="bg-black py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-16">
          Discover Our Products
        </h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {categories.map((category) => (
                <CollectionItem 
                  key={category.label + Math.random()}
                  href={category.href}
                  imageUrl={category.imageUrl}
                  label={category.label}
                />
              ))}
            </div>
          </div>
          <CarouselButton onClick={scrollPrev} isPrev />
          <CarouselButton onClick={scrollNext} />
        </div>
      </div>
    </section>
  );
};

// --- CarouselButton Component (no changes needed) ---
const CarouselButton = ({ onClick, isPrev = false }) => (
    // ... same as before
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all flex items-center justify-center opacity-75 hover:opacity-100 disabled:opacity-20 ${isPrev ? 'left-4' : 'right-4'}`}
    >
      {isPrev ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
      )}
    </button>
);