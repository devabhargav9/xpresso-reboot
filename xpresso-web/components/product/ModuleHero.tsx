import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Pill } from "@/components/Pill";

export function ProductHero() {
  return (
    <section className="relative overflow-hidden bg-aurora">
      <div className="absolute inset-0 bg-dotted opacity-50" aria-hidden />

      <Container size="xl" className="relative">
        <div className="py-20 sm:py-28">
          <Pill tone="accent" size="md" className="mb-6">
            The product
          </Pill>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[58px] lg:leading-[1.05]">
            Operations, content, and learning — on one real-time spine.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Three deeply integrated modules with cross-cutting Compliance
            Autopilot and On-Demand Programs. Each module is best-in-class
            standalone; together, they're a different category.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Request a demo
            </Button>
            <Button href="#stack" variant="outline" size="lg">
              See the stack
            </Button>
          </div>

          {/* Anchor strip */}
          <nav id="stack" aria-label="Product sections" className="mt-14">
            <ul className="flex flex-wrap gap-2 text-sm">
              {[
                { label: "ALS — Adaptive Learning", href: "#als" },
                { label: "EMS — Education Mgmt", href: "#ems" },
                { label: "IMS — Institution Mgmt", href: "#ims" },
                { label: "ODP — On-Demand Programs", href: "#odp" },
                { label: "Compliance Autopilot", href: "#compliance" },
                { label: "Real-time data flow", href: "#dataflow" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/80 px-3 py-1.5 font-medium text-ink-soft transition-colors hover:border-accent hover:text-accent-strong"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent-strong" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
}
