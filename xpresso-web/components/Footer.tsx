import Link from "next/link";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Adaptive Learning System", href: "/product#als" },
      { label: "Education Management System", href: "/product#ems" },
      { label: "Institution Management System", href: "/product#ims" },
      { label: "On-Demand Programs", href: "/product#odp" },
      { label: "Compliance Autopilot", href: "/product#compliance" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { label: "NAAC", href: "/product#compliance" },
      { label: "NIRF", href: "/product#compliance" },
      { label: "NBA", href: "/product#compliance" },
      { label: "AISHE / UGC / AICTE", href: "/product#compliance" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-muted">
      <Container size="xl">
        <div className="grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Wordmark className="text-xl" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              The integrated higher-ed platform for India. Operations, content,
              and learning — on one real-time spine, with compliance built in.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-ink-faint">
              Hosted in AWS Mumbai · DPDP compliant
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-soft transition-colors hover:text-accent-strong"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-border py-6 text-xs text-ink-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Xpresso. Built for Indian higher education.</p>
          <p>Made in Hyderabad · Hosted in AWS Mumbai</p>
        </div>
      </Container>
    </footer>
  );
}
