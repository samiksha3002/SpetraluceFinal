"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Data for our content sections, now with associated images ---
const content = [
  {
    title: "VISION",
    description: "We are the innovative market leader for linear light. Our tailor-made lighting solutions from our own manufacture enrich outstanding projects worldwide. Our values lead the way.",
    imageUrl: "/AboutH.png" // Initial image
  },
  {
    title: "MISSION",
    description: "We speak light. With curiosity, willingness to change and passion, our innovative technology enables ground breaking new design ideas building bridges between architectural design elegance and actual technical implementation.",
    imageUrl: "/trial4.png" // Image for Mission
  },
  {
    title: "OUR PURPOSE",
    description: "Our love for light inspires our actions. Our employees are at the heart of it all. expertise and passion are part of our DNA. The combination of sustainability, mutual growth and the highest quality is the impetus for our future.",
    imageUrl: "/Trial2.png" // Image for Our Purpose
  }
];

// --- A reusable animated text block for the scrollytelling effect ---
const ContentBlock = ({ title, description }) => {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    // Each block animates independently as it comes into view
    <motion.div
      className="lg:h-screen flex flex-col justify-center" // Each block takes up vertical space
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }} // Trigger when 60% is visible
      variants={variants}
    >
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
        {title}
      </h2>
      <motion.div
        className="mt-4 w-20 h-1 bg-gradient-to-r from-spetra-orange-500 to-spetra-orange-600 rounded"
        initial={{ width: 0 }}
        whileInView={{ width: '5rem' }} // Animate width
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      />
      <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-lg">
        {description}
      </p>
    </motion.div>
  );
};

// --- NEW Scroll Progress Indicator Component ---
const ScrollIndicator = ({ scrollYProgress }) => {
    // Transform scroll progress to highlight the active dot
    const getDotStyle = (start, end) => ({
      scale: useTransform(scrollYProgress, [start - 0.1, start, end, end + 0.1], [1, 1.5, 1.5, 1]),
      opacity: useTransform(scrollYProgress, [start - 0.1, start, end, end + 0.1], [0.5, 1, 1, 0.5]),
    });
  
    return (
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 p-4">
        <motion.div style={getDotStyle(0, 0.33)} className="w-2 h-2 rounded-full bg-spetra-orange-500" />
        <motion.div style={getDotStyle(0.33, 0.66)} className="w-2 h-2 rounded-full bg-spetra-orange-500" />
        <motion.div style={getDotStyle(0.66, 1)} className="w-2 h-2 rounded-full bg-spetra-orange-500" />
      </div>
    );
};


// --- The Main Component ---
export const VisionMission = () => {
  const targetRef = useRef(null);
  // Track scroll progress within the target section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Create opacity transforms for each image to create a cross-fade effect
  const imageOpacities = [
    useTransform(scrollYProgress, [0, 0.33], [1, 0]), // Vision image fades out
    useTransform(scrollYProgress, [0.30, 0.33, 0.66, 0.69], [0, 1, 1, 0]), // Mission image fades in and out
    useTransform(scrollYProgress, [0.66, 1], [0, 1]) // Purpose image fades in
  ];

  return (
    <section ref={targetRef} className="bg-black text-white relative h-[250vh] lg:h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="container mx-auto px-6 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center h-full">
            
            <div className="lg:col-span-5 h-full py-24 overflow-y-auto relative">
              {/* Add the scroll indicator relative to the text column */}
              <ScrollIndicator scrollYProgress={scrollYProgress} />
              
              <div className="pl-12"> {/* Add padding to make space for the indicator */}
                {content.map((item) => (
                  <ContentBlock key={item.title} title={item.title} description={item.description} />
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN with cross-fading images */}
            <div className="hidden lg:block lg:col-span-7 h-[70vh] relative">
              {content.map((item, index) => (
                <motion.div 
                  key={item.imageUrl}
                  className="absolute inset-0 w-full h-full"
                  style={{ opacity: imageOpacities[index] }}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                    <Image 
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="60vw"
                      className="object-cover" 
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

