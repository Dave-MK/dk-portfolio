import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Mail, Globe, GitBranch, Link, Calendar, ExternalLink, Youtube } from "lucide-react";
import { PrintButton } from "@/components/PrintButton";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum vitae of David Kilgallon — Front-End Developer with commercial SharePoint experience, based in Merseyside, UK.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://davidkilgallon.dev/cv" },
};

const skillGroups = [
  {
    label: "Frontend",
    category: "Front-End Development",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Development",
    category: "Dev Tooling",
    skills: ["Git", "GitHub", "REST APIs", "VS Code", "Chrome DevTools"],
  },
  {
    label: "Cloud & Backend",
    category: "Cloud & Backend",
    skills: ["Vercel", "Supabase", "Firebase", "Clerk", "Python", "SQL"],
  },
  {
    label: "Microsoft",
    category: "Microsoft Technologies",
    skills: ["SharePoint 2010/365", "Power Automate", "Power Apps"],
  },
  {
    label: "Professional",
    category: "Professional Skills",
    skills: ["Requirements Gathering", "Stakeholder Management", "Business Analysis", "Project Delivery"],
  },
  {
    label: "Creative",
    category: "Creative Tools",
    skills: ["Adobe Premiere Pro", "Adobe Illustrator", "After Effects", "Blender"],
  },
];

const experience = [
  {
    title: "Founder & Creative Technologist",
    company: "NTICE DIGITAL",
    companyUrl: "https://youtube.com/@ntice.digital",
    period: "March 2024 – Present",
    type: "Self-employed",
    summary:
      "Founded and operate a digital media and creative technology business delivering branding, content production and digital communication solutions.",
    bullets: [
      "Create digital content including video, graphics and social media campaigns",
      "Develop brand identities and visual communication strategies",
      "Build and maintain websites and digital platforms",
      "Produce motion graphics and multimedia content using Adobe Creative Suite",
      "Develop modern web applications using React, Next.js and TypeScript",
    ],
  },
  {
    title: "Key Account Manager & Business Development",
    company: "Glass Futures",
    companyUrl: null,
    period: "2022 – 2024",
    type: "Full-time",
    summary:
      "Supported business development, stakeholder engagement and membership activities within an innovation-focused organisation.",
    bullets: [
      "Managed relationships with stakeholders, partners and member organisations",
      "Supported business development and membership growth initiatives",
      "Maintained CRM records and business data",
      "Assisted reporting, analysis and engagement activities",
      "Coordinated communication between internal and external stakeholders",
    ],
  },
  {
    title: "Glass Wool Manufacturing Operator",
    company: "Saint-Gobain",
    companyUrl: null,
    period: "2018 – 2022",
    type: "Full-time",
    summary:
      "Worked the hot end and cold end of a production line, manufacturing glass wool insulation as part of a continuous process.",
    bullets: [
      "Machine maintenance and monitoring live production data and trends",
      "Maintaining the smooth running of the production process",
    ],
  },
  {
    title: "ECM Analyst & SharePoint Developer",
    company: "Pilkington NSG",
    companyUrl: null,
    period: "2015 – 2018",
    type: "Full-time",
    summary:
      "Designed, developed and supported SharePoint solutions to improve business processes and workflow efficiency.",
    bullets: [
      "Delivered SharePoint solutions from requirements gathering through deployment",
      "Developed SharePoint workflows, forms and automated business processes",
      "Built SharePoint 365 and Power Automate solutions",
      "Provided application support and issue resolution within SLA targets",
      "Worked directly with stakeholders to deliver technical solutions",
    ],
  },
];

const projects = [
  {
    title: "FileFettle",
    tech: ["Next.js", "React", "TypeScript", "Supabase"],
    url: "https://filefettle.pro",
    githubUrl: "https://github.com/dave-mk/file-fettle",
    description:
      "Document organisation and workflow platform designed to help users manage, categorise and automate interactions with digital files.",
    bullets: [
      "Built using React, Next.js and TypeScript",
      "Designed responsive document management interfaces",
      "Developed reusable component architecture",
      "Integrated cloud-based services and backend tooling",
      "Deployed using GitHub and Vercel",
    ],
  },
  {
    title: "ReadFit",
    tech: ["Next.js", "React", "TypeScript"],
    url: "https://readfit.vercel.app",
    githubUrl: "https://github.com/dave-mk/readfit",
    description:
      "Personalised reading experience platform designed to help users identify text layouts and formatting preferences that improve reading comfort and focus.",
    bullets: [
      "Built interactive user assessment workflows",
      "Developed responsive interfaces across desktop and mobile",
      "Applied accessibility and readability principles",
      "Structured for future user accounts and personalised recommendations",
      "Deployed using GitHub and Vercel",
    ],
  },
  {
    title: "Developer Portfolio Platform",
    tech: ["Next.js", "React", "TypeScript"],
    url: "https://davidkilgallon.dev",
    githubUrl: "https://github.com/dave-mk/dk-portfolio",
    description:
      "Portfolio platform showcasing development projects, technical skills and creative work.",
    bullets: [
      "Integrated GitHub project data for dynamic content",
      "Built reusable components and responsive layouts",
      "Implemented modern deployment workflows",
      "Focused on performance, accessibility and maintainable code",
    ],
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
                    Front-End Developer &nbsp;|&nbsp; Former SharePoint Developer
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-3 sm:gap-x-5 gap-y-1.5 sm:gap-y-2 text-xs sm:text-sm text-[#9BA7B7]">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-3.5 shrink-0 text-sky-400/70" aria-hidden />
                      Merseyside, UK
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
                      github.com/dave-mk
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
            <SectionTitle>Professional Summary</SectionTitle>
            <div className="space-y-3 text-[#9BA7B7] leading-relaxed text-sm sm:text-base">
              <p>
                Front-End Developer with commercial experience delivering SharePoint-based business
                solutions, workflow automation and internal applications within enterprise environments.
                Combines technical problem-solving with experience across software development,
                digital media, stakeholder engagement and business systems.
              </p>
              <p>
                Builds modern web applications using React, Next.js, TypeScript and Tailwind CSS,
                with a focus on usability, maintainability and user-centred design.
              </p>
              <p>
                Seeking a Front-End Developer or Junior Software Developer role where I can contribute
                technical, creative and business-focused skills while continuing to grow as a software
                engineer.
              </p>
            </div>
          </section>

          {/* Two-column: sidebar (skills) + main (experience/projects) */}
          <div className="cv-print-grid grid lg:grid-cols-[5fr_8fr] gap-6">

            {/* Sidebar */}
            <aside className="cv-sidebar flex flex-col gap-6">

              {/* Skills by category */}
              <div className="cv-card cv-section rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6">
                <SectionLabel>Technical</SectionLabel>
                <SectionTitle>Key Skills</SectionTitle>
                <div className="flex flex-col gap-4">
                  {skillGroups.map((group) => (
                    <div key={group.label}>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-sky-400/70 mb-1.5">
                        {group.category}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((s) => <SkillPill key={s} label={s} />)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="cv-card cv-section rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6">
                <SectionLabel>Education</SectionLabel>
                <SectionTitle>Qualifications</SectionTitle>
                <div>
                  <h3 className="text-sm font-bold text-[#F4F7FB]">Edge Hill University</h3>
                  <p className="text-xs text-[#9BA7B7] mt-1">
                    BA/BSc (Hons) Business Management
                  </p>
                  <p className="text-xs text-sky-400 mt-1">Grade: 2:1</p>
                </div>
              </div>

            </aside>

            {/* Main */}
            <div className="cv-main flex flex-col gap-6">

              {/* Experience */}
              <div className="cv-card cv-section rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8">
                <SectionLabel>Career</SectionLabel>
                <SectionTitle>Employment History</SectionTitle>
                <div className="flex flex-col gap-8">
                  {experience.map((job, idx) => (
                    <div key={job.company} className="cv-job cv-exp-card relative pl-5 border-l-2 border-sky-400/30">
                      {/* Timeline dot */}
                      <div
                        className="no-print absolute -left-[5px] top-[3px] h-2 w-2 rounded-full bg-sky-400 ring-4 ring-[#080A0F]"
                        aria-hidden
                      />
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-sm font-bold text-[#F4F7FB] leading-snug">{job.title}</h3>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <p className="text-xs font-semibold text-sky-400">{job.company}</p>
                            {job.companyUrl && (
                              <a
                                href={job.companyUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="no-print inline-flex items-center gap-0.5 text-[10px] text-[#7B8CA0] hover:text-sky-400 transition-colors"
                              >
                                <Youtube className="size-3" aria-hidden />
                                youtube
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xs text-[#9BA7B7] inline-flex items-center gap-1">
                            <Calendar className="size-3 shrink-0" aria-hidden />
                            {job.period}
                          </p>
                          <p className="text-[10px] text-[#7B8CA0] mt-0.5">{job.type}</p>
                        </div>
                      </div>
                      <p className="text-xs text-[#7B8CA0] leading-relaxed mb-2 italic">{job.summary}</p>
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
                <SectionTitle>Products &amp; Development Projects</SectionTitle>
                <div className="flex flex-col gap-4">
                  {projects.map((project) => (
                    <div
                      key={project.title}
                      className="cv-job rounded-xl border border-white/[0.05] bg-white/[0.02] p-4 transition-colors hover:border-sky-400/15"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div>
                          <h3 className="text-sm font-bold text-[#F4F7FB]">{project.title}</h3>
                          <div className="flex flex-wrap gap-x-2 mt-0.5">
                            {project.tech.map((t) => (
                              <span key={t} className="text-[10px] text-sky-400/80">{t}</span>
                            ))}
                          </div>
                        </div>
                        <div className="no-print flex items-center gap-2 shrink-0">
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-[10px] text-sky-400 hover:text-sky-300 transition-colors"
                            >
                              <ExternalLink className="size-3" aria-hidden />
                              Live
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-[10px] text-[#7B8CA0] hover:text-[#F4F7FB] transition-colors"
                            >
                              <GitBranch className="size-3" aria-hidden />
                              GitHub
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-[#9BA7B7] leading-relaxed mb-2">{project.description}</p>
                      <ul className="space-y-1 text-xs text-[#7B8CA0] leading-relaxed list-disc list-inside marker:text-sky-400/30">
                        {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
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
