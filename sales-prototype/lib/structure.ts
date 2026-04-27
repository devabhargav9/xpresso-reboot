/** Interactive product map: three layers (IMS, ALS, EMS) + platform groups. */

export type ModuleItem = {
  id: string;
  code: string;
  title: string;
  items: string[];
  numbers: [number, number];
};

export type ModuleGroup = {
  code: string;
  name: string;
  modules: ModuleItem[];
  tagline: string;
  accent: "als" | "ems" | "ims";
  simplified: { label: string; slug: string }[];
};

export const LAYERS: ModuleGroup[] = [
  {
    code: "IMS",
    name: "Institutional Management System",
    tagline:
      "Run the institution as an organization: money, people, processes, campus, and student lifecycle.",
    accent: "ims",
    simplified: [
      { label: "Student Lifecycle", slug: "i1" },
      { label: "Attendance", slug: "attendance" },
      { label: "Placement", slug: "placement" },
      { label: "ERP", slug: "i2" },
      { label: "HR", slug: "i3" },
      { label: "Campus", slug: "i4" },
      { label: "Services", slug: "i5" },
      { label: "Governance", slug: "i6" },
    ],
    modules: [
      {
        id: "i1",
        code: "I1",
        title: "Student Lifecycle Module",
        numbers: [34, 39],
        items: [
          "Student Information System (SIS)",
          "Admissions & Application Management",
          "Enrollment Management",
          "Academic Records / Transcript System",
          "Degree Planning / Advising",
          "Course Registration",
          "Academic timetable / class scheduling (aligned with offerings and rooms)",
        ],
      },
      {
        id: "attendance",
        code: "I7",
        title: "Attendance system",
        numbers: [60, 60],
        items: [
          "Faculty and class attendance marking (manual, bulk, timetable-based)",
          "Student view of participation and percentage by course and period",
          "Rules: thresholds, condonation, late and leave handling; alerts to students and staff",
          "Linkage to exam, internal, and placement eligibility when policy requires it",
          "Corrections with approval and full audit history for compliance",
        ],
      },
      {
        id: "placement",
        code: "I8",
        title: "Placement & career services",
        numbers: [61, 61],
        items: [
          "Student placement portal (same sign-in and portal as the rest of the platform)",
          "Institution-owned job postings and visibility by program, batch, and eligibility",
          "Applications, status tracking, resume and profile, notifications (in-app, email, SMS)",
          "Shortlists, funnel, and exports for campus drives, sign-off, and year-end reports",
        ],
      },
      {
        id: "i2",
        code: "I2",
        title: "Finance & ERP Module",
        numbers: [40, 45],
        items: [
          "Financial ERP System",
          "Procurement / Vendor Management",
          "Budget Planning",
          "Payroll",
          "Expense Management",
          "Financial Reporting & Compliance",
        ],
      },
      {
        id: "i3",
        code: "I3",
        title: "People / HR Module",
        numbers: [46, 49],
        items: [
          "Human Resources Management",
          "Recruitment / Hiring",
          "Performance Management",
          "Faculty Information System",
        ],
      },
      {
        id: "i4",
        code: "I4",
        title: "Campus Operations Module",
        numbers: [50, 53],
        items: [
          "Facilities Management",
          "Room Scheduling",
          "Campus Card / Identity System",
          "Physical Security & Surveillance",
        ],
      },
      {
        id: "i5",
        code: "I5",
        title: "Service Operations Module",
        numbers: [54, 56],
        items: [
          "IT Service Desk / ITSM",
          "Workflow / BPM Automation",
          "Enterprise Content & Records",
        ],
      },
      {
        id: "i6",
        code: "I6",
        title: "Governance Module",
        numbers: [57, 59],
        items: [
          "Accreditation Management",
          "Institutional Reporting",
          "Policy & Compliance",
          "Audit trails and evidentiary exports for regulators and accreditation packs",
        ],
      },
    ],
  },
  {
    code: "ALS",
    name: "Adaptive Learning System",
    tagline: "Everything directly related to how an individual student learns.",
    accent: "als",
    simplified: [
      { label: "Learn", slug: "a1" },
      { label: "Assess", slug: "a2" },
      { label: "Live Classes", slug: "a3" },
      { label: "Adaptive AI", slug: "a4" },
      { label: "Success Tracking", slug: "a5" },
    ],
    modules: [
      {
        id: "a1",
        code: "A1",
        title: "Learning Delivery Module",
        numbers: [1, 4],
        items: [
          "Learning Management System (LMS)",
          "Digital Content / Course Material Platform",
          "Assignment System",
          "Grading System",
        ],
      },
      {
        id: "a2",
        code: "A2",
        title: "Assessment Module",
        numbers: [5, 7],
        items: [
          "Online Assessment / Exam Platform",
          "Quiz generator",
          "Proctoring-ready Exam Tools",
        ],
      },
      {
        id: "a3",
        code: "A3",
        title: "Live Learning Module",
        numbers: [8, 9],
        items: [
          "Virtual Classroom / Video Teaching",
          "Lecture Capture System",
        ],
      },
      {
        id: "a4",
        code: "A4",
        title: "Adaptive Intelligence Module",
        numbers: [10, 14],
        items: [
          "Personalized Learning Paths",
          "AI Tutor",
          "Cognitive Graph",
          "Mastery Tracking",
          "Learning Analytics",
        ],
      },
      {
        id: "a5",
        code: "A5",
        title: "Student Success Module",
        numbers: [15, 17],
        items: [
          "Early Alerts",
          "Progress Nudges",
          "Academic Risk Detection",
        ],
      },
    ],
  },
  {
    code: "EMS",
    name: "Education Management System",
    tagline: "Creation, storage, and transfer of institutional knowledge.",
    accent: "ems",
    simplified: [
      { label: "Research", slug: "e1" },
      { label: "Repository", slug: "e2" },
      { label: "Curriculum", slug: "e3" },
      { label: "Collaboration", slug: "e4" },
      { label: "Knowledge Graph", slug: "e5" },
    ],
    modules: [
      {
        id: "e1",
        code: "E1",
        title: "Research Creation Module",
        numbers: [18, 22],
        items: [
          "Research Information Management System",
          "Grant Proposal Management",
          "Research Funding Administration",
          "Lab Management System",
          "Research Compliance & Ethics",
        ],
      },
      {
        id: "e2",
        code: "E2",
        title: "Knowledge Storage Module",
        numbers: [23, 25],
        items: [
          "Institutional Repository / Publications System",
          "Research Data Management Platform",
          "Physical & Digital Library Knowledge Repository",
        ],
      },
      {
        id: "e3",
        code: "E3",
        title: "Knowledge Transfer Module",
        numbers: [26, 29],
        items: [
          "Curriculum Management System",
          "Publishing Workflow",
          "Pedagogy Tools",
          "Knowledge Discovery / Search",
        ],
      },
      {
        id: "e4",
        code: "E4",
        title: "Collaboration Module",
        numbers: [30, 32],
        items: [
          "Faculty Collaboration System",
          "Inter-University Collaboration",
          "Shared Research Workspace",
        ],
      },
      {
        id: "e5",
        code: "E5",
        title: "Intelligence Graph Module",
        numbers: [33, 33],
        items: [
          "University Knowledge Graph (People ↔ Papers ↔ Courses ↔ Labs ↔ Data)",
        ],
      },
    ],
  },
];

export const PLATFORM = {
  title: "Core Platform",
  subtitle: "Identity, data, integration, and security—shared across IMS, ALS, and EMS.",
  groups: [
    {
      name: "Identity & access",
      items: [
        "Identity Management",
        "Single Sign-On (SSO)",
        "Multi-Factor Authentication (MFA)",
        "Role & Permissions",
        "Directory Services",
        "Identity governance (joiner–mover–leaver, access reviews, accountability)",
      ],
    },
    {
      name: "Data & integration",
      items: [
        "Data Warehouse",
        "Business Intelligence / Analytics",
        "Outcome and cross-product analytics (where policy allows)",
        "Master Data Management (MDM)",
        "API / Middleware / Integration",
        "Event streaming for real-time operational signals",
      ],
    },
    {
      name: "Security & operations",
      items: [
        "Cloud Infrastructure",
        "Network Management",
        "SIEM (Security Information & Event Management)",
        "Security Operations",
        "Backup & Disaster Recovery",
        "Observability / Monitoring",
        "Endpoint / device policies where institutions require them",
      ],
    },
    {
      name: "Communication & AI",
      items: [
        "Communication system (announcements, email, in-app, SMS)",
        "Communication engine (routing, templates, audiences)",
        "AI Chatbot (helpdesk & institutional knowledge)",
      ],
    },
  ],
} as const;

export function findModule(
  layerCode: string,
  moduleId: string
): { layer: ModuleGroup; mod: ModuleItem } | null {
  const layer = LAYERS.find((l) => l.code === layerCode);
  if (!layer) return null;
  const mod = layer.modules.find((m) => m.id === moduleId) ?? null;
  if (!mod) return null;
  return { layer, mod };
}
