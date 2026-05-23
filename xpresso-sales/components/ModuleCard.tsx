"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import type { CatalogModule, LayerCode } from "@/lib/types";
import { Pill } from "./Pill";

export function ModuleCard({
  module,
  layer,
  initiallyOpen = false,
}: {
  module: CatalogModule;
  layer: LayerCode;
  initiallyOpen?: boolean;
}) {
  const [open, setOpen] = useState(initiallyOpen);
  const layerTone = layer === "ALS" ? "als" : layer === "EMS" ? "ems" : "ims";
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left transition hover:bg-slate-50"
      >
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex items-center gap-2">
            <Pill tone={layerTone}>{layer}</Pill>
            <h3 className="text-base font-semibold text-slate-900">{module.title}</h3>
            <span className="text-xs text-slate-500">
              · {module.features.length} {module.features.length === 1 ? "feature" : "features"}
            </span>
          </div>
          <p className="text-[13px] text-slate-600">{module.tagline}</p>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-slate-400 transition ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="border-t border-slate-100 bg-slate-50/40 px-4 py-3">
          <ul className="flex flex-col divide-y divide-slate-100">
            {module.features.map((f) => (
              <li key={f.name} className="py-3 first:pt-0 last:pb-0">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[14px] font-semibold text-slate-900">
                        {f.name}
                      </span>
                      {f.demoSlug && (
                        <Pill tone="indigo">interactive demo</Pill>
                      )}
                    </div>
                    <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
                      {f.what}
                    </p>
                    {f.gives && (
                      <p className="mt-1 text-[12px] leading-relaxed text-slate-500 italic">
                        {f.gives}
                      </p>
                    )}
                  </div>
                  {f.demoSlug && (
                    <Link
                      href={`/demo/${f.demoSlug}`}
                      className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] font-semibold text-indigo-700 hover:border-indigo-300"
                    >
                      Open demo <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>
                {(f.frameworks?.length || f.stakeholders?.length) && (
                  <div className="mt-2 flex flex-wrap items-center gap-1.5">
                    {f.frameworks?.map((fw) => (
                      <Pill key={fw} tone="indigo" size="xs">
                        {fw}
                      </Pill>
                    ))}
                    {f.stakeholders?.map((s) => (
                      <Pill key={s} tone="soft" size="xs">
                        {s}
                      </Pill>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
