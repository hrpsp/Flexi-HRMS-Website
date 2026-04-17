import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Section({
  className,
  containerClassName,
  tone = "default",
  children,
  ...props
}: HTMLAttributes<HTMLElement> & {
  containerClassName?: string;
  tone?: "default" | "dark" | "light" | "peach";
}) {
  const toneClass = {
    default: "bg-background",
    dark: "bg-brand-dark text-white",
    light: "bg-neutral-light",
    peach: "bg-gradient-to-b from-brand-peach/15 to-transparent",
  }[tone];

  return (
    <section className={cn("py-16 md:py-24", toneClass, className)} {...props}>
      <div className={cn("container", containerClassName)}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("text-eyebrow uppercase text-brand-mid", className)}>{children}</div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-display-lg text-neutral-text text-balance">{title}</h2>
      {description && <p className="text-lg text-neutral-gray text-pretty">{description}</p>}
    </div>
  );
}

export function TodoBadge({ children = "TODO — confirm with Yousaf" }: { children?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-warning/40 bg-warning/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-warning">
      <span className="h-1.5 w-1.5 rounded-full bg-warning" />
      {children}
    </span>
  );
}
