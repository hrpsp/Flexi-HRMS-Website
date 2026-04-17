import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { TodoBadge } from "@/components/ui/section";
import type { Resource } from "@/data/resources";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-PK", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function ResourceCard({ r, hrefBase = "/resources/blog" }: { r: Resource; hrefBase?: string }) {
  const href = `${hrefBase}/${r.slug}`;
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-border bg-card hover:border-brand-dark/30 hover:shadow-md transition-all p-6 flex flex-col"
    >
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex flex-wrap gap-1.5">
          {r.tags.slice(0, 2).map((t) => (
            <span key={t} className="inline-flex items-center rounded-full bg-brand-light border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider text-brand-mid">
              {t}
            </span>
          ))}
        </div>
        {r.isSeed && <TodoBadge>Seed — populate in Phase 9</TodoBadge>}
      </div>
      <h3 className="text-lg font-semibold text-brand-ink group-hover:text-brand-dark text-pretty">{r.title}</h3>
      <p className="mt-2 text-sm text-brand-gray line-clamp-3 text-pretty">{r.description}</p>
      <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-xs text-brand-gray">
        <span>{formatDate(r.publishedAt)}</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3 w-3" /> {r.readTimeMinutes} min read
        </span>
      </div>
      <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-dark group-hover:gap-1.5 transition-all">
        Read <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </Link>
  );
}

export { formatDate };
