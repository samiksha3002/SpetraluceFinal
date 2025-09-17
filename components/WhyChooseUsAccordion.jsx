// app/components/WhyChooseUsAccordion.jsx
"use client";

import { useState } from 'react';

// This is the icon for the 'plus' / 'minus'
const PlusMinusIcon = ({ isOpen }) => (
  <svg className={`w-6 h-6 text-gray-900 dark:text-gray-100 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

// This is the individual accordion item
export const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      {/* The Clickable Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left"
      >
        <h3 className="text-sm font-medium uppercase tracking-wider text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <PlusMinusIcon isOpen={isOpen} />
      </button>
      
      {/* The Content (slides open/closed) */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="pb-5 pr-10 text-gray-600 dark:text-gray-400">
          {children}
        </div>
      </div>
    </div>
  );
};