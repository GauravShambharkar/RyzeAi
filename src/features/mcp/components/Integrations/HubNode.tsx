import React from "react";
import { Plus } from "lucide-react";
import styles from "./Integrations.module.css";

type Props = { hubRef: React.RefObject<HTMLDivElement | null> };

export const HubNode = ({ hubRef }: Props) => (
  <div className="relative flex items-center justify-center">
    <div ref={hubRef} className={`relative h-14 w-14 md:h-16 md:w-16 ${styles.hubBox}`}>
      <div className={styles.hubGlowCss} />
      <div className={styles.hubDiamond}>
        <Plus className="w-4 h-4 text-[#f9a876]" />
      </div>
    </div>
  </div>
);
