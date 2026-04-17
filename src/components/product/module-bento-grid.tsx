"use client";

import Link from "next/link";
import { useMemo } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { suites, modulesBySuite, type Suite } from "@/data/modules";
import { ease } from "@/lib/motion";

/**
 * Bento reveal for the 28-module grid on /product.
 *
 * Reveal order is suite-priority, not DOM order — Platform cards
 * reveal first (foundational), then Core, Talent, Engagement, Operations.
 * A 0–100ms random jitter per card prevents the cascade from feeling
 * mechanical. Total reveal lands around ~1.5s.
 *
 * Hover: card lifts 6px with a peach-tinted shadow; the chevron wobbles
 * 0° → 6° → 0° via a whileHover variant on the parent.
 *
 * Peripheral dimming is deliberately skipped — 28 cards is too dense
 * for sibling dimming to feel anything other than noisy.
 */

/** Reveal priority: platform first, operations last. */
const revealOrder: Suite[] = ["platform", "core", "talent", "engagement", "operations"];

export function ModuleBentoGrid() {
  const reduce = useReducedMotion();

  /**
   * Flattened list with a precomputed per-card delay.
   * Jitter is generated once via useMemo — stable across renders,
   * unique per page load.
   */
  const cards = useMemo(() => {
    const list: Array<{
      slug: string;
      name: string;
      tagline: string;
      suiteSlug: Suite;
      suiteName: string;
      delay: number;
    }> = [];

    let order = 0;
    for (const suiteSlug of revealOrder) {
      const mods = modulesBySuite(suiteSlug);
      for (const m of mods) {
        const base = order * 0.05;
        const jitter = Math.random() * 0.1; // 0-100ms
        list.push({
          slug: m.slug,
          name: m.name,
          tagline: m.tagline,
          suiteSlug,
          suiteName: suites[suiteSlug].name,
          delay: base + jitter,
        });
        order++;
      }
    }
    return list;
  }, []);

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: (delay: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: ease.flexiBold, delay },
    }),
  };

  return (
    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {cards.map((c) => (
        <motion.div
          key={c.slug}
          custom={c.delay}
          variants={reduce ? undefined : cardVariants}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          whileHover={reduce ? undefined : "hovered"}
          whileTap={
            reduce
              ? undefined
              : {
                  scale: [1, 1.02, 1],
                  transition: { duration: 0.22, ease: ease.flexiSnap },
                }
          }
          viewport={{ amount: 0.15, once: true }}
          className="relative"
        >
          <Link
            href={`/product/${c.slug}`}
            className="group block h-full rounded-xl border border-border bg-card p-4 transition-all duration-fast ease-flexi-snap hover:-translate-y-1.5 hover:border-brand-peach/60 hover:shadow-[0_8px_24px_rgba(50,46,83,0.12),0_2px_6px_rgba(238,194,147,0.2)] will-change-transform"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-wider text-brand-mid mb-1">
                  {c.suiteName}
                </div>
                <div className="text-sm font-semibold text-neutral-text group-hover:text-brand-dark">
                  {c.name}
                </div>
                <div className="text-xs text-neutral-gray line-clamp-1 mt-0.5">{c.tagline}</div>
              </div>
              <motion.div
                variants={
                  reduce
                    ? undefined
                    : {
                        hovered: {
                          rotate: [0, 6, 0],
                          transition: { duration: 0.4, ease: ease.flexiBold },
                        },
                      }
                }
                className="shrink-0 mt-0.5 text-neutral-gray group-hover:text-brand-peach transition-colors duration-fast"
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
              </motion.div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
