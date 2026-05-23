import { Container } from "@/components/Container";
import { DemoTile } from "@/components/DemoTile";
import { Pill } from "@/components/Pill";
import { alsDemos, emsDemos } from "@/lib/demos";

export default function DemosHub() {
  const als = alsDemos();
  const ems = emsDemos();
  return (
    <Container>
      <div className="py-12 sm:py-16">
        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600">
            Eight live demos
          </span>
          <h1 className="mt-1.5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Click any tile to walk a cutting-edge moment.
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            Each demo is a scripted simulation with mock data and smooth interactions. The list below shows where each demo lands in the build sequence — earlier milestones are pitchable sooner.
          </p>
        </div>

        <section className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <Pill tone="als">ALS · How a student learns</Pill>
            <span className="text-[13px] text-slate-500">
              Profile the learner → personalize the path → teach with a real tutor → assess fairly.
            </span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {als.map((d) => (
              <DemoTile key={d.slug} demo={d} />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="flex flex-wrap items-center gap-3">
            <Pill tone="ems">EMS · How knowledge is created</Pill>
            <span className="text-[13px] text-slate-500">
              Author once → see the whole institution's knowledge → let AI multiply faculty output → close the loop from ALS signals.
            </span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ems.map((d) => (
              <DemoTile key={d.slug} demo={d} />
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
