"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Heart, Menu, X } from "lucide-react";

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/services", label: t("services") },
    { href: "/doctors", label: t("doctors") },
    { href: "/about", label: t("about") },
    { href: "/gallery", label: t("gallery") },
    { href: "/blog", label: t("blog") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-pink-100 p-2 rounded-full">
              <Heart className="h-8 w-8 text-pink-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Anketse Berhan
              </h1>
              <p className="text-xs text-gray-600 hidden md:block">
                Maternal & Child Medical Center
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "text-pink-600 border-b-2 border-pink-600"
                    : "text-gray-700 hover:text-pink-600"
                } font-medium transition-colors text-sm`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Link
              href="/appointments"
              className="hidden md:block bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition text-sm"
            >
              {t("appointments")}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${
                    pathname === item.href
                      ? "text-pink-600 bg-pink-50"
                      : "text-gray-700"
                  } py-2 px-4 rounded-lg font-medium`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/appointments"
                onClick={() => setIsMenuOpen(false)}
                className="bg-pink-600 text-white px-4 py-2 rounded-lg text-center font-medium"
              >
                {t("appointments")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
