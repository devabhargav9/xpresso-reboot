"use client";

import { useState } from "react";
import {
  BookOpen,
  Building2,
  ClipboardCheck,
  FlaskConical,
  GraduationCap,
  UserSquare2,
} from "lucide-react";
import { DashboardFrame } from "@/components/DashboardFrame";
import { PrincipalDashboard } from "@/components/dashboards/PrincipalDashboard";
import { FacultyDashboard } from "@/components/dashboards/FacultyDashboard";
import { StudentDashboard } from "@/components/dashboards/StudentDashboard";
import { AdminDashboard } from "@/components/dashboards/AdminDashboard";
import { ExamCellDashboard } from "@/components/dashboards/ExamCellDashboard";
import { ResearchCellDashboard } from "@/components/dashboards/ResearchCellDashboard";

type RoleKey =
  | "principal"
  | "faculty"
  | "student"
  | "admin"
  | "exam"
  | "research";

const ROLES: {
  key: RoleKey;
  label: string;
  persona: string;
  short: string;
  icon: React.ReactNode;
}[] = [
  {
    key: "principal",
    label: "Institution Head",
    persona: "Principal / Director / Management",
    short: "One-screen institutional health",
    icon: <Building2 className="h-3.5 w-3.5" />,
  },
  {
    key: "faculty",
    label: "Teacher",
    persona: "Faculty member",
    short: "Teaching + cohort + attendance + authoring",
    icon: <BookOpen className="h-3.5 w-3.5" />,
  },
  {
    key: "student",
    label: "Student",
    persona: "Undergraduate / postgraduate",
    short: "Path, tutor, mastery, twin, campus life",
    icon: <GraduationCap className="h-3.5 w-3.5" />,
  },
  {
    key: "admin",
    label: "Administration",
    persona: "Registrar / Admin / HR / Finance",
    short: "Fees, attendance, admissions, HR, facilities",
    icon: <UserSquare2 className="h-3.5 w-3.5" />,
  },
  {
    key: "exam",
    label: "Exam Cell",
    persona: "Controller of Examinations",
    short: "Calendar, papers, grading, integrity, re-eval",
    icon: <ClipboardCheck className="h-3.5 w-3.5" />,
  },
  {
    key: "research",
    label: "Research Cell",
    persona: "Dean (Research) / Research Cell",
    short: "Publications, citations, patents, grants, MoUs",
    icon: <FlaskConical className="h-3.5 w-3.5" />,
  },
];

export function DashboardSwitcher() {
  const [activeKey, setActiveKey] = useState<RoleKey>("principal");
  const active = ROLES.find((r) => r.key === activeKey) ?? ROLES[0];

  return (
    <div className="grid gap-5 lg:grid-cols-[260px_1fr]">
      <aside className="flex flex-col gap-1.5">
        <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
          Choose a stakeholder
        </div>
        {ROLES.map((r) => {
          const isActive = r.key === activeKey;
          return (
            <button
              key={r.key}
              type="button"
              onClick={() => setActiveKey(r.key)}
              className={`flex w-full items-start gap-2.5 rounded-lg border px-3 py-2.5 text-left transition ${
                isActive
                  ? "border-indigo-300 bg-indigo-50/70 ring-1 ring-indigo-200"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <span
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border ${
                  isActive ? "border-indigo-200 bg-white text-indigo-700" : "border-slate-200 bg-slate-50 text-slate-500"
                }`}
              >
                {r.icon}
              </span>
              <div className="flex flex-1 flex-col">
                <span className={`text-[13px] font-semibold ${isActive ? "text-indigo-900" : "text-slate-800"}`}>
                  {r.label}
                </span>
                <span className="text-[10.5px] text-slate-500">{r.persona}</span>
                <span className="mt-0.5 text-[11px] leading-snug text-slate-600">{r.short}</span>
              </div>
            </button>
          );
        })}
      </aside>

      <div className="min-w-0">
        <DashboardFrame url={`app.xpresso.edu / ${active.label.toLowerCase().replace(/\s+/g, "-")}`}>
          {active.key === "principal" && <PrincipalDashboard />}
          {active.key === "faculty" && <FacultyDashboard />}
          {active.key === "student" && <StudentDashboard />}
          {active.key === "admin" && <AdminDashboard />}
          {active.key === "exam" && <ExamCellDashboard />}
          {active.key === "research" && <ResearchCellDashboard />}
        </DashboardFrame>
      </div>
    </div>
  );
}
