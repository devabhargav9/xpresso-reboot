import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  ChevronRight,
  Database,
  Download,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

const SECTION_TONE = "bg-white";

export function InstitutionWebsiteMock() {
  return (
    <div className="font-[system-ui] text-slate-900">
      <TopBar />
      <Hero />
      <StatsStrip />
      <ProgramsGrid />
      <Disclosures />
      <ResearchHighlights />
      <FacultySpotlight />
      <AlumniStories />
      <SiteFooter />
    </div>
  );
}

function TopBar() {
  const links = [
    "About",
    "Programs",
    "Admissions",
    "Research",
    "Placements",
    "Alumni",
    "Contact",
  ];
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="hidden border-b border-slate-100 bg-slate-50 px-6 py-1.5 text-[11px] text-slate-500 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1">
            <Phone className="h-3 w-3" /> +91 80 4123 4567
          </span>
          <span className="inline-flex items-center gap-1">
            <Mail className="h-3 w-3" /> admissions@bharatheng.ac.in
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3 w-3" /> Whitefield, Bengaluru
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span>Student Portal</span>
          <span>Faculty Portal</span>
          <span>Alumni Login</span>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-blue-700 to-indigo-800 text-white shadow">
            <GraduationCap className="h-4.5 w-4.5" />
          </div>
          <div className="leading-tight">
            <div className="text-[15px] font-semibold tracking-tight text-slate-900">
              Bharath Engineering College
            </div>
            <div className="text-[10.5px] uppercase tracking-[0.18em] text-slate-500">
              Est. 1985 · Bengaluru
            </div>
          </div>
        </div>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <span
              key={l}
              className="cursor-default rounded-md px-3 py-1.5 text-[12.5px] font-semibold text-slate-700 hover:bg-slate-100"
            >
              {l}
            </span>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-500 sm:flex">
            <Search className="h-3.5 w-3.5" />
          </button>
          <button className="rounded-md bg-orange-600 px-3.5 py-1.5 text-[12.5px] font-semibold text-white shadow-sm hover:bg-orange-700">
            Apply for 2026
          </button>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <SectionRow annotation="Hero copy editable by Admin · banner image stored once, served everywhere">
      <div className="grid gap-10 px-6 py-12 sm:py-16 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-12">
        <div className="flex flex-col gap-5">
          <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-800">
            <Sparkles className="h-3 w-3" /> Admissions open · 2026 batch
          </div>
          <h1 className="text-3xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-[40px]">
            Engineering minds for tomorrow's challenges — since 1985.
          </h1>
          <p className="max-w-xl text-[14.5px] leading-relaxed text-slate-600">
            A NAAC A+ accredited institution with 23 programs across CSE, ECE,
            Mechanical, Management, and Design. 84% campus placement, 280
            faculty members, and a research output that ranks us 87th in NIRF
            engineering.
          </p>
          <div className="flex flex-wrap items-center gap-2.5">
            <button className="inline-flex items-center gap-1.5 rounded-md bg-blue-700 px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm hover:bg-blue-800">
              Explore programs <ChevronRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-700 hover:bg-slate-50">
              Download brochure
            </button>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <TrustChip label="NAAC A+" />
            <TrustChip label="NIRF Ranked" />
            <TrustChip label="UGC Recognized" />
            <TrustChip label="AICTE Approved" />
            <TrustChip label="ISO 9001:2015" />
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-100 via-indigo-50 to-slate-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Building2 className="mx-auto h-12 w-12 text-blue-700/70" />
              <div className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-blue-900/70">
                Campus banner image
              </div>
              <div className="mt-1 text-[10.5px] text-slate-500">
                Whitefield campus · 32 acres
              </div>
            </div>
          </div>
          <div className="absolute bottom-3 left-3 rounded-md bg-white/80 px-2 py-1 text-[10px] font-semibold text-slate-700 backdrop-blur">
            Founded 1985
          </div>
        </div>
      </div>
    </SectionRow>
  );
}

function TrustChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-[10.5px] font-semibold text-slate-700">
      <ShieldCheck className="h-3 w-3 text-emerald-600" /> {label}
    </span>
  );
}

function StatsStrip() {
  const stats = [
    { value: "4,200", label: "Students" },
    { value: "280", label: "Faculty" },
    { value: "23", label: "Programs" },
    { value: "84%", label: "Placement" },
    { value: "₹14.2 L", label: "Avg package" },
    { value: "87", label: "NIRF rank" },
  ];
  return (
    <SectionRow
      annotation="Auto-pulled from IMS · refreshed nightly · no manual edits"
      tone="muted"
    >
      <div className="px-6 py-9">
        <div className="grid grid-cols-3 gap-y-5 sm:grid-cols-6">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <div className="text-[22px] font-semibold leading-none text-blue-800 sm:text-[26px]">
                {s.value}
              </div>
              <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionRow>
  );
}

function ProgramsGrid() {
  const programs = [
    {
      name: "B.Tech · Computer Science",
      duration: "4 yrs",
      seats: 180,
      fees: "₹1.85 L/yr",
      accred: "NBA accredited",
      tone: "blue",
    },
    {
      name: "B.Tech · Electronics",
      duration: "4 yrs",
      seats: 120,
      fees: "₹1.85 L/yr",
      accred: "NBA accredited",
      tone: "blue",
    },
    {
      name: "B.Tech · Mechanical",
      duration: "4 yrs",
      seats: 90,
      fees: "₹1.85 L/yr",
      accred: "NBA accredited",
      tone: "blue",
    },
    {
      name: "M.Tech · AI & Data Science",
      duration: "2 yrs",
      seats: 30,
      fees: "₹2.4 L/yr",
      accred: "UGC approved",
      tone: "emerald",
    },
    {
      name: "MBA · Business Analytics",
      duration: "2 yrs",
      seats: 60,
      fees: "₹3.2 L/yr",
      accred: "AICTE approved",
      tone: "orange",
    },
    {
      name: "MCA · Computer Applications",
      duration: "2 yrs",
      seats: 40,
      fees: "₹1.95 L/yr",
      accred: "UGC approved",
      tone: "emerald",
    },
  ];
  return (
    <SectionRow annotation="Live from IMS · Programs module · enrolment data refreshed daily">
      <div className="px-6 py-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-800">
              Academic offerings
            </div>
            <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-[26px]">
              Programs we offer
            </h2>
            <p className="mt-1.5 text-[13px] text-slate-600">
              23 programs across undergraduate, postgraduate, and short-format
              ODP credit modules. All seats, fees, and accreditation pulled
              from live IMS records.
            </p>
          </div>
          <button className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-[12px] font-semibold text-slate-700">
            View all programs <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <div
              key={p.name}
              className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                  <BookOpen className="h-4 w-4" />
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                  {p.accred}
                </span>
              </div>
              <div>
                <div className="text-[14px] font-semibold leading-tight text-slate-900">
                  {p.name}
                </div>
                <div className="mt-0.5 text-[11px] text-slate-500">
                  {p.duration} · {p.seats} seats
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <span className="text-[12px] font-semibold text-slate-700">
                  {p.fees}
                </span>
                <span className="text-[11.5px] font-semibold text-blue-700">
                  Apply →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionRow>
  );
}

function Disclosures() {
  const items = [
    {
      title: "NAAC Accreditation",
      detail: "A+ Grade · CGPA 3.42 · Cycle 3 (valid until 2028)",
      meta: "Last AQAR filed: Mar 2026 · SSR available on request",
      action: "Download AQAR",
    },
    {
      title: "AICTE Approval",
      detail: "F.No. AICTE/SW/2025-26/KAR/BL-3245 · valid 2025–26",
      meta: "Annual intake approval letter (signed)",
      action: "Approval letter (PDF)",
    },
    {
      title: "UGC Recognition",
      detail: "12(B) & 2(f) recognized · DEB-recognized for distance programs",
      meta: "Letter dated Apr 2024 · re-validation cycle 5 years",
      action: "UGC letter (PDF)",
    },
    {
      title: "NIRF 2026",
      detail: "Engineering: Rank 87 (national) · Karnataka top 12",
      meta: "Data submission verified · final rankings Jun 2026",
      action: "View NIRF data sheet",
    },
    {
      title: "IQAC Composition",
      detail: "Chair: Dr. Anitha R · 11 members · meets quarterly",
      meta: "MoMs and action items public · last meeting Apr 18, 2026",
      action: "View IQAC page",
    },
    {
      title: "Mandatory disclosures",
      detail:
        "Anti-ragging, gender harassment, grievance redressal, RTI, audited financials",
      meta: "All policies signed and dated · acknowledgement tracked",
      action: "Open disclosure pack",
    },
  ];
  return (
    <SectionRow
      annotation="Live disclosure feed · auto-updates as IMS data changes · audit-trail logged"
      tone="muted"
    >
      <div className="px-6 py-12">
        <div className="flex flex-col gap-1.5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
            <ShieldCheck className="mr-1 inline h-3 w-3 align-[-2px]" />
            Mandatory disclosures
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-[26px]">
            Accreditation, approvals, and transparency
          </h2>
          <p className="mt-1.5 max-w-2xl text-[13px] text-slate-600">
            Every regulator-mandated disclosure rendered from live IMS data —
            so what's public always matches what's on file.
          </p>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                  <FileText className="h-3.5 w-3.5" />
                </div>
                <div className="text-[13px] font-semibold text-slate-900">
                  {it.title}
                </div>
              </div>
              <div className="text-[12px] text-slate-700">{it.detail}</div>
              <div className="text-[10.5px] text-slate-500">{it.meta}</div>
              <button className="mt-1 inline-flex w-fit items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-semibold text-slate-700 hover:bg-slate-100">
                <Download className="h-3 w-3" /> {it.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </SectionRow>
  );
}

function ResearchHighlights() {
  const items = [
    {
      kind: "Paper",
      title:
        "Federated Learning for On-Device Privacy: A Karnataka Telemedicine Pilot",
      authors: "Dr. Anitha R, Dr. Karan M, Prof. S. Bhat",
      venue: "IEEE Transactions on AI, Mar 2026",
      tag: "Scopus indexed",
      cite: "Cited 24 times",
    },
    {
      kind: "Patent",
      title:
        "Low-power gait estimation method for elderly fall prediction (IN 459123)",
      authors: "Dr. Karan M, Prof. R. Iyengar (with ISRO)",
      venue: "Granted Feb 2026",
      tag: "National patent",
      cite: "Industry MoU · Tata Elxsi",
    },
    {
      kind: "Grant",
      title:
        "DST-SERB grant: AI-assisted maintenance for Karnataka grid infrastructure",
      authors: "PI: Dr. S. Bhat · Co-PI: Dr. Anitha R",
      venue: "₹1.4 Cr · Apr 2026 – Mar 2029",
      tag: "Active grant",
      cite: "Phase 1 milestone delivered",
    },
  ];
  return (
    <SectionRow annotation="Plan 2: Live EMS research feed · publications, patents, grants auto-pulled from Scopus + WoS">
      <div className="px-6 py-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-800">
              Research & innovation
            </div>
            <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-[26px]">
              What our faculty is publishing right now
            </h2>
            <p className="mt-1.5 max-w-2xl text-[13px] text-slate-600">
              Papers, patents, and active grants — drawn directly from the
              institution's EMS research module. No manual updates.
            </p>
          </div>
          <button className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-[12px] font-semibold text-slate-700">
            All publications <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="mt-7 grid gap-3 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-4"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-800">
                  <Database className="h-3 w-3" /> {it.kind}
                </span>
                <span className="text-[10px] font-semibold text-emerald-700">
                  {it.tag}
                </span>
              </div>
              <div className="text-[13px] font-semibold leading-snug text-slate-900">
                {it.title}
              </div>
              <div className="text-[11px] text-slate-600">{it.authors}</div>
              <div className="flex items-center justify-between border-t border-slate-100 pt-2 text-[10.5px] text-slate-500">
                <span>{it.venue}</span>
                <span className="font-semibold text-blue-700">{it.cite}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionRow>
  );
}

function FacultySpotlight() {
  const faculty = [
    {
      name: "Dr. Anitha Ramesh",
      dept: "Computer Science",
      role: "Professor · IQAC Chair",
      meta: "h-index 38 · 14 patents",
      tone: "rose",
    },
    {
      name: "Dr. Karan Manjunath",
      dept: "Electronics",
      role: "Associate Professor",
      meta: "h-index 22 · 9 active grants",
      tone: "blue",
    },
    {
      name: "Dr. S. Bhat",
      dept: "Mechanical",
      role: "Professor & HoD",
      meta: "h-index 27 · DST-SERB PI",
      tone: "emerald",
    },
    {
      name: "Prof. R. Iyengar",
      dept: "Management",
      role: "Adjunct Professor",
      meta: "Industry: Infosys 18 yrs",
      tone: "violet",
    },
  ];
  const avatarTone = (t: string) => {
    if (t === "rose") return "bg-rose-100 text-rose-700";
    if (t === "blue") return "bg-blue-100 text-blue-700";
    if (t === "emerald") return "bg-emerald-100 text-emerald-700";
    return "bg-violet-100 text-violet-700";
  };
  return (
    <SectionRow
      annotation="Faculty list auto-rendered from IMS · publications + h-index pulled from EMS · profile page links to live faculty workspace"
      tone="muted"
    >
      <div className="px-6 py-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-800">
              Our faculty
            </div>
            <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-[26px]">
              Meet the people who teach here
            </h2>
            <p className="mt-1.5 max-w-2xl text-[13px] text-slate-600">
              Always-current faculty profiles. Updating an HR record in IMS or
              a publication in EMS updates the public website automatically.
            </p>
          </div>
          <button className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-[12px] font-semibold text-slate-700">
            All 280 faculty <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((f) => (
            <div
              key={f.name}
              className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 text-center"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full text-[15px] font-semibold ${avatarTone(
                  f.tone
                )}`}
              >
                {f.name
                  .split(" ")
                  .slice(-2)
                  .map((s) => s[0])
                  .join("")}
              </div>
              <div className="text-[13px] font-semibold leading-tight text-slate-900">
                {f.name}
              </div>
              <div className="text-[11px] text-slate-600">{f.role}</div>
              <div className="text-[10.5px] uppercase tracking-wider text-slate-400">
                {f.dept}
              </div>
              <div className="rounded-md bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                {f.meta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionRow>
  );
}

function AlumniStories() {
  const stories = [
    {
      year: "Batch of 2018 · CSE",
      person: "Vidya N.",
      role: "Senior PM at Google · ex-Flipkart",
      blurb:
        "\"The mentorship I got from BEC alumni who'd already moved abroad shaped every career decision I made.\"",
      tag: "Active mentor",
    },
    {
      year: "Batch of 2014 · ECE",
      person: "Rohit S.",
      role: "Co-founder, Cleera (acq. by Bosch)",
      blurb:
        "\"I'm teaching the entrepreneurship ODP this semester — full circle. We have 31 students from BEC enrolled.\"",
      tag: "ODP contributor",
    },
    {
      year: "Batch of 2020 · MBA",
      person: "Anu K.",
      role: "VP Strategy · HDFC Bank",
      blurb:
        "\"Donated to set up the Analytics Lab. Saw the campaign on the alumni portal and gave through it directly.\"",
      tag: "Donor · ₹4.5 L",
    },
  ];
  return (
    <SectionRow annotation="Plan 2: Alumni stories + newsroom · feeds from the alumni portal with editor-controlled curation">
      <div className="px-6 py-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-700">
              Alumni · the BEC family
            </div>
            <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-[26px]">
              26,000+ alumni in 38 countries
            </h2>
            <p className="mt-1.5 max-w-2xl text-[13px] text-slate-600">
              Stories drawn directly from the alumni portal — opt-in mentors,
              ODP contributors, and donors who keep BEC growing.
            </p>
          </div>
          <button className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-[12px] font-semibold text-slate-700">
            Visit alumni portal <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="mt-7 grid gap-3 lg:grid-cols-3">
          {stories.map((s) => (
            <div
              key={s.person}
              className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10.5px] font-semibold uppercase tracking-wider text-slate-500">
                  {s.year}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-semibold text-orange-700">
                  <Trophy className="h-3 w-3" /> {s.tag}
                </span>
              </div>
              <div className="text-[13.5px] font-semibold leading-tight text-slate-900">
                {s.person}
              </div>
              <div className="text-[11.5px] text-slate-600">{s.role}</div>
              <p className="text-[12.5px] leading-relaxed text-slate-700">
                {s.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionRow>
  );
}

function SiteFooter() {
  const linkGroups = [
    {
      title: "Academics",
      items: ["Programs", "Curriculum", "ODP catalog", "Calendar", "Library"],
    },
    {
      title: "Admissions",
      items: ["Apply now", "Fees & scholarships", "Eligibility", "FAQs"],
    },
    {
      title: "Life @ BEC",
      items: ["Hostels", "Clubs", "Sports", "Placements", "Alumni"],
    },
    {
      title: "About",
      items: ["Leadership", "Departments", "Research centres", "Disclosures"],
    },
  ];
  return (
    <div className="border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_2fr_1fr]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-slate-900">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="text-[15px] font-semibold tracking-tight text-white">
                Bharath Engineering College
              </div>
            </div>
            <p className="text-[12px] leading-relaxed text-slate-400">
              Whitefield, Bengaluru 560066 · Karnataka, India
            </p>
            <p className="text-[12px] leading-relaxed text-slate-400">
              +91 80 4123 4567 · admissions@bharatheng.ac.in
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <FooterChip label="NAAC A+" icon={<Award className="h-3 w-3" />} />
              <FooterChip label="NBA accredited" icon={<ShieldCheck className="h-3 w-3" />} />
              <FooterChip label="UGC 12(B) & 2(f)" icon={<Briefcase className="h-3 w-3" />} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {linkGroups.map((g) => (
              <div key={g.title} className="flex flex-col gap-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  {g.title}
                </div>
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="cursor-default text-[12px] text-slate-300 hover:text-white"
                  >
                    {it}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Mandatory disclosures
            </div>
            <div className="flex flex-col gap-1.5 text-[12px] text-slate-300">
              <span>· AQAR (Annual Quality Assurance Report)</span>
              <span>· Anti-ragging committee</span>
              <span>· Internal grievance redressal</span>
              <span>· Audited financial statements</span>
              <span>· RTI · sexual harassment policy</span>
            </div>
            <div className="mt-2 flex items-center gap-2 rounded-md bg-slate-800 px-3 py-2 text-[10.5px] text-slate-300">
              <Users className="h-3 w-3" />
              <span>Powered by Xpresso · IMS</span>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-2 border-t border-slate-700 pt-6 text-[10.5px] text-slate-500">
          <span>© 2026 Bharath Engineering College. All rights reserved.</span>
          <span>Site auto-generated by Xpresso · last refreshed 6 minutes ago</span>
        </div>
      </div>
    </div>
  );
}

function FooterChip({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-slate-700 bg-slate-800/60 px-2 py-1 text-[10px] font-semibold text-slate-200">
      {icon}
      {label}
    </span>
  );
}

function SectionRow({
  children,
  annotation,
  tone = "white",
}: {
  children: React.ReactNode;
  annotation: string;
  tone?: "white" | "muted";
}) {
  const bg = tone === "muted" ? "bg-slate-50" : SECTION_TONE;
  return (
    <div className={`relative ${bg}`}>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-44 items-start justify-end px-2 pt-7 xl:flex">
        <div className="rounded-md border border-indigo-200 bg-white/80 px-2 py-1.5 text-[10px] font-semibold leading-snug text-indigo-800 shadow-sm backdrop-blur">
          <div className="mb-0.5 flex items-center gap-1 text-indigo-700">
            <Sparkles className="h-2.5 w-2.5" />
            DATA SOURCE
          </div>
          {annotation}
        </div>
      </div>
      <div className="xl:pr-44">{children}</div>
    </div>
  );
}
