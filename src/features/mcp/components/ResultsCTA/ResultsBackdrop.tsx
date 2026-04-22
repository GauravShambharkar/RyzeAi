import React from "react";
import Image from "next/image";

export const ResultsBackdrop = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Image
      src="/PixelArt/Gemini_Generated_Image_o1xa64o1xa64o1xa.png"
      alt=""
      fill
      className="object-cover opacity-25"
      sizes="100vw"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#020502] via-[#020502]/70 to-[#020502]/90" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(227,90,50,0.18),transparent_55%)]" />
  </div>
);
