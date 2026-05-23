export function ContrastTable({
  leftHeader,
  rightHeader,
  rows,
}: {
  leftHeader: string;
  rightHeader: string;
  rows: [string, string][];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-slate-50 text-left">
            <th className="w-1/2 border-b border-slate-200 px-4 py-3 font-semibold text-slate-700">
              {leftHeader}
            </th>
            <th className="w-1/2 border-b border-slate-200 px-4 py-3 font-semibold text-indigo-700">
              {rightHeader}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([l, r], i) => (
            <tr key={i} className={i % 2 ? "bg-white" : "bg-slate-50/30"}>
              <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-600">
                {l}
              </td>
              <td className="border-b border-slate-100 px-4 py-3 align-top font-medium text-slate-800">
                {r}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
