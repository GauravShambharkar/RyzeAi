import React from "react";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroCopy } from "./HeroCopy";
import { HeroEmailForm } from "./HeroEmailForm";
import { HeroTrustRow } from "./HeroTrustRow";
import { HeroPreview } from "./HeroPreview";

export const Mcp_Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 md:pt-24 lg:pt-24 pb-12 overflow-hidden">
    <HeroBackdrop />

    <div className="relative z-10  w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-[0.85fr_1.5fr] gap-8 lg:gap-10 items-center">
      <div>
        <HeroCopy />
        <HeroEmailForm />
        <HeroTrustRow />
      </div>

      <HeroPreview />
    </div>
  </section>
);

export default Mcp_Hero;
