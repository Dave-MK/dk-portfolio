import { PortfolioProject } from "@/lib/types";

type GitHubRepoResponse = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
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
      next: { revalidate: 3600 },
    }
  );

  if (!reposResponse.ok) {
    throw new Error("Failed to fetch GitHub repositories.");
  }

  const repos = (await reposResponse.json()) as GitHubRepoResponse[];

  return repos
    .filter((repo) => !repo.fork && !repo.archived && repo.homepage)
    .map((repo) => ({
      id: String(repo.id),
      name: repo.name,
      description: repo.description,
      repositoryUrl: repo.html_url,
      homepageUrl: repo.homepage!,
      language: repo.language,
      stars: repo.stargazers_count,
      updatedAt: repo.updated_at,
      updatedLabel: null,
    }));
}
