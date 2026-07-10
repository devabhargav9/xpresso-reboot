import type {
  ExtendedFramework,
  ExtendedFrameworkGroup,
  Framework,
} from "./types";

export interface ComplianceCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
  frameworks: Framework[];
}

export interface ExtendedComplianceCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
  frameworks: ExtendedFramework[];
}

export const COMPLIANCE_CATEGORIES: ComplianceCategory[] = [
  {
    id: "academic",
    title: "Academic Compliance",
    description:
      "Admissions, enrollment, curriculum, attendance, internal assessments, examinations, results, semester progression.",
    items: [
      "Student admissions",
      "Enrollment management",
      "Course & curriculum records",
      "Attendance management",
      "Internal assessments",
      "Assignments",
      "Examination management",
      "Results processing",
      "Academic progression tracking",
      "Semester records",
    ],
    frameworks: ["NAAC", "AISHE", "NBA", "NIRF"],
  },
  {
    id: "faculty",
    title: "Faculty Compliance",
    description:
      "Profiles, qualifications, experience, workload, FDPs, publications, patents, consultancy, research contribution.",
    items: [
      "Faculty profiles",
      "Qualification details",
      "Experience records",
      "Department allocation",
      "Workload distribution",
      "FDP participation",
      "Publications",
      "Patents",
      "Consultancy activities",
      "Research contribution",
    ],
    frameworks: ["NAAC", "NIRF", "UGC", "AICTE"],
  },
  {
    id: "research",
    title: "Research & Innovation Compliance",
    description:
      "Research papers, journals, citations, patents, grants, consultancy, MoUs, workshops, incubation activities.",
    items: [
      "Research papers",
      "Journal publications",
      "Citations",
      "Patents",
      "Grants",
      "Consultancy projects",
      "MoUs",
      "Workshops",
      "Innovation activities",
      "Incubation / startup activities",
    ],
    frameworks: ["NAAC", "NIRF", "NBA"],
  },
  {
    id: "student-development",
    title: "Student Development Compliance",
    description:
      "Placements, internships, scholarships, mentoring, clubs, events, certifications, alumni, progression.",
    items: [
      "Placements",
      "Internship records",
      "Scholarships",
      "Mentoring activities",
      "Student clubs",
      "Events",
      "Certification programs",
      "Alumni records",
      "Higher-education progression",
    ],
    frameworks: ["NAAC", "NIRF"],
  },
  {
    id: "infrastructure",
    title: "Infrastructure Compliance",
    description:
      "Labs, classrooms, library, ICT, equipment, maintenance, hostel, campus resources.",
    items: [
      "Laboratory records",
      "Classroom information",
      "Library management",
      "ICT facilities",
      "Equipment inventory",
      "Maintenance records",
      "Hostel information",
      "Campus resources",
    ],
    frameworks: ["NAAC", "AISHE", "AICTE"],
  },
  {
    id: "administrative",
    title: "Administrative Compliance",
    description:
      "Departments, calendars, timetables, committees, circulars, policies, MoMs, approval workflows, reports.",
    items: [
      "Department records",
      "Academic calendars",
      "Timetables",
      "Committee management",
      "Circulars",
      "Policy documents",
      "Meeting minutes",
      "Approval workflows",
      "Institutional reports",
    ],
    frameworks: ["NAAC", "UGC"],
  },
  {
    id: "quality",
    title: "Quality & Accreditation Compliance",
    description:
      "IQAC, AQAR, SSR, evidence repository, DVV support, criterion tracking, OBE, CO–PO mapping, attainment, audit trails.",
    items: [
      "IQAC management",
      "AQAR preparation",
      "SSR preparation",
      "Evidence repository",
      "DVV support",
      "Criterion tracking",
      "OBE implementation",
      "CO–PO mapping",
      "Attainment reports",
      "Audit trails",
    ],
    frameworks: ["NAAC", "NBA"],
  },
  {
    id: "government-reporting",
    title: "Government & Statistical Reporting",
    description:
      "AISHE filings, institutional profile, department info, student strength, category/gender stats, faculty counts, financials, pass percentages.",
    items: [
      "Institution profile",
      "Department information",
      "Student strength",
      "Category-wise data",
      "Gender statistics",
      "Faculty counts",
      "Financial records",
      "Scholarship data",
      "Pass percentages",
      "Infrastructure statistics",
    ],
    frameworks: ["AISHE", "NIRF"],
  },
];

export interface FrameworkInfo {
  code: Framework;
  fullName: string;
  scope: string;
}

export const FRAMEWORK_INFO: Record<Framework, FrameworkInfo> = {
  NAAC: {
    code: "NAAC",
    fullName: "National Assessment and Accreditation Council",
    scope: "Academics, faculty, research, student support, infrastructure, governance, IQAC.",
  },
  NIRF: {
    code: "NIRF",
    fullName: "National Institutional Ranking Framework",
    scope: "Teaching, research, placements, outcomes, diversity.",
  },
  AISHE: {
    code: "AISHE",
    fullName: "All India Survey on Higher Education",
    scope: "Institutional statistics and government reporting.",
  },
  NBA: {
    code: "NBA",
    fullName: "National Board of Accreditation",
    scope: "OBE, CO–PO mapping, attainment, outcomes.",
  },
  UGC: {
    code: "UGC",
    fullName: "University Grants Commission",
    scope: "Regulations, faculty, administration.",
  },
  AICTE: {
    code: "AICTE",
    fullName: "All India Council for Technical Education",
    scope: "Infrastructure, intake, approvals.",
  },
};

export interface ExtendedFrameworkInfo {
  code: ExtendedFramework;
  label: string;
  fullName: string;
  scope: string;
  group: ExtendedFrameworkGroup;
}

export const EXTENDED_FRAMEWORK_GROUPS: Record<
  ExtendedFrameworkGroup,
  { title: string; blurb: string }
> = {
  "digital-credentials": {
    title: "Digital credentials & credit mobility",
    blurb:
      "The next-decade rails — credit portability, digital transcripts, multidisciplinary flexibility. Non-compliant institutions won't be able to issue transferable credit.",
  },
  "innovation-startup": {
    title: "Innovation & startup ecosystem",
    blurb:
      "MoE-mandated innovation cells and IP / entrepreneurship policies. Directly feed NIRF perception and NAAC criterion 3 & 6.",
  },
  "quality-standard": {
    title: "International quality standard",
    blurb:
      "The global equivalent of NAAC — increasingly required by international collaborations, MoUs and cross-border programs.",
  },
  "internal-audit": {
    title: "Internal audits & continuous quality",
    blurb:
      "Not one-time filings — recurring internal audits that feed NAAC criterion 6 & 7. IQAC-driven, always on.",
  },
};

export const EXTENDED_FRAMEWORK_INFO: Record<
  ExtendedFramework,
  ExtendedFrameworkInfo
> = {
  NEP2020: {
    code: "NEP2020",
    label: "NEP 2020",
    fullName: "National Education Policy 2020",
    scope:
      "Multidisciplinary programs, credit-based flexibility, multiple entry-exit, holistic education.",
    group: "digital-credentials",
  },
  NCrF: {
    code: "NCrF",
    label: "NCrF",
    fullName: "National Credit Framework",
    scope:
      "Unified credit system across school, higher-ed and skilling — enables lifelong credit accumulation.",
    group: "digital-credentials",
  },
  ABC: {
    code: "ABC",
    label: "ABC",
    fullName: "Academic Bank of Credits",
    scope:
      "UGC-managed platform for credit accumulation and transfer across HEIs. Student-owned lifetime credit wallet.",
    group: "digital-credentials",
  },
  DigiLocker: {
    code: "DigiLocker",
    label: "DigiLocker / NAD",
    fullName: "DigiLocker & National Academic Depository",
    scope:
      "Digital storage and verification of academic credentials — degrees, transcripts, mark sheets — instantly verifiable.",
    group: "digital-credentials",
  },
  IIC: {
    code: "IIC",
    label: "IIC",
    fullName: "Institution's Innovation Council",
    scope:
      "MoE-mandated innovation cell — quarterly reporting, star ratings, innovation activity tracking.",
    group: "innovation-startup",
  },
  NISP: {
    code: "NISP",
    label: "NISP",
    fullName: "National Innovation & Startup Policy for Students & Faculty",
    scope:
      "HEI-level startup policy adoption, IP support, faculty-startup involvement, incubator governance.",
    group: "innovation-startup",
  },
  ISO21001: {
    code: "ISO21001",
    label: "ISO 21001",
    fullName: "ISO 21001:2018 — Educational Organizations Management System",
    scope:
      "International standard for education-specific management systems. Increasingly required for MoUs and cross-border programs.",
    group: "quality-standard",
  },
  IQAC: {
    code: "IQAC",
    label: "IQAC",
    fullName: "Internal Quality Assurance Cell",
    scope:
      "NAAC-mandated internal quality body. Runs AQAR, criterion tracking, MoMs, action items, evidence repository.",
    group: "internal-audit",
  },
  GreenAudit: {
    code: "GreenAudit",
    label: "Green / Energy / Environment Audit",
    fullName: "Green, Energy & Environment Audit",
    scope:
      "NAAC criterion 7 mandate — recurring audit of energy, water, waste, air, biodiversity. ESG-adjacent reporting.",
    group: "internal-audit",
  },
  AcademicAudit: {
    code: "AcademicAudit",
    label: "Academic Audit",
    fullName: "Internal Academic Audit",
    scope:
      "Program-wise attainment, curriculum review, teaching-learning review, peer audit — feeds NAAC criterion 1 & 2.",
    group: "internal-audit",
  },
};

// ---------- Extended compliance categories ----------

export const EXTENDED_COMPLIANCE_CATEGORIES: ExtendedComplianceCategory[] = [
  {
    id: "digital-credentials",
    title: "Digital Credentials & Credit Mobility",
    description:
      "Xpresso issues DigiLocker-ready credentials, pushes credits to ABC, aligns programs to NCrF and stays NEP-2020 compliant on multi-disciplinary, exit-entry pathways.",
    items: [
      "NEP 2020 alignment — multidisciplinary programs & flexibility",
      "Multiple entry-exit points with credit preservation",
      "National Credit Framework (NCrF) credit mapping",
      "Academic Bank of Credits (ABC) push — every semester",
      "DigiLocker publishing (degrees, transcripts, mark sheets)",
      "NAD (National Academic Depository) integration",
      "Instant credential verification for recruiters / universities",
      "Student-owned lifetime credit wallet",
    ],
    frameworks: ["NEP2020", "NCrF", "ABC", "DigiLocker"],
  },
  {
    id: "innovation-startup",
    title: "Innovation & Startup Ecosystem",
    description:
      "IIC governance, quarterly innovation reporting, NISP-aligned startup policy, incubator tracking — feeds NAAC criterion 3 & 6 plus NIRF perception scores.",
    items: [
      "IIC composition, meetings & MoMs",
      "IIC quarterly reporting (self-reported + star rating)",
      "Innovation activities calendar",
      "NISP-aligned institutional startup policy",
      "IP disclosures & patent pipeline",
      "Faculty-startup engagements & consultancy tracking",
      "Incubator / accelerator cohort management",
      "Grants, mentorship, prototype funding",
    ],
    frameworks: ["IIC", "NISP"],
  },
  {
    id: "iso21001",
    title: "Educational Management Standard (ISO 21001)",
    description:
      "The international standard for education organizations — becoming a de-facto requirement for cross-border MoUs and international rankings.",
    items: [
      "Learner needs and stakeholder engagement",
      "Educational service management processes",
      "Continual improvement + non-conformance handling",
      "Documented risk / opportunity register",
      "Faculty and staff competency management",
      "Leadership responsibility and quality policy",
    ],
    frameworks: ["ISO21001"],
  },
  {
    id: "internal-audits",
    title: "Internal Audits & Continuous Quality",
    description:
      "IQAC-owned recurring audits — academic, green/energy/environment, gender, and administrative — all live from operational data.",
    items: [
      "IQAC composition, MoMs & criterion tracking",
      "AQAR (Annual Quality Assurance Report) live-builder",
      "Academic audit — program-wise attainment, syllabus completion, curriculum review",
      "Green audit — energy, water, waste, biodiversity",
      "Energy audit — consumption trends, retrofits, ROI",
      "Environment audit — emissions, air quality, sustainability",
      "Gender audit + accessibility audit",
      "Financial & administrative audits with evidence trail",
    ],
    frameworks: ["IQAC", "GreenAudit", "AcademicAudit"],
  },
];
