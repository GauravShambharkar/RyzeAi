import React from "react";
import Image from "next/image";

export const HeroBackdrop = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Image src="/PixelArt/brokenPillers.png" alt="" fill className="object-cover opacity-80" priority />
    <div className="absolute inset-0 bg-gradient-to-b from-[#020502] via-[#020502]/60 to-[#020502]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(227,90,50,0.18),transparent_60%)]" />
  </div>
);
