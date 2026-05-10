import { getLocale, getTranslations } from "next-intl/server";

import { Container } from "@/components/layout/container";
import { ConfiguratorTeaser } from "@/components/home/configurator-teaser";
import { HeroContent } from "@/components/home/hero-content";
import { Card } from "@/components/ui/card";

const faqEn = [
  ["Can I configure dimensions per room?", "Yes. Every system begins with room-led dimension inputs and modular constraints."],
  ["What is the lead-time model?", "Lead time depends on module complexity, finish selection, and installation logistics."],
  ["Can systems be expanded later?", "Modules are designed for phased expansion without replacing your original foundation."]
];

const faqVi = [
  ["Tôi có thể cấu hình theo từng phòng không?", "Có. Mỗi hệ bắt đầu từ kích thước không gian và các ràng buộc mô-đun."],
  ["Thời gian triển khai được tính như thế nào?", "Phụ thuộc độ phức tạp mô-đun, lựa chọn hoàn thiện và lịch lắp đặt."],
  ["Có thể mở rộng hệ sau này không?", "Các mô-đun được thiết kế để mở rộng theo giai đoạn mà không thay nền tảng ban đầu."]
];

export default async function LocaleIndexPage() {
  const t = await getTranslations("home");
  const locale = await getLocale();
  const faq = locale === "vi" ? faqVi : faqEn;

  return (
    <>
      <section className="flex min-h-[calc(100vh-72px)] items-center border-b border-[var(--color-border)]">
        <Container className="py-16 md:py-24">
          <HeroContent title={t("heroTitle")} body={t("heroBody")} explore={t("explore")} start={t("start")} />
        </Container>
      </section>

      <Container>
        <section className="py-20 md:py-28">
          <h2 className="text-3xl md:text-5xl">{t("systemsTitle")}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {t.raw("systems").map((item: string, idx: number) => (
              <Card key={item} className="min-h-40 bg-[linear-gradient(160deg,#faf8f3,#f0eadf)]">
                <p className="text-xs tracking-[0.16em] text-[var(--color-muted-foreground)]">0{idx + 1}</p>
                <p className="mt-8 text-lg">{item}</p>
              </Card>
            ))}
          </div>
        </section>

        <ConfiguratorTeaser
          title={t("configTitle")}
          description={t("configBody")}
          widthLabel={t("width")}
          heightLabel={t("height")}
          note={t("priceNote")}
        />

        <section className="py-20 md:py-28">
          <h2 className="text-3xl md:text-5xl">{t("materialsTitle")}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {t.raw("materials").map((item: string) => (
              <div key={item} className="rounded-sm border border-[var(--color-border)] p-8">
                <p className="text-2xl">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 md:py-28">
          <h2 className="text-3xl md:text-5xl">{t("principlesTitle")}</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {t.raw("principles").map((item: string) => (
              <span key={item} className="rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm uppercase tracking-[0.12em]">{item}</span>
            ))}
          </div>
        </section>

        <section className="py-20 md:py-28">
          <h2 className="text-3xl md:text-5xl">{t("galleryTitle")}</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6].map((i) => <div key={i} className="aspect-[4/5] rounded-sm border border-[var(--color-border)] bg-[linear-gradient(145deg,#ded5c8,#c9b9a3)]" />)}
          </div>
        </section>

        <section className="py-20 md:py-28">
          <h2 className="text-3xl md:text-5xl">{t("testimonialsTitle")}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {["A disciplined system that finally matches our architecture.", "The material language feels refined and calm in daily life.", "Configuring by dimensions made every decision clearer."].map((q, i) => (
              <Card key={i}><p className="text-[var(--color-muted-foreground)]">“{q}”</p></Card>
            ))}
          </div>
        </section>

        <section className="py-20 md:py-28">
          <h2 className="text-3xl md:text-5xl">{t("faqsTitle")}</h2>
          <div className="mt-8 space-y-3">
            {faq.map(([q, a]) => (
              <details key={q} className="rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <summary className="cursor-pointer list-none text-lg">{q}</summary>
                <p className="mt-4 text-[var(--color-muted-foreground)]">{a}</p>
              </details>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
