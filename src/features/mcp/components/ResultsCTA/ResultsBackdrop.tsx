import React from "react";
import Image from "next/image";

export const ResultsBackdrop = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Image
      src="/pixelArt2/GreenROck.png"
      alt=""
      fill
      className="object-cover opacity-40"
      sizes="100vw"
    />
    <div className="absolute inset-0 bg-[#FAF7F2]/60" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(227,90,50,0.18),transparent_55%)]" />
  </div>
);
