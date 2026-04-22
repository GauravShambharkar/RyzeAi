"use client";

import React, { useState } from "react";
import { faqs } from "@/features/Ai-Marketer/data/faqs";
import { FAQHeader } from "./FAQHeader";
import { FAQItem } from "./FAQItem";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <FAQHeader />

        <div className="border-t border-neutral-900">
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
              className="text-white font-semibold hover:text-emerald-400 transition-colors underline underline-offset-4 decoration-neutral-700 hover:decoration-emerald-400"
            >
              Talk to our team &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
