"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeUp } from "@/components/FadeUp";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "I start by identifying the problem. I then work backwards, planning the cleanest and safest route to a solution and how this looks for a user.",
    numColor: "text-sky-400",
    borderColor: "border-sky-400/20",
    bgColor: "bg-sky-400/[0.04]",
  },
  {
    number: "02",
    title: "Design",
    description:
      "I map the core screens, layout, and interactions before touching code.",
    numColor: "text-violet-400",
    borderColor: "border-violet-400/20",
    bgColor: "bg-violet-400/[0.04]",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I build clean, reusable components with simple state where possible.",
    numColor: "text-emerald-400",
    borderColor: "border-emerald-400/20",
    bgColor: "bg-emerald-400/[0.04]",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "I test, polish the rough edges, and ship through GitHub and Vercel.",
    numColor: "text-amber-400",
    borderColor: "border-amber-400/20",
    bgColor: "bg-amber-400/[0.04]",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 scroll-mt-20">
      <div className="mx-auto max-w-310">
        <FadeUp className="mb-12">
          <SectionHeading label="Process" heading="How I build" />
        </FadeUp>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, title, description, numColor, borderColor, bgColor }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.09, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`rounded-2xl border ${borderColor} ${bgColor} p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1`}
            >
              <p className={`text-2xl sm:text-3xl font-bold ${numColor} mb-4 font-mono`}>{number}</p>
              <h3 className="text-base font-semibold text-[#F4F7FB] mb-2">{title}</h3>
              <p className="text-sm text-[#9BA7B7] leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
