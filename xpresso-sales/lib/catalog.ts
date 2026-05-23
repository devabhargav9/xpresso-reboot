import type { Layer } from "./types";

export const LAYERS: Layer[] = [
  {
    code: "ALS",
    name: "Adaptive Learning System",
    tagline: "How a student learns — personalized, multi-modal, cognitively aware.",
    longDescription:
      "ALS is an LMS with a brain. The four marquee demos (Cognitive Profile, Adaptive Path, AI Tutor, Effort-fair Assessment) sit on top of a full learning delivery stack. Everything below is the supporting product around them.",
    modules: [
      {
        id: "learning-delivery",
        title: "Learning Delivery",
        tagline: "Day-to-day delivery: courses, content, assignments, grading.",
        features: [
          {
            name: "Course delivery (LMS core)",
            what: "Course pages, sections, schedules, announcements, gradebook.",
            gives: "The everyday LMS surface students and faculty use — but with atoms underneath, not monolithic chapters.",
            frameworks: ["NAAC", "AISHE", "NBA"],
            stakeholders: ["Student", "Faculty", "Dept Head"],
          },
          {
            name: "Assignment system",
            what: "Create, distribute, submit, grade, rubric-evaluate, return.",
            frameworks: ["NAAC", "NBA"],
            stakeholders: ["Student", "Faculty"],
          },
          {
            name: "Grading & gradebook",
            what: "Per-atom, per-course, per-program views. Rubric-driven; tied to outcomes.",
            frameworks: ["NAAC", "NBA"],
            stakeholders: ["Student", "Faculty", "Exam Cell"],
          },
          {
            name: "Multi-modal content library",
            what: "Student-facing library of atoms in PDF, audio, video, and 3D variants.",
            gives: "The consumer side of EMS's generation factory.",
            stakeholders: ["Student", "Faculty"],
          },
          {
            name: "Concept lineage viewer",
            what: "Click any topic to see its prerequisites, its leads-to chain, and the courses that use it.",
            gives: "Students stop feeling like topics are arbitrary; they see the spine.",
            stakeholders: ["Student", "Faculty"],
          },
        ],
      },
      {
        id: "live-learning",
        title: "Live Learning",
        tagline: "Synchronous classes — virtual rooms, capture, recordings.",
        features: [
          {
            name: "Virtual classroom",
            what: "Live video class with attendance, polls, breakout rooms, shared whiteboard.",
            stakeholders: ["Student", "Faculty"],
          },
          {
            name: "Lecture capture",
            what: "Automatic recording, transcription, and chapter markers tied to atoms.",
            stakeholders: ["Student", "Faculty"],
          },
          {
            name: "Recordings library",
            what: "Browseable archive of past sessions with search by concept.",
            stakeholders: ["Student", "Faculty"],
          },
        ],
      },
      {
        id: "assessment-ops",
        title: "Assessment Operations",
        tagline: "Day-to-day exams, quizzes, question banks, results.",
        features: [
          {
            name: "Online assessment platform",
            what: "Internal assessments, quizzes, and end-of-term exams with question types ranging from MCQ to free response.",
            frameworks: ["NAAC", "NBA"],
            stakeholders: ["Student", "Faculty", "Exam Cell"],
          },
          {
            name: "Quiz generator",
            what: "Generate quizzes from atoms with target difficulty and coverage.",
            stakeholders: ["Faculty"],
          },
          {
            name: "Proctoring-ready exam tools",
            what: "Webcam-optional integrity tooling — interaction trail, timing analysis, follow-up probes.",
            gives: "Non-invasive proctoring tied to the Effort-fair Assessment demo's philosophy.",
            frameworks: ["NAAC"],
            stakeholders: ["Faculty", "Exam Cell"],
          },
          {
            name: "Results processing",
            what: "Compute, moderate, publish results; flow into IMS academic records.",
            frameworks: ["NAAC", "AISHE", "NBA"],
            stakeholders: ["Exam Cell", "Admin"],
          },
        ],
      },
      {
        id: "student-success",
        title: "Student Success",
        tagline: "Risk detection, nudges, early alerts, wellness signals.",
        features: [
          {
            name: "Early alerts",
            what: "Combine attendance + mastery + engagement signals to flag students 4–6 weeks before failure or dropout.",
            frameworks: ["NAAC", "NIRF"],
            stakeholders: ["Faculty", "Dept Head", "Admin"],
          },
          {
            name: "Progress nudges",
            what: "Personalized, twin-aware nudges to keep momentum — not generic 'study harder' messages.",
            stakeholders: ["Student"],
          },
          {
            name: "Wellness signals",
            what: "Attention/load drops over time → surface to a mentor before academic risk hardens.",
            stakeholders: ["Student", "Faculty"],
          },
          {
            name: "Cohort matcher",
            what: "Pair learners with complementary cognitive profiles for study buddies.",
            stakeholders: ["Student"],
          },
        ],
      },
      {
        id: "retention",
        title: "Retention & Scheduling",
        tagline: "Spaced repetition + smart recall driven by the knowledge graph.",
        features: [
          {
            name: "Forgetting-curve scheduler",
            what: "Surfaces atoms a student is about to forget; schedules 5–15 minute recall micro-sessions.",
            gives: "Retention often doubles or triples vs. cramming-driven study patterns.",
            stakeholders: ["Student"],
          },
          {
            name: "Mastery dashboard",
            what: "Per-concept mastery with confidence and decay timelines.",
            stakeholders: ["Student", "Faculty"],
          },
        ],
      },
      {
        id: "on-demand-programs",
        title: "On-demand Programs (student surface)",
        tagline: "Discover, enroll, learn. ODP is a cross-cutting capability — student side lives here.",
        features: [
          {
            name: "ODP discovery & catalog",
            what: "Browseable catalog of ODPs filtered by interest, branch, credit value, time per week, and predicted completion.",
            stakeholders: ["Student"],
          },
          {
            name: "Career-driven recommender",
            what: "Cognitive twin + IMS placement + EMS curriculum → 2–4 ODPs ranked by closing-the-gap leverage for your target role.",
            demoSlug: "odp/career-recommender",
            stakeholders: ["Student", "Dept Head"],
          },
          {
            name: "1-click enrollment with clash detection",
            what: "Semester-aware enrollment that checks clashes, fees, scholarship eligibility, and credit caps.",
            frameworks: ["NAAC", "UGC"],
            stakeholders: ["Student", "Admin"],
          },
          {
            name: "ODP learning dashboard",
            what: "Progress, pace, predicted completion, AI tutor that knows both your regular courses and the ODP.",
            stakeholders: ["Student"],
          },
          {
            name: "Progress gating & sequencing",
            what: "Atoms unlock as prereqs are mastered; configurable strict / soft gating per program.",
            stakeholders: ["Student", "Faculty"],
          },
          {
            name: "Pace tracking",
            what: "Forgetting-curve scheduling, attention/load signals, and risk alerts adapted to the short-program rhythm.",
            stakeholders: ["Student"],
          },
        ],
      },
      {
        id: "adaptive-intelligence",
        title: "Adaptive Intelligence (demos)",
        tagline: "The four ALS marquee demos.",
        features: [
          {
            name: "Cognitive Profile Builder",
            what: "Onboarding battery that produces the cognitive twin.",
            demoSlug: "als/profile",
            stakeholders: ["Student"],
          },
          {
            name: "Adaptive Path + Multi-modal Twin",
            what: "Per-student graph walk with modality selection and full explainability.",
            demoSlug: "als/adaptive-path",
            stakeholders: ["Student", "Faculty"],
          },
          {
            name: "AI Tutor",
            what: "Twin-aware, graph-grounded tutor that routes back to prereqs.",
            demoSlug: "als/ai-tutor",
            stakeholders: ["Student"],
          },
          {
            name: "Effort-fair, AI-aware Assessment",
            what: "Distinguishes thought-through from AI-pasted answers using interaction trails + adaptive follow-ups.",
            demoSlug: "als/effort-fair-assessment",
            stakeholders: ["Faculty", "Exam Cell"],
          },
        ],
      },
    ],
  },
  {
    code: "EMS",
    name: "Education Management System",
    tagline: "How knowledge is created, stored, and improved.",
    longDescription:
      "EMS is the engine. Faculty + AI co-author knowledge atoms; the knowledge graph holds the institution's curriculum; ALS signals flow back so content keeps improving every cohort.",
    modules: [
      {
        id: "authoring",
        title: "Atom Authoring & Generation (demo)",
        tagline: "The EMS marquee demo — one atom in, four modalities out.",
        features: [
          {
            name: "Atom authoring",
            what: "Author at atom granularity with declared outcomes, prereqs, difficulty, misconceptions targeted.",
            demoSlug: "ems/atom-authoring",
            stakeholders: ["Faculty"],
          },
          {
            name: "Multi-modal generation factory",
            what: "Generate PDF / audio / video / 3D variants of a single atom with a faculty approval queue.",
            demoSlug: "ems/atom-authoring",
            stakeholders: ["Faculty"],
          },
        ],
      },
      {
        id: "graph",
        title: "Knowledge Graph & OBE (Outcome-Based Education) (demo)",
        tagline: "Institution's curriculum as a navigable graph; CO–PO (Course Outcomes → Program Outcomes) falls out for free.",
        features: [
          {
            name: "Knowledge Graph Explorer",
            what: "Concepts, prereqs, leads-to, courses, research links — one explorable view.",
            demoSlug: "ems/knowledge-graph",
            frameworks: ["NAAC", "NBA"],
            stakeholders: ["Faculty", "Dept Head", "IQAC"],
          },
          {
            name: "OBE / CO–PO mapping (live)",
            what: "Concept nodes mapped to course and program outcomes; live attainment from student data.",
            demoSlug: "ems/knowledge-graph",
            frameworks: ["NAAC", "NBA"],
            stakeholders: ["Dept Head", "IQAC"],
          },
          {
            name: "NEP / NSQF outcome mapping",
            what: "National Education Policy (NEP) and National Skills Qualifications Framework (NSQF) mappings as graph attributes — exports for policy reporting.",
            frameworks: ["NAAC", "UGC", "AICTE"],
            stakeholders: ["IQAC", "Principal"],
          },
        ],
      },
      {
        id: "copilot",
        title: "Faculty AI Co-Pilot (demo)",
        tagline: "Augment every faculty action.",
        features: [
          {
            name: "Faculty AI Co-Pilot",
            what: "Generate question variants, draft rubrics, suggest curriculum updates from new research, flag misconception trends.",
            demoSlug: "ems/faculty-copilot",
            stakeholders: ["Faculty"],
          },
        ],
      },
      {
        id: "heatmap",
        title: "Mastery → Rewrite Loop (demo)",
        tagline: "ALS signals flow back into better content.",
        features: [
          {
            name: "Live mastery heatmap",
            what: "Real-time cohort heatmap on each atom; click red cells to see the misconception.",
            demoSlug: "ems/heatmap-loop",
            frameworks: ["NAAC", "NBA"],
            stakeholders: ["Faculty", "Dept Head"],
          },
          {
            name: "Atom rewrite loop",
            what: "Edit the atom with the misconception pre-loaded; v2 publishes back to ALS automatically.",
            demoSlug: "ems/heatmap-loop",
            stakeholders: ["Faculty"],
          },
        ],
      },
      {
        id: "odp-authoring",
        title: "ODP Program Assembly (authoring side)",
        tagline: "Compose modular short programs from existing atoms — same library as regular courses.",
        features: [
          {
            name: "Program builder",
            what: "Drag atoms from the knowledge graph into a 2–6 week sequence; set duration, modules, credit value, outcomes.",
            stakeholders: ["Faculty", "Dept Head", "IQAC"],
          },
          {
            name: "Credit & NEP metadata",
            what: "Tag programs with NEP credit value, NSQF level, multidisciplinary basket, and ABC eligibility.",
            frameworks: ["NAAC", "UGC", "AICTE"],
            stakeholders: ["Dept Head", "IQAC"],
          },
          {
            name: "Reused atoms across regular + ODP",
            what: "Author once, deploy in both regular courses and ODPs. v2 of any atom benefits both surfaces.",
            stakeholders: ["Faculty"],
          },
          {
            name: "Program lifecycle & approvals",
            what: "Draft → committee review → approval → publish; full audit trail for accreditation.",
            frameworks: ["NAAC", "UGC"],
            stakeholders: ["IQAC", "Dept Head"],
          },
          {
            name: "Program-level rubrics & projects",
            what: "Faculty co-pilot drafts rubrics, projects, and quiz banks for the ODP from its declared outcomes.",
            stakeholders: ["Faculty"],
          },
        ],
      },
      {
        id: "curriculum",
        title: "Curriculum Management",
        tagline: "Curriculum design, syllabus versioning, outcome alignment.",
        features: [
          {
            name: "Curriculum design",
            what: "Compose programs from courses, courses from atoms; versioned and approvable.",
            frameworks: ["NAAC", "NBA", "UGC"],
            stakeholders: ["Dept Head", "IQAC"],
          },
          {
            name: "Syllabus versioning",
            what: "Track which cohort received which syllabus version; tied to atom versions.",
            frameworks: ["NAAC", "NBA"],
            stakeholders: ["Dept Head", "Exam Cell"],
          },
        ],
      },
      {
        id: "research",
        title: "Research Information Management",
        tagline: "Papers, citations, patents, grants, consultancy.",
        features: [
          {
            name: "Publications",
            what: "Faculty publications with citations and impact metrics.",
            frameworks: ["NAAC", "NIRF"],
            stakeholders: ["Faculty", "Research Cell"],
          },
          {
            name: "Patents",
            what: "Patent filings, grants, licenses, IP records.",
            frameworks: ["NAAC", "NIRF", "NBA"],
            stakeholders: ["Research Cell", "Principal"],
          },
          {
            name: "Grants",
            what: "Grant applications, awards, utilization, audit-ready records.",
            frameworks: ["NAAC", "NIRF"],
            stakeholders: ["Research Cell", "Admin"],
          },
          {
            name: "Consultancy projects",
            what: "Industry consultancy projects with revenue and outcomes.",
            frameworks: ["NAAC", "NIRF", "NBA"],
            stakeholders: ["Faculty", "Research Cell"],
          },
          {
            name: "MoUs",
            what: "Memoranda of Understanding with industry and other institutions.",
            frameworks: ["NAAC", "NIRF"],
            stakeholders: ["Principal", "Research Cell"],
          },
        ],
      },
      {
        id: "storage",
        title: "Knowledge Storage",
        tagline: "Institutional repository, research data, library.",
        features: [
          {
            name: "Institutional repository",
            what: "Versioned, immutable repository of theses, publications, datasets, and atoms.",
            frameworks: ["NAAC"],
            stakeholders: ["Research Cell", "Faculty", "IQAC"],
          },
          {
            name: "Research data management",
            what: "Datasets with metadata, provenance, and access controls.",
            frameworks: ["NAAC"],
            stakeholders: ["Research Cell"],
          },
          {
            name: "Physical & digital library",
            what: "Catalog, holdings, e-resources, integrations with national databases.",
            frameworks: ["NAAC", "AISHE", "AICTE"],
            stakeholders: ["Student", "Faculty", "Admin"],
          },
        ],
      },
      {
        id: "collaboration",
        title: "Collaboration",
        tagline: "Faculty workspaces, inter-university collaboration.",
        features: [
          {
            name: "Faculty workspaces",
            what: "Shared spaces for syllabus design, paper writing, rubric tuning.",
            stakeholders: ["Faculty", "Dept Head"],
          },
          {
            name: "Inter-university collaboration",
            what: "Share or import atoms, datasets, and curricula across institutions.",
            stakeholders: ["Faculty", "Research Cell"],
          },
        ],
      },
      {
        id: "pedagogy",
        title: "Pedagogy Tools",
        tagline: "Lesson planning, rubrics, question banks.",
        features: [
          {
            name: "Lesson planning",
            what: "Plan a session against atoms, outcomes, and difficulty.",
            stakeholders: ["Faculty"],
          },
          {
            name: "Rubric library",
            what: "Institution-wide rubrics with outcome alignment.",
            frameworks: ["NAAC", "NBA"],
            stakeholders: ["Faculty", "IQAC"],
          },
          {
            name: "Question bank with AI variants",
            what: "Searchable bank with AI-generated variants and difficulty calibration.",
            stakeholders: ["Faculty", "Exam Cell"],
          },
        ],
      },
    ],
  },
  {
    code: "IMS",
    name: "Institution Management System",
    tagline: "How the institution actually runs — operations A to Z.",
    longDescription:
      "IMS is the foundation: SIS, HR, finance, attendance, library, hostel, placement, governance. Standard surface that every institution needs — but wired into ALS and EMS so compliance is live and outcomes are real, not exported once a year.",
    modules: [
      {
        id: "student-lifecycle",
        title: "Student Lifecycle",
        tagline: "Admissions to alumni — the SIS spine.",
        features: [
          {
            name: "Student Information System (SIS)",
            what: "Master student records — demographics, programs, sections, status.",
            frameworks: ["NAAC", "AISHE", "NIRF"],
            stakeholders: ["Admin", "Dept Head"],
          },
          {
            name: "Admissions & application management",
            what: "Application intake, eligibility checks, offer letters, fee gateway.",
            frameworks: ["NAAC", "AISHE"],
            stakeholders: ["Admin"],
          },
          {
            name: "Enrollment & course registration",
            what: "Per-semester registration with prerequisite checks from the knowledge graph.",
            frameworks: ["NAAC", "NBA"],
            stakeholders: ["Student", "Admin", "Dept Head"],
          },
          {
            name: "Academic records / transcripts",
            what: "Verified academic history, transcripts, certificates.",
            frameworks: ["NAAC", "AISHE", "UGC"],
            stakeholders: ["Student", "Exam Cell", "Admin"],
          },
          {
            name: "Degree planning / advising",
            what: "What-if planner across electives and ODPs.",
            stakeholders: ["Student", "Dept Head"],
          },
        ],
      },
      {
        id: "odp-integration",
        title: "ODP Integration (credit & records)",
        tagline: "Where ODPs become real institutional credit — transcript, ABC, placement eligibility.",
        features: [
          {
            name: "ODP credit mapping",
            what: "Map ODP completions to credit values in the university's existing credit system. Semester-aware caps and rules.",
            frameworks: ["NAAC", "UGC"],
            stakeholders: ["Admin", "Dept Head", "IQAC"],
          },
          {
            name: "Transcript inclusion",
            what: "Completed ODPs appear on the official transcript like any other course — not as an external certificate.",
            frameworks: ["NAAC", "UGC"],
            stakeholders: ["Student", "Admin"],
          },
          {
            name: "Academic Bank of Credits (ABC) export",
            what: "Push completion records to the national ABC repository for portability across institutions.",
            frameworks: ["UGC"],
            stakeholders: ["Admin", "Student"],
          },
          {
            name: "ODP fees & scholarships",
            what: "Fee structures, scholarship eligibility, and dues handled by the same finance module as regular courses.",
            frameworks: ["UGC"],
            stakeholders: ["Admin", "Student"],
          },
          {
            name: "Placement eligibility update",
            what: "ODP completions auto-update placement eligibility filters — students see new openings as they finish programs.",
            frameworks: ["NAAC", "NIRF"],
            stakeholders: ["Student", "Admin"],
          },
        ],
      },
      {
        id: "faculty-hr",
        title: "Faculty & HR",
        tagline: "People operations — from hiring through performance.",
        features: [
          {
            name: "Faculty information system",
            what: "Profiles, qualifications, experience, department allocation.",
            frameworks: ["NAAC", "NIRF", "UGC", "AICTE"],
            stakeholders: ["Admin", "Dept Head"],
          },
          {
            name: "Recruitment & hiring",
            what: "Position approvals, interviews, offers, onboarding.",
            frameworks: ["UGC", "AICTE"],
            stakeholders: ["Admin"],
          },
          {
            name: "Performance management",
            what: "Performance reviews tied to teaching outcomes and research output.",
            frameworks: ["NAAC", "UGC"],
            stakeholders: ["Faculty", "Dept Head", "Admin"],
          },
          {
            name: "Workload distribution",
            what: "Teaching, research, administrative workload per faculty.",
            frameworks: ["NAAC", "UGC", "AICTE"],
            stakeholders: ["Dept Head", "Admin"],
          },
          {
            name: "FDP participation",
            what: "Faculty Development Program enrollments and outcomes.",
            frameworks: ["NAAC", "UGC", "AICTE"],
            stakeholders: ["Faculty", "Admin"],
          },
        ],
      },
      {
        id: "finance-erp",
        title: "Finance & ERP",
        tagline: "Fees, payroll, procurement, budget, expense.",
        features: [
          {
            name: "Fees & receivables",
            what: "Fee structures, invoicing, gateways, reconciliations, dues.",
            frameworks: ["AISHE", "UGC"],
            stakeholders: ["Admin", "Student"],
          },
          {
            name: "Payroll",
            what: "Faculty and staff payroll with statutory deductions.",
            frameworks: ["UGC"],
            stakeholders: ["Admin"],
          },
          {
            name: "Procurement & vendor management",
            what: "RFQs, POs, vendor records, GRN.",
            frameworks: ["NAAC", "AICTE"],
            stakeholders: ["Admin"],
          },
          {
            name: "Budget planning & expense",
            what: "Departmental budgets, approvals, variance reporting.",
            frameworks: ["NAAC", "UGC"],
            stakeholders: ["Admin", "Principal"],
          },
          {
            name: "Financial reporting",
            what: "Statutory and management reporting with audit trail.",
            frameworks: ["NAAC", "UGC"],
            stakeholders: ["Admin", "Principal"],
          },
        ],
      },
      {
        id: "attendance",
        title: "Attendance",
        tagline: "Student + faculty attendance with policy enforcement.",
        features: [
          {
            name: "Student attendance",
            what: "Manual, bulk, and timetable-driven marking; per-course and per-period.",
            frameworks: ["NAAC", "AISHE", "NBA"],
            stakeholders: ["Student", "Faculty", "Admin"],
          },
          {
            name: "Faculty attendance",
            what: "Faculty class and duty attendance.",
            frameworks: ["UGC", "AICTE"],
            stakeholders: ["Faculty", "Dept Head", "Admin"],
          },
          {
            name: "Thresholds & condonation",
            what: "Configurable rules with exam / placement eligibility linkage.",
            frameworks: ["NAAC", "NBA"],
            stakeholders: ["Faculty", "Exam Cell", "Admin"],
          },
          {
            name: "Audit trail",
            what: "Corrections with approval history for compliance.",
            frameworks: ["NAAC"],
            stakeholders: ["Admin", "IQAC"],
          },
        ],
      },
      {
        id: "library",
        title: "Library Management",
        tagline: "Catalog, issuing, reservations, e-resources.",
        features: [
          {
            name: "Library catalog",
            what: "Bibliographic records, holdings, search.",
            frameworks: ["NAAC", "AISHE", "AICTE"],
            stakeholders: ["Student", "Faculty"],
          },
          {
            name: "Issuing & returns",
            what: "Circulation, fines, reservations.",
            frameworks: ["NAAC", "AISHE"],
            stakeholders: ["Student", "Faculty", "Admin"],
          },
          {
            name: "E-resources",
            what: "Integrations with national databases (Shodhganga, DELNET, etc.).",
            frameworks: ["NAAC"],
            stakeholders: ["Student", "Faculty", "Research Cell"],
          },
        ],
      },
      {
        id: "hostel",
        title: "Hostel Management",
        tagline: "Rooms, allocation, mess, visitor logs.",
        features: [
          {
            name: "Rooms & allocation",
            what: "Block / floor / room inventory and student allocation.",
            frameworks: ["NAAC", "AISHE", "AICTE"],
            stakeholders: ["Admin"],
          },
          {
            name: "Mess & dietary",
            what: "Menu, billing, dietary preferences.",
            stakeholders: ["Student", "Admin"],
          },
          {
            name: "Visitor & curfew logs",
            what: "Audit-ready visitor records and curfew compliance.",
            frameworks: ["NAAC"],
            stakeholders: ["Admin"],
          },
        ],
      },
      {
        id: "placement",
        title: "Placement & Career Services",
        tagline: "Jobs, internships, drives, alumni.",
        features: [
          {
            name: "Placement portal",
            what: "Job postings, applications, status tracking — institution-owned.",
            frameworks: ["NAAC", "NIRF"],
            stakeholders: ["Student", "Admin"],
          },
          {
            name: "Shortlists & drives",
            what: "Campus drive workflows: shortlists, schedules, results.",
            frameworks: ["NAAC", "NIRF"],
            stakeholders: ["Admin", "Dept Head"],
          },
          {
            name: "Internship records",
            what: "Internship offers, evaluations, credit linkage.",
            frameworks: ["NAAC", "NIRF"],
            stakeholders: ["Student", "Faculty"],
          },
          {
            name: "Alumni records",
            what: "Alumni directory with placement & higher-education progression.",
            frameworks: ["NAAC", "NIRF"],
            stakeholders: ["Admin", "Principal"],
          },
        ],
      },
      {
        id: "parent-comms",
        title: "Parent Communication",
        tagline: "Marks, attendance, dues, announcements — explainable.",
        features: [
          {
            name: "Marks & attendance reports",
            what: "Periodic parent reports with mastery context, not just scores.",
            stakeholders: ["Admin", "Faculty"],
          },
          {
            name: "Fees & dues",
            what: "Fee status, dues, reminders.",
            stakeholders: ["Admin"],
          },
          {
            name: "Announcements",
            what: "Institutional and class-level announcements in multiple channels.",
            stakeholders: ["Admin", "Faculty"],
          },
        ],
      },
      {
        id: "campus-ops",
        title: "Campus Operations",
        tagline: "Facilities, scheduling, identity, security.",
        features: [
          {
            name: "Facilities management",
            what: "Maintenance tickets, vendor SLAs, equipment inventory.",
            frameworks: ["NAAC", "AICTE"],
            stakeholders: ["Admin"],
          },
          {
            name: "Room scheduling",
            what: "Class, lab, and meeting room scheduling.",
            frameworks: ["NAAC", "AICTE"],
            stakeholders: ["Admin", "Faculty"],
          },
          {
            name: "Campus card / identity",
            what: "Unified campus card for access, library, mess, dues.",
            stakeholders: ["Student", "Admin"],
          },
          {
            name: "Physical security & surveillance",
            what: "Visitor logs, surveillance feeds, incident reports.",
            stakeholders: ["Admin"],
          },
        ],
      },
      {
        id: "service-ops",
        title: "Service Operations",
        tagline: "ITSM, workflow automation, records management.",
        features: [
          {
            name: "IT service desk / ITSM",
            what: "Tickets, SLAs, knowledge base for IT support.",
            stakeholders: ["Admin"],
          },
          {
            name: "Workflow / BPM automation",
            what: "Approval workflows for circulars, leaves, transfers, asset moves.",
            frameworks: ["NAAC"],
            stakeholders: ["Admin"],
          },
          {
            name: "Enterprise content & records",
            what: "Document management with retention and version history.",
            frameworks: ["NAAC", "UGC"],
            stakeholders: ["Admin", "IQAC"],
          },
        ],
      },
      {
        id: "governance",
        title: "Governance & Administration",
        tagline: "Departments, calendars, committees, policies, circulars.",
        features: [
          {
            name: "Department records",
            what: "Departments, programs, allocations.",
            frameworks: ["NAAC", "AISHE"],
            stakeholders: ["Admin", "Principal"],
          },
          {
            name: "Academic calendar & timetables",
            what: "Term calendar, holidays, timetables published and linked.",
            frameworks: ["NAAC"],
            stakeholders: ["Faculty", "Student", "Admin"],
          },
          {
            name: "Committees & meetings",
            what: "Committee formation, meeting agendas, minutes, action items.",
            frameworks: ["NAAC"],
            stakeholders: ["Principal", "IQAC", "Admin"],
          },
          {
            name: "Policies & circulars",
            what: "Policy library and circulars with acknowledgement tracking.",
            frameworks: ["NAAC", "UGC"],
            stakeholders: ["Admin", "Principal"],
          },
        ],
      },
      {
        id: "compliance-audit",
        title: "Compliance & Audit (cross-cutting)",
        tagline: "The hooks that make the Compliance Command Center work.",
        features: [
          {
            name: "Evidence repository",
            what: "Auto-organized evidence by criterion across frameworks.",
            frameworks: ["NAAC", "NBA", "NIRF", "AISHE", "UGC", "AICTE"],
            stakeholders: ["IQAC", "Admin"],
          },
          {
            name: "Audit trails",
            what: "Tamper-evident logs of every record change with reason and approver.",
            frameworks: ["NAAC", "UGC"],
            stakeholders: ["IQAC", "Admin"],
          },
          {
            name: "Accreditation packs",
            what: "One-click AQAR, SSR, SAR, AISHE filings assembled from live data.",
            frameworks: ["NAAC", "NBA", "AISHE"],
            stakeholders: ["IQAC", "Admin", "Principal"],
          },
          {
            name: "Government & statistical reporting",
            what: "Periodic statutory filings — student strength, gender stats, pass percentages, faculty counts.",
            frameworks: ["AISHE", "NIRF", "UGC", "AICTE"],
            stakeholders: ["IQAC", "Admin"],
          },
        ],
      },
    ],
  },
];

export function getLayer(code: string) {
  return LAYERS.find((l) => l.code.toLowerCase() === code.toLowerCase()) ?? null;
}
