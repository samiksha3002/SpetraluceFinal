"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// --- NEW DATA STRUCTURE ---
// This nested structure is ideal for the new tabbed layout.
// You can easily add more categories or sub-categories here.
const menuData = [
  {
    category: 'Indoor',
    subCategories: [
      {
        title: 'Ceiling Lights',
        links: [
          { href: '/products/downlight', label: 'Downlight' },
          { href: '/products/pendant', label: 'Pendant Lights' },
          { href: '/products/chandeliers', label: 'Chandeliers' },
          { href: '/products/spotlights', label: 'Spotlights' },
        ],
      },
      {
        title: 'Wall Lights',
        links: [
          { href: '/products/sconces', label: 'Sconces' },
          { href: '/products/picture-lights', label: 'Picture Lights' },
          { href: '/products/vanity-lights', label: 'Vanity Lights' },
        ],
      },
      {
        title: 'Linear & Track',
        links: [
          { href: '/products/linear', label: 'Linear Systems' },
          { href: '/products/track', label: 'Track Channels' },
          { href: '/products/magnetic', label: 'Magnetic Track' },
        ],
      },
    ],
  },
  {
    category: 'Outdoor',
    subCategories: [
      {
        title: 'Garden & Path',
        links: [
          { href: '/products/bollard', label: 'Bollard Lights' },
          { href: '/products/spike', label: 'Spike Lights' },
          { href: '/products/in-ground', label: 'In-Ground Lights' },
        ],
      },
      {
        title: 'Wall & Facade',
        links: [
          { href: '/products/wall-mounted', label: 'Wall Mounted' },
          { href: '/products/floodlights', label: 'Floodlights' },
          { href: '/products/bulkhead', label: 'Bulkhead Lights' },
        ],
      },
      {
        title: 'Architectural',
        links: [
          { href: '/products/facade', label: 'Facade Lighting' },
          { href: '/products/step', label: 'Step & Stair Lights' },
        ],
      },
    ],
  },
  {
    category: 'Industrial',
    subCategories: [
      {
        title: 'High Bay',
        links: [
          { href: '/products/ufo-high-bay', label: 'UFO High Bay' },
          { href: '/products/linear-high-bay', label: 'Linear High Bay' },
        ],
      },
      {
        title: 'Low Bay',
        links: [
          { href: '/products/canopy', label: 'Canopy Lights' },
          { href: '/products/garage', label: 'Garage & Parking' },
        ],
      },
      {
        title: 'Specialty',
        links: [
          { href: '/products/explosion-proof', label: 'Explosion-Proof' },
          { href: '/products/cleanroom', label: 'Cleanroom Lights' },
        ],
      },
    ],
  },
];


const MegaMenu = () => {
  // State to track the currently hovered main category
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } }
  };

  const subCategoryVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, x: -10, transition: { duration: 0.2, ease: "easeIn" } }
  };

  // Find the data for the currently active category
  const activeMenuData = menuData.find(item => item.category === activeCategory);

  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md shadow-lg border-t border-white/10"
    >
      <div className="container mx-auto grid grid-cols-4 gap-8 px-6 py-12 text-white">
        
        {/* Column 1: Main Categories (Tabs) */}
        <div className="col-span-1 border-r border-white/10 pr-8">
          <ul className="space-y-2">
            {menuData.map(item => (
              <li key={item.category}>
                <button
                  onMouseEnter={() => setActiveCategory(item.category)}
                  className={`w-full text-left text-lg p-3 rounded-md transition-colors duration-200 ${
                    activeCategory === item.category 
                    ? 'bg-spetra-orange-500 text-white' 
                    : 'hover:bg-white/5'
                  }`}
                >
                  {item.category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Columns 2-4: Sub-Categories (Content) */}
        <div className="col-span-3">
          <AnimatePresence mode="wait">
            {activeMenuData && (
              <motion.div
                key={activeCategory} // This key is crucial for the animation
                variants={subCategoryVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-3 gap-8"
              >
                {activeMenuData.subCategories.map(sub => (
                  <div key={sub.title} className="space-y-4">
                    <h3 className="font-semibold uppercase tracking-widest text-gray-400 text-sm">{sub.title}</h3>
                    <ul className="space-y-3">
                      {sub.links.map(link => (
                        <li key={link.href}>
                          <Link href={link.href} className="hover:text-spetra-orange-400 transition-colors">{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
};

export default MegaMenu;