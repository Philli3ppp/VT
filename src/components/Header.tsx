"use client";

type NavItem = { label: string; href: string };

type HeaderProps = {
  langToggle?: boolean;
  navItems?: NavItem[];
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
};

const defaultNav: NavItem[] = [
  { label: "Решения", href: "/#solutions" },
  { label: "Продукты", href: "/#products" },
  { label: "Услуги", href: "/#services" },
  { label: "Безопасность", href: "/#security" },
];

export function Header({
  langToggle = true,
  navItems = defaultNav,
  ctaPrimaryText = "Request a demo",
}: HeaderProps) {
  return (
    <header className="header-blur sticky top-0 z-10">
      <div className="container flex items-center justify-between py-4 md:py-3">
        <div className="text-lg font-semibold tracking-[0.14em]">VT</div>
        <nav className="hidden items-center gap-6 text-sm text-[var(--text-muted)] md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[var(--text-strong)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {langToggle && (
            <button className="btn btn-secondary btn-contact hidden sm:inline-flex">
              RU / EN
            </button>
          )}
          <button className="btn btn-secondary btn-contact">Contact</button>
          <button className="btn btn-primary">{ctaPrimaryText}</button>
        </div>
      </div>
    </header>
  );
}
