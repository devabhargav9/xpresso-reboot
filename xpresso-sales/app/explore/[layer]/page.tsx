import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Globe } from "lucide-react";
import { Container } from "@/components/Container";
import { ModuleCard } from "@/components/ModuleCard";
import { Pill } from "@/components/Pill";
import { LAYERS, getLayer } from "@/lib/catalog";

export function generateStaticParams() {
  return LAYERS.map((l) => ({ layer: l.code.toLowerCase() }));
}

export default async function LayerPage({
  params,
}: {
  params: Promise<{ layer: string }>;
}) {
  const { layer } = await params;
  const data = getLayer(layer);
  if (!data) notFound();

  const tone =
    data.code === "ALS" ? "als" : data.code === "EMS" ? "ems" : "ims";
  const otherLayers = LAYERS.filter((l) => l.code !== data.code);
  const totalFeatures = data.modules.reduce(
    (sum, m) => sum + m.features.length,
    0
  );

  return (
    <Container>
      <div className="py-10 sm:py-14">
        <Link
          href="/explore"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-500 hover:text-slate-800"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Catalog
        </Link>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Pill tone={tone}>{data.code}</Pill>
          <span className="text-[12px] text-slate-500">
            {data.modules.length} modules · {totalFeatures} features
          </span>
        </div>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {data.name}
        </h1>
        <p className="mt-2 max-w-3xl text-[15px] text-slate-600">{data.tagline}</p>
        <p className="mt-3 max-w-3xl text-[13px] text-slate-500">
          {data.longDescription}
        </p>

        {data.code === "IMS" && (
          <Link
            href="/website-preview"
            className="mt-7 flex flex-col gap-3 rounded-xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-4 transition hover:border-indigo-300 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-indigo-200 bg-white text-indigo-700">
                <Globe className="h-4 w-4" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[14px] font-semibold text-slate-900">
                    See the auto-generated institution website
                  </span>
                  <Pill tone="indigo">live preview</Pill>
                </div>
                <p className="mt-1 text-[12.5px] leading-relaxed text-slate-600">
                  The Institution Website module ships a full public-facing site auto-populated from IMS and EMS data. Open the preview to see what your institution's website would look like.
                </p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1 self-end rounded-md bg-indigo-600 px-3 py-1.5 text-[12px] font-semibold text-white shadow-sm group-hover:bg-indigo-700 sm:self-center">
              Open preview <ArrowUpRight className="h-3 w-3" />
            </span>
          </Link>
        )}

        <div className="mt-8 flex flex-col gap-3">
          {data.modules.map((m, i) => (
            <ModuleCard key={m.id} module={m} layer={data.code} initiallyOpen={i === 0} />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
          <span className="text-[12px] font-semibold uppercase tracking-widest text-slate-500">
            Continue browsing
          </span>
          <div className="flex gap-3">
            {otherLayers.map((l) => (
              <Link
                key={l.code}
                href={`/explore/${l.code.toLowerCase()}`}
                className="text-[13px] font-semibold text-indigo-700 hover:underline"
              >
                {l.code} — {l.name} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ layer: string }>;
}) {
  const { layer } = await params;
  const data = getLayer(layer);
  if (!data) return { title: "Layer not found · Xpresso" };
  return {
    title: `${data.code} — ${data.name} · Xpresso catalog`,
    description: data.tagline,
  };
}
