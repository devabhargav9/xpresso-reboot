/**
 * Broader full-product capability catalog. Shown on /explore/full-scope.
 * The interactive map in `structure.ts` is the three-layer walkthrough; this is the
 * longer checklist for depth conversations.
 */
export type ScopeSection = {
  id: string;
  title: string;
  blurb?: string;
  items: string[];
};

export const FULL_SCOPE_INTRO = {
  title: "Full product scope",
} as const;

export const FULL_SCOPE_SECTIONS: ScopeSection[] = [
  {
    id: "identity",
    title: "1. Identity & access (core platform)",
    items: [
      "Identity management",
      "Single Sign-On (SSO)",
      "Multi-Factor Authentication (MFA)",
      "Role-based access control (student, faculty, admin, placement officer, etc.)",
      "Directory services",
      "Identity governance (joiner–mover–leaver, access reviews, audit)",
    ],
  },
  {
    id: "admissions",
    title: "2. Admissions & institution onboarding",
    blurb: "Ties an admitted applicant to an enrolled student record in the institution.",
    items: [
      "Admissions and application management",
      "Applicant status workflow (applied through active enrollment)",
      "Admission-to-institution onboarding at enrollment",
      "Auto-create and link student to institution during enrollment",
      "Program, batch, semester, and enrollment status",
      "Institutional identity (student ID, username or email per policy)",
      "Onboarding actions (portal access, welcome notifications, defaults)",
    ],
  },
  {
    id: "student-academic",
    title: "3. Student & academic core (IMS / SIS)",
    items: [
      "Student Information System: profiles, records, transcripts",
      "Enrollment management",
      "Course registration",
      "Degree planning and academic advising",
      "Timetable and class scheduling",
      "Curriculum management",
      "Assessment and accreditation support (institutional level)",
    ],
  },
  {
    id: "attendance",
    title: "4. Attendance management (high priority for many institutions)",
    items: [
      "Faculty attendance marking (manual, bulk, timetable-based)",
      "Student attendance visibility (course-wise, period-wise)",
      "Attendance rules (thresholds, condonation, leave and late handling)",
      "Low-attendance alerts (student, advisor, admin)",
      "Attendance-to-eligibility linkage (exam, internal, placement)",
      "Correction workflow with full audit trail",
    ],
  },
  {
    id: "teaching-als",
    title: "5. Teaching & learning (ALS — aligned with product map)",
    items: [
      "LMS and course runtime (courses, modules, lessons)",
      "Assignment management",
      "Grading and gradebook",
      "Online assessments and exams",
      "Live virtual classes and lecture capture",
      "Digital content and material management",
      "Adaptive learning pathways",
      "Learning analytics; student success (alerts, interventions)",
      "AI tutor and coach (course-aware)",
    ],
  },
  {
    id: "odp",
    title: "6. On-demand programs (ODP)",
    blurb:
      "Institution-operated modular programs with credit linkage—not a generic marketplace. Especially relevant where national frameworks emphasize credit mobility and flexible pathways.",
    items: [
      "Modular short programs with structured curriculum, assessments, and declared outcomes under HEI governance",
      "Credit mapping, semester coexistence with core courses, completion and performance tracking toward records",
      "Student discovery and enrollment governed by academic rules (caps, prerequisites, windows)",
      "Asynchronous-first delivery with optional live touchpoints; sequencing, gating, integrity-aligned assessment",
      "Credential evidence and eligibility designed for transcripts and—where adopted—ABC-style credit packets",
      "Program lifecycle administration: publish, revise, credit value, committees, personalization within policy",
      "Alignment direction (NEP 2020 themes): flexibility, multidisciplinary exposure, digital access, outcome evidence for QA—not a substitute for statutory regulation",
    ],
  },
  {
    id: "placement",
    title: "7. Placement & career services",
    items: [
      "Student-facing placement portal (always available from student portal)",
      "Admin posting and management of job openings",
      "Targeted visibility (program, batch, eligibility)",
      "Applications and status tracking",
      "Resume and profile management",
      "Placement notifications (in-app, email, SMS)",
      "Placement analytics and export reports",
    ],
  },
  {
    id: "ems",
    title: "8. Education & knowledge management (EMS — aligned with product map)",
    items: [
      "Research information management",
      "Grants, funding, research finance",
      "Lab and experiment management; research ethics and compliance",
      "Institutional repository; research data management; knowledge graph",
      "Curriculum, publishing, pedagogy, discovery and search, collaboration (as in map)",
    ],
  },
  {
    id: "enterprise",
    title: "9. Enterprise operations (ERP / admin)",
    items: [
      "Finance and accounting",
      "Procurement and vendor management",
      "Budget planning, expense management",
      "Financial reporting and compliance",
      "HR, recruitment, performance, faculty information system (load, output, tenure)",
      "Workflow and BPM; enterprise content and records",
    ],
  },
  {
    id: "campus",
    title: "10. Campus and institutional operations",
    items: [
      "Facilities management",
      "Room scheduling",
      "IT service desk and ticketing",
      "Library operations (access, licensing)",
      "Campus card and access; physical security integration (where required)",
    ],
  },
  {
    id: "data",
    title: "11. Data, analytics, and intelligence",
    items: [
      "Data warehouse or lakehouse",
      "Business intelligence dashboards",
      "Institutional and accreditation reporting",
      "Master Data Management (MDM)",
      "Outcome and cross-module analytics (academics, operations, placement, research)",
    ],
  },
  {
    id: "integration",
    title: "12. Integration & API platform",
    items: [
      "API gateway and management",
      "Integration middleware (iPaaS / ESB-style)",
      "Event streaming for real-time signals",
      "Connectors to SIS, ERP, LMS, video, payment, and partner tools",
    ],
  },
  {
    id: "infra",
    title: "13. Infrastructure, security, and reliability",
    items: [
      "Cloud and capacity management (as product or policy)",
      "Network and operations visibility",
      "SIEM, security operations (integrate or embed)",
      "Observability; backup and disaster recovery; endpoint or device policies where needed",
    ],
  },
  {
    id: "comms",
    title: "14. Communication and engagement (cross-cutting)",
    items: [
      "Announcements, in-app and email/SMS notifications",
      "Audience targeting (role, program, batch); communication logging",
    ],
  },
  {
    id: "compliance",
    title: "15. Compliance, trust, and quality",
    items: [
      "Audit logs for critical actions",
      "Data retention and records policy controls; consent and privacy",
      "Accessibility baseline (e.g. WCAG-oriented patterns)",
      "Institutional export and audit packs",
    ],
  },
  {
    id: "extended",
    title: "16. Often phased after first launch",
    items: [
      "Alumni and advancement",
      "Scholarships and financial aid (dedicated module)",
      "Deep student life (housing, orgs) where in scope",
      "Employer portal; deeper assessment ecosystem (proctoring, plagiarism) via partners",
    ],
  },
];
