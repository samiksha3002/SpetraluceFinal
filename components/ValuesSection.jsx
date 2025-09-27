"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- Placeholder Icons (replace with your actual icons) ---
const IconComponent1 = ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>;
const IconComponent2 = ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 6v12l9 5 9-5V6L12 1z" /></svg>;
const IconComponent3 = ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>;

// --- Data for the cards ---
const valuesData = [
  {
    title: "Innovation",
    description: "We are committed to pushing boundaries and creating forward-thinking solutions.",
    Icon: IconComponent1,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop"
  },
  {
    title: "Integrity",
    description: "Our principles guide every decision we make, from design to delivery.",
    Icon: IconComponent2,
    image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2727&auto=format&fit=crop"
  },
  {
    title: "Excellence",
    description: "We strive for the highest quality in every product and service we offer.",
    Icon: IconComponent3,
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2940&auto=format&fit=crop"
  }
];

// --- Framer Motion Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};


// --- The Interactive Card Component ---
const ValueCard = ({ Icon, title, description, image }) => {
  return (
    <motion.div
      className="group relative flex flex-col items-center justify-center p-8 bg-cover bg-center rounded-xl shadow-lg overflow-hidden h-96"
      style={{ backgroundImage: `url('${image}')` }}
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Overlay with transition for a premium feel */}
      <div className="absolute inset-0 bg-black/50 z-10 transition-colors duration-300 group-hover:bg-black/70"></div>

      {/* Card Content */}
      <div className="relative z-20 text-center text-white transition-opacity duration-300 group-hover:opacity-100">
        <div className="mb-4">
          {/* Icon with the interactive orange color */}
          <Icon className="h-12 w-12 mx-auto text-amber-500 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h3 className="font-serif text-3xl font-bold mb-2">{title}</h3>
        <p className="text-lg opacity-80">{description}</p>
      </div>
    </motion.div>
  );
};


// --- The Main ValuesSection Component ---
const ValuesSection = () => {
  return (
    <motion.section 
      className="bg-black py-24 sm:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100">
            What We Value
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Our principles guide every decision we make, from design to delivery.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={sectionVariants} // Reuse variants for staggering effect
        >
          {valuesData.map((value) => (
            <ValueCard
              key={value.title}
              Icon={value.Icon}
              title={value.title}
              description={value.description}
              image={value.image}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// --- THIS IS THE FIX ---
// Added a default export to resolve the import/export mismatch.
export default ValuesSection;
