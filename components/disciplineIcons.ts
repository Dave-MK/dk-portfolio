import { Code2, Video, Boxes, Camera, type LucideIcon } from "lucide-react";
import type { DisciplineSlug } from "@/lib/disciplines";

/** Maps each discipline to its Lucide icon. */
export const disciplineIcons: Record<DisciplineSlug, LucideIcon> = {
  software: Code2,
  videography: Video,
  "3d": Boxes,
  photography: Camera,
};
