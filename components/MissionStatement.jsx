// app/about/page.jsx
"use client";

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AboutHero } from '../components/AboutHero'; 
import { ServiceCard } from '../components/ServiceCard';
import Image from 'next/image'; // <-- We need this for our new sections

// Import icons for your "Values" section
import { 
  SparklesIcon,
  CheckBadgeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  
  // Data for "Values" grid (unchanged)
  const valuesData = [
    { Icon: SparklesIcon, title: 'Innovation', description: 'We harness modern technology and creative design to produce truly innovative lighting solutions.' },
    { Icon: CheckBadgeIcon, title: 'Uncompromising Quality', description: 'From materials to manufacturing, every product is crafted to meet the highest standards.' },
    { Icon: GlobeAltIcon, title: 'Sustainability', description: 'We are committed to responsible design, using efficient LED technology and sustainable materials.' },
  ];

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Header />

      <main>
        {/* --- 1. Hero Section (Unchanged) --- */}
        <AboutHero />

        {/* --- 2. NEW "VISION" SECTION (Image Left, Text Right) --- */}
        <section className="bg-white dark:bg-black py-24 sm:py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image Column */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/image-vision.jpg" // <-- Your "moon" image
                  alt="Vision"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover" 
                />
              </div>
              {/* Text Column */}
              <div className="lg:pl-8">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  VISION
                </h2>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  We are the innovative market leader for linear light. Our tailor-made lighting solutions from our own manufacture enrich outstanding projects worldwide. Our values lead the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. NEW "MISSION" SECTION (Flipped: Text Left, Image Right) --- */}
        <section className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text Column (Flipped) */}
              <div className="lg:pr-12 lg:order-first order-last">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  MISSION
                </h2>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  We speak light. With curiosity, willingness to change and passion, our innovative technology enables ground breaking new design ideas building bridges between architectural design elegance and actual technical implementation.
                </p>
              </div>
              {/* Image Column (Flipped) */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/image-mission.jpg" // <-- REPLACE with your image
                  alt="Mission"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. NEW "PURPOSE" SECTION (Image Left, Text Right) --- */}
        <section className="bg-white dark:bg-black py-24 sm:py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image Column */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/image-purpose.jpg" // <-- REPLACE with your image
                  alt="Purpose"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover" 
                />
              </div>
              {/* Text Column */}
              <div className="lg:pl-8">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  OUR PURPOSE
                </h2>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our love for light inspires our actions. Our employees are at the heart of it all. expertise and passion are part of our DNA. The combination of sustainability, mutual growth and the highest quality is the impetus for our future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 5. "Our Values" Section (Unchanged) --- */}
        <section className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                What We Value
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {valuesData.map((value) => (
                <ServiceCard 
                  key={value.title}
                  Icon={value.Icon} 
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* --- 6. Call to Action (Unchanged) --- */}
        <section className="bg-white dark:bg-black py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Have a project in mind?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              Let's discuss how our team can help you create something truly exceptional.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-10 py-4 bg-gray-900 text-white
                         dark:bg-white dark:text-gray-900 font-semibold text-base 
                         uppercase tracking-wider rounded-md shadow-lg 
                         hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}