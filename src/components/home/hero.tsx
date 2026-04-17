"use client";

import Link from "next/link";
import { motion, AnimatePresence, useAnimationFrame } from "framer-motion";
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
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-brand-gray">
          <span>Unit — Stitching Line 3</span>
          <span>June · Week 3</span>
        </div>
        <div className="rounded-md border border-border bg-background/80 overflow-hidden">
          <div className="grid grid-cols-[1.4fr_0.6fr_0.6fr_0.9fr] text-[10px] uppercase tracking-wider text-brand-gray bg-brand-light px-2.5 py-1.5">
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
            <div key={row.n} className="grid grid-cols-[1.4fr_0.6fr_0.6fr_0.9fr] text-[11px] text-brand-ink border-t border-border px-2.5 py-1.5">
              <span className="font-medium truncate">{row.n}</span>
              <span className="text-right tabular-nums">{row.q}</span>
              <span className="text-right tabular-nums text-brand-gray">{row.r}</span>
              <span className="text-right tabular-nums font-semibold">PKR {row.a}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-[11px] font-medium">
          <span className="text-brand-gray">Salary + piece + TOR in one run</span>
          <span className="text-brand-success">PayEdge ready</span>
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
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-brand-gray">
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
                <span className="font-medium text-brand-ink">{sh.s}</span>
                <span className="text-[10px] text-brand-peach font-medium">{sh.d}</span>
              </div>
              <div className="flex items-center gap-2 mt-0.5 text-[10px] text-brand-gray">
                <span className="line-through opacity-70">{sh.o}</span>
                <span className="text-brand-dark font-semibold">→ {sh.n}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-[11px] text-brand-gray">
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
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-brand-gray">
          <span>Audit request · EOBI</span>
          <span>Ref 2024/Q2</span>
        </div>
        <div className="rounded-md border border-brand-success/30 bg-brand-success/5 px-3 py-2.5">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-brand-success/20 flex items-center justify-center">
              <FileCheck2 className="h-3.5 w-3.5 text-brand-success" />
            </div>
            <div className="text-sm font-semibold text-brand-ink">Export ready</div>
          </div>
          <div className="mt-1.5 text-[11px] text-brand-ink/80">
            1,247 employees · 6 pay periods · every contribution traced to CNIC
          </div>
        </div>
        <div className="space-y-1">
          {["CNIC validated · 1,247/1,247", "Contribution split · employer + employee", "Pay periods · Jan – Jun 2024", "Format · FBR/EOBI schedule"].map((l) => (
            <div key={l} className="flex items-center gap-2 text-[11px] text-brand-ink/80">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-success" />
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
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-brand-gray">
          <span>Sahiwal warehouse · ZKTeco K40</span>
          <span className="text-brand-warning">2G · intermittent</span>
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
                <span className="tabular-nums text-brand-gray">{p.t}</span>
                <span className="text-brand-ink">{p.n}</span>
              </div>
              <span className={`text-[10px] font-semibold uppercase tracking-wider ${p.s === "synced" ? "text-brand-success" : "text-brand-warning"}`}>
                {p.s}
              </span>
            </div>
          ))}
        </div>
        <div className="text-[11px] text-brand-gray">
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
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-brand-gray">
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
                <div className="text-[12px] font-medium text-brand-ink" dir="rtl" lang="ur">{row.ur}</div>
                <div className="text-[10px] text-brand-gray uppercase tracking-wider">{row.en}</div>
              </div>
              <div className="text-[10px] text-brand-gray mt-0.5">{row.v}</div>
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
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-brand-gray">
          <span>FBR filing export</span>
          <span>.xlsx · 1.4 MB</span>
        </div>
        <div className="rounded-md border border-border bg-background/80 overflow-hidden">
          <div className="grid grid-cols-5 text-[9px] uppercase tracking-wider text-brand-gray bg-brand-light px-2 py-1.5">
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
            <div key={row.c} className="grid grid-cols-5 text-[10px] text-brand-ink border-t border-border px-2 py-1">
              <span className="truncate tabular-nums">{row.c}</span>
              <span className="truncate">{row.n}</span>
              <span className="text-right tabular-nums">{row.g}</span>
              <span className="text-right tabular-nums text-brand-gray">{row.w}</span>
              <span className="text-right tabular-nums font-medium">{row.t}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-brand-success/15 flex items-center justify-center">
            <FileSpreadsheet className="h-3.5 w-3.5 text-brand-success" />
          </div>
          <div className="text-[11px] text-brand-ink">
            Her columns. Her format. Her Excel.
          </div>
        </div>
      </div>
    ),
  },
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const elapsed = useRef(0);
  const last = useRef<number | null>(null);

  useAnimationFrame((t) => {
    if (last.current === null) last.current = t;
    const delta = t - last.current;
    last.current = t;
    elapsed.current += delta;
    if (elapsed.current > 4000) {
      elapsed.current = 0;
      setIdx((i) => (i + 1) % realityFrames.length);
    }
  });

  const frame = realityFrames[idx];

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
              Built for the HR you actually have. Not the HR decks promise.
            </span>
            <h1 className="text-display-xl text-balance text-brand-ink">
              Not another HR app. The HR Reality app.
            </h1>
            <p className="text-lg text-brand-gray text-pretty max-w-xl">
              Piece-rate payroll. Budget-day WHT changes. Ramadan shifts. Biometric chaos across three vendors. Flexi HRMS runs the Pakistani enterprise as it actually exists — not as the brochures pretend.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild size="lg" className="bg-brand-peach text-brand-dark hover:bg-brand-peach/90 h-12 px-6">
                <Link href="/request-demo">
                  Request a Demo <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-brand-dark hover:bg-brand-light h-12 px-5">
                <Link href="/product">See the 28 modules</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <SplitRealityDemo frame={frame} idx={idx} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SplitRealityDemo({ frame, idx }: { frame: RealityFrame; idx: number }) {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-brand-peach/20 via-transparent to-brand-mid/10 blur-2xl" />
      <div className="grid md:grid-cols-2 gap-4 rounded-2xl border border-border bg-card/70 backdrop-blur p-4 shadow-xl">
        {/* LEFT — "The pitch": polished, greyscale, idealised */}
        <div className="relative">
          <div className="flex items-center justify-between mb-3">
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-brand-gray">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gray/50" />
              The pitch
            </div>
            <div className="text-[10px] text-brand-gray/70 italic">what other HRMS products sell</div>
          </div>
          <motion.div
            animate={{ opacity: [0.65, 0.78, 0.65] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-xl bg-gradient-to-br from-brand-gray/10 to-brand-gray/5 border border-brand-gray/20 p-5 grayscale"
          >
            <div className="text-[10px] uppercase tracking-wider text-brand-gray mb-3">People Dashboard</div>
            <div className="grid grid-cols-2 gap-2.5 mb-4">
              <div className="rounded-md bg-white/60 border border-border px-2.5 py-2">
                <div className="text-[9px] uppercase tracking-wider text-brand-gray">Engagement</div>
                <div className="text-lg font-bold text-brand-ink tabular-nums">87.4</div>
                <div className="text-[10px] text-brand-gray">▲ 2.1 · target 85</div>
              </div>
              <div className="rounded-md bg-white/60 border border-border px-2.5 py-2">
                <div className="text-[9px] uppercase tracking-wider text-brand-gray">OKR progress</div>
                <div className="text-lg font-bold text-brand-ink tabular-nums">72%</div>
                <div className="text-[10px] text-brand-gray">Q2 cycle · on track</div>
              </div>
            </div>
            <div className="rounded-md bg-white/60 border border-border px-2.5 py-2.5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] uppercase tracking-wider text-brand-gray">Retention trend</span>
                <TrendingUp className="h-3 w-3 text-brand-gray" />
              </div>
              <svg viewBox="0 0 100 24" className="w-full h-6">
                <polyline
                  points="0,18 14,16 28,14 42,11 56,10 70,7 84,6 100,4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-brand-gray/60"
                />
              </svg>
            </div>
            <div className="mt-3 flex items-center gap-2 text-[10px] text-brand-gray">
              <Sparkles className="h-3 w-3" />
              <span>AI co-pilot · 3 insights this week</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-[10px] text-brand-gray">
              <Users className="h-3 w-3" />
              <span>Next 1:1 · Tuesday 3pm</span>
            </div>
          </motion.div>
          <div className="mt-2 text-[10px] text-brand-gray/60 italic text-center">
            polished. plausible. not how HR actually runs.
          </div>
        </div>

        {/* RIGHT — "The reality": live, rotating real scenarios */}
        <div className="relative">
          <div className="flex items-center justify-between mb-3">
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-brand-peach font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-peach animate-pulse" />
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
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {frame.render()}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-3 flex items-center justify-center gap-1.5">
            {realityFrames.map((f, i) => (
              <div
                key={f.key}
                className={`h-1 rounded-full transition-all ${
                  i === idx ? "w-6 bg-brand-peach" : "w-1.5 bg-brand-gray/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
