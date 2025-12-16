import { ContactReveal } from "@/components/ContactReveal";
import { Header } from "@/components/Header";
import { CtaBlock } from "@/components/CtaBlock";

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main className="content-wrap container space-y-12 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-b)]">
            Контакты
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
                  Запросить демо
                </button>
                <button type="button" className="btn btn-secondary btn-contact">
                  Связаться
                </button>
              </div>
            </form>
            <p className="mt-3 text-xs text-[var(--text-muted)]">
            </p>
          </div>
          <div className="card border border-[var(--border)] p-5 space-y-3">
            <h3 className="text-xl font-semibold">Контакты (click-to-reveal)</h3>
            <ContactReveal
              phone="+375333400000"
              email="info@veld.by"
              showLabel="Показать email/телефон"
              hideLabel="Скрыть контакты"
              hint="Нажмите, чтобы скопировать или перейти: телефоны и почта защищены от ботов."
            />
            <div className="text-[var(--text-muted)] space-y-2">
              <p>
                Пишите или звоните удобным способом. Telegram/WhatsApp доступен
                по номеру телефона.
              </p>
              <p>
                Адрес и карта — по запросу, без лишнего трекинга. Работаем
                будние дни, отвечаем в течение 1 рабочего дня.
              </p>
            </div>
            <div className="h-32 rounded-md border border-[var(--border)] bg-[#0f131f]" />
          </div>
        </section>

        <CtaBlock
          eyebrow="CTA"
          title="Связаться или запросить демо"
          subtitle="Отвечаем в течение 1 рабочего дня. Контакты защищены от ботов."
          primaryText="Запросить демо"
          secondaryText="Связаться"
        />
      </main>
      <div className="footer-note">
        ЧП «Вельд Техно» — промышленный IoT
      </div>
    </>
  );
}
