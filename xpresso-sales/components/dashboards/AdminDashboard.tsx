import {
  AlertTriangle,
  BedDouble,
  Briefcase,
  CalendarCheck,
  ClipboardCheck,
  IndianRupee,
  TrendingUp,
  Users,
} from "lucide-react";

export function AdminDashboard() {
  return (
    <div className="bg-slate-50 p-5 sm:p-6">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Good morning, Mrs. Rao</h2>
          <p className="text-[12px] text-slate-500">
            Registrar's office · Spring semester · Admissions cycle active · Week 14
          </p>
        </div>
        <div className="flex items-center gap-1.5 rounded-md border border-rose-200 bg-rose-50 px-2.5 py-1 text-[11px] font-semibold text-rose-800">
          <AlertTriangle className="h-3.5 w-3.5" />
          4 urgent approvals · ₹3.6 Cr fees pending
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
        <Kpi icon={<IndianRupee className="h-4 w-4" />} label="Fees collected" value="₹24.7 Cr" sub="87% of demand · this term" tone="emerald" />
        <Kpi icon={<IndianRupee className="h-4 w-4" />} label="Fees pending" value="₹3.6 Cr" sub="412 students · 23 critical" tone="rose" />
        <Kpi icon={<CalendarCheck className="h-4 w-4" />} label="Attendance today" value="92.4%" sub="3,961 of 4,287 present" tone="emerald" />
        <Kpi icon={<Users className="h-4 w-4" />} label="Admissions pipeline" value="1,847" sub="+243 this week" tone="indigo" />
        <Kpi icon={<ClipboardCheck className="h-4 w-4" />} label="Pending approvals" value="14" sub="4 urgent" tone="amber" />
        <Kpi icon={<Briefcase className="h-4 w-4" />} label="Open positions" value="8" sub="2 critical · 14 vacancies" tone="slate" />
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-[1.3fr_1fr]">
        <Card title="Admissions funnel" subtitle="Stages for incoming UG batch · target 1,100 confirmed">
          <AdmissionsFunnel />
        </Card>
        <Card title="Fee collection · by category" subtitle="₹24.7 Cr of ₹28.5 Cr demand">
          <FeeCollection />
        </Card>
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[1.2fr_1fr]">
        <Card title="Attendance by department · today" subtitle="Click any row to message absentees' parents">
          <AttendanceByDept />
        </Card>
        <Card title="Pending approvals" subtitle="Sorted by age + priority">
          <ApprovalsQueue />
        </Card>
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <Card title="HR & payroll" subtitle="Faculty 218 · Staff 142 · May payroll processed">
          <HrSnapshot />
        </Card>
        <Card title="Facilities & student services" subtitle="Hostel, mess, transport, library, maintenance">
          <FacilitiesSnapshot />
        </Card>
      </div>
    </div>
  );
}

function Kpi({
  icon,
  label,
  value,
  sub,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
  tone: "indigo" | "emerald" | "rose" | "amber" | "slate";
}) {
  const toneClass =
    tone === "emerald"
      ? "text-emerald-600 bg-emerald-50 border-emerald-100"
      : tone === "rose"
      ? "text-rose-600 bg-rose-50 border-rose-100"
      : tone === "amber"
      ? "text-amber-700 bg-amber-50 border-amber-100"
      : tone === "indigo"
      ? "text-indigo-600 bg-indigo-50 border-indigo-100"
      : "text-slate-600 bg-slate-50 border-slate-200";
  return (
    <div className="flex flex-col gap-1.5 rounded-lg border border-slate-200 bg-white p-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
          {label}
        </span>
        <span className={`flex h-6 w-6 items-center justify-center rounded-md border ${toneClass}`}>{icon}</span>
      </div>
      <div className="text-[18px] font-semibold leading-none text-slate-900">{value}</div>
      <div className="text-[10.5px] text-slate-500">{sub}</div>
    </div>
  );
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-lg border border-slate-200 bg-white">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <div className="text-[12.5px] font-semibold text-slate-900">{title}</div>
        {subtitle && <div className="text-[10.5px] text-slate-500">{subtitle}</div>}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function AdmissionsFunnel() {
  const stages = [
    { label: "Applications received", value: 1847, pct: 100 },
    { label: "Eligibility verified", value: 1612, pct: 87 },
    { label: "Entrance scheduled", value: 1408, pct: 76 },
    { label: "Entrance completed", value: 980, pct: 53 },
    { label: "Offers sent", value: 752, pct: 41 },
    { label: "Confirmed", value: 614, pct: 33 },
  ];
  return (
    <ul className="flex flex-col gap-1.5">
      {stages.map((s, i) => (
        <li key={s.label} className="flex items-center gap-3">
          <span className="w-44 shrink-0 text-[11.5px] text-slate-700">{s.label}</span>
          <div className="relative h-6 flex-1 overflow-hidden rounded-md bg-slate-100">
            <div
              className="h-full rounded-md transition-all"
              style={{
                width: `${s.pct}%`,
                background: `linear-gradient(90deg, #4f46e5 0%, #6366f1 100%)`,
                opacity: 1 - i * 0.1,
              }}
            />
            <span className="absolute inset-y-0 left-2.5 flex items-center text-[11px] font-semibold text-white drop-shadow">
              {s.value.toLocaleString()}
            </span>
          </div>
          <span className="w-10 text-right text-[11px] font-semibold tabular-nums text-slate-700">{s.pct}%</span>
        </li>
      ))}
      <li className="mt-2 rounded-md border border-indigo-100 bg-indigo-50/60 px-3 py-2 text-[11px] text-indigo-900">
        <span className="font-semibold">Conversion alert:</span> Entrance-to-Offer drop is 23% vs 17% last year. Investigate slot-booking flow.
      </li>
    </ul>
  );
}

function FeeCollection() {
  const cats = [
    { name: "Tuition", collected: 19.4, demand: 21.1, color: "#4f46e5" },
    { name: "Hostel", collected: 2.8, demand: 3.3, color: "#0ea5e9" },
    { name: "Mess", collected: 1.4, demand: 1.7, color: "#059669" },
    { name: "Library", collected: 0.6, demand: 0.77, color: "#d97706" },
    { name: "Lab / Misc", collected: 0.5, demand: 0.68, color: "#7c3aed" },
  ];
  return (
    <ul className="flex flex-col gap-2.5">
      {cats.map((c) => {
        const pct = (c.collected / c.demand) * 100;
        return (
          <li key={c.name}>
            <div className="flex items-center justify-between text-[11.5px]">
              <span className="font-semibold text-slate-800">{c.name}</span>
              <span className="tabular-nums text-slate-600">
                ₹{c.collected.toFixed(1)} / ₹{c.demand.toFixed(1)} Cr · {Math.round(pct)}%
              </span>
            </div>
            <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full" style={{ width: `${pct}%`, background: c.color }} />
            </div>
          </li>
        );
      })}
      <li className="mt-1 rounded-md border border-rose-100 bg-rose-50/60 px-3 py-2 text-[11px] text-rose-900">
        <span className="font-semibold">23 students</span> have dues older than 60 days. <span className="font-semibold underline">Auto-send reminders →</span>
      </li>
    </ul>
  );
}

function AttendanceByDept() {
  const depts = [
    { name: "CSE", present: 1168, total: 1240, pct: 94.2 },
    { name: "ECE", present: 916, total: 980, pct: 93.5 },
    { name: "Mechanical", present: 698, total: 760, pct: 91.8 },
    { name: "Civil", present: 482, total: 540, pct: 89.2 },
    { name: "MBA", present: 402, total: 420, pct: 95.6 },
    { name: "BBA", present: 320, total: 347, pct: 92.1 },
  ];
  const tone = (p: number) => {
    if (p >= 94) return "bg-emerald-500";
    if (p >= 90) return "bg-emerald-400";
    if (p >= 85) return "bg-amber-400";
    return "bg-rose-400";
  };
  return (
    <ul className="flex flex-col gap-1.5">
      {depts.map((d) => (
        <li key={d.name} className="flex items-center gap-3 rounded-md px-2 py-1 hover:bg-slate-50">
          <span className="w-24 shrink-0 text-[11.5px] font-semibold text-slate-700">{d.name}</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
            <div className={`h-full rounded-full ${tone(d.pct)}`} style={{ width: `${d.pct}%` }} />
          </div>
          <span className="w-14 text-right text-[11px] font-semibold tabular-nums text-slate-700">{d.pct}%</span>
          <span className="w-20 text-right text-[10.5px] tabular-nums text-slate-500">
            {d.present}/{d.total}
          </span>
        </li>
      ))}
      <li className="mt-1 rounded-md border border-amber-100 bg-amber-50/60 px-3 py-2 text-[11px] text-amber-900">
        <span className="font-semibold">Civil dept</span> is lowest at 89.2% — 58 students absent.{" "}
        <span className="font-semibold underline">Generate parent-comm batch →</span>
      </li>
    </ul>
  );
}

function ApprovalsQueue() {
  const items = [
    { what: "Library book procurement · ₹2.4 L", who: "Vendor: Pearson India", age: "3 days", priority: "high" },
    { what: "Mess supplies invoice · ₹84,200", who: "Vendor: Sri Ram Caterers", age: "5 days", priority: "high" },
    { what: "Lab equipment · ₹6.2 L", who: "ME dept · Prof. Khan", age: "1 day", priority: "high" },
    { what: "Faculty leave · Dr. Nair · Jun 5–8", who: "ECE dept", age: "2 days", priority: "medium" },
    { what: "Hostel allocation · 18 students", who: "Annexe block", age: "1 day", priority: "medium" },
    { what: "Circular: Exam calendar update", who: "All depts", age: "4 days", priority: "low" },
  ];
  const tone = (p: string) =>
    p === "high"
      ? "bg-rose-100 text-rose-700 border-rose-200"
      : p === "medium"
      ? "bg-amber-100 text-amber-800 border-amber-200"
      : "bg-slate-100 text-slate-600 border-slate-200";
  return (
    <ul className="flex flex-col gap-1.5">
      {items.map((it, i) => (
        <li key={i} className="flex flex-col gap-0.5 rounded-md border border-slate-100 p-2.5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[12px] font-semibold text-slate-800">{it.what}</span>
            <span className={`rounded-full border px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${tone(it.priority)}`}>
              {it.priority}
            </span>
          </div>
          <div className="flex items-center justify-between text-[10.5px] text-slate-500">
            <span>{it.who}</span>
            <span>open · {it.age}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

function HrSnapshot() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <MiniStat label="Faculty (filled)" value="218" sub="of 232 sanctioned" tone="emerald" />
      <MiniStat label="Vacancies" value="14" sub="2 critical · 4 active hires" tone="rose" />
      <MiniStat label="Non-teaching staff" value="142" sub="incl. 18 admin assistants" />
      <MiniStat label="FDP participation" value="84%" sub="184 of 218 · ≥1 FDP this term" tone="emerald" />
      <MiniStat label="Payroll (May)" value="₹2.84 Cr" sub="processed on time · 360 employees" tone="emerald" />
      <MiniStat label="Pending HR actions" value="6" sub="2 leave · 3 grievance · 1 contract" tone="amber" />
      <div className="col-span-2 mt-1 rounded-md border border-rose-100 bg-rose-50/60 px-3 py-2 text-[11px] text-rose-900">
        <span className="font-semibold">2 critical vacancies:</span> Asst. Prof (CSE · ML), Sr. Lab Engineer (Civil). Drafts ready in HR workspace.
      </div>
    </div>
  );
}

function FacilitiesSnapshot() {
  const tiles = [
    {
      label: "Hostel occupancy",
      value: "1,142 / 1,120",
      sub: "102% · annexe needed",
      tone: "rose" as const,
      icon: <BedDouble className="h-3.5 w-3.5" />,
    },
    {
      label: "Mess attendance · lunch",
      value: "1,089",
      sub: "served · 84% of residents",
      tone: "emerald" as const,
      icon: <Users className="h-3.5 w-3.5" />,
    },
    {
      label: "Transport",
      value: "8 buses · 4 routes",
      sub: "312 users today · 1 bus in service",
      tone: "indigo" as const,
      icon: <CalendarCheck className="h-3.5 w-3.5" />,
    },
    {
      label: "Library · active",
      value: "1,247",
      sub: "users today · 8 books overdue",
      tone: "emerald" as const,
      icon: <TrendingUp className="h-3.5 w-3.5" />,
    },
    {
      label: "Maintenance tickets",
      value: "14",
      sub: "3 high priority · 2 overdue SLA",
      tone: "amber" as const,
      icon: <AlertTriangle className="h-3.5 w-3.5" />,
    },
    {
      label: "Room utilization",
      value: "78%",
      sub: "84 of 108 rooms in use now",
      tone: "indigo" as const,
      icon: <CalendarCheck className="h-3.5 w-3.5" />,
    },
  ];
  return (
    <ul className="grid grid-cols-2 gap-2">
      {tiles.map((t) => (
        <li key={t.label} className="flex flex-col gap-1 rounded-md border border-slate-100 p-2.5">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-500">
            <span className="font-semibold">{t.label}</span>
            <span className="text-slate-400">{t.icon}</span>
          </div>
          <div className="text-[14px] font-semibold text-slate-800">{t.value}</div>
          <div
            className={`text-[10.5px] ${
              t.tone === "rose"
                ? "text-rose-700"
                : t.tone === "emerald"
                ? "text-emerald-700"
                : t.tone === "amber"
                ? "text-amber-700"
                : "text-slate-600"
            }`}
          >
            {t.sub}
          </div>
        </li>
      ))}
    </ul>
  );
}

function MiniStat({
  label,
  value,
  sub,
  tone,
}: {
  label: string;
  value: string;
  sub: string;
  tone?: "emerald" | "rose" | "amber";
}) {
  const subColor =
    tone === "emerald"
      ? "text-emerald-700"
      : tone === "rose"
      ? "text-rose-700"
      : tone === "amber"
      ? "text-amber-700"
      : "text-slate-500";
  return (
    <div className="flex flex-col gap-1 rounded-md border border-slate-100 p-2.5">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{label}</span>
      <span className="text-[14px] font-semibold text-slate-800">{value}</span>
      <span className={`text-[10.5px] ${subColor}`}>{sub}</span>
    </div>
  );
}
