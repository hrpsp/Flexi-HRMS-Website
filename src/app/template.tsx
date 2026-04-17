"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";

/**
 * Page-transition wrapper — Next.js 14 App Router re-mounts this on
 * every route change.
 *
 * Enter sequence (Signature Moment 6):
 *   - y 16 → 0     (rises from below)
 *   - opacity 0 → 1
 *   - scale 0.98 → 1  (the "settle" — subtle 2% expansion as content
 *                      arrives, so hero sections feel grounded)
 *
 * All three interpolate in parallel over 400ms with a 100ms delay so
 * the outgoing route has a visual beat to clear first.
 *
 * Respects `prefers-reduced-motion` (renders children directly).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: ease.flexiBold, delay: 0.1 },
      }}
      style={{ transformOrigin: "50% 20%" }}
    >
      {children}
    </motion.div>
  );
}
