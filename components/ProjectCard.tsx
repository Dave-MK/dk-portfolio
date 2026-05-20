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
            whileHover={{ scale: 1.10, zIndex: 10 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group ml-4 mr-4 sm:m-0 rounded-2xl bg-linear-to-r from-cyan-500 to-fuchsia-500 p-px transition-all  duration-100 hover:shadow-2xl"
        >
            <Card className="flex h-full flex-col rounded-2xl border-0 bg-background/95 backdrop-blur ">
                <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                        <CardTitle className="text-xl capitalize">
                            {project.name.replaceAll("-", " ")}
                        </CardTitle>

                        {project.language && (
                            <Badge variant="secondary">
                                {project.language}
                            </Badge>
                        )}
                    </div>
                </CardHeader>

                <CardContent className="flex-1">
                    <p className="text-sm leading-6">
                        {project.description ??
                            "No description added yet."}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm">
                        <Star className="size-4" />
                        <span>{project.stars}</span>
                    </div>
                </CardContent>
                
                <CardFooter className="flex flex-gap-3 justify-around">
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