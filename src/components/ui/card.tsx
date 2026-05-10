import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

export function Card({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <article
      className={cn(
        "rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]",
        className,
      )}
    >
      {children}
    </article>
  );
}
