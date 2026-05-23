import type { ReactNode } from "react";
import clsx from "clsx";

type Tone = "neutral" | "indigo" | "als" | "ems" | "ims" | "soft";

export function Pill({
  children,
  tone = "neutral",
  size = "sm",
}: {
  children: ReactNode;
  tone?: Tone;
  size?: "xs" | "sm";
}) {
  const sizes = {
    xs: "text-[10px] px-1.5 py-0.5",
    sm: "text-[11px] px-2 py-0.5",
  };
  const tones: Record<Tone, string> = {
    neutral: "border-slate-200 bg-white text-slate-600",
    indigo: "border-indigo-200 bg-indigo-50 text-indigo-700",
    als: "border-emerald-200 bg-emerald-50 text-emerald-700",
    ems: "border-violet-200 bg-violet-50 text-violet-700",
    ims: "border-amber-200 bg-amber-50 text-amber-700",
    soft: "border-slate-200 bg-slate-50 text-slate-600",
  };
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full border font-medium",
        sizes[size],
        tones[tone]
      )}
    >
      {children}
    </span>
  );
}
