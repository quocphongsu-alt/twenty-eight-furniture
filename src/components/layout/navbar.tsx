"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";

export function Navbar() {
  const t = useTranslations("common");

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[color:var(--color-surface)/0.9] backdrop-blur"
    >
      <div className="mx-auto flex h-18 w-full max-w-[1240px] items-center justify-between px-6 md:px-10">
        <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-muted-foreground)]">{t("brand")}</p>
        <nav className="hidden items-center gap-8 md:flex">
          <a className="text-sm text-[var(--color-foreground)]">{t("nav.system")}</a>
          <a className="text-sm text-[var(--color-foreground)]">{t("nav.craft")}</a>
          <a className="text-sm text-[var(--color-foreground)]">{t("nav.materials")}</a>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button size="sm">{t("cta")}</Button>
        </div>
      </div>
    </motion.header>
  );
}
