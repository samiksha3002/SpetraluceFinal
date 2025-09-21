// app/components/CategoryHero.jsx
import Image from 'next/image';

// This is our reusable hero component for page titles
export const CategoryHero = ({ title, subtitle, image }) => {
  return (
    // This section creates the cinematic, full-width feel
    // We add 'pt-48' (padding-top) to push it down below our fixed Header
    <section className="relative overflow-hidden pt-48 pb-24">
      
      {/* Background Image (z-0) */}
      <Image
        src={image} 
        alt={title}
        fill
        sizes="100vw"
        className="object-cover z-0"
        priority // Makes the hero image load faster
      />

      {/* Dark Overlay (z-10) */}
      {/* This makes the white text readable */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Text Content (z-20) */}
      {/* Sits on top of the overlay */}
      <div className="container mx-auto px-6 text-center relative z-20">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white">
          {title} {/* <-- This title is dynamic */}
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          {subtitle} {/* <-- This subtitle is dynamic */}
        </p>
      </div>
    </section>
  );
};