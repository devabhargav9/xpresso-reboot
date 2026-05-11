/**
 * Backstage glimpses: how each listed capability is sustained technically.
 * Keys are module ids from `structure.ts`; `feature` strings must match `modules[].items` exactly.
 */

export type FeatureBackstageRow = {
  feature: string;
  backstage: string;
};

export type ModuleBackstage = {
  /** Optional one-line chain for context */
  pipeline?: string[];
  rows: FeatureBackstageRow[];
};

const ALS_BACKSTAGE: Record<string, ModuleBackstage> = {
  a1: {
    pipeline: [
      "Enrolment & roster sources (IMS/SIS)",
      "Platform identity + auth",
      "ALS runtime + grade outcomes",
    ],
    rows: [
      {
        feature: "Learning Management System (LMS)",
        backstage:
          "Course shells bind to canonical offerings from IMS; enrolment drives section membership via scheduled sync or events so drops/adds propagate without manual CSV refreshes.",
      },
      {
        feature: "Digital Content / Course Material Platform",
        backstage:
          "Assets carry versioning and visibility rules (embargo, cohort, accessibility renditions); CDN or object storage serves signed URLs scoped by role and enrolment.",
      },
      {
        feature: "Assignment System",
        backstage:
          "Submission payloads land in durable storage with virus scanning hooks; due-date policy engines enqueue reminders through the communication service; late rules audit who changed deadlines.",
      },
      {
        feature: "Grading System",
        backstage:
          "Scores normalize to a gradebook schema and emit domain events for transcripts, analytics, and eligibility—same numbers advisers see in IMS-facing views when wiring allows.",
      },
    ],
  },
  a2: {
    pipeline: [
      "Item bank & blueprint",
      "Delivery + timing controls",
      "Attempt telemetry → analytics / integrity signals",
    ],
    rows: [
      {
        feature: "Online Assessment / Exam Platform",
        backstage:
          "Delivery separates authoring from runtime: encrypted transit, browser lockdown hooks optional per policy, and attempt logs retained for appeals and accreditation extracts.",
      },
      {
        feature: "Quiz generator",
        backstage:
          "Generators pull from secured banks with taxonomy tags; randomization seeds recorded so item exposure is reproducible for academic integrity reviews.",
      },
      {
        feature: "Proctoring-ready Exam Tools",
        backstage:
          "Integrations surface partner SDKs or browser signals behind consent banners; events (join/leave, anomalies) stream to SIEM-ready sinks without storing unnecessary biometric detail unless configured.",
      },
    ],
  },
  a3: {
    pipeline: [
      "Calendar & roster",
      "Media edge / vendor bridge",
      "Usage + attendance artefacts",
    ],
    rows: [
      {
        feature: "Virtual Classroom / Video Teaching",
        backstage:
          "Sessions mint short-lived join tokens tied to roster; participant rosters and duration stubs reconcile to attendance or participation feeds consumed downstream.",
      },
      {
        feature: "Lecture Capture System",
        backstage:
          "Record jobs ingest from appliances or cloud encoders; transcoding pipelines produce tiers (speed vs quality); captions route through accessibility queues when enabled.",
      },
    ],
  },
  a4: {
    pipeline: [
      "Learning activity stream",
      "Models + policies",
      "Recommendations & graph writes",
    ],
    rows: [
      {
        feature: "Personalized Learning Paths",
        backstage:
          "Path rules consume mastery estimates and prerequisites; overrides respect instructor locks so adaptation never silently violates syllabus policy.",
      },
      {
        feature: "AI Tutor",
        backstage:
          "Prompt context is scoped to enrolled materials and retrieval chunks from approved corpora; prompts/responses logged with retention caps for safety and academic misconduct workflows.",
      },
      {
        feature: "Cognitive Graph",
        backstage:
          "Skill and concept nodes ingest performance edges from assessments and practice; batch workers refresh centrality scores used by pathing—not a hand-maintained spreadsheet graph.",
      },
      {
        feature: "Mastery Tracking",
        backstage:
          "Bayesian or IRT-style trackers update on scored events; uncertainty estimates gate UI messaging so students aren’t mis-ranked on thin evidence.",
      },
      {
        feature: "Learning Analytics",
        backstage:
          "Activity aggregates land in the institutional warehouse with pseudonymization switches; dashboards query curated facts tables rather than raw click logs for stability.",
      },
    ],
  },
  a5: {
    pipeline: [
      "Signals from LMS + assessments",
      "Risk scoring rules",
      "Workflow to advisers / comms",
    ],
    rows: [
      {
        feature: "Early Alerts",
        backstage:
          "Rule bundles subscribe to gradebook, attendance, and LMS cadence topics; firing creates cases with immutable trigger metadata for equity audits.",
      },
      {
        feature: "Progress Nudges",
        backstage:
          "Scheduler respects quiet hours and consent; delivery receipts loop back so advisers see whether outreach landed.",
      },
      {
        feature: "Academic Risk Detection",
        backstage:
          "Models trained institution-side consume engineered features only; explainability snippets cite contributing factors (e.g., missed submissions), not black-box scores alone.",
      },
    ],
  },
  odp: {
    pipeline: [
      "Program definition & approvals",
      "Enrollment + ALS runtime",
      "Evidence → credits / ABC-ready payloads",
    ],
    rows: [
      {
        feature:
          "Modular short-duration programs (typically about 2–6 weeks) with structured curriculum, content, assessments, and declared outcomes",
        backstage:
          "Each ODP is versioned like curriculum: outcomes locked before publish, content manifests hashed for QA, and change logs retained when councils revise offerings.",
      },
      {
        feature:
          "Credit mapping and semester integration with institutional records—not an external content marketplace",
        backstage:
          "Credit templates bind ODP completions to institutional course equivalencies; enrollment APIs respect caps, co-requisites, and timetable collision rules sourced from IMS.",
      },
      {
        feature:
          "Student discovery, enrollment governed by academic rules, and tracked completion alongside regular offerings",
        backstage:
          "Catalog queries honour programme eligibility; waitlists and drops emit events to advisers; progress rolls into holistic dashboards next to core courses.",
      },
      {
        feature:
          "Delivery that blends asynchronous study with optional live touchpoints; video, assignments, projects, quizzes; sequencing and progress gating",
        backstage:
          "Media delivery uses signed URLs + CDN tiering; gates unlock on schedule or mastery thresholds; live sessions reuse ALS conferencing hooks with roster-bound attendance artefacts.",
      },
      {
        feature:
          "Credential evidence: completion records and credit eligibility designed to flow toward transcripts and QA packs where policy allows",
        backstage:
          "Immutable completion artefacts bundle scores, rubrics, and outcome attainment for registrar review; export schemas align with ABC XML/JSON templates where the HEI participates.",
      },
      {
        feature:
          "Program administration and personalization: publish lifecycle, credit value, modules, assessments, recommendations grounded in institutional profile data",
        backstage:
          "Workflow engines gate committee approvals; recommender features pull only consented profile facets; audit trails satisfy accreditation asks on who authorized each ODP revision.",
      },
    ],
  },
};

const EMS_BACKSTAGE: Record<string, ModuleBackstage> = {
  e1: {
    pipeline: [
      "Sponsor & finance refs",
      "Compliance artefacts",
      "Structured research records",
    ],
    rows: [
      {
        feature: "Research Information Management System",
        backstage:
          "Projects are system-of-record entities with stable IDs; PI membership inherits HR authoritative sources where integrated; timeline views replay status transitions for auditors.",
      },
      {
        feature: "Grant Proposal Management",
        backstage:
          "Budget worksheets version per submission; routing collects approvals and stamps PDF snapshots so reopened competitions never overwrite prior institutional copies.",
      },
      {
        feature: "Research Funding Administration",
        backstage:
          "Award notices reconcile to chart-of-accounts feeds toward ERP; encumbrance deltas emit integration events instead of manual journal spreadsheets.",
      },
      {
        feature: "Lab Management System",
        backstage:
          "Equipment calendars bind to safety certifications pulled from HR/training stores; usage logs support utilization reporting for capital planning.",
      },
      {
        feature: "Research Compliance & Ethics",
        backstage:
          "Protocols carry amendment chains; decisions attach immutable PDFs; expiry monitors enqueue renewals before automatic lock-down of spend or lab access where wired.",
      },
    ],
  },
  e2: {
    pipeline: [
      "Deposit intake",
      "Metadata normalization",
      "Persistent identifiers & preservation hooks",
    ],
    rows: [
      {
        feature: "Institutional Repository / Publications System",
        backstage:
          "DOIs/Handles mint via gateway adapters; embargo lifts run as dated jobs; OAI-PMH or API harvesting exposes catalogues without manual BibTeX uploads.",
      },
      {
        feature: "Research Data Management Platform",
        backstage:
          "Dataset packages land in policy-classified buckets (restricted vs open); checksum manifests prove integrity; retention workflows honour funder mandates.",
      },
      {
        feature: "Physical & Digital Library Knowledge Repository",
        backstage:
          "Union catalogue merges MARC-like records with digital surrogates; circulation systems optionally integrate so shelf and bytes stay aligned.",
      },
    ],
  },
  e3: {
    pipeline: [
      "Curriculum source documents",
      "Governance workflow",
      "Published catalog views",
    ],
    rows: [
      {
        feature: "Curriculum Management System",
        backstage:
          "Program-version graphs bind outcomes to modules; diffs between catalogue years compute automatically for accreditation annex tables.",
      },
      {
        feature: "Publishing Workflow",
        backstage:
          "Approvals stamp actors and timestamps; only promoted revisions propagate to student-facing catalog surfaces—draft noise never leaks.",
      },
      {
        feature: "Pedagogy Tools",
        backstage:
          "Evidence artefacts (rubrics, observations) attach to course revisions for QA cycles without emailing ZIP folders.",
      },
      {
        feature: "Knowledge Discovery / Search",
        backstage:
          "Indexer pipelines crawl approved repositories and curriculum texts with ACL-aware filtering; query planners blend lexical + metadata facets.",
      },
    ],
  },
  e4: {
    pipeline: [
      "Workspace tenancy",
      "Collaboration events",
      "Exports / archival when projects close",
    ],
    rows: [
      {
        feature: "Faculty Collaboration System",
        backstage:
          "Spaces inherit institutional IAM; file deltas sync through virus scanning and DLP hooks tuned for research exports.",
      },
      {
        feature: "Inter-University Collaboration",
        backstage:
          "Cross-tenant invites federate via B2B tokens or eduID patterns; data residency flags block moves across regions when contracts demand.",
      },
      {
        feature: "Shared Research Workspace",
        backstage:
          "Notebook or dataset mounts attach to project IDs so retention policies cascade—nothing orphaned when a PI rotates.",
      },
    ],
  },
  e5: {
    pipeline: ["Entity resolution", "Graph ingest workers", "APIs for ALS/IMS/analytics"],
    rows: [
      {
        feature:
          "University Knowledge Graph (People ↔ Papers ↔ Courses ↔ Labs ↔ Data)",
        backstage:
          "Extract-load jobs reconcile ORCID, HR IDs, course codes, and DOIs into a governed ontology; consumers query SPARQL/GraphQL facades with row-level security mirrored from source systems.",
      },
    ],
  },
};

export function getModuleBackstage(
  layerCode: string,
  moduleId: string
): ModuleBackstage | null {
  if (layerCode === "ALS") return ALS_BACKSTAGE[moduleId] ?? null;
  if (layerCode === "EMS") return EMS_BACKSTAGE[moduleId] ?? null;
  return null;
}
