import { COMPLIANCE_CATEGORIES } from "@/lib/compliance";
import { FRAMEWORKS } from "@/lib/types";

export function ComplianceMatrix() {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-slate-50 text-left">
            <th className="border-b border-slate-200 px-4 py-2.5 text-[12px] font-semibold uppercase tracking-wider text-slate-500">
              Category
            </th>
            {FRAMEWORKS.map((f) => (
              <th
                key={f}
                className="border-b border-slate-200 px-3 py-2.5 text-center text-[12px] font-semibold uppercase tracking-wider text-slate-500"
              >
                {f}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPLIANCE_CATEGORIES.map((cat, i) => (
            <tr key={cat.id} className={i % 2 ? "bg-white" : "bg-slate-50/30"}>
              <td className="border-b border-slate-100 px-4 py-2.5 font-medium text-slate-800">
                {cat.title}
              </td>
              {FRAMEWORKS.map((f) => {
                const covered = cat.frameworks.includes(f);
                return (
                  <td
                    key={f}
                    className="border-b border-slate-100 px-3 py-2.5 text-center"
                  >
                    {covered ? (
                      <span className="inline-block rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] font-semibold text-white">
                        covered
                      </span>
                    ) : (
                      <span className="text-slate-300">—</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
