import { Section, SectionHeading } from "@/components/Section";
import { Container } from "@/components/Container";
import { Pill } from "@/components/Pill";
import {
  Building2,
  GraduationCap,
  Brain,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const PILLARS = [
  {
    pill: "Base",
    pillTone: "neutral" as const,
    icon: Building2,
    name: "IMS",
    full: "Institution Management System",
    headline: "Run every operation, end-to-end.",
    blurb:
      "Replaces 10-year-old ERPs. Admissions, attendance, fees, exams, results, payroll, library, hostel, placement TPO and parent comms — modern, mobile-first, with 8 role-based dashboards.",
    points: [
      "Auto-generated institution website",
      "Placement TPO + JD intake portal",
      "Parent comms over WhatsApp + SMS + email",
    ],
    href: "/product#ims",
    accent: "ring-1 ring-slate-200",
    tone: "from-slate-800 to-slate-900",
  },
  {
    pill: "Middle",
    pillTone: "violet" as const,
    icon: GraduationCap,
    name: "EMS",
    full: "Education Management System",
    headline: "Curriculum, intelligently.",
    blurb:
      "Faculty author content as atoms — the smallest teachable units — linked in a knowledge graph. The same atom becomes PDF, audio, narrated video. OBE / CO–PO attainment is live, not a spreadsheet.",
    points: [
      "Knowledge graph + atom authoring",
      "Multi-modal content factory",
      "Faculty AI co-pilot for quizzes, rubrics, atoms",
    ],
    href: "/product#ems",
    accent: "ring-1 ring-violet-100",
    tone: "from-violet-500 to-violet-600",
  },
  {
    pill: "Apex",
    pillTone: "indigo" as const,
    icon: Brain,
    name: "ALS",
    full: "Adaptive Learning System",
    headline: "Every student gets a brain.",
    blurb:
      "A cognitive twin per student — a persistent model of how they learn. AI tutor grounded in your atoms with strict citation. Career Hub for 1-click placement apply with twin-aware interview prep.",
    points: [
      "Cognitive twin + adaptive learning path",
      "AI tutor (no hallucinations, only your curriculum)",
      "Career Hub + in-class lecture transcripts",
    ],
    href: "/product#als",
    accent: "ring-1 ring-indigo-100",
    tone: "from-indigo-500 to-indigo-600",
  },
] as const;

export function Pillars() {
  return (
    <Section paddingY="xl">
      <Container size="xl">
        <SectionHeading
          eyebrow="The three modules"
          title="One product, with the depth of three best-in-class platforms."
          description="Every other vendor sells you one piece of this puzzle. Xpresso ships all three, integrated on a real-time spine — so attendance dips trigger catch-up atoms and mastery signals flow to compliance evidence automatically."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.name}
                href={p.href}
                className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${p.accent}`}
              >
                <div className="flex items-start justify-between">
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${p.tone} text-white shadow-sm`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <Pill tone={p.pillTone} size="sm">
                    {p.pill}
                  </Pill>
                </div>

                <div className="mt-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-semibold tracking-tight text-ink">
                      {p.name}
                    </span>
                    <span className="text-sm text-ink-faint">{p.full}</span>
                  </div>
                  <h3 className="mt-3 text-[20px] font-semibold leading-snug text-ink">
                    {p.headline}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {p.blurb}
                  </p>
                </div>

                <ul className="mt-6 space-y-2 border-t border-border pt-5 text-sm text-ink-soft">
                  {p.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-strong" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong">
                  Explore {p.name}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
