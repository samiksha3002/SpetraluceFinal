"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Testimonials = () => {
  // --- Testimonial Data Array ---
  const testimonials = [
    {
      quote: "Spetraluce transformed our living space. The lighting is not just functional; it's a work of art that elevates the entire ambiance, creating moods we never thought possible.",
      author: "Elena Petrova",
      title: "Interior Designer",
      mainImage: "/Testimonal1.png", // Ensure you have this image in your public folder
    },
    {
      quote: "The attention to detail and unique designs from Spetraluce are unparalleled. Our clients consistently rave about the exquisite lighting fixtures we've installed.",
      author: "Marcus Chen",
      title: "Architectural Firm Owner",
      mainImage: "/Testimonal2.png", // You'll need to create/find this image
    },
    {
      quote: "As a real estate developer, I look for partners who deliver quality and elegance. Spetraluce's lighting solutions add significant value and appeal to our luxury properties.",
      author: "Sophia Ramirez",
      title: "Real Estate Developer",
      mainImage: "/Testimonal3.png", // You'll need to create/find this image
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Change testimonial every 8 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  // Animation variants for the text
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
  };

  // Animation variants for the image (subtly fade in/out)
  const imageVariants = {
    initial: { opacity: 0.7, scale: 1.05 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0.7, scale: 1.05, transition: { duration: 0.6, ease: "easeIn" } },
  };

  return (
    <section className="bg-gray-800 dark:bg-gray-950 py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          {/* 1. LEFT SIDE: Image with Floating Quote Bubble */}
          <div className="relative h-96 sm:h-[500px] flex justify-center items-end">
            {/* Background Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex} // Key changes to force re-render and re-animate
                initial="initial"
                animate="animate"
                exit="exit"
                variants={imageVariants}
                className="absolute inset-0 z-0 rounded-lg overflow-hidden" // Added overflow-hidden for rounded corners
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


            {/* Floating Speech Bubble */}
            <motion.div
              key={`bubble-${currentIndex}`} // Unique key for bubble animation
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { delay: 0.3, duration: 0.6, ease: "easeOut" } }}
              exit={{ opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.4, ease: "easeIn" } }}
              className="relative z-10 p-6 sm:p-8 bg-white dark:bg-gray-700
                         rounded-xl shadow-lg max-w-sm lg:max-w-md
                         mb-20 sm:mb-24 -mr-16 sm:-mr-24 lg:-mr-0 lg:ml-auto"
            >
              {/* Optional: Add a small brand icon here like in your image */}
              <div className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center
                              bg-yellow-500 rounded-full text-white text-lg font-bold">
                S
              </div>
              <p className="text-gray-800 dark:text-gray-100 italic">
                "{currentTestimonial.quote.substring(0, 70)}..." {/* Display first part of quote */}
              </p>
            </motion.div>
          </div>

          {/* 2. RIGHT SIDE: Testimonial Card */}
          <div className="bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-lg shadow-xl lg:max-w-xl lg:ml-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold
                           text-gray-900 dark:text-gray-100">
              What Our Clients Say
            </h2>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex} // Key changes to force re-render and re-animate
                initial="initial"
                animate="animate"
                exit="exit"
                variants={textVariants}
              >
                <blockquote className="mt-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  "{currentTestimonial.quote}"
                </blockquote>
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-base font-semibold text-gray-900 dark:text-gray-100">
                    {currentTestimonial.author}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
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