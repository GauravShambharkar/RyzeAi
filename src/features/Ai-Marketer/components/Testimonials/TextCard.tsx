import React from "react";
import { Star } from "lucide-react";
import type { Testimonial } from "@/features/Ai-Marketer/data/testimonials";
import { AuthorBlock } from "./AuthorBlock";

export const TextCard = ({ text, author, title, metric }: Testimonial) => (
  <div className="h-full flex flex-col gap-5 p-6 md:p-7 rounded-3xl bg-white border border-black/5 hover:border-black/10 hover:shadow-[0_20px_60px_-20px_rgba(20,20,20,0.12)] hover:-translate-y-0.5 transition-all duration-300">
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>

    <p className="text-neutral-800 leading-relaxed font-body text-[15px] flex-1">
      &quot;{text}&quot;
    </p>

    <div className="flex items-center justify-between pt-5 border-t border-black/5">
      <AuthorBlock author={author} title={title} />
      {metric && (
        <span className="rounded-full bg-emerald-500/10 text-emerald-700 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest whitespace-nowrap">
          {metric}
        </span>
      )}
    </div>
  </div>
);
