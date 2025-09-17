// app/components/ProductBrowser.jsx
"use client"; 

import { useState } from 'react';
import { CategoryCard } from './CategoryCard';
import { CategorySection } from './CategorySection';

// --- Placeholder Data ---
const categories = [
  { 
    id: "indoor",
    title: "Indoor",
    shortDescription: "Crafted to transform interior spaces.",
    description: "Our indoor collection blends timeless elegance with modern function. Each piece is designed to be the focal point of your room, creating ambiance and warmth.",
    cardImage: "/IndoorHero.png", 
    heroImage: "/IndoorHero.png", 
    productsLink: "/products/indoor",
    layout: "left" 
  },
  { 
    id: "outdoor",
    title: "Outdoor",
    shortDescription: "Durable, weatherproof, and beautiful.",
    description: "Our outdoor solutions withstand the elements while casting your architecture and landscape features in a stunning, secure light. Durable, weatherproof, and beautifully designed.",
    cardImage: "/OutdoorHero.png", 
    heroImage: "/OutdoorHero.png", 
    productsLink: "/products/outdoor",
    layout: "right" 
  },
  { 
    id: "industrial",
    title: "Industrial",
    shortDescription: "High-output performance meets design.",
    description: "Our industrial line offers high-output, efficient, and robust lighting for warehouses, offices, and retail spaces without compromising on the aesthetic. Performance meets design.",
    cardImage: "/IndustrialHero.png", 
    heroImage: "/IndustrialHero.png", 
    productsLink: "/products/industrial",
    layout: "left" 
  },
];

// This helper component is unchanged and correct
const ActiveCategorySection = ({ categoryId }) => {
  const category = categories.find(c => c.id === categoryId);
  if (!category) return null;

  return (
    <CategorySection
      id={category.id}
      title={category.title}
      description={category.description}
      imageUrl={category.heroImage}
      layoutDirection={category.layout}
      productsLink={category.productsLink}
    />
  );
};


// --- Main Browser Component ---
export const ProductBrowser = () => {
  const [activeCategory, setActiveCategory] = useState('all'); 

  return (
    <section className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="container mx-auto px-6">
        
        {/* Elegant Filter Buttons (Unchanged) */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16">
          <FilterButton label="All Products" isActive={activeCategory === 'all'} onClick={() => setActiveCategory('all')} />
          <FilterButton label="Indoor" isActive={activeCategory === 'indoor'} onClick={() => setActiveCategory('indoor')} />
          <FilterButton label="Outdoor" isActive={activeCategory === 'outdoor'} onClick={() => setActiveCategory('outdoor')} />
          <FilterButton label="Industrial" isActive={activeCategory === 'industrial'} onClick={() => setActiveCategory('industrial')} />
        </div>

        {/* === THE DYNAMIC CONTENT === */}
        <div>
          {activeCategory === 'all' ? (
            // --- THIS IS THE FIX ---
            // Replaced the buggy 'grid' layout with a robust 'flex' layout
            // This will stack vertically on mobile (flex-col)
            // And become a 3-column row on desktop (md:flex-row)
            <div className="flex flex-col md:flex-row gap-8">
              {/* We manually map the 3 categories to ensure they each get 1/3 of the width */}
              <div className="md:w-1/3">
                <CategoryCard category={categories[0]} setActiveCategory={setActiveCategory} />
              </div>
              <div className="md:w-1/3">
                <CategoryCard category={categories[1]} setActiveCategory={setActiveCategory} />
              </div>
              <div className="md:w-1/3">
                <CategoryCard category={categories[2]} setActiveCategory={setActiveCategory} />
              </div>
            </div>
          ) : (
            <ActiveCategorySection categoryId={activeCategory} />
          )}
        </div>

      </div>
    </section>
  );
};

// --- ELEGANT FILTER BUTTON (Unchanged and Correct) ---
const FilterButton = ({ label, isActive, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`relative text-xl font-serif tracking-wide transition-colors pb-2
                 ${isActive 
                   ? 'text-gray-900 dark:text-white' 
                   : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 dark:bg-white"></span>
      )}
    </button>
  );
};