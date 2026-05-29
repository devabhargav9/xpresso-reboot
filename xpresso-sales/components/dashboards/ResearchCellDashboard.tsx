import {
  Award,
  BookOpenCheck,
  FileBadge,
  FlaskConical,
  Globe2,
  Handshake,
  IndianRupee,
  Quote,
  TrendingUp,
} from "lucide-react";

export function ResearchCellDashboard() {
  return (
    <div className="bg-slate-50 p-5 sm:p-6">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Good morning, Prof. Banerjee</h2>
          <p className="text-[12px] text-slate-500">
            Dean (Research) · FY 2025–26 · Q4 grant filings due · Week 14
          </p>
        </div>
        <div className="flex items-center gap-1.5 rounded-md border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-800">
          <TrendingUp className="h-3.5 w-3.5" />
          Publications +13% vs last FY · 4 grant deadlines this month
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
        <Kpi icon={<BookOpenCheck className="h-4 w-4" />} label="Publications YTD" value="142" sub="Scopus / WoS · +18 vs LY" tone="emerald" />
        <Kpi icon={<Quote className="h-4 w-4" />} label="Citations YTD" value="3,847" sub="h-index 28 · i10 47" tone="emerald" />
        <Kpi icon={<FileBadge className="h-4 w-4" />} label="Patents" value="12 · 4 · 8" sub="filed · granted · pending" tone="indigo" />
        <Kpi icon={<IndianRupee className="h-4 w-4" />} label="Active grants" value="₹38.4 Cr" sub="27 grants · 4 deadlines" tone="indigo" />
        <Kpi icon={<FlaskConical className="h-4 w-4" />} label="Consultancy" value="₹2.8 Cr" sub="14 projects · ₹84 L invoiced" tone="emerald" />
        <Kpi icon={<Handshake className="h-4 w-4" />} label="MoUs active" value="31" sub="5 new this quarter" tone="indigo" />
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-[1.2fr_1fr]">
        <Card title="Publications & citations · last 12 months" subtitle="Auto-pulled from Scopus + Web of Science · faculty validated">
          <PubTrend />
        </Card>
        <Card title="Active grants · top by value" subtitle="₹38.4 Cr across 27 grants · 4 closing this quarter">
          <GrantsList />
        </Card>
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[1.3fr_1fr]">
        <Card title="Top research faculty · YTD impact" subtitle="Composite: publications · citations · patents · grants">
          <FacultyLeaderboard />
        </Card>
        <Card title="Patents pipeline" subtitle="Internal IP cell + external filings">
          <PatentsPipeline />
        </Card>
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_1.1fr]">
        <Card title="Consultancy projects · active" subtitle="₹2.8 Cr total · 14 projects · 6 departments">
          <ConsultancyList />
        </Card>
        <Card title="MoUs & collaborations" subtitle="Industry + academic + international">
          <MouList />
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

function PubTrend() {
  const months = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];
  const pubs = [8, 10, 11, 9, 13, 14, 12, 15, 11, 13, 14, 12];
  const cites = [180, 220, 260, 290, 340, 380, 410, 460, 480, 510, 540, 580].map((v) => v / 6); // normalize for chart
  const w = 420;
  const h = 150;
  const pad = 26;
  const maxPubs = Math.max(...pubs) + 4;
  const minPubs = 0;
  const stepX = (w - pad * 2) / (pubs.length - 1);
  const pubsPath = pubs
    .map((v, i) => {
      const x = pad + i * stepX;
      const y = pad + (1 - (v - minPubs) / (maxPubs - minPubs)) * (h - pad * 2);
      return `${x},${y}`;
    })
    .join(" ");
  const maxC = Math.max(...cites) + 10;
  const citesPath = cites
    .map((v, i) => {
      const x = pad + i * stepX;
      const y = pad + (1 - v / maxC) * (h - pad * 2);
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} className="h-36 w-full">
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1={pad}
            x2={w - pad}
            y1={pad + (i * (h - pad * 2)) / 3}
            y2={pad + (i * (h - pad * 2)) / 3}
            stroke="#e2e8f0"
            strokeWidth="1"
          />
        ))}
        <polyline points={citesPath} fill="none" stroke="#059669" strokeWidth="2" strokeDasharray="4 3" />
        <polyline points={pubsPath} fill="none" stroke="#4f46e5" strokeWidth="2" />
        {pubs.map((v, i) => {
          const x = pad + i * stepX;
          const y = pad + (1 - (v - minPubs) / (maxPubs - minPubs)) * (h - pad * 2);
          return <circle key={i} cx={x} cy={y} r={2.5} fill="#4f46e5" />;
        })}
      </svg>
      <div className="mt-1 flex justify-between px-6 text-[9.5px] text-slate-500">
        {months.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-4 text-[10.5px]">
        <Legend color="bg-indigo-600" label="Publications · 142 YTD" />
        <Legend color="bg-emerald-600" label="Citations · 3,847 YTD" dashed />
      </div>
    </div>
  );
}

function Legend({ color, label, dashed }: { color: string; label: string; dashed?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`inline-block h-0.5 w-4 ${color} ${dashed ? "opacity-70" : ""}`} />
      <span className="text-slate-600">{label}</span>
    </span>
  );
}

function GrantsList() {
  const grants = [
    { name: "DST · Quantum Computing", value: 6.4, agency: "DST", pi: "Dr. Khan (CSE)", remaining: "18 mo", tone: "indigo" },
    { name: "DRDO · AI for Defense", value: 4.2, agency: "DRDO", pi: "Dr. Iyer (ECE)", remaining: "12 mo", tone: "indigo" },
    { name: "BIRAC · Biotech platform", value: 3.8, agency: "BIRAC", pi: "Dr. Nair (BT)", remaining: "24 mo", tone: "indigo" },
    { name: "DBT · Genomics platform", value: 2.9, agency: "DBT", pi: "Dr. Reddy (BT)", remaining: "18 mo", tone: "indigo" },
    { name: "ICSSR · Education Policy", value: 1.8, agency: "ICSSR", pi: "Dr. Banerjee (HSS)", remaining: "30 mo", tone: "indigo" },
  ];
  const total = 38.4;
  return (
    <ul className="flex flex-col gap-1.5">
      {grants.map((g, i) => {
        const share = (g.value / total) * 100;
        return (
          <li key={i} className="flex flex-col gap-1 rounded-md border border-slate-100 p-2">
            <div className="flex items-center justify-between gap-2 text-[11.5px]">
              <span className="font-semibold text-slate-800">{g.name}</span>
              <span className="font-semibold tabular-nums text-slate-700">₹{g.value.toFixed(1)} Cr</span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-indigo-500" style={{ width: `${share * 2}%` }} />
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500">
              <span>
                {g.agency} · {g.pi}
              </span>
              <span>{g.remaining} left</span>
            </div>
          </li>
        );
      })}
      <li className="mt-1 rounded-md border border-amber-100 bg-amber-50/60 px-3 py-1.5 text-[11px] text-amber-900">
        <span className="font-semibold">4 grant deadlines</span> this quarter · 2 budgets need revision.{" "}
        <span className="font-semibold underline">Open queue →</span>
      </li>
    </ul>
  );
}

function FacultyLeaderboard() {
  const rows = [
    { rank: 1, name: "Dr. Khan", dept: "CSE", pubs: 14, cites: 412, patents: 2, grants: 3, score: 92 },
    { rank: 2, name: "Dr. Iyer", dept: "ECE", pubs: 12, cites: 387, patents: 1, grants: 2, score: 86 },
    { rank: 3, name: "Dr. Nair", dept: "BT", pubs: 11, cites: 298, patents: 0, grants: 4, score: 81 },
    { rank: 4, name: "Dr. Reddy", dept: "BT", pubs: 9, cites: 254, patents: 2, grants: 1, score: 74 },
    { rank: 5, name: "Dr. Verma", dept: "ME", pubs: 8, cites: 198, patents: 3, grants: 1, score: 71 },
    { rank: 6, name: "Dr. Pillai", dept: "Civil", pubs: 7, cites: 142, patents: 1, grants: 1, score: 64 },
  ];
  return (
    <table className="w-full text-[11px]">
      <thead>
        <tr className="border-b border-slate-200 text-left text-[9.5px] uppercase tracking-wider text-slate-500">
          <th className="py-1.5 pr-2 font-medium">#</th>
          <th className="py-1.5 pr-2 font-medium">Faculty</th>
          <th className="py-1.5 pr-2 font-medium">Dept</th>
          <th className="py-1.5 pr-2 text-right font-medium">Pubs</th>
          <th className="py-1.5 pr-2 text-right font-medium">Cites</th>
          <th className="py-1.5 pr-2 text-right font-medium">Pat.</th>
          <th className="py-1.5 pr-2 text-right font-medium">Grants</th>
          <th className="py-1.5 pr-2 text-right font-medium">Score</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.rank} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
            <td className="py-1.5 pr-2 text-[10px] font-semibold text-slate-500">
              {r.rank === 1 && <Award className="inline h-3 w-3 text-amber-500" />} {r.rank}
            </td>
            <td className="py-1.5 pr-2 font-semibold text-slate-800">{r.name}</td>
            <td className="py-1.5 pr-2 text-slate-600">{r.dept}</td>
            <td className="py-1.5 pr-2 text-right tabular-nums text-slate-700">{r.pubs}</td>
            <td className="py-1.5 pr-2 text-right tabular-nums text-slate-700">{r.cites}</td>
            <td className="py-1.5 pr-2 text-right tabular-nums text-slate-700">{r.patents}</td>
            <td className="py-1.5 pr-2 text-right tabular-nums text-slate-700">{r.grants}</td>
            <td className="py-1.5 pr-2 text-right">
              <span className="inline-flex h-5 min-w-[26px] items-center justify-center rounded-md bg-indigo-100 px-1.5 text-[10.5px] font-semibold tabular-nums text-indigo-700">
                {r.score}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function PatentsPipeline() {
  const stages = [
    { label: "Filed (FY)", value: 12, tone: "indigo" },
    { label: "Examination", value: 5, tone: "amber" },
    { label: "Office action", value: 3, tone: "rose" },
    { label: "Granted (FY)", value: 4, tone: "emerald" },
  ];
  const tone = (t: string) =>
    t === "rose"
      ? "border-rose-200 bg-rose-50 text-rose-700"
      : t === "amber"
      ? "border-amber-200 bg-amber-50 text-amber-700"
      : t === "emerald"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : "border-indigo-200 bg-indigo-50 text-indigo-700";
  return (
    <div className="flex flex-col gap-2.5">
      <div className="grid grid-cols-2 gap-2">
        {stages.map((s) => (
          <div key={s.label} className={`flex flex-col rounded-md border p-2 ${tone(s.tone)}`}>
            <span className="text-[10px] font-semibold uppercase tracking-wider opacity-80">{s.label}</span>
            <span className="text-[18px] font-semibold">{s.value}</span>
          </div>
        ))}
      </div>
      <div className="rounded-md border border-slate-100 p-2.5">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Most recent filing</div>
        <div className="mt-1 text-[12px] font-semibold text-slate-800">
          "Adaptive learning method using cognitive twin"
        </div>
        <div className="text-[10.5px] text-slate-500">Filed Mar 2026 · Dr. Khan (CSE) · App # 202641023</div>
      </div>
    </div>
  );
}

function ConsultancyList() {
  const items = [
    { client: "Tata Steel", project: "Process Optimization", value: 46, dept: "ME", status: "Active" },
    { client: "L&T", project: "Smart Cities · Mobility", value: 38, dept: "Civil", status: "Active" },
    { client: "Wipro", project: "AI Governance Framework", value: 24, dept: "CSE", status: "Active" },
    { client: "ITC", project: "Supply Chain Analytics", value: 18, dept: "MBA", status: "Active" },
    { client: "ISRO", project: "Materials Testing", value: 12, dept: "ME", status: "Active" },
  ];
  return (
    <ul className="flex flex-col gap-1.5">
      {items.map((it, i) => (
        <li key={i} className="flex items-center gap-2.5 rounded-md border border-slate-100 px-2.5 py-1.5">
          <div className="flex w-7 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-[10.5px] font-bold text-indigo-700">
            {it.client.slice(0, 1)}
          </div>
          <div className="flex flex-1 flex-col">
            <div className="text-[11.5px] font-semibold text-slate-800">
              {it.client} <span className="text-slate-400">·</span> {it.project}
            </div>
            <span className="text-[10px] text-slate-500">{it.dept} dept · {it.status}</span>
          </div>
          <span className="text-[11px] font-semibold tabular-nums text-slate-700">₹{it.value} L</span>
        </li>
      ))}
    </ul>
  );
}

function MouList() {
  const items = [
    { partner: "Stanford University", scope: "Computing research collab", region: "USA", period: "2025–2028", flag: "academic" },
    { partner: "IISc Bangalore", scope: "Joint PhD programme", region: "India", period: "2024–2027", flag: "academic" },
    { partner: "Siemens India", scope: "Industry 4.0 lab", region: "India", period: "2025–2028", flag: "industry" },
    { partner: "AIIMS Delhi", scope: "Biomedical AI dataset access", region: "India", period: "2024–2026", flag: "academic" },
    { partner: "IIT Madras", scope: "Quantum computing cluster", region: "India", period: "2023–2026", flag: "academic" },
    { partner: "BMW Group", scope: "EV battery research", region: "Germany", period: "2026–2029", flag: "industry" },
  ];
  const flagTone = (f: string) =>
    f === "industry"
      ? "bg-amber-100 text-amber-800"
      : "bg-indigo-100 text-indigo-700";
  return (
    <ul className="flex flex-col gap-1">
      {items.map((m, i) => (
        <li key={i} className="flex items-center gap-2 rounded-md border border-slate-100 px-2.5 py-1.5">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-slate-50 text-slate-500">
            <Globe2 className="h-3 w-3" />
          </span>
          <div className="flex flex-1 flex-col">
            <span className="text-[11.5px] font-semibold text-slate-800">{m.partner}</span>
            <span className="text-[10.5px] text-slate-500">{m.scope} · {m.region}</span>
          </div>
          <span className={`rounded-full px-1.5 py-0.5 text-[9.5px] font-semibold ${flagTone(m.flag)}`}>
            {m.flag}
          </span>
          <span className="text-[10.5px] tabular-nums text-slate-500">{m.period}</span>
        </li>
      ))}
    </ul>
  );
}
