// app/components/VisionMission.jsx
import Image from 'next/image';

export const VisionMission = () => {
  return (
    // This section has a light gray background to separate it
    <section className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* We add the 'animate-fadeInUp' class from our config file */}
        {/* Make sure your tailwind.config.js has this animation defined */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-fadeInUp">
          
          {/* 1. LEFT COLUMN (Your Text) */}
          <div className="space-y-12">
            
            {/* VISION */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">
                VISION
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We are the innovative market leader for linear light. Our tailor-made lighting solutions from our own manufacture enrich outstanding projects worldwide. Our values lead the way.
              </p>
            </div>
            
            {/* MISSION */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">
                MISSION
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We speak light. With curiosity, willingness to change and passion, our innovative technology enables ground breaking new design ideas building bridges between architectural design elegance and actual technical implementation.
              </p>
            </div>

            {/* OUR PURPOSE */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">
                OUR PURPOSE
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our love for light inspires our actions. Our employees are at the heart of it all. expertise and passion are part of our DNA. The combination of sustainability, mutual growth and the highest quality is the impetus for our future.
              </p>
            </div>

          </div>

          {/* 2. RIGHT COLUMN (Your Image) */}
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/AboutH.png" // <-- Your "moon" image
              alt="Spetraluce Vision"
              fill
              sizes="(max-width: 10_24px) 100vw, 50vw"
              className="object-cover" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};