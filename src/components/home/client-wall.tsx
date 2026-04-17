import { Section, SectionHeading, TodoBadge } from "@/components/ui/section";
import { clients } from "@/data/clients";

export function ClientWall() {
  return (
    <Section tone="light">
      <SectionHeading
        align="center"
        title="The companies running on Flexi HRMS."
        description="Named deployments, not anonymised claims. Logos below include blue-chip enterprises across telecom, banking, manufacturing, retail, healthcare, and utilities."
      />
      <div className="mt-4 flex justify-center">
        <TodoBadge>Text placeholders — swap in client SVGs</TodoBadge>
      </div>

      <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
        {clients.map((c) => (
          <div
            key={c.name}
            className="group flex h-16 items-center justify-center rounded-lg border border-dashed border-brand-gray/30 bg-white/60 px-3 text-center text-[13px] font-medium text-brand-gray transition-all hover:border-brand-mid/40 hover:bg-white hover:text-brand-ink"
            title={`${c.name} — placeholder (real logo pending)`}
          >
            {c.name}
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-sm text-brand-gray">
        Plus 70 more organisations across Pakistan.
      </div>
    </Section>
  );
}
