import Link from "next/link";

export function Wordmark({ size = "md" }: { size?: "sm" | "md" }) {
  const text = size === "sm" ? "text-base" : "text-lg";
  return (
    <Link href="/" className="inline-flex items-center gap-2 group">
      <span
        aria-hidden
        className="grid h-7 w-7 place-items-center rounded-md bg-indigo-600 text-white text-[13px] font-bold tracking-tight"
      >
        X
      </span>
      <span className={`${text} font-semibold tracking-tight text-slate-900`}>Xpresso</span>
      <span className="hidden sm:inline text-[11px] font-medium uppercase tracking-widest text-slate-400 ml-1">
        Sales prototype
      </span>
    </Link>
  );
}
