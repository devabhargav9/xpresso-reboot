import { Container } from "@/components/Container";
import { Glossary } from "@/components/Glossary";

export default function GlossaryPage() {
  return (
    <Container>
      <div className="py-12 sm:py-16">
        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600">
            Reference
          </span>
          <h1 className="mt-1.5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Acronyms used across this prototype
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            Quick reference for anyone joining a conversation without the higher-education acronym fluency. Not part of the main pitch flow — the dean / IQAC audience already speaks this language.
          </p>
        </div>
        <div className="mt-10">
          <Glossary />
        </div>
      </div>
    </Container>
  );
}

export const metadata = {
  title: "Glossary · Xpresso",
  description: "Reference for every acronym used across the Xpresso sales prototype.",
};
