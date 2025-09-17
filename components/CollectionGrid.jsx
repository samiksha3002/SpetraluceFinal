// app/components/CollectionGrid.jsx
import Link from 'next/link';
import Image from 'next/image';

// This is a re-usable component for each item in the grid
const CollectionItem = ({ href, imageUrl, label }) => (
  <Link href={href} className="group text-center">
    <div className="relative w-full aspect-square overflow-hidden">
     
      <Image
        src={imageUrl}
        alt={label}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
        className="object-contain object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    </div>
    <h3 className="mt-5 text-sm font-medium 
                   text-gray-700 dark:text-gray-300
                   group-hover:text-gray-900 dark:group-hover:text-gray-100 
                   transition-colors">
      {label}
    </h3>
  </Link>
);

// This is the main component for the section
export const CollectionGrid = () => {
  // --- IMPORTANT ---
  // You will replace this placeholder data with your own.
  // Make sure your image URLs (e.g., /images/indoor.png) are correct.
  const categories = [
    { href: "/products/indoor", imageUrl: "/product1.jpg", label: "Indoor" },
    { href: "/products/outdoor", imageUrl: "/product2.jpg", label: "Downlight" },
    { href: "/products/industrial", imageUrl: "/product3.jpg", label: "Magnetic Track Channel" },
    { href: "/products/furniture", imageUrl: "/product4.jpg", label: "pendant" },
    { href: "/products/accessories", imageUrl: "/product5.jpg", label: "Magnetic System" },
    { href: "/products/body-beauty", imageUrl: "/product7.jpg", label: "Linear" },
  ];

  return (
    // We use a white background and very large padding (py-24) for that
    // clean, elegant "reveal" after the dark hero.
    <section className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest
                       text-gray-900 dark:text-gray-100 mb-12">
          Discover Our Products
        </h2>
        
     
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">
          {categories.map((category) => (
            <CollectionItem 
              key={category.label} 
              href={category.href}
              imageUrl={category.imageUrl}
              label={category.label}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};