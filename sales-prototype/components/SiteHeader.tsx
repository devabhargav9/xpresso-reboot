import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Product map" },
  { href: "/explore/platform", label: "Core platform" },
  { href: "/explore/nep-alignment", label: "NEP 2020" },
  { href: "/explore/full-scope", label: "Full scope" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-slate-900"
          >
            X&apos;Presso
          </Link>
        </div>
        <nav className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
