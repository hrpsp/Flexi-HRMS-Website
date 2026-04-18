"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { primaryNav } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,box-shadow,backdrop-filter,border-color] duration-base ease-flexi-snap",
        scrolled
          ? "bg-background/85 backdrop-blur-[12px] border-b border-border/60 shadow-[0_2px_12px_rgba(50,46,83,0.04)]"
          : "bg-background/70 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between gap-6 transition-[height] duration-base ease-flexi-snap",
          scrolled ? "h-20" : "h-24"
        )}
      >
        <Logo />

        <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setOpenGroup(null)}>
          {primaryNav.map((group) => {
            const hasMenu = !!group.columns;
            if (!hasMenu && group.href) {
              return (
                <Link
                  key={group.label}
                  href={group.href}
                  className="px-3 py-2 text-sm font-medium text-neutral-text/80 hover:text-brand-dark transition-colors"
                >
                  {group.label}
                </Link>
              );
            }
            const isOpen = openGroup === group.label;
            return (
              <div key={group.label} className="relative" onMouseEnter={() => setOpenGroup(group.label)}>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-text/80 hover:text-brand-dark transition-colors"
                  aria-expanded={isOpen}
                >
                  {group.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                </button>
                {isOpen && group.columns && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                    <div
                      className={cn(
                        "rounded-2xl border border-border/60 bg-background/95 backdrop-blur-md shadow-lg p-6",
                        group.columns.length > 2 ? "w-[820px] grid grid-cols-4 gap-6" : "w-[520px] grid grid-cols-2 gap-6"
                      )}
                    >
                      {group.columns.map((col) => (
                        <div key={col.heading}>
                          <div className="text-eyebrow uppercase text-neutral-gray mb-3">{col.heading}</div>
                          <ul className="space-y-2.5">
                            {col.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="group block rounded-md -mx-2 px-2 py-1.5 hover:bg-neutral-light transition-colors"
                                >
                                  <div className="text-sm font-medium text-neutral-text group-hover:text-brand-dark">
                                    {link.label}
                                  </div>
                                  {link.description && (
                                    <div className="text-xs text-neutral-gray mt-0.5">{link.description}</div>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/request-demo">Request Demo</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-neutral-text hover:bg-neutral-light"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-background overflow-y-auto">
          <div className="container py-6 space-y-6">
            {primaryNav.map((group) => (
              <div key={group.label}>
                {group.href ? (
                  <Link
                    href={group.href}
                    className="block text-lg font-semibold text-neutral-text py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {group.label}
                  </Link>
                ) : (
                  <>
                    <div className="text-eyebrow uppercase text-neutral-gray mb-3">{group.label}</div>
                    <div className="space-y-4">
                      {group.columns?.map((col) => (
                        <div key={col.heading}>
                          <div className="text-xs font-semibold text-brand-mid mb-1.5">{col.heading}</div>
                          <ul className="space-y-1.5 pl-1">
                            {col.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="block text-sm text-neutral-text/80 py-1"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="outline" asChild>
                <Link href="/sign-in" onClick={() => setMobileOpen(false)}>Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/request-demo" onClick={() => setMobileOpen(false)}>Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
