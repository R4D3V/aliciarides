"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/airport-transfers", label: "✈️ Airport Transfers" },
  { href: "/upcountry-trips", label: "🛣️ Upcountry Trips" },
  { href: "/special-events", label: "💍 Special Events" },
  // { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-cream)]/90 backdrop-blur-md border-b border-[var(--color-cream-dark)] shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
            <Image
              src="/AliciaRides.png"
              alt="AliciaRides Logo"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-black gradient-text tracking-tight group-hover:opacity-80 transition-opacity hidden sm:block">
            AliciaRides
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.slice(1, -1).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-1.5 rounded-full text-sm font-semibold text-[var(--color-charcoal)] hover:bg-[var(--color-cream-dark)] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full bg-[var(--color-brand-green)] text-white text-sm font-bold hover:brightness-110 transition-all shadow-sm"
          >
            Book a Ride | Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-9 h-9 flex flex-col justify-center gap-1.5 items-center rounded-lg"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-[var(--color-charcoal)] transition-all ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-[var(--color-charcoal)] transition-all ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-[var(--color-charcoal)] transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[var(--color-cream)] border-t border-[var(--color-cream-dark)] px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-xl font-semibold hover:bg-[var(--color-cream-dark)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2.5 rounded-full bg-[var(--color-brand-green)] text-white font-bold text-center"
          >
            Book a Ride | Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
