"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// This component is updated to accept a single `category` object prop for consistency.
export const CategorySection = ({ category }) => {
  // Gracefully handle cases where the category might not be found, preventing errors.
  if (!category) {
    return null;
  }

  const { title, description, heroImage, productsLink, layout } = category;
  
  // Animation variants for staggered text entrance
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: layout === 'left' ? -30 : 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // The text column with animations
  const textContent = (
    <motion.div 
      className={`lg:col-span-5 ${layout === 'right' ? 'lg:order-1' : 'lg:order-2'}`}
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants} className="font-serif text-4xl md:text-5xl font-bold text-white">
        {title}
      </motion.h2>
      <motion.p variants={itemVariants} className="mt-6 text-lg text-gray-300 leading-relaxed">
        {description}
      </motion.p>
      <motion.div variants={itemVariants} className="mt-10">
        <Link href={productsLink} passHref>
          <motion.button 
            className="inline-block bg-spetra-orange-500 text-black font-bold shadow-lg px-8 py-3 text-sm uppercase tracking-widest"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop All {title.split(' ')[0]}
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );

  // The image column with animations
  const imageContent = (
    <motion.div 
      className={`relative lg:col-span-7 w-full aspect-[4/3] rounded-xl overflow-hidden ${layout === 'right' ? 'lg:order-2' : 'lg:order-1'}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Image
        // FIX: Using `heroImage` which is the correct property from your data object
        src={heroImage} 
        alt={title}
        fill
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="object-cover"
      />
    </motion.div>
  );

  return (
    // The main layout grid
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {textContent}
      {imageContent}
    </div>
  );
};

