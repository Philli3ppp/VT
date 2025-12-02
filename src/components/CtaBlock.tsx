type CtaBlockProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryText?: string;
  secondaryText?: string;
};

export function CtaBlock({
  eyebrow = "CTA",
  title,
  subtitle,
  primaryText = "Request a demo",
  secondaryText = "Contact",
}: CtaBlockProps) {
  return (
    <section className="cta-mask card border border-[var(--border)] bg-[var(--card)] p-6 md:flex md:items-center md:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-b)]">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 text-[var(--text-muted)]">{subtitle}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3 md:mt-0">
        <button className="btn btn-primary">{primaryText}</button>
        <button className="btn btn-secondary btn-contact">{secondaryText}</button>
      </div>
    </section>
  );
}
