// app/components/PageHero.jsx
import Image from 'next/image';
import Link from 'next/link';

// This is our new, single, reusable Hero for all content pages
export const PageHero = ({ title, breadcrumb, image }) => {
  return (
    // This section creates the cinematic, full-width feel
    // and adds padding to clear our fixed Header
    <section className="relative overflow-hidden pt-48 pb-24">
      
      {/* Background Image (z-0) */}
      <Image
        src={image} 
        alt={title}
        fill
        sizes="100vw"
        className="object-cover z-0"
        priority 
      />
      
      {/* Dark Overlay (z-10) */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Text Content (z-20) */}
      <div className="container mx-auto px-6 text-center relative z-20">
        
        {/* Elegant Breadcrumbs (from your idea) */}
        <div className="text-sm text-gray-300 font-medium tracking-wide capitalize mb-4">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          {/* This text comes from the 'breadcrumb' prop */}
          <span className="text-white">{breadcrumb}</span> 
        </div>

        {/* Main Title (from 'title' prop) */}
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white">
          {title}
        </h1>
      </div>
    </section>
  );
};