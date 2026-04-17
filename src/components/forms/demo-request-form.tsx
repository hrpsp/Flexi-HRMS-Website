"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

const industryOptions = [
  "Manufacturing",
  "Telecom",
  "BFSI",
  "Retail / FMCG",
  "Healthcare",
  "Utilities",
  "Real Estate / Construction",
  "Other",
];

const headcountOptions = [
  "Under 250",
  "250 – 500",
  "500 – 1,000",
  "1,000 – 2,500",
  "2,500 – 5,000",
  "5,000 – 10,000",
  "10,000+",
];

const roleOptions = [
  "CHRO / Head of HR",
  "HR Director / GM HR",
  "HR Manager",
  "CFO / Finance Head",
  "CIO / CTO / IT Head",
  "CEO / Managing Director",
  "Other",
];

export function DemoRequestForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Submission failed. Please try again.");
      }
      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Unexpected error.");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-success/30 bg-success/5 p-8 text-center">
        <div className="mx-auto h-14 w-14 rounded-full bg-success/20 flex items-center justify-center">
          <CheckCircle2 className="h-7 w-7 text-success" />
        </div>
        <h2 className="mt-5 text-xl font-semibold text-neutral-text">Request received.</h2>
        <p className="mt-2 text-sm text-neutral-gray max-w-sm mx-auto">
          A Flexi specialist will reach out within one business day to schedule your demo. In the meantime, feel free to explore the product pages or review the compliance detail.
        </p>
        <div className="mt-6">
          <Button variant="ghost" onClick={() => setState("idle")} className="text-brand-dark">
            Submit another request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {state === "error" && error && (
        <div className="rounded-lg border border-error/30 bg-error/10 px-4 py-3 text-sm text-error flex items-start gap-2">
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Full name" name="name" required placeholder="e.g. Ayesha Tariq" autoComplete="name" />
        <Field label="Work email" name="email" type="email" required placeholder="you@company.com" autoComplete="email" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Phone" name="phone" type="tel" required placeholder="+92 300 1234567" autoComplete="tel" />
        <Field label="Company" name="company" required placeholder="Company name" autoComplete="organization" />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <SelectField label="Industry" name="industry" required options={industryOptions} />
        <SelectField label="Employee count" name="headcount" required options={headcountOptions} />
        <SelectField label="Your role" name="role" required options={roleOptions} />
      </div>

      <Field
        label="What would you like to see in the demo?"
        name="notes"
        textarea
        placeholder="Modules you're evaluating, current HR system if any, specific pain points, timeline."
      />

      <label className="flex items-start gap-2.5 text-sm text-neutral-gray">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-neutral-gray/40 text-brand-dark focus:ring-brand-dark focus:ring-offset-0"
        />
        <span>
          I agree to be contacted by Flexi IT Services regarding this demo request. Read our{" "}
          <a href="/legal/privacy" className="underline underline-offset-2 text-brand-dark hover:text-brand-mid">
            privacy notice
          </a>
          .
        </span>
      </label>

      <Button
        type="submit"
        size="lg"
        disabled={state === "submitting"}
        className="w-full h-12 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Submitting
          </>
        ) : (
          <>
            Request a Demo <ArrowRight className="ml-1 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  textarea?: boolean;
}) {
  const base =
    "w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-neutral-text placeholder:text-neutral-gray/70 focus:border-brand-peach focus:ring-2 focus:ring-brand-peach/25 focus:outline-none transition-colors";
  return (
    <label className="block">
      <span className={cn("block text-xs font-medium text-neutral-text mb-1.5", required && "after:content-['*'] after:text-warning after:ml-0.5")}>{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} placeholder={placeholder} required={required} className={cn(base, "resize-y min-h-[100px]")} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} required={required} autoComplete={autoComplete} className={base} />
      )}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className={cn("block text-xs font-medium text-neutral-text mb-1.5", required && "after:content-['*'] after:text-warning after:ml-0.5")}>{label}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-neutral-text focus:border-brand-peach focus:ring-2 focus:ring-brand-peach/25 focus:outline-none"
      >
        <option value="" disabled>Select one</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
