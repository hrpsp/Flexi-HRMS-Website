import { cn } from "@/lib/utils";

/**
 * Tier-2 loading placeholder — matches the shape of incoming content
 * with a left-to-right shimmer sweep. Uses the `shimmer` keyframe
 * declared in tailwind.config.ts.
 *
 * Rules:
 * - No spinners, no "Loading..." text — skeletons only.
 * - Size/shape should match the real content exactly.
 * - Stack multiple Skeletons in a parent div to mock full UI shapes.
 */
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("relative overflow-hidden rounded-lg bg-neutral-gray/20", className)}
    >
      <div
        aria-hidden
        className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-neutral-gray/30 to-transparent motion-reduce:hidden"
      />
    </div>
  );
}
