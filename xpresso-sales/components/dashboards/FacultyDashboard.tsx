import {
  Award,
  BookOpen,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  LayoutGrid,
  Send,
  Sparkles,
  TrendingUp,
  UserCheck,
} from "lucide-react";

export function FacultyDashboard() {
  return (
    <div className="bg-slate-50 p-5 sm:p-6">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Good morning, Prof. Suresh</h2>
          <p className="text-[12px] text-slate-500">
            CS301 Data Structures · 9:00 AM in LH-3 · 64 students enrolled
          </p>
        </div>
        <div className="flex items-center gap-1.5 rounded-md border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-800">
          <Sparkles className="h-3.5 w-3.5" />
          5 students need attention in today's class
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
        <Kpi icon={<BookOpen className="h-4 w-4" />} label="My courses" value="4" sub="CS301, 305, 401, 501" />
        <Kpi icon={<UserCheck className="h-4 w-4" />} label="Today's attendance" value="58 / 64" sub="CS301 · 90.6%" tone="emerald" />
        <Kpi icon={<TrendingUp className="h-4 w-4" />} label="Avg mastery" value="73%" sub="across my cohorts" tone="emerald" />
        <Kpi icon={<Brain className="h-4 w-4" />} label="Misconceptions" value="6" sub="3 trending up" tone="rose" />
        <Kpi icon={<ClipboardList className="h-4 w-4" />} label="Pending grading" value="18" sub="grade by Friday" tone="amber" />
        <Kpi icon={<Award className="h-4 w-4" />} label="FDP credits" value="24 / 30" sub="2 sessions this term" />
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-[1.4fr_1fr]">
        <Card title="CS301 live mastery heatmap" subtitle="Last 5 weeks × 6 topics · students with <60% are flagged">
          <MasteryHeatmap />
        </Card>
        <Card title="Today's schedule" subtitle="Friday, May 29">
          <Schedule />
        </Card>
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_1.1fr]">
        <Card title="Misconception nudges" subtitle="Detected by the system · one-click fix">
          <MisconceptionList />
        </Card>
        <Card title="Authoring queue" subtitle="AI co-pilot status">
          <AuthoringQueue />
        </Card>
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[1.1fr_1fr]">
        <Card title="Today's class attendance · CS301" subtitle="9:00 AM · LH-3 · auto-marked from biometric">
          <TodaysAttendance />
        </Card>
        <Card title="Class roster snapshot" subtitle="64 students · color-coded by current mastery">
          <RosterSnapshot />
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
  tone?: "indigo" | "emerald" | "rose" | "amber";
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
      <div className="text-[20px] font-semibold leading-none text-slate-900">{value}</div>
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

function MasteryHeatmap() {
  const topics = ["Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs"];
  const weeks = ["W10", "W11", "W12", "W13", "W14"];
  const data: number[][] = [
    [82, 80, 78, 76, 74],
    [78, 75, 72, 70, 68],
    [88, 86, 85, 83, 84],
    [80, 79, 76, 73, 71],
    [70, 64, 58, 54, 51],
    [0, 0, 62, 60, 57],
  ];
  const color = (v: number) => {
    if (v === 0) return "bg-slate-100 text-slate-300";
    if (v >= 80) return "bg-emerald-500 text-white";
    if (v >= 70) return "bg-emerald-300 text-emerald-900";
    if (v >= 60) return "bg-amber-200 text-amber-900";
    return "bg-rose-400 text-white";
  };
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-[10.5px]">
        <thead>
          <tr>
            <th className="w-20 text-left text-[10px] font-medium text-slate-500"></th>
            {weeks.map((w) => (
              <th key={w} className="pb-1 text-[10px] font-medium text-slate-500">
                {w}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {topics.map((t, ri) => (
            <tr key={t}>
              <td className="pr-2 text-[10.5px] font-semibold text-slate-700">{t}</td>
              {data[ri].map((v, ci) => (
                <td key={ci} className="px-0.5 py-0.5">
                  <div className={`flex h-7 w-full items-center justify-center rounded ${color(v)} text-[10px] font-semibold`}>
                    {v === 0 ? "—" : `${v}%`}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-3 rounded-md border border-rose-100 bg-rose-50 px-3 py-2 text-[11px] text-rose-800">
        <span className="font-semibold">Trees</span> dropped 19 points in 5 weeks · misconception detected on traversal direction. <span className="font-semibold underline">Regenerate atom →</span>
      </div>
    </div>
  );
}

function Schedule() {
  const items = [
    { time: "09:00", title: "CS301 — Data Structures", where: "LH-3", tone: "indigo" },
    { time: "11:00", title: "Office hours", where: "Room 304", tone: "slate" },
    { time: "14:00", title: "CS401 — Algorithms tutorial", where: "LH-1", tone: "indigo" },
    { time: "16:00", title: "FDP — AI in pedagogy (90 min)", where: "Online", tone: "emerald" },
    { time: "17:30", title: "Atom review queue (4 pending)", where: "EMS", tone: "amber" },
  ];
  return (
    <ul className="flex flex-col gap-2">
      {items.map((i, idx) => (
        <li key={idx} className="flex items-center gap-3 rounded-md border border-slate-100 px-3 py-2">
          <div className="text-[11px] font-semibold tabular-nums text-slate-500">{i.time}</div>
          <div className="flex-1">
            <div className="text-[12px] font-semibold text-slate-800">{i.title}</div>
            <div className="text-[10.5px] text-slate-500">{i.where}</div>
          </div>
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              i.tone === "indigo"
                ? "bg-indigo-500"
                : i.tone === "emerald"
                ? "bg-emerald-500"
                : i.tone === "amber"
                ? "bg-amber-500"
                : "bg-slate-300"
            }`}
          />
        </li>
      ))}
    </ul>
  );
}

function MisconceptionList() {
  const items = [
    {
      heading: "Pointer ≠ address-of",
      body: "67% of CS301 students confuse `*p` with `&p` in dereferencing tasks.",
      fix: "Regenerate visualization atom + 3 new quiz variants",
    },
    {
      heading: "Tree traversal direction",
      body: "Post-order vs in-order confusion is spiking — 41% wrong on W14 quiz.",
      fix: "Insert micro-atom on traversal order, push to adaptive path",
    },
    {
      heading: "Big-O ‘drops constants’ rule",
      body: "Students still write O(2n) in CS401 assignments — 11 of 58.",
      fix: "Schedule misconception-specific tutorial atom for these 11",
    },
  ];
  return (
    <ul className="flex flex-col gap-2">
      {items.map((m, i) => (
        <li key={i} className="flex flex-col gap-1 rounded-md border border-slate-100 p-2.5">
          <div className="text-[12px] font-semibold text-slate-800">{m.heading}</div>
          <div className="text-[11px] leading-snug text-slate-600">{m.body}</div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-indigo-700">
              <span className="font-semibold">Fix:</span> {m.fix}
            </span>
            <button className="rounded-md border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-700">
              Apply
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

function TodaysAttendance() {
  const present = 58;
  const total = 64;
  const pct = (present / total) * 100;
  const absentees = [
    { roll: "21CS017", name: "Amit Verma", status: "Unmarked", days: 1, tone: "amber" },
    { roll: "21CS024", name: "Bhavya Singh", status: "Medical leave", days: 0, tone: "indigo" },
    { roll: "21CS041", name: "Karthik R.", status: "Unmarked · 3 days", days: 3, tone: "rose" },
    { roll: "21CS052", name: "Meera Patel", status: "Unmarked", days: 1, tone: "amber" },
    { roll: "21CS058", name: "Rohit Iyer", status: "Unmarked · 4 days", days: 4, tone: "rose" },
    { roll: "21CS063", name: "Sneha Joshi", status: "Unmarked", days: 1, tone: "amber" },
  ];
  const tone = (t: string) =>
    t === "rose"
      ? "bg-rose-100 text-rose-700 border-rose-200"
      : t === "amber"
      ? "bg-amber-100 text-amber-800 border-amber-200"
      : "bg-indigo-100 text-indigo-700 border-indigo-200";
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 rounded-md border border-emerald-100 bg-emerald-50/60 px-3 py-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-emerald-700">
          <CalendarCheck className="h-4.5 w-4.5" />
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex items-baseline justify-between">
            <span className="text-[14px] font-semibold text-emerald-900">
              {present} of {total} present · {pct.toFixed(1)}%
            </span>
            <span className="text-[10.5px] text-emerald-700">Cohort avg: 92.1%</span>
          </div>
          <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-emerald-100">
            <div className="h-full rounded-full bg-emerald-500" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[10.5px] font-semibold uppercase tracking-wider text-slate-500">
            Absent today ({total - present})
          </span>
          <button className="inline-flex items-center gap-1 rounded-md border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-[10.5px] font-semibold text-indigo-700 hover:bg-indigo-100">
            <Send className="h-3 w-3" />
            Send parent SMS · {absentees.filter((a) => a.tone === "rose").length} chronic
          </button>
        </div>
        <ul className="flex flex-col gap-1">
          {absentees.map((a) => (
            <li
              key={a.roll}
              className="flex items-center gap-2 rounded-md border border-slate-100 px-2.5 py-1.5"
            >
              <span className="w-16 shrink-0 text-[10.5px] font-mono text-slate-500">{a.roll}</span>
              <span className="flex-1 text-[11.5px] font-semibold text-slate-800">{a.name}</span>
              <span className={`rounded-full border px-1.5 py-0.5 text-[9.5px] font-semibold ${tone(a.tone)}`}>
                {a.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-md border border-rose-100 bg-rose-50/60 px-3 py-2 text-[11px] text-rose-900">
        <span className="font-semibold">2 students</span> at &gt;3 consecutive absences — attendance threshold for exam eligibility nearing.
      </div>
    </div>
  );
}

function RosterSnapshot() {
  const top = [
    { roll: "21CS003", name: "Aarav K.", mastery: 92 },
    { roll: "21CS019", name: "Diya M.", mastery: 89 },
    { roll: "21CS027", name: "Ishaan T.", mastery: 88 },
  ];
  const risk = [
    { roll: "21CS041", name: "Karthik R.", mastery: 48, why: "Trees + 3 absences" },
    { roll: "21CS058", name: "Rohit Iyer", mastery: 51, why: "Pointers misconception · 4 absences" },
    { roll: "21CS049", name: "Nisha B.", mastery: 54, why: "Pending 6 atoms · slow pace" },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div>
        <div className="mb-1.5 flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-wider text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Top performers
        </div>
        <ul className="flex flex-col gap-1">
          {top.map((s) => (
            <li key={s.roll} className="flex items-center gap-2 rounded-md border border-slate-100 px-2.5 py-1.5">
              <span className="w-16 text-[10.5px] font-mono text-slate-500">{s.roll}</span>
              <span className="flex-1 text-[11.5px] font-semibold text-slate-800">{s.name}</span>
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-emerald-500" style={{ width: `${s.mastery}%` }} />
                </div>
                <span className="text-[10.5px] font-semibold tabular-nums text-slate-700">{s.mastery}%</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="mb-1.5 flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-wider text-rose-700">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
          At-risk — needs 1-on-1
        </div>
        <ul className="flex flex-col gap-1">
          {risk.map((s) => (
            <li key={s.roll} className="flex flex-col rounded-md border border-rose-100 bg-rose-50/40 px-2.5 py-1.5">
              <div className="flex items-center gap-2">
                <span className="w-16 text-[10.5px] font-mono text-slate-500">{s.roll}</span>
                <span className="flex-1 text-[11.5px] font-semibold text-slate-800">{s.name}</span>
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-rose-500" style={{ width: `${s.mastery}%` }} />
                  </div>
                  <span className="text-[10.5px] font-semibold tabular-nums text-slate-700">{s.mastery}%</span>
                </div>
              </div>
              <span className="ml-[68px] text-[10.5px] text-rose-700">{s.why}</span>
            </li>
          ))}
        </ul>
        <button className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-700 hover:bg-indigo-100">
          <Sparkles className="h-3 w-3" />
          Generate personalized remediation plan for 3
        </button>
      </div>
    </div>
  );
}

function AuthoringQueue() {
  const items = [
    { name: "Atom: B-tree insertion (3D variant)", status: "Co-pilot drafted", tone: "amber", progress: 60 },
    { name: "Atom: Heap operations (audio + PDF)", status: "Ready for review", tone: "indigo", progress: 85 },
    { name: "Quiz bank: CS401 mid-term variants", status: "AI generating · 14/20", tone: "amber", progress: 70 },
    { name: "Atom: Hashing collisions (video)", status: "Approved · published", tone: "emerald", progress: 100 },
  ];
  return (
    <ul className="flex flex-col gap-2">
      {items.map((it, i) => (
        <li key={i} className="flex flex-col gap-1 rounded-md border border-slate-100 p-2.5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[12px] font-medium text-slate-800">{it.name}</span>
            <span
              className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9.5px] font-semibold ${
                it.tone === "emerald"
                  ? "bg-emerald-100 text-emerald-700"
                  : it.tone === "indigo"
                  ? "bg-indigo-100 text-indigo-700"
                  : "bg-amber-100 text-amber-800"
              }`}
            >
              {it.tone === "emerald" && <CheckCircle2 className="h-3 w-3" />}
              {it.status}
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full"
              style={{
                width: `${it.progress}%`,
                background:
                  it.tone === "emerald" ? "#059669" : it.tone === "indigo" ? "#4f46e5" : "#d97706",
              }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
