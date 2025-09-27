// app/components/Testimonials.jsx
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export const Testimonials = () => {
  // --- Testimonial Data Array ---
  // IMPORTANT: You'll need to create/find these three images
  // and place them in your /public folder.
  const testimonials = [
    {
      quote: "Spetraluce transformed our living space. The lighting is not just functional; it's a work of art that elevates the entire ambiance, creating moods we never thought possible.",
      author: "Elena Petrova",
      title: "Interior Designer",
      mainImage: "/Testimonal1.png", 
    },
    {
      quote: "The attention to detail and unique designs from Spetraluce are unparalleled. Our clients consistently rave about the exquisite lighting fixtures we've installed.",
      author: "Marcus Chen",
      title: "Architectural Firm Owner",
      mainImage: "/Testimonal2.png", 
    },
    {
      quote: "As a real estate developer, I look for partners who deliver quality and elegance. Spetraluce's lighting solutions add significant value and appeal to our luxury properties.",
      author: "Sophia Ramirez",
      title: "Real Estate Developer",
      mainImage: "/Testimonal3.png", 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // This logic automatically cycles through the testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Change testimonial every 8 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  // Animation variants for the text content
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
  };

  return (
    // The section now uses our premium black theme
    <section className="bg-black py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          
          {/* 1. LEFT SIDE: Image with Animated Quote Bubble */}
          <div className="relative h-96 sm:h-[500px] flex justify-center items-end">
            
            {/* Background Image (with cross-fade animation) */}
            <AnimatePresence>
              <motion.div
                key={currentIndex} // Key changes to trigger animation
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
                exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeIn" } }}
                className="absolute inset-0 z-0 rounded-lg overflow-hidden"
              >
                <Image
                  src={currentTestimonial.mainImage}
                  alt="Elegant interior design detail with lighting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Floating Speech Bubble (with its own animation) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`bubble-${currentIndex}`} // Unique key for bubble animation
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0, transition: { delay: 0.2, duration: 0.6, ease: "easeOut" } }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative z-10 p-6 sm:p-8 bg-gray-900/80 backdrop-blur-md
                           border border-white/10
                           rounded-xl shadow-lg max-w-sm lg:max-w-md
                           mb-20 sm:mb-24 -mr-16 sm:-mr-24 lg:-mr-0 lg:ml-auto"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center
                                bg-gradient-to-r from-spetra-orange-500 to-spetra-orange-600 
                                rounded-full text-white text-lg font-serif">
                  “
                </div>
                <p className="text-gray-200 italic">
                  "{currentTestimonial.quote.substring(0, 70)}..."
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 2. RIGHT SIDE: Testimonial Card (with animated text) */}
          <div className="bg-gray-900 border border-gray-800 p-8 sm:p-12 rounded-lg shadow-xl lg:max-w-xl lg:ml-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              What Our Clients Say
            </h2>
            
            {/* This makes the text inside animate when the testimonial changes */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex} 
                initial="initial"
                animate="animate"
                exit="exit"
                variants={textVariants}
              >
                <blockquote className="mt-8 text-lg leading-relaxed text-gray-300">
                  "{currentTestimonial.quote}"
                </blockquote>
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-base font-semibold text-white">
                    {currentTestimonial.author}
                  </p>
                  <p className="text-sm text-gray-400">
                    {currentTestimonial.title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};