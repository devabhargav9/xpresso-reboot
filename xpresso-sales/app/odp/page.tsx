import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { ContrastTable } from "@/components/ContrastTable";
import { DemoTile } from "@/components/DemoTile";
import { Pill } from "@/components/Pill";
import { odpDemos } from "@/lib/demos";

export default function OdpPage() {
  const demos = odpDemos();
  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-indigo-50/40 to-white">
        <Container>
          <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-[12px] font-semibold text-indigo-700">
                <Sparkles className="h-3.5 w-3.5" /> ODP · Curriculum-agility capability
              </span>
              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
                Ship a new credit-linked program in weeks — not three years.
              </h1>
              <p className="max-w-2xl text-[16px] leading-relaxed text-slate-600 sm:text-[17px]">
                ODP (On-demand Programs) is a modular academic layer that plugs into the university. Students enroll in short-duration, credit-linked programs in emerging fields — without the institution creating new departments or hiring faculty.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/demo/odp/career-recommender"
                  className="inline-flex items-center gap-1.5 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
                >
                  See the ODP demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/explore/als#on-demand-programs"
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Browse ODP features
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h2 className="text-[12px] font-semibold uppercase tracking-widest text-slate-500">
                The problem ODP solves
              </h2>
              <ul className="mt-3 flex flex-col gap-3 text-[13.5px] leading-relaxed text-slate-700">
                <li className="flex gap-2">
                  <span className="text-indigo-500">·</span>
                  <span>Curriculum update cycles take 3–5 years and require faculty hiring + department changes — slow and expensive.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-500">·</span>
                  <span>Students increasingly learn outside the university — bootcamps, cohort courses, creator-led programs — creating a parallel credential system.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-500">·</span>
                  <span>Microlearning and skill-based learning are growing ~15–30% YoY globally. Universities risk losing relevance in job-readiness.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-500">·</span>
                  <span>ODP keeps the agility inside the institution — same faculty, same atoms, real institutional credit.</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600">
            How ODP couples with the platform
          </span>
          <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-[26px]">
            Not a new product — a new shape composed from what we already build.
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-600 sm:text-[15px]">
            Every key system component ODP needs already exists in ALS / EMS / IMS. ODP doesn't introduce a parallel content silo — it composes the existing primitives.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <CouplingCard
              tone="ems"
              layer="EMS"
              title="Atoms = the unit of ODP authoring"
              body="ODP modules are sequences of knowledge atoms. The same atom that powers a regular course can be sequenced into an ODP — no parallel authoring."
              wins={[
                "Multi-modal generation factory produces PDF/audio/video/3D for every ODP atom.",
                "Faculty co-pilot drafts ODP rubrics, projects, quiz banks.",
                "Knowledge graph holds ODP programs as subgraphs with NEP (National Education Policy) / NSQF (National Skills Qualifications Framework) tags.",
              ]}
            />
            <CouplingCard
              tone="als"
              layer="ALS"
              title="Day-one personalization from the existing twin"
              body="A student enrolling in an ODP already has a cognitive twin from regular courses. No cold start — personalization works from minute one."
              wins={[
                "Adaptive path walks ODP atoms in the student's preferred modality.",
                "AI tutor is grounded in ODP curriculum + prereq mastery.",
                "Effort-fair, AI-aware assessment applies unchanged.",
                "Forgetting-curve scheduler keeps ODP material alive across the semester.",
              ]}
            />
            <CouplingCard
              tone="ims"
              layer="IMS"
              title="Real institutional credit, transcript-grade"
              body="Student lifecycle, registration, transcripts, fees, and academic records already exist. ODP plugs in — completion becomes credit, credit hits the transcript."
              wins={[
                "Semester-aware enrollment with clash detection and credit caps.",
                "Credit value + completion flow to academic records.",
                "Fees, scholarships, dues handled by the same finance module.",
                "Placement portal uses ODP completions in eligibility filters.",
              ]}
            />
            <CouplingCard
              tone="indigo"
              layer="Compliance"
              title="NEP / NSQF / UGC compliance for free"
              body="ODP credit mapping is exactly what NEP 2020's multidisciplinary + ABC (Academic Bank of Credits) framework asks for. We already map atoms to NEP / NSQF in the knowledge graph."
              wins={[
                "NEP multidisciplinary credit reporting auto-generated.",
                "Academic Bank of Credits (ABC) record export ready out of the box.",
                "NAAC / NIRF outcomes pulled from the same atoms.",
                "AICTE short-program approvals supported via program metadata.",
              ]}
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/40 py-14 sm:py-16">
        <Container>
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600">
            Killer features only possible because of the coupling
          </span>
          <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-[26px]">
            Five features no standalone short-course platform can ship.
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">
            Each of these requires ALS, EMS, IMS, and the knowledge graph to live in the same product. External platforms can't replicate them.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {KILLERS.map((k) => (
              <div
                key={k.name}
                className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-4"
              >
                <h3 className="text-[14px] font-semibold text-slate-900">{k.name}</h3>
                <p className="text-[13px] leading-relaxed text-slate-600">{k.what}</p>
                <p className="text-[12px] leading-relaxed text-indigo-700/90 italic">
                  Why no one else can ship this: {k.why}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600">
            ODP demo
          </span>
          <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-[26px]">
            The flagship cross-cutting moment.
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">
            One scripted simulation that visibly uses ALS (cognitive twin) + EMS (knowledge graph) + IMS (placement, credit) + Compliance (NEP, ABC) in a single flow.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {demos.map((d) => (
              <DemoTile key={d.slug} demo={d} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/40 py-14 sm:py-16">
        <Container size="md">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600">
            Differentiation
          </span>
          <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-[26px]">
            ODP vs Coursera / edX / upGrad
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">
            External platforms sell content and certificates. ODP is academic infrastructure inside the institution — and that distinction shows up in every row below.
          </p>
          <div className="mt-6">
            <ContrastTable
              leftHeader="Coursera / edX / upGrad"
              rightHeader="Xpresso ODP"
              rows={[
                ["External content marketplace.", "Institution-owned academic infrastructure."],
                ["External certificate.", "Real institutional credit + transcript + Academic Bank of Credits."],
                ["Generic content, same for every student.", "Adaptive delivery from day one via the existing cognitive twin."],
                ["Detached from regular curriculum.", "Atoms reused across regular and ODP; one knowledge graph."],
                ["No prereq awareness across the student's history.", "AI tutor knows what the student already mastered in regular courses."],
                ["Compliance left to the student / employer.", "NEP / NSQF / UGC / NAAC mappings auto-generated."],
                ["Generic chatbot.", "Tutor grounded in the institution's own atoms + this student's twin."],
                ["Outcome = a certificate.", "Outcome = a credit that affects degree progression and placement eligibility."],
              ]}
            />
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Pill tone="indigo">NEP 2020</Pill>
            <Pill tone="indigo">Academic Bank of Credits</Pill>
            <Pill tone="indigo">NSQF</Pill>
            <Pill tone="indigo">UGC</Pill>
            <Pill tone="indigo">NAAC</Pill>
            <Pill tone="indigo">AICTE</Pill>
            <span className="text-[12px] text-slate-500">
              The compliance frameworks ODP completions automatically feed.
            </span>
          </div>
        </Container>
      </section>
    </>
  );
}

function CouplingCard({
  tone,
  layer,
  title,
  body,
  wins,
}: {
  tone: "als" | "ems" | "ims" | "indigo";
  layer: string;
  title: string;
  body: string;
  wins: string[];
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <Pill tone={tone}>{layer}</Pill>
      </div>
      <h3 className="text-[15px] font-semibold text-slate-900">{title}</h3>
      <p className="text-[13px] leading-relaxed text-slate-600">{body}</p>
      <ul className="flex flex-col gap-1.5 border-t border-slate-100 pt-3 text-[12.5px] text-slate-600">
        {wins.map((w) => (
          <li key={w} className="flex gap-2">
            <span className="text-slate-300">·</span>
            <span>{w}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const KILLERS = [
  {
    name: "Career-driven ODP recommender",
    what: "Career simulator reads IMS placement data + cognitive twin + curriculum gaps → suggests the 2–4 ODPs that close the biggest skill gaps for the student's target role.",
    why: "Needs IMS placement, ALS mastery, EMS curriculum all wired live in one product.",
  },
  {
    name: "Predicted ODP completion likelihood",
    what: "Before enrollment, the twin predicts likelihood of completion and projected mastery — so students don't over-commit and faculty see who is at risk.",
    why: "Requires the persistent cognitive twin and historical mastery data from the same product.",
  },
  {
    name: "Atom reuse across regular + ODP",
    what: "One atom powers a Calculus I lesson and an 'AI for Finance' ODP. Author once, deliver everywhere; v2 of any atom benefits both surfaces.",
    why: "Only possible if regular curriculum and short programs share one atom registry.",
  },
  {
    name: "Live institution-issued credit, not a certificate",
    what: "Completion writes to the student's transcript and Academic Bank of Credits — not a PDF certificate. A hard credential, recognised by employers.",
    why: "Needs IMS to own academic records. External platforms can't issue real degrees.",
  },
  {
    name: "ODP-aware AI tutor",
    what: "Tutor knows the student's regular-course twin AND the ODP outcomes. It can say 'your weakness in Linear Algebra is blocking this ODP — patch that first.'",
    why: "Cross-program prereq awareness needs one knowledge graph across regular + short programs.",
  },
  {
    name: "Faculty load stays flat",
    what: "Most ODPs are sequenced from existing atoms with co-pilot help. Authoring overhead is minimal — no new faculty hires.",
    why: "Only possible because EMS already authors at atom granularity with AI co-pilot.",
  },
];

export const metadata = {
  title: "ODP — On-demand Programs · Xpresso",
  description:
    "Curriculum-agility capability that lets universities ship credit-linked short programs in weeks, with real institutional credit and NEP / ABC compliance.",
};
