import React from "react";
import { Star } from "lucide-react";
import type { Testimonial } from "@/features/Ai-Marketer/data/testimonials";
import { AuthorBlock } from "./AuthorBlock";

export const TextCard = ({ text, author, title, metric }: Testimonial) => (
  <div className="h-full flex flex-col gap-5 p-6 md:p-7 bg-neutral-950/85 backdrop-blur-xl border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60 transition-colors duration-300">
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>

    <p className="text-neutral-200 leading-relaxed font-body text-[15px] flex-1">
      &quot;{text}&quot;
    </p>

    <div className="flex items-center justify-between pt-5 border-t border-neutral-800">
      <AuthorBlock author={author} title={title} />
      {metric && (
        <span className="bg-emerald-500/10 text-emerald-400 px-2 py-1 text-[9px] font-semibold uppercase tracking-widest whitespace-nowrap">
          {metric}
        </span>
      )}
    </div>
  </div>
);
