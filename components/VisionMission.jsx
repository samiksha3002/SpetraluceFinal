// app/components/VisionMission.jsx
"use client"; // This component uses Framer Motion for animation

import Image from 'next/image';
import { motion } from 'framer-motion';

// --- Animation Variants for Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease: "easeOut" } },
};


// --- The Main Component ---
export const VisionMission = () => {
  return (
    // The section is now premium black
    <section className="bg-black py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* NEW Asymmetrical 12-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* 1. LEFT COLUMN (Your Animated Text) - Takes 5 of 12 columns */}
          <motion.div 
            className="space-y-12 lg:col-span-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" // Animation triggers when it enters the viewport
            viewport={{ once: true, amount: 0.2 }}
          >
            
            {/* VISION */}
            <motion.div variants={itemVariants}>
              <h2 className="font-serif text-3xl font-bold text-white">
                VISION
              </h2>
              {/* Elegant Orange Accent */}
              <div className="mt-4 w-20 h-1 bg-gradient-to-r from-spetra-orange-500 to-spetra-orange-600 rounded" />
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                We are the innovative market leader for linear light. Our tailor-made lighting solutions from our own manufacture enrich outstanding projects worldwide. Our values lead the way.
              </p>
            </motion.div>
            
            {/* MISSION */}
            <motion.div variants={itemVariants}>
              <h2 className="font-serif text-3xl font-bold text-white">
                MISSION
              </h2>
              {/* Elegant Orange Accent */}
              <div className="mt-4 w-20 h-1 bg-gradient-to-r from-spetra-orange-500 to-spetra-orange-600 rounded" />
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                We speak light. With curiosity, willingness to change and passion, our innovative technology enables ground breaking new design ideas building bridges between architectural design elegance and actual technical implementation.
              </p>
            </motion.div>

            {/* OUR PURPOSE */}
            <motion.div variants={itemVariants}>
              <h2 className="font-serif text-3xl font-bold text-white">
                OUR PURPOSE
              </h2>
              {/* Elegant Orange Accent */}
              <div className="mt-4 w-20 h-1 bg-gradient-to-r from-spetra-orange-500 to-spetra-orange-600 rounded" />
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Our love for light inspires our actions. Our employees are at the heart of it all. expertise and passion are part of our DNA. The combination of sustainability, mutual growth and the highest quality is the impetus for our future.
              </p>
            </motion.div>

          </motion.div>

          {/* 2. RIGHT COLUMN (Your Animated Image) - Takes 7 of 12 columns */}
          <motion.div 
            className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl lg:col-span-7"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image 
              src="/AboutH.png" // Your image
              alt="Spetraluce Vision"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover" 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};