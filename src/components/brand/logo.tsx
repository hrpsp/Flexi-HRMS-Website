import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Real Flexi HRMS logo. Native asset is 1600×933 transparent PNG —
 * we pass those dimensions to next/image for aspect-ratio correctness
 * and control display size via the `className` prop (height + w-auto).
 *
 * Defaults:
 *   - className `h-8 w-auto` → renders ~32px tall (nav-appropriate)
 *
 * For larger display (footer / hero), pass `className="h-10 w-auto"`.
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
  const src =
    variant === "light"
      ? "/brand/flexi-hrms-logo-light.png"
      : "/brand/flexi-hrms-logo.png";

  return (
    <Link href="/" className="inline-flex items-center" aria-label="Flexi HRMS home">
      <Image
        src={src}
        alt="Flexi HRMS"
        width={1600}
        height={933}
        priority={priority}
        className={cn("h-8 w-auto", className)}
      />
    </Link>
  );
}
