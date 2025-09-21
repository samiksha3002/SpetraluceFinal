"use client"; // <-- Must be on Line 1

import { useEffect, useState } from "react";
import { db } from "../../../lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";

// --- TypeScript Interfaces ---
interface Product {
  id: string;
  category: string; 
  parent: string;
  image?: string;
}
interface ProductsProps {
  selectedSubcategory: string | null;
  parentCategory: string;
}

export default function Products({ selectedSubcategory, parentCategory }: ProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; 

  const normalizedParent = parentCategory.charAt(0).toUpperCase() + parentCategory.slice(1).toLowerCase();

  // --- Your Firebase logic is 100% unchanged ---
  useEffect(() => {
    if (!selectedSubcategory || !parentCategory) return;
    const fetchProducts = async () => {
      const productsRef = collection(db, "products");
      let snapshot;
      if (selectedSubcategory === "All") {
        const q = query(productsRef, where("parent", "==", normalizedParent));
        snapshot = await getDocs(q);
      } else {
        const q = query(
          productsRef,
          where("parent", "==", normalizedParent),
          where("category", "==", selectedSubcategory)
        );
        snapshot = await getDocs(q);
      }
      const prods: Product[] = [];
      snapshot.forEach((doc) => {
        prods.push({ id: doc.id, ...doc.data() } as Product);
      });
      setProducts(prods);
      setCurrentPage(1);
    };
    fetchProducts();
  }, [selectedSubcategory, parentCategory, normalizedParent]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  // --- This is the "Elegant" JSX ---
  return (
    <div>
      {products.length === 0 && selectedSubcategory && (
        <p className="text-gray-500 dark:text-gray-400 italic">No products found for this category.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {currentProducts.map((prod) => (
          <ProductCard key={prod.id} prod={prod} />
        ))}
      </div>

      {totalPages > 1 && (
        <PaginationControls 
          currentPage={currentPage} 
          totalPages={totalPages} 
          setCurrentPage={setCurrentPage} 
        />
      )}
    </div>
  );
}


// --- "CLEAN CATALOG" PRODUCT CARD (Light/Dark Mode) ---
const ProductCard = ({ prod }: { prod: Product }) => {
  return (
    // === THIS IS THE FIX ===
    // The link now points to '/products/item/...' to match your new folder name
    <Link href={`/products/item/${prod.id}`} className="group block">
      
      {/* 1. IMAGE CONTAINER */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
        {prod.image && prod.image.startsWith('http') ? (
          <img 
            src={prod.image}
            alt={prod.id}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        ) : (
          // Elegant placeholder
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-300 dark:text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>
        )}
      </div>
      
      {/* 2. TEXT CONTENT (Always visible) */}
      <div className="mt-4 text-left">
        <p className="font-sans text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 capitalize">
          {prod.category}
        </p>
        <h3 className="mt-2 text-xl font-serif font-bold text-gray-900 dark:text-white truncate
                       group-hover:text-spetra-orange-600 dark:group-hover:text-spetra-orange-400 transition-colors">
          {prod.id} 
        </h3>
      </div>
    </Link>
  );
};

// Pagination (Redesigned for Light/Dark mode)
const PaginationControls = ({ currentPage, totalPages, setCurrentPage }: { currentPage: number, totalPages: number, setCurrentPage: (page: number | ((prev: number) => number)) => void }) => {
  return (
    <div className="flex justify-center items-center mt-16 gap-4">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
        className={`px-5 py-2 rounded-lg font-semibold transition text-sm
          ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          }`}
      >
        Previous
      </button>

      <span className="text-gray-500 dark:text-gray-400 font-medium text-sm">
        Page {currentPage} of {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className={`px-5 py-2 rounded-lg font-semibold transition text-sm
          ${
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          }`}
      >
        Next
      </button>
    </div>
  );
};