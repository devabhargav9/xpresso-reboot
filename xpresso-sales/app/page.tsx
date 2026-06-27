import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Layers, Zap, Globe } from "lucide-react";
import { Container } from "@/components/Container";
import { PyramidHero } from "@/components/PyramidHero";
import { DemoTile } from "@/components/DemoTile";
import { Pill } from "@/components/Pill";
import { alsDemos, emsDemos, odpDemos } from "@/lib/demos";
import { LAYERS } from "@/lib/catalog";
import { FRAMEWORKS } from "@/lib/types";

export default function Home() {
  const als = alsDemos();
  const ems = emsDemos();
  const odp = odpDemos();

  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50/60 to-white">
        <Container>
          <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-[12px] font-semibold text-indigo-700">
                <Sparkles className="h-3.5 w-3.5" /> Three layers · two cross-cutting capabilities · one product
              </span>
              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
                One platform for the whole higher-education institution.
              </h1>
              <p className="max-w-2xl text-[16px] leading-relaxed text-slate-600 sm:text-[17px]">
                ALS adapts to every learner, EMS authors the knowledge they consume, IMS runs the institution beneath it — with ODP and Compliance Autopilot cutting across all three.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-1.5 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
                >
                  See the 11 demos <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/compliance"
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Compliance Command Center
                </Link>
                <Link
                  href="/differentiation"
                  className="text-sm font-medium text-slate-600 hover:text-slate-900"
                >
                  Why Xpresso is different →
                </Link>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-[12px]">
                <span className="font-semibold text-slate-500">Compliance coverage:</span>
                {FRAMEWORKS.map((f) => (
                  <Pill key={f} tone="indigo" size="xs">
                    {f}
                  </Pill>
                ))}
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-[12px]">
                <span className="font-semibold uppercase tracking-wider text-emerald-700 text-[10px]">
                  Recently added
                </span>
                <Link href="/demo/als/in-class-capture" className="font-semibold text-emerald-900 hover:underline">
                  In-class capture
                </Link>
                <span className="text-emerald-700">·</span>
                <Link href="/demo/als/placement-1-click-apply" className="font-semibold text-emerald-900 hover:underline">
                  Career Hub (1-click apply)
                </Link>
                <span className="text-emerald-700">·</span>
                <Link href="/website-preview" className="font-semibold text-emerald-900 hover:underline">
                  Institution website preview
                </Link>
              </div>
            </div>
            <PyramidHero />
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600">
                Eleven live demos
              </span>
              <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-[26px]">
                6 ALS + 4 EMS + 1 flagship ODP — every cutting-edge moment as a clickable simulation.
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-slate-600 sm:text-[15px]">
                ALS demos tell the story of how a student learns — from cognitive profiling to in-class capture to 1-click placement-drive apply with twin-aware interview prep. EMS demos tell the story of how knowledge is created and improves. The flagship ODP demo shows all three layers + compliance working together. Each demo is a small scripted flow with mock data.
              </p>
            </div>
            <Link
              href="/demo"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 hover:underline"
            >
              All demos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Pill tone="als">ALS · How a student learns</Pill>
                <span className="text-[12px] text-slate-500">Profile → personalize → tutor → assess fairly → capture every class → land the job</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {als.map((d) => (
                  <DemoTile key={d.slug} demo={d} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Pill tone="ems">EMS · How knowledge is created</Pill>
                <span className="text-[12px] text-slate-500">Author → see graph → AI co-pilot → close the loop</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {ems.map((d) => (
                  <DemoTile key={d.slug} demo={d} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Pill tone="indigo">ODP · Cross-cutting flagship</Pill>
              <span className="text-[12px] text-slate-500">
                Uses ALS twin + EMS atoms + IMS credit + Compliance, all in one flow.
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {odp.map((d) => (
                <DemoTile key={d.slug} demo={d} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/40 py-14 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600">
                <ShieldCheck className="h-3.5 w-3.5" /> Compliance, built in
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-[26px]">
                AQAR (Annual Quality Assurance Report), SSR (Self-Study Report), SAR (Self-Assessment Report), AISHE — assembled from live data, not from forms.
              </h2>
              <p className="text-[15px] text-slate-600">
                Eight compliance categories covering NAAC, NIRF, AISHE, NBA, UGC, and AICTE — fed continuously by IMS, EMS, and ALS. No re-entry, no audit-season panic.
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {FRAMEWORKS.map((f) => (
                  <Pill key={f} tone="indigo">
                    {f}
                  </Pill>
                ))}
              </div>
              <Link
                href="/compliance"
                className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Open Compliance Command Center <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { title: "Live criterion coverage", body: "Red/amber/green per criterion across NAAC, NIRF, NBA — refreshed continuously." },
                { title: "8 × 6 category matrix", body: "Eight compliance categories mapped to six frameworks — no spreadsheet juggling." },
                { title: "Evidence repository", body: "Auto-organized by criterion. DVV (Data Validation and Verification)-ready packs in clicks, not weeks." },
                { title: "One-click accreditation packs", body: "Generate AQAR, SSR, SAR, AISHE filings on demand." },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-slate-200 bg-white p-4"
                >
                  <h3 className="text-sm font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600">
                <Zap className="h-3.5 w-3.5" /> ODP — curriculum agility
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-[26px]">
                Ship a new credit-linked program in weeks — not three years.
              </h2>
              <p className="text-[15px] text-slate-600">
                ODP plugs into the university as a modular academic layer. Students enroll in short-duration, credit-linked programs in emerging fields — without the institution creating new departments or hiring faculty. Atoms from regular courses are reused; the cognitive twin personalizes from day one; credit hits the transcript and ABC (Academic Bank of Credits).
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <Pill tone="indigo">NEP 2020 (National Education Policy)</Pill>
                <Pill tone="indigo">Academic Bank of Credits</Pill>
                <Pill tone="indigo">NSQF (National Skills Qualifications Framework)</Pill>
                <Pill tone="indigo">Real institutional credit</Pill>
              </div>
              <Link
                href="/odp"
                className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                See how ODP couples with the platform <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { title: "Atoms reused", body: "Same atom serves a Calculus class and an 'AI for Finance' ODP. Author once; v2 helps both." },
                { title: "Twin works day one", body: "Personalization starts at minute one — no cold start, no generic onboarding." },
                { title: "Real credit", body: "Completion writes to the official transcript and ABC, not just a PDF certificate." },
                { title: "Career-driven", body: "Career simulator recommends the 2–4 ODPs that close the student's biggest placement gaps." },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-slate-200 bg-white p-4"
                >
                  <h3 className="text-sm font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-600">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-12">
            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600">
                <Globe className="h-3.5 w-3.5" /> The institution's public website
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-[26px]">
                Your public website becomes a feature, not a vendor.
              </h2>
              <p className="text-[15px] text-slate-600">
                Every institution needs a public site with NAAC, NIRF, UGC, and AICTE disclosures. With Xpresso, the same data IMS already owns becomes the public surface — and it stays in sync forever. Plan 1 ships the templated site; Plan 2 adds live research feed, ODP catalog, admissions micro-sites, and alumni stories.
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <Pill tone="ims">Plan 1: Templated + live disclosures</Pill>
                <Pill tone="indigo">Plan 2: Research + alumni + admissions</Pill>
              </div>
              <Link
                href="/website-preview"
                className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Open the website preview <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-xl shadow-slate-200/60">
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <div className="ml-2 flex flex-1 items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-500">
                    https://www.bharatheng.ac.in
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-700 text-white text-[12px] font-semibold">
                      B
                    </div>
                    <span className="text-[12px] font-semibold text-slate-900">Bharath Engineering College</span>
                  </div>
                  <span className="rounded-md bg-orange-600 px-2.5 py-1 text-[10px] font-semibold text-white">
                    Apply 2026
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-tight text-slate-900">
                  Engineering minds for tomorrow's challenges — since 1985.
                </h3>
                <div className="mt-3 grid grid-cols-4 gap-2 text-center">
                  {[
                    { v: "4,200", l: "Students" },
                    { v: "280", l: "Faculty" },
                    { v: "23", l: "Programs" },
                    { v: "84%", l: "Placement" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-md border border-slate-200 bg-white p-2">
                      <div className="text-[14px] font-semibold text-blue-800">{s.v}</div>
                      <div className="text-[9.5px] uppercase tracking-wider text-slate-500">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[10px]">
                  <span className="rounded bg-emerald-50 px-1.5 py-0.5 font-semibold text-emerald-700">NAAC A+</span>
                  <span className="rounded bg-emerald-50 px-1.5 py-0.5 font-semibold text-emerald-700">NIRF 87</span>
                  <span className="rounded bg-emerald-50 px-1.5 py-0.5 font-semibold text-emerald-700">UGC</span>
                  <span className="rounded bg-emerald-50 px-1.5 py-0.5 font-semibold text-emerald-700">AICTE</span>
                  <span className="ml-auto rounded-full bg-indigo-100 px-2 py-0.5 font-semibold text-indigo-800">
                    Live from IMS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600">
                <Layers className="inline h-3.5 w-3.5 align-[-2px]" /> Browse the full product
              </span>
              <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-[26px]">
                Every feature, listed and explained.
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-slate-600 sm:text-[15px]">
                Beyond the eleven demos, every other feature in ALS, EMS, and IMS is browseable below — with compliance tags and stakeholder lens.
              </p>
            </div>
            <Link
              href="/explore"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 hover:underline"
            >
              Open catalog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {LAYERS.map((l) => {
              const totalFeatures = l.modules.reduce(
                (sum, m) => sum + m.features.length,
                0
              );
              const tone =
                l.code === "ALS" ? "als" : l.code === "EMS" ? "ems" : "ims";
              return (
                <Link
                  key={l.code}
                  href={`/explore/${l.code.toLowerCase()}`}
                  className="group flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-slate-300"
                >
                  <div className="flex items-center justify-between">
                    <Pill tone={tone}>{l.code}</Pill>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {l.modules.length} modules · {totalFeatures} features
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {l.name}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-slate-600">
                    {l.tagline}
                  </p>
                  <span className="mt-auto text-[13px] font-semibold text-indigo-700 group-hover:underline">
                    Explore {l.code} →
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/40 py-12">
        <Container>
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600">
              Different on purpose
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Not an LMS. Not an ERP. Not a compliance tool. All three, wired into one.
            </h2>
            <Link
              href="/differentiation"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 hover:underline"
            >
              See the side-by-side comparison <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
