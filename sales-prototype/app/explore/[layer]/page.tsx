import Link from "next/link";
import { notFound } from "next/navigation";
import { LayerPageShell } from "@/components/LayerPageShell";
import { getLayerByRoute } from "@/lib/layer-route";

type Props = { params: Promise<{ layer: string }> };

export default async function LayerPage({ params }: Props) {
  const { layer: raw } = await params;
  const layer = getLayerByRoute(raw);
  if (!layer) notFound();

  return (
    <LayerPageShell layer={layer}>
      <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">
        Product areas
      </h2>
      <ol className="mt-3 space-y-3">
        {layer.modules.map((m, idx) => (
            <li key={m.id}>
              <Link
                href={`/explore/${layer.code.toLowerCase()}/${m.id}`}
                className="block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300 hover:shadow"
              >
                <p className="text-xs text-slate-500">
                  {String(idx + 1)} of {String(layer.modules.length)} in {layer.code}
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  {m.title}
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  {m.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-slate-300" aria-hidden>
                        •
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs font-semibold text-brand-600">Open details →</p>
              </Link>
            </li>
        ))}
      </ol>
    </LayerPageShell>
  );
}
