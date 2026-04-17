import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, TodoBadge } from "@/components/ui/section";
import { formatDate } from "@/components/resources/resource-card";
import { ArticleBody } from "@/components/resources/article-body";
import { categoryMeta, type Resource } from "@/data/resources";

export function ArticleLayout({ r }: { r: Resource }) {
  const cat = categoryMeta[r.category];
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,theme(colors.brand.peach/22),transparent_55%)]"
        />
        <div className="container pt-12 pb-8 lg:pt-16 lg:pb-10">
          <Link
            href={cat.href}
            className="inline-flex items-center gap-1.5 text-sm text-brand-gray hover:text-brand-dark"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to {cat.label}
          </Link>

          <div className="mt-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center rounded-full bg-brand-peach/25 border border-brand-peach/40 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brand-dark">
                {cat.label}
              </span>
              {r.tags.map((t) => (
                <span key={t} className="inline-flex items-center rounded-full bg-brand-light border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider text-brand-mid">
                  {t}
                </span>
              ))}
              {r.isSeed && <TodoBadge>Seed post — full content in Phase 9</TodoBadge>}
            </div>
            <h1 className="text-display-xl text-brand-ink text-balance">{r.title}</h1>
            <p className="mt-4 text-lg text-brand-gray text-pretty">{r.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-brand-gray">
              {r.author && <span>{r.author}</span>}
              <span>{formatDate(r.publishedAt)}</span>
              {r.updatedAt && <span>Updated {formatDate(r.updatedAt)}</span>}
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {r.readTimeMinutes} min read
              </span>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 mb-10">
            <div className="text-eyebrow uppercase text-brand-mid mb-2">Summary</div>
            <p className="text-base text-brand-ink/90 text-pretty">{r.excerpt}</p>
          </div>

          <article className="max-w-none">
            <ArticleBody body={r.body} />
          </article>
        </div>
      </Section>

      <section className="bg-brand-dark text-white">
        <div className="container py-14 md:py-16 text-center">
          <h2 className="text-display-md text-balance max-w-2xl mx-auto">
            Want to see the product these ideas came from?
          </h2>
          <div className="mt-6">
            <Button asChild className="bg-brand-peach text-brand-dark hover:bg-brand-peach/90 h-11 px-6">
              <Link href="/request-demo">
                Request a Demo <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
