"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare, Layers, Zap, ShieldCheck, type LucideIcon } from "lucide-react";
import { TRIO_COL_SPAN, type TrioCardData, type CardIcon, type PreviewKey } from "@/features/mcp/data/featureTrio.cards";
import { AskPreview } from "./AskPreview";
import { SafetyPreview } from "./SafetyPreview";

const iconMap: Record<CardIcon, LucideIcon> = { MessageSquare, Layers, Zap, ShieldCheck };
const previewMap: Record<PreviewKey, React.ReactNode> = {
  ask: <AskPreview />,
  safety: <SafetyPreview />,
};

type Props = { card: TrioCardData; index: number };

export const TrioCard = ({ card, index }: Props) => {
  const Icon = iconMap[card.iconName];
  const isWide = card.colSpan === 4;
  const preview = card.previewKey ? previewMap[card.previewKey] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-colors p-7 ${TRIO_COL_SPAN[card.colSpan]}`}
    >
      <div className={`h-full ${isWide ? "grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6" : "flex flex-col"}`}>
        <div className="flex flex-col">
          <div className="flex items-start justify-between">
            <span className="font-display text-5xl text-white/10 leading-none">{card.num}</span>
            <div className="h-8 w-8 border border-white/10 bg-white/5 flex items-center justify-center text-white/70">
              <Icon className="w-4 h-4" />
            </div>
          </div>

          <h3
            className={`mt-6 text-white font-medium ${
              isWide ? "font-display text-2xl md:text-3xl leading-[1.1] tracking-tight" : "text-lg leading-snug"
            }`}
          >
            {card.title}
          </h3>

          <ul className="mt-4 space-y-2.5">
            {card.bullets.map((b) => (
              <li key={b.text} className="flex items-start gap-2.5 text-sm text-white/60 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0" style={{ backgroundColor: b.dot }} />
                <span>{b.text}</span>
              </li>
            ))}
          </ul>

          {card.badges && (
            <div className="mt-auto pt-6 grid grid-cols-2 gap-1.5">
              {card.badges.map((b) => (
                <span
                  key={b.label}
                  title={b.label}
                  className="h-10 border border-white/10 bg-black/40 flex items-center justify-center p-2"
                >
                  <Image src={b.src} alt={b.label} width={40} height={40} className="h-full w-full object-contain" />
                </span>
              ))}
            </div>
          )}
        </div>

        {isWide && preview && (
          <div className="relative border-l border-white/5 pl-6 -my-1">{preview}</div>
        )}
      </div>
    </motion.div>
  );
};
