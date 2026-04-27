import Link from "next/link";
import { LAYERS, PLATFORM } from "@/lib/structure";

const layerStyles = {
  als: "from-emerald-500/20 to-emerald-600/5 border-emerald-200/80",
  ems: "from-violet-500/20 to-violet-600/5 border-violet-200/80",
  ims: "from-amber-500/20 to-amber-600/5 border-amber-200/80",
} as const;

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-4 pb-8 pt-12 sm:px-6 sm:pt-16 sm:pb-12">
        <p className="text-center text-sm font-medium text-brand-600">
          One platform for the whole institution
        </p>
        <h1 className="mt-3 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          All educational and institutional needs,{" "}
          <span className="bg-gradient-to-r from-brand-600 to-slate-800 bg-clip-text text-transparent">
            in one product map
          </span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base font-medium text-slate-800 sm:text-lg">
          A single, connected platform—not a patchwork of siloed tools. Teaching, research,
          student lifecycle, finance, people, and campus, unified under one identity and one
          data backbone.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600 sm:text-base">
          <strong>IMS</strong> is how the organization runs; <strong>ALS</strong> is individual
          learning; <strong>EMS</strong> is institutional knowledge. Together with the
          <strong> core platform</strong> (identity, integration, data, security), you see
          the full story in one place.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/explore"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 sm:w-auto"
          >
            Open interactive product map
          </Link>
          <Link
            href="/explore/platform"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 sm:w-auto"
          >
            View core platform
          </Link>
          <Link
            href="/explore/full-scope"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50/80 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 sm:w-auto"
          >
            Full product scope
          </Link>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white/50 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
            Three layers
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {LAYERS.map((layer) => (
              <Link
                key={layer.code}
                href={`/explore/${layer.code.toLowerCase()}`}
                className={`group rounded-2xl border bg-gradient-to-br p-5 shadow-sm transition hover:shadow-md ${layerStyles[layer.accent]}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={
                      layer.accent === "als"
                        ? "text-xs font-bold uppercase text-emerald-800"
                        : layer.accent === "ems"
                          ? "text-xs font-bold uppercase text-violet-800"
                          : "text-xs font-bold uppercase text-amber-900"
                    }
                  >
                    {layer.code}
                  </span>
                  <span
                    className="text-slate-400 transition group-hover:text-slate-600"
                    aria-hidden
                  >
                    →
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  {layer.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
                  {layer.tagline}
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {layer.simplified.map((s) => (
                    <li
                      key={s.slug}
                      className="rounded-md bg-white/60 px-2 py-0.5 text-xs font-medium text-slate-700"
                    >
                      {s.label}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
          {PLATFORM.title}
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600">
          {PLATFORM.subtitle}
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PLATFORM.groups.map((g) => (
            <div
              key={g.name}
              className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm"
            >
              <h3 className="text-xs font-bold uppercase tracking-wide text-slate-500">
                {g.name}
              </h3>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                {g.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand-500" aria-hidden>
                      ▸
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">
          One platform, shown as operations, learning, and knowledge—plus a shared core for
          identity, data, and security.
        </p>
      </section>
      <section className="border-t border-slate-200/80 bg-slate-50/80 py-8 text-center text-sm text-slate-600">
        <p className="mx-auto max-w-2xl px-4">
          <strong>Why one platform:</strong> students, faculty, and staff don’t juggle
          a dozen logins. Data flows to analytics, compliance, and placement in one
          system-of-record view—siloed &ldquo;best-of-breed&rdquo; stacks can&apos;t
          offer that without heavy integration.
        </p>
      </section>
    </div>
  );
}
