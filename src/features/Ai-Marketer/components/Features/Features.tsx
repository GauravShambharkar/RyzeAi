import React from "react";
import { featureCategories } from "@/features/Ai-Marketer/data/features.categories";
import { FeaturesHeader } from "./FeaturesHeader";
import { CategoryCard } from "./CategoryCard";

export const Features = () => (
  <section className="py-24 md:py-32 bg-[#FAF7F2]">
    <div className="max-w-7xl mx-auto px-6">
      <FeaturesHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {featureCategories.map((category, i) => (
          <CategoryCard key={category.id} category={category} index={i} />
        ))}
      </div>
    </div>
  </section>
);
