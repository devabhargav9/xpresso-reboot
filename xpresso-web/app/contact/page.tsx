import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Pill } from "@/components/Pill";
import { DemoForm } from "@/components/contact/DemoForm";
import {
  Mail,
  ShieldCheck,
  CalendarClock,
  HandHeart,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Request a demo",
  description:
    "Book a 30-minute Xpresso demo with one of the founders. We'll walk you through every module against your data.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-aurora">
        <div className="absolute inset-0 bg-dotted opacity-50" aria-hidden />

        <Container size="xl" className="relative">
          <div className="grid items-start gap-14 py-20 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:py-24">
            {/* Left — copy */}
            <div>
              <Pill tone="accent" size="md" className="mb-6">
                <Sparkles className="h-3 w-3" />
                Now onboarding launch partners
              </Pill>

              <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[54px] lg:leading-[1.05]">
                See Xpresso end-to-end. With your data.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
                A 30-minute call with one of the founders. We walk you through
                every module, your stakeholder dashboards and the Compliance
                Autopilot — and scope a deployment that fits your institution.
              </p>

              <div className="mt-10 space-y-5">
                <Step number={1} title="Tell us about your institution">
                  Fill the form on the right — name, role, size, what you're
                  most interested in. Takes 90 seconds.
                </Step>
                <Step number={2} title="We schedule a 30-min call">
                  One of the founders reaches out within one business day to
                  book a slot that works for you.
                </Step>
                <Step number={3} title="We walk you through everything">
                  Live demo against your actual data and courses. You leave
                  with a scoped deployment and onboarding plan.
                </Step>
              </div>

              <div className="mt-12 rounded-2xl border border-border bg-white/80 p-6 backdrop-blur">
                <InfoBlock icon={Mail} label="Email">
                  <a
                    href="mailto:info@x-presso.in"
                    className="transition-colors hover:text-accent-strong"
                  >
                    info@x-presso.in
                  </a>
                </InfoBlock>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-muted">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-accent-strong" />
                  AWS Mumbai · DPDP compliant
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarClock className="h-4 w-4 text-accent-strong" />
                  Reply within 1 business day
                </span>
                <span className="inline-flex items-center gap-2">
                  <HandHeart className="h-4 w-4 text-accent-strong" />
                  Founders on every demo
                </span>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:sticky lg:top-24">
              <DemoForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Step({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ink text-sm font-semibold text-white shadow-sm">
        {number}
      </span>
      <div>
        <h3 className="text-base font-semibold text-ink">{title}</h3>
        <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-muted">
          {children}
        </p>
      </div>
    </div>
  );
}

function InfoBlock({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Mail;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <div className="mt-1 text-sm font-medium text-ink">{children}</div>
    </div>
  );
}
