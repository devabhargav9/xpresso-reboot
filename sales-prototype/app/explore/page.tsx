import Link from "next/link";
import { LAYERS } from "@/lib/structure";

const ring = {
  als: "ring-emerald-500/30 hover:ring-emerald-500/50",
  ems: "ring-violet-500/30 hover:ring-violet-500/50",
  ims: "ring-amber-500/30 hover:ring-amber-500/50",
} as const;

export default function ExplorePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Product map</h1>
        <p className="mt-1 text-sm font-medium text-slate-700 sm:text-base">
          One platform vision—see how every part of the institution connects.
        </p>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          Go layer by layer, then open any area to see the full list of what the platform covers
          there.
        </p>
      </div>

      <div className="relative mt-10 space-y-0">
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-amber-400 via-emerald-400 to-violet-400 sm:left-8 sm:translate-x-0" />
        {LAYERS.map((layer, layerIndex) => (
          <section
            key={layer.code}
            className="relative pl-0 sm:pl-20"
          >
            <div
              className={
                "absolute left-0 top-6 h-3 w-3 -translate-x-[2px] rounded-full border-2 border-white sm:left-7 " +
                (layer.accent === "als"
                  ? "bg-emerald-500"
                  : layer.accent === "ems"
                    ? "bg-violet-500"
                    : "bg-amber-500")
              }
            />
            <div
              className={
                "rounded-2xl border bg-white p-5 shadow-sm transition ring-2 " +
                ring[layer.accent]
              }
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    {layer.code === "ALS" && "Learning — "}
                    {layer.code === "EMS" && "Knowledge — "}
                    {layer.code === "IMS" && "Operations — "}
                    {layer.code}
                  </p>
                  <h2 className="text-xl font-bold text-slate-900">{layer.name}</h2>
                  <p className="mt-1 max-w-2xl text-sm text-slate-600">{layer.tagline}</p>
                </div>
                <Link
                  href={`/explore/${layer.code.toLowerCase()}`}
                  className="shrink-0 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                >
                  Open {layer.code}
                </Link>
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {layer.modules.map((m) => (
                  <Link
                    key={m.id}
                    href={`/explore/${layer.code.toLowerCase()}/${m.id}`}
                    className="group rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-left transition hover:border-slate-300 hover:bg-white"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-500">
                        {m.title}
                      </span>
                      <span className="text-[11px] text-slate-400 group-hover:text-slate-500">
                        {m.items.length} {m.items.length === 1 ? "capability" : "capabilities"}
                      </span>
                    </div>
                    <p className="mt-1.5 line-clamp-2 text-sm text-slate-700">
                      {m.items[0]}
                      {m.items.length > 1 ? " …" : ""}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            {layerIndex < LAYERS.length - 1 && (
              <div className="h-8 sm:h-10" />
            )}
          </section>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/explore/platform"
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
        >
          Core platform (identity, data, security, comms, AI)
        </Link>
        <Link
          href="/explore/full-scope"
          className="inline-flex items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-100"
        >
          Full product scope
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-slate-500 hover:text-slate-800"
        >
          ← Back to overview
        </Link>
        </div>
        <p className="max-w-xl text-center text-xs text-slate-500">
          Need the full extended catalog (placement, attendance, admissions, and the rest) in
          one scroll? Open{" "}
          <Link href="/explore/full-scope" className="font-medium text-slate-700 hover:underline">
            Full product scope
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
