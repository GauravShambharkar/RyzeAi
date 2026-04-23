import React from "react";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroCopy } from "./HeroCopy";
import { HeroEmailForm } from "./HeroEmailForm";
import { HeroTrustRow } from "./HeroTrustRow";
import { HeroPreview } from "./HeroPreview";

export const Mcp_Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 md:pt-24 lg:pt-24 pb-12 overflow-hidden">
    <HeroBackdrop />

    <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-[44%_56%] gap-10 lg:gap-12 xl:gap-16 items-center">
      {/* LEFT — typography-dominant */}
      <div className="flex flex-col justify-center max-w-xl">
        <HeroCopy />
        <HeroEmailForm />
        <HeroTrustRow />
      </div>

      {/* RIGHT — floating preview window */}
      <div className="relative flex items-center justify-center lg:justify-end">
        <HeroPreview />
      </div>
    </div>
  </section>
);

export default Mcp_Hero;
