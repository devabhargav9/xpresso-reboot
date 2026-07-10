import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { ComplianceMatrix } from "@/components/ComplianceMatrix";
import { Pill } from "@/components/Pill";
import {
  COMPLIANCE_CATEGORIES,
  EXTENDED_COMPLIANCE_CATEGORIES,
  EXTENDED_FRAMEWORK_GROUPS,
  EXTENDED_FRAMEWORK_INFO,
  FRAMEWORK_INFO,
} from "@/lib/compliance";
import { EXTENDED_FRAMEWORKS, FRAMEWORKS } from "@/lib/types";
import type { ExtendedFrameworkGroup } from "@/lib/types";

export default function CompliancePage() {
  return (
    <Container>
      <div className="py-12 sm:py-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600">
            <ShieldCheck className="h-3.5 w-3.5" /> Compliance Command Center
          </span>
          <h1 className="mt-1.5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            AQAR (Annual Quality Assurance Report), SSR (Self-Study Report), SAR (Self-Assessment Report), AISHE — assembled from live data, not from forms.
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            Twelve compliance categories, sixteen frameworks, one live matrix. Every category is fed continuously by IMS, EMS, and ALS — no re-entry, no audit-season panic. The interactive command center ships in milestone M4; this page previews what it covers.
          </p>
        </div>

        <section className="mt-10">
          <div className="flex items-end justify-between gap-3 flex-wrap">
            <div>
              <h2 className="text-[15px] font-semibold uppercase tracking-widest text-slate-500">
                Core accreditation & ranking frameworks
              </h2>
              <p className="mt-1 text-[13px] text-slate-500">
                The six primary accreditation, ranking and statutory frameworks — all live from one platform.
              </p>
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {FRAMEWORKS.map((f) => {
              const info = FRAMEWORK_INFO[f];
              return (
                <div
                  key={f}
                  className="rounded-xl border border-slate-200 bg-white p-4"
                >
                  <div className="flex items-center justify-between">
                    <Pill tone="indigo">{f}</Pill>
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                      Live
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] font-semibold text-slate-800">
                    {info.fullName}
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-slate-500">
                    {info.scope}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-14">
          <div className="flex items-end justify-between gap-3 flex-wrap">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                <Sparkles className="h-3 w-3" /> Emerging & extended
              </div>
              <h2 className="mt-2 text-[15px] font-semibold uppercase tracking-widest text-slate-500">
                Ten more frameworks we cover — that most ERPs and LMSes don't touch
              </h2>
              <p className="mt-1 text-[13px] text-slate-500">
                Digital credentials, credit mobility, innovation reporting, international standards and IQAC-run internal audits. Grouped by theme.
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-6">
            {(Object.keys(EXTENDED_FRAMEWORK_GROUPS) as ExtendedFrameworkGroup[]).map(
              (groupId) => {
                const group = EXTENDED_FRAMEWORK_GROUPS[groupId];
                const frameworks = EXTENDED_FRAMEWORKS.filter(
                  (fw) => EXTENDED_FRAMEWORK_INFO[fw].group === groupId,
                );
                return (
                  <div key={groupId}>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-[13px] font-semibold text-slate-900">
                        {group.title}
                      </h3>
                      <p className="text-[12px] text-slate-500">{group.blurb}</p>
                    </div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {frameworks.map((fw) => {
                        const info = EXTENDED_FRAMEWORK_INFO[fw];
                        return (
                          <div
                            key={fw}
                            className="rounded-xl border border-slate-200 bg-white p-4"
                          >
                            <div className="flex items-center justify-between">
                              <Pill tone="emerald">{info.label}</Pill>
                              <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                                Live
                              </span>
                            </div>
                            <p className="mt-2 text-[13px] font-semibold text-slate-800">
                              {info.fullName}
                            </p>
                            <p className="mt-1 text-[12px] leading-relaxed text-slate-500">
                              {info.scope}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-[15px] font-semibold uppercase tracking-widest text-slate-500">
            8 × 6 coverage matrix
          </h2>
          <p className="mt-1 max-w-3xl text-[13px] text-slate-500">
            The eight categories below, mapped to each framework. Filled cells show coverage already wired through IMS / EMS / ALS.
          </p>
          <div className="mt-4">
            <ComplianceMatrix />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-[15px] font-semibold uppercase tracking-widest text-slate-500">
            Core compliance categories
          </h2>
          <p className="mt-1 max-w-3xl text-[13px] text-slate-500">
            The eight foundational categories that feed NAAC, NIRF, NBA, AISHE, UGC and AICTE.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {COMPLIANCE_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-[15px] font-semibold text-slate-900">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap items-center justify-end gap-1">
                    {cat.frameworks.map((fw) => (
                      <Pill key={fw} tone="indigo" size="xs">
                        {fw}
                      </Pill>
                    ))}
                  </div>
                </div>
                <p className="text-[13px] leading-relaxed text-slate-600">
                  {cat.description}
                </p>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-1 text-[12px] text-slate-500">
                  {cat.items.map((i) => (
                    <li key={i} className="flex gap-1.5">
                      <span className="text-slate-300">·</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-baseline gap-3">
            <h2 className="text-[15px] font-semibold uppercase tracking-widest text-slate-500">
              Extended compliance categories
            </h2>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-700">
              + 4 new
            </span>
          </div>
          <p className="mt-1 max-w-3xl text-[13px] text-slate-500">
            Digital credentials, credit mobility, innovation reporting, international standards and continuous internal audits — the areas most ERP + LMS stacks completely miss.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {EXTENDED_COMPLIANCE_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="flex flex-col gap-3 rounded-xl border border-emerald-200/70 bg-emerald-50/30 p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-[15px] font-semibold text-slate-900">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap items-center justify-end gap-1">
                    {cat.frameworks.map((fw) => (
                      <Pill key={fw} tone="emerald" size="xs">
                        {EXTENDED_FRAMEWORK_INFO[fw].label}
                      </Pill>
                    ))}
                  </div>
                </div>
                <p className="text-[13px] leading-relaxed text-slate-600">
                  {cat.description}
                </p>
                <ul className="grid grid-cols-1 gap-y-1 text-[12px] text-slate-500 sm:grid-cols-2 sm:gap-x-3">
                  {cat.items.map((i) => (
                    <li key={i} className="flex gap-1.5">
                      <span className="text-emerald-400">·</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-[15px] font-semibold text-slate-900">
                Interactive command center lands in milestone M4
              </h2>
              <p className="mt-1 text-[13px] text-slate-600">
                Framework tabs, live criterion strip, drill-down drawer, evidence repository, one-click AQAR / SSR / SAR / AISHE pack generation, anomalies, deadlines.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              See milestone plan <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}

export const metadata = {
  title: "Compliance Command Center · Xpresso",
  description:
    "Eight compliance categories across NAAC, NIRF, AISHE, NBA, UGC, AICTE — live, not at audit time.",
};
