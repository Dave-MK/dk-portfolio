import { PortfolioProject } from "@/lib/types";

type GitHubRepoResponse = {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
    updated_at: string;
    fork: boolean;
    archived: boolean;
};

type GitHubPagesResponse = {
    html_url: string;
};

const username = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;

const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

export async function getGithubPagesProjects(): Promise<PortfolioProject[]> {
    if (!username) {
        return [];
    }

    const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
        {
            headers,
            next: {
                revalidate: 3600,
            },
        }
    );

    if (!reposResponse.ok) {
        throw new Error("Failed to fetch GitHub repositories.");
    }

    const repos = (await reposResponse.json()) as GitHubRepoResponse[];
    const usableRepos = repos.filter((repo) => !repo.fork && !repo.archived);

    const projects: Array<PortfolioProject | null> = await Promise.all(
        usableRepos.map(async (repo) => {
            const pagesResponse = await fetch(
                `https://api.github.com/repos/${username}/${repo.name}/pages`,
                {
                    headers,
                    next: {
                        revalidate: 3600,
                    },
                }
            );

            if (!pagesResponse.ok) {
                return null;
            }

            const pages = (await pagesResponse.json()) as GitHubPagesResponse;

            return {
                id: String(repo.id),
                name: repo.name,
                description: repo.description,
                repositoryUrl: repo.html_url,
                homepageUrl: pages.html_url,
                language: repo.language,
                stars: repo.stargazers_count,
                updatedAt: repo.updated_at,
                updatedLabel: null,
            } satisfies PortfolioProject;
        })
    );

    return projects.filter((project): project is PortfolioProject => project !== null);
}
