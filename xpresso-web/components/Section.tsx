import { clsx } from "clsx";
import type { HTMLAttributes, ReactNode } from "react";

type Tone = "default" | "muted" | "ink" | "aurora";

type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: Tone;
  paddingY?: "md" | "lg" | "xl";
  children: ReactNode;
};

const TONE_MAP: Record<Tone, string> = {
  default: "bg-bg",
  muted: "bg-bg-muted",
  ink: "bg-ink text-white",
  aurora: "bg-aurora",
};

const PAD_MAP = {
  md: "py-14 sm:py-16",
  lg: "py-16 sm:py-24",
  xl: "py-20 sm:py-32",
};

export function Section({
  tone = "default",
  paddingY = "lg",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={clsx(TONE_MAP[tone], PAD_MAP[paddingY], className)}
      {...rest}
    >
      {children}
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  inverted?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverted,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <div
          className={clsx(
            "mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]",
            inverted ? "text-accent" : "text-accent-strong",
          )}
        >
          <span
            className={clsx(
              "h-1.5 w-1.5 rounded-full",
              inverted ? "bg-accent" : "bg-accent-strong",
            )}
          />
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={clsx(
          "text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.08]",
          inverted ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={clsx(
            "mt-5 text-base leading-relaxed sm:text-lg",
            inverted ? "text-white/70" : "text-ink-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
