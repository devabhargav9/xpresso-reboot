"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const ROLES = [
  "Principal / Director",
  "Vice Principal / Dean",
  "IT Head / Systems",
  "IQAC Coordinator",
  "Placement / TPO",
  "Faculty",
  "Investor / Partner",
  "Other",
];

const SIZES = [
  "< 500 students",
  "500 – 1,000",
  "1,000 – 2,000",
  "2,000 – 5,000",
  "5,000+",
];

const INTERESTS = [
  "Institution operations (IMS)",
  "Curriculum + content (EMS)",
  "Adaptive learning + AI tutor (ALS)",
  "Compliance Autopilot (NAAC / NIRF / NBA)",
  "Career Hub + placements",
  "Full integrated platform",
  "Just exploring",
];

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // In production this hits a real endpoint (formspree, hubspot, etc).
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-accent/30 bg-accent-soft/40 p-10 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-accent-strong ring-1 ring-emerald-200">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight text-ink">
          We'll be in touch within one business day.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
          One of the founders will reach out personally to schedule a 30-minute
          demo. In the meantime, feel free to explore the product or read about
          our team.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
          <a
            href="/product"
            className="rounded-lg border border-border-strong bg-white px-4 py-2 font-medium text-ink hover:bg-bg-muted"
          >
            Explore the product
          </a>
          <a
            href="/about"
            className="rounded-lg border border-border-strong bg-white px-4 py-2 font-medium text-ink hover:bg-bg-muted"
          >
            Meet the team
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-white p-7 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Your name" required>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={InputClass}
            placeholder="Dr. Suresh Kumar"
          />
        </Field>
        <Field id="email" label="Work email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={InputClass}
            placeholder="principal@bharatheng.ac.in"
          />
        </Field>
        <Field id="institution" label="Institution name" required>
          <input
            id="institution"
            name="institution"
            type="text"
            required
            className={InputClass}
            placeholder="Bharat Engineering College"
          />
        </Field>
        <Field id="phone" label="Phone (optional)">
          <input
            id="phone"
            name="phone"
            type="tel"
            className={InputClass}
            placeholder="+91 98765 43210"
          />
        </Field>
        <Field id="role" label="Your role" required>
          <select id="role" name="role" required className={InputClass} defaultValue="">
            <option value="" disabled>Select your role</option>
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </Field>
        <Field id="size" label="Institution size" required>
          <select id="size" name="size" required className={InputClass} defaultValue="">
            <option value="" disabled>Pick a band</option>
            {SIZES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
        <Field id="interest" label="Most interested in" required>
          <select id="interest" name="interest" required className={InputClass} defaultValue="">
            <option value="" disabled>Pick an area</option>
            {INTERESTS.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </Field>
        <Field id="timeline" label="Timeline">
          <select id="timeline" name="timeline" className={InputClass} defaultValue="">
            <option value="" disabled>Pick a timeline</option>
            <option>This quarter</option>
            <option>Next 6 months</option>
            <option>This academic year</option>
            <option>Just exploring</option>
          </select>
        </Field>
      </div>

      <Field id="message" label="What would you like to see in the demo? (optional)">
        <textarea
          id="message"
          name="message"
          rows={4}
          className={InputClass}
          placeholder="e.g. attendance + parent comms first, then walk through how compliance evidence is assembled."
        />
      </Field>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-ink-muted">
          We will only use this to schedule your demo. No marketing list, ever.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-ink px-6 text-[15px] font-medium text-white shadow-sm transition-colors hover:bg-ink-soft disabled:cursor-not-allowed disabled:bg-ink/60"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>Request my demo</>
          )}
        </button>
      </div>
    </form>
  );
}

const InputClass =
  "w-full rounded-xl border border-border bg-bg-muted/40 px-3.5 py-2.5 text-sm text-ink shadow-inner placeholder:text-ink-faint focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 transition";

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5 first:mt-0">
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
        {label} {required ? <span className="text-accent-strong">*</span> : null}
      </label>
      {children}
    </div>
  );
}
