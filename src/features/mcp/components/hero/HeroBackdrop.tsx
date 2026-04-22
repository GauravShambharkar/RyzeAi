import React from "react";
import Image from "next/image";

export const HeroBackdrop = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Image src="/pixelArt2/openWorld.png" alt="" fill className="object-cover" priority />
    <div className="absolute inset-0 bg-black/25" />
    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FAF7F2] to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#FAF7F2] to-transparent" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(227,90,50,0.25),transparent_60%)]" />
  </div>
);
