import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span>Xpresso · Sales prototype · Not a production build.</span>
        <div className="flex items-center gap-4">
          <Link
            href="/glossary"
            className="text-slate-500 hover:text-slate-800 hover:underline"
          >
            Glossary
          </Link>
          <span className="text-slate-400">
            ALS · EMS · IMS · Compliance Autopilot
          </span>
        </div>
      </div>
    </footer>
  );
}
