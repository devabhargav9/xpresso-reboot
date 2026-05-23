import Link from "next/link";
import { ArrowLeft, CircleDashed } from "lucide-react";
import type { Demo } from "@/lib/types";
import { Pill } from "./Pill";
import { Container } from "./Container";

export function DemoStub({ demo }: { demo: Demo }) {
  return (
    <Container size="md">
      <div className="py-10 sm:py-14">
        <Link
          href="/demo"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-500 hover:text-slate-800"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All demos
        </Link>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Pill tone={demo.layer === "ALS" ? "als" : demo.layer === "EMS" ? "ems" : "indigo"}>
            {demo.layer} · Demo {demo.num}
          </Pill>
          <Pill tone="soft">Milestone M{demo.milestone}</Pill>
          <Pill tone="indigo">
            <CircleDashed className="h-3 w-3" />
            <span>{demo.status}</span>
          </Pill>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {demo.title}
        </h1>
        <p className="mt-3 max-w-3xl text-base italic text-slate-600">
          Moment of magic: {demo.wow}
        </p>

        <section className="mt-10">
          <h2 className="text-base font-semibold text-slate-900">
            Planned interaction script
          </h2>
          <p className="mt-1 text-[13px] text-slate-600">
            This page becomes a live, clickable simulation when M{demo.milestone} ships. Until then, this is the script that will be implemented.
          </p>
          <ol className="mt-5 flex flex-col gap-3">
            {demo.steps.map((s, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-lg border border-slate-200 bg-white p-3.5"
              >
                <span className="num grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-indigo-600 text-[11px] font-semibold text-white">
                  {i + 1}
                </span>
                <p className="pt-0.5 text-[14px] leading-relaxed text-slate-700">
                  {s}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-10 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 p-4 text-[13px] text-slate-600">
          <span className="font-semibold text-slate-700">Status:</span>{" "}
          Static stub. The interactive simulation lands in milestone M{demo.milestone} — see <Link href="/" className="font-semibold text-indigo-700">milestone plan</Link> on the landing page.
        </div>
      </div>
    </Container>
  );
}
