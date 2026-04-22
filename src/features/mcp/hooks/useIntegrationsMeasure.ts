"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Endpoint = { x: number; y: number };

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function cubicPath(from: Endpoint, to: Endpoint): string {
  const midX = (from.x + to.x) / 2;
  return `M${from.x.toFixed(1)},${from.y.toFixed(1)} C${midX.toFixed(1)},${from.y.toFixed(1)} ${midX.toFixed(1)},${to.y.toFixed(1)} ${to.x.toFixed(1)},${to.y.toFixed(1)}`;
}

/**
 * Measures the positions of left/right tiles relative to a hub node and
 * returns SVG cubic-bezier path strings connecting each tile to the hub.
 * Re-measures on resize.
 */
export const useIntegrationsMeasure = () => {
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

      const pointsFor = (tiles: (HTMLDivElement | null)[], side: "left" | "right"): Endpoint[] =>
        tiles
          .filter((t): t is HTMLDivElement => t !== null)
          .map((tile) => {
            const r = tile.getBoundingClientRect();
            return {
              x: side === "left" ? r.right - stageRect.left : r.left - stageRect.left,
              y: r.top + r.height / 2 - stageRect.top,
            };
          });

      const leftPts = pointsFor(leftRefs.current, "left");
      const rightPts = pointsFor(rightRefs.current, "right");

      setPaths([
        ...leftPts.map((p) => cubicPath(p, hubPoint)),
        ...rightPts.map((p) => cubicPath(hubPoint, p)),
      ]);
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

  return { stageRef, hubRef, leftRefs, rightRefs, size, hub, paths };
};
