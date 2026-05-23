import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  trailing,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  trailing?: ReactNode;
}) {
  const isCenter = align === "center";
  return (
    <div
      className={
        "flex flex-col gap-2 " +
        (isCenter ? "items-center text-center" : "items-start")
      }
    >
      <div className="flex w-full flex-wrap items-end justify-between gap-3">
        <div className="flex flex-col gap-1.5">
          {eyebrow && (
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600">
              {eyebrow}
            </span>
          )}
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-[26px]">
            {title}
          </h2>
        </div>
        {trailing && <div className="flex-shrink-0">{trailing}</div>}
      </div>
      {description && (
        <p className="max-w-3xl text-sm text-slate-600 sm:text-[15px]">{description}</p>
      )}
    </div>
  );
}
