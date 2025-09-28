"use client";

import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';

// This is the new, highly interactive card component.
export const CategoryCard = ({ category, onSelect }) => {
  // Hooks for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Create transformed values for a subtle 3D rotation
  const rotateX = useTransform(mouseY, [-150, 150], [8, -8]);
  const rotateY = useTransform(mouseX, [-200, 200], [-8, 8]);

  // Animation variants for the frosted glass overlay
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }
  };

  // Staggered animation for text elements
  const textContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };
  const textItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.button 
      onClick={onSelect}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="group relative block w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
    >
      {/* 1. BACKGROUND IMAGE (Zooms *in* on hover) */}
      <Image
        src={category.cardImage}
        alt={category.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-center w-full h-full 
                   transition-transform duration-500 ease-in-out 
                   group-hover:scale-110" // The image zooms in
      />
      
      {/* 2. FROSTED GLASS OVERLAY with Framer Motion */}
      <motion.div 
        className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center bg-black/60 backdrop-blur-sm"
        variants={overlayVariants}
        initial="hidden"
        whileHover="visible"
      >
        <motion.div 
          className="relative z-20 text-white"
          variants={textContainerVariants}
        >
          <motion.h3 variants={textItemVariants} className="text-3xl font-serif font-bold">
            {category.title}
          </motion.h3>
          <motion.p variants={textItemVariants} className="mt-2 text-sm text-white/90">
            {category.shortDescription}
          </motion.p>
          <motion.div variants={textItemVariants} className="mt-4">
            <span className="inline-block px-5 py-2 border border-white/50 text-xs 
                             font-medium uppercase tracking-widest rounded-full 
                             group-hover:bg-spetra-orange-500 group-hover:border-spetra-orange-500 group-hover:text-black
                             transition-colors duration-300">
              View Category
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

