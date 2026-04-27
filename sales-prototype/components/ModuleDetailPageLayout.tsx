import Link from "next/link";

type Block = { title: string; items: readonly string[] };

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  howItFits: readonly string[];
  sections: readonly Block[];
  outro: string;
  backHref?: string;
  backLabel?: string;
};

/**
 * Reusable long-form “sales module” page (attendance, placement, etc.)
 */
export function ModuleDetailPageLayout({
  eyebrow,
  title,
  intro,
  howItFits,
  sections,
  outro,
  backHref = "/explore",
  backLabel = "← Product map",
}: Props) {
  return (
    <div>
      <div className="border-b border-slate-200/80 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-2xl font-bold sm:text-3xl">{title}</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            {intro}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
        <p className="text-sm text-slate-600">
          <Link href={backHref} className="font-medium text-brand-600 hover:underline">
            {backLabel}
          </Link>
        </p>

        <div className="mt-6 rounded-2xl border border-brand-200/80 bg-brand-50/50 p-4 sm:p-5">
          <h2 className="text-sm font-bold uppercase tracking-wide text-brand-800">
            How it fits the single platform
          </h2>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
            {howItFits.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="text-brand-500" aria-hidden>
                  →
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 space-y-8">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-base font-bold text-slate-900 sm:text-lg">{s.title}</h2>
              <ul className="mt-2 space-y-1.5 border-l-2 border-slate-200 pl-4 text-sm text-slate-700">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-10 text-sm leading-relaxed text-slate-600">{outro}</p>

        <p className="mt-6 text-sm text-slate-500">
          <Link href="/explore/full-scope" className="font-medium text-brand-600 hover:underline">
            Full product scope
          </Link>{" "}
          lists this alongside every other area.
        </p>
      </div>
    </div>
  );
}
