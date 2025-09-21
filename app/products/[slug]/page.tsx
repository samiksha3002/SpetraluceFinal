// app/products/[slug]/page.tsx
"use client";

import { useState } from "react";
import Categories from "./categories"; // <-- Default import
import Products from "./Products";     // <-- Default import
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { CategoryHero } from "../../../components/CategoryHero";
import { useParams } from "next/navigation";

// This map provides the dynamic data for our reusable Hero
const heroDataMap: { [key: string]: { title: string; subtitle: string; image: string } } = {
  indoor: {
    title: "Indoor",
    subtitle: "Crafted to transform interior spaces with warmth and elegance.",
    image: "/IndoorHero.png" // Your hero image
  },
  outdoor: {
    title: "Outdoor",
    subtitle: "Durable, weatherproof, and beautifully designed for any landscape.",
    image: "/OutdoorHero.png" // Your hero image
  },
  industrial: {
    title: "Industrial",
    subtitle: "High-output performance that meets high-end design.",
    image: "/IndustrialHero.png" // Your hero image
  },
};

// This is a "default" export
export default function ProductCategoryPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null); 
  const params = useParams<{ slug: string }>();
  const slug = params?.slug?.toLowerCase?.() || "";

  const heroData = heroDataMap[slug] || { title: "Products", subtitle: "Browse our collection", image: "/products-hero-bg.jpg" };

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Header />
      
      <main>
        <CategoryHero 
          title={heroData.title} 
          subtitle={heroData.subtitle}
          image={heroData.image}
        />
        
        <section className="container mx-auto py-16 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <aside className="lg:col-span-1">
              <div className="sticky top-48"> 
                <Categories
                  onSelectSubcategory={setSelectedSubcategory}
                  selectedSubcategory={selectedSubcategory}
                />
              </div>
            </aside>
            <div className="lg:col-span-3">
              <Products
                selectedSubcategory={selectedSubcategory}
                parentCategory={slug}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}