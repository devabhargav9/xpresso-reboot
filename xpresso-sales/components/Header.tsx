import Link from "next/link";
import { Wordmark } from "./Wordmark";

const NAV = [
  { label: "Demos", href: "/demo" },
  { label: "Explore", href: "/explore" },
  { label: "Compliance", href: "/compliance" },
  { label: "Differentiation", href: "/differentiation" },
  { label: "Stakeholders", href: "/stakeholders" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Wordmark />
        <nav className="flex items-center gap-1 sm:gap-2">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-md px-2.5 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
