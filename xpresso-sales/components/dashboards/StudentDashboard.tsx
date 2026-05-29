import {
  BedDouble,
  BookMarked,
  Box,
  Brain,
  CalendarCheck,
  CalendarClock,
  Flame,
  Headphones,
  IndianRupee,
  MessageSquareText,
  Play,
  Sparkles,
  Target,
  Utensils,
} from "lucide-react";

export function StudentDashboard() {
  return (
    <div className="bg-slate-50 p-5 sm:p-6">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Hi Priya</h2>
          <p className="text-[12px] text-slate-500">
            B.Tech CSE · 3rd year · 6th semester · Section A
          </p>
        </div>
        <div className="flex items-center gap-1.5 rounded-md border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-800">
          <Sparkles className="h-3.5 w-3.5" />
          Your twin picked video + 3D for today
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        <Kpi icon={<Target className="h-4 w-4" />} label="Mastery this week" value="+8.2%" sub="+1.4 pts vs last week" tone="emerald" />
        <Kpi icon={<Flame className="h-4 w-4" />} label="Streak" value="23 days" sub="don't break it" tone="amber" />
        <Kpi icon={<Box className="h-4 w-4" />} label="Atoms done" value="142 / 180" sub="this term" tone="indigo" />
        <Kpi icon={<Brain className="h-4 w-4" />} label="ODP enrolled" value="AI for Finance" sub="3 weeks in · 42%" tone="indigo" />
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-[1.3fr_1fr]">
        <Card title="Today's adaptive path" subtitle="Tailored to your twin's current state · 2h 14m total">
          <PathTimeline />
        </Card>
        <Card title="AI tutor" subtitle="Grounded in your curriculum + your twin" badge="online">
          <TutorPreview />
        </Card>
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[1.2fr_1fr]">
        <Card title="Mastery across courses" subtitle="With confidence + modality you do best in">
          <MasteryList />
        </Card>
        <div className="flex flex-col gap-3">
          <Card title="Your cognitive twin · right now" subtitle="Auto-updated from this week's interactions">
            <TwinSnapshot />
          </Card>
          <Card title="Upcoming deadlines" subtitle="Next 14 days">
            <Deadlines />
          </Card>
        </div>
      </div>

      <div className="mt-3">
        <Card title="My institution · at a glance" subtitle="Attendance, fees, library, hostel, mess — your campus life">
          <InstitutionStrip />
        </Card>
      </div>
    </div>
  );
}

function InstitutionStrip() {
  const tiles = [
    {
      label: "Attendance",
      value: "87.4%",
      sub: "2.6% below 90% required for exam",
      tone: "amber" as const,
      icon: <CalendarCheck className="h-3.5 w-3.5" />,
      action: "View per-course",
    },
    {
      label: "Fees",
      value: "₹0 dues",
      sub: "Spring term fully paid · receipt #SP24-0421",
      tone: "emerald" as const,
      icon: <IndianRupee className="h-3.5 w-3.5" />,
      action: "Download receipt",
    },
    {
      label: "Library",
      value: "2 books",
      sub: "Sedgewick due in 3 days · 1 fine pending ₹40",
      tone: "indigo" as const,
      icon: <BookMarked className="h-3.5 w-3.5" />,
      action: "Renew online",
    },
    {
      label: "Hostel",
      value: "C-204",
      sub: "Block C · roommate: Diya M. · cleaning Mon",
      tone: "slate" as const,
      icon: <BedDouble className="h-3.5 w-3.5" />,
      action: "Raise ticket",
    },
    {
      label: "Mess",
      value: "Veg plan",
      sub: "Today: Rajma chawal · feedback open",
      tone: "slate" as const,
      icon: <Utensils className="h-3.5 w-3.5" />,
      action: "Rate today",
    },
  ];
  const subColor = (t: string) =>
    t === "emerald"
      ? "text-emerald-700"
      : t === "amber"
      ? "text-amber-700"
      : t === "indigo"
      ? "text-indigo-700"
      : "text-slate-500";
  const iconBg = (t: string) =>
    t === "emerald"
      ? "bg-emerald-50 text-emerald-700 border-emerald-100"
      : t === "amber"
      ? "bg-amber-50 text-amber-700 border-amber-100"
      : t === "indigo"
      ? "bg-indigo-50 text-indigo-700 border-indigo-100"
      : "bg-slate-50 text-slate-600 border-slate-200";
  return (
    <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
      {tiles.map((t) => (
        <div key={t.label} className="flex flex-col gap-1.5 rounded-md border border-slate-100 p-2.5">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-500">
            <span className="font-semibold">{t.label}</span>
            <span className={`flex h-5 w-5 items-center justify-center rounded-md border ${iconBg(t.tone)}`}>
              {t.icon}
            </span>
          </div>
          <div className="text-[14px] font-semibold text-slate-800">{t.value}</div>
          <div className={`text-[10.5px] leading-snug ${subColor(t.tone)}`}>{t.sub}</div>
          <button className="mt-1 text-left text-[10.5px] font-semibold text-indigo-700 hover:underline">
            {t.action} →
          </button>
        </div>
      ))}
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
  tone: "indigo" | "emerald" | "amber";
}) {
  const toneClass =
    tone === "emerald"
      ? "text-emerald-600 bg-emerald-50 border-emerald-100"
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
  badge,
  children,
}: {
  title: string;
  subtitle?: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-lg border border-slate-200 bg-white">
      <div className="flex items-baseline justify-between border-b border-slate-100 px-4 py-2.5">
        <div>
          <div className="text-[12.5px] font-semibold text-slate-900">{title}</div>
          {subtitle && <div className="text-[10.5px] text-slate-500">{subtitle}</div>}
        </div>
        {badge && (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[9.5px] font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {badge}
          </span>
        )}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function PathTimeline() {
  const items = [
    { time: "09:00", title: "Binary Search Trees", mod: "3d", duration: "12 min", why: "Twin chose 3D · best for high-attention morning", action: "Start" },
    { time: "09:15", title: "Quick check · 3 questions", mod: "quiz", duration: "5 min", why: "Verify mastery before moving on", action: "Open" },
    { time: "09:30", title: "BST insertion proof", mod: "video", duration: "8 min", why: "Visual proof for spatial learners", action: "Watch" },
    { time: "11:00", title: "CS301 live class · LH-3", mod: "class", duration: "55 min", why: "Bring your BST notes", action: "Attend" },
    { time: "17:00", title: "Revision: Pointers", mod: "audio", duration: "6 min", why: "Forgetting curve · last seen 18 days ago", action: "Listen" },
  ];
  const modIcon = (m: string) => {
    if (m === "3d") return <Box className="h-3.5 w-3.5" />;
    if (m === "video") return <Play className="h-3.5 w-3.5" />;
    if (m === "audio") return <Headphones className="h-3.5 w-3.5" />;
    if (m === "quiz") return <Target className="h-3.5 w-3.5" />;
    return <CalendarClock className="h-3.5 w-3.5" />;
  };
  const modTone = (m: string) => {
    if (m === "3d") return "bg-violet-100 text-violet-700";
    if (m === "video") return "bg-indigo-100 text-indigo-700";
    if (m === "audio") return "bg-amber-100 text-amber-800";
    if (m === "quiz") return "bg-emerald-100 text-emerald-700";
    return "bg-slate-100 text-slate-600";
  };
  return (
    <ol className="flex flex-col">
      {items.map((it, i) => (
        <li key={i} className="relative flex gap-3 py-2">
          <div className="flex w-12 shrink-0 flex-col items-center">
            <span className="text-[11px] font-semibold tabular-nums text-slate-500">{it.time}</span>
            {i < items.length - 1 && (
              <span className="mt-1 h-full w-px flex-1 bg-slate-200" />
            )}
          </div>
          <div className="flex flex-1 flex-col gap-1 rounded-md border border-slate-100 p-2.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[12.5px] font-semibold text-slate-800">{it.title}</span>
              <span className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9.5px] font-semibold uppercase ${modTone(it.mod)}`}>
                {modIcon(it.mod)} {it.mod}
              </span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] text-slate-500">{it.duration} · {it.why}</span>
              <button className="rounded-md bg-indigo-600 px-2 py-0.5 text-[10.5px] font-semibold text-white">
                {it.action}
              </button>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

function TutorPreview() {
  return (
    <div className="flex flex-col gap-2.5">
      <Msg
        who="me"
        text="I don't get why insert is O(log n) for BSTs but O(n) worst case?"
      />
      <Msg
        who="tutor"
        text="Because BSTs only stay balanced if inserts are random. If you insert sorted data, it degrades into a list — that's the O(n) case. Want me to show the skewed tree visually?"
      />
      <Msg who="me" text="Yes show me with 5 nodes" />
      <Msg
        who="tutor"
        text="Spinning up a 3D variant grounded in CS301 §4.2. Your twin says you learn this best as 3D — opening now."
        chip="Modality match: 3D · 92%"
      />
      <div className="mt-2 flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">
        <MessageSquareText className="h-3.5 w-3.5 text-slate-400" />
        <input
          className="flex-1 bg-transparent text-[11.5px] text-slate-500 outline-none placeholder:text-slate-400"
          placeholder="Ask the tutor anything…"
          readOnly
        />
        <span className="text-[10px] text-slate-400">Enter ↵</span>
      </div>
    </div>
  );
}

function Msg({ who, text, chip }: { who: "me" | "tutor"; text: string; chip?: string }) {
  const isMe = who === "me";
  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[88%] rounded-2xl px-3 py-1.5 text-[11.5px] leading-snug ${
          isMe
            ? "rounded-br-sm bg-indigo-600 text-white"
            : "rounded-bl-sm bg-slate-100 text-slate-800"
        }`}
      >
        {text}
        {chip && (
          <div className="mt-1 inline-flex rounded-full bg-white/90 px-1.5 py-0.5 text-[9.5px] font-semibold text-indigo-700">
            {chip}
          </div>
        )}
      </div>
    </div>
  );
}

function MasteryList() {
  const items = [
    { course: "CS301 Data Structures", mastery: 76, confidence: "high", modality: "3D / video", tone: "indigo" },
    { course: "CS305 Discrete Math", mastery: 68, confidence: "mid", modality: "PDF", tone: "amber" },
    { course: "CS401 Algorithms", mastery: 71, confidence: "high", modality: "Video", tone: "indigo" },
    { course: "HSS201 Economics", mastery: 63, confidence: "low", modality: "Audio", tone: "rose" },
    { course: "ODP · AI for Finance", mastery: 42, confidence: "building", modality: "Mixed · 3 weeks in", tone: "violet" },
  ];
  const toneBg = (t: string) => {
    if (t === "indigo") return "#4f46e5";
    if (t === "amber") return "#d97706";
    if (t === "rose") return "#e11d48";
    if (t === "violet") return "#7c3aed";
    return "#475569";
  };
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((it, i) => (
        <li key={i} className="flex flex-col gap-1">
          <div className="flex items-center justify-between text-[12px]">
            <span className="font-semibold text-slate-800">{it.course}</span>
            <span className="tabular-nums font-semibold text-slate-700">{it.mastery}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full" style={{ width: `${it.mastery}%`, background: toneBg(it.tone) }} />
          </div>
          <div className="text-[10.5px] text-slate-500">
            Confidence: <span className="font-semibold">{it.confidence}</span> · Best modality: {it.modality}
          </div>
        </li>
      ))}
    </ul>
  );
}

function TwinSnapshot() {
  const stats = [
    { label: "Attention", value: "High", color: "bg-emerald-500", width: 88 },
    { label: "Working memory load", value: "Low", color: "bg-emerald-500", width: 24 },
    { label: "Best modality right now", value: "Video", color: "bg-indigo-500", width: 92 },
    { label: "Pace vs cohort", value: "+12%", color: "bg-indigo-500", width: 68 },
  ];
  return (
    <ul className="flex flex-col gap-2">
      {stats.map((s) => (
        <li key={s.label}>
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-slate-600">{s.label}</span>
            <span className="font-semibold text-slate-800">{s.value}</span>
          </div>
          <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div className={`h-full ${s.color}`} style={{ width: `${s.width}%` }} />
          </div>
        </li>
      ))}
    </ul>
  );
}

function Deadlines() {
  const items = [
    { when: "Mon", title: "Algorithms assignment 3", course: "CS401", tone: "rose" },
    { when: "Jun 5", title: "CS301 mid-term", course: "Data Structures", tone: "amber" },
    { when: "Jun 10", title: "ODP project draft", course: "AI for Finance", tone: "indigo" },
  ];
  return (
    <ul className="flex flex-col gap-1.5">
      {items.map((d, i) => (
        <li key={i} className="flex items-center gap-2 rounded-md border border-slate-100 px-2.5 py-1.5">
          <span
            className={`inline-flex h-5 min-w-[28px] items-center justify-center rounded-md px-1.5 text-[10px] font-semibold ${
              d.tone === "rose"
                ? "bg-rose-100 text-rose-700"
                : d.tone === "amber"
                ? "bg-amber-100 text-amber-800"
                : "bg-indigo-100 text-indigo-700"
            }`}
          >
            {d.when}
          </span>
          <div className="flex flex-1 flex-col">
            <span className="text-[11.5px] font-semibold text-slate-800">{d.title}</span>
            <span className="text-[10px] text-slate-500">{d.course}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
