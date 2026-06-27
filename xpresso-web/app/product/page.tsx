import type { Metadata } from "next";
import { ProductHero } from "@/components/product/ModuleHero";
import { ModuleSection } from "@/components/product/ModuleSection";
import { DataFlowDiagram } from "@/components/product/DataFlowDiagram";
import { Section, SectionHeading } from "@/components/Section";
import { Container } from "@/components/Container";
import { Pill } from "@/components/Pill";
import { Button } from "@/components/Button";
import {
  Brain,
  GraduationCap,
  Building2,
  Sparkles,
  ShieldCheck,
  Layers,
  Check,
  CalendarRange,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Product",
  description:
    "ALS, EMS, IMS, On-Demand Programs and Compliance Autopilot — the full Xpresso stack for Indian higher education.",
};

export default function ProductPage() {
  return (
    <>
      <ProductHero />

      <ModuleSection
        id="als"
        acronym="ALS"
        full="Adaptive Learning System"
        tagline="Every student gets a brain that learns how they learn."
        description="Most LMS products are file cabinets. The ALS is a thinking layer: a cognitive twin per student that updates with every interaction, an AI tutor grounded in your atoms, an adaptive learning path, and a Career Hub that turns the institution's placement engine into something students actually want to use."
        pillTone="indigo"
        tone="indigo"
        icon={Brain}
        flagship={{
          title: "Cognitive twin per student",
          body:
            "A persistent model of processing speed, working memory, attention patterns, learning style, cognitive load tolerance and meta-cognitive awareness — updated in real time. Nothing in any LMS does this.",
        }}
        features={[
          {
            title: "AI tutor grounded in your atoms",
            body: "24×7 chatbot that only answers from your institution's curriculum, with citation. Refuses to answer if no atom backs it up.",
          },
          {
            title: "Adaptive learning path",
            body: "Path order, modality (video / audio / PDF / 3D) and difficulty re-rank per session, per student.",
          },
          {
            title: "Misconception graph",
            body: "Known wrong answers are tracked across students — the tutor vetoes them and the EMS gets a 'fix this atom' nudge.",
          },
          {
            title: "Career Hub for students",
            body: "Live drives feed, 1-click apply with eligibility pre-check, twin-aware interview prep, mock interview studio.",
          },
          {
            title: "In-class lecture transcripts",
            body: "Every lecture auto-transcribed (Whisper) and published as daily class updates with per-course search.",
            badge: "MVP",
          },
          {
            title: "Multi-modal content delivery",
            body: "Same atom rendered as PDF, audio, narrated video — picked automatically based on the twin's state right now.",
          },
        ]}
      />

      <ModuleSection
        id="ems"
        acronym="EMS"
        full="Education Management System"
        tagline="Curriculum as a graph — not as folders of PDFs."
        description="Faculty author content as atoms — the smallest teachable units — linked in a knowledge graph (prereq, leads_to, part_of, assesses). The same atom can be rendered as PDF, narrated video, or audio. OBE / CO–PO attainment is live and computed continuously, not assembled in a spreadsheet at semester end."
        pillTone="violet"
        tone="violet"
        icon={GraduationCap}
        reverse
        flagship={{
          title: "Knowledge graph + atom authoring",
          body:
            "Atoms are versioned, citable, multi-modal and graph-linked. They are the substrate the ALS, the tutor, the compliance evidence layer, and ODP all run on.",
        }}
        features={[
          {
            title: "Multi-modal content factory",
            body: "Author once; auto-render as PDF, narrated video, audio, deck, quiz draft. Faculty review before publish.",
          },
          {
            title: "Faculty AI co-pilot",
            body: "Generates atoms, quizzes, rubrics and case studies from your existing material; faculty stays editor-in-chief.",
          },
          {
            title: "Live OBE / CO–PO attainment",
            body: "Course Outcomes mapped to Program Outcomes — attainment computed from real student data, continuously.",
          },
          {
            title: "Assessment authoring",
            body: "Quizzes, assignments and projects authored from atoms — alignment to COs is automatic, not manual.",
          },
          {
            title: "Lesson planning + scheduling",
            body: "Plans assembled from atoms in seconds; sequencing checked against the prerequisite graph automatically.",
          },
          {
            title: "Content rights + versioning",
            body: "Atom history, attribution and faculty-of-record tracked across edits — no more 'where did this PDF come from?'",
          },
        ]}
      />

      <ModuleSection
        id="ims"
        acronym="IMS"
        full="Institution Management System"
        tagline="A modern ERP that doesn't feel like 2008."
        description="Admissions, attendance, fees, exams, results, payroll, library, hostel, placement TPO, parent communications, finance, procurement, hiring — every operational module Indian institutions need, with 8 role-based dashboards and mobile-first design. Plus the institution website and alumni portal, rendered from live data."
        pillTone="ink"
        tone="ink"
        icon={Building2}
        flagship={{
          title: "Auto-generated institution website",
          body:
            "Your public-facing website rendered from live IMS / EMS data — mandatory disclosures (NAAC, NIRF, NBA grids, fee structure, faculty list) always current. Replaces your website agency.",
        }}
        features={[
          {
            title: "Admissions to alumni — full lifecycle",
            body: "Lead capture, applications, fees, attendance, internal marks, exam, results, transcripts, alumni — one record per student.",
          },
          {
            title: "Placement TPO + JD intake portal",
            body: "Recruiter portal, drive scheduling, eligibility rules, candidate shortlisting, offer tracking, 1-click NIRF placement export.",
          },
          {
            title: "Alumni portal",
            body: "LinkedIn auto-pull, mentorship matching, donation flows, event RSVPs, alumni-led placement referrals.",
          },
          {
            title: "Parent comms — multi-channel",
            body: "WhatsApp Business API + SMS + email + push for marks, attendance, fees, events — with delivery and read tracking.",
          },
          {
            title: "Finance, payroll & procurement",
            body: "Fees, scholarships, instalments, payroll runs, tax workflows, procurement approvals, vendor management.",
          },
          {
            title: "Library, hostel & infrastructure",
            body: "Catalogue, circulation, reservations, hostel allocation, lab + equipment inventory, maintenance tickets.",
          },
        ]}
      />

      {/* ODP */}
      <ODPSection />

      {/* Compliance */}
      <ComplianceDeepDive />

      <DataFlowDiagram />

      {/* Closing CTA */}
      <Section paddingY="lg">
        <Container size="lg">
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-border bg-bg-muted p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-ink">
                Want this walked through with your data?
              </h3>
              <p className="mt-2 max-w-xl text-base text-ink-muted">
                30-minute call. We show you the product end-to-end against
                your courses, your stakeholders, your compliance needs.
              </p>
            </div>
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Request a demo
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ODPSection() {
  return (
    <section id="odp" className="scroll-mt-24 border-t border-border py-20 sm:py-24">
      <Container size="xl">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-white shadow-sm">
                <Layers className="h-5 w-5" />
              </div>
              <Pill tone="indigo" size="md">
                ODP
              </Pill>
              <span className="text-sm text-ink-faint">On-Demand Programs</span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              An academic infrastructure layer — not a content marketplace.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              Curriculum cycles take 3 – 5 years. Industry needs change in 6
              months. ODP lets your institution offer credit-linked, short
              (2 – 6 week) modular programs in emerging fields — without
              creating new departments or hiring new faculty.
            </p>

            <div className="mt-7 rounded-2xl border border-border bg-bg-muted p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
                Why it works
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                ODP rides on the existing stack — same atoms, same twin, same
                IMS gradebook. So you don't run a parallel platform, you
                extend the one you already have.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Program management",
                body:
                  "Create / edit / publish ODPs with duration, modules, assessments and credit value — drag-and-drop builder.",
              },
              {
                title: "Credit + semester integration",
                body:
                  "Map ODP credits to your university's credit system; students enrol alongside regular courses.",
              },
              {
                title: "Personalised recommendations",
                body:
                  "Twin + branch + interest signals recommend ODPs to each student. Completion rates trend higher.",
              },
              {
                title: "Delivery + assessment",
                body:
                  "Async videos + content + quiz engine + assignment submission + basic grading; optional synchronous sessions.",
              },
              {
                title: "Industry-aligned credentials",
                body:
                  "Completion records, credit-eligibility flags, certifications — flow straight into the student transcript.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5"
              >
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-soft text-indigo">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

const FRAMEWORK_TABLE = [
  {
    framework: "NAAC",
    purpose: "Quality & accreditation",
    coverage:
      "Criterion-wise coverage with live AQAR / SSR / SAR builders, evidence auto-organised.",
  },
  {
    framework: "NIRF",
    purpose: "National ranking framework",
    coverage:
      "Teaching, learning & resources, research, graduation outcomes, outreach, placement — all auto-fed.",
  },
  {
    framework: "NBA",
    purpose: "Outcome-based accreditation",
    coverage:
      "Live CO–PO mapping + attainment, OBE workflows, DVV-ready SAR exports.",
  },
  {
    framework: "AISHE",
    purpose: "All-India higher-ed survey",
    coverage:
      "Institution + department + student + faculty statistics auto-compiled at the click of a button.",
  },
  {
    framework: "UGC",
    purpose: "Regulator filings",
    coverage:
      "Faculty, administrative & policy data auto-formatted for routine UGC reporting.",
  },
  {
    framework: "AICTE",
    purpose: "Regulator filings",
    coverage:
      "Infrastructure, intake and approval data — formatted, validated, exported.",
  },
];

function ComplianceDeepDive() {
  return (
    <section
      id="compliance"
      className="scroll-mt-24 border-t border-border bg-ink py-20 text-white sm:py-28"
    >
      <div className="absolute inset-x-0 -mt-20 h-40 bg-aurora-dark opacity-30" aria-hidden />

      <Container size="xl">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-accent-strong text-white shadow-sm">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <Pill tone="accent" size="md">
                Compliance
              </Pill>
              <span className="text-sm text-white/60">Autopilot</span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Live coverage — not a one-off PDF.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              Every operational event (attendance, marks, mastery, placement,
              MoUs, research, faculty FDPs) becomes evidence automatically.
              Criterion-wise coverage is live; the AQAR, SSR and SAR builders
              are continuous, not annual scrambles.
            </p>

            <ul className="mt-7 space-y-3 text-sm text-white/80">
              {[
                "Replaces NAAC consultants (₹15 – 50 L per cycle)",
                "Live AQAR / SSR / SAR builders",
                "Evidence repository auto-organised by criterion",
                "Anomaly inbox + DVV-ready exports",
                "Approval workflows + audit trails for every entry",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300">
              <Sparkles className="h-3 w-3" />
              Built for Indian regulators
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur-sm">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-white/[0.04]">
                    <th className="w-28 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
                      Framework
                    </th>
                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
                      Purpose
                    </th>
                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
                      How Xpresso covers it
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {FRAMEWORK_TABLE.map((row) => (
                    <tr key={row.framework} className="text-white/80">
                      <td className="px-4 py-3 align-top font-semibold text-white">
                        {row.framework}
                      </td>
                      <td className="px-4 py-3 align-top text-xs text-white/70">
                        {row.purpose}
                      </td>
                      <td className="px-4 py-3 align-top text-xs text-emerald-300/90">
                        {row.coverage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center gap-2 px-3 py-3 text-[11px] text-white/50">
              <CalendarRange className="h-3.5 w-3.5" />
              <span>
                Coverage rolls out across launch and the first 12 months of GA.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
