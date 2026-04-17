"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Clock, FileCheck2, Moon } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const stories = [
  {
    icon: Clock,
    /** Split so "2 AM" can type-reveal while the rest is static. */
    momentHead: "Budget day, ",
    momentTyped: "2 AM",
    momentTail: ".",
    body: "WHT slabs change in the federal budget. Flexi updates for every customer overnight. Payroll runs on schedule the next morning.",
  },
  {
    icon: FileCheck2,
    moment: "EOBI audit, Tuesday 10 AM.",
    body: "Every contribution calculation traceable to employee and pay period. Export ready in minutes.",
  },
  {
    icon: Moon,
    moment: "Ramadan shift, blue-collar plant.",
    body: "Shift patterns adjust. Biometric attendance captures the change. Overtime recalculates per provincial labour law.",
  },
] as const;

/**
 * Single, spec-sanctioned text-reveal: "2 AM" types character-by-character
 * when the budget-day card scrolls into view.
 *
 * Runs once. Respects `prefers-reduced-motion` — under reduce, the full
 * text is rendered immediately.
 */
function TypewriterText({ text, trigger }: { text: string; trigger: boolean }) {
  const reduce = useReducedMotion();
  const [charCount, setCharCount] = useState(reduce ? text.length : 0);

  useEffect(() => {
    if (!trigger || reduce) return;
    if (charCount >= text.length) return;

    // 400ms total for the spec's example "2 AM" (4 chars) → ~100ms per char.
    // We distribute across the actual string length uniformly.
    const perChar = Math.max(40, Math.round(400 / text.length));
    const id = window.setTimeout(() => setCharCount((c) => c + 1), perChar);
    return () => window.clearTimeout(id);
  }, [trigger, reduce, charCount, text.length]);

  return (
    <span
      aria-label={text}
      className="text-brand-dark tabular-nums"
    >
      {text.slice(0, charCount)}
      {!reduce && charCount < text.length && (
        <span className="inline-block w-[2px] h-[0.9em] align-[-0.1em] bg-brand-dark animate-pulse motion-reduce:hidden" />
      )}
    </span>
  );
}

export function ComplianceStories() {
  const budgetRef = useRef<HTMLDivElement>(null);
  const budgetInView = useInView(budgetRef, { amount: 0.6, once: true });

  return (
    <Section tone="light">
      <SectionHeading
        align="center"
        title="Compliance you don't have to think about."
        description="EOBI. PESSI. WHT. FBR. Provincial labour statutes. Built in — updated every federal budget."
      />

      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {stories.map((s, idx) => {
          const isBudget = idx === 0;
          const Icon = s.icon;
          return (
            <div
              key={"moment" in s ? s.moment : s.momentHead + s.momentTyped}
              ref={isBudget ? budgetRef : undefined}
              className="rounded-2xl bg-card border border-border p-7 flex flex-col"
            >
              <div className="h-10 w-10 rounded-lg bg-brand-peach/30 flex items-center justify-center mb-5">
                <Icon className="h-5 w-5 text-brand-dark" />
              </div>
              <div className="text-lg font-semibold text-neutral-text">
                {"moment" in s ? (
                  s.moment
                ) : (
                  <>
                    {s.momentHead}
                    <TypewriterText text={s.momentTyped} trigger={budgetInView} />
                    {s.momentTail}
                  </>
                )}
              </div>
              <p className="mt-2 text-sm text-neutral-gray text-pretty">{s.body}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.14em] text-brand-mid">
        <span>EOBI</span>
        <span>·</span>
        <span>PESSI</span>
        <span>·</span>
        <span>WHT</span>
        <span>·</span>
        <span>FBR</span>
        <span>·</span>
        <span>WPS</span>
        <span>·</span>
        <span>Provincial labour law</span>
      </div>
    </Section>
  );
}
