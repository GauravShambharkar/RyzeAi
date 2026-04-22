"use client";

import React from "react";
import { motion } from "framer-motion";
import { aiTools, adAccounts } from "@/features/mcp/data/integrations";
import { useIntegrationsMeasure } from "@/features/mcp/hooks/useIntegrationsMeasure";
import { Tile } from "./Tile";
import { HubNode } from "./HubNode";
import { WireCanvas } from "./WireCanvas";

export const Integrations = () => {
  const { stageRef, hubRef, leftRefs, rightRefs, size, hub, paths } = useIntegrationsMeasure();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#FAF7F2]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-neutral-900 tracking-tight"
        >
          Connect any <span className="italic text-[#e35a32]">AI tool</span> with any ad account
        </motion.h2>

        <p className="mt-4 text-sm text-neutral-600 max-w-md mx-auto">
          One MCP hub, routing every request across your stack.
        </p>

        <div
          ref={stageRef}
          className="relative mt-16 mx-auto max-w-3xl grid grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-10 min-h-[320px] md:min-h-[380px]"
        >
          {size.w > 0 && <WireCanvas width={size.w} height={size.h} paths={paths} hub={hub} />}

          <div className="relative z-10 flex flex-col items-center gap-10 md:gap-14">
            {aiTools.map((l, i) => (
              <Tile
                key={l.label}
                side="left"
                innerRef={(el) => {
                  leftRefs.current[i] = el;
                }}
                {...l}
              />
            ))}
          </div>

          <HubNode hubRef={hubRef} />

          <div className="relative z-10 flex flex-col items-center gap-10 md:gap-14">
            {adAccounts.map((l, i) => (
              <Tile
                key={l.label}
                side="right"
                innerRef={(el) => {
                  rightRefs.current[i] = el;
                }}
                {...l}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-1.5">
          <span className="font-pixel text-xs uppercase tracking-[0.3em] text-[#e35a32]">MCP Hub</span>
        </div>
      </div>
    </section>
  );
};
