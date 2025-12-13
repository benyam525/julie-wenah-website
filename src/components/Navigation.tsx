"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "My Work" },
  { href: "/insights", label: "Insights" },
  { href: "/speaking", label: "Speaking" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--border)]">
      <nav className="max-w-6xl mx-auto px-6 py-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight hover:text-[var(--accent)] transition-colors"
            aria-label="Julie Wenah - Home"
          >
            Julie Wenah
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8" role="menubar">
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <Link
                  href={link.href}
                  role="menuitem"
                  className={`text-sm font-medium transition-colors hover:text-[var(--accent)] ${
                    pathname === link.href
                      ? "text-[var(--accent)]"
                      : "text-[var(--muted)]"
                  }`}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul
            id="mobile-menu"
            className="md:hidden mt-4 py-4 border-t border-[var(--border)]"
            role="menu"
          >
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <Link
                  href={link.href}
                  role="menuitem"
                  className={`block py-3 text-base font-medium transition-colors hover:text-[var(--accent)] ${
                    pathname === link.href
                      ? "text-[var(--accent)]"
                      : "text-[var(--muted)]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
