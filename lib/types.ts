export type PortfolioProject = {
    id: string;
    name: string;
    description: string | null;
    repositoryUrl: string | null;
    homepageUrl: string;
    language: string | null;
    stars: number | null;
    updatedAt: string;
    updatedLabel: string | null;
};
