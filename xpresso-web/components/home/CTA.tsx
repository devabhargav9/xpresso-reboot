import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="absolute inset-0 bg-aurora-dark opacity-60" aria-hidden />
      <div
        className="absolute -top-20 right-1/2 h-[420px] w-[420px] translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl"
        aria-hidden
      />

      <Container size="lg" className="relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
            <Sparkles className="h-3 w-3" />
            Now onboarding launch partners
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.06]">
            Ready to transform your institution?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            See Xpresso in action with your data, your courses, your students.
            30-minute call. We'll walk you through everything end-to-end and
            scope what an Xpresso deployment looks like for your institution.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" variant="secondary" size="lg" withArrow>
              Request a demo
            </Button>
            <Button
              href="/product"
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/[0.04] text-white hover:bg-white/[0.08]"
            >
              Explore the product
            </Button>
          </div>

          <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/60">
            <span>10-day onboarding</span>
            <span>·</span>
            <span>Hosted in AWS Mumbai</span>
            <span>·</span>
            <span>DPDP compliant</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
