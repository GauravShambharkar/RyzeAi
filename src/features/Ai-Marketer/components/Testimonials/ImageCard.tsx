import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import type { Testimonial } from "@/features/Ai-Marketer/data/testimonials";

export const ImageCard = ({ text, author, title, image }: Testimonial) => (
  <div className="h-full relative overflow-hidden rounded-3xl border border-black/5 group shadow-[0_20px_60px_-20px_rgba(20,20,20,0.12)]">
    <Image
      src={image!}
      alt={author}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover scale-100 group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

    <div className="relative h-full flex flex-col justify-between p-6 md:p-7">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] font-semibold uppercase tracking-widest text-white">
          <span className="w-1 h-1 rounded-full bg-emerald-400" />
          Customer story
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-white font-display text-xl md:text-[22px] leading-[1.3] drop-shadow-md">
          &quot;{text}&quot;
        </p>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-[11px] font-semibold text-white">
            {author.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{author}</p>
            <p className="text-[11px] text-white/80 uppercase tracking-wider">{title}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
