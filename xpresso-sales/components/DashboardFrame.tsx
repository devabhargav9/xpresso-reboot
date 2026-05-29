import { ReactNode } from "react";

export function DashboardFrame({
  url,
  children,
}: {
  url: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-xl shadow-slate-200/60">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <div className="ml-2 flex flex-1 items-center justify-center">
          <div className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-500">
            <svg className="h-3 w-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="truncate">{url}</span>
          </div>
        </div>
        <span className="hidden text-[10px] uppercase tracking-widest text-slate-400 sm:inline">
          Mock preview
        </span>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}
