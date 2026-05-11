import type { ModuleItem } from "@/lib/structure";
import { getModuleBackstage } from "@/lib/layer-backstage";

type Props = {
  layerCode: string;
  modules: ModuleItem[];
};

export function LayerFeatureBackstage({ layerCode, modules }: Props) {
  return (
    <div className="mb-10 space-y-6">
      {modules.map((mod) => {
        const backstage = getModuleBackstage(layerCode, mod.id);
        if (!backstage) return null;

        const mismatch =
          backstage.rows.length !== mod.items.length ||
          backstage.rows.some((r, i) => r.feature !== mod.items[i]);

        return (
          <article
            key={mod.id}
            className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm"
          >
            <div className="border-b border-slate-100 bg-slate-50/80 px-4 py-3 sm:px-5">
              <h4 className="text-base font-bold text-slate-900 sm:text-lg">{mod.title}</h4>
            </div>

            {mismatch ? (
              <p className="px-4 py-3 text-xs text-amber-800 sm:px-5">
                Sync <code className="rounded bg-amber-100 px-1">layer-backstage.ts</code> with{" "}
                <code className="rounded bg-amber-100 px-1">structure.ts</code>.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[min(100%,480px)] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-white">
                      <th className="px-4 py-2.5 font-semibold text-slate-800 sm:px-5 sm:py-3">
                        Capability
                      </th>
                      <th className="px-4 py-2.5 font-semibold text-slate-800 sm:px-5 sm:py-3">
                        Backstage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {backstage.rows.map((row) => (
                      <tr
                        key={row.feature}
                        className="border-b border-slate-100 last:border-b-0 odd:bg-slate-50/40"
                      >
                        <td className="align-top px-4 py-3 font-medium text-slate-900 sm:px-5 sm:py-3.5">
                          {row.feature}
                        </td>
                        <td className="align-top px-4 py-3 text-slate-700 sm:px-5 sm:py-3.5">
                          {row.backstage}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
