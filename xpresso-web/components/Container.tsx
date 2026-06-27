import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg" | "xl";
};

const SIZE_MAP: Record<NonNullable<ContainerProps["size"]>, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export function Container({
  size = "lg",
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        SIZE_MAP[size],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
