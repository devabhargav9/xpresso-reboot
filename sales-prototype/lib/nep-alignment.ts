/**
 * NEP 2020 alignment for HEIs: policy thrust → gap → product hook.
 * Grounded in Part II (e.g. Ch. 9–19), Part III (20–24) principles cited in the official policy text.
 */

export const NEP_ALIGNMENT_INTRO = {
  title: "NEP 2020 — problems we address",
  subtitle:
    "Mapped to National Education Policy 2020 themes for higher education: multidisciplinary holistic education, credit mobility, equity and technology, research, governance, and vocational integration—not a substitute for statutory or regulatory compliance.",
} as const;

export type NepAlignmentBlock = {
  id: string;
  /** Short NEP reference (chapter/theme), not a legal citation */
  nepRef: string;
  /** What the policy calls out as pressure or direction */
  problem: string;
  /** One-line X’Presso response */
  productHook: string;
};

export const NEP_ALIGNMENT_BLOCKS: NepAlignmentBlock[] = [
  {
    id: "fragmentation",
    nepRef: "Part II, Ch. 9–10 — fragmented HE ecosystem",
    problem:
      "Programmes, records, finance, placement, and learning often sit in disconnected systems; students and staff repeat data and lose a single view of progress.",
    productHook:
      "One identity and one data spine across IMS (operations), ALS (learning), EMS (knowledge), and the core platform so governance and analytics see the same student and faculty truth.",
  },
  {
    id: "multidisciplinary",
    nepRef: "Ch. 11 — holistic & multidisciplinary education",
    problem:
      "Rigid silos between ‘vocational’, ‘academic’, and ‘extra’ activity make it hard to offer short, credit-aware exposure to emerging fields without new departments every cycle.",
    productHook:
      "ODP as an institutional modular layer plus EMS curriculum and knowledge graph—stackable offerings and discovery without abandoning committee and transcript discipline.",
  },
  {
    id: "credit-mobility",
    nepRef: "Ch. 11 — Academic Bank of Credits (ABC), multiple entry/exit",
    problem:
      "Credit portability and evidence of modular learning need consistent digital artefacts; manual spreadsheets break under audit and ABC-style reporting.",
    productHook:
      "Versioned programme objects, completion bundles, and export-oriented credit evidence (including paths aligned to ABC-style digital credit storage where institutions adopt it).",
  },
  {
    id: "outcomes-assessment",
    nepRef: "Ch. 4 / HE Ch. 12 — competency, formative assessment, less rote",
    problem:
      "High-stakes exam-only cultures hide ongoing mastery; leadership lacks timely signals on who is falling behind and why.",
    productHook:
      "Continuous activity and assessment signals in ALS, early alerts and risk views tied to real enrolment and attendance context, and governance-ready logs for review—not a single end-term snapshot.",
  },
  {
    id: "equity-inclusion",
    nepRef: "Ch. 14 — equity & inclusion in HE; Ch. 6 school analogue",
    problem:
      "SEDG students need predictable access, advising, financial and welfare touchpoints, and documentation that does not depend on informal tracking.",
    productHook:
      "Role-based access, targeted comms, counselling and placement workflows on shared records, and accessibility-oriented delivery patterns (e.g. async-first with clear capture of participation).",
  },
  {
    id: "digital-equitable",
    nepRef: "Ch. 23–24 — technology integration; equitable online & digital education",
    problem:
      "Blended and ODL modes must not deepen the digital divide; institutions need standards for content, identity-bound progress, and resilience when campus is disrupted.",
    productHook:
      "Core platform for integration, observability, and messaging; ALS delivery patterns that support blended use; policy on who sees what, when, and on which channel.",
  },
  {
    id: "research",
    nepRef: "Ch. 17 — catalysing quality research; Ch. 9.2(g)",
    problem:
      "Research administration, ethics, funding, and outputs are scattered; institutions struggle to show interdisciplinary impact and repository-grade evidence.",
    productHook:
      "EMS: RIM, grants, ethics, lab linkage, repository/RDM, and knowledge graph discovery—audit-friendly threads from project to publication and dataset.",
  },
  {
    id: "faculty-governance",
    nepRef: "Ch. 13 — motivated faculty; Ch. 18–19 — governance & regulation",
    problem:
      "Faculty load, skills, and compliance expectations rise without integrated HR, workload, and professional development visibility; boards need transparent outcomes reporting.",
    productHook:
      "IMS HR and faculty information patterns, accreditation and institutional reporting modules, and cross-layer analytics where policy allows—supporting autonomy with evidence, not shadow IT.",
  },
  {
    id: "vocational-integration",
    nepRef: "Ch. 16 — vocational education; NSQF alignment (NHEQF sync in Ch. 18)",
    problem:
      "Vocational exposure is meant to merge with general education, but systems still treat short skills modules as outside the formal credit narrative.",
    productHook:
      "ODP and ALS pathways that map to institutional credit templates and NSQF/NHEQF-style qualification thinking when the registrar configures those bridges.",
  },
];
