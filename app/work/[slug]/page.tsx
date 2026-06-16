import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { getWorkProject, getAllWorkSlugs } from "@/lib/work";
import { Footer } from "@/components/Footer";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.overview.slice(0, 160),
    alternates: { canonical: `https://davidkilgallon.dev/work/${slug}` },
    openGraph: {
      title: `${project.title} — David Kilgallon`,
      description: project.tagline,
      type: "article",
    },
  };
}

const statusStyles = {
  Live: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
  "In Development": "border-sky-400/25 bg-sky-400/10 text-sky-300",
  Archived: "border-slate-500/25 bg-slate-500/10 text-slate-400",
};

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const project = getWorkProject(slug);
  if (!project) notFound();

  const nextProject = project.nextSlug ? getWorkProject(project.nextSlug) : null;

  return (
    <>
      <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">

          {/* Back */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm text-[#64748B] hover:text-[#9BA7B7] transition-colors mb-10"
          >
            <ArrowLeft className="size-3.5" />
            Back to work
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className={`h-[3px] w-16 rounded-full bg-gradient-to-r ${project.accentFrom} ${project.accentTo} mb-6`} />

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyles[project.status]}`}>
                {project.status}
              </span>
              <span className="text-xs text-[#64748B]">{project.timeline}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F4F7FB] mb-3">
              {project.title}
            </h1>
            <p className="text-lg text-[#9BA7B7]">{project.tagline}</p>

            {/* Meta row */}
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#64748B] mb-1">Role</p>
                <p className="text-[#D8E0EA] text-xs leading-relaxed">{project.role}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#64748B] mb-1">Stack</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-sky-400/15 bg-sky-400/[0.07] px-2.5 py-0.5 text-xs text-sky-300/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links */}
            {(project.liveUrl || project.repoUrl) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]"
                  >
                    <ExternalLink className="size-3.5" />
                    View Live
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-[#F4F7FB] transition-all hover:bg-white/10"
                  >
                    View Code
                  </a>
                )}
              </div>
            )}
          </header>

          {/* Overview */}
          <section className="mb-10">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-4">Overview</h2>
            <p className="text-[#9BA7B7] leading-relaxed text-sm sm:text-base">{project.overview}</p>
          </section>

          <div className="border-t border-white/[0.06] mb-10" />

          {/* Challenge */}
          <section className="mb-10">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-4">The challenge</h2>
            <p className="text-[#9BA7B7] leading-relaxed text-sm sm:text-base">{project.challenge}</p>
          </section>

          <div className="border-t border-white/[0.06] mb-10" />

          {/* Approach */}
          <section className="mb-10">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-6">Approach</h2>
            <ol className="flex flex-col gap-5">
              {project.approach.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-xs font-mono font-semibold text-[#64748B]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[#9BA7B7] text-sm leading-relaxed">{item}</p>
                </li>
              ))}
            </ol>
          </section>

          <div className="border-t border-white/[0.06] mb-10" />

          {/* Features */}
          <section className="mb-10">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-6">Key features</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5"
                >
                  <h3 className="text-sm font-semibold text-[#F4F7FB] mb-2">{feature.title}</h3>
                  <p className="text-xs text-[#9BA7B7] leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-white/[0.06] mb-10" />

          {/* Outcome */}
          <section className="mb-14">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-4">Outcome</h2>
            <p className="text-[#9BA7B7] leading-relaxed text-sm sm:text-base">{project.outcome}</p>
          </section>

          {/* Next project */}
          {nextProject && (
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#64748B] uppercase tracking-widest mb-1">Next project</p>
                <p className="text-sm font-semibold text-[#F4F7FB]">{nextProject.title}</p>
                <p className="text-xs text-[#9BA7B7]">{nextProject.tagline}</p>
              </div>
              <Link
                href={`/work/${nextProject.slug}`}
                className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs font-semibold text-sky-400 transition-all hover:bg-sky-400/20"
              >
                View <ArrowRight className="size-3.5" />
              </Link>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
