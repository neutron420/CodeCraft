import React from "react";
import { cn } from "@/lib/utils";

export interface HighlightTextProps {
  children: React.ReactNode;
  className?: string;
  textClassName?: string;
  variant?: "lime" | "yellow" | "pink" | "cyan" | "orange";
}

const highlightVariants: Record<NonNullable<HighlightTextProps["variant"]>, string> = {
  lime: "bg-emerald-300 dark:bg-emerald-400/80",
  yellow: "bg-yellow-300 dark:bg-yellow-400/80",
  pink: "bg-pink-300 dark:bg-pink-400/80",
  cyan: "bg-cyan-300 dark:bg-cyan-400/80",
  orange: "bg-orange-300 dark:bg-orange-400/80",
};

export function HighlightText({
  children,
  className,
  textClassName,
  variant = "orange",
}: HighlightTextProps) {
  return (
    <span className="relative inline-block px-1">
      <span
        className={cn(
          "absolute inset-0 scale-x-105 scale-y-90 -skew-y-1 rounded-sm pointer-events-none",
          highlightVariants[variant],
          className
        )}
        aria-hidden="true"
      />
      <span className={cn("relative z-10 text-neutral-950 dark:text-neutral-950", textClassName)}>
        {children}
      </span>
    </span>
  );
}

export default HighlightText;
