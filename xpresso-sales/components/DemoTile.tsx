import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Demo } from "@/lib/types";
import { Pill } from "./Pill";

export function DemoTile({ demo }: { demo: Demo }) {
  const accent =
    demo.layer === "ALS"
      ? "from-emerald-50 to-white border-emerald-200 hover:border-emerald-300"
      : "from-violet-50 to-white border-violet-200 hover:border-violet-300";

  return (
    <Link
      href={`/demo/${demo.slug}`}
      className={`group relative flex flex-col gap-3 rounded-xl border bg-gradient-to-br ${accent} p-5 transition`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Pill tone={demo.layer === "ALS" ? "als" : "ems"}>{demo.layer} · Demo {demo.num}</Pill>
        </div>
        <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-slate-700" />
      </div>
      <h3 className="text-base font-semibold leading-snug text-slate-900">{demo.title}</h3>
      <p className="text-[13px] leading-relaxed text-slate-600 italic">
        {demo.wow}
      </p>
      <div className="mt-1 flex items-center justify-between text-[11px] font-medium text-slate-500">
        <span>M{demo.milestone} · {demo.status}</span>
        <span className="font-medium text-slate-700 group-hover:text-indigo-700">
          Open demo →
        </span>
      </div>
    </Link>
  );
}
