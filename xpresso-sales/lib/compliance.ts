import type { Framework } from "./types";

export interface ComplianceCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
  frameworks: Framework[];
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
