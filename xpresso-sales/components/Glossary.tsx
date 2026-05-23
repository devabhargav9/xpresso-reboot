type Term = { code: string; full: string; note?: string };

type Group = {
  title: string;
  terms: Term[];
};

const GROUPS: Group[] = [
  {
    title: "Xpresso product layers",
    terms: [
      { code: "ALS", full: "Adaptive Learning System" },
      { code: "EMS", full: "Education Management System" },
      { code: "IMS", full: "Institution Management System" },
      { code: "ODP", full: "On-Demand Programs" },
      { code: "LMS", full: "Learning Management System" },
    ],
  },
  {
    title: "Accreditation frameworks",
    terms: [
      { code: "NAAC", full: "National Assessment and Accreditation Council" },
      { code: "NIRF", full: "National Institutional Ranking Framework" },
      { code: "NBA", full: "National Board of Accreditation" },
      { code: "AISHE", full: "All India Survey on Higher Education" },
      { code: "UGC", full: "University Grants Commission" },
      { code: "AICTE", full: "All India Council for Technical Education" },
    ],
  },
  {
    title: "Accreditation artifacts",
    terms: [
      { code: "OBE", full: "Outcome-Based Education" },
      { code: "CO–PO", full: "Course Outcomes → Program Outcomes mapping" },
      { code: "IQAC", full: "Internal Quality Assurance Cell" },
      { code: "AQAR", full: "Annual Quality Assurance Report" },
      { code: "SSR", full: "Self-Study Report" },
      { code: "SAR", full: "Self-Assessment Report" },
      { code: "DVV", full: "Data Validation and Verification" },
      { code: "FDP", full: "Faculty Development Programme" },
    ],
  },
  {
    title: "Policy & general",
    terms: [
      { code: "NEP", full: "National Education Policy (NEP 2020)" },
      { code: "ABC", full: "Academic Bank of Credits" },
      { code: "NSQF", full: "National Skills Qualifications Framework" },
      { code: "ERP", full: "Enterprise Resource Planning" },
      { code: "CRM", full: "Customer Relationship Management" },
    ],
  },
];

export function Glossary() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-2">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600">
            Glossary
          </span>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">
            Acronyms used across this prototype
          </h3>
        </div>
        <p className="max-w-md text-[13px] text-slate-500">
          Higher-education compliance is acronym-heavy. Here is every short form used on this site, in one place.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {GROUPS.map((g) => (
          <div key={g.title} className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              {g.title}
            </div>
            <dl className="space-y-2.5">
              {g.terms.map((t) => (
                <div key={t.code} className="flex flex-col">
                  <dt className="text-[12.5px] font-semibold text-slate-900">{t.code}</dt>
                  <dd className="text-[12px] leading-snug text-slate-600">{t.full}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}
