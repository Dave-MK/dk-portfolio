"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Braces } from "lucide-react";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
    { href: "#live", label: "Live" },
    { href: "#development", label: "Development" },
    { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 12);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={cn(
                "fixed inset-x-0 top-0 z-50",
                isScrolled && "border-b border-white/10 bg-black/70 backdrop-blur-md"
            )}
        >
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-3 px-4 py-3 md:grid-cols-[1fr_auto_1fr]">
                <Link
                    href="/"
                    className="justify-self-center text-xl font-bold tracking-tight uppercase md:justify-self-start"
                >
                    <span className="flex items-center">
                        <Braces className="mr-2 size-6" />
                        DK
                    </span>
                </Link>

                <nav className="flex flex-wrap items-center justify-center gap-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/12"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="justify-self-center md:justify-self-end">
                    <Button asChild size="sm" variant="outline">
                        <a
                            href="https://github.com/Dave-MK"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GitHubIcon className="mr-2 size-4" />
                            GitHub
                        </a>
                    </Button>
                </div>
            </div>
        </header>
    );
}
