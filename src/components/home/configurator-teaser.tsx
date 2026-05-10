"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  widthLabel: string;
  heightLabel: string;
  note: string;
};

export function ConfiguratorTeaser({ title, description, widthLabel, heightLabel, note }: Props) {
  const [width, setWidth] = useState(180);
  const [height, setHeight] = useState(220);

  const price = useMemo(() => Math.round(width * 8.5 + height * 6.2 + 920), [width, height]);

  return (
    <section className="py-20 md:py-28">
      <div className="grid gap-10 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:grid-cols-2 md:p-12">
        <div>
          <h2 className="text-3xl md:text-4xl">{title}</h2>
          <p className="mt-4 text-[var(--color-muted-foreground)]">{description}</p>

          <div className="mt-8 space-y-6">
            <label className="block">
              <span className="mb-2 block text-sm uppercase tracking-[0.14em] text-[var(--color-muted-foreground)]">{widthLabel}: {width} cm</span>
              <input type="range" min={120} max={360} value={width} onChange={(e) => setWidth(Number(e.target.value))} className="w-full" />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm uppercase tracking-[0.14em] text-[var(--color-muted-foreground)]">{heightLabel}: {height} cm</span>
              <input type="range" min={180} max={300} value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full" />
            </label>
          </div>
        </div>

        <motion.div layout className="flex flex-col justify-between rounded-sm border border-[var(--color-border)] bg-[var(--color-background)] p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted-foreground)]">Live preview</p>
            <div className="mt-6 flex h-64 items-end justify-center">
              <motion.div
                animate={{ width: `${Math.max(120, width) / 2}px`, height: `${Math.max(140, height) / 1.4}px` }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="rounded-sm border border-[var(--color-border)] bg-[linear-gradient(145deg,#c8bba9,#a89984)]"
              />
            </div>
          </div>
          <div className="mt-8 border-t border-[var(--color-border)] pt-6">
            <p className="text-sm text-[var(--color-muted-foreground)]">{note}</p>
            <p className="mt-2 text-3xl font-semibold">${price.toLocaleString()}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
