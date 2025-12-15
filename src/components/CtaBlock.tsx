type CtaBlockProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryText?: string;
  secondaryText?: string;
  primaryHref?: string;
  secondaryHref?: string;
};

export function CtaBlock({
  eyebrow = "CTA",
  title,
  subtitle,
  primaryText = "Request a demo",
  secondaryText = "Contact",
  primaryHref = "/contacts",
  secondaryHref,
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
        <a className="btn btn-primary" href={primaryHref}>
          {primaryText}
        </a>
        <a
          className="btn btn-secondary btn-contact"
          href={secondaryHref ?? primaryHref}
        >
          {secondaryText}
        </a>
      </div>
    </section>
  );
}
