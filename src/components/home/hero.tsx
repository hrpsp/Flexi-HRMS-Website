"use client";

import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useAnimationFrame,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Calculator,
  Moon,
  FileCheck2,
  Radio,
  Smartphone,
  FileSpreadsheet,
  TrendingUp,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ease, duration } from "@/lib/motion";
import { useConnection } from "@/hooks/useConnection";

/**
 * "The Reality" rotating screens — the right-hand panel of the split hero.
 * Each frame is a tiny functional mock of a messy Pakistani HR moment.
 */
type RealityFrame = {
  key: string;
  label: string;
  icon: typeof Calculator;
  render: () => React.ReactNode;
};

const realityFrames: RealityFrame[] = [
  {
    key: "piece-rate",
    label: "Piece-rate payroll",
    icon: Calculator,
    render: () => (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-neutral-gray">
          <span>Unit — Stitching Line 3</span>
          <span>June · Week 3</span>
        </div>
        <div className="rounded-md border border-border bg-background/80 overflow-hidden">
          <div className="grid grid-cols-[1.4fr_0.6fr_0.6fr_0.9fr] text-[10px] uppercase tracking-wider text-neutral-gray bg-neutral-light px-2.5 py-1.5">
            <span>Operator</span>
            <span className="text-right">Qty</span>
            <span className="text-right">Rate</span>
            <span className="text-right">Amount</span>
          </div>
          {[
            { n: "Rashid A.", q: 842, r: 12, a: "10,104" },
            { n: "Farzana B.", q: 913, r: 12, a: "10,956" },
            { n: "Munawar K.", q: 1047, r: 11, a: "11,517" },
            { n: "Ayesha S.", q: 786, r: 13, a: "10,218" },
          ].map((row) => (
            <div key={row.n} className="grid grid-cols-[1.4fr_0.6fr_0.6fr_0.9fr] text-[11px] text-neutral-text border-t border-border px-2.5 py-1.5">
              <span className="font-medium truncate">{row.n}</span>
              <span className="text-right tabular-nums">{row.q}</span>
              <span className="text-right tabular-nums text-neutral-gray">{row.r}</span>
              <span className="text-right tabular-nums font-semibold">PKR {row.a}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-[11px] font-medium">
          <span className="text-neutral-gray">Salary + piece + TOR in one run</span>
          <span className="text-success">PayEdge ready</span>
        </div>
      </div>
    ),
  },
  {
    key: "ramadan",
    label: "Ramadan shift",
    icon: Moon,
    render: () => (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-neutral-gray">
          <span>Plant shifts · active</span>
          <span className="text-brand-peach">Ramadan mode</span>
        </div>
        <div className="space-y-1.5">
          {[
            { s: "Shift A — Morning", o: "06:00 – 14:00", n: "04:45 – 12:00", d: "Sehri-adjusted" },
            { s: "Shift B — Mid", o: "14:00 – 22:00", n: "12:00 – 18:30", d: "Compressed" },
            { s: "Shift C — Night", o: "22:00 – 06:00", n: "18:30 – 03:30", d: "Iftar break 19:20" },
          ].map((sh) => (
            <div key={sh.s} className="rounded-md border border-border bg-background/80 px-2.5 py-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-medium text-neutral-text">{sh.s}</span>
                <span className="text-[10px] text-brand-peach font-medium">{sh.d}</span>
              </div>
              <div className="flex items-center gap-2 mt-0.5 text-[10px] text-neutral-gray">
                <span className="line-through opacity-70">{sh.o}</span>
                <span className="text-brand-dark font-semibold">→ {sh.n}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-[11px] text-neutral-gray">
          OT recalculated · provincial law applied · no custom code
        </div>
      </div>
    ),
  },
  {
    key: "eobi-export",
    label: "EOBI audit export",
    icon: FileCheck2,
    render: () => (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-neutral-gray">
          <span>Audit request · EOBI</span>
          <span>Ref 2024/Q2</span>
        </div>
        <div className="rounded-md border border-success/30 bg-success/5 px-3 py-2.5">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-success/20 flex items-center justify-center">
              <FileCheck2 className="h-3.5 w-3.5 text-success" />
            </div>
            <div className="text-sm font-semibold text-neutral-text">Export ready</div>
          </div>
          <div className="mt-1.5 text-[11px] text-neutral-text/80">
            1,247 employees · 6 pay periods · every contribution traced to CNIC
          </div>
        </div>
        <div className="space-y-1">
          {["CNIC validated · 1,247/1,247", "Contribution split · employer + employee", "Pay periods · Jan – Jun 2024", "Format · FBR/EOBI schedule"].map((l) => (
            <div key={l} className="flex items-center gap-2 text-[11px] text-neutral-text/80">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              <span>{l}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    key: "2g-queue",
    label: "2G field punch queue",
    icon: Radio,
    render: () => (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-neutral-gray">
          <span>Sahiwal warehouse · ZKTeco K40</span>
          <span className="text-warning">2G · intermittent</span>
        </div>
        <div className="rounded-md border border-border bg-background/80 divide-y divide-border">
          {[
            { t: "06:02", n: "Imran Ali", s: "synced" },
            { t: "06:14", n: "Sabir Hussain", s: "synced" },
            { t: "06:28", n: "Naveed Khan", s: "queued" },
            { t: "06:45", n: "Asma Parveen", s: "queued" },
            { t: "07:11", n: "Shahid Iqbal", s: "queued" },
          ].map((p) => (
            <div key={p.n} className="flex items-center justify-between px-2.5 py-1.5 text-[11px]">
              <div className="flex items-center gap-2.5">
                <span className="tabular-nums text-neutral-gray">{p.t}</span>
                <span className="text-neutral-text">{p.n}</span>
              </div>
              <span className={`text-[10px] font-semibold uppercase tracking-wider ${p.s === "synced" ? "text-success" : "text-warning"}`}>
                {p.s}
              </span>
            </div>
          ))}
        </div>
        <div className="text-[11px] text-neutral-gray">
          Offline queue holds 4h · ConnectCentral reconciles on reconnect
        </div>
      </div>
    ),
  },
  {
    key: "urdu-ess",
    label: "Urdu-language ESS",
    icon: Smartphone,
    render: () => (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-neutral-gray">
          <span>Employee self-service</span>
          <span>زبان · اردو</span>
        </div>
        <div className="rounded-md border border-border bg-background/80 divide-y divide-border">
          {[
            { en: "Payslip", ur: "پے سلپ", v: "Jun 2024 · download" },
            { en: "Leave balance", ur: "رخصت کا توازن", v: "Annual · 14 remaining" },
            { en: "Attendance", ur: "حاضری", v: "Jun · 22/22 days" },
            { en: "Apply leave", ur: "درخواست رخصت", v: "One-tap request" },
          ].map((row) => (
            <div key={row.en} className="px-2.5 py-1.5">
              <div className="flex items-center justify-between">
                <div className="text-[12px] font-medium text-neutral-text" dir="rtl" lang="ur">{row.ur}</div>
                <div className="text-[10px] text-neutral-gray uppercase tracking-wider">{row.en}</div>
              </div>
              <div className="text-[10px] text-neutral-gray mt-0.5">{row.v}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    key: "excel-export",
    label: "Excel, her columns",
    icon: FileSpreadsheet,
    render: () => (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-neutral-gray">
          <span>FBR filing export</span>
          <span>.xlsx · 1.4 MB</span>
        </div>
        <div className="rounded-md border border-border bg-background/80 overflow-hidden">
          <div className="grid grid-cols-5 text-[9px] uppercase tracking-wider text-neutral-gray bg-neutral-light px-2 py-1.5">
            <span>CNIC</span>
            <span>Name</span>
            <span className="text-right">Gross</span>
            <span className="text-right">WHT</span>
            <span className="text-right">Net</span>
          </div>
          {[
            { c: "35202-4*****", n: "A. Khan", g: "185,000", w: "14,250", t: "170,750" },
            { c: "42301-8*****", n: "F. Malik", g: "92,500", w: "3,125", t: "89,375" },
            { c: "34601-2*****", n: "M. Shah", g: "62,000", w: "1,033", t: "60,967" },
          ].map((row) => (
            <div key={row.c} className="grid grid-cols-5 text-[10px] text-neutral-text border-t border-border px-2 py-1">
              <span className="truncate tabular-nums">{row.c}</span>
              <span className="truncate">{row.n}</span>
              <span className="text-right tabular-nums">{row.g}</span>
              <span className="text-right tabular-nums text-neutral-gray">{row.w}</span>
              <span className="text-right tabular-nums font-medium">{row.t}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-success/15 flex items-center justify-center">
            <FileSpreadsheet className="h-3.5 w-3.5 text-success" />
          </div>
          <div className="text-[11px] text-neutral-text">
            Her columns. Her format. Her Excel.
          </div>
        </div>
      </div>
    ),
  },
];

/* ---------- Entrance variants (left column cascade) ---------- */

const eyebrowVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.flexiBold, delay: 0.08 } },
};

const h1Container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.18 } },
};

const wordVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.flexiBold } },
};

const subVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.28, ease: ease.flexiBold, delay: 0.7 } },
};

const ctaContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.78 } },
};

const ctaItem: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.24, ease: ease.flexiBold } },
};

const pitchPaneVariants: Variants = {
  hidden: { opacity: 0, x: -24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(1px)",
    transition: { duration: 0.7, ease: ease.flexiBold, delay: 0.9 },
  },
};

const realityPaneVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.flexiBold, delay: 1.1 },
  },
};

const H1_TEXT = "Not another HR app. The HR Reality app.";

export function Hero() {
  const reduce = useReducedMotion();
  const { degrade } = useConnection();
  const autoRotate = !reduce && !degrade;

  // Gentle parallax on the purple gradient mesh — moves at 0.4× scroll speed.
  // Disabled under reduced-motion or slow connection.
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, -480]);

  const [idx, setIdx] = useState(0);
  // Start the rotation timer ~1.8s late so the first frame holds while the pane slides in.
  const elapsed = useRef(-1800);
  const last = useRef<number | null>(null);

  useAnimationFrame((t) => {
    if (!autoRotate) return;
    if (last.current === null) {
      last.current = t;
      return;
    }
    const delta = t - last.current;
    last.current = t;
    elapsed.current += delta;
    if (elapsed.current > 4000) {
      elapsed.current = 0;
      setIdx((i) => (i + 1) % realityFrames.length);
    }
  });

  const frame = realityFrames[idx];
  const words = H1_TEXT.split(" ");

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <motion.div
        aria-hidden
        style={reduce || degrade ? undefined : { y: bgY }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_80%_10%,theme(colors.brand.peach/12),transparent_70%),radial-gradient(ellipse_45%_45%_at_-10%_70%,theme(colors.brand.mid/6),transparent_55%)]"
      />
      <div className="container pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={eyebrowVariants}
              className="inline-flex items-center gap-2 rounded-full border border-brand-mid/20 bg-white/70 backdrop-blur px-3 py-1 text-eyebrow uppercase text-brand-mid"
            >
              Built for the HR you actually have. Not the HR decks promise.
            </motion.span>

            <motion.h1
              variants={h1Container}
              className="text-display-xl text-balance text-neutral-text"
              aria-label={H1_TEXT}
            >
              {words.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  variants={wordVariant}
                  className="inline-block"
                  aria-hidden
                  style={{ marginRight: "0.25em" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              variants={subVariants}
              className="text-lg text-neutral-text text-pretty max-w-xl"
            >
              Piece-rate payroll. Budget-day WHT changes. Ramadan shifts. Biometric chaos across three vendors. Flexi HRMS runs the Pakistani enterprise as it actually exists — not as the brochures pretend.
            </motion.p>

            <motion.div
              variants={ctaContainer}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <motion.div variants={ctaItem}>
                <Button asChild size="lg" className="h-12 px-6">
                  <Link href="/request-demo">
                    Request a Demo <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div variants={ctaItem}>
                <Button asChild variant="ghost" size="lg" className="h-12 px-5">
                  <Link href="/product">See the 28 modules</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-7">
            <SplitRealityDemo
              frame={frame}
              idx={idx}
              autoRotate={autoRotate}
              reduce={Boolean(reduce)}
              onSelect={setIdx}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SplitRealityDemo({
  frame,
  idx,
  autoRotate,
  reduce,
  onSelect,
}: {
  frame: RealityFrame;
  idx: number;
  autoRotate: boolean;
  reduce: boolean;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-brand-peach/8 via-transparent to-brand-mid/6 blur-2xl" />
      <div className="grid md:grid-cols-2 gap-4 rounded-2xl border border-border bg-card/70 backdrop-blur p-4 shadow-xl">
        {/* LEFT — "The pitch" */}
        <motion.div
          className="relative"
          variants={pitchPaneVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-neutral-gray">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-gray/50" />
              The pitch
            </div>
            <div className="text-[10px] text-neutral-gray italic">what other HRMS products sell</div>
          </div>
          <motion.div
            animate={reduce ? { opacity: 0.78 } : { opacity: [0.65, 0.78, 0.65] }}
            transition={
              reduce
                ? undefined
                : { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }
            }
            className="rounded-xl bg-gradient-to-br from-neutral-gray/10 to-neutral-gray/5 border border-neutral-gray/20 p-5 grayscale"
          >
            <div className="text-[10px] uppercase tracking-wider text-neutral-gray mb-3">People Dashboard</div>
            <div className="grid grid-cols-2 gap-2.5 mb-4">
              <div className="rounded-md bg-white/60 border border-border px-2.5 py-2">
                <div className="text-[9px] uppercase tracking-wider text-neutral-gray">Engagement</div>
                <div className="text-lg font-bold text-neutral-text tabular-nums">87.4</div>
                <div className="text-[10px] text-neutral-gray">▲ 2.1 · target 85</div>
              </div>
              <div className="rounded-md bg-white/60 border border-border px-2.5 py-2">
                <div className="text-[9px] uppercase tracking-wider text-neutral-gray">OKR progress</div>
                <div className="text-lg font-bold text-neutral-text tabular-nums">72%</div>
                <div className="text-[10px] text-neutral-gray">Q2 cycle · on track</div>
              </div>
            </div>
            <div className="rounded-md bg-white/60 border border-border px-2.5 py-2.5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] uppercase tracking-wider text-neutral-gray">Retention trend</span>
                <TrendingUp className="h-3 w-3 text-neutral-gray" />
              </div>
              <svg viewBox="0 0 100 24" className="w-full h-6">
                <polyline
                  points="0,18 14,16 28,14 42,11 56,10 70,7 84,6 100,4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-neutral-gray/60"
                />
              </svg>
            </div>
            <div className="mt-3 flex items-center gap-2 text-[10px] text-neutral-gray">
              <Sparkles className="h-3 w-3" />
              <span>AI co-pilot · 3 insights this week</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-[10px] text-neutral-gray">
              <Users className="h-3 w-3" />
              <span>Next 1:1 · Tuesday 3pm</span>
            </div>
          </motion.div>
          <div className="mt-2 text-[10px] text-neutral-gray italic text-center">
            polished. plausible. not how HR actually runs.
          </div>
        </motion.div>

        {/* RIGHT — "The reality" */}
        <motion.div
          className="relative"
          variants={realityPaneVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-brand-dark font-semibold">
              <span className={`h-1.5 w-1.5 rounded-full bg-brand-peach ${reduce ? "" : "animate-pulse"}`} />
              The reality
            </div>
            <div className="inline-flex items-center gap-1.5 text-[10px] text-brand-mid font-medium">
              <frame.icon className="h-3 w-3" />
              {frame.label}
            </div>
          </div>
          <div className="rounded-xl bg-background border border-brand-peach/30 p-4 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={frame.key}
                initial={reduce ? false : { opacity: 0, scale: 1.04, filter: "blur(4px)" }}
                animate={
                  reduce
                    ? { opacity: 1 }
                    : {
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                        transition: { duration: 0.5, delay: 0.2, ease: ease.flexiBold },
                      }
                }
                exit={
                  reduce
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        scale: 0.96,
                        filter: "blur(4px)",
                        transition: { duration: 0.4, ease: ease.flexiIn },
                      }
                }
              >
                {frame.render()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination dots — always interactive; doubly essential when auto-rotate is off */}
          <div
            className="mt-3 flex items-center justify-center gap-1.5"
            role="tablist"
            aria-label="Reality scenario"
          >
            {realityFrames.map((f, i) => {
              const active = i === idx;
              return (
                <button
                  key={f.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`Show ${f.label}`}
                  onClick={() => onSelect(i)}
                  className={`h-1 rounded-full transition-all duration-fast ease-flexi-snap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-peach focus-visible:ring-offset-2 ${
                    active ? "w-6 bg-brand-peach" : "w-1.5 bg-neutral-gray/25 hover:bg-neutral-gray/50"
                  }`}
                />
              );
            })}
            {!autoRotate && (
              <span className="ml-2 text-[10px] text-neutral-gray/70 italic">
                tap to switch
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
