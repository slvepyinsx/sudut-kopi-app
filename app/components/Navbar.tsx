"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/sudutkopi", label: "Home" },
  { href: "/sudutkopi/menu", label: "Menu" },
  { href: "/sudutkopi/about", label: "About Us" },
  { href: "/sudutkopi/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-coffee-dark text-white px-8 py-5 flex justify-between items-center shadow-md">
      <Link href="/sudutkopi" className="font-bold text-2xl text-coffee-light flex items-center gap-2">
        <img src="/coffee-icon.svg" alt="Coffee icon" width={28} height={28} />
        SudutKopi
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex gap-8 font-medium text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative hover:text-coffee-light transition-all duration-300 ${
              pathname === link.href
                ? "text-coffee-light"
                : ""
            }`}
          >
            {link.label}
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-coffee-light transition-all duration-400 ease-out ${
                pathname === link.href ? "w-full" : "w-0"
              }`}
            />
          </Link>
        ))}
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? "\u2715" : "\u2630"}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-coffee-dark flex flex-col items-center gap-4 py-6 md:hidden shadow-lg animate-[fadeSlideDown_0.3s_ease_both]">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`font-medium text-sm hover:text-coffee-light transition-all duration-300 ${
                pathname === link.href ? "text-coffee-light" : ""
              }`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
