import { Section, SectionHeading } from "@/components/Section";
import { Container } from "@/components/Container";
import {
  Network,
  Brain,
  ShieldCheck,
  MessagesSquare,
  LineChart,
  Briefcase,
  Mic,
  Globe2,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type Differentiator = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
};

const ITEMS: Differentiator[] = [
  {
    icon: Network,
    title: "One product, one spine",
    body:
      "IMS, EMS and ALS share a real-time event bus. Attendance dips trigger catch-up atoms. Mastery signals become compliance evidence. No batch jobs, no reconciliation tickets.",
  },
  {
    icon: Brain,
    title: "Cognitive twin per student",
    body:
      "A persistent model of how each student learns — processing speed, working memory, attention, modality preference. Updates every interaction. Nothing in any LMS or ERP does this.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Autopilot",
    body:
      "Live coverage for NAAC, NIRF, NBA, AISHE, UGC, AICTE — assembled from operational data, not generated as a one-off PDF. Replaces NAAC consultants (₹15 – 50 L per cycle).",
  },
  {
    icon: LineChart,
    title: "Live OBE / CO–PO attainment",
    body:
      "Course Outcomes mapped to Program Outcomes — with attainment computed continuously from real student data, not filled in spreadsheets at semester end.",
  },
  {
    icon: MessagesSquare,
    title: "AI tutor grounded in YOUR atoms",
    body:
      "24×7 chatbot that answers from your institution's curriculum, with strict citation. Knows what's in scope, what's been taught, what comes next. No hallucinations, no open-web answers.",
  },
  {
    icon: Briefcase,
    title: "Career Hub for students",
    body:
      "Live placement drives feed, 1-click apply with eligibility pre-check, twin-scheduled interview prep, mock interview studio. Goodbye Google Forms and WhatsApp groups.",
  },
  {
    icon: Mic,
    title: "In-class lecture transcripts",
    body:
      "Every lecture auto-transcribed and published into the course feed as daily class updates. Searchable per course. Future R&D feeds the twin and generates atoms.",
  },
  {
    icon: Globe2,
    title: "Auto-generated public website",
    body:
      "Your institution's website rendered from live IMS / EMS data — mandatory disclosures always current. Plus a full alumni portal with LinkedIn auto-pull and mentorship matching.",
  },
];

export function WhyXpresso() {
  return (
    <Section tone="muted" paddingY="xl">
      <Container size="xl">
        <SectionHeading
          eyebrow="Why Xpresso"
          title="Eight capabilities that don't exist in any LMS or ERP today."
          description="When buyers ask 'why not just buy a cheap ERP + Moodle and stitch them together?', this is the answer. These are the reasons institutions move to Xpresso and stay."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group flex flex-col gap-4 bg-white p-7 transition-colors hover:bg-bg-muted"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-accent-strong ring-1 ring-emerald-100">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.body}
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
