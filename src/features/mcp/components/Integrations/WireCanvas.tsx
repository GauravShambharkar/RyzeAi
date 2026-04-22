import React from "react";
import styles from "./Integrations.module.css";

type Props = {
  width: number;
  height: number;
  paths: string[];
  hub: { x: number; y: number };
};

export const WireCanvas = ({ width, height, paths, hub }: Props) => (
  <svg
    className={styles.canvas}
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    aria-hidden
  >
    <defs>
      <linearGradient id="wire-gradient" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#e35a32" stopOpacity="0.95" />
        <stop offset="50%" stopColor="#f9a876" stopOpacity="1" />
        <stop offset="100%" stopColor="#e35a32" stopOpacity="0.95" />
      </linearGradient>
    </defs>

    {paths.map((d, i) => (
      <path key={`halo-${i}`} className={styles.wireHalo} d={d} />
    ))}
    {paths.map((d, i) => (
      <path key={`wire-${i}`} className={styles.wire} d={d} />
    ))}
    {paths.map((d, i) => (
      <path key={`core-${i}`} className={styles.wireCore} d={d} />
    ))}
    {paths.map((d, i) => (
      <path
        key={`packet-${i}`}
        className={`${styles.packet} ${styles[`packet-${i + 1}`]}`}
        d={d}
      />
    ))}

    <circle className={styles.sonar} cx={hub.x} cy={hub.y} r="22" />
    <circle className={`${styles.sonar} ${styles["sonar-2"]}`} cx={hub.x} cy={hub.y} r="22" />
  </svg>
);
