"use client";

import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onChange(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <label className="inline-flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]">
      <Languages className="size-4" />
      <span className="sr-only">Language</span>
      <select
        value={locale}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-sm border border-[var(--color-border)] bg-transparent px-2 py-1 text-sm outline-none focus:border-[var(--color-accent)]"
      >
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
      </select>
    </label>
  );
}
