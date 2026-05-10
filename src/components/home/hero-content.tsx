"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  body: string;
  explore: string;
  start: string;
};

export function HeroContent({ title, body, explore, start }: Props) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <p className="mb-6 text-xs uppercase tracking-[0.22em] text-[var(--color-muted-foreground)]">Twenty-eight . Furniture</p>
      <h1 className="max-w-4xl text-balance text-4xl leading-[1.05] md:text-7xl">{title}</h1>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-muted-foreground)]">{body}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button size="lg">{explore}</Button>
        <Button variant="outline" size="lg">{start}</Button>
      </div>
    </motion.div>
  );
}
