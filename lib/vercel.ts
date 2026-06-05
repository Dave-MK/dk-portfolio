import { PortfolioProject } from "@/lib/types";

type VercelProjectSummary = {
    id: string;
};

type VercelProjectResponse = {
    id: string;
    name: string;
    framework?: string | null;
    latestDeployments?: {
        id: string;
        createdAt?: number;
        readyState?: string;
        target?: string | null;
        url?: string | null;
        alias?: string[];
    }[];
    link?: {
        org?: string;
        repo?: string;
    };
};

type GitHubRepoResponse = {
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
    updated_at: string;
};

const vercelToken = process.env.VERCEL_TOKEN;
const vercelTeamId = process.env.VERCEL_TEAM_ID;
const vercelTeamSlug = process.env.VERCEL_TEAM_SLUG ?? "david-mk";
const githubToken = process.env.GITHUB_TOKEN;

const vercelHeaders: HeadersInit = {
    Authorization: `Bearer ${vercelToken}`,
};

const githubHeaders: HeadersInit = {
    Accept: "application/vnd.github+json",
    ...(githubToken ? { Authorization: `Bearer ${githubToken}` } : {}),
};

const fallbackLiveApps = [
    {
        name: "dk-portfolio",
        homepageUrl: "https://davidkilgallon.dev",
        repositoryUrl: "https://github.com/Dave-MK/dk-portfolio",
        githubOwner: "Dave-MK",
        githubRepo: "dk-portfolio",
    },
    {
        name: "readfit",
        homepageUrl: "https://readfit.vercel.app",
        repositoryUrl: "https://github.com/Dave-MK/readfit",
        githubOwner: "Dave-MK",
        githubRepo: "readfit",
    },
    {
        name: "signalibrium",
        homepageUrl: "https://signalibrium.vercel.app",
        repositoryUrl: "https://github.com/Dave-MK/signalibrium",
        githubOwner: "Dave-MK",
        githubRepo: "signalibrium",
    },
] as const;

function getVercelAccountParams(): URLSearchParams {
    const params = new URLSearchParams();

    if (vercelTeamId) {
        params.set("teamId", vercelTeamId);
    } else if (vercelTeamSlug) {
        params.set("slug", vercelTeamSlug);
    }

    return params;
}

async function fetchFromVercel<T>(
    path: string,
    searchParams?: URLSearchParams
): Promise<T> {
    const query = searchParams?.toString();
    const response = await fetch(
        `https://api.vercel.com${path}${query ? `?${query}` : ""}`,
        {
            headers: vercelHeaders,
            next: {
                revalidate: 3600,
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Failed to fetch Vercel data from ${path}`);
    }

    return (await response.json()) as T;
}

async function fetchGithubRepo(
    owner: string,
    repo: string
): Promise<GitHubRepoResponse | null> {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
        headers: githubHeaders,
        next: {
            revalidate: 3600,
        },
    });

    if (!response.ok) {
        return null;
    }

    return (await response.json()) as GitHubRepoResponse;
}

function getLatestProductionDeployment(project: VercelProjectResponse) {
    return (
        project.latestDeployments?.find(
            (deployment) =>
                deployment.readyState === "READY" &&
                deployment.target === "production"
        ) ?? null
    );
}

function getBestDomain(
    project: VercelProjectResponse,
    aliases: string[],
    deploymentUrl?: string | null
): string | null {
    const customDomain = aliases.find((domain) => !domain.endsWith(".vercel.app"));

    if (customDomain) {
        return customDomain;
    }

    const stableVercelDomain = aliases.find(
        (domain) =>
            domain === `${project.name}.vercel.app` ||
            (domain.endsWith(".vercel.app") && !domain.includes("-git-"))
    );

    if (stableVercelDomain) {
        return stableVercelDomain;
    }

    return aliases[0] ?? deploymentUrl ?? null;
}

function formatUpdatedLabel(timestamp: number): string {
    return new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    }).format(new Date(timestamp));
}

function sortProjects(projects: PortfolioProject[]): PortfolioProject[] {
    return projects.sort(
        (a, b) =>
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
}

async function getFallbackLiveApps(): Promise<PortfolioProject[]> {
    const projects = await Promise.all(
        fallbackLiveApps.map(async (app) => {
            const githubProject = await fetchGithubRepo(app.githubOwner, app.githubRepo);

            return {
                id: app.name,
                name: app.name,
                description: githubProject?.description ?? null,
                repositoryUrl: githubProject?.html_url ?? app.repositoryUrl,
                homepageUrl: app.homepageUrl,
                language: githubProject?.language ?? null,
                stars: githubProject?.stargazers_count ?? null,
                updatedAt: githubProject?.updated_at ?? new Date(0).toISOString(),
                updatedLabel: null,
            } satisfies PortfolioProject;
        })
    );

    return sortProjects(projects);
}

function mergeProjects(
    primary: PortfolioProject[],
    fallback: PortfolioProject[]
): PortfolioProject[] {
    const merged = new Map<string, PortfolioProject>();

    for (const project of [...primary, ...fallback]) {
        const key = project.repositoryUrl ?? project.homepageUrl ?? project.name;

        if (!merged.has(key)) {
            merged.set(key, project);
        }
    }

    return sortProjects(Array.from(merged.values()));
}

export async function getVercelProjects(): Promise<PortfolioProject[]> {
    if (!vercelToken) {
        return getFallbackLiveApps();
    }

    const accountParams = getVercelAccountParams();

    const projects = await fetchFromVercel<VercelProjectSummary[]>(
        "/v10/projects",
        accountParams
    );

    const liveProjects: Array<PortfolioProject | null> = await Promise.all(
        projects.map(async (projectSummary) => {
            const projectParams = new URLSearchParams(accountParams);
            const project = await fetchFromVercel<VercelProjectResponse>(
                `/v9/projects/${projectSummary.id}`,
                projectParams
            );

            const latestDeployment = getLatestProductionDeployment(project);
            const deploymentCreatedAt = latestDeployment?.createdAt;
            const bestDomain = getBestDomain(
                project,
                latestDeployment?.alias ?? [],
                latestDeployment?.url
            );

            if (
                !deploymentCreatedAt ||
                !latestDeployment ||
                !bestDomain
            ) {
                return null;
            }

            const githubOwner = project.link?.org;
            const githubRepo = project.link?.repo;
            const githubProject =
                githubOwner && githubRepo
                    ? await fetchGithubRepo(githubOwner, githubRepo)
                    : null;

            return {
                id: project.id,
                name: project.name,
                description: githubProject?.description ?? null,
                repositoryUrl: githubProject?.html_url ?? null,
                homepageUrl: `https://${bestDomain}`,
                language: githubProject?.language ?? project.framework ?? null,
                stars: githubProject?.stargazers_count ?? null,
                updatedAt: new Date(deploymentCreatedAt).toISOString(),
                updatedLabel: formatUpdatedLabel(deploymentCreatedAt),
            } satisfies PortfolioProject;
        })
    );

    const apiProjects = liveProjects
        .filter((project): project is PortfolioProject => project !== null)
    const fallbackProjects = await getFallbackLiveApps();

    return mergeProjects(apiProjects, fallbackProjects);
}
