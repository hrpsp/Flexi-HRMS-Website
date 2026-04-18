import { CountUp } from "@/components/ui/count-up";

const stats = [
  { value: 100, suffix: "+", label: "Client organisations" },
  { value: 35000, suffix: "+", label: "Employees managed" },
  { value: 240, suffix: "+", label: "Pakistani cities" },
  { value: 15, suffix: " years", label: "In production" },
];

export function ScaleBar() {
  return (
    <section
      className="text-white relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, rgba(91,83,130,0.4) 0%, transparent 55%), linear-gradient(180deg, #49426E 0%, #322E53 100%)",
      }}
    >
      <div className="container relative py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                <CountUp value={s.value} suffix={s.suffix} index={i} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.14em] text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 text-center text-sm md:text-base text-white/90 text-pretty max-w-3xl mx-auto">
          28 modules across five suites.{" "}
          <span className="font-semibold text-brand-peach">200+</span> Pakistani HR workflows. One platform built for the reality.
        </div>
      </div>
    </section>
  );
}
