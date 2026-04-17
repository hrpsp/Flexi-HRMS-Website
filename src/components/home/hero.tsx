"use client";

import Link from "next/link";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Play, GripVertical, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

// Three industry presets — the hero animates through them on loop.
const frames = [
  {
    industry: "Manufacturing",
    adminFields: ["Employee Code", "Reporting Plant", "Shift Type", "Union Membership", "PPE Size"],
    formFields: [
      { label: "Employee code", value: "MFG-04821" },
      { label: "Reporting plant", value: "Faisalabad — Unit 2" },
      { label: "Shift type", value: "Rotating — A/B/C" },
      { label: "Union membership", value: "CBA recognised" },
      { label: "PPE size", value: "L · Helmet 58cm" },
    ],
  },
  {
    industry: "Telecom",
    adminFields: ["Employee Code", "Tower Region", "SIM Allocation", "Security Clearance", "Field / Office"],
    formFields: [
      { label: "Employee code", value: "TEL-17209" },
      { label: "Tower region", value: "North — Region 3" },
      { label: "SIM allocation", value: "Data + Voice, Postpaid" },
      { label: "Security clearance", value: "Level 2 — Approved" },
      { label: "Deployment", value: "Field engineer" },
    ],
  },
  {
    industry: "Retail",
    adminFields: ["Employee Code", "Store Code", "Shift Pattern", "Product Category", "Reporting Area"],
    formFields: [
      { label: "Employee code", value: "RTL-38104" },
      { label: "Store code", value: "LHR-212 · Gulberg" },
      { label: "Shift pattern", value: "Split — 10–2, 5–10" },
      { label: "Product category", value: "Women's footwear" },
      { label: "Reporting area", value: "Central Punjab" },
    ],
  },
];

export function Hero() {
  const [frameIdx, setFrameIdx] = useState(0);
  const elapsed = useRef(0);
  const last = useRef<number | null>(null);

  useAnimationFrame((t) => {
    if (last.current === null) last.current = t;
    const delta = t - last.current;
    last.current = t;
    elapsed.current += delta;
    // Switch frame every ~4.5s
    if (elapsed.current > 4500) {
      elapsed.current = 0;
      setFrameIdx((i) => (i + 1) % frames.length);
    }
  });

  const frame = frames[frameIdx];

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_80%_10%,theme(colors.brand.peach/25),transparent_60%),radial-gradient(ellipse_40%_40%_at_10%_80%,theme(colors.brand.mid/18),transparent_60%)]"
      />
      <div className="container pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-mid/20 bg-white/70 backdrop-blur px-3 py-1 text-eyebrow uppercase text-brand-mid">
              Pakistan&apos;s enterprises run on Flexi HRMS
            </span>
            <h1 className="text-display-xl text-balance text-brand-ink">
              The HRMS that configures to your company. Not the other way around.
            </h1>
            <p className="text-lg text-brand-gray text-pretty max-w-xl">
              Flexi HRMS runs hire-to-retire for 100+ Pakistani enterprises — 35,000+ employees across 240+ cities. Configurable per tenant without code. Compliance-native since 2011.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild size="lg" className="bg-brand-peach text-brand-dark hover:bg-brand-peach/90 h-12 px-6">
                <Link href="/request-demo">
                  Request a Demo <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-brand-dark hover:bg-brand-light h-12 px-5">
                <Link href="#meta">
                  <Play className="mr-1 h-4 w-4" /> See it in 90 seconds
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <HeroDemo frameIdx={frameIdx} frame={frame} />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroDemo({
  frameIdx,
  frame,
}: {
  frameIdx: number;
  frame: (typeof frames)[number];
}) {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-brand-peach/20 via-transparent to-brand-mid/10 blur-2xl" />
      <div className="grid md:grid-cols-2 gap-4 rounded-2xl border border-border bg-card/70 backdrop-blur p-4 shadow-xl">
        {/* Admin panel — Flexi Meta */}
        <div className="rounded-xl bg-brand-dark text-white p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[10px] uppercase tracking-[0.18em] text-brand-peach">Flexi Meta · admin</div>
            <div className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-brand-peach" />
            </div>
          </div>
          <div className="text-xs text-white/50 mb-3">Onboarding form — {frame.industry}</div>
          <ul className="space-y-1.5">
            {frame.adminFields.map((f, i) => (
              <motion.li
                key={`${frameIdx}-${i}-${f}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2 rounded-md bg-white/5 border border-white/10 px-2.5 py-2 text-xs"
              >
                <GripVertical className="h-3.5 w-3.5 text-white/40" />
                <span className="flex-1">{f}</span>
                <span className="text-[10px] text-brand-peach uppercase tracking-wider">field</span>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="flex items-center gap-2 rounded-md border border-dashed border-white/20 px-2.5 py-2 text-xs text-white/40"
            >
              <Plus className="h-3.5 w-3.5" /> Drop a new field
            </motion.li>
          </ul>
        </div>

        {/* Employee form — ESS */}
        <div className="rounded-xl bg-background border border-border p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[10px] uppercase tracking-[0.18em] text-brand-mid">Employee · ESS</div>
            <span className="text-[10px] text-brand-success font-medium">● Live</span>
          </div>
          <div className="text-sm font-semibold text-brand-ink mb-3">New hire — {frame.industry}</div>
          <div className="space-y-2.5">
            {frame.formFields.map((field, i) => (
              <motion.div
                key={`${frameIdx}-${i}-${field.label}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + 0.08 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-md border border-border bg-card px-3 py-2"
              >
                <div className="text-[10px] uppercase tracking-wider text-brand-gray">{field.label}</div>
                <div className="text-sm text-brand-ink font-medium">{field.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-1.5 mt-4">
        {frames.map((f, i) => (
          <div
            key={f.industry}
            className={`h-1 rounded-full transition-all ${
              i === frameIdx ? "w-8 bg-brand-dark" : "w-2 bg-brand-gray/30"
            }`}
          />
        ))}
        <span className="ml-3 text-[11px] uppercase tracking-[0.18em] text-brand-gray">
          {frame.industry}
        </span>
      </div>
    </div>
  );
}
