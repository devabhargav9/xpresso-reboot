import Link from "next/link";
import { FULL_SCOPE_INTRO, FULL_SCOPE_SECTIONS } from "@/lib/full-product-scope";

export const metadata = {
  title: "Full product scope — X'Presso",
  description:
    "Full capability list for the institution: learning, operations, campus, and platform.",
};

export default function FullScopePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
      <p className="text-sm text-slate-500">
        <Link href="/explore" className="font-medium text-brand-600 hover:underline">
          ← Product map
        </Link>
      </p>
      <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {FULL_SCOPE_INTRO.title}
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
        {FULL_SCOPE_INTRO.description}
      </p>

      <div className="mt-8 space-y-10">
        {FULL_SCOPE_SECTIONS.map((sec) => (
          <section key={sec.id} id={sec.id} className="scroll-mt-24">
            <h2 className="text-base font-bold text-slate-900 sm:text-lg">
              {sec.title}
            </h2>
            {sec.blurb ? (
              <p className="mt-1 text-sm text-slate-500">{sec.blurb}</p>
            ) : null}
            <ul className="mt-2 space-y-1.5 border-l-2 border-slate-200 pl-4 text-sm text-slate-700">
              {sec.items.map((it) => (
                <li key={it} className="leading-snug">
                  {it}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
