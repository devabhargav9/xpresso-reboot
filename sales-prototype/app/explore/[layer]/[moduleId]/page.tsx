import Link from "next/link";
import { notFound } from "next/navigation";
import { findModule } from "@/lib/structure";
import { LayerPageShell } from "@/components/LayerPageShell";
import { ModuleDetailPageLayout } from "@/components/ModuleDetailPageLayout";
import { ATTENDANCE_PAGE, PLACEMENT_PAGE } from "@/lib/attendance-placement-content";
import { ODP_PAGE } from "@/lib/odp-content";

type Props = { params: Promise<{ layer: string; moduleId: string }> };

export default async function ModuleDetailPage({ params }: Props) {
  const { layer: l, moduleId } = await params;
  const layerKey = l.toLowerCase();

  if (layerKey === "ims" && moduleId === "attendance") {
    const a = ATTENDANCE_PAGE;
    return (
      <ModuleDetailPageLayout
        eyebrow={a.eyebrow}
        title={a.title}
        intro={a.intro}
        howItFits={a.howItFits}
        sections={a.sections}
        outro={a.outro}
        backHref="/explore/ims"
        backLabel="← Operations (IMS) layer"
      />
    );
  }
  if (layerKey === "als" && moduleId === "odp") {
    const o = ODP_PAGE;
    return (
      <ModuleDetailPageLayout
        eyebrow={o.eyebrow}
        title={o.title}
        intro={o.intro}
        howItFits={o.howItFits}
        sections={o.sections}
        outro={o.outro}
        backHref="/explore/als"
        backLabel="← Learning (ALS) layer"
      />
    );
  }

  if (layerKey === "ims" && moduleId === "placement") {
    const p = PLACEMENT_PAGE;
    return (
      <ModuleDetailPageLayout
        eyebrow={p.eyebrow}
        title={p.title}
        intro={p.intro}
        howItFits={p.howItFits}
        sections={p.sections}
        outro={p.outro}
        backHref="/explore/ims"
        backLabel="← Operations (IMS) layer"
      />
    );
  }

  const result = findModule(l.toUpperCase(), moduleId);
  if (!result) notFound();
  const { layer, mod } = result;
  const itemsList: { n: number; text: string }[] = mod.items.map((text, i) => ({
    n: i + 1,
    text,
  }));

  return (
    <LayerPageShell layer={layer}>
      <div className="max-w-3xl">
        <p className="text-sm text-slate-500">{layer.name}</p>
        <h2 className="mt-1 text-2xl font-bold text-slate-900">{mod.title}</h2>
        <ol className="mt-6 space-y-2 border-t border-slate-200 pt-4">
          {itemsList.map((row) => (
            <li
              key={row.n}
              className="flex gap-3 rounded-lg bg-slate-50/80 px-3 py-2 text-sm text-slate-800"
            >
              <span className="w-7 shrink-0 font-mono text-xs font-bold text-slate-400">
                {row.n}.
              </span>
              <span>{row.text}</span>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/explore/${layer.code.toLowerCase()}`}
            className="text-sm font-semibold text-brand-600 hover:underline"
          >
            ← All areas in {layer.code}
          </Link>
        </div>
      </div>
    </LayerPageShell>
  );
}
