// app/components/ProductHero.jsx
import Image from 'next/image'; // <-- 1. Make sure Image is imported

export const ProductHero = () => {
  return (
    // 2. Make the section relative and remove the old background colors
    <section className="relative overflow-hidden pt-48 pb-24">
      
      {/* 3. Add the Background Image (z-0) */}
      <Image
        // --- IMPORTANT ---
        // Add your new hero image to /public and update this path
        src="/ProductHero.png" 
        alt="Elegant architectural interior with modern lighting"
        fill
        sizes="100vw"
        className="object-cover z-0"
        priority // Good to add 'priority' for LCP images
      />

      {/* 4. Add the Dark Overlay (z-10) */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* 5. Make the content relative (z-20) and change text to light */}
      <div className="container mx-auto px-6 text-center relative z-20">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white">
          Our Products
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          Browse our curated selection of indoor, outdoor, and industrial lighting, 
          designed with elegance and innovation in mind.
        </p>
      </div>
    </section>
  );
};