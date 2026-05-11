import Link from "next/link";
import { NEP_ALIGNMENT_BLOCKS, NEP_ALIGNMENT_INTRO } from "@/lib/nep-alignment";

export const metadata = {
  title: "NEP 2020 alignment — X'Presso",
  description:
    "How X'Presso maps to National Education Policy 2020 themes for higher education institutions.",
};

export default function NepAlignmentPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
      <p className="text-sm text-slate-500">
        <Link href="/explore" className="font-medium text-brand-600 hover:underline">
          ← Product map
        </Link>
      </p>
      <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {NEP_ALIGNMENT_INTRO.title}
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
        {NEP_ALIGNMENT_INTRO.subtitle}
      </p>

      <ol className="mt-8 space-y-6">
        {NEP_ALIGNMENT_BLOCKS.map((b, i) => (
          <li
            key={b.id}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {i + 1}. {b.nepRef}
            </p>
            <h2 className="mt-2 text-base font-bold text-slate-900">Pressure / policy direction</h2>
            <p className="mt-1 text-sm text-slate-700">{b.problem}</p>
            <h3 className="mt-3 text-sm font-bold text-slate-800">X&apos;Presso</h3>
            <p className="mt-1 text-sm text-slate-700">{b.productHook}</p>
          </li>
        ))}
      </ol>

      <p className="mt-8 text-xs text-slate-500">
        Not legal or regulatory advice; institutional compliance stays with the HEI and its counsel.
      </p>
    </div>
  );
}
