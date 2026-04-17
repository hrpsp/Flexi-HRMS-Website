"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  animate,
  useMotionValue,
  useMotionValueEvent,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { ease } from "@/lib/motion";
import { useConnection } from "@/hooks/useConnection";

type Props = {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  /** Used to stagger multiple CountUps in a row (scale bar). 120ms per index. */
  index?: number;
};

/**
 * Signature-moment count-up.
 *
 * - Triggered by `useInView` (amount: 0.5, once: true).
 * - Numbers ease-out via a slightly over-damped spring (no oscillation, but
 *   the spec's "fast-then-slow" feel). Stiffness 60 / damping 24 / mass 1.
 * - Subtle ±1px vertical wobble during count, damped to zero.
 * - Final value "settles" with a 3% scale-bounce (scale 1 → 1.03 → 1).
 * - `prefers-reduced-motion` + slow-connection: final value shown instantly.
 */
export function CountUp({ value, suffix = "", prefix = "", className, index = 0 }: Props) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(containerRef, { amount: 0.5, once: true });

  const reduce = useReducedMotion();
  const { degrade } = useConnection();
  const skip = Boolean(reduce) || degrade;

  const mv = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);

  // Paint current motion-value into the DOM without re-rendering React.
  useMotionValueEvent(mv, "change", (v) => {
    if (numberRef.current) {
      numberRef.current.textContent = Math.round(v).toLocaleString("en-US");
    }
  });

  useEffect(() => {
    if (!inView) return;

    if (skip) {
      if (numberRef.current) {
        numberRef.current.textContent = value.toLocaleString("en-US");
      }
      mv.set(value);
      return;
    }

    const staggerMs = index * 120;

    const timer = window.setTimeout(() => {
      // Smooth ease-out count — spring is overdamped so it doesn't overshoot.
      const countCtrl = animate(mv, value, {
        type: "spring",
        stiffness: 60,
        damping: 24,
        mass: 1,
      });

      // Subtle vertical wobble that damps to zero across the count duration.
      animate(y, [0, -1, 1, -0.5, 0.5, 0], {
        duration: 1.4,
        ease: ease.flexi,
      });

      // On count completion, settle with a 3% scale bounce.
      countCtrl.then(() => {
        animate(scale, [1, 1.03, 1], { duration: 0.24, ease: ease.flexiBold });
      });
    }, staggerMs);

    return () => window.clearTimeout(timer);
  }, [inView, skip, value, index, mv, y, scale]);

  const initialText = skip ? value.toLocaleString("en-US") : "0";

  return (
    <motion.span
      ref={containerRef}
      style={{ y, scale, display: "inline-block" }}
      className={className}
    >
      {prefix}
      <span ref={numberRef} className="tabular-nums">{initialText}</span>
      {suffix}
    </motion.span>
  );
}
