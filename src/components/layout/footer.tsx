import { useTranslations } from "next-intl";

import { Container } from "./container";

export function Footer() {
  const t = useTranslations("common");

  return (
    <footer className="mt-auto border-t border-[var(--color-border)] py-10">
      <Container className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <p className="max-w-lg text-sm leading-relaxed text-[var(--color-muted-foreground)]">{t("footer")}</p>
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted-foreground)]">
          © 2026 {t("brand")}. {t("rights")}
        </p>
      </Container>
    </footer>
  );
}
