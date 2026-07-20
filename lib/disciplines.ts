export type DisciplineSlug = "software" | "videography" | "3d" | "photography";

export type Discipline = {
  slug: DisciplineSlug;
  href: string;
  /** Full label, e.g. "Videography" */
  label: string;
  /** Short label for the switcher, e.g. "3D" */
  short: string;
  /** Small kicker shown above the title */
  eyebrow: string;
  /** Hero heading */
  title: string;
  /** One-line summary used on the hub cards */
  blurb: string;
  /** Longer intro used on the discipline hero */
  description: string;
  /** Tailwind gradient stops used for accent bars / fills */
  accentFrom: string;
  accentTo: string;
  /** Solid accent text colour class */
  accentText: string;
};

export const disciplines: Discipline[] = [
  {
    slug: "software",
    href: "/software",
    label: "Software",
    short: "Software",
    eyebrow: "Software",
    title: "Software & Web Development",
    blurb: "Web apps, tools and interfaces built with React, Next.js and TypeScript.",
    description:
      "Building responsive web applications, workflow tools and user-focused digital experiences with React, Next.js and TypeScript.",
    accentFrom: "from-sky-500",
    accentTo: "to-violet-500",
    accentText: "text-sky-400",
  },
  {
    slug: "videography",
    href: "/videography",
    label: "Videography",
    short: "Videography",
    eyebrow: "Videography",
    title: "Videography & Editing",
    blurb: "Films, edits and motion work — from brand pieces to social content.",
    description:
      "Filming and post-production across brand films, event coverage, promos and social content. A place for showreels, edits and video projects.",
    accentFrom: "from-rose-500",
    accentTo: "to-orange-400",
    accentText: "text-rose-400",
  },
  {
    slug: "3d",
    href: "/3d",
    label: "3D",
    short: "3D",
    eyebrow: "3D Art",
    title: "3D Art & Motion",
    blurb: "Models, renders and animations — a gallery of 3D visuals and motion.",
    description:
      "Modelling, texturing, lighting and animation. A combined gallery of rendered stills and animated pieces, from product visuals to concept work.",
    accentFrom: "from-violet-500",
    accentTo: "to-fuchsia-400",
    accentText: "text-violet-400",
  },
  {
    slug: "photography",
    href: "/photography",
    label: "Photography",
    short: "Photography",
    eyebrow: "Photography",
    title: "Photography",
    blurb: "A photo gallery — portraits, landscapes, street and more.",
    description:
      "A gallery of photographic work spanning portraits, landscapes, street, architecture and detail studies.",
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-400",
    accentText: "text-emerald-400",
  },
];

export function getDiscipline(slug: DisciplineSlug): Discipline {
  const found = disciplines.find((d) => d.slug === slug);
  if (!found) throw new Error(`Unknown discipline: ${slug}`);
  return found;
}

/* ─── Media ─────────────────────────────────────────────────────
   Real content sourced from youtube.com/@ntice.digital and
   instagram.com/ntice.digital. `aspect` drives the tile shape.
   Items with neither `youtubeId` nor `src` render as placeholders. */

export type MediaAspect = "video" | "square" | "portrait" | "landscape";
export type MediaKind = "video" | "photo" | "model";

export type MediaItem = {
  id: string;
  title: string;
  caption: string;
  aspect?: MediaAspect;
  /** YouTube video ID — renders a click-to-play embed with a local thumbnail at /videos/<id>.jpg */
  youtubeId?: string;
  /** Local image path under /public */
  src?: string;
};

export const videographyItems: MediaItem[] = [
  {
    id: "after-cloud",
    title: "After Cloud ft. The Vision CIC",
    caption: "Brand story · 6:04",
    aspect: "video",
    youtubeId: "MIEnf5Jqu7Q",
  },
  {
    id: "hfest-2024",
    title: "HFEST 2024 Coverage",
    caption: "Event coverage · 3:02",
    aspect: "video",
    youtubeId: "HqHT_hoONjc",
  },
  {
    id: "let-the-future-see-you",
    title: "Let the Future See You",
    caption: "Promo · 1:30",
    aspect: "video",
    youtubeId: "Hmon9jnzGk0",
  },
  {
    id: "natures-resolve",
    title: "Natures Resolve — Woodland Walk",
    caption: "Aerial & handheld · 2:55",
    aspect: "video",
    youtubeId: "SmogMBwYTmQ",
  },
];

export const threeDVideoItems: MediaItem[] = [
  {
    id: "showreel-2026",
    title: "Junior 3D Artist Showreel 2026",
    caption: "Showreel · 1:12",
    aspect: "video",
    youtubeId: "63P9Qkh_Qxg",
  },
  {
    id: "it-watched-us",
    title: "It Watched Us Long Enough",
    caption: "Cinematic short · 0:19",
    aspect: "video",
    youtubeId: "Jmnl7stJAnI",
  },
];

export const threeDImageItems: MediaItem[] = [
  {
    id: "bottle-render",
    title: "Bottle Render",
    caption: "Blender · Cycles",
    aspect: "square",
    src: "/3d/bottle-render.webp",
  },
  {
    id: "isometric-living-room",
    title: "Isometric Living Room",
    caption: "Interior study",
    aspect: "square",
    src: "/3d/isometric-living-room.webp",
  },
  {
    id: "neon-logo-still",
    title: "NTICE Neon Logo",
    caption: "Motion logo still",
    aspect: "square",
    src: "/3d/neon-logo-still.webp",
  },
];

export const photographyItems: MediaItem[] = [
  {
    id: "rugby-haydock-warriors",
    title: "Haydock Warriors U15s",
    caption: "Sports · Rugby league",
    aspect: "portrait",
    src: "/photography/rugby-haydock-warriors.jpg",
  },
  {
    id: "curiosity-in-action",
    title: "Curiosity in Action",
    caption: "Candid",
    aspect: "square",
    src: "/photography/curiosity-in-action.jpg",
  },
  {
    id: "hfest-crowd",
    title: "HFEST 2024",
    caption: "Event",
    aspect: "square",
    src: "/photography/hfest-crowd.jpg",
  },
  {
    id: "hfest-interviews",
    title: "Interviews & Media",
    caption: "HFEST 2024",
    aspect: "landscape",
    src: "/photography/hfest-interviews.jpg",
  },
  {
    id: "hfest-family-fun",
    title: "Family Fun Day",
    caption: "HFEST 2024",
    aspect: "square",
    src: "/photography/hfest-family-fun.webp",
  },
  {
    id: "hfest-fun-day",
    title: "Community Day",
    caption: "HFEST 2024",
    aspect: "portrait",
    src: "/photography/hfest-fun-day.webp",
  },
];
