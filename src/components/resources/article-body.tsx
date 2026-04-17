/**
 * Minimal prose renderer — splits body by blank lines into blocks and
 * recognises:
 *   - `## Heading` → h2
 *   - `### Heading` → h3
 *   - `- item` lines → unordered list
 *   - `1. item` lines → ordered list
 *   - `> quote` → blockquote
 *   - everything else → paragraph with inline **bold** and `code` support
 *
 * Intentionally no markdown dependency. Phase 9 content stays simple;
 * Phase 10 (if needed) can swap this for MDX without touching page routes.
 */

import { Fragment } from "react";

function renderInline(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let lastIndex = 0;
  let i = 0;
  for (const match of Array.from(text.matchAll(pattern))) {
    const idx = match.index ?? 0;
    if (idx > lastIndex) out.push(<Fragment key={`t-${i++}`}>{text.slice(lastIndex, idx)}</Fragment>);
    const token = match[0];
    if (token.startsWith("**")) {
      out.push(<strong key={`b-${i++}`} className="font-semibold text-brand-ink">{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("`")) {
      out.push(
        <code key={`c-${i++}`} className="rounded bg-brand-light px-1.5 py-0.5 text-[0.9em] font-mono text-brand-dark">
          {token.slice(1, -1)}
        </code>
      );
    }
    lastIndex = idx + token.length;
  }
  if (lastIndex < text.length) out.push(<Fragment key={`t-${i++}`}>{text.slice(lastIndex)}</Fragment>);
  return out;
}

export function ArticleBody({ body }: { body: string }) {
  const blocks = body.trim().split(/\n{2,}/);

  return (
    <div className="space-y-5 text-brand-ink/90 leading-relaxed">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();

        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={idx} className="text-2xl md:text-3xl font-semibold text-brand-ink tracking-tight pt-6">
              {trimmed.slice(3)}
            </h2>
          );
        }
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={idx} className="text-lg md:text-xl font-semibold text-brand-ink pt-4">
              {trimmed.slice(4)}
            </h3>
          );
        }
        if (trimmed.startsWith("> ")) {
          return (
            <blockquote key={idx} className="border-l-4 border-brand-peach pl-5 py-1 text-brand-ink italic text-pretty">
              {renderInline(trimmed.slice(2))}
            </blockquote>
          );
        }
        if (/^-\s/.test(trimmed)) {
          const items = trimmed.split("\n").filter((l) => l.trim().startsWith("- "));
          return (
            <ul key={idx} className="space-y-2 list-disc pl-5 marker:text-brand-peach">
              {items.map((it, j) => (
                <li key={j} className="text-pretty">{renderInline(it.replace(/^-\s+/, ""))}</li>
              ))}
            </ul>
          );
        }
        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed.split("\n").filter((l) => /^\d+\.\s/.test(l.trim()));
          return (
            <ol key={idx} className="space-y-2 list-decimal pl-5 marker:text-brand-peach">
              {items.map((it, j) => (
                <li key={j} className="text-pretty">{renderInline(it.replace(/^\d+\.\s+/, ""))}</li>
              ))}
            </ol>
          );
        }
        return (
          <p key={idx} className="text-pretty">
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
