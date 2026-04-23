import React from "react";
import { ArrowRight } from "lucide-react";
import { examplePrompts } from "@/features/seo-agent/data/examplePrompts";

type Props = { onPromptSelect: (prompt: string) => void };

export const EmptyState = ({ onPromptSelect }: Props) => (
  <div className="flex-1 flex flex-col items-center justify-center py-12 px-2">
    <h2 className="font-display text-2xl md:text-3xl text-neutral-900 text-center tracking-tighter">
      How can I help with your <span className="italic text-emerald-700">SEO</span>?
    </h2>
    <p className="text-sm text-neutral-600 mt-2 text-center max-w-md leading-6 tracking-tight">
      Ask anything about rankings, keywords, site health, or content strategy.
    </p>

    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-xl">
      {examplePrompts.map((p) => (
        <button
          key={p}
          onClick={() => onPromptSelect(p)}
          className="group flex items-center justify-between text-left rounded-2xl border border-black/5 bg-white hover:border-emerald-500/30 hover:shadow-[0_12px_32px_-12px_rgba(20,20,20,0.1)] hover:-translate-y-0.5 text-sm text-neutral-700 px-4 py-3 transition-all"
        >
          <span>{p}</span>
          <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
        </button>
      ))}
    </div>
  </div>
);
