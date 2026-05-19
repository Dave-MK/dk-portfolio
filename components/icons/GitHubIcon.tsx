import { siGithub } from "simple-icons";

type GitHubIconProps = {
  className?: string;
};

export function GitHubIcon({ className }: GitHubIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={siGithub.path} />
    </svg>
  );
}