"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, Star, CheckCircle2 } from "lucide-react";

const faqs = [
  {
    question: "Is Ryze an agency?",
    answer: "No, Ryze is an autonomous AI platform. We provide the agents that do the work of an agency—buying ads, optimizing SEO, and building websites—but at a fraction of the cost and 10x the speed."
  },
  {
    question: "Do I need to be a marketing pro to use it?",
    answer: "Not at all. Ryze is designed to be fully autonomous. You set your goals and budget, and our agents handle the technical execution. The chat interface lets you interact with your agents just like you would with a human team."
  },
  {
    question: "What platforms do you support?",
    answer: "We support major advertising platforms including Google Ads, Meta (Facebook/Instagram), TikTok, and Microsoft Ads, along with full SEO automation for Google Search."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most users see efficiency improvements within the first 72 hours as our agents begin pruning wasted spend. SEO results typically follow within 30-90 days depending on your industry competition."
  },
  {
    question: "Can I use it alongside my existing team?",
    answer: "Yes! Many of our clients use Ryze to augment their internal teams, handling the repetitive optimization tasks so their human talent can focus on high-level strategy and creative direction."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-black">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">Frequently Asked Questions</h2>
          <p className="text-neutral-400 font-body">Everything you need to know about Ryze's autonomous growth platform.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-950">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-neutral-900 transition-colors"
              >
                <span className="font-display font-semibold text-white">{faq.question}</span>
                {openIndex === i ? <Minus size={18} className="text-neutral-400" /> : <Plus size={18} className="text-neutral-400" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-2 text-neutral-300 font-body leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FinalStats = () => {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden border-t border-neutral-900">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-40" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl md:text-7xl font-display mb-4 text-accent">$250M+</div>
            <p className="text-neutral-500 uppercase tracking-widest text-xs font-bold">Ad Spend Managed</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="text-5xl md:text-7xl font-display mb-4 text-accent">2,000+</div>
            <p className="text-neutral-500 uppercase tracking-widest text-xs font-bold">Scale-ups & Agencies</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
               <Star className="w-10 h-10 fill-accent text-accent" />
               <div className="text-5xl md:text-7xl font-display text-white">4.8/5</div>
            </div>
            <p className="text-neutral-500 uppercase tracking-widest text-xs font-bold">Trustpilot Rating</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const BottomCTA = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden border-t border-neutral-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 to-transparent opacity-60" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-5xl md:text-7xl font-display text-white leading-tight">
            Stop losing customers to your <span className="italic">competitors</span>
          </h2>

          <div className="flex flex-col items-center gap-8">
            <button className="bg-white text-black rounded-full px-12 py-6 text-lg font-bold font-display uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3">
              Run growth audit
              <ArrowRight size={24} />
            </button>
            
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {[
                "No credit card required",
                "Full SEO teardown",
                "Ad leakage report"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/80 font-body text-sm">
                  <CheckCircle2 size={16} className="text-white" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
