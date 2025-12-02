import { Header } from "@/components/Header";
import { CtaBlock } from "@/components/CtaBlock";

export default function ContactsPage() {
  return (
    <>
      <Header
        navItems={[
          { label: "Главная", href: "/" },
          { label: "Простые решения", href: "/simple-solutions" },
          { label: "Отрасли", href: "/solutions-by-industry" },
          { label: "Продукты", href: "/products-platform" },
          { label: "Услуги", href: "/services" },
        ]}
      />
      <main className="container mt-10 space-y-12 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-b)]">
            Contacts
          </p>
          <h1 className="text-4xl font-semibold leading-tight">Контакты</h1>
          <p className="text-[var(--text-muted)]">
            Свяжитесь удобным способом. Контакты доступны по click-to-reveal для
            защиты от ботов.
          </p>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card border border-[var(--border)] p-5">
            <h3 className="text-xl font-semibold">Форма</h3>
            <form className="mt-3 space-y-3">
              <label className="block text-sm">
                <span className="text-[var(--text-muted)]">Имя</span>
                <input
                  className="mt-1 w-full rounded-md border border-[var(--border)] bg-[#0f131f] px-3 py-2 text-[var(--text-strong)] outline-none focus:border-[var(--accent-b)]"
                  required
                />
              </label>
              <label className="block text-sm">
                <span className="text-[var(--text-muted)]">Email или телефон</span>
                <input
                  className="mt-1 w-full rounded-md border border-[var(--border)] bg-[#0f131f] px-3 py-2 text-[var(--text-strong)] outline-none focus:border-[var(--accent-b)]"
                  required
                />
              </label>
              <label className="block text-sm">
                <span className="text-[var(--text-muted)]">Компания</span>
                <input
                  className="mt-1 w-full rounded-md border border-[var(--border)] bg-[#0f131f] px-3 py-2 text-[var(--text-strong)] outline-none focus:border-[var(--accent-b)]"
                />
              </label>
              <label className="block text-sm">
                <span className="text-[var(--text-muted)]">Комментарий</span>
                <textarea
                  className="mt-1 w-full rounded-md border border-[var(--border)] bg-[#0f131f] px-3 py-2 text-[var(--text-strong)] outline-none focus:border-[var(--accent-b)]"
                  rows={4}
                />
              </label>
              <div className="flex flex-wrap gap-3 pt-2">
                <button type="submit" className="btn btn-primary">
                  Request a demo
                </button>
                <button type="button" className="btn btn-secondary btn-contact">
                  Contact
                </button>
              </div>
            </form>
            <p className="mt-3 text-xs text-[var(--text-muted)]">
              Защита от спама: невидимый фильтр/капча. Соглашение на обработку
              данных — чекбокс при необходимости.
            </p>
          </div>
          <div className="card border border-[var(--border)] p-5 space-y-3">
            <h3 className="text-xl font-semibold">Контакты (click-to-reveal)</h3>
            <button className="btn btn-secondary btn-contact w-full justify-start">
              Показать email/телефон
            </button>
            <div className="text-[var(--text-muted)]">
              Адрес, мессенджеры (Telegram/WhatsApp), часы работы. Без лишнего
              трекинга, карта опционально (статичное изображение или embed).
            </div>
            <div className="h-32 rounded-md border border-[var(--border)] bg-[#0f131f]" />
          </div>
        </section>

        <CtaBlock
          eyebrow="CTA"
          title="Связаться или запросить демо"
          subtitle="Отвечаем в течение 1 рабочего дня. Контакты защищены от ботов."
          primaryText="Request a demo"
          secondaryText="Contact"
        />
      </main>
    </>
  );
}
