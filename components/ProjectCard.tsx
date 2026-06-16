import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import type { ProjectStatus } from "@/lib/projects";

export type ProjectCardProps = {
  title: string;
  tagline?: string;
  description: string;
  status: ProjectStatus;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  workSlug?: string;
  featured?: boolean;
  accentFrom?: string;
  accentTo?: string;
};

const statusStyles: Record<ProjectStatus, string> = {
  Live: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
  "In Development": "border-sky-400/25 bg-sky-400/10 text-sky-300",
  Archived: "border-slate-500/25 bg-slate-500/10 text-slate-400",
};

export function ProjectCard({
  title,
  tagline,
  description,
  status,
  tech,
  liveUrl,
  repoUrl,
  workSlug,
  featured = false,
  accentFrom = "from-sky-500",
  accentTo = "to-violet-500",
}: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/25 hover:bg-white/[0.055] hover:shadow-[0_8px_30px_rgba(56,189,248,0.07)]">
      {featured && (
        <div className={`h-[3px] w-full bg-gradient-to-r ${accentFrom} ${accentTo} opacity-70`} />
      )}

      <div className="flex flex-1 flex-col p-6">
        {/* Title + badge */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-[#F4F7FB] leading-snug">{title}</h3>
            {tagline && (
              <p className="mt-0.5 text-xs text-[#9BA7B7]">{tagline}</p>
            )}
          </div>
          <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyles[status]}`}>
            {status}
          </span>
        </div>

        <p className="mb-4 text-sm leading-6 text-[#9BA7B7] flex-1">{description}</p>

        {/* Tech pills */}
        {tech.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-sky-400/15 bg-sky-400/[0.07] px-2.5 py-0.5 text-xs text-sky-300/80"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        {(liveUrl || repoUrl || workSlug) && (
          <div className="flex flex-wrap gap-4 border-t border-white/[0.07] pt-4 mt-auto">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${title} live site`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 transition-colors hover:text-sky-300"
              >
                <ExternalLink className="size-3.5" />
                View Live
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${title} on GitHub`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#9BA7B7] transition-colors hover:text-[#F4F7FB]"
              >
                <GitHubIcon className="size-3.5" />
                View Code
              </a>
            )}
            {workSlug && (
              <Link
                href={`/work/${workSlug}`}
                className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-[#64748B] transition-colors hover:text-[#9BA7B7]"
              >
                Case study →
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
