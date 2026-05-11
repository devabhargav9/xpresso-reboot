import Link from "next/link";
import { notFound } from "next/navigation";
import { LayerFeatureBackstage } from "@/components/LayerFeatureBackstage";
import { LayerPageShell } from "@/components/LayerPageShell";
import { getLayerByRoute } from "@/lib/layer-route";

type Props = { params: Promise<{ layer: string }> };

export default async function LayerPage({ params }: Props) {
  const { layer: raw } = await params;
  const layer = getLayerByRoute(raw);
  if (!layer) notFound();

  const showBackstage = layer.code === "ALS" || layer.code === "EMS";

  return (
    <LayerPageShell layer={layer}>
      {showBackstage ? (
        <LayerFeatureBackstage layerCode={layer.code} modules={layer.modules} />
      ) : null}

      <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">
        Product areas
      </h2>
      <ol className="mt-3 space-y-3">
        {layer.modules.map((m) => (
          <li key={m.id}>
            <Link
              href={`/explore/${layer.code.toLowerCase()}/${m.id}`}
              className="block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300 hover:shadow"
            >
              <h3 className="text-lg font-bold text-slate-900">{m.title}</h3>
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
            </Link>
          </li>
        ))}
      </ol>
    </LayerPageShell>
  );
}
