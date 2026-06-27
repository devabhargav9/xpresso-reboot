import { clsx } from "clsx";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-strong";

const VARIANT_MAP: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:bg-ink-soft shadow-sm hover:shadow",
  secondary:
    "bg-accent text-white hover:bg-accent-strong shadow-sm hover:shadow",
  ghost:
    "text-ink hover:bg-bg-subtle",
  outline:
    "border border-border-strong bg-white text-ink hover:bg-bg-muted",
};

const SIZE_MAP: Record<Size, string> = {
  md: "h-10 px-4 text-sm rounded-lg",
  lg: "h-12 px-6 text-[15px] rounded-xl",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  children: ReactNode;
  className?: string;
};

type LinkButtonProps = CommonProps & Omit<ComponentProps<typeof Link>, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  withArrow,
  className,
  children,
  href,
  ...rest
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(BASE, VARIANT_MAP[variant], SIZE_MAP[size], className)}
      {...rest}
    >
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}
