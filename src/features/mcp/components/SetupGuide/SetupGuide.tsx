"use client";

import React, { useState } from "react";
import { setupSteps } from "@/features/mcp/data/setupSteps";
import { SetupTabs } from "./SetupTabs";
import { StepCopy } from "./StepCopy";
import { StepPreview } from "./StepPreview";
import { HelpStrip } from "./HelpStrip";

export const SetupGuide = () => {
  const [active, setActive] = useState(0);
  const step = setupSteps[active];
  const prev = () => setActive((i) => (i - 1 + setupSteps.length) % setupSteps.length);
  const next = () => setActive((i) => (i + 1) % setupSteps.length);

  return (
    <section className="relative py-24 md:py-32 bg-[#FAF7F2]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <span className="font-mono text-2xl md:text-3xl text-[#e35a32] tracking-wider">
            Setup guide:
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-neutral-900 tracking-tighter">
            Link your ads to Claude in 10 sec
          </h2>
        </div>

        <SetupTabs active={active} onSelect={setActive} />

        <div className="mt-8 rounded-3xl border border-black/5 bg-white shadow-[0_24px_60px_-20px_rgba(20,20,20,0.1)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.3fr]">
            <StepCopy
              step={step}
              active={active}
              stepCount={setupSteps.length}
              onPrev={prev}
              onNext={next}
            />
            <StepPreview step={step} active={active} />
          </div>
        </div>

        <HelpStrip />
      </div>
    </section>
  );
};
