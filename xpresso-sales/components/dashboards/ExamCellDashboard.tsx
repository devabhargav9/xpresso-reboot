import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  FileCheck2,
  Flag,
  ScrollText,
  ShieldAlert,
} from "lucide-react";

export function ExamCellDashboard() {
  return (
    <div className="bg-slate-50 p-5 sm:p-6">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Good morning, Dr. Pillai</h2>
          <p className="text-[12px] text-slate-500">
            Controller of Examinations · Spring mid-term window · Week 14
          </p>
        </div>
        <div className="flex items-center gap-1.5 rounded-md border border-rose-200 bg-rose-50 px-2.5 py-1 text-[11px] font-semibold text-rose-800">
          <AlertTriangle className="h-3.5 w-3.5" />
          5 papers awaiting moderation · 12 re-evals due in 48h
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
        <Kpi icon={<CalendarDays className="h-4 w-4" />} label="Exams next 7 days" value="14" sub="4 mid · 8 internal · 2 end-sem" tone="indigo" />
        <Kpi icon={<FileCheck2 className="h-4 w-4" />} label="Papers ready" value="23 / 28" sub="5 awaiting moderation" tone="amber" />
        <Kpi icon={<ClipboardCheck className="h-4 w-4" />} label="Grading progress" value="71%" sub="4,124 of 5,840 papers" tone="emerald" />
        <Kpi icon={<ScrollText className="h-4 w-4" />} label="Results to publish" value="312" sub="2 courses ready · 1 pending HoD" tone="amber" />
        <Kpi icon={<ShieldAlert className="h-4 w-4" />} label="Integrity flags" value="18" sub="auto-detected · review queue" tone="rose" />
        <Kpi icon={<Flag className="h-4 w-4" />} label="Re-eval requests" value="47" sub="12 due in 48h" tone="amber" />
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-[1.3fr_1fr]">
        <Card title="Exam calendar · next 14 days" subtitle="Click any slot to view venue, invigilators, candidate roster">
          <ExamCalendar />
        </Card>
        <Card title="Paper-setting workflow" subtitle="Status by upcoming exam">
          <PaperWorkflow />
        </Card>
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[1.3fr_1fr]">
        <Card title="Grading progress · by course" subtitle="Moderator-approved · auto-collated">
          <GradingProgress />
        </Card>
        <Card title="Integrity inbox" subtitle="Effort-fair + AI-aware flags · review needed">
          <IntegrityInbox />
        </Card>
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_1.1fr]">
        <Card title="Question-bank health" subtitle="AI-generated variants awaiting faculty approval">
          <QuestionBankHealth />
        </Card>
        <Card title="Re-evaluation queue" subtitle="Student-raised · deadline-sorted">
          <ReEvalQueue />
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
  tone: "indigo" | "emerald" | "rose" | "amber";
}) {
  const toneClass =
    tone === "emerald"
      ? "text-emerald-600 bg-emerald-50 border-emerald-100"
      : tone === "rose"
      ? "text-rose-600 bg-rose-50 border-rose-100"
      : tone === "amber"
      ? "text-amber-700 bg-amber-50 border-amber-100"
      : "text-indigo-600 bg-indigo-50 border-indigo-100";
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

function ExamCalendar() {
  const slots = [
    { day: "Today", date: "May 29", events: [
      { time: "10:00–12:00", course: "CS301 · Mid-term", venue: "LH-3", students: 64, tone: "indigo" },
      { time: "14:00–15:00", course: "CS305 · Internal", venue: "LH-1", students: 58, tone: "indigo" },
    ]},
    { day: "Mon", date: "Jun 2", events: [
      { time: "10:00–12:00", course: "CS401 · Mid-term (3 sections)", venue: "LH-2/3/4", students: 180, tone: "indigo" },
    ]},
    { day: "Tue", date: "Jun 3", events: [
      { time: "14:00–15:30", course: "EC203 · Internal", venue: "LH-5", students: 142, tone: "indigo" },
    ]},
    { day: "Wed", date: "Jun 4", events: [
      { time: "10:00–12:00", course: "ME301 · Mid-term", venue: "LH-1", students: 142, tone: "amber" },
    ]},
    { day: "Fri", date: "Jun 6", events: [
      { time: "09:30–12:30", course: "CS501 · End-sem", venue: "Hall A", students: 214, tone: "rose" },
    ]},
  ];
  const tone = (t: string) =>
    t === "rose"
      ? "border-rose-200 bg-rose-50"
      : t === "amber"
      ? "border-amber-200 bg-amber-50"
      : "border-indigo-200 bg-indigo-50";
  const toneText = (t: string) =>
    t === "rose"
      ? "text-rose-700"
      : t === "amber"
      ? "text-amber-700"
      : "text-indigo-700";
  return (
    <ul className="flex flex-col gap-2">
      {slots.map((s, i) => (
        <li key={i} className="flex gap-3">
          <div className="flex w-16 shrink-0 flex-col items-center rounded-md border border-slate-100 px-2 py-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{s.day}</span>
            <span className="text-[11px] font-semibold text-slate-700">{s.date}</span>
          </div>
          <div className="flex flex-1 flex-col gap-1.5">
            {s.events.map((e, j) => (
              <div key={j} className={`flex items-center gap-2 rounded-md border px-3 py-1.5 ${tone(e.tone)}`}>
                <span className={`text-[11px] font-semibold tabular-nums ${toneText(e.tone)}`}>{e.time}</span>
                <span className="flex-1 text-[11.5px] font-semibold text-slate-800">{e.course}</span>
                <span className="text-[10.5px] text-slate-600">{e.venue}</span>
                <span className="text-[10.5px] font-semibold text-slate-700">{e.students} stu.</span>
              </div>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

function PaperWorkflow() {
  const items = [
    { course: "CS301 Mid-term", status: "Approved", tone: "emerald", note: "Locked · ready for tomorrow" },
    { course: "CS305 Internal", status: "Approved", tone: "emerald", note: "Locked" },
    { course: "CS401 Mid-term", status: "In moderation", tone: "amber", note: "3 sections · 2/3 moderated" },
    { course: "ME301 Mid-term", status: "Bank insufficient", tone: "rose", note: "AI generating 42 variants" },
    { course: "CS501 End-sem", status: "Awaiting CoE sign-off", tone: "amber", note: "Sign by Wed 5 PM" },
  ];
  const tone = (t: string) =>
    t === "emerald"
      ? "bg-emerald-100 text-emerald-700 border-emerald-200"
      : t === "amber"
      ? "bg-amber-100 text-amber-800 border-amber-200"
      : "bg-rose-100 text-rose-700 border-rose-200";
  return (
    <ul className="flex flex-col gap-1.5">
      {items.map((it, i) => (
        <li key={i} className="flex flex-col gap-1 rounded-md border border-slate-100 p-2.5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[12px] font-semibold text-slate-800">{it.course}</span>
            <span className={`inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 text-[9.5px] font-semibold ${tone(it.tone)}`}>
              {it.tone === "emerald" && <CheckCircle2 className="h-3 w-3" />}
              {it.tone === "amber" && <Clock className="h-3 w-3" />}
              {it.tone === "rose" && <AlertTriangle className="h-3 w-3" />}
              {it.status}
            </span>
          </div>
          <span className="text-[10.5px] text-slate-500">{it.note}</span>
        </li>
      ))}
    </ul>
  );
}

function GradingProgress() {
  const rows = [
    { course: "CS301 · Mid-term", graded: 60, total: 64, moderated: true },
    { course: "CS305 · Internal", graded: 58, total: 58, moderated: true },
    { course: "CS401 · Mid-term", graded: 156, total: 180, moderated: false },
    { course: "EC203 · Internal", graded: 124, total: 142, moderated: true },
    { course: "ME301 · Mid-term", graded: 92, total: 142, moderated: false },
    { course: "CS501 · End-sem", graded: 0, total: 214, moderated: false },
  ];
  const pctTone = (p: number) =>
    p >= 99 ? "#059669" : p >= 75 ? "#4f46e5" : p >= 50 ? "#d97706" : "#e11d48";
  return (
    <ul className="flex flex-col gap-2">
      {rows.map((r) => {
        const pct = r.total === 0 ? 0 : (r.graded / r.total) * 100;
        return (
          <li key={r.course} className="flex flex-col gap-1">
            <div className="flex items-baseline justify-between text-[11.5px]">
              <span className="font-semibold text-slate-800">{r.course}</span>
              <span className="tabular-nums text-slate-600">
                {r.graded} / {r.total} · {Math.round(pct)}%{" "}
                {r.moderated && (
                  <span className="ml-1 inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[9.5px] font-semibold text-emerald-700">
                    <CheckCircle2 className="h-2.5 w-2.5" /> moderated
                  </span>
                )}
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full" style={{ width: `${pct}%`, background: pctTone(pct) }} />
            </div>
          </li>
        );
      })}
      <li className="mt-1 rounded-md border border-amber-100 bg-amber-50/60 px-3 py-2 text-[11px] text-amber-900">
        <span className="font-semibold">ME301</span> at 65% · result-declaration target Wed.{" "}
        <span className="font-semibold underline">Re-allocate to 2 graders →</span>
      </li>
    </ul>
  );
}

function IntegrityInbox() {
  const items = [
    {
      course: "CS301 · Q4",
      count: "4 papers",
      reason: "87% match on solution approach · AI-pasted suspect",
      tone: "rose",
    },
    {
      course: "CS305 · Internal",
      count: "2 papers",
      reason: "Identical wrong reasoning · plagiarism likely",
      tone: "rose",
    },
    {
      course: "CS401 · Mid-term",
      count: "3 papers",
      reason: "Effort score 0 on adaptive follow-up question",
      tone: "amber",
    },
    {
      course: "ME301 · paper 2",
      count: "1 paper",
      reason: "Solution mirrors textbook page · screenshot suspect",
      tone: "amber",
    },
    {
      course: "CS501 · pre-exam",
      count: "1 student",
      reason: "Question pre-access flag from system audit",
      tone: "rose",
    },
  ];
  const tone = (t: string) =>
    t === "rose"
      ? "border-rose-100 bg-rose-50/60"
      : "border-amber-100 bg-amber-50/60";
  return (
    <ul className="flex flex-col gap-1.5">
      {items.map((it, i) => (
        <li key={i} className={`flex flex-col gap-0.5 rounded-md border p-2.5 ${tone(it.tone)}`}>
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-semibold text-slate-800">{it.course}</span>
            <span className={`text-[10.5px] font-semibold ${it.tone === "rose" ? "text-rose-700" : "text-amber-700"}`}>
              {it.count}
            </span>
          </div>
          <span className="text-[10.5px] leading-snug text-slate-600">{it.reason}</span>
        </li>
      ))}
    </ul>
  );
}

function QuestionBankHealth() {
  const banks = [
    { course: "CS301", questions: 412, aiPending: 84, tone: "emerald" },
    { course: "CS305", questions: 287, aiPending: 32, tone: "emerald" },
    { course: "CS401", questions: 524, aiPending: 56, tone: "emerald" },
    { course: "ME301", questions: 312, aiPending: 42, tone: "amber" },
    { course: "CS501", questions: 478, aiPending: 28, tone: "emerald" },
  ];
  return (
    <ul className="flex flex-col gap-1.5">
      {banks.map((b) => (
        <li key={b.course} className="flex items-center justify-between gap-3 rounded-md border border-slate-100 px-2.5 py-1.5">
          <span className="w-16 text-[11.5px] font-semibold text-slate-800">{b.course}</span>
          <div className="flex flex-1 items-center gap-2">
            <span className="text-[10.5px] text-slate-500">Bank size</span>
            <span className="text-[11px] font-semibold tabular-nums text-slate-700">{b.questions}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9.5px] font-semibold ${b.tone === "amber" ? "bg-amber-100 text-amber-800" : "bg-indigo-100 text-indigo-700"}`}>
              {b.aiPending} AI variants
            </span>
            <button className="rounded-md border border-slate-200 px-1.5 py-0.5 text-[9.5px] font-semibold text-slate-700 hover:bg-slate-50">
              Review
            </button>
          </div>
        </li>
      ))}
      <li className="mt-1 rounded-md border border-amber-100 bg-amber-50/60 px-3 py-2 text-[11px] text-amber-900">
        <span className="font-semibold">ME301</span> bank below recommended depth — auto-generate 60 more variants?{" "}
        <span className="font-semibold underline">Yes →</span>
      </li>
    </ul>
  );
}

function ReEvalQueue() {
  const items = [
    { roll: "21CS017", course: "CS301 · Q3", current: "4 / 10", claim: "7 / 10", due: "24h" },
    { roll: "21EC042", course: "EC203 · Q5", current: "3 / 8", claim: "5 / 8", due: "48h" },
    { roll: "21ME019", course: "ME301 · Q2", current: "6 / 12", claim: "9 / 12", due: "36h" },
    { roll: "21CS052", course: "CS401 · Q4", current: "5 / 15", claim: "10 / 15", due: "60h" },
    { roll: "22CS008", course: "CS305 · Internal", current: "12 / 20", claim: "15 / 20", due: "72h" },
  ];
  return (
    <ul className="flex flex-col gap-1">
      {items.map((it, i) => (
        <li key={i} className="flex items-center gap-3 rounded-md border border-slate-100 px-2.5 py-1.5">
          <span className="w-16 text-[10.5px] font-mono text-slate-500">{it.roll}</span>
          <span className="flex-1 text-[11.5px] font-semibold text-slate-800">{it.course}</span>
          <span className="text-[10.5px] tabular-nums text-slate-600">
            {it.current} <span className="text-slate-400">→</span>{" "}
            <span className="font-semibold text-indigo-700">{it.claim}</span>
          </span>
          <span className={`rounded-full px-1.5 py-0.5 text-[9.5px] font-semibold ${it.due === "24h" ? "bg-rose-100 text-rose-700" : "bg-amber-100 text-amber-800"}`}>
            {it.due}
          </span>
        </li>
      ))}
      <li className="mt-1 text-[10.5px] text-slate-500">
        + 42 more pending · sorted by deadline
      </li>
    </ul>
  );
}
