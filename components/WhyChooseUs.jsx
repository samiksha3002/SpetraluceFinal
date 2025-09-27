// app/components/WhyChooseUs.jsx
import Image from 'next/image';
import { AccordionItem } from './WhyChooseUsAccordion'; // Import our new animated component

export const WhyChooseUs = () => {
  return (
    // This section now has our premium black theme
    <section className="bg-black">
      
      {/* This is the 2-column "full-bleed" grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* 1. TEXT COLUMN */}
        {/* This column has our standard container padding */}
        <div className="container mx-auto px-6 py-24 sm:py-32 lg:pr-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold
                         text-white">
            See Why You Should Choose Spetraluce.
          </h2>
          
          {/* This is our new animated Accordion list */}
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
        {/* This column "bleeds" to the screen edge */}
        <div className="relative w-full h-[450px] lg:h-full min-h-[450px]
                        flex items-center justify-center cursor-pointer group">
          
          <Image
            src="/Trial2.png" 
            alt="Modern Spetraluce Chandelier"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          {/* Dark overlay on image */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Big Elegant Play Button */}
          <div className="relative z-10 w-24 h-24 
                          rounded-full bg-white/20 backdrop-blur-md border border-white/20
                          flex items-center justify-center
                          transition-all duration-300 ease-in-out 
                          group-hover:scale-110 group-hover:bg-white/30">
            {/* Play Icon */}
            <svg className="w-12 h-12 text-white ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 3.7C5.8 3.4 5.2 3.4 4.7 3.7C4.2 4 4 4.5 4 5.1L4 14.9C4 15.5 4.2 16 4.7 16.3C5.2 16.6 5.8 16.6 6.3 16.3L14.7 11.4C15.2 11.1 15.5 10.6 15.5 10C15.5 9.4 15.2 8.9 14.7 8.6L6.3 3.7Z" />
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
};