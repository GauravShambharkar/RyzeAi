import React from "react";
import { Sparkles } from "lucide-react";
import { examplePrompts } from "@/features/seo-agent/data/examplePrompts";

type Props = { onPromptSelect: (prompt: string) => void };

export const EmptyState = ({ onPromptSelect }: Props) => (
  <div className="flex-1 flex flex-col items-center justify-center py-12">
    <div className="h-12 w-12 border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-300 mb-6">
      <Sparkles className="w-5 h-5" />
    </div>
    <h2 className="font-display text-3xl md:text-4xl text-white text-center tracking-tight">
      How can I help with your <span className="italic text-emerald-300">SEO</span>?
    </h2>
    <p className="text-sm text-neutral-400 mt-3 text-center max-w-md">
      Ask anything about rankings, keywords, site health, or content strategy.
    </p>

    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-xl">
      {examplePrompts.map((p) => (
        <button
          key={p}
          onClick={() => onPromptSelect(p)}
          className="text-left border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 text-sm text-neutral-300 px-4 py-3 transition-colors"
        >
          {p}
        </button>
      ))}
    </div>
  </div>
);
