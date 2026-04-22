"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Settings, Plug, ShieldCheck, Play, Check } from "lucide-react";

type Step = {
  label: string;
  title: string;
  icon: React.ReactNode;
  bullets: string[];
  previewTitle: string;
  previewHighlight: string;
};

const STEPS: Step[] = [
  {
    label: "Step 1",
    title: "Go to Settings",
    icon: <Settings className="w-3.5 h-3.5" />,
    bullets: [
      "Open claude.ai in your browser",
      "Click your profile icon",
      "Select Settings",
    ],
    previewTitle: "Claude · Profile menu",
    previewHighlight: "Settings",
  },
  {
    label: "Step 2",
    title: "Open Connectors",
    icon: <Plug className="w-3.5 h-3.5" />,
    bullets: [
      "Go to Integrations",
      "Click Browse connectors",
      "Search for Ryze MCP",
    ],
    previewTitle: "Settings · Integrations",
    previewHighlight: "Ryze MCP",
  },
  {
    label: "Step 3",
    title: "Authorize access",
    icon: <ShieldCheck className="w-3.5 h-3.5" />,
    bullets: [
      "Sign in with Google Ads / Meta / GA4",
      "Review requested permissions",
      "Approve the connection",
    ],
    previewTitle: "Consent screen",
    previewHighlight: "Grant access",
  },
  {
    label: "Step 4",
    title: "Pick accounts",
    icon: <Check className="w-3.5 h-3.5" />,
    bullets: [
      "Select the ad accounts to sync",
      "Choose default attribution windows",
      "Save",
    ],
    previewTitle: "Account picker",
    previewHighlight: "3 selected",
  },
  {
    label: "Step 5",
    title: "Start chatting",
    icon: <Play className="w-3.5 h-3.5" />,
    bullets: [
      `Ask "How's last week doing?"`,
      "Schedule recurring reports",
      "Let Claude take it from here",
    ],
    previewTitle: "Claude · Chat",
    previewHighlight: "Opus 4.6",
  },
];

export const SetupGuide = () => {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <section className="relative py-24 md:py-32 bg-[#060606]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20">
        {/* Title */}
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <span className="font-mono text-2xl md:text-3xl text-[#e35a32] tracking-wider">
            Setup guide:
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
            Link your ads to Claude in 10 sec
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex gap-2 flex-wrap">
          {STEPS.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs transition-colors border ${
                i === active
                  ? "bg-[#e35a32] text-white border-[#e35a32]"
                  : "bg-white/[0.03] text-white/60 border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              <span
                className={`h-4 w-4 flex items-center justify-center ${
                  i === active ? "bg-white/20" : "bg-white/5"
                }`}
              >
                {s.icon}
              </span>
              {s.label}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="mt-8 border border-white/10 bg-white/[0.02] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.3fr]">
            {/* Left — copy */}
            <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-white/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#e35a32]">
                    {step.label}
                  </div>
                  <h3 className="mt-2 font-display text-4xl md:text-5xl text-white leading-[1.05]">
                    {step.title}
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {step.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm text-white/70"
                      >
                        <span className="mt-2 h-1.5 w-1.5 bg-[#e35a32]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex items-center gap-3">
                <button
                  onClick={() =>
                    setActive((i) => (i - 1 + STEPS.length) % STEPS.length)
                  }
                  className="h-9 w-9 border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-white/20 flex items-center justify-center transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                </button>
                <button
                  onClick={() => setActive((i) => (i + 1) % STEPS.length)}
                  className="h-9 w-9 bg-[#e35a32] text-white hover:bg-[#f06a3f] flex items-center justify-center transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right — preview mock */}
            <div className="relative p-6 md:p-10 bg-[radial-gradient(ellipse_at_top_right,rgba(227,90,50,0.08),transparent_70%)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="border border-white/10 bg-[#0b0b0b] shadow-2xl shadow-black/50 overflow-hidden"
                >
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
                    <span className="h-2 w-2 bg-white/15" />
                    <span className="h-2 w-2 bg-white/15" />
                    <span className="h-2 w-2 bg-white/15" />
                    <span className="ml-2 text-[10px] text-white/40 font-mono">
                      {step.previewTitle}
                    </span>
                  </div>

                  <div className="p-6 min-h-[260px] flex items-center justify-center">
                    <div className="w-full max-w-sm border border-white/10 bg-black/40 p-4">
                      <div className="flex items-center gap-2 pb-3 border-b border-white/5 text-[11px] text-white/60">
                        <div className="h-5 w-5 bg-[#e35a32]/30 border border-[#e35a32]/60" />
                        <span>irina.buht12@gmail.com</span>
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="px-3 py-2 text-[12px] bg-[#e35a32]/15 border border-[#e35a32]/50 text-white">
                          {step.previewHighlight}
                        </div>
                        {["Language", "Get help", "View all plans", "Log out"].map(
                          (m) => (
                            <div
                              key={m}
                              className="px-3 py-2 text-[12px] text-white/50"
                            >
                              {m}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Help strip */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-white/50">
          <span>Need help?</span>
          <a href="mailto:hello@get-ryze.ai" className="text-[#e35a32] hover:underline">
            hello@get-ryze.ai
          </a>
          <span className="text-white/30">/</span>
          <span>Text/WhatsApp</span>
          <a href="tel:+16314805598" className="text-[#e35a32] hover:underline">
            +1 631 480 55 98
          </a>
        </div>
      </div>
    </section>
  );
};
