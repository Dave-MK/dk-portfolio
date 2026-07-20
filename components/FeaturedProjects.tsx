import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeUp } from "@/components/FadeUp";
import { AnimatedProjectGrid } from "@/components/AnimatedProjectGrid";
import { featuredProjects, archiveProjects } from "@/lib/projects";
import type { FeaturedProject, ProjectStatus } from "@/lib/projects";
import type { PortfolioProject } from "@/lib/types";

type Props = {
  liveApps: PortfolioProject[];
  autoLiveApps: PortfolioProject[];
  devApps: PortfolioProject[];
};

const AUTO_ACCENTS: Array<{ from: string; to: string }> = [
  { from: "from-rose-600",   to: "to-pink-400" },
  { from: "from-amber-600",  to: "to-yellow-400" },
  { from: "from-indigo-600", to: "to-blue-400" },
  { from: "from-lime-600",   to: "to-green-400" },
  { from: "from-fuchsia-600",to: "to-violet-400" },
  { from: "from-cyan-600",   to: "to-sky-400" },
];

function formatName(name: string): string {
  return name.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function enrichLiveUrl(id: string, liveApps: PortfolioProject[], fallback: string): string {
  const match = liveApps.find(
    (app) => app.name.toLowerCase().replace(/[-_\s]/g, "") === id.replace(/-/g, "")
  );
  return match?.homepageUrl ?? fallback;
}

export function FeaturedProjects({ liveApps, autoLiveApps, devApps }: Props) {
  const enrichedFeatured = featuredProjects.map((p) => ({
    ...p,
    liveUrl: enrichLiveUrl(p.id, liveApps, p.liveUrl),
    workSlug: p.workSlug,
    featured: true,
  }));

  // Auto-discovered Vercel projects rendered as live cards
  const autoFeatured: (FeaturedProject & { featured: true })[] = autoLiveApps.map((app, idx) => {
    const accent = AUTO_ACCENTS[idx % AUTO_ACCENTS.length];
    const tagline = app.description ?? "Live project";
    return {
      id: app.id,
      title: formatName(app.name),
      tagline,
      description: app.description ?? "Deployed via Vercel.",
      status: "Live" as ProjectStatus,
      tech: app.language ? [app.language] : [],
      liveUrl: app.homepageUrl ?? "#",
      repoUrl: app.repositoryUrl ?? undefined,
      accentFrom: accent.from,
      accentTo: accent.to,
      featured: true,
    };
  });

  const allLiveCards = [...enrichedFeatured, ...autoFeatured];

  const archiveDisplay =
    devApps.length > 0
      ? devApps.map((app) => ({
          id: app.id,
          title: formatName(app.name),
          description: app.description ?? "Work in progress.",
          status: "In Development" as ProjectStatus,
          tech: app.language ? [app.language] : [],
          liveUrl: app.homepageUrl,
          repoUrl: app.repositoryUrl ?? undefined,
        }))
      : archiveProjects;

  return (
    <section id="work" className="pt-10 pb-24 px-4 sm:px-6 scroll-mt-20">
      <div className="mx-auto max-w-310">
        {/* Heading row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <FadeUp>
            <SectionHeading
              label="Selected Work"
              heading="Live products, learning projects, and practical builds."
            />
          </FadeUp>
          <FadeUp delay={0.1}>
            <a
              href="#archive"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors shrink-0 pb-0.5"
            >
              View all projects <ArrowRight className="size-4" />
            </a>
          </FadeUp>
        </div>

        {/* Featured cards */}
        <AnimatedProjectGrid
          projects={allLiveCards}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        />

        {/* Archive section */}
        <div id="archive" className="mt-20 scroll-mt-20">
          <FadeUp>
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#7B8CA0] mb-1.5">
                Earlier builds
              </p>
              <h3 className="text-xl font-semibold text-[#D8E0EA]">Development &amp; Archive</h3>
              <p className="mt-1.5 text-sm text-[#9BA7B7]">
                Learning projects, earlier builds, and work in progress.
              </p>
            </div>
          </FadeUp>
          <AnimatedProjectGrid
            projects={archiveDisplay}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          />
        </div>
      </div>
    </section>
  );
}
