"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left group"
      >
        <span className={`text-xl font-medium transition-colors ${isOpen ? 'text-spetra-orange-400' : 'text-white group-hover:text-spetra-orange-500'}`}>
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className={`w-6 h-6 flex-shrink-0 transition-colors ${isOpen ? 'text-spetra-orange-400' : 'text-neutral-500 group-hover:text-spetra-orange-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 text-neutral-400">
              {children}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
