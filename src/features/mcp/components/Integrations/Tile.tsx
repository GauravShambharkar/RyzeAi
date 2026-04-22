import React from "react";
import Image from "next/image";
import type { IntegrationLogo } from "@/features/mcp/data/integrations";
import styles from "./Integrations.module.css";

type Props = IntegrationLogo & {
  side: "left" | "right";
  innerRef: (el: HTMLDivElement | null) => void;
};

export const Tile = ({ label, src, invert, side, innerRef }: Props) => (
  <div className="flex flex-col items-center gap-2.5">
    <div
      ref={innerRef}
      className="relative h-14 w-14 md:h-16 md:w-16 rounded-2xl border border-black/5 bg-white shadow-[0_8px_24px_-8px_rgba(20,20,20,0.12)] flex items-center justify-center p-3"
    >
      <span
        className={`${styles.socket} ${side === "left" ? styles.socketRight : styles.socketLeft}`}
      />
      <Image
        src={src}
        alt={label}
        width={64}
        height={64}
        className={`h-full w-full object-contain ${invert ? "" : ""}`}
      />
    </div>
    <span className="text-[11px] md:text-xs text-neutral-600 text-center leading-tight">{label}</span>
  </div>
);
