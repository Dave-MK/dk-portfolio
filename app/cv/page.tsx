import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Mail, Globe, GitBranch, Link, Calendar, ExternalLink } from "lucide-react";
import { PrintButton } from "@/components/PrintButton";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum vitae of David Kilgallon — Creative Front-End Developer based in St Helens, Merseyside.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://davidkilgallon.dev/cv" },
};

const frontEndSkills = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js",
  "Tailwind CSS", "Responsive Design", "Component-based Dev", "Accessibility",
  "Git & GitHub", "Vercel", "REST APIs", "SharePoint 365", "Power Automate",
];

const designSkills = [
  "UI Layout", "Branding", "Adobe Premiere Pro", "Illustrator",
  "After Effects", "Motion Graphics", "Video Editing",
];

const professionalSkills = [
  "Problem Solving", "Attention to Detail", "Self-directed Learning",
  "Creative Thinking", "Written Communication", "Time Management",
];

const tools = [
  "VS Code", "GitHub", "Vercel", "Chrome DevTools",
  "Adobe CC", "Blender", "Canva", "Google Analytics",
  "Microsoft Office", "Google Workspace",
];

const experience = [
  {
    title: "Owner / Creative Lead",
    company: "NTICE DIGITAL",
    period: "Mar 2024 – Apr 2026",
    type: "Self-employed",
    bullets: [
      "Founded and led NTICE DIGITAL, delivering web development and digital content services.",
      "Designed and built client-facing web projects using Next.js, React, TypeScript, and Tailwind CSS.",
      "Managed brand identity, UI design, and content production for multiple clients.",
      "Delivered motion graphics, video editing, and digital media using Adobe Creative Cloud.",
      "Handled full project lifecycle: scoping, client communication, and delivery.",
    ],
  },
  {
    title: "Key Account Manager / Business Development",
    company: "Glass Futures",
    period: "2022 – 2024",
    type: "Full-time",
    bullets: [
      "Managed key accounts and built relationships with international research consortium members.",
      "Contributed to business development strategy, tender preparation, and stakeholder reporting.",
      "Produced internal communications, presentations, and data reporting.",
      "Translated complex technical research outputs into accessible commercial communications.",
    ],
  },
  {
    title: "ECM Analyst / SharePoint Developer & Administrator",
    company: "Pilkington NSG",
    period: "2015 – 2018",
    type: "Full-time",
    bullets: [
      "Developed and maintained SharePoint 2010 and SharePoint 365 environments for global teams.",
      "Built custom workflows and automations to improve document management processes.",
      "Trained users and created documentation for internal SharePoint tools.",
      "Collaborated with IT and operations to scope and deploy digital solutions.",
    ],
  },
];

const projects = [
  {
    title: "Personal Portfolio Website",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel API", "GitHub API"],
    url: "https://davidkilgallon.dev",
    description:
      "Full dark-studio portfolio with dynamic project data from Vercel and GitHub APIs, blog functionality, SEO, structured data, and PWA manifest.",
  },
  {
    title: "ReadFit",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://readfit.vercel.app",
    description:
      "A reading companion app providing AI-assisted book analysis and structured reading plans to help users engage more deeply with non-fiction.",
  },
  {
    title: "Signalibrium",
    tech: ["TypeScript", "Dashboard UI", "Product Design"],
    url: null,
    description:
      "A productivity and signal management dashboard concept designed to surface the right information at the right time and reduce cognitive load.",
  },
  {
    title: "Rune Master",
    tech: ["React", "Next.js", "TypeScript", "Game Design"],
    url: null,
    description:
      "An interactive web game exploring rune-based puzzle mechanics. Currently in active development.",
  },
];

function SkillPill({ label }: { label: string }) {
  return (
    <span className="cv-skill-pill inline-flex items-center rounded-full border border-sky-400/15 bg-sky-400/[0.07] px-2.5 py-1 text-xs text-[#9BA7B7]">
      {label}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="cv-section-label mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-sky-400">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="cv-section-title text-base font-bold tracking-tight text-[#F4F7FB] border-b border-white/[0.06] pb-3 mb-4">
      {children}
    </h2>
  );
}

export default function CVPage() {
  return (
    <>
      <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">

          {/* Download button */}
          <div className="no-print flex justify-end mb-6">
            <PrintButton />
          </div>

          {/* Header card */}
          <header className="cv-card mb-6 overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm">
            <div className="cv-gradient-bar h-[3px] w-full bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400 no-print" aria-hidden />
            <div className="p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Photo with gradient ring */}
                <div className="cv-decoration relative shrink-0 p-[2.5px] rounded-2xl bg-gradient-to-br from-sky-400 to-violet-500">
                  <div className="overflow-hidden rounded-[14px]">
                    <Image
                      src="/images/profile-pic.webp"
                      alt="David Kilgallon"
                      width={100}
                      height={100}
                      sizes="(min-width: 640px) 96px, 80px"
                      className="h-20 w-20 sm:h-24 sm:w-24 object-cover"
                    />
                  </div>
                </div>

                {/* Name + contact */}
                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F4F7FB]">
                    David Kilgallon
                  </h1>
                  <p className="mt-1 text-base font-semibold text-sky-400">
                    Creative Front-End Developer
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-3 sm:gap-x-5 gap-y-1.5 sm:gap-y-2 text-xs sm:text-sm text-[#9BA7B7]">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-3.5 shrink-0 text-sky-400/70" aria-hidden />
                      St Helens, Merseyside
                    </span>
                    <a
                      href="mailto:davidmkilgallon@gmail.com"
                      className="inline-flex items-center gap-1.5 hover:text-[#F4F7FB] transition-colors"
                    >
                      <Mail className="size-3.5 shrink-0 text-sky-400/70" aria-hidden />
                      davidmkilgallon@gmail.com
                    </a>
                    <a
                      href="https://davidkilgallon.dev"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-[#F4F7FB] transition-colors"
                    >
                      <Globe className="size-3.5 shrink-0 text-sky-400/70" aria-hidden />
                      davidkilgallon.dev
                    </a>
                    <a
                      href="https://github.com/Dave-MK"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-[#F4F7FB] transition-colors"
                    >
                      <GitBranch className="size-3.5 shrink-0 text-sky-400/70" aria-hidden />
                      github.com/Dave-MK
                    </a>
                    <a
                      href="https://linkedin.com/in/david-kilgallon/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-[#F4F7FB] transition-colors"
                    >
                      <Link className="size-3.5 shrink-0 text-sky-400/70" aria-hidden />
                      linkedin.com/in/david-kilgallon
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Profile */}
          <section className="cv-card cv-section mb-6 rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8">
            <SectionLabel>Profile</SectionLabel>
            <SectionTitle>About Me</SectionTitle>
            <p className="text-[#9BA7B7] leading-relaxed text-sm sm:text-base">
              Creative front-end developer with a background in digital media, design, and business development.
              Founder of NTICE DIGITAL. I combine strong visual instincts with practical engineering to build
              web products that are clean, fast, and genuinely useful. Experienced with modern JavaScript
              frameworks, UI design systems, and end-to-end digital delivery. Always learning — particularly
              interested in projects that make information clearer or workflows more human.
            </p>
          </section>

          {/* Two-column: sidebar (skills) + main (experience/projects) */}
          <div className="cv-print-grid grid lg:grid-cols-[5fr_8fr] gap-6">

            {/* Sidebar */}
            <aside className="cv-sidebar flex flex-col gap-6">

              <div className="cv-card cv-section rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6">
                <SectionLabel>Technical</SectionLabel>
                <SectionTitle>Front-End Skills</SectionTitle>
                <div className="flex flex-wrap gap-1.5">
                  {frontEndSkills.map((s) => <SkillPill key={s} label={s} />)}
                </div>
              </div>

              <div className="cv-card cv-section rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6">
                <SectionLabel>Creative</SectionLabel>
                <SectionTitle>Design & Digital</SectionTitle>
                <div className="flex flex-wrap gap-1.5">
                  {designSkills.map((s) => <SkillPill key={s} label={s} />)}
                </div>
              </div>

              <div className="cv-card cv-section rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6">
                <SectionLabel>Transferable</SectionLabel>
                <SectionTitle>Professional</SectionTitle>
                <div className="flex flex-wrap gap-1.5">
                  {professionalSkills.map((s) => <SkillPill key={s} label={s} />)}
                </div>
              </div>

              <div className="cv-card cv-section rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6">
                <SectionLabel>Education</SectionLabel>
                <SectionTitle>Qualifications</SectionTitle>
                <div>
                  <h3 className="text-sm font-bold text-[#F4F7FB]">Edge Hill University</h3>
                  <p className="text-xs text-[#9BA7B7] mt-1">
                    BA/BSc Business, Management &amp; Marketing
                  </p>
                  <p className="text-xs text-sky-400 mt-1">2:1 Degree &middot; 2007–2012</p>
                </div>
              </div>

              <div className="cv-card cv-section rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6">
                <SectionLabel>Continuous</SectionLabel>
                <SectionTitle>Learning</SectionTitle>
                <ul className="space-y-2 text-xs text-[#9BA7B7] leading-relaxed list-disc list-inside marker:text-sky-400/60">
                  <li>Self-directed study: HTML, CSS, JS, React, Next.js, TypeScript</li>
                  <li>IBM SkillsBuild — digital, data &amp; technology programmes</li>
                  <li>Continued learning in Python, SQL &amp; data analytics</li>
                  <li>Deploying full-stack portfolio projects via GitHub &amp; Vercel</li>
                </ul>
              </div>

              <div className="cv-card cv-section rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6">
                <SectionLabel>Tooling</SectionLabel>
                <SectionTitle>Software</SectionTitle>
                <div className="flex flex-wrap gap-1.5">
                  {tools.map((t) => <SkillPill key={t} label={t} />)}
                </div>
              </div>

            </aside>

            {/* Main */}
            <div className="cv-main flex flex-col gap-6">

              {/* Experience */}
              <div className="cv-card cv-section rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8">
                <SectionLabel>Career</SectionLabel>
                <SectionTitle>Experience</SectionTitle>
                <div className="flex flex-col gap-8">
                  {experience.map((job, idx) => (
                    <div key={job.company} className="cv-job cv-exp-card relative pl-5 border-l-2 border-sky-400/30">
                      {/* Timeline dot */}
                      <div
                        className="no-print absolute -left-[5px] top-[3px] h-2 w-2 rounded-full bg-sky-400 ring-4 ring-[#080A0F]"
                        aria-hidden
                      />
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-sm font-bold text-[#F4F7FB] leading-snug">{job.title}</h3>
                          <p className="text-xs font-semibold text-sky-400 mt-0.5">{job.company}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xs text-[#9BA7B7] inline-flex items-center gap-1">
                            <Calendar className="size-3 shrink-0" aria-hidden />
                            {job.period}
                          </p>
                          <p className="text-[10px] text-[#7B8CA0] mt-0.5">{job.type}</p>
                        </div>
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#9BA7B7] leading-relaxed list-disc list-inside marker:text-sky-400/40">
                        {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                      {idx < experience.length - 1 && (
                        <div className="mt-8 border-b border-white/[0.04]" aria-hidden />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="cv-card cv-section rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8">
                <SectionLabel>Portfolio</SectionLabel>
                <SectionTitle>Projects</SectionTitle>
                <div className="flex flex-col gap-4">
                  {projects.map((project) => (
                    <div
                      key={project.title}
                      className="cv-job rounded-xl border border-white/[0.05] bg-white/[0.02] p-4 transition-colors hover:border-sky-400/15"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className="text-sm font-bold text-[#F4F7FB]">{project.title}</h3>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            className="no-print shrink-0 inline-flex items-center gap-1 text-[10px] text-sky-400 hover:text-sky-300 transition-colors"
                          >
                            <ExternalLink className="size-3" aria-hidden />
                            Live
                          </a>
                        )}
                      </div>
                      <p className="text-xs text-[#9BA7B7] leading-relaxed mb-2.5">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((t) => <SkillPill key={t} label={t} />)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
