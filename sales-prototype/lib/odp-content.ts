/**
 * Long-form ODP (On-Demand Programs) narrative for /explore/als/odp.
 * NEP 2020 hooks reflect commonly cited national-policy themes (credit mobility,
 * flexibility, multidisciplinary exposure, digital delivery); tune per institution.
 */

export const ODP_PAGE = {
  title: "On-demand programs (ODP)",
  eyebrow: "Learning (ALS) · modular academic layer",
  intro:
    "ODP is an institutional academic layer—not a public course marketplace. Universities plug in short-duration, credit-linked programs in emerging fields without standing up a new department or permanent hiring cycle for every topic. Delivery, assessment, completion evidence, and credit rules stay under the institution’s governance and identity model.",
  howItFits: [
    "Uses the same roster, authentication, and academic rules spine as degree courses when you wire them together.",
    "Treats each ODP as a governed program object: outcomes, credit value, approvals—publishable and auditable like formal curriculum.",
    "Produces structured completion and performance signals suitable for transcript reflection, ABC-style credit packets where adopted, and internal QA—not disconnected certificates in a third-party app.",
  ],
  sections: [
    {
      title: "Core concept",
      items: [
        "Modular programs (often roughly two to six weeks) with structured curriculum, learning assets, assessments, and explicit outcomes.",
        "Runs as infrastructure the HEI operates: cataloguing, enrollment caps, prerequisites, and academic oversight—not anonymous consumer subscriptions.",
        "Designed so agility coexists with semester calendars and existing departments rather than bypassing them permanently.",
      ],
    },
    {
      title: "Problem we are solving",
      items: [
        "Structural drag: formal curriculum refresh cycles are slow; new subjects otherwise imply hiring, committee approvals, and departmental reshaping.",
        "Student behaviour: serious learning increasingly happens in cohort courses, bootcamps, and creator-led formats outside the formal timetable—creating parallel credential ecosystems.",
        "Risk if ignored: weaker job-readiness narrative for the degree, more reliance on external platforms, and fragmented proof of learning at graduation.",
      ],
    },
    {
      title: "Market context (concise)",
      items: [
        "Modular and skill-forward formats continue to grow faster than traditional catalogue expansion alone.",
        "Employers still anchor trust in institutional governance—ODP lets the HEI mediate emerging skills without pretending every topic needs a new department.",
      ],
    },
    {
      title: "What ODP must cover",
      items: [
        "Program layer: host modular offerings with duration, modules, assessments, and outcomes owned by the institution.",
        "Academic integration layer: credit mapping toward your credit framework; coexistence within semesters; tracking completion, performance, and credits earned.",
        "Student choice layer: discovery, transparent prerequisites, enrollment windows aligned with academic rules.",
        "Delivery layer: asynchronous-first with optional synchronous touchpoints; video, assignments, projects, quizzes with sequencing and gates.",
        "Credential layer: authoritative completion evidence and credit eligibility designed to integrate with records—not orphaned PDFs.",
      ],
    },
    {
      title: "Key system components",
      items: [
        "Program management: create, revise, publish ODPs; define duration, modules, assessments, credit value, and governance checkpoints.",
        "Student experience: discovery, enrollment, learning dashboard, progress against outcomes.",
        "Learning delivery: hosted content, ordered modules, unlock rules tied to mastery or time policies you configure.",
        "Assessment: quizzes, file submissions, rubrics, and grading hooks aligned with institutional academic integrity standards.",
        "Personalization (within policy): suggested ODPs from branch, interests, or degree context; pace signals that respect advisor overrides.",
      ],
    },
    {
      title: "How X’Presso positions ODP against NEP-style priorities (India)",
      items: [
        "Credit granularity & mobility: completion artefacts structured so institutions adopting Academic Bank of Credits (ABC) mechanics can export consistent credit packets—not hand-retyped spreadsheets.",
        "Flexibility without chaos: stackable short offerings complement degree pathways; governance prevents “shadow curricula” outside oversight.",
        "Multidisciplinary / employability exposure: curated emerging topics alongside core programs—still branded and quality-controlled by the HEI.",
        "Digital & equitable access: identity-bound progress, async-first delivery, and audit trails suitable for NAAC / IQAC narratives on digital learning.",
        "Outcome orientation: explicit outcomes and assessment evidence per ODP support accreditation storytelling and continuous improvement loops.",
      ],
    },
  ],
  outro:
    "ODP closes the gap between slow catalogue change and fast-moving skills—without surrendering academic authority. It belongs inside ALS delivery plus IMS academic records discipline so students experience one institution, one transcript logic, and one trust model.",
} as const;
