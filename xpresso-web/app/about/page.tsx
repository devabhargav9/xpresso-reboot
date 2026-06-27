import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { Pill } from "@/components/Pill";
import { Button } from "@/components/Button";
import {
  Target,
  Users2,
  Compass,
  Heart,
  Sparkles,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Xpresso is a small team building one product to fix higher education in India — operations, content, learning and compliance on one real-time spine.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <WhyHigherEd />
      <Founders />
      <Values />
      <CTA />
    </>
  );
}

function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-aurora">
      <div className="absolute inset-0 bg-dotted opacity-50" aria-hidden />
      <Container size="xl" className="relative">
        <div className="py-20 sm:py-28">
          <Pill tone="accent" size="md" className="mb-6">
            About Xpresso
          </Pill>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[58px] lg:leading-[1.05]">
            One product to fix higher education in India.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            We're a small team building Xpresso for the Indian higher-education
            market — operations, content, learning, placements and compliance
            on one real-time spine. We started because we got tired of
            institutions choosing between four mediocre products that don't
            talk to each other.
          </p>
        </div>
      </Container>
    </section>
  );
}

function Mission() {
  return (
    <Section paddingY="xl">
      <Container size="xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="Mission"
            title="Make Indian higher education world-class — without consultants."
            description="Most Indian institutions are stuck on 10-year-old ERPs, paper-based exam cells, NAAC consultants who disappear after the report, and an LMS only the faculty uses. We're betting that one well-designed, deeply integrated product can replace all of that — for a fraction of the cost, with measurably better outcomes."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Target,
                title: "What we're chasing",
                body: "100 institutions running on Xpresso. Faculty saying 'I can't go back.' Students who feel the system was built for them.",
              },
              {
                icon: Compass,
                title: "What we won't compromise on",
                body: "AI that hallucinates. Compliance that's a PDF. ERP UI that looks like 2008. Lock-in. Dishonest commitments.",
              },
              {
                icon: Lightbulb,
                title: "What we believe",
                body: "An institution's data is its competitive advantage. AI grounded in your atoms beats generic chatbots every time.",
              },
              {
                icon: Heart,
                title: "Why this matters",
                body: "When 70% of Indian graduates are not job-ready, fixing the institution is the highest-leverage thing we can do.",
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-2xl border border-border bg-white p-5"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {card.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function WhyHigherEd() {
  return (
    <Section tone="muted" paddingY="xl">
      <Container size="xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Why Indian higher-ed"
              title="The biggest market nobody is solving well."
              description="There are 1,100+ universities and 50,000+ colleges in India. Combined, that's 40M+ students. Every one of them runs on stitched-together software built in another decade for another country. We're not chasing K-12, EdTech tutoring or US universities — just one job, done deeply well."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "1,100+", label: "Universities in India" },
              { number: "50,000+", label: "Colleges in India" },
              { number: "40M+", label: "Students enrolled" },
              { number: "8", label: "Role-based dashboards" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <div className="text-3xl font-semibold tracking-tight text-ink">
                  {stat.number}
                </div>
                <div className="mt-2 text-sm text-ink-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Founders() {
  const founders = [
    {
      name: "Founder 1",
      role: "CEO · Sales & GTM",
      bio: "Leads customer relationships, institutional partnerships and go-to-market. Comes from years of selling enterprise products to Indian SMBs.",
      initials: "F1",
      accent: "from-emerald-500 to-emerald-600",
    },
    {
      name: "Founder 2 (Dev Bhargav)",
      role: "CTO · Product & Engineering",
      bio: "Architecting the platform end-to-end. Built the cognitive twin, knowledge graph and AI tutor systems. Owns engineering, architecture and the AI moat.",
      initials: "F2",
      accent: "from-indigo-500 to-indigo-600",
    },
    {
      name: "Founder 3",
      role: "COO · Operations & Customer Success",
      bio: "Runs sales operations, onboarding, customer success and partnerships. Ensures every customer reaches measurable outcomes within 90 days.",
      initials: "F3",
      accent: "from-violet-500 to-violet-600",
    },
  ];

  return (
    <Section paddingY="xl">
      <Container size="xl">
        <SectionHeading
          eyebrow="The team"
          title="Three founders. Zero consultants. All-in on this for the next decade."
          description="We're founders who answer the phone, sit in on every demo, and ship the code ourselves. That's how convinced we are this is the product Indian higher-ed has been waiting for."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="rounded-3xl border border-border bg-white p-7"
            >
              <div
                className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${founder.accent} text-xl font-semibold text-white shadow-sm`}
              >
                {founder.initials}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">
                {founder.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent-strong">
                {founder.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                {founder.bio}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Values() {
  const values = [
    {
      icon: Users2,
      title: "Customer obsession, not customer servicing",
      body: "Every founder is on every customer call for the first year. No layers between us and the people using the product.",
    },
    {
      icon: Sparkles,
      title: "Build proprietary, buy commodity",
      body: "We build the knowledge graph, cognitive twin and Compliance Autopilot ourselves. We buy LLM inference, auth, payments and storage.",
    },
    {
      icon: Target,
      title: "Outcomes over outputs",
      body: "We don't ship features for feature's sake. Every release is tied to a measurable customer outcome — onboarding speed, faculty hours saved, NAAC criterion coverage.",
    },
    {
      icon: Heart,
      title: "Long-term partner, not vendor",
      body: "We optimise for 5-year customer relationships, not the next quarter. Our early customers help shape the roadmap.",
    },
  ];

  return (
    <Section tone="muted" paddingY="xl">
      <Container size="xl">
        <SectionHeading
          eyebrow="Values"
          title="How we build, sell, and support."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="flex gap-4 bg-white p-7">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {value.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

function CTA() {
  return (
    <Section paddingY="lg">
      <Container size="lg">
        <div className="rounded-3xl border border-border bg-bg-muted p-8 text-center sm:p-12">
          <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Want to back us, partner with us, or work with us?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-base text-ink-muted">
            Customers — say hello and book a demo. Investors and partners —
            reach out directly, we'll respond within a day.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Get in touch
            </Button>
            <Button href="/product" variant="outline" size="lg">
              Explore the product
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
