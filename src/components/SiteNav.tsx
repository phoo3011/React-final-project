"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LanguageSwitch from "@/components/LanguageSwitch";
import { useI18n } from "@/components/LanguageProvider";

export default function SiteNav() {
  const pathname = usePathname();
  const { d } = useI18n();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/items", label: d.nav.items },
    { href: "/my-reports", label: d.nav.mine },
    { href: "/login", label: d.nav.login },
  ];
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-logo" src="/logo-camt.svg" alt="CAMT" />
          <span>Lost &amp; Found</span>
        </Link>
        <nav className={`nav-links${open ? " open" : ""}`}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={pathname.startsWith(link.href) ? "active" : ""} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className="primary nav-cta-mobile" href="/report" onClick={() => setOpen(false)}>{d.nav.report}</Link>
        </nav>
        <LanguageSwitch />
        <Link className="primary small nav-cta" href="/report">{d.nav.report}</Link>
        <button type="button" className="burger" aria-label={d.nav.menu} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
