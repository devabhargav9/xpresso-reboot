import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Pill } from "@/components/Pill";
import { CheckCircle2, Sparkles } from "lucide-react";

const TRUSTED = ["NAAC", "NIRF", "NBA", "AISHE", "UGC", "AICTE", "DPDP 2023", "ABC"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-aurora">
      <div className="absolute inset-0 bg-dotted opacity-50" aria-hidden />
      <div
        className="absolute -top-32 right-1/4 h-[420px] w-[420px] rounded-full bg-emerald-200/40 blur-3xl"
        aria-hidden
      />
      <Container size="xl" className="relative">
        <div className="grid items-center gap-16 py-20 lg:grid-cols-[1.15fr_1fr] lg:py-28">
          {/* Left — copy */}
          <div>
            <Pill tone="accent" size="md" className="mb-6">
              <Sparkles className="h-3 w-3" />
              Built for Indian higher education
            </Pill>

            <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[60px] lg:leading-[1.04]">
              One platform.{" "}
              <span className="relative">
                <span className="relative z-10">Three modules.</span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-3 -skew-x-3 bg-accent/30"
                  aria-hidden
                />
              </span>{" "}
              One spine.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              Xpresso replaces your ERP, LMS, AI tutor, NAAC consultant and
              website agency with one integrated product. Operations, content
              and learning — flowing in real time, with compliance for{" "}
              <span className="font-medium text-ink">NAAC, NIRF, NBA, AISHE, UGC and AICTE</span>{" "}
              built in.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Request a demo
              </Button>
              <Button href="/product" variant="outline" size="lg">
                Explore the product
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                Hosted in AWS Mumbai
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                DPDP compliant from day one
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                No vendor lock-in
              </div>
            </div>
          </div>

          {/* Right — pyramid mark */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <PyramidMark />
          </div>
        </div>

        {/* Trust strip */}
        <div className="relative -mb-10 rounded-2xl border border-border bg-white/80 px-6 py-5 shadow-sm backdrop-blur md:-mb-14">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Built for India's accreditation & regulatory landscape
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-ink-soft">
              {TRUSTED.map((label) => (
                <span key={label} className="inline-flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-accent-strong" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PyramidMark() {
  return (
    <div className="relative aspect-square w-full">
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-100 via-white to-indigo-50 opacity-90"
        aria-hidden
      />

      {/* Pyramid */}
      <div className="relative flex h-full flex-col items-center justify-end gap-2 p-6 pb-10 sm:p-10 sm:pb-14">
        {/* Top band — Compliance */}
        <div className="w-full text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-strong">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-strong" />
            Compliance Autopilot
          </div>
        </div>

        {/* Apex — ALS */}
        <div className="relative flex h-20 w-3/4 items-center justify-center bg-gradient-to-b from-indigo-500 to-indigo-600 pyramid-apex sm:h-24">
          <div className="text-center text-white">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-80">
              ALS
            </div>
            <div className="text-[11px] font-medium opacity-95">
              Adaptive learning
            </div>
          </div>
        </div>

        {/* Middle — EMS */}
        <div className="relative flex h-16 w-[88%] items-center justify-center bg-gradient-to-b from-violet-500 to-violet-600 pyramid-layer sm:h-20">
          <div className="text-center text-white">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-80">
              EMS
            </div>
            <div className="text-[11px] font-medium opacity-95">
              Education management
            </div>
          </div>
        </div>

        {/* Base — IMS */}
        <div className="relative flex h-16 w-full items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900 pyramid-layer sm:h-20">
          <div className="text-center text-white">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-80">
              IMS
            </div>
            <div className="text-[11px] font-medium opacity-95">
              Institution management
            </div>
          </div>
        </div>

        {/* Bottom band — ODP */}
        <div className="w-full text-center pt-2">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-indigo">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo" />
            On-Demand Programs
          </div>
        </div>
      </div>
    </div>
  );
}
