import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "dark",
  className,
  width = 140,
  height = 28,
}: {
  variant?: "dark" | "light";
  className?: string;
  width?: number;
  height?: number;
}) {
  const src = variant === "light" ? "/brand/flexi-hrms-logo-light.svg" : "/brand/flexi-hrms-logo.svg";
  return (
    <Link href="/" className={cn("inline-flex items-center", className)} aria-label="Flexi HRMS home">
      <Image src={src} alt="Flexi HRMS" width={width} height={height} priority />
    </Link>
  );
}
