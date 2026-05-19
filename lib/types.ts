export type GitHubProject = {
    id: number;
    name: string;
    description: string | null;
    htmlUrl: string;
    homepageUrl: string;
    language: string | null;
    stars: number;
    updatedAt: string;
};