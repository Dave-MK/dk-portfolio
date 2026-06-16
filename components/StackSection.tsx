"use client";

import { motion } from "motion/react";
import { Code2, Palette, GitBranch, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeUp } from "@/components/FadeUp";

const stacks = [
  {
    Icon: Code2,
    label: "Frontend",
    iconColor: "text-sky-400",
    iconBg: "bg-sky-400/10 border-sky-400/20",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    Icon: Palette,
    label: "Design",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-400/10 border-violet-400/20",
    items: ["UI Design", "Figma", "Responsive Layouts", "Visual Hierarchy", "Branding"],
  },
  {
    Icon: GitBranch,
    label: "Tools",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/10 border-emerald-400/20",
    items: ["GitHub", "Vercel", "VS Code", "Git", "Deployment Workflows"],
  },
  {
    Icon: Sparkles,
    label: "Creative",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-400/10 border-amber-400/20",
    items: ["Video", "Motion Design", "Graphic Design", "Storytelling", "Digital Media"],
  },
];

export function StackSection() {
  return (
    <section id="stack" className="py-24 px-4 sm:px-6 scroll-mt-20">
      <div className="mx-auto max-w-[1240px]">
        <FadeUp className="mb-12">
          <SectionHeading
            label="Stack"
            heading="The tools and skills I use to build products and solve problems."
          />
        </FadeUp>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stacks.map(({ Icon, label, iconColor, iconBg, items }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.09, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className={`inline-flex items-center justify-center rounded-xl border p-2.5 mb-4 ${iconBg}`}>
                <Icon className={`size-5 ${iconColor}`} />
              </div>
              <h3 className="text-base font-semibold text-[#F4F7FB] mb-4">{label}</h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-[#9BA7B7]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
