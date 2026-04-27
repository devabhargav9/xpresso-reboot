export const ATTENDANCE_PAGE = {
  title: "Attendance system",
  eyebrow: "Operations (IMS) · with teaching and student records",
  intro:
    "This belongs in the Institutional Management (IMS) layer: official participation records, rules, and eligibility tied to timetables, courses, and the student information system. It is how the institution proves participation, runs eligibility for exams and placements, and supports at-risk students—in one place with the rest of operations, not a separate sheet.",
  howItFits: [
    "Draws on timetable and class registers (per section, per session or day).",
    "Feeds academic standing: minimum %, condonation, leave and late rules you configure.",
    "Connects to eligibility for internal assessment, end exams, and placement if your policy says so.",
  ],
  sections: [
    {
      title: "Faculty & class owners",
      items: [
        "Mark present / absent / late; bulk mark for a whole class when appropriate.",
        "Timetable-based sessions so the right roster appears for the right time slot.",
        "Optional: integration hooks for biometrics or card readers; the system of record stays in X'Presso.",
        "Correction requests with an approval path instead of silent edits in spreadsheets.",
      ],
    },
    {
      title: "Students & advisors",
      items: [
        "Clear view of attendance % by course and over time, not a surprise at term end.",
        "When rules are breached, early alerts to the student—and optionally to a faculty advisor or HOD.",
        "Transparency: students see the same numbers the office will use for eligibility.",
      ],
    },
    {
      title: "Institution & compliance",
      items: [
        "Admin-defined thresholds, condonation windows, and exception categories.",
        "Full audit log: who changed a record, when, and who approved a correction—important for disputes and inspection readiness.",
        "Reports and exports for IQAC, accreditation, or internal academic council packs.",
      ],
    },
  ],
  outro:
    "Attendance is not a side spreadsheet; it is part of the same data backbone as learning and student lifecycle, so you do not reconcile three systems at degree time.",
} as const;

export const PLACEMENT_PAGE = {
  title: "Placement & career portal",
  eyebrow: "Operations (IMS) · student & placement office",
  intro:
    "This also sits in Institutional Management (IMS): a campus-run placement function alongside student lifecycle and services, not a public job board on the side. The desk needs one trusted channel: only jobs the institution endorses, for the right students, with a clear path from interest to offer—using the same identity and portal as the rest of the platform.",
  howItFits: [
    "Jobs are published and owned by the institution (or TPO), not a public copy-paste of external boards.",
    "Each posting can be targeted: program, batch, minimum criteria (for example academic threshold) when you choose to use them.",
    "Applications, statuses, and exportable lists live next to the student record your team already trusts.",
  ],
  sections: [
    {
      title: "For students (always in their portal)",
      items: [
        "Browse and filter roles that they are allowed to see—no noise from ineligible listings.",
        "One profile: resume, academic snapshot as policy allows, and application history.",
        "Track each application: applied, shortlisted, interview, offer, or release— with notifications in-app and over email or SMS as you turn them on.",
      ],
    },
    {
      title: "For placement / admin / TPO",
      items: [
        "Create, edit, publish, and close job postings; duplicate templates across seasons where useful.",
        "See applicant lists per company or per drive; shortlist and move people through the funnel.",
        "Export to Excel or equivalent for sign-off, drives on campus, and year-end reports.",
        "Funnel and conversion views (optional depth in later phases) for continuous improvement.",
      ],
    },
    {
      title: "Trust and boundaries",
      items: [
        "The portal is the official campus placement channel, not a generic public job market.",
        "You decide how much to expose to which cohort; not every job is for every program.",
        "Lives in the same security and access model as the rest of the institution: roles, not anonymous public posting from companies unless you add that in a later phase.",
      ],
    },
  ],
  outro:
    "Placement and academics share identity and, where policy allows, eligibility inputs—so the story stays one platform for the student and one place for the office to run the year.",
} as const;
