import Link from "next/link";
import type { ModuleGroup } from "@/lib/structure";

const layerTheme: Record<string, string> = {
  ALS: "Learning",
  EMS: "Knowledge",
  IMS: "Operations",
};

const banner = {
  als: "bg-gradient-to-r from-emerald-600 to-emerald-800",
  ems: "bg-gradient-to-r from-violet-600 to-violet-900",
  ims: "bg-gradient-to-r from-amber-600 to-amber-900",
} as const;

type Props = {
  layer: ModuleGroup;
  children: React.ReactNode;
};

export function LayerPageShell({ layer, children }: Props) {
  return (
    <div>
      <div className={`${banner[layer.accent]} text-white`}>
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          <p className="text-xs font-bold uppercase tracking-widest text-white/80">
            {layerTheme[layer.code] ?? ""} — {layer.code} ·{" "}
            {layer.simplified.map((s) => s.label).join(" · ")}
          </p>
          <h1 className="mt-2 text-2xl font-bold sm:text-3xl">{layer.name}</h1>
          <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base">
            {layer.tagline}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-sm">
          <Link
            href="/explore"
            className="font-medium text-slate-600 hover:text-slate-900"
          >
            ← All layers
          </Link>
          <Link
            href="/explore/platform"
            className="text-sm font-medium text-brand-600 hover:underline"
          >
            Core platform
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
