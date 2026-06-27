import { Section, SectionHeading } from "@/components/Section";
import { Container } from "@/components/Container";
import { ArrowRight } from "lucide-react";

const FLOWS = [
  {
    from: "IMS",
    fromTone: "bg-slate-900",
    event: "Student missed 3 classes",
    to: "ALS",
    toTone: "bg-indigo-500",
    outcome: "Cognitive twin auto-prioritises catch-up atoms before the next exam.",
  },
  {
    from: "ALS",
    fromTone: "bg-indigo-500",
    event: "Student masters a concept",
    to: "EMS",
    toTone: "bg-violet-500",
    outcome: "Course Outcome attainment ticks up; flows into the AQAR draft.",
  },
  {
    from: "EMS",
    fromTone: "bg-violet-500",
    event: "Faculty publishes a new atom",
    to: "ALS",
    toTone: "bg-indigo-500",
    outcome: "AI tutor + adaptive path absorb it instantly — no batch sync.",
  },
  {
    from: "ALS",
    fromTone: "bg-indigo-500",
    event: "Cohort shows rising cognitive load",
    to: "IMS",
    toTone: "bg-slate-900",
    outcome: "Exam cell is alerted to recalibrate the upcoming question paper.",
  },
];

export function HowItFlows() {
  return (
    <Section paddingY="xl">
      <Container size="xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Real-time data flow"
              title="The integration premium — visible in a day, not a deck."
              description="The reason stitching together a cheap ERP + an off-the-shelf LMS doesn't work: the data doesn't flow. Xpresso is one product with one event bus. Operations, content, and learning talk to each other in real time."
            />

            <div className="mt-8 rounded-2xl border border-border bg-bg-muted p-6 text-sm leading-relaxed text-ink-muted">
              <p className="font-medium text-ink">Why this matters</p>
              <p className="mt-2">
                Best-of-breed LMS + best-of-breed ERP + best AI tutor + best
                NAAC tool still misses what Xpresso has — because the data
                doesn't flow between them. You'd be stitching together 4
                products that don't know each other exists.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {FLOWS.map((flow, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-border bg-white p-5 transition-shadow hover:shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <FlowChip color={flow.fromTone}>{flow.from}</FlowChip>
                  <ArrowRight className="h-4 w-4 shrink-0 text-ink-faint" />
                  <span className="text-sm font-medium text-ink-soft">
                    {flow.event}
                  </span>
                </div>

                <div className="mt-3 ml-1 flex items-start gap-3 border-l-2 border-dashed border-border pl-5">
                  <FlowChip color={flow.toTone}>{flow.to}</FlowChip>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {flow.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function FlowChip({ color, children }: { color: string; children: string }) {
  return (
    <span
      className={`inline-flex h-6 items-center rounded-md px-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white ${color}`}
    >
      {children}
    </span>
  );
}
