import Link from 'next/link';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { Button } from '@/components/ui/button';
import { Braces } from 'lucide-react';

export function SiteHeader() {
    return (
        <header className="relative z-20 bg-transparent">
            <div className="mx-auto flex max-w-6xl items-center px-6 sm:px-2 justify-between py-4">
                <Link href="/" className="flex font-bold tracking-tight text-xl uppercase">
                    <Braces className="mr-2 size-7" />
                    DK
                </Link>
                <nav className="flex items-center gap-3">
                    <Link href="#projects" className="text-sm">
                    Projects
                    </Link>
                    <Link href="#contact" className="text-sm">
                    Contact
                    </Link>
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
                </nav>
            </div>
        </header>
 );
}

