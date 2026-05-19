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
      <main className="min-h-screen text-foreground relative z-10">
        <section className="mx-auto max-w-4xl h-screen flex flex-col items-start justify-center px-4">
          <div className="mb-12 -mt-20 max-w-3xl flex flex-col items-start gap-6">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Portfolio
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="text-muted-foreground text-4xl sm:text-5xl">
                Hello! I&apos;m
              </span>
              <span className="text-foreground"> David Kilgallon</span>
            </h1>
            <CyclingSkills />
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Aspiring software developer with a creative background in digital
              media, building web projects that combine clean code, visual
              design, and practical problem-solving.
            </p>
            <div className="flex items-center justify-center gap-3">
                <h2 className="text-foreground text-lg sm:text-xl">
                Let&apos;s connect {'>'}
                </h2>
                <img className="inline w-12 h-12 ml-4" src="/images/linkedin-app-icon.svg" alt="LinkedIn Icon" />
                <img className="inline w-12 h-12" src="/images/github-white-icon.svg" alt="GitHub Icon" />
                <img className="inline w-12 h-12" src="/images/gmail-icon.svg" alt="Email Icon" />
                <img className="inline w-12 h-12 ml-4" src="/images/youtube-color-icon.svg" alt="YouTube Icon" />
            </div>
          </div>
        </section>
        <section className="w-full pt-8 bg-background sm:px-6 xs:px-4">
          <section id="projects" className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center mb-8">
              <h2 className="text-4xl font-bold tracking-tight text-center">
                Projects
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground text-center">
                Live projects pulled from GitHub Pages and displayed
                automatically when a deployed version is available.
              </p>
            </div>
            <ProjectsGrid projects={projects} />
          </section>
          <section
            id="contact"
            className="flex flex-col items-center mt-20 border-t py-10"
          >
            <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground text-center">
              Open to junior developer roles, creative technology projects, and
              digital work involving web, media, design, or interactive content.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xl">
              <a
                href="mailto:ntice.digital@gmail.com"
                className="font-medium underline underline-offset-4"
              >
                <img className="w-10 h-10" src="/images/email-envelope-white-icon.svg" alt="Email Icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/david-kilgallon/"
                className="font-medium underline underline-offset-4"
              >
                <img className="w-10 h-10" src="/images/linkedin-app-white-icon.svg" alt="LinkedIn Icon" />
              </a>
              <a
                href="https://www.youtube.com/@ntice.digital"
                target="_blank"
                rel="noreferrer"
                className="text-md font-medium underline underline-offset-4"
              >
                <img className="w-10 h-10"src="/images/youtube-app-white-icon.svg" alt="YouTube Icon" />
              </a>
            </div>
          </section>
        </section>
      </main>
    );
}