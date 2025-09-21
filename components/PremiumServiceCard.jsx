// app/components/PremiumServiceCard.jsx

"use client"; // <-- ADD THIS LINE

import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

// The 'Icon' prop will be one of the Heroicons passed from the page
export const PremiumServiceCard = ({ Icon, title, description }) => {
  return (
    // The card: A semi-transparent dark background with backdrop blur
    // It's a "group" so we can style child elements on hover
    <div className="
      group relative 
      bg-gray-800/50 backdrop-blur-sm
      border border-gray-700/50
      p-8 rounded-3xl
      transition-all duration-300
      hover:border-spetra-orange-500/50
      hover:shadow-2xl hover:shadow-spetra-orange-900/20
      hover:-translate-y-2
    ">
      
      {/* Icon: Large, orange gradient, with a soft glow */}
      <div className="
        w-16 h-16 
        bg-gradient-to-br from-spetra-orange-500 to-spetra-orange-600
        rounded-2xl 
        flex items-center justify-center 
        shadow-lg shadow-spetra-orange-900/30
        mb-8
      ">
        {/* This line (30) will now work because 'Icon' is a valid component */}
        <Icon className="w-8 h-8 text-white" />
      </div>

      {/* Title: Using the elegant serif font */}
      <h3 className="
        font-serif text-2xl font-bold text-white mb-4
      ">
        {title}
      </h3>

      {/* Description: Using the readable sans font */}
      <p className="
        font-sans text-base text-gray-300
      ">
        {description}
      </p>

      {/* Decorative Corner Element */}
      <div className="
        absolute top-8 right-8
        w-12 h-12 
        bg-gray-700/30
        rounded-full 
        flex items-center justify-center
        text-spetra-orange-300
        opacity-0 
        -translate-x-4
        transition-all duration-300
        group-hover:opacity-100
        group-hover:translate-x-0
      ">
        <ArrowUpRightIcon className="w-6 h-6" />
      </div>
    </div>
  );
};