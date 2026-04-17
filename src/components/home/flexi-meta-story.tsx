"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { ease, duration, spring } from "@/lib/motion";

type Field = { label: string; value: string; featured?: boolean };
type Tab = { key: string; label: string; fields: Field[] };

const tabs: Tab[] = [
  {
    key: "manufacturing",
    label: "Manufacturing",
    fields: [
      { label: "Plant code", value: "FSD-02 · Faisalabad Unit 2" },
      { label: "Shift type", value: "GA / E1 / E2 / E3 / GB" },
      { label: "PPE size", value: "L — S to XXXL range" },
      { label: "Union membership", value: "CBA 2023 recognised" },
      { label: "EOBI registration", value: "42-03-6-A-1-18472", featured: true },
      { label: "Contract / permanent", value: "Permanent · Grade 6" },
      { label: "Piece-rate category", value: "Stitching Cat-B · PKR 12/unit" },
    ],
  },
  {
    key: "telecom",
    label: "Telecom",
    fields: [
      { label: "Circle", value: "North" },
      { label: "Tower region", value: "North — Region 3" },
      { label: "SIM allocation card", value: "SIM-EPH-18472 · Postpaid" },
      { label: "Security clearance", value: "Level 2 — Approved" },
      { label: "Field / office flag", value: "Field engineer" },
      { label: "Emergency response team", value: "ERT-N3 · Lead", featured: true },
    ],
  },
  {
    key: "retail",
    label: "Retail",
    fields: [
      { label: "Store code", value: "LHR-212 · Gulberg Galleria" },
      { label: "Format", value: "Mall — High-street — Outlet" },
      { label: "Shift pattern", value: "2-shift · 10–2, 5–10" },
      { label: "POS operator flag", value: "Yes · POS #14 certified" },
      { label: "Cash handling authorisation", value: "Tier A · up to PKR 250,000", featured: true },
    ],
  },
];

/* ---------- Cascade swap variants ---------- */

const rightFieldVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.04, duration: duration.base, ease: ease.flexiBold },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: 8,
    transition: { delay: i * 0.03, duration: duration.fast, ease: ease.flexiIn },
  }),
};

const leftFieldVariants: Variants = {
  initial: { opacity: 0, x: -8 },
  animate: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.04, duration: 0.3, ease: ease.flexiBold },
  }),
  exit: (i: number) => ({
    opacity: 0,
    x: -8,
    transition: { delay: i * 0.03, duration: duration.fast, ease: ease.flexiIn },
  }),
};

const pulseShadow = [
  "0 0 0 0 rgba(238, 194, 147, 0)",
  "0 0 0 8px rgba(238, 194, 147, 0.4)",
  "0 0 0 0 rgba(238, 194, 147, 0)",
];

export function FlexiMetaStory() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(tabs[0].key);
  const activeTab = tabs.find((t) => t.key === active)!;

  // One-time pulse when the section first scrolls into view — draws
  // attention to the "added without a developer" field.
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { amount: 0.4, once: true });
  const [pulseKey, setPulseKey] = useState<string | null>(null);

  // Gentle 0.9× parallax on the panel — tiny depth hint as the section scrolls.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const panelY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  useEffect(() => {
    if (inView && !reduce && pulseKey === null) {
      // Mount pulse with a slight delay so it lands after the section settles.
      const t = window.setTimeout(() => setPulseKey(activeTab.key), 700);
      return () => window.clearTimeout(t);
    }
  }, [inView, reduce, pulseKey, activeTab.key]);

  return (
    <Section id="meta" tone="default" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,theme(colors.brand.peach/10),transparent_55%)] pointer-events-none"
      />
      <div ref={sectionRef} className="relative">
        <SectionHeading
          eyebrow="The Reality Engine"
          title="The Reality Engine. Your HR admin configures the product. No developer required."
          description="Most HRMS products make you adapt your process to their software. Pakistani enterprises tried that for 15 years. It failed. Flexi inverts the model: every tenant configures their own forms, workflows, approval chains, payroll rules, and leave policies — without writing code. We call it Flexi Meta."
        />

        <motion.div
          style={reduce ? undefined : { y: panelY }}
          className="mt-12 rounded-2xl border border-border bg-card shadow-sm overflow-hidden"
        >
          <div className="border-b border-border flex flex-wrap" role="tablist">
            {tabs.map((t) => (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={active === t.key}
                onClick={() => setActive(t.key)}
                className={cn(
                  "relative px-5 py-3.5 text-sm font-medium transition-colors duration-fast ease-flexi-snap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-peach focus-visible:ring-offset-2 focus-visible:ring-inset",
                  active === t.key
                    ? "text-brand-dark"
                    : "text-neutral-gray hover:text-neutral-text"
                )}
              >
                {t.label}
                {active === t.key && (
                  <motion.span
                    layoutId="meta-tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-peach"
                    transition={spring.soft}
                  />
                )}
              </button>
            ))}
          </div>

          {/* layout prop lets the container smoothly interpolate height
              as fields swap between tabs of different lengths */}
          <motion.div
            layout={!reduce}
            transition={spring.soft}
            className="grid md:grid-cols-2 gap-0"
          >
            {/* LEFT — Flexi Meta dictionary (dark panel) */}
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-border bg-brand-dark text-white">
              <div className="text-[10px] uppercase tracking-[0.18em] text-brand-peach mb-4">
                SystemFlex · Flexi Meta dictionary
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.ul
                  key={`left-${active}`}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, transition: { duration: duration.fast } }}
                  className="space-y-2"
                >
                  {activeTab.fields.map((f, i) => (
                    <motion.li
                      key={f.label}
                      custom={i}
                      variants={reduce ? undefined : leftFieldVariants}
                      initial={reduce ? false : "initial"}
                      animate={reduce ? { opacity: 1, x: 0 } : "animate"}
                      exit={reduce ? { opacity: 0 } : "exit"}
                      className="rounded-md bg-white/5 border border-white/10 px-3 py-2.5 text-sm"
                    >
                      <div className="text-[10px] uppercase tracking-wider text-brand-peach/80">{f.label}</div>
                      <div className="text-white/90 font-mono text-xs mt-0.5">
                        field · required · text
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>

            {/* RIGHT — Flexi HQ employee form (light panel) */}
            <div className="p-6 md:p-8 bg-background">
              <div className="text-[10px] uppercase tracking-[0.18em] text-brand-mid mb-4">
                Flexi HQ · employee form
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`right-${active}`}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, transition: { duration: duration.fast } }}
                  className="space-y-2.5"
                >
                  {activeTab.fields.map((f, i) => {
                    const isPulsing =
                      f.featured && pulseKey === activeTab.key && !reduce;
                    return (
                      <motion.div
                        key={f.label}
                        custom={i}
                        variants={reduce ? undefined : rightFieldVariants}
                        initial={reduce ? false : "initial"}
                        animate={
                          reduce
                            ? { opacity: 1, y: 0 }
                            : isPulsing
                              ? {
                                  opacity: 1,
                                  y: 0,
                                  boxShadow: pulseShadow,
                                  transition: {
                                    opacity: { delay: 0.1 + i * 0.04, duration: duration.base, ease: ease.flexiBold },
                                    y: { delay: 0.1 + i * 0.04, duration: duration.base, ease: ease.flexiBold },
                                    boxShadow: { delay: 1.0, duration: 1.2, ease: "easeInOut", times: [0, 0.5, 1] },
                                  },
                                }
                              : "animate"
                        }
                        exit={reduce ? { opacity: 0 } : "exit"}
                        className={cn(
                          "rounded-md border border-border bg-card px-3.5 py-2.5",
                          f.featured && "relative"
                        )}
                      >
                        <div className="text-[10px] uppercase tracking-wider text-neutral-gray">{f.label}</div>
                        <div className="text-sm text-neutral-text font-medium">{f.value}</div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        <p className="mt-8 text-center text-neutral-gray max-w-3xl mx-auto leading-relaxed">
          This is Flexi Meta.{" "}
          <HoverTerm
            term="SystemFlex"
            explain="The FormBuilder + WorkflowDesigner + PrintManager engine. The actual configurability runtime — what runs when your HR admin drops a field on a form."
          />{" "}
          is the engine.{" "}
          <HoverTerm
            term="Flexi HQ"
            explain="Org structure, entities, business units, cost centres, reporting lines. The blueprint SystemFlex configures against."
          />{" "}
          is the blueprint. Your HR admin owns the configuration. No developer involvement. No implementation partner required for changes.
        </p>
      </div>
    </Section>
  );
}

function HoverTerm({ term, explain }: { term: string; explain: string }) {
  return (
    <span className="relative inline-block group">
      <span className="text-brand-dark font-semibold underline decoration-brand-peach decoration-2 underline-offset-4 cursor-help">
        {term}
      </span>
      <span
        role="tooltip"
        className="invisible opacity-0 group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100 absolute left-1/2 top-full z-20 mt-2 w-64 -translate-x-1/2 rounded-lg bg-brand-dark text-white text-xs leading-relaxed px-3.5 py-2.5 shadow-xl transition-opacity duration-fast ease-flexi-snap text-left normal-case tracking-normal font-normal"
      >
        <span className="absolute left-1/2 -top-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-brand-dark" />
        {explain}
      </span>
    </span>
  );
}
