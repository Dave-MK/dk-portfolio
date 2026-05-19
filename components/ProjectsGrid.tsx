import { GitHubProject } from "@/lib/types";
import { ProjectCard } from "@/components/ProjectCard";

type ProjectsGridProps = {
    projects: GitHubProject[];
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
    if (projects.length === 0) {
        return (
        <div className="rounded-2xl border border-dashed p-8 text-center">
            <p className="text-muted-foreground">
                No GitHub Pages projects found yet.
            </p>
        </div>
        );
    }

    return (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </section>
    );
}
