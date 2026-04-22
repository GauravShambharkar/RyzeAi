"use client";

import React, { useState } from "react";
import { faqs } from "@/features/Ai-Marketer/data/faqs";
import { FAQHeader } from "./FAQHeader";
import { FAQItem } from "./FAQItem";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <FAQHeader />

        <div className="rounded-3xl overflow-hidden bg-white border border-black/5 shadow-[0_12px_40px_-16px_rgba(20,20,20,0.08)]">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-500 text-sm font-body">
            Still have questions?{" "}
            <a
              href="#"
              className="text-neutral-900 font-semibold hover:text-emerald-600 transition-colors underline underline-offset-4 decoration-neutral-300 hover:decoration-emerald-600"
            >
              Talk to our team &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
