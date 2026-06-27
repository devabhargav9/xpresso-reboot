import { clsx } from "clsx";

type WordmarkProps = {
  className?: string;
  variant?: "dark" | "light";
};

export function Wordmark({ className, variant = "dark" }: WordmarkProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-baseline gap-0.5 font-semibold tracking-tight",
        variant === "dark" ? "text-ink" : "text-white",
        className,
      )}
    >
      <span>x</span>
      <span className="text-accent-strong">'</span>
      <span>presso</span>
    </span>
  );
}
