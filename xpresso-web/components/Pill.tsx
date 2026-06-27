import { clsx } from "clsx";
import type { ReactNode } from "react";

type Tone =
  | "neutral"
  | "accent"
  | "indigo"
  | "violet"
  | "amber"
  | "ink";

type PillProps = {
  tone?: Tone;
  size?: "sm" | "md";
  children: ReactNode;
  className?: string;
};

const TONE_MAP: Record<Tone, string> = {
  neutral: "bg-bg-subtle text-ink-soft border-border",
  accent: "bg-accent-soft text-accent-strong border-emerald-200",
  indigo: "bg-indigo-soft text-indigo border-indigo-100",
  violet: "bg-violet-soft text-violet border-violet-100",
  amber: "bg-amber-soft text-amber border-amber-200",
  ink: "bg-ink text-white border-ink",
};

const SIZE_MAP = {
  sm: "px-2.5 py-0.5 text-[11px]",
  md: "px-3 py-1 text-xs",
};

export function Pill({ tone = "neutral", size = "md", children, className }: PillProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full border font-medium uppercase tracking-[0.08em]",
        TONE_MAP[tone],
        SIZE_MAP[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
