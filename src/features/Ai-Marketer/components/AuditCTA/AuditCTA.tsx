import React from "react";
import { AuditBackdrop } from "./AuditBackdrop";
import { AuditProposition } from "./AuditProposition";
import { ConversionTerminal } from "./ConversionTerminal";

export const AuditCTA = () => (
  <section className="py-24 md:py-32 relative overflow-hidden bg-[#06080c] text-white">
    <AuditBackdrop />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-[1.1fr_0.95fr] gap-14 lg:gap-20 items-start">
        <AuditProposition />
        <ConversionTerminal />
      </div>
    </div>
  </section>
);
