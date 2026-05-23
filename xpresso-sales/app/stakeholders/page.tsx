import { Container } from "@/components/Container";
import { Pill } from "@/components/Pill";
import { STAKEHOLDERS } from "@/lib/types";

const LENS: Record<
  string,
  { title: string; whatTheySee: string; keyWidgets: string[] }
> = {
  Student: {
    title: "Student",
    whatTheySee: "Their day, their progress, their tutor — all built around the twin.",
    keyWidgets: [
      "Today's path with chosen modality",
      "AI tutor that knows their prereqs",
      "Mastery dashboard with confidence and decay",
      "Upcoming deadlines and assignments",
      "Attendance + risk signals",
    ],
  },
  Faculty: {
    title: "Faculty",
    whatTheySee: "Teaching tools augmented by AI; live signals from every cohort.",
    keyWidgets: [
      "Authoring queue and EMS co-pilot",
      "Live mastery heatmap per course",
      "Misconception nudges with 1-click atom edit",
      "Timetable and live classroom",
      "Publications, citations, FDP tracking",
    ],
  },
  "Dept Head": {
    title: "Dept Head",
    whatTheySee: "Department health: outcomes, faculty, placement, accreditation.",
    keyWidgets: [
      "Course outcomes and CO–PO attainment",
      "Faculty workload and FDP coverage",
      "Placement feed and program-level trends",
      "Budgets and expense at department level",
      "Risk: courses with low coverage",
    ],
  },
  IQAC: {
    title: "IQAC",
    whatTheySee: "Compliance, evidence, and accreditation packs — always audit-ready.",
    keyWidgets: [
      "Coverage % by framework (NAAC, NIRF, NBA, AISHE, UGC, AICTE)",
      "Evidence repository auto-organized by criterion",
      "AQAR, SSR, SAR builder",
      "DVV workspace and queries",
      "Anomalies with one-step fix paths",
    ],
  },
  "Exam Cell": {
    title: "Examination Cell",
    whatTheySee: "Exam lifecycle from question paper to results — with integrity.",
    keyWidgets: [
      "Exam calendar and paper-setting workflow",
      "Question bank with AI variants and difficulty calibration",
      "Grading workflow with moderation",
      "Results processing and academic progression",
      "Integrity reports (effort-fair, AI-aware)",
    ],
  },
  "Research Cell": {
    title: "Research Cell",
    whatTheySee: "Research activity from idea to impact.",
    keyWidgets: [
      "Publications, citations, impact metrics",
      "Patents and IP records",
      "Grants and consultancy projects",
      "MoUs and inter-institutional collaboration",
      "Innovation and incubation activities",
    ],
  },
  Admin: {
    title: "Administration",
    whatTheySee: "Operations: admissions, fees, HR, procurement, facilities.",
    keyWidgets: [
      "Admissions and enrollment pipeline",
      "Fees, payroll, procurement",
      "HR and workload distribution",
      "Facilities and room scheduling",
      "Circulars, policies, approvals",
    ],
  },
  Principal: {
    title: "Principal / Management",
    whatTheySee: "One-screen institutional health.",
    keyWidgets: [
      "Academic outcomes across programs",
      "Placement metrics vs. peers",
      "Compliance coverage across frameworks",
      "Financial health summary",
      "Risk flags and committee minutes",
    ],
  },
};

export default function StakeholdersPage() {
  return (
    <Container>
      <div className="py-12 sm:py-16">
        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600">
            Stakeholder lens
          </span>
          <h1 className="mt-1.5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            One product. Eight lenses.
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            Every buyer at the table sees themselves represented. Below is what each of the eight stakeholders would see in their version of Xpresso. The interactive lens-switcher ships in milestone M11.
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-2">
          {STAKEHOLDERS.map((s) => {
            const lens = LENS[s];
            return (
              <div
                key={s}
                className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-[15px] font-semibold text-slate-900">
                    {lens.title}
                  </h2>
                  <Pill tone="soft">stakeholder</Pill>
                </div>
                <p className="text-[13px] leading-relaxed text-slate-600">
                  {lens.whatTheySee}
                </p>
                <ul className="flex flex-col gap-1.5 border-t border-slate-100 pt-3 text-[12px] text-slate-600">
                  {lens.keyWidgets.map((w) => (
                    <li key={w} className="flex gap-2">
                      <span className="num text-slate-300">·</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export const metadata = {
  title: "Stakeholder lens · Xpresso",
  description: "What each of the eight institutional stakeholders sees in Xpresso.",
};
