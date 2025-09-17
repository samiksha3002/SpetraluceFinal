// app/components/CategorySection.jsx
import Image from 'next/image';
import Link from 'next/link';

export const CategorySection = ({ id, title, description, imageUrl, layoutDirection, productsLink }) => {
  
  // These are the two columns, Image and Text
  const ImageColumn = () => (
    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );

  const TextColumn = () => (
    <div className="flex flex-col justify-center">
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
        {description}
      </p>
      <div className="mt-10">
        <Link
          href={productsLink}
          className="inline-block 
                     bg-gray-900 text-white 
                     dark:bg-white dark:text-gray-900
                     px-8 py-3 text-sm font-medium uppercase tracking-wider 
                     hover:bg-gray-700 dark:hover:bg-gray-200 
                     transition-colors"
        >
          Shop All {title}
        </Link>
      </div>
    </div>
  );

  return (
    // This section has an 'id' that our hero links will scroll to
    <section id={id} className="bg-white dark:bg-gray-900 py-24 sm:py-32 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {/* This is the logic that flips the layout */}
          {layoutDirection === 'right' ? (
            <>
              <TextColumn />
              <ImageColumn />
            </>
          ) : (
            <>
              <ImageColumn />
              <TextColumn />
            </>
          )}
        </div>
      </div>
    </section>
  );
};