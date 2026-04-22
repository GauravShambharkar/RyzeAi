import React from "react";
import { stackCards } from "@/features/Ai-Marketer/data/featureStack.cards";
import { StackHeader } from "./StackHeader";
import { StackCard } from "./StackCard";
import { EnterpriseBlock } from "./EnterpriseBlock";

export const FeatureStack = () => (
  <section className="py-24 bg-black">
    <div className="max-w-7xl mx-auto px-6">
      <StackHeader />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-neutral-800 border border-neutral-800 mb-32">
        {stackCards.map((card, i) => (
          <StackCard key={card.id} card={card} index={i} />
        ))}
      </div>

      <EnterpriseBlock />
    </div>
  </section>
);
