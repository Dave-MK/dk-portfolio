"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Braces, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/#stack", label: "Stack" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/cv", label: "CV" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when scrolling
  useEffect(() => {
    if (!menuOpen) return;
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true, once: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled || menuOpen
            ? "bg-[#080A0F]/90 backdrop-blur-xl border-b border-white/[0.08]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-4 sm:px-6 h-[72px] gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 group"
            aria-label="David Kilgallon — home"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg border border-sky-400/30 bg-sky-400/10 transition-colors group-hover:bg-sky-400/20">
              <Braces className="size-4 text-sky-400" />
            </div>
            <span className="hidden sm:inline text-sm font-semibold text-[#F4F7FB] tracking-tight">
              David Kilgallon
            </span>
            <span className="sm:hidden text-sm font-bold text-[#F4F7FB]">DK</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-sm font-medium text-[#9BA7B7] rounded-lg transition-colors hover:text-[#F4F7FB] hover:bg-white/[0.05]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/#work"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-semibold text-sky-400 transition-all hover:bg-sky-400/20 shrink-0"
          >
            View Projects <ArrowRight className="size-3" />
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg border border-white/10 text-[#9BA7B7] hover:text-[#F4F7FB] hover:bg-white/[0.05] transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile nav panel */}
        {menuOpen && (
          <nav
            id="mobile-nav"
            className="md:hidden border-t border-white/[0.08] bg-[#080A0F]/95 px-4 pb-4 pt-2"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-[#9BA7B7] rounded-xl transition-colors hover:text-[#F4F7FB] hover:bg-white/[0.05]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Backdrop overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#080A0F]/60 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden
        />
      )}
    </>
  );
}
