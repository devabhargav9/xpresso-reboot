import { clsx } from "clsx";
import { Container } from "@/components/Container";
import { Pill } from "@/components/Pill";
import { Check } from "lucide-react";
import type { ReactNode, ComponentType, SVGProps } from "react";

export type ModuleFeature = {
  title: string;
  body: string;
  badge?: string;
};

type ModuleSectionProps = {
  id: string;
  acronym: string;
  full: string;
  tagline: string;
  description: string;
  pillTone: "indigo" | "violet" | "ink" | "accent";
  tone: "indigo" | "violet" | "ink" | "accent";
  features: ModuleFeature[];
  flagship?: { title: string; body: string };
  reverse?: boolean;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  illustration?: ReactNode;
};

const TONE: Record<
  ModuleSectionProps["tone"],
  { ring: string; chip: string; bg: string; iconBg: string }
> = {
  indigo: {
    ring: "ring-indigo-100",
    chip: "bg-indigo-soft text-indigo",
    bg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    iconBg: "bg-indigo-soft text-indigo",
  },
  violet: {
    ring: "ring-violet-100",
    chip: "bg-violet-soft text-violet",
    bg: "bg-gradient-to-br from-violet-500 to-violet-600",
    iconBg: "bg-violet-soft text-violet",
  },
  ink: {
    ring: "ring-slate-200",
    chip: "bg-bg-subtle text-ink-soft",
    bg: "bg-gradient-to-br from-slate-800 to-slate-900",
    iconBg: "bg-bg-subtle text-ink-soft",
  },
  accent: {
    ring: "ring-emerald-100",
    chip: "bg-accent-soft text-accent-strong",
    bg: "bg-gradient-to-br from-emerald-500 to-accent-strong",
    iconBg: "bg-accent-soft text-accent-strong",
  },
};

export function ModuleSection({
  id,
  acronym,
  full,
  tagline,
  description,
  pillTone,
  tone,
  features,
  flagship,
  reverse,
  icon,
  illustration,
}: ModuleSectionProps) {
  const Icon = icon;
  const t = TONE[tone];
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-20 sm:py-24">
      <Container size="xl">
        <div className={clsx("grid items-start gap-14 lg:grid-cols-2 lg:gap-20", reverse && "lg:[&>*:first-child]:order-2")}>
          {/* Copy */}
          <div>
            <div className="flex items-center gap-3">
              <div
                className={clsx(
                  "inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-sm",
                  t.bg,
                )}
              >
                <Icon className="h-5 w-5" />
              </div>
              <Pill tone={pillTone} size="md">
                {acronym}
              </Pill>
              <span className="text-sm text-ink-faint">{full}</span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {tagline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              {description}
            </p>

            {flagship ? (
              <div
                className={clsx(
                  "mt-7 rounded-2xl border border-border bg-bg-muted p-5 ring-1",
                  t.ring,
                )}
              >
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
                  Flagship capability
                </div>
                <div className="mt-2 text-base font-semibold text-ink">
                  {flagship.title}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {flagship.body}
                </p>
              </div>
            ) : null}
          </div>

          {/* Right — features list or illustration */}
          <div>
            {illustration ? (
              <div className="mb-8">{illustration}</div>
            ) : null}

            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className={clsx(
                    "flex items-start gap-4 rounded-2xl border border-border bg-white p-5 transition-shadow hover:shadow-sm",
                  )}
                >
                  <span
                    className={clsx(
                      "mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl",
                      t.iconBg,
                    )}
                  >
                    <Check className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[15px] font-semibold text-ink">
                        {feature.title}
                      </h3>
                      {feature.badge ? (
                        <span
                          className={clsx(
                            "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em]",
                            t.chip,
                          )}
                        >
                          {feature.badge}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                      {feature.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
