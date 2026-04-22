import React from "react";
import { AuditBackdrop } from "./AuditBackdrop";
import { AuditProposition } from "./AuditProposition";
import { ConversionTerminal } from "./ConversionTerminal";

export const AuditCTA = () => (
  <section className="relative overflow-hidden mx-4 md:mx-8 lg:mx-20 my-16 rounded-[2.5rem] py-24 md:py-32">
    <AuditBackdrop />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-[1.1fr_0.95fr] gap-14 lg:gap-20 items-start">
        <AuditProposition />
        <ConversionTerminal />
      </div>
    </div>
  </section>
);
