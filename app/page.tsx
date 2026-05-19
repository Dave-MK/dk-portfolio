import { CyclingSkills } from "@/components/CyclingSkills";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { getGithubPagesProject } from "@/lib/github";
import { GitHubProject } from "@/lib/types";

export default async function HomePage() {
    let projects: GitHubProject[] = [];

    try {
        projects = await getGithubPagesProject();
    } catch (error) {
        console.error(error);
    }

    return (
        <main className="min-h-screen bg-background px-6 py-16 text-foreground">
            <section className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-3xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                        Portfolio
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        David Kilgallon
                    </h1>
                    <CyclingSkills />
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Aspiring software developer with a creative background in digital
                        media, building web projects that combine clean code, visual design,
                        and practical problem-solving.
                    </p>
                </div>
                <section id="projects">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
                        <p className="mt-3 max-w-2xl text-muted-foreground">
                            Live projects pulled from GitHub Pages and displayed automatically
                            when a deployed version is available.
                        </p>
                    </div>
                    <ProjectsGrid projects={projects} />
                </section>
                <section id="contact" className="mt-20 border-t pt-10">
                    <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
                    <p className="mt-4 max-w-2xl text-muted-foreground">
                        Open to junior developer roles, creative technology projects, and
                        digital work involving web, media, design, or interactive content.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href="mailto:ntice.digital@gmail.com"
                            className="text-sm font-medium underline underline-offset-4"
                        >
                            ntice.digital@gmail.com
                        </a>
                        <a
                            href="https://www.youtube.com/@ntice.digital"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium underline underline-offset-4"
                        >
                            YouTube
                        </a>
                    </div>
                </section>
            </section>
        </main>
 );
}