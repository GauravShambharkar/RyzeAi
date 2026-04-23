import React from "react";
import Image from "next/image";

export const AuditBackdrop = () => (
  <div className="absolute inset-0 z-0 pointer-events-none rounded-[2.5rem] overflow-hidden">
    <Image src="/pixelArt2/openWorld.png" alt="" fill sizes="100vw" className="object-cover" />
    <div className="absolute inset-0 bg-black/25" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
    <div
      className="hidden md:block absolute inset-0 opacity-[0.18] mix-blend-overlay"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    />
    <div className="hidden md:block absolute top-1/2 right-[-10%] -translate-y-1/2 w-[700px] h-[700px] bg-emerald-400/20 rounded-full blur-[140px]" />
  </div>
);
