"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Link from 'next/link';

// --- Helper Components ---

const CheckmarkIcon = () => (
    <svg className="w-6 h-6 text-amber-400 flex-shrink-0 group-hover:text-amber-300 transition-colors" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

const Feature = ({ text }) => (
    <motion.div 
      className="flex items-center gap-4 group"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      <CheckmarkIcon />
      <span className="text-sm font-medium uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors">
        {text}
      </span>
    </motion.div>
);

// --- Main Welcome Section Component ---

export const WelcomeSection = () => {
    const features = [
        "Modern Lighting",
        "Innovation & Excellence",
        "Premium Materials",
        "Residential & Commercial"
    ];

    const ref = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (event) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        mouseX.set(event.clientX - left - width / 2);
        mouseY.set(event.clientY - top - height / 2);
    };

    // Create transformed values for parallax effect
    const rotateX = useTransform(mouseY, [-150, 150], [5, -5]);
    const rotateY = useTransform(mouseX, [-200, 200], [-5, 5]);
    const image1X = useTransform(mouseX, [-200, 200], [-10, 10]);
    const image1Y = useTransform(mouseY, [-150, 150], [-5, 5]);
    const image2X = useTransform(mouseX, [-200, 200], [15, -15]);
    const image2Y = useTransform(mouseY, [-150, 150], [8, -8]);

    // Stagger animation for parent and children elements
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };
    
    // Stagger animation for the title characters
    const title = "Welcome to Spetraluce";
    const titleVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.04 } }
    };
    const charVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
    };

    return (
        <motion.section 
          className="bg-black text-white py-24 sm:py-32 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16 lg:gap-y-0 items-center">
                    
                    {/* 1. Image Column with 3D Parallax Effect */}
                    <motion.div
                      ref={ref}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
                      style={{ rotateX, rotateY }}
                      className="relative w-full min-h-[450px] sm:min-h-[550px] transition-transform duration-300 ease-out"
                    >
                        <motion.div style={{ x: image1X, y: image1Y }} className="absolute top-0 left-0 w-4/5 sm:w-3/4 aspect-[4/3]">
                            <img src="/Trial2.png" alt="Elegant dining room with Spetraluce lighting" className="object-cover w-full h-full rounded-xl shadow-2xl shadow-amber-500/10"/>
                        </motion.div>
                        <motion.div style={{ x: image2X, y: image2Y }} className="absolute bottom-0 right-0 w-1/2 sm:w-3/5 aspect-square">
                            <img src="/trial4.png" alt="Close-up of a modern light fixture" className="object-cover w-full h-full rounded-xl shadow-2xl shadow-black/60 border-4 border-gray-900"/>
                        </motion.div>
                    </motion.div>

                    {/* 2. Text Column with Staggered Animations */}
                    <div>
                        <motion.h2 
                          className="font-serif text-4xl md:text-5xl font-bold text-gray-100"
                          variants={titleVariants}
                        >
                          {title.split("").map((char, index) => (
                            <motion.span key={index} variants={charVariants} className="inline-block">
                              {char === " " ? "\u00A0" : char}
                            </motion.span>
                          ))}
                        </motion.h2>

                        <motion.p 
                          className="mt-6 text-lg text-gray-400 leading-relaxed"
                          variants={itemVariants}
                        >
                            At Spetraluce, we merge Italian craftsmanship with modern technology to create premium architectural lighting. Our mission is to produce innovative solutions that transform residential, commercial, and hospitality spaces into works of art.
                        </motion.p>
                        
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                            {features.map((feature) => (
                                <Feature key={feature} text={feature} />
                            ))}
                        </div>

                        {/* 3. Animated Call-to-Action Button */}
                        <motion.div variants={itemVariants} className="mt-12">
                            <Link href="/products">
                                <motion.button 
                                  className="group relative inline-flex items-center gap-3 bg-spetra-orange-500 text-white font-semibold rounded-full px-8 py-3 overflow-hidden"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                >
                                    <span className="relative z-10">Explore Collection</span>
                                    <motion.span 
                                        className="absolute inset-0 bg-spetra-orange-600 z-0"
                                        initial={{ scaleY: 0 }}
                                        whileHover={{ scaleY: 1 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        style={{ originY: 'bottom' }}
                                    />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};