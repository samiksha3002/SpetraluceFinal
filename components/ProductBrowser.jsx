"use client"; 

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CategoryCard } from './CategoryCard';
import { CategorySection } from './CategorySection';

// --- Data with updated, more descriptive content ---
const categories = [
  { 
    id: "indoor",
    title: "Indoor Lighting",
    shortDescription: "Crafted to transform interior spaces.",
    description: "Our indoor collection blends timeless elegance with modern function. Each piece is designed to be the focal point of your room, creating ambiance and warmth.",
    cardImage: "/IndoorHero.png", 
    heroImage: "/IndoorHero.png", 
    productsLink: "/products/indoor",
    layout: "left" 
  },
  { 
    id: "outdoor",
    title: "Outdoor Solutions",
    shortDescription: "Durable, weatherproof, and beautiful.",
    description: "Our outdoor solutions withstand the elements while casting your architecture and landscape features in a stunning, secure light. Durable, weatherproof, and beautifully designed.",
    cardImage: "/OutdoorHero.png", 
    heroImage: "/OutdoorHero.png", 
    productsLink: "/products/outdoor",
    layout: "right" 
  },
  { 
    id: "industrial",
    title: "Industrial Performance",
    shortDescription: "High-output performance meets design.",
    description: "Our industrial line offers high-output, efficient, and robust lighting for warehouses, offices, and retail spaces without compromising on the aesthetic. Performance meets design.",
    cardImage: "/IndustrialHero.png", 
    heroImage: "/IndustrialHero.png", 
    productsLink: "/products/industrial",
    layout: "left" 
  },
];

const filters = ["All Products", "Indoor", "Outdoor", "Industrial"];

// --- Main Browser Component ---
export const ProductBrowser = () => {
  const [activeCategory, setActiveCategory] = useState('All Products');

  const getCategoryByTitle = (title) => categories.find(c => c.title.toLowerCase().startsWith(title.toLowerCase()));

  return (
    <section 
        className="bg-black text-white py-24 sm:py-32"
        style={{ backgroundImage: 'radial-gradient(circle at top, rgba(255, 152, 0, 0.05), transparent 40%)' }}
    >
      <div className="container mx-auto px-6">
        
        <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
            
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 mb-16">
          {filters.map(filter => (
            <FilterButton 
              key={filter} 
              label={filter} 
              isActive={activeCategory === filter} 
              onClick={() => setActiveCategory(filter)} 
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {activeCategory === 'All Products' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map(cat => (
                    <CategoryCard key={cat.id} category={cat} onSelect={() => setActiveCategory(cat.title.split(' ')[0])} />
                ))}
              </div>
            ) : (
              <CategorySection category={getCategoryByTitle(activeCategory)} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// --- Premium Filter Button with Sliding Effect ---
const FilterButton = ({ label, isActive, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`relative text-lg font-medium tracking-wide transition-colors px-5 py-2 rounded-full
                ${isActive ? 'text-black' : 'text-gray-400 hover:text-white'}`}
    >
      {isActive && (
        <motion.span
          layoutId="active-pill"
          className="absolute inset-0 z-0 bg-spetra-orange-500 rounded-full"
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
};

