// app/components/CategoryCard.jsx
import Image from 'next/image';

export const CategoryCard = ({ category, setActiveCategory }) => {
  return (
    <button 
      onClick={() => setActiveCategory(category.id)}
      className="group relative block w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg" // Added shadow for depth
    >
      {/* 1. BACKGROUND IMAGE (Zooms *out* on hover) */}
      <Image
        src={category.cardImage}
        alt={category.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-center w-full h-full 
                   transition-transform duration-500 ease-in-out 
                   group-hover:scale-95" // <-- Image scales down slightly
      />
      
      {/* 2. OVERLAY FOR TEXT CONTENT */}
      {/* This darkens slightly on hover, and the text itself gets a blurred background */}
      <div className="absolute inset-0 z-10 
                      flex flex-col items-center justify-center p-6 sm:p-8 text-center">
        
        {/* --- BLURRED BACKGROUND (Appears on hover) --- */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm 
                        opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 ease-in-out" />

        {/* --- WRITTEN CONTENT (Fades in on hover) --- */}
        <div className="relative z-20 // Ensures text is above the blur
                        opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 ease-in-out">
          
          <h3 className="text-3xl font-serif font-bold text-white">
            {category.title}
          </h3>
          <p className="mt-2 text-sm text-white/90">
            {category.shortDescription}
          </p>

          <span className="mt-4 inline-block px-5 py-2 border border-white/50 text-white text-xs 
                           font-medium uppercase tracking-widest rounded-full 
                           group-hover:bg-white/10 transition-colors duration-200">
            View Category
          </span>
        </div>
      </div>
    </button>
  );
};