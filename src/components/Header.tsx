"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useModal } from "./ModalContext";

const NAV_LINKS = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/concept", label: "Концепция" },
  { href: "/info", label: "Полезная информация" },
  { href: "/#contacts", label: "Контакты" },
];

export default function Header() {
  const pathname = usePathname();
  const { openModal } = useModal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`} id="header">
      <div className="container">
        <div className="header__wrapper">
          <Link href="/" className="header__logo" aria-label="Главная страница">
            <span className="header__logo-text">bezstressoff.ru</span>
          </Link>

          <nav className="header__nav" id="nav">
            <ul className="header__nav-list">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href.replace("/#contacts", "__never__"));
                return (
                  <li key={link.href}>
                    <Link href={link.href} className={`header__nav-link${isActive ? " active" : ""}`}>
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="header__contacts">
            <a
              href="https://www.instagram.com/psybreakfast"
              className="header__social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>
            <a href="tel:+79773768610" className="header__phone">+7 (977) 376-86-10</a>
            <button className="btn btn--primary" onClick={openModal}>Консультация</button>
          </div>
        </div>
      </div>
    </header>
  );
}
