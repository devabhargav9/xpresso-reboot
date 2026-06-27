import { Section, SectionHeading } from "@/components/Section";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { CheckCircle2, Sparkles } from "lucide-react";

const FRAMEWORKS = [
  { name: "NAAC", coverage: "Criterion-wise coverage" },
  { name: "NIRF", coverage: "Outcomes + placement" },
  { name: "NBA", coverage: "OBE + CO–PO live" },
  { name: "AISHE", coverage: "Full reporting" },
  { name: "UGC", coverage: "Full reporting" },
  { name: "AICTE", coverage: "Full reporting" },
];

const REPLACES = [
  {
    label: "NAAC consultants",
    amount: "₹15 – 50 L / cycle",
    detail: "Live AQAR / SSR / SAR builders replace the manual consultant workflow.",
  },
  {
    label: "Manual evidence assembly",
    amount: "60 – 100 hours / criterion",
    detail: "Evidence is collected continuously from operational data — not at audit time.",
  },
  {
    label: "Spreadsheet OBE / CO–PO tracking",
    amount: "30+ hours / semester",
    detail: "Live attainment from real student data, not faculty-filled spreadsheets.",
  },
];

export function Compliance() {
  return (
    <Section tone="ink" paddingY="xl" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-aurora-dark opacity-40" aria-hidden />

      <Container size="xl" className="relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              inverted
              eyebrow="Compliance Autopilot"
              title="Stop preparing for NAAC. Live in NAAC-ready state."
              description="Every operational event becomes evidence automatically. Criterion coverage is live, not a one-off PDF. AQAR / SSR / SAR builders are continuous, not annual scrambles."
            />

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/product#compliance" variant="secondary" size="lg" withArrow>
                See how it works
              </Button>
              <span className="text-sm text-white/60">
                Replaces NAAC consultants — saves ₹15 – 50 L / cycle
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                Frameworks covered
              </h3>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300">
                <Sparkles className="h-3 w-3" />
                Live coverage
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {FRAMEWORKS.map((f) => (
                <div
                  key={f.name}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left transition-colors hover:bg-white/[0.06]"
                >
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span className="text-base font-semibold">{f.name}</span>
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.14em] text-white/60">
                    {f.coverage}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                What it replaces
              </h4>
              {REPLACES.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm"
                >
                  <div>
                    <div className="font-medium text-white">{item.label}</div>
                    <div className="mt-1 text-white/60">{item.detail}</div>
                  </div>
                  <div className="shrink-0 text-right text-xs font-semibold text-emerald-300">
                    {item.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
