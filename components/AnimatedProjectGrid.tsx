"use client";

import { motion } from "motion/react";
import { ProjectCard } from "@/components/ProjectCard";
import type { ProjectStatus } from "@/lib/projects";

type ProjectItem = {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  status: ProjectStatus;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  workSlug?: string;
  accentFrom?: string;
  accentTo?: string;
  featured?: boolean;
};

type Props = {
  projects: ProjectItem[];
  className?: string;
};

export function AnimatedProjectGrid({ projects, className }: Props) {
  return (
    <div className={className}>
      {projects.map((project, i) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.09, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <ProjectCard
            title={project.title}
            tagline={project.tagline}
            description={project.description}
            status={project.status}
            tech={project.tech}
            liveUrl={project.liveUrl}
            repoUrl={project.repoUrl}
            workSlug={project.workSlug}
            featured={project.featured}
            accentFrom={project.accentFrom}
            accentTo={project.accentTo}
          />
        </motion.div>
      ))}
    </div>
  );
}
