import { Container } from "@/components/Container";
import { ContrastTable } from "@/components/ContrastTable";

export default function DifferentiationPage() {
  return (
    <Container size="md">
      <div className="py-12 sm:py-16">
        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600">
            Different on purpose
          </span>
          <h1 className="mt-1.5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Not an LMS. Not an ERP. Not a compliance tool. All three, wired into one.
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            Three product-level contrasts. No marketing fluff — just what changes when ALS, EMS, and IMS live in one platform sharing identity, data, and an event bus.
          </p>
        </div>

        <section className="mt-10">
          <h2 className="text-base font-semibold uppercase tracking-widest text-slate-500">
            vs. a typical LMS — ALS contrast
          </h2>
          <div className="mt-3">
            <ContrastTable
              leftHeader="Typical LMS"
              rightHeader="Xpresso ALS"
              rows={[
                ["Stores courses (monoliths).", "Stores atoms (single ideas) tied to a knowledge graph."],
                ["Linear path, same for everyone.", "Per-student graph walk driven by a cognitive twin."],
                ["One PDF per topic.", "Same atom in PDF / audio / video / 3D — modality picked per student."],
                ["Mastery = % of course done.", "Mastery = outcomes verified, per concept, with confidence."],
                ["Wrong answers logged as scores.", "Wrong answers mapped to a misconception graph."],
                ["Generic chatbot.", "Tutor grounded in your curriculum + the student's twin."],
                ["No defense against AI-pasted answers.", "Effort-fair, AI-aware assessment with adaptive follow-ups."],
              ]}
            />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-base font-semibold uppercase tracking-widest text-slate-500">
            vs. a typical ERP / SIS — IMS contrast
          </h2>
          <div className="mt-3">
            <ContrastTable
              leftHeader="Typical ERP / SIS"
              rightHeader="Xpresso IMS"
              rows={[
                ["Separate modules with brittle integrations.", "One platform — shared identity, shared data, one event bus."],
                ["Compliance reports exported once a year, manually.", "Compliance is live; AQAR (Annual Quality Assurance Report) / SSR (Self-Study Report) / SAR (Self-Assessment Report) are queries."],
                ["Faculty / student / admin in siloed tools.", "One product, eight stakeholder lenses."],
                ["Static dashboards.", "Dashboards driven by real-time mastery, attendance, placement signals."],
                ["No connection to learning.", "Tightly wired to ALS + EMS — placement reads mastery, not just CGPA."],
              ]}
            />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-base font-semibold uppercase tracking-widest text-slate-500">
            vs. external short-course platforms — ODP contrast
          </h2>
          <div className="mt-3">
            <ContrastTable
              leftHeader="Coursera / edX / upGrad"
              rightHeader="Xpresso ODP"
              rows={[
                ["External content marketplace.", "Institution-owned academic infrastructure."],
                ["External certificate.", "Real institutional credit + transcript + Academic Bank of Credits."],
                ["Generic content, same for every student.", "Adaptive delivery from day one via the existing cognitive twin."],
                ["Detached from regular curriculum.", "Atoms reused across regular and ODP; one knowledge graph."],
                ["No prereq awareness across the student's history.", "AI tutor knows what the student already mastered in regular courses."],
                ["Compliance left to the student / employer.", "NEP (National Education Policy) / NSQF (National Skills Qualifications Framework) / UGC / NAAC mappings auto-generated."],
                ["Outcome = a certificate.", "Outcome = a credit that affects degree progression and placement eligibility."],
              ]}
            />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-base font-semibold uppercase tracking-widest text-slate-500">
            vs. a typical compliance / IQAC (Internal Quality Assurance Cell) tool
          </h2>
          <div className="mt-3">
            <ContrastTable
              leftHeader="Typical compliance / IQAC tool"
              rightHeader="Xpresso Compliance Autopilot"
              rows={[
                ["Form-driven; staff re-enters data they already have.", "Evidence is pulled live from IMS / EMS / ALS — no re-entry."],
                ["One framework per tool.", "Single matrix across NAAC, NIRF, AISHE, NBA, UGC, AICTE."],
                ["Coverage known only at audit time.", "Live coverage % per criterion, all year round."],
                ["DVV (Data Validation and Verification) / evidence chase is manual.", "Evidence repository auto-organized by criterion + sub-point."],
                ["Anomalies surface during inspection.", "Anomalies flagged early with one-step fix paths."],
                ["CO–PO (Course Outcomes → Program Outcomes) mapping in spreadsheets.", "CO–PO falls out of the knowledge graph automatically."],
              ]}
            />
          </div>
        </section>
      </div>
    </Container>
  );
}

export const metadata = {
  title: "Differentiation · Xpresso",
  description: "How Xpresso differs from a typical LMS, ERP, and compliance tool.",
};
