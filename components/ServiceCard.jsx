// app/components/ServiceCard.jsx
import Link from 'next/link';

export const ServiceCard = ({ Icon, title, description, link = "#" }) => {
  return (
    // The 'group' is the whole card, which is now a Link
    <Link 
      href={link} 
      className="group relative block p-8 rounded-2xl h-full
                 bg-gray-50 dark:bg-gray-900 
                 hover:shadow-2xl hover:-translate-y-1
                 transition-all duration-300"
    >
      
      {/* 1. "ENGAGING" ARROW (Top right, fades in on hover) */}
      <div className="absolute top-8 right-8 text-gray-400 dark:text-gray-600 
                      opacity-0 group-hover:opacity-100 
                      transition-all duration-300 
                      transform translate-x-2 group-hover:translate-x-0">
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>

      {/* 2. "STYLED" ICON (In a circular container) */}
      <div className="w-16 h-16 rounded-full 
                    bg-white dark:bg-black 
                    flex items-center justify-center mb-6 shadow-md">
         <Icon className="w-8 h-8 text-gray-900 dark:text-white" />
      </div>
      
      {/* 3. TEXT CONTENT */}
      <div>
        <h3 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
};