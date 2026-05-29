import type { ReactNode } from "react";
import clsx from "clsx";

export function Container({
  children,
  className,
  size = "lg",
}: {
  children: ReactNode;
  className?: string;
  size?: "md" | "lg" | "xl";
}) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-4 sm:px-6",
        size === "xl"
          ? "max-w-[1400px]"
          : size === "lg"
          ? "max-w-7xl"
          : "max-w-5xl",
        className
      )}
    >
      {children}
    </div>
  );
}
