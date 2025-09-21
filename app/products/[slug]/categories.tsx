"use client"; 

import { useEffect, useState } from "react";
import { db } from "../../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "next/navigation";

// ... (Your interfaces are unchanged) ...
interface CategoriesProps {
  onSelectSubcategory: (subcategory: string | null) => void;
  selectedSubcategory: string | null;
}
interface Category {
  name: string;
  subcategories: string[];
}

export default function Categories({
  onSelectSubcategory,
  selectedSubcategory,
}: CategoriesProps) {
  // ... (All your Firebase logic is unchanged) ...
  const [categories, setCategories] = useState<Category[]>([]);
  const [defaultSet, setDefaultSet] = useState(false);
  const params = useParams<{ slug: string }>();
  const slug = params?.slug?.toLowerCase?.() || "";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const snapshot = await getDocs(collection(db, "categories"));
        const cats: Category[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data() as { subcategories?: string[] };
          cats.push({
            name: doc.id.toLowerCase(),
            subcategories: data.subcategories || [],
          });
        });
        setCategories(cats);
      } catch (error) { console.error("Error fetching categories:", error); }
    };
    fetchCategories();
  }, []);

  const selectedCategory = categories.find((cat) => cat.name === slug);

  useEffect(() => {
    if (selectedCategory && !defaultSet) {
      onSelectSubcategory("All");
      setDefaultSet(true);
    }
  }, [selectedCategory, defaultSet, onSelectSubcategory]);

  return (
    <div>
      {selectedCategory ? (
        <ul className="space-y-4">
          <ElegantCategoryButton
            label="All"
            isActive={selectedSubcategory === "All"}
            onClick={() => onSelectSubcategory("All")}
          />
          {selectedCategory.subcategories.map((sub) => (
            <ElegantCategoryButton
              key={sub}
              label={sub}
              isActive={selectedSubcategory === sub}
              onClick={() => onSelectSubcategory(sub)}
            />
          ))}
        </ul>
      ) : (
        <div className="space-y-6">
          <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse" />
          <div className="h-4 w-1/2 rounded bg-gray-200 animate-pulse" />
          <div className="h-4 w-2/3 rounded bg-gray-200 animate-pulse" />
        </div>
      )}
    </div>
  );
}

// --- ELEGANT BUTTON (Light Mode Only) ---
const ElegantCategoryButton = ({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) => {
  return (
    <li>
      <button
        onClick={onClick}
        // We REMOVED all 'dark:' classes
        className={`relative w-full text-left font-serif text-xl tracking-wide transition-colors pb-2
                    ${
                      isActive
                        ? "text-gray-900" // Active is black
                        : "text-gray-500 hover:text-gray-900" // Inactive is gray
                    }`}
      >
        {label}
        {isActive && (
          <span className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-gray-900" />
        )}
      </button>
    </li>
  );
};