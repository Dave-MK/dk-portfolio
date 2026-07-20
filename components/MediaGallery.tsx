"use client";

import { motion } from "motion/react";
import { MediaCard } from "@/components/MediaCard";
import type { MediaItem, MediaKind } from "@/lib/disciplines";

type Props = {
  items: MediaItem[];
  kind: MediaKind;
  accentFrom: string;
  accentTo: string;
  className?: string;
};

const defaultGrid = "grid gap-4 sm:grid-cols-2 lg:grid-cols-3";

/** Staggered grid of placeholder media tiles. */
export function MediaGallery({ items, kind, accentFrom, accentTo, className }: Props) {
  return (
    <div className={className ?? defaultGrid}>
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <MediaCard item={item} kind={kind} accentFrom={accentFrom} accentTo={accentTo} />
        </motion.div>
      ))}
    </div>
  );
}
