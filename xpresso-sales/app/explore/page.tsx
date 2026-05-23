import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Pill } from "@/components/Pill";
import { LAYERS } from "@/lib/catalog";

export default function ExploreHub() {
  return (
    <Container>
      <div className="py-12 sm:py-16">
        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600">
            Catalog
          </span>
          <h1 className="mt-1.5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Every feature, listed and explained.
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            Browse by layer. Each module expands inline to show its features with compliance tags and stakeholder lens — the catalog is a discovery tool, not a wiki.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {LAYERS.map((l) => {
            const totalFeatures = l.modules.reduce(
              (sum, m) => sum + m.features.length,
              0
            );
            const tone = l.code === "ALS" ? "als" : l.code === "EMS" ? "ems" : "ims";
            return (
              <Link
                key={l.code}
                href={`/explore/${l.code.toLowerCase()}`}
                className="group flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-slate-300"
              >
                <div className="flex items-center justify-between">
                  <Pill tone={tone}>{l.code}</Pill>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {l.modules.length} modules · {totalFeatures} features
                  </span>
                </div>
                <h2 className="text-base font-semibold text-slate-900">
                  {l.name}
                </h2>
                <p className="text-[13px] leading-relaxed text-slate-600">
                  {l.tagline}
                </p>
                <p className="text-[12px] leading-relaxed text-slate-500">
                  {l.longDescription}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-[13px] font-semibold text-indigo-700 group-hover:underline">
                  Explore {l.code} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
