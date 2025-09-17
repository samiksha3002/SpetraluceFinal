// app/components/WelcomeSection.jsx
import Image from 'next/image';

export const WelcomeSection = () => {
  // Your 4 key features
  const features = [
    "MODERN LIGHTINGS",
    "INNOVATION & EXCELLENCE",
    "PREMIUM LIGHTING",
    "DOMESTIC AND COMMERCIAL"
  ];

  return (
    // We use 'bg-gray-50' for a subtle, elegant separation
    // We also use the dark mode 'dark:bg-black' to match your footer
    <section className="bg-white-50 dark:bg-black py-24 sm:py-32">
      <div className="container mx-auto px-6">
        
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 lg:gap-y-0 items-center">
          
          {/* 1. Image Column (The "unique" layout) */}
          <div className="relative w-full min-h-[400px] sm:min-h-[500px]">
            
            {/* Image 1 (Larger, in the back) */}
            <div className="absolute top-0 left-0 w-4/5 sm:w-3/4 aspect-[4/3]">
              <Image
                // --- IMPORTANT ---
                // Add your MAIN image to your /public folder and update this path
                src="/Trial4.png" 
                alt="Elegant dining room with Spetraluce lighting"
                fill
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 75vw, 40vw"
                className="object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* Image 2 (Smaller, in front, overlapping) */}
            <div className="absolute bottom-0 right-0 w-1/2 sm:w-3/5 aspect-square">
              <Image
                // --- IMPORTANT ---
                // Add your DETAIL image to your /public folder and update this path
                src="/trial1.jpg" 
                alt="Close-up of a Spetraluce light fixture"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 60vw, 30vw"
                className="object-cover rounded-lg shadow-xl 
                           border-4 border-white dark:border-black"
              />
            </div>

          </div>

          {/* 2. Text Column */}
          <div>
            {/* Elegant Serif Heading (from our layout) */}
            <h2 className="font-serif text-4xl md:text-5xl font-bold
                           text-gray-900 dark:text-gray-100">
              Welcome to Spetraluce
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              Innovation & Excellence Spetraluce is an Italian based architectural
              lighting company that designs and manufactures premium lighting
              products. Our mission is to harness modern technology and old
              world craftsmanship to produce innovative lighting solutions for
              residential, commercial and hospitality spaces..
            </p> {/* <-- THIS IS THE FIX (was </loc>) */}

            {/* Elegant 2x2 Feature Grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  {/* Elegant Checkmark Icon */}
                  <svg 
                    className="w-5 h-5 text-gray-900 dark:text-gray-100 flex-shrink-0" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2.5} 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};