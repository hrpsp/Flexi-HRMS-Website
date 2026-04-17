import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { suites, modulesBySuite, type Suite } from "@/data/modules";
import { cn } from "@/lib/utils";

const suiteOrder: Suite[] = ["core", "talent", "engagement", "operations", "platform"];

const suiteAccent: Record<Suite, string> = {
  core: "from-brand-mid/10 to-brand-dark/5 border-brand-mid/15",
  talent: "from-brand-peach/20 to-brand-salmon/10 border-brand-peach/25",
  engagement: "from-brand-salmon/20 to-brand-peach/5 border-brand-salmon/25",
  operations: "from-brand-warning/15 to-brand-peach/5 border-brand-warning/25",
  platform: "from-brand-dark/15 to-brand-mid/5 border-brand-dark/20",
};

export function ModuleMatrix() {
  return (
    <Section>
      <SectionHeading
        align="center"
        title="Start with what you need. Add the rest when you're ready."
        description="Five suites, 28 modules, one platform. Modular adoption — not a forced migration."
      />

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {suiteOrder.map((s) => {
          const suite = suites[s];
          const mods = modulesBySuite(s);
          return (
            <div
              key={s}
              className={cn(
                "rounded-2xl border bg-gradient-to-br p-6 md:p-7 flex flex-col",
                suiteAccent[s]
              )}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <div className="text-eyebrow uppercase text-brand-mid">Suite</div>
                  <div className="text-xl font-semibold text-brand-ink mt-1 leading-tight">{suite.name}</div>
                  <div className="text-sm text-brand-gray mt-1">{suite.promise}</div>
                </div>
                <Link
                  href={suite.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-dark hover:gap-2 transition-all shrink-0"
                >
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-auto">
                {mods.slice(0, 6).map((m) => (
                  <Link
                    key={m.slug}
                    href={`/product/${m.slug}`}
                    className="group rounded-lg bg-white/70 hover:bg-white border border-border/60 hover:border-brand-dark/30 hover:shadow-sm transition-all px-3 py-2.5"
                  >
                    <div className="text-sm font-medium text-brand-ink group-hover:text-brand-dark">
                      {m.name}
                    </div>
                    <div className="text-xs text-brand-gray line-clamp-1">{m.tagline}</div>
                  </Link>
                ))}
                {mods.length > 6 && (
                  <Link
                    href={suite.href}
                    className="rounded-lg bg-brand-dark/5 hover:bg-brand-dark/10 border border-dashed border-brand-dark/30 px-3 py-2.5 text-sm font-medium text-brand-dark flex items-center justify-center"
                  >
                    + {mods.length - 6} more
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center text-sm text-brand-gray">
        28 modules. Five suites. One platform. Modular adoption.
      </div>
    </Section>
  );
}
