import { ContactReveal } from "@/components/ContactReveal";
import { CtaBlock } from "@/components/CtaBlock";
import { Header } from "@/components/Header";
import { navItemsEn } from "@/content/navItemsEn";

export default function ContactsPageEn() {
  return (
    <>
      <Header navItems={navItemsEn} ctaPrimaryText="Request a demo" />
      <main className="content-wrap container space-y-12 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-b)]">
            Contacts
          </p>
          <h1 className="text-4xl font-semibold leading-tight">Get in touch</h1>
          <p className="text-[var(--text-muted)]">
            Reach us in a way that works for you. Email and phone are protected
            by click-to-reveal to avoid spam.
          </p>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card border border-[var(--border)] p-5">
            <h3 className="text-xl font-semibold">Contact form</h3>
            <form className="mt-3 space-y-3">
              <label className="block text-sm">
                <span className="text-[var(--text-muted)]">Name</span>
                <input
                  className="mt-1 w-full rounded-md border border-[var(--border)] bg-[#0f131f] px-3 py-2 text-[var(--text-strong)] outline-none focus:border-[var(--accent-b)]"
                  required
                />
              </label>
              <label className="block text-sm">
                <span className="text-[var(--text-muted)]">Email or phone</span>
                <input
                  className="mt-1 w-full rounded-md border border-[var(--border)] bg-[#0f131f] px-3 py-2 text-[var(--text-strong)] outline-none focus:border-[var(--accent-b)]"
                  required
                />
              </label>
              <label className="block text-sm">
                <span className="text-[var(--text-muted)]">Company</span>
                <input
                  className="mt-1 w-full rounded-md border border-[var(--border)] bg-[#0f131f] px-3 py-2 text-[var(--text-strong)] outline-none focus:border-[var(--accent-b)]"
                />
              </label>
              <label className="block text-sm">
                <span className="text-[var(--text-muted)]">Message</span>
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
            </p>
          </div>
          <div className="card border border-[var(--border)] p-5 space-y-3">
            <h3 className="text-xl font-semibold">Direct contacts</h3>
            <ContactReveal
              phone="+375333400000"
              email="info@veld.by"
              showLabel="Show email/phone"
              hideLabel="Hide contacts"
              hint="Click to copy or open the link. Telegram/WhatsApp available via the phone number."
            />
            <div className="text-[var(--text-muted)] space-y-2">
              <p>
                We reply within 1 business day. Share the industry, site size,
                and preferred contact method to speed things up.
              </p>
              <p>
                Office address and map are available on request without extra
                tracking. Support hours: business days.
              </p>
            </div>
            <div className="h-32 rounded-md border border-[var(--border)] bg-[#0f131f]" />
          </div>
        </section>

        <CtaBlock
          eyebrow="CTA"
          title="Start with a 30-day pilot"
          subtitle="Minimal sensors, clear notifications, secure setup."
          primaryText="Request a demo"
          secondaryText="Contact"
          primaryHref="/en/contacts"
          secondaryHref="/en/contacts"
        />
      </main>
      <div className="footer-note">Veld Tech. PE — industrial IoT</div>
    </>
  );
}
