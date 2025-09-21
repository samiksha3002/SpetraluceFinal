// This is the file that contains the entire product detail page.
// The code is fully updated with new design and layout optimizations.

"use client";

import { useEffect, useState } from "react";
import { db } from "../../../../lib/firebase"; // Make sure this path is correct
import { doc, getDoc } from "firebase/firestore";
import { Download } from "lucide-react";
import { Header } from "../../../../components/Header";
import { Footer } from "../../../../components/Footer";
import { useParams } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';

// --- YOUR DATA INTERFACE (UNCHANGED) ---
interface Product {
  id: string;
  name: string;
  category: string;
  parent?: string;
  shortDesc?: string;
  image?: string;
  images?: { src: string; alt: string }[];
  generalData?: Record<string, string>;
  constructionData?: Record<string, string>;
  electricalData?: Record<string, string>;
  options?: Record<string, string>;
  accessories?: string[];
  datasheet?: string;
}

// --- START OF ELEGANT SUB-COMPONENTS ---
// The new premium Image Gallery
const ProductImageGallery = ({ mainImage, galleryImages = [] }: { mainImage?: string, galleryImages?: { src: string, alt: string }[] }) => {
  const allImages = [
    { src: mainImage || '/placeholder.jpg', alt: 'Main product view' },
    ...galleryImages
  ].filter(img => img.src); // Filter out any empty images

  const [activeImage, setActiveImage] = useState(allImages[0]);

  useEffect(() => {
    setActiveImage(allImages[0]);
  }, [allImages[0].src]);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="aspect-square relative rounded-xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800">
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-contain"
          key={activeImage.src}
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-4">
        {allImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(image)}
            className={`aspect-square relative rounded-lg overflow-hidden transition
                        ${activeImage.src === image.src
                          ? 'ring-2 ring-offset-2 ring-gray-900 dark:ring-white'
                          : 'opacity-70 hover:opacity-100'}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="20vw"
              className="object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

// The new "sticky" Product Info block
const ProductInfo = ({ product }: { product: Product }) => {
  return (
    <div className="lg:sticky lg:top-48 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide capitalize">
        <Link href="/products" className="hover:text-gray-900 dark:hover:text-white transition-colors">Products</Link>
        {product.parent && (
          <>
            <span className="mx-2">/</span>
            <Link href={`/products/${product.parent.toLowerCase()}`} className="hover:text-gray-900 dark:hover:text-white transition-colors">
              {product.parent}
            </Link>
          </>
        )}
        <span className="mx-2">/</span>
        <span className="text-gray-800 dark:text-gray-200">{product.category}</span>
      </nav>

      {/* Title */}
      <h1 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
        {product.name}
      </h1>

      {/* Short Description */}
      {product.shortDesc && (
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {product.shortDesc}
        </p>
      )}

      {/* You can add Price or an "Add to Cart" button here */}
    </div>
  );
};

// The new elegant Tab system
const ProductDetailsTabs = ({ product, fileLabel }: { product: Product, fileLabel: string }) => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="mt-24">
      {/* Elegant Tab Headers */}
      <div className="flex justify-center space-x-12 border-b border-gray-200 dark:border-gray-700">
        <TabButton
          label="Description"
          id="description"
          activeTab={activeTab}
          onClick={setActiveTab}
        />
        <TabButton
          label="Downloads"
          id="downloads"
          activeTab={activeTab}
          onClick={setActiveTab}
        />
      </div>

      {/* Tab Content */}
      <div className="mt-12">
        {activeTab === 'description' && (
          <section className="animate-fadeIn space-y-8">
            <ElegantDataTable title="General Data" data={product.generalData} />
            <ElegantDataTable title="Construction Data" data={product.constructionData} />
            <ElegantDataTable title="Electrical Data" data={product.electricalData} />
            <ElegantDataTable title="Options" data={product.options} />
            <AccessoriesList accessories={product.accessories} />
          </section>
        )}

        {activeTab === 'downloads' && (
          <section className="animate-fadeIn relative flex flex-col items-center justify-center py-16 rounded-2xl overflow-hidden">
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 800 800">
              <circle cx="400" cy="400" r="300" fill="none" stroke="url(#grad)" strokeWidth="2" />
              <circle cx="400" cy="400" r="200" fill="none" stroke="url(#grad)" strokeWidth="2" />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#facc15" />
                </linearGradient>
              </defs>
            </svg>
            <div className="relative z-10 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Download Product Datasheet</h2>
              <a
                href={product.datasheet || "#"}
                download={!!product.datasheet}
                className="group inline-flex items-center gap-3 px-8 py-4
                             bg-gradient-to-r from-spetra-orange-500 to-spetra-orange-600
                             text-white font-bold text-lg rounded-xl shadow-lg
                             hover:from-spetra-orange-600 hover:to-spetra-orange-700
                             transition-all duration-300"
              >
                <Download className="w-6 h-6 transition-transform group-hover:-translate-y-0.5" />
                {fileLabel}
              </a>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

// The new elegant Tab Button
const TabButton = ({ label, id, activeTab, onClick }: { label: string, id: string, activeTab: string, onClick: (id: string) => void }) => {
  const isActive = activeTab === id;
  return (
    <button
      onClick={() => onClick(id)}
      className={`relative text-xl font-serif tracking-wide transition-colors pb-4
                 ${isActive
                   ? 'text-gray-900 dark:text-white'
                   : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-[-1px] left-0 w-full h-0.5 bg-gray-900 dark:bg-white"></span>
      )}
    </button>
  );
};

// The new elegant Data Table
const ElegantDataTable = ({ title, data }: { title: string, data?: Record<string, string> }) => {
  if (!data) return null;
  const entries = Object.entries(data);
  if (entries.length === 0) return null;

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5">
        {title}
      </h3>
      <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        {entries.map(([key, value], index) => (
          <div
            key={key}
            className={`flex flex-col sm:flex-row justify-between sm:items-center p-5
                        ${index < entries.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''}`}
          >
            <span className="font-medium text-gray-700 dark:text-gray-300 capitalize">{key.replace(/_/g, ' ')}</span>
            <span className="text-gray-900 dark:text-white font-light text-left sm:text-right mt-1 sm:mt-0">{value || "/"}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// The new elegant Accessories List
const AccessoriesList = ({ accessories }: { accessories?: string[] }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5">Accessories</h3>
      <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 font-light">
          {Array.isArray(accessories) && accessories.length > 0 ? (
            accessories.map((acc: string, idx: number) => (
              <li key={idx}>{acc || "/"}</li>
            ))
          ) : (
            <li>No accessories listed.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

// === MAIN PAGE COMPONENT ===
export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      const docRef = doc(db, "products", id);
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const data = snap.data() as Product;
        if (!data.images || data.images.length === 0) {
          data.images = [{ src: data.image || '/placeholder.jpg', alt: data.name || 'Product Image' }];
        }
        setProduct({ id: snap.id, ...data });
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="bg-white dark:bg-black min-h-screen text-gray-900 dark:text-white p-6 pt-48 flex items-center justify-center">
        <p>Loading Product...</p>
      </div>
    );
  }

  const fileLabel =
    product.datasheet?.split("/").pop() ||
    `${(product.name || "product").replace(/\s+/g, "").toUpperCase()}.PDF`;

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Header />

      <main className="pt-48">
        {/* Main 2-Column Product Layout */}
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16">

            {/* 1. LEFT COLUMN: Premium Image Gallery (size decreased) */}
            <div className="lg:col-span-5">
              <ProductImageGallery
                mainImage={product.image}
                galleryImages={product.images}
              />
            </div>

            {/* 2. RIGHT COLUMN: Premium Product Info (now in a box) */}
            <div className="lg:col-span-7 mt-12 lg:mt-0">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>

        {/* --- TABS SECTION (Description & Downloads) --- */}
        <div className="container mx-auto px-6 max-w-3xl pb-24 mt-24">
          <ProductDetailsTabs product={product} fileLabel={fileLabel} />
        </div>
      </main>

      <Footer />
    </div>
  );
}