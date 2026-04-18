import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Flexi HRMS logo. Native asset is 1600×933 (aspect ~1.715:1 —
 * the logo is nearly square because it stacks mark + wordmark,
 * so heights in the nav are larger than typical wide wordmarks).
 *
 * Variants:
 *   - "dark"  — brand-dark (#322E53) fill SVG, for light backgrounds
 *   - "light" — light-coloured PNG, for dark backgrounds
 *
 * Default: `h-16 w-auto` → ~64px tall / ~110px wide (nav / footer).
 * Override via `className` for other contexts.
 *
 * SVG variant is rendered with `unoptimized` so next/image serves it
 * as-is (vector) instead of rasterising to 1920/3840 — which was
 * wasteful and produced soft edges at small sizes.
 */
export function Logo({
  variant = "dark",
  className,
  priority = true,
}: {
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
}) {
  const isSvg = variant === "dark";
  const src = isSvg
    ? "/brand/flexi-hrms-logo.svg"
    : "/brand/flexi-hrms-logo-light.png";

  return (
    <Link href="/" className="inline-flex items-center" aria-label="Flexi HRMS home">
      <Image
        src={src}
        alt="Flexi HRMS"
        width={1600}
        height={933}
        priority={priority}
        unoptimized={isSvg}
        sizes="(max-width: 640px) 96px, 120px"
        className={cn("h-16 w-auto", className)}
      />
    </Link>
  );
}
