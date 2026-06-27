import { Section, SectionHeading } from "@/components/Section";
import { Container } from "@/components/Container";
import {
  Crown,
  GraduationCap,
  BookOpen,
  Users,
  FileCheck2,
  FlaskConical,
  MessageCircle,
  ClipboardCheck,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type Stakeholder = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  role: string;
  what: string;
};

const STAKEHOLDERS: Stakeholder[] = [
  {
    icon: Crown,
    role: "Principal / Director",
    what:
      "Real-time KPIs across academics, placements, research, compliance and finance — one screen, no Excel.",
  },
  {
    icon: GraduationCap,
    role: "Faculty",
    what:
      "Live mastery heatmap, AI co-pilot for atoms / quizzes / rubrics, early-alert system, and CO–PO attainment without spreadsheets.",
  },
  {
    icon: BookOpen,
    role: "Student",
    what:
      "Adaptive learning path, AI tutor grounded in their atoms, Career Hub for 1-click placement apply with twin-aware prep.",
  },
  {
    icon: Users,
    role: "Administration",
    what:
      "Workflows for procurement, leave, hiring; policy registry with acknowledgements; calendar + committee + MoM workspace.",
  },
  {
    icon: ClipboardCheck,
    role: "Exam Cell",
    what:
      "Scheduling, hall tickets, marks entry, results processing, anti-cheating analytics, proctoring-ready exam tools.",
  },
  {
    icon: FlaskConical,
    role: "Research Cell",
    what:
      "Publications, citations, patents, grants, MoUs, consultancy and incubation — with optional Scopus / Web of Science auto-pull and live NIRF research-fact-sheet generation.",
  },
  {
    icon: MessageCircle,
    role: "Parent",
    what:
      "Marks, attendance and event updates over WhatsApp + SMS + email + push with delivery and read tracking.",
  },
  {
    icon: FileCheck2,
    role: "IQAC",
    what:
      "Live criterion coverage, evidence repository auto-organised, DVV anomaly inbox, AQAR / SSR / SAR builders.",
  },
];

export function Stakeholders() {
  return (
    <Section paddingY="xl">
      <Container size="xl">
        <SectionHeading
          eyebrow="Stakeholders"
          title="Eight role-specific dashboards. No more 'admin login that sees everything.'"
          description="Each role sees what they need to act on — not a wall of menus they don't have permission to use. Built from real conversations with Indian principals, faculty, IQAC teams and exam cells."
          align="center"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STAKEHOLDERS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.role} className="flex flex-col gap-4 bg-white p-7">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-bg-subtle text-ink-soft ring-1 ring-border">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink">{s.role}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {s.what}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
