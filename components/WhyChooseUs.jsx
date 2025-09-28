"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AccordionItem } from './WhyChooseUsAccordion';

export const WhyChooseUs = () => {
  // Animation variants for staggered effect
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.section 
      className="bg-black"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* This is the 2-column "full-bleed" grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* 1. TEXT COLUMN */}
        <div className="container mx-auto px-6 py-24 sm:py-32 lg:pr-16">
          <motion.h2 
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl font-bold text-white"
          >
            See Why You Should Choose Spetraluce.
          </motion.h2>
          
          <motion.div variants={itemVariants} className="mt-12 space-y-2">
            <AccordionItem title="Premium Quality Materials">
              We offer cutting-edge lighting designs that seamlessly blend aesthetics with functionality. Every product is carefully crafted to enhance spaces while maintaining energy efficiency and reliability.
            </AccordionItem>
            <AccordionItem title="Innovative Design Expertise">
              With a team of creative lighting specialists and designers, we deliver bespoke solutions tailored to architectural visions, ensuring that every light accentuates your space’s uniqueness.
            </AccordionItem>
            <AccordionItem title="Trusted by Professionals">
              Architects, interior designers, and businesses choose us for our reliability, precision, and aesthetic excellence. We deliver lighting solutions that stand the test of time and trends.
            </AccordionItem>
          </motion.div>
        </div>

        {/* 2. IMAGE COLUMN */}
        {/* This column "bleeds" to the screen edge and is now just an interactive image */}
        <motion.div 
          variants={itemVariants}
          className="relative w-full h-[450px] lg:h-full min-h-[450px] group overflow-hidden"
        >
          <Image
            src="/Trial2.png" 
            alt="Modern Spetraluce Chandelier"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          {/* Subtle dark overlay for better contrast */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
        </motion.div>

      </div>
    </motion.section>
  );
};

