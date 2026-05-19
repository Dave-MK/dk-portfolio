"use client";

import { motion } from "motion/react";
import { ExternalLink, Star } from "lucide-react";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { GitHubProject } from "@/lib/types";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
    project: GitHubProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.article
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
            <Card className="flex h-full flex-col border-border/60 bg-card/80 backdrop-blur">
                <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                        <CardTitle className="text-xl capitalize">
                            {project.name.replace("-", " ")}
                        </CardTitle>

                        {project.language && (
                            <Badge variant="secondary">
                                {project.language}
                            </Badge>
                        )}
                    </div>
                </CardHeader>

                <CardContent className="flex-1">
                    <p className="text-sm leading-6 text-muted-foreground">
                        {project.description ??
                            "No description added yet."}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="size-4" />
                        <span>{project.stars}</span>
                    </div>
                </CardContent>
                
                <CardFooter className="flex-gap-3">
                    <Button asChild size="sm">
                        <a href={project.homepageUrl} target="_blank" rel="noreferrer">
                            <ExternalLink className="mr-2 size-4" />
                            View Live Site
                        </a>
                    </Button>

                    <Button asChild variant="outline" size="sm">
                        <a href={project.htmlUrl} target="_blank" rel="noreferrer">
                            <GitHubIcon className="mr-2 size-4" />
                            View on GitHub
                        </a>
                    </Button>
                </CardFooter>
            </Card>
        </motion.article>
    );
}