import Link from 'next/link';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { Button } from '@/components/ui/button';

export function SiteHeader() {
    return (
        <header className="border-b">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link href="/" className="font-bold tracking-tight">
                David Kilgallon
                </Link>
                <nav className="flex items-center gap-3">
                    <Link href="#projects" className="text-sm text-muted-foreground">
                    Projects
                    </Link>
                    <Link href="#contact" className="text-sm text-muted-foreground">
                    Contact
                    </Link>
                    <Button asChild size="sm" variant="outline">
                        <a
                        href="https://github.com/YOUR_USERNAME"
                        target="_blank"
                        rel="noreferrer"
                        >
                            <GitHubIcon className="mr-2 size-4" />
                            GitHub
                        </a>
                    </Button>
                </nav>
            </div>
        </header>
 );
}

