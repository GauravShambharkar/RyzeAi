"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import styles from "./Integrations.module.css";

type Logo = { label: string; src: string; invert?: boolean };

const AI_TOOLS: Logo[] = [
  { label: "Claude", src: "/services/claude_logo.png" },
  { label: "ChatGPT", src: "/services/ChatGPT-Logo.png", invert: true },
  { label: "Cursor", src: "/services/cursor-logo.png", invert: true },
];

const AD_ACCOUNTS: Logo[] = [
  { label: "Google Ads", src: "/services/google_ads.avif" },
  { label: "Meta Ads", src: "/services/meta.avif" },
  { label: "Google Analytics", src: "/services/google-analytics.svg" },
];

/* Prevent hydration mismatch when measurement depends on DOM */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type TileProps = Logo & {
  side: "left" | "right";
  innerRef: (el: HTMLDivElement | null) => void;
};

const Tile = ({ label, src, invert, side, innerRef }: TileProps) => (
  <div className="flex flex-col items-center gap-2.5">
    <div
      ref={innerRef}
      className="relative h-14 w-14 md:h-16 md:w-16 border border-white/10 bg-[#0b0b0b]/90 backdrop-blur-sm flex items-center justify-center p-3"
    >
      <span
        className={`${styles.socket} ${
          side === "left" ? styles.socketRight : styles.socketLeft
        }`}
      />
      <Image
        src={src}
        alt={label}
        width={64}
        height={64}
        className={`h-full w-full object-contain ${
          invert ? "invert brightness-0" : ""
        }`}
      />
    </div>
    <span className="text-[11px] md:text-xs text-white/60 text-center leading-tight">
      {label}
    </span>
  </div>
);

type Endpoint = { x: number; y: number };

function cubicPath(from: Endpoint, to: Endpoint): string {
  const midX = (from.x + to.x) / 2;
  return `M${from.x.toFixed(1)},${from.y.toFixed(1)} C${midX.toFixed(
    1
  )},${from.y.toFixed(1)} ${midX.toFixed(1)},${to.y.toFixed(
    1
  )} ${to.x.toFixed(1)},${to.y.toFixed(1)}`;
}

export const Integrations = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const leftRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [size, setSize] = useState({ w: 0, h: 0 });
  const [hub, setHub] = useState<Endpoint>({ x: 0, y: 0 });
  const [paths, setPaths] = useState<string[]>([]);

  useIsomorphicLayoutEffect(() => {
    const measure = () => {
      const stage = stageRef.current;
      const hubEl = hubRef.current;
      if (!stage || !hubEl) return;

      const stageRect = stage.getBoundingClientRect();
      setSize({ w: stageRect.width, h: stageRect.height });

      const hubRect = hubEl.getBoundingClientRect();
      const hubPoint: Endpoint = {
        x: hubRect.left + hubRect.width / 2 - stageRect.left,
        y: hubRect.top + hubRect.height / 2 - stageRect.top,
      };
      setHub(hubPoint);

      const pointsFor = (
        tiles: (HTMLDivElement | null)[],
        side: "left" | "right"
      ): Endpoint[] =>
        tiles
          .filter((t): t is HTMLDivElement => t !== null)
          .map((tile) => {
            const r = tile.getBoundingClientRect();
            return {
              x:
                side === "left"
                  ? r.right - stageRect.left
                  : r.left - stageRect.left,
              y: r.top + r.height / 2 - stageRect.top,
            };
          });

      const leftPts = pointsFor(leftRefs.current, "left");
      const rightPts = pointsFor(rightRefs.current, "right");

      const next: string[] = [
        ...leftPts.map((p) => cubicPath(p, hubPoint)),
        ...rightPts.map((p) => cubicPath(hubPoint, p)),
      ];
      setPaths(next);
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (stageRef.current) ro.observe(stageRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-white tracking-tight"
        >
          Connect any <span className="italic text-[#e35a32]">AI tool</span>{" "}
          with any ad account
        </motion.h2>

        <p className="mt-4 text-sm text-white/50 max-w-md mx-auto">
          One MCP hub, routing every request across your stack.
        </p>

        {/* Node stage */}
        <div
          ref={stageRef}
          className="relative mt-16 mx-auto max-w-3xl grid grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-10 min-h-[320px] md:min-h-[380px]"
        >
          {/* SVG overlay — paths are computed from real tile / hub positions */}
          {size.w > 0 && (
            <svg
              className={styles.canvas}
              width={size.w}
              height={size.h}
              viewBox={`0 0 ${size.w} ${size.h}`}
              aria-hidden
            >
              <defs>
                <linearGradient id="wire-gradient" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#e35a32" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#f9a876" stopOpacity="1" />
                  <stop offset="100%" stopColor="#e35a32" stopOpacity="0.95" />
                </linearGradient>
              </defs>

              {/* blurred halo */}
              {paths.map((d, i) => (
                <path key={`halo-${i}`} className={styles.wireHalo} d={d} />
              ))}

              {/* main wire */}
              {paths.map((d, i) => (
                <path key={`wire-${i}`} className={styles.wire} d={d} />
              ))}

              {/* bright core */}
              {paths.map((d, i) => (
                <path key={`core-${i}`} className={styles.wireCore} d={d} />
              ))}

              {/* travelling packets */}
              {paths.map((d, i) => (
                <path
                  key={`packet-${i}`}
                  className={`${styles.packet} ${styles[`packet-${i + 1}`]}`}
                  d={d}
                />
              ))}

              {/* sonar rings at hub */}
              <circle
                className={styles.sonar}
                cx={hub.x}
                cy={hub.y}
                r="22"
              />
              <circle
                className={`${styles.sonar} ${styles["sonar-2"]}`}
                cx={hub.x}
                cy={hub.y}
                r="22"
              />
            </svg>
          )}

          {/* Left column — AI tools */}
          <div className="relative z-10 flex flex-col items-center gap-10 md:gap-14">
            {AI_TOOLS.map((l, i) => (
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

          {/* Hub (centered in middle column) */}
          <div className="relative flex items-center justify-center">
            <div
              ref={hubRef}
              className={`relative h-14 w-14 md:h-16 md:w-16 ${styles.hubBox}`}
            >
              <div className={styles.hubGlowCss} />
              <div className={styles.hubDiamond}>
                <Plus className="w-4 h-4 text-[#f9a876]" />
              </div>
            </div>
          </div>

          {/* Right column — ad platforms */}
          <div className="relative z-10 flex flex-col items-center gap-10 md:gap-14">
            {AD_ACCOUNTS.map((l, i) => (
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

        {/* MCP hub label */}
        <div className="mt-6 flex items-center justify-center gap-1.5">
          <span className="font-pixel text-xs uppercase tracking-[0.3em] text-[#e35a32]">
            MCP Hub
          </span>
        </div>
      </div>
    </section>
  );
};
