import Link from "next/link";
import { ArrowRight, Mail, Download } from "lucide-react";
import { ProfileConsole } from "@/components/ProfileConsole";
import { FadeUp } from "@/components/FadeUp";

type HeroProps = {
  liveCount: number;
  projectCount: number;
};

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "UI Design",
  "Motion",
  "Product Thinking",
];

export function Hero({ liveCount, projectCount }: HeroProps) {
  return (
    <section className="relative pt-28 pb-16 px-4 sm:px-6 min-h-[calc(100vh-72px)] flex items-center">
      <div className="mx-auto w-full max-w-260">
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-12 items-center">
          {/* Left */}
          <FadeUp className="flex flex-col gap-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-1.5 text-xs font-medium text-sky-400 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              Open to opportunities
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] text-[#F4F7FB]">
              Creative Front-End Developer Building{" "}
              <span className="bg-linear-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                Modern Digital
              </span>{" "}
              products.
            </h1>

            <p className="text-[#9BA7B7] text-base sm:text-lg leading-relaxed max-w-full sm:max-w-xl">
              Former SharePoint Developer with experience across enterprise systems, 
              digital media and product design. Building responsive web applications, 
              workflow tools and user-focused digital experiences with React, Next.js 
              and TypeScript.
            </p>

            {/* Skill ticker */}
            <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-0 gap-y-1.5 sm:gap-y-1">
              {skills.map((skill, i) => (
                <span key={skill} className="text-sm text-[#9BA7B7]">
                  {skill}
                  {i < skills.length - 1 && (
                    <span className="hidden sm:inline mx-2 text-sky-400/40">·</span>
                  )}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 mt-1">
              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-sky-400 hover:shadow-[0_0_24px_rgba(56,189,248,0.35)]"
              >
                View My Work <ArrowRight className="size-4" />
              </Link>
              <a
                href="mailto:ntice.digital@gmail.com?subject=Enquiry"
                aria-label="Email David Kilgallon"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-[#F4F7FB] transition-all hover:bg-white/10"
              >
                <Mail className="size-4" />
                Contact Me
              </a>
              <Link
                href="/cv"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-[#9BA7B7] transition-all hover:text-[#F4F7FB] hover:border-white/20"
              >
                <Download className="size-4" />
                CV
              </Link>
            </div>
          </FadeUp>

          {/* Right: profile console */}
          <FadeUp delay={0.15} className="w-full">
            <ProfileConsole liveCount={liveCount} projectCount={projectCount} />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
