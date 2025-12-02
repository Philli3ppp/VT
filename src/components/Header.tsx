"use client";

import { navItems as defaultNav } from "@/content/navItems";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string };

type HeaderProps = {
  langToggle?: boolean;
  navItems?: NavItem[];
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
};

export function Header({
  langToggle = true,
  navItems = defaultNav,
  ctaPrimaryText = "Request a demo",
}: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="header-blur sticky top-0 z-10">
      <div className="container flex items-center justify-between py-3 md:py-2">
        <div className="text-lg font-semibold tracking-[0.14em]">VT</div>
        <nav className="hidden items-center gap-6 text-sm text-[var(--text-muted)] md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`pb-2 transition hover:text-[var(--text-strong)] ${
                  isActive
                    ? "border-b-2 border-[var(--accent-b)] text-[var(--text-strong)]"
                    : "border-b-2 border-transparent"
                }`}
              >
                {item.label}
              </a>
            );
          })}
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
