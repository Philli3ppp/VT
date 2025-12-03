"use client";

import { useState } from "react";
import { navItems as defaultNav } from "@/content/navItems";
import Image from "next/image";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-blur sticky top-0 z-10">
      <div className="container flex items-center justify-between py-3 md:py-2">
        <button
          className="flex items-center gap-3 md:pointer-events-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <Image src="/VT.png" alt="VT logo" width={32} height={32} />
          <span className="hidden md:inline text-lg font-semibold tracking-[0.14em]">
            VT — Industrial IoT
          </span>
        </button>
        <nav className="hidden items-center gap-6 text-sm text-[var(--text-muted)] md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`pb-2 whitespace-nowrap shrink-0 transition hover:text-[var(--text-strong)] ${
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
            <button className="btn btn-header hidden md:inline-flex text-xs md:text-sm">
              RU / EN
            </button>
          )}
          <button className="btn btn-header hidden md:inline-flex">
            {ctaPrimaryText}
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""} md:hidden`}>
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[var(--text-strong)]"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          {langToggle && (
            <button className="btn btn-header text-xs w-fit">RU / EN</button>
          )}
        </div>
      </div>
    </header>
  );
}
