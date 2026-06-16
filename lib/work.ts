export type WorkFeature = {
  title: string;
  description: string;
};

export type WorkProject = {
  slug: string;
  title: string;
  tagline: string;
  status: "Live" | "In Development" | "Archived";
  role: string;
  timeline: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  accentFrom: string;
  accentTo: string;
  overview: string;
  challenge: string;
  approach: string[];
  features: WorkFeature[];
  outcome: string;
  nextSlug?: string;
};

export const workProjects: WorkProject[] = [
  {
    slug: "readfit",
    title: "ReadFit",
    tagline: "Personalised reading comfort tool",
    status: "Live",
    role: "Solo — product design, frontend development, UX testing",
    timeline: "2025 – present",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "UX Testing"],
    liveUrl: "https://readfit.vercel.app",
    repoUrl: "https://github.com/Dave-MK/readfit",
    accentFrom: "from-sky-500",
    accentTo: "to-cyan-400",
    overview:
      "ReadFit is a web tool that helps users discover the text format that feels most comfortable for them to read. Many people have undiagnosed reading difficulties, sensory preferences, or visual processing differences that affect how well they can engage with content on screen — but most websites offer no accommodation for this.",
    challenge:
      "Most reading accessibility tools are buried in OS settings or browser extensions, and require users to already know what they need. The goal was to build something that guides users to their ideal reading format through a structured testing process — no prior knowledge required.",
    approach: [
      "Designed the experience around guided discovery rather than a settings panel. Users compare formats side by side rather than adjusting sliders.",
      "Built a component-driven architecture in Next.js to make it easy to add new format combinations without touching the core comparison logic.",
      "Focused on mobile-first layout from the start — reading accessibility tools are particularly relevant on smaller screens.",
      "Used real sample text (not Lorem Ipsum) so users experience the format in a realistic context.",
    ],
    features: [
      {
        title: "Format comparison",
        description:
          "Side-by-side comparison of different typography settings — font family, size, line height, letter spacing, and contrast.",
      },
      {
        title: "Guided flow",
        description:
          "A step-by-step process that leads users through options without overwhelming them, ending in a personalised recommendation.",
      },
      {
        title: "Zero configuration",
        description:
          "Works without accounts, sign-ups, or settings. Users get a result in under two minutes.",
      },
      {
        title: "Accessible by design",
        description:
          "WCAG-compliant contrast ratios, keyboard navigable, and screen reader tested — because a reading accessibility tool that's itself inaccessible would miss the point.",
      },
    ],
    outcome:
      "ReadFit is live and in active development. The core comparison experience works well, and the next phase focuses on adding shareable format profiles so users can take their settings with them.",
    nextSlug: "signalibrium",
  },
  {
    slug: "signalibrium",
    title: "Signalibrium",
    tagline: "AI-assisted trading intelligence concept",
    status: "Live",
    role: "Solo — product design, dashboard UI, frontend development",
    timeline: "2025 – present",
    tech: ["TypeScript", "Product Design", "Risk Logic", "Dashboard UI"],
    liveUrl: "https://signalibrium.vercel.app",
    repoUrl: "https://github.com/Dave-MK/signalibrium",
    accentFrom: "from-violet-500",
    accentTo: "to-purple-400",
    overview:
      "Signalibrium is a trading intelligence platform concept focused on reducing cognitive load for active traders. Most trading tools try to show everything — news, signals, charts, positions, P&L — simultaneously. Signalibrium is built around the opposite philosophy: surface the right signal at the right time, and get out of the way.",
    challenge:
      "Active traders are chronically over-informed and under-supported. The challenge wasn't building another dashboard that shows more data — it was designing a system that helps traders make better decisions with less noise. That required rethinking what information should be visible at each stage of a trading decision.",
    approach: [
      "Started with user research into how traders actually make decisions — not the idealised version, but the real process including emotional state, time pressure, and cognitive bias.",
      "Built the information architecture around a three-stage flow: signal discovery → risk evaluation → decision and journaling.",
      "Designed the UI to actively de-emphasise real-time price movement (which drives impulsive decisions) while emphasising risk-adjusted context.",
      "Used a dark, focused aesthetic deliberately — to reduce visual stimulation and encourage slower, more deliberate decision-making.",
    ],
    features: [
      {
        title: "Signal feed",
        description:
          "A curated, prioritised feed of trading signals with confidence scores and context — not a raw data dump.",
      },
      {
        title: "Risk analysis",
        description:
          "Automatic risk/reward calculation, position sizing tools, and portfolio exposure warnings before any trade is journaled.",
      },
      {
        title: "Trade journaling",
        description:
          "Structured journaling built into the trade flow, not bolted on afterwards. Captures the reasoning at decision time, not retrospectively.",
      },
      {
        title: "Decision support",
        description:
          "Prompts and checklists that surface relevant information at the right moment — helping traders avoid common cognitive traps.",
      },
    ],
    outcome:
      "Signalibrium is live as a UI concept and design system. The product design phase is complete. The next phase is connecting live data sources and building out the backend for signal ingestion and portfolio tracking.",
    nextSlug: "dk-portfolio",
  },
  {
    slug: "dk-portfolio",
    title: "DK Portfolio",
    tagline: "Personal developer portfolio",
    status: "Live",
    role: "Solo — design, development, content, SEO",
    timeline: "2025 – present",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "Vercel API", "GitHub API"],
    liveUrl: "https://davidkilgallon.dev",
    repoUrl: "https://github.com/Dave-MK/dk-portfolio",
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-400",
    overview:
      "This portfolio is the project I've spent the most time thinking about. The brief sounds simple — showcase the work — but a developer portfolio is also a demonstration of taste, technical ability, and the kind of problems you choose to solve. The previous version didn't reflect any of that, so I rebuilt it from scratch.",
    challenge:
      "The challenge with a portfolio is that it's simultaneously the hardest and least forgiving project you can build. Every decision is visible to exactly the people you're trying to impress. Generic is death. Overdesigned is worse. The goal was to build something that feels genuinely considered without drawing attention to itself.",
    approach: [
      "Started with a design system before writing any component code. Defined the colour tokens, type scale, spacing units, and glass panel style as CSS custom properties in globals.css.",
      "Built a dynamic data layer so the portfolio updates automatically — Vercel API for live project URLs, GitHub API for archive projects — with graceful static fallbacks when APIs are unavailable.",
      "Treated the blog as a first-class feature, not an afterthought. Markdown files in /content/blog are parsed at build time with gray-matter and marked, producing static HTML with zero JavaScript overhead.",
      "Designed the CV page to serve two audiences: a visual dark-studio presentation for human readers, and a clean single-column ATS-friendly PDF via browser print (no PDF generation library required).",
    ],
    features: [
      {
        title: "Dark studio design system",
        description:
          "A cohesive visual system built around three tokens: near-black background (#080A0F), sky-400 accent, and violet-400 secondary. Glass panels, ambient radial glows, and restrained use of colour throughout.",
      },
      {
        title: "Dynamic project data",
        description:
          "Featured project URLs are enriched at request time from the Vercel API. Archive projects are pulled from GitHub Pages repos. Static fallbacks mean the page never breaks.",
      },
      {
        title: "Blog system",
        description:
          "Markdown-based blog with frontmatter for title, description, date, and tags. Fully static — built at deploy time, zero client-side JS for the reading experience.",
      },
      {
        title: "Scroll animations",
        description:
          "Scroll-triggered fade and stagger animations using Motion (Framer Motion v12). All animations respect prefers-reduced-motion and use viewport-based triggers so they only play once.",
      },
      {
        title: "Print-optimised CV",
        description:
          "A single-page CV that looks great on screen and prints as a clean ATS-readable PDF using pure CSS print media queries — no PDF libraries, no backend.",
      },
      {
        title: "Full SEO setup",
        description:
          "robots.ts, sitemap.ts, PWA manifest, OpenGraph, Twitter Cards, and JSON-LD Person/WebSite structured data. Canonical URLs and noindex on utility pages.",
      },
    ],
    outcome:
      "The site is live at davidkilgallon.dev. Build scores 100 on Lighthouse performance, and the SEO setup is indexed correctly. Project detail pages (like this one) are the most recent addition, providing case study depth for each featured project.",
    nextSlug: "readfit",
  },
];

export function getWorkProject(slug: string): WorkProject | undefined {
  return workProjects.find((p) => p.slug === slug);
}

export function getAllWorkSlugs(): string[] {
  return workProjects.map((p) => p.slug);
}
