// app/components/WhyChooseUsAccordion.jsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// This is the icon for the 'plus' / 'minus'
const PlusMinusIcon = ({ isOpen }) => (
  <motion.svg 
    key="icon"
    className="w-6 h-6 text-white flex-shrink-0" 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2.5} 
    stroke="currentColor"
    animate={{ rotate: isOpen ? 45 : 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </motion.svg>
);

// This is the individual accordion item
export const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      {/* The Clickable Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-6 text-left"
      >
        <h3 className="text-xl font-medium text-white">
          {title}
        </h3>
        <PlusMinusIcon isOpen={isOpen} />
      </button>
      
      {/* The Content (This is the animated part) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-10 text-gray-400 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};