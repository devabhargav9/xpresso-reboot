import Link from "next/link";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";
import { Button } from "./Button";

const NAV = [
  { label: "Product", href: "/product" },
  { label: "About", href: "/about" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-white/80 backdrop-blur-md">
      <Container size="xl">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-lg"
          >
            <Wordmark />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-bg-subtle hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href="/contact" variant="primary" size="md" withArrow>
              Request demo
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
