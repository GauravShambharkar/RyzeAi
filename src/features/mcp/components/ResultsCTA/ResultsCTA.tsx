import React from "react";
import { ResultsBackdrop } from "./ResultsBackdrop";
import { LiveResults } from "./LiveResults";
import { FinalCTA } from "./FinalCTA";

export const ResultsCTA = () => (
  <section className="relative py-16 md:py-20 overflow-hidden">
    <ResultsBackdrop />

    <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-5">
        <LiveResults />
        <FinalCTA />
      </div>
    </div>
  </section>
);
