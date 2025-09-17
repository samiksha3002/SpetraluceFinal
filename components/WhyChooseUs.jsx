// app/components/WhyChooseUs.jsx
import Image from 'next/image';
import { AccordionItem } from './WhyChooseUsAccordion'; // Import our new client component

export const WhyChooseUs = () => {
  return (
    // This section now has a white/dark background
    <section className="bg-white dark:bg-gray-900">
      
      {/* This is the new 2-column "full-bleed" grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* 1. TEXT COLUMN */}
        {/* This column has our standard container padding */}
        <div className="container mx-auto px-6 py-24 sm:py-32 lg:pr-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold
                         text-gray-900 dark:text-gray-100">
            See Why You Should Choose Spetraluce.
          </h2>
          
          {/* This is our new Accordion list */}
          <div className="mt-12 space-y-2">
            <AccordionItem title="Premium Quality Materials">
              We offer cutting-edge lighting designs that seamlessly blend aesthetics with functionality. Every product is carefully crafted to enhance spaces while maintaining energy efficiency and reliability.
            </AccordionItem>
            <AccordionItem title="Innovative Design Expertise">
              With a team of creative lighting specialists and designers, we deliver bespoke solutions tailored to architectural visions, ensuring that every light accentuates your space’s uniqueness.
            </AccordionItem>
            <AccordionItem title="Trusted by Professionals">
             Architects, interior designers, and businesses choose us for our reliability, precision, and aesthetic excellence. We deliver lighting solutions that stand the test of time and trends.
            </AccordionItem>
          </div>
        </div>

        {/* 2. IMAGE/VIDEO COLUMN */}
        {/* This column has NO padding and "bleeds" to the screen edge */}
        <div className="relative w-full h-[450px] lg:h-full min-h-[450px]
                        flex items-center justify-center cursor-pointer group">
          
          <Image
            // --- IMPORTANT ---
            // Add your chandelier image to /public and update this path
            src="/Trial2.png" 
            alt="Modern Spetraluce Chandelier"
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          {/* Dark overlay on image */}
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Big Elegant Play Button */}
         
        </div>

      </div>
    </section>
  );
};