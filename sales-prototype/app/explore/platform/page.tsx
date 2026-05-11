import Link from "next/link";
import { PLATFORM } from "@/lib/structure";

export default function PlatformPage() {
  return (
    <div>
      <div className="border-b border-slate-200/80 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          <h1 className="text-2xl font-bold sm:text-3xl">Core platform (cross-layer)</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
            Shared services for <strong>IMS + ALS + EMS</strong>: identity, communication,
            data, integration, infrastructure, security.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <p className="text-sm text-slate-600">
          <Link href="/explore" className="font-medium text-brand-600 hover:underline">
            ← Product map
          </Link>
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {PLATFORM.groups.map((g) => (
            <div
              key={g.name}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm"
            >
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                {g.name}
              </h2>
              <ol className="mt-3 space-y-2">
                {g.items.map((item, i) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-slate-800"
                  >
                    <span className="font-mono text-xs text-slate-400">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
