export type ProjectStatus = "Live" | "In Development" | "Archived";

export type FeaturedProject = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  tech: string[];
  liveUrl: string;
  repoUrl?: string;
  workSlug?: string;
  accentFrom: string;
  accentTo: string;
};

export type ArchiveProject = {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "file-fettle",
    title: "File Fettle",
    tagline: "Convert and compress files in the browser",
    description:
      "File Fettle is a web app that allows users to convert and compress files directly in the browser, without the need for server-side processing.",
    status: "Live",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "WebAssembly", "ffmpeg.wasm"],
    liveUrl: "https://filefettle.pro",
    repoUrl: "https://github.com/Dave-MK/file-fettle",
    workSlug: "file-fettle",
    accentFrom: "from-orange-700",
    accentTo: "to-orange-400",
  },
  {
    id: "readfit",
    title: "ReadFit",
    tagline: "Personalised reading comfort tool",
    description:
      "A web app that helps users find a text format that feels easier to read, focus on, and follow.",
    status: "Live",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "UX Testing"],
    liveUrl: "https://readfit.vercel.app",
    repoUrl: "https://github.com/Dave-MK/readfit",
    workSlug: "readfit",
    accentFrom: "from-sky-500",
    accentTo: "to-cyan-400",
  },
  {
    id: "signalibrium",
    title: "Signalibrium",
    tagline: "AI-assisted trading intelligence concept",
    description:
      "A trading intelligence platform focused on signals, risk analysis, trade journaling, and decision support.",
    status: "Live",
    tech: ["TypeScript", "Product Design", "Risk Logic", "Dashboard UI"],
    liveUrl: "https://signalibrium.vercel.app",
    repoUrl: "https://github.com/Dave-MK/signalibrium",
    workSlug: "signalibrium",
    accentFrom: "from-violet-500",
    accentTo: "to-purple-400",
  },
  {
    id: "dk-portfolio",
    title: "DK Portfolio",
    tagline: "Personal developer portfolio",
    description:
      "My developer portfolio built with Next.js and Tailwind CSS, with automatic project discovery via Vercel and GitHub APIs.",
    status: "Live",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    liveUrl: "https://davidkilgallon.dev",
    repoUrl: "https://github.com/Dave-MK/dk-portfolio",
    workSlug: "dk-portfolio",
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-400",
  },
];

export const archiveProjects: ArchiveProject[] = [
  {
    id: "rune-master",
    title: "Rune Master",
    description: "RuneScape skill training companion and calculator.",
    status: "In Development",
    tech: ["React", "API", "Tailwind CSS"],
  },
  {
    id: "love-running",
    title: "Love Running",
    description: "A website promoting a running club based in Ireland.",
    status: "Archived",
    tech: ["HTML", "CSS"],
  },
  {
    id: "boardwalk-games",
    title: "Boardwalk Games",
    description: "A tabletop gaming community website.",
    status: "Archived",
    tech: ["HTML", "CSS"],
  },
  {
    id: "love-math",
    title: "Love Math",
    description: "A simple math app for testing numerical skills.",
    status: "Archived",
    tech: ["JavaScript"],
  },
];
