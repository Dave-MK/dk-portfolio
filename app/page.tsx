import { CyclingSkills } from "@/components/CyclingSkills";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { getGithubPagesProject } from "@/lib/github";
import { GitHubProject } from "@/lib/types";
import Image from "next/image";

export default async function HomePage() {
  let projects: GitHubProject[] = [];

  try {
    projects = await getGithubPagesProject();
  } catch (error) {
    console.error(error);
  }

  return (
    <main className="min-h-screen relative z-10">
      <section className="flex max-w-6xl justify-around items-center h-screen mx-auto px-4">
        <Image
          className="rounded-full w-70 h-70 z-10 -mt-40 lg:inline-block hidden transform -rotate-8"
          src="/images/profile-pic.webp"
          alt="Profile Picture"
          width="200"
          height="200"
          loading="eager"
        />
        <section className="mx-auto max-w-4xl h-screen flex flex-col items-start justify-center px-4">
          <div className="mb-12 -mt-20 max-w-3xl flex flex-col items-start gap-6">
            <p className="text-sm font-medium uppercase tracking-widest">
              Portfolio
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-6xl">
              <span className="text-2xl sm:text-5xl">
                Hello! I&apos;m
              </span>
              <span> David Kilgallon</span>
            </h1>
            <CyclingSkills />
            <p className="mt-6 text-sm sm:text-xl leading-8">
              Aspiring software developer with a creative background in digital
              media, building web projects that combine clean code, visual
              design, and practical problem-solving.
            </p>
            <div className="flex items-center justify-center gap-3">
              <h2 className="text-xs sm:text-xl">
                Let&apos;s connect...
              </h2>
              <a
              href="https://www.linkedin.com/in/david-kilgallon/"
              className="font-medium underline underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="inline w-8 h-8 sm:w-12 sm:h-12 ml-4"
                src="/images/linkedin-app-icon.svg"
                alt="LinkedIn Icon"
                width="0"
                height="0"
              />
            </a>
              <a
                href="https://github.com/Dave-MK"
                className="font-medium underline underline-offset-4"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="inline w-8 h-8 sm:w-12 sm:h-12"
                  src="/images/github-white-icon.svg"
                  alt="GitHub Icon"
                  width="0"
                  height="0"
                />
              </a>
              <a
                href="mailto:ntice.digital@gmail.com?subject=Enquiry"
                aria-label="Email David Kilgallon"
                className="group inline-block"
              >
                <Image
                  className="inline w-8 h-8 sm:w-14 sm:h-14"
                  src="/images/gmail-icon.svg"
                  alt="Email Icon"
                  width="0"
                  height="0"
                />
              </a>
              <a
                href="https://www.youtube.com/@ntice.digital"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                <Image
                  className="inline w-8 h-8 sm:w-16 sm:h-16"
                  src="/images/youtube-color-icon.svg"
                  alt="YouTube Icon"
                  width="0"
                  height="0"
                />
              </a>
            </div>
          </div>
        </section>
      </section>
      <div className="absolute top-85 w-full h-150 bg-linear-to-t from-cyan-600/70 via-cyan-600/30 to-cyan-100/0 -z-5 animate-pulse animation-duration-3000" />
      <section className="z-5 w-full pt-8 bg-background sm:px-6 xs:px-4 border-t border-cyan-500/45">
        <section id="projects" className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-center mt-4">
              Projects
            </h2>
            <p className="mt-3 px-4 sm:px-px max-w-2xl text-center text-sm sm:text-lg">
              My live projects published from GitHub are displayed below automatically
              when a deployed version is available.
            </p>
          </div>
          <ProjectsGrid projects={projects} />
        </section>
        <section
          id="contact"
          className="flex flex-col items-center mt-20 border-t py-10"
        >
          <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
          <p className="mt-4 max-w-2xl text-center">
            Open to creative technology projects, and
            digital work involving web, media, design, or interactive content.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xl items-center justify-center">
            <a
              href="https://github.com/Dave-MK"
              className="font-medium underline underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="inline w-8 h-8 sm:w-12 sm:h-12"
                src="/images/github-white-icon.svg"
                alt="GitHub Icon"
                width="0"
                height="0"
              />
            </a>
            <a
              href="mailto:ntice.digital@gmail.com?subject=Enquiry"
              aria-label="Email David Kilgallon"
              className="group inline-block"
            >
              <Image
                className="w-10 h-10"
                src="/images/email-envelope-white-icon.svg"
                alt="Email Icon"
                width="0"
                height="0"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/david-kilgallon/"
              className="font-medium underline underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="w-10 h-10"
                src="/images/linkedin-app-white-icon.svg"
                alt="LinkedIn Icon"
                width="0"
                height="0"
              />
            </a>
            <a
              href="https://www.youtube.com/@ntice.digital"
              target="_blank"
              rel="noreferrer"
              className="text-md font-medium underline underline-offset-4"
            >
              <Image
                className="w-10 h-10"
                src="/images/youtube-app-white-icon.svg"
                alt="YouTube Icon"
                width="0"
                height="0"
              />
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
