"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/Section";
import { Container } from "@/components/Container";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "How is this different from MasterSoft, Camu or Linways?",
    a: "Those are ERP-only products built 10+ years ago. Xpresso replaces them with a modern ERP plus a knowledge graph (EMS) plus a cognitive twin (ALS) — on one real-time spine. The integration premium is the point: attendance, mastery, and compliance data flow between modules in real time. None of the legacy ERPs do this.",
  },
  {
    q: "How is this different from Moodle, Canvas or Google Classroom?",
    a: "Those are LMS-only — content delivery, assignments, gradebook. Xpresso ships everything they do, then adds an institution-specific knowledge graph, a cognitive twin per student, an AI tutor grounded in your atoms, live OBE / CO–PO attainment, and the entire IMS layer. They cannot do this without a 3-year roadmap pivot.",
  },
  {
    q: "Will the AI tutor hallucinate or give wrong answers?",
    a: "Three guards prevent this. (1) The tutor is RAG-grounded in your institution's atoms with strict citation — every answer must cite an atom or it refuses. (2) Answers that contradict known correct atoms are vetoed by the misconception graph. (3) Edge cases go to a faculty review queue. Net: the tutor answers from your curriculum, not the open web.",
  },
  {
    q: "Where is our data hosted? Is it DPDP compliant?",
    a: "AWS Mumbai (ap-south-1) — a sovereign India region. DPDP 2023 compliant from day one. Audit trails via CloudTrail, right-to-erasure built into the data model. SOC 2 Type 1 by end of Year 2, Type 2 in Year 3, ISO 27001 in Year 3. For institutions with policy requirements, we also offer a dedicated private cloud / VPC option on your own AWS or Azure account.",
  },
  {
    q: "How long does onboarding take?",
    a: "Typically 10 – 14 days end-to-end: data migration from your existing ERP / SIS, role mapping, knowledge-graph bootstrap, atom authoring setup, AI tutor grounding, faculty training and go-live. We have a documented onboarding playbook and a dedicated Customer Success Manager for every institution.",
  },
  {
    q: "What happens to our existing data when we move?",
    a: "We have an import wizard for the most common Indian SIS / ERP formats (MasterSoft, Camu, Linways, Frontcore, and Excel / CSV). For atoms / content, faculty review and approve before atoms go live in the graph. Nothing is lost; everything is auditable.",
  },
  {
    q: "Can we adopt the modules in phases?",
    a: "Yes. Many institutions start with IMS (operations + website + parent comms + dashboards) to fix the operational pain first, and roll out EMS + ALS in the next semester once content authoring is set up. We support phased rollouts with a clear migration path.",
  },
  {
    q: "What about on-premise installation?",
    a: "The product is cloud-first by design — the cognitive twin, AI tutor and Compliance Autopilot can't economically run on-prem. For tier-1 and government customers with strict policy requirements, we offer a dedicated private cloud / VPC option on your own AWS or Azure account.",
  },
];

export function FAQ() {
  return (
    <Section paddingY="xl">
      <Container size="lg">
        <SectionHeading
          eyebrow="Frequently asked"
          title="Questions we get from every Principal we meet."
          description="Don't see your question? Reach out — we'll get back within one business day."
          align="center"
        />

        <div className="mt-12 divide-y divide-border rounded-3xl border border-border bg-white">
          {FAQS.map((item, idx) => (
            <FAQItem key={idx} q={item.q} a={item.a} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      className="w-full px-6 py-5 text-left transition-colors hover:bg-bg-muted/50"
    >
      <div className="flex items-start justify-between gap-6">
        <h3 className="text-base font-medium text-ink">{q}</h3>
        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-white text-ink-muted">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </div>
      {open ? (
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted">
          {a}
        </p>
      ) : null}
    </button>
  );
}
