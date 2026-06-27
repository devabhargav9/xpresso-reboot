import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { ArrowDown, ArrowUp, Zap } from "lucide-react";

const DOWN_EVENTS = [
  {
    from: "EMS",
    to: "ALS",
    label: "Atom published / updated",
    detail: "Adaptive path + AI tutor refresh in real time. No batch sync.",
  },
  {
    from: "EMS",
    to: "IMS",
    label: "OBE / CO–PO mapping changed",
    detail: "Compliance evidence + transcript schema regenerates automatically.",
  },
  {
    from: "ALS",
    to: "IMS",
    label: "Student mastered a concept",
    detail: "Attainment metrics update; transcript-ready evidence accrues.",
  },
];

const UP_EVENTS = [
  {
    from: "IMS",
    to: "ALS",
    label: "Attendance dipped 3 sessions",
    detail: "Twin prioritises catch-up atoms before the next assessment.",
  },
  {
    from: "ALS",
    to: "EMS",
    label: "Atom showing high failure rate",
    detail: "Faculty notified to rewrite or add scaffolding atoms.",
  },
  {
    from: "ALS",
    to: "IMS",
    label: "Cohort cognitive load rising",
    detail: "Exam cell alerted to recalibrate the question paper difficulty.",
  },
];

export function DataFlowDiagram() {
  return (
    <Section id="dataflow" tone="muted" paddingY="xl" className="scroll-mt-24">
      <Container size="xl">
        <SectionHeading
          eyebrow="Real-time data flow"
          title="The event bus that makes this one product, not four."
          description="Every Xpresso module publishes events to a shared bus. Every other module subscribes. Operations, content, learning and compliance stay in sync — without batch jobs or reconciliation scripts."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <FlowColumn
            title="Top-down events (curriculum → learning)"
            icon={ArrowDown}
            tone="violet"
            events={DOWN_EVENTS}
          />
          <FlowColumn
            title="Bottom-up events (learning → operations)"
            icon={ArrowUp}
            tone="indigo"
            events={UP_EVENTS}
          />
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-white p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent-soft text-accent-strong ring-1 ring-emerald-100">
              <Zap className="h-4 w-4" />
            </span>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-faint">
                The architecture
              </div>
              <p className="mt-2 text-base leading-relaxed text-ink-soft sm:text-lg">
                <span className="font-medium text-ink">Today:</span> SNS / SQS
                on AWS for the event bus. Aurora PostgreSQL with pgvector for
                the knowledge graph and twin state. Bedrock (Claude / Llama)
                for tutor + content generation, Titan / OpenAI embeddings.{" "}
                <span className="font-medium text-ink">As you scale:</span>{" "}
                MSK / Kafka, EKS, multi-tenant schema isolation, and an
                optional dedicated-VPC deployment on your own AWS or Azure
                account for institutions with strict data-policy requirements.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

type FlowEvent = { from: string; to: string; label: string; detail: string };

function FlowColumn({
  title,
  icon: Icon,
  tone,
  events,
}: {
  title: string;
  icon: typeof ArrowDown;
  tone: "violet" | "indigo";
  events: FlowEvent[];
}) {
  const accent = tone === "violet" ? "text-violet" : "text-indigo";
  return (
    <div className="rounded-3xl border border-border bg-white p-6 sm:p-7">
      <div className="flex items-center gap-2.5">
        <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg bg-bg-subtle ${accent}`}>
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">
          {title}
        </h3>
      </div>

      <div className="mt-5 space-y-3">
        {events.map((event) => (
          <div
            key={event.label}
            className="rounded-xl border border-border bg-bg-muted/60 p-4"
          >
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
              <span className="rounded bg-ink px-1.5 py-0.5 text-white">
                {event.from}
              </span>
              →
              <span className="rounded bg-ink px-1.5 py-0.5 text-white">
                {event.to}
              </span>
            </div>
            <div className="mt-2 text-sm font-medium text-ink">
              {event.label}
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
              {event.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
