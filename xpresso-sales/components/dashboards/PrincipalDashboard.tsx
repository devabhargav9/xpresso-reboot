import {
  AlertTriangle,
  Briefcase,
  CalendarCheck,
  GraduationCap,
  IndianRupee,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

export function PrincipalDashboard() {
  return (
    <div className="bg-slate-50 p-5 sm:p-6">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Good morning, Dr. Mehta</h2>
          <p className="text-[12px] text-slate-500">
            Friday · Spring semester · Week 14 · 3 committee meetings today
          </p>
        </div>
        <div className="flex items-center gap-1.5 rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-800">
          <AlertTriangle className="h-3.5 w-3.5" />
          3 critical items need your attention
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        <Kpi icon={<Users className="h-4 w-4" />} label="Active students" value="4,287" sub="+142 this term" tone="indigo" />
        <Kpi icon={<GraduationCap className="h-4 w-4" />} label="Programs running" value="52" sub="3 new ODPs" tone="indigo" />
        <Kpi icon={<TrendingUp className="h-4 w-4" />} label="Avg mastery" value="71%" sub="+3 pts vs last sem" tone="emerald" />
        <Kpi icon={<Briefcase className="h-4 w-4" />} label="Placement" value="82%" sub="offers accepted" tone="emerald" />
        <Kpi icon={<IndianRupee className="h-4 w-4" />} label="Fees collected" value="₹24.7 Cr" sub="87% · ₹3.6 Cr pending" tone="emerald" />
        <Kpi icon={<CalendarCheck className="h-4 w-4" />} label="Attendance today" value="92.4%" sub="3,961 of 4,287 present" tone="emerald" />
        <Kpi icon={<ShieldCheck className="h-4 w-4" />} label="Compliance" value="94%" sub="across 6 frameworks" tone="emerald" />
        <Kpi icon={<AlertTriangle className="h-4 w-4" />} label="Open risks" value="7" sub="3 critical" tone="rose" />
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-[1.25fr_1fr]">
        <Card title="Outcome attainment trend" subtitle="% of program outcomes (POs) achieved · last 8 quarters">
          <LineChart data={[62, 64, 65, 67, 68, 70, 70, 71]} />
        </Card>
        <Card title="Compliance coverage" subtitle="Six frameworks × eight categories · live">
          <ComplianceHeatmap />
        </Card>
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[1.5fr_1fr]">
        <Card title="Department health" subtitle="Click any row to drill down">
          <DepartmentTable />
        </Card>
        <Card title="Risk flags this week" subtitle="Each has a one-step fix path">
          <RiskList />
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
  tone: "indigo" | "emerald" | "rose";
}) {
  const toneClass =
    tone === "emerald"
      ? "text-emerald-600 bg-emerald-50 border-emerald-100"
      : tone === "rose"
      ? "text-rose-600 bg-rose-50 border-rose-100"
      : "text-indigo-600 bg-indigo-50 border-indigo-100";
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
      <div className="flex items-baseline justify-between border-b border-slate-100 px-4 py-2.5">
        <div>
          <div className="text-[12.5px] font-semibold text-slate-900">{title}</div>
          {subtitle && <div className="text-[10.5px] text-slate-500">{subtitle}</div>}
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function LineChart({ data }: { data: number[] }) {
  const w = 380;
  const h = 130;
  const pad = 24;
  const min = Math.min(...data) - 4;
  const max = Math.max(...data) + 2;
  const span = max - min || 1;
  const stepX = (w - pad * 2) / (data.length - 1);
  const points = data
    .map((v, i) => {
      const x = pad + i * stepX;
      const y = pad + (1 - (v - min) / span) * (h - pad * 2);
      return `${x},${y}`;
    })
    .join(" ");
  const area = `${pad},${h - pad} ${points} ${pad + (data.length - 1) * stepX},${h - pad}`;
  return (
    <div className="relative">
      <svg viewBox={`0 0 ${w} ${h}`} className="h-32 w-full">
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1={pad} x2={w - pad} y1={pad + (i * (h - pad * 2)) / 3} y2={pad + (i * (h - pad * 2)) / 3} stroke="#e2e8f0" strokeWidth="1" />
        ))}
        <polygon points={area} fill="#4f46e5" fillOpacity="0.08" />
        <polyline points={points} fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
        {data.map((v, i) => {
          const x = pad + i * stepX;
          const y = pad + (1 - (v - min) / span) * (h - pad * 2);
          return <circle key={i} cx={x} cy={y} r={2.5} fill="#4f46e5" />;
        })}
      </svg>
      <div className="mt-1 flex justify-between px-6 text-[9.5px] text-slate-500">
        {["Q1'24", "Q2'24", "Q3'24", "Q4'24", "Q1'25", "Q2'25", "Q3'25", "Q4'25"].map((q) => (
          <span key={q}>{q}</span>
        ))}
      </div>
    </div>
  );
}

function ComplianceHeatmap() {
  const frameworks = ["NAAC", "NIRF", "AISHE", "NBA", "UGC", "AICTE"];
  const categories = ["Acad", "Faculty", "Research", "Stu Dev", "Infra", "Admin", "Quality", "Govt"];
  const data: number[][] = [
    [96, 94, 92, 95, 93, 91, 97, 93],
    [92, 90, 94, 93, 88, 86, 95, 96],
    [94, 0, 0, 0, 95, 88, 0, 99],
    [97, 92, 90, 93, 0, 0, 98, 0],
    [90, 0, 88, 91, 0, 92, 95, 0],
    [88, 0, 0, 0, 94, 86, 0, 95],
  ];
  const color = (v: number) => {
    if (v === 0) return "bg-slate-100 text-slate-300";
    if (v >= 95) return "bg-emerald-500 text-white";
    if (v >= 90) return "bg-emerald-300 text-emerald-900";
    if (v >= 80) return "bg-amber-200 text-amber-900";
    return "bg-rose-300 text-rose-900";
  };
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-[10px]">
        <thead>
          <tr>
            <th className="w-14"></th>
            {categories.map((c) => (
              <th key={c} className="pb-1 font-medium text-slate-500">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {frameworks.map((f, ri) => (
            <tr key={f}>
              <td className="pr-2 text-[10px] font-semibold text-slate-700">{f}</td>
              {data[ri].map((v, ci) => (
                <td key={ci} className="px-0.5 py-0.5">
                  <div className={`flex h-6 w-full items-center justify-center rounded ${color(v)} text-[9.5px] font-semibold`}>
                    {v === 0 ? "—" : v}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-2 flex items-center gap-3 text-[10px] text-slate-500">
        <Legend color="bg-emerald-500" label="≥ 95%" />
        <Legend color="bg-emerald-300" label="≥ 90%" />
        <Legend color="bg-amber-200" label="≥ 80%" />
        <Legend color="bg-rose-300" label="< 80%" />
        <Legend color="bg-slate-100" label="N/A" />
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1">
      <span className={`h-2.5 w-2.5 rounded ${color}`} />
      {label}
    </span>
  );
}

function DepartmentTable() {
  const rows = [
    { dept: "CSE", students: "1,240", mastery: 74, placement: 91, risks: 2, compliance: 96 },
    { dept: "ECE", students: "980", mastery: 71, placement: 86, risks: 1, compliance: 94 },
    { dept: "Mechanical", students: "760", mastery: 68, placement: 79, risks: 3, compliance: 93 },
    { dept: "Civil", students: "540", mastery: 67, placement: 73, risks: 0, compliance: 92 },
    { dept: "MBA", students: "420", mastery: 70, placement: 88, risks: 1, compliance: 95 },
    { dept: "BBA", students: "347", mastery: 65, placement: 70, risks: 0, compliance: 91 },
  ];
  return (
    <table className="w-full text-[11.5px]">
      <thead>
        <tr className="border-b border-slate-200 text-left text-[10px] uppercase tracking-wider text-slate-500">
          <th className="py-1.5 pr-2 font-medium">Department</th>
          <th className="py-1.5 pr-2 font-medium">Students</th>
          <th className="py-1.5 pr-2 font-medium">Mastery</th>
          <th className="py-1.5 pr-2 font-medium">Placement</th>
          <th className="py-1.5 pr-2 font-medium">Risks</th>
          <th className="py-1.5 pr-2 font-medium">Compliance</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.dept} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
            <td className="py-2 pr-2 font-semibold text-slate-800">{r.dept}</td>
            <td className="py-2 pr-2 text-slate-700">{r.students}</td>
            <td className="py-2 pr-2">
              <Bar value={r.mastery} max={100} color="#4f46e5" />
            </td>
            <td className="py-2 pr-2">
              <Bar value={r.placement} max={100} color="#059669" />
            </td>
            <td className="py-2 pr-2">
              <span className={`inline-flex h-5 min-w-[20px] items-center justify-center rounded-md px-1.5 text-[10px] font-semibold ${r.risks === 0 ? "bg-slate-100 text-slate-500" : r.risks >= 3 ? "bg-rose-100 text-rose-700" : "bg-amber-100 text-amber-800"}`}>
                {r.risks}
              </span>
            </td>
            <td className="py-2 pr-2 text-slate-700">{r.compliance}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Bar({ value, max, color }: { value: number; max: number; color: string }) {
  const pct = (value / max) * 100;
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-20 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="text-[10.5px] font-semibold text-slate-700">{value}%</span>
    </div>
  );
}

function RiskList() {
  const risks = [
    { sev: "critical", title: "NAAC: 2 sub-criteria below target", fix: "Upload 4 pending faculty publication PDFs" },
    { sev: "critical", title: "DVV anomaly: CGPA mismatch in 12 records", fix: "Reconcile via Examination Cell workspace" },
    { sev: "critical", title: "AICTE renewal due in 14 days", fix: "Approve program metadata & submit" },
    { sev: "high", title: "3 atoms below engagement threshold", fix: "Regenerate variants via EMS factory" },
    { sev: "low", title: "Hostel occupancy at 102%", fix: "Allocate 18 beds in annexe block" },
  ];
  const sevTone = (s: string) =>
    s === "critical"
      ? "bg-rose-100 text-rose-700 border-rose-200"
      : s === "high"
      ? "bg-amber-100 text-amber-800 border-amber-200"
      : "bg-slate-100 text-slate-600 border-slate-200";
  return (
    <ul className="flex flex-col gap-2">
      {risks.map((r, i) => (
        <li key={i} className="flex flex-col gap-1 rounded-md border border-slate-100 p-2.5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[12px] font-semibold text-slate-800">{r.title}</span>
            <span className={`rounded-full border px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${sevTone(r.sev)}`}>
              {r.sev}
            </span>
          </div>
          <div className="text-[11px] leading-snug text-slate-600">
            <span className="font-semibold text-indigo-700">Fix path:</span> {r.fix}
          </div>
        </li>
      ))}
    </ul>
  );
}
