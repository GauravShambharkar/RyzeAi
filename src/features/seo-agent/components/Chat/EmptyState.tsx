import React from "react";
import { ArrowRight } from "lucide-react";
import { examplePrompts } from "@/features/seo-agent/data/examplePrompts";

type Props = { onPromptSelect: (prompt: string) => void };

export const EmptyState = ({ onPromptSelect }: Props) => (
  <div className="flex-1 flex flex-col items-center justify-center py-12 px-2">
    <h2 className="font-display text-2xl md:text-3xl text-white text-center tracking-tight">
      How can I help with your <span className="italic text-emerald-300">SEO</span>?
    </h2>
    <p className="text-sm text-neutral-400 mt-2 text-center max-w-md">
      Ask anything about rankings, keywords, site health, or content strategy.
    </p>

    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-xl">
      {examplePrompts.map((p) => (
        <button
          key={p}
          onClick={() => onPromptSelect(p)}
          className="group flex items-center justify-between text-left rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 text-sm text-neutral-300 px-4 py-3 transition-colors"
        >
          <span>{p}</span>
          <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
        </button>
      ))}
    </div>
  </div>
);
