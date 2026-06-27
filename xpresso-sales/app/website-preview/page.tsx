import Link from "next/link";
import { ArrowLeft, Globe, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Container } from "@/components/Container";
import { DashboardFrame } from "@/components/DashboardFrame";
import { InstitutionWebsiteMock } from "@/components/InstitutionWebsiteMock";
import { Pill } from "@/components/Pill";

export default function WebsitePreviewPage() {
  return (
    <Container size="xl">
      <div className="py-10 sm:py-14">
        <Link
          href="/explore/ims"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-500 hover:text-slate-800"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to IMS catalog
        </Link>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Pill tone="ims">IMS</Pill>
          <Pill tone="indigo">Plan 1 + Plan 2 features</Pill>
          <span className="text-[12px] text-slate-500">
            Institution Website &amp; Public Presence
          </span>
        </div>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          The institution's public website — auto-generated from live IMS &amp; EMS data.
        </h1>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-600">
          Every higher-education institution needs a public website with mandatory NAAC, NIRF, UGC, and AICTE disclosures. Today, this site is built by a web agency every 3 years and the data goes stale the day it ships. Xpresso ships the website as a product feature — the same data your IMS already owns becomes the public surface, and it stays in sync forever.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <ValueProp
            icon={<Globe className="h-4 w-4" />}
            tone="blue"
            title="Plan 1 — Templated site, live data"
            body="Brandable theme, all mandatory disclosures, faculty list, programs, fees — auto-populated from IMS. Replaces your current agency-built static site."
          />
          <ValueProp
            icon={<Zap className="h-4 w-4" />}
            tone="indigo"
            title="Plan 2 — Live research + ODP + alumni"
            body="Adds the research feed (publications, patents, grants from EMS), public ODP catalog, admissions micro-sites, and alumni stories feed."
          />
          <ValueProp
            icon={<ShieldCheck className="h-4 w-4" />}
            tone="emerald"
            title="Audit-aligned by default"
            body="Mandatory disclosures auto-render with audit trails. What's public always matches what's on file — no recurring audit-finding category."
          />
        </div>

        <div className="mt-9 rounded-xl border border-indigo-200 bg-indigo-50/40 p-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-indigo-800">
              <Sparkles className="h-3 w-3" /> Reading the preview
            </span>
            <span className="text-[12.5px] text-slate-700">
              The indigo callouts on the right of each section show which IMS / EMS module powers it and which plan it's gated to.
            </span>
          </div>
        </div>

        <div className="mt-6">
          <DashboardFrame url="https://www.bharatheng.ac.in">
            <InstitutionWebsiteMock />
          </DashboardFrame>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-base font-semibold text-slate-900">
              What this kills as an objection
            </h2>
            <ul className="mt-3 flex flex-col gap-2 text-[13px] leading-relaxed text-slate-700">
              <li>
                <span className="font-semibold">"We already have a website."</span> — Yes, and it's three years old, hand-edited in WordPress, and the NAAC disclosures are out of date. Xpresso replaces the static site with a live one, no extra vendor.
              </li>
              <li>
                <span className="font-semibold">"NAAC disclosures take weeks to update."</span> — They don't, here. They render from IMS data on every page load. Whatever's true in IMS is true on the website.
              </li>
              <li>
                <span className="font-semibold">"Faculty profiles go stale."</span> — A profile change in IMS HR updates the public site immediately. No CMS rebuild, no agency ticket.
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-base font-semibold text-slate-900">
              Compliance evidence this surface produces
            </h2>
            <ul className="mt-3 flex flex-col gap-2 text-[13px] leading-relaxed text-slate-700">
              <li>
                <span className="font-semibold">NAAC Criterion 7 (Institutional Values):</span> public disclosure pack always current — anti-ragging, gender harassment, RTI, audited financials.
              </li>
              <li>
                <span className="font-semibold">NIRF perception metrics:</span> faculty publications + research output rendered as public faculty profile pages — useful for NIRF perception scores.
              </li>
              <li>
                <span className="font-semibold">UGC / AICTE mandatory disclosures:</span> accreditation letters and approval documents rendered live with last-updated timestamps.
              </li>
              <li>
                <span className="font-semibold">DVV (Data Validation &amp; Verification):</span> public-data-matches-internal-data anomalies become impossible, removing a common DVV objection category.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
          <span className="text-[12px] font-semibold uppercase tracking-widest text-slate-500">
            Related surfaces
          </span>
          <div className="flex flex-wrap gap-4">
            <Link href="/explore/ims" className="text-[13px] font-semibold text-indigo-700 hover:underline">
              IMS catalog →
            </Link>
            <Link href="/compliance" className="text-[13px] font-semibold text-indigo-700 hover:underline">
              Compliance Command Center →
            </Link>
            <Link href="/dashboards" className="text-[13px] font-semibold text-indigo-700 hover:underline">
              Stakeholder dashboards →
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

function ValueProp({
  icon,
  tone,
  title,
  body,
}: {
  icon: React.ReactNode;
  tone: "blue" | "indigo" | "emerald";
  title: string;
  body: string;
}) {
  const toneClass =
    tone === "blue"
      ? "bg-blue-50 text-blue-700 border-blue-100"
      : tone === "emerald"
      ? "bg-emerald-50 text-emerald-700 border-emerald-100"
      : "bg-indigo-50 text-indigo-700 border-indigo-100";
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-4">
      <div className={`flex h-7 w-7 items-center justify-center rounded-md border ${toneClass}`}>
        {icon}
      </div>
      <div className="text-[13.5px] font-semibold text-slate-900">{title}</div>
      <div className="text-[12.5px] leading-relaxed text-slate-600">{body}</div>
    </div>
  );
}

export const metadata = {
  title: "Institution website preview · Xpresso",
  description:
    "What an institution's auto-generated public website looks like when powered by Xpresso IMS + EMS — every NAAC, NIRF, UGC, and AICTE disclosure auto-rendered from live data.",
};
