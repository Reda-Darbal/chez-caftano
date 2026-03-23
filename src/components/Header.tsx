"use client";

import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Globe } from "lucide-react";

interface HeaderProps {
  onCategorySelect?: (categoryId: string) => void;
}

export default function Header({ onCategorySelect }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.caftans, href: "#categories", categoryId: "caftans" },
    { name: t.nav.takchitas, href: "#categories", categoryId: "takchitas" },
    { name: t.nav.djellabas, href: "#categories", categoryId: "djellabas" },
    { name: t.nav.ventes, href: "#categories", categoryId: "ventes" },
    { name: t.nav.story, href: "#story" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <Fragment>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-2 px-0" : "bg-transparent py-2"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden ${isScrolled ? "!text-charcoal" : "!text-white"} hover:text-gold transition-colors`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center">
            <Image src="/images/main-logo.png" alt="Chez Caftano Logo" width={120} height={40} className="object-contain w-16 md:w-20 lg:w-24" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.categoryId) {
                    onCategorySelect?.(link.categoryId);
                  }
                }}
                className={`text-sm uppercase tracking-widest nav-link py-1 px-1 ${isScrolled ? "!text-charcoal" : "!text-white"}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center gap-4">
            <div className={`hidden md:flex items-center gap-2 text-sm font-medium ${isScrolled ? "!text-charcoal" : "!text-white"}`}>
              <Globe className={`w-4 h-4 ${isScrolled ? "text-stone" : "text-white/70"}`} />
              <button
                onClick={() => setLanguage("fr")}
                className={`hover:text-gold transition-colors ${language === "fr" ? "text-gold" : (isScrolled ? "!text-charcoal" : "!text-white")}`}
              >
                FR
              </button>
              <span className={isScrolled ? "text-stone" : "text-white/30"}>|</span>
              <button
                onClick={() => setLanguage("ar")}
                className={`hover:text-gold transition-colors ${language === "ar" ? "text-gold" : (isScrolled ? "!text-charcoal" : "!text-white")}`}
              >
                AR
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[60] transition-transform duration-300 flex flex-col pt-24 px-8 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button
          className="absolute top-6 right-8 text-foreground"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>

        <nav className="flex flex-col gap-8 text-xl font-headings">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => {
                if (link.categoryId) {
                  onCategorySelect?.(link.categoryId);
                }
                setMobileMenuOpen(false);
              }}
              className="uppercase tracking-widest hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-8 flex items-center gap-4 border-t border-sand pt-8">
            <button
              onClick={() => { setLanguage("fr"); setMobileMenuOpen(false); }}
              className={`text-lg hover:text-gold transition-colors ${language === "fr" ? "text-gold" : "text-charcoal"}`}
            >
              Français
            </button>
            <span className="text-stone">|</span>
            <button
              onClick={() => { setLanguage("ar"); setMobileMenuOpen(false); }}
              className={`text-lg hover:text-gold transition-colors ${language === "ar" ? "text-gold" : "text-charcoal"}`}
            >
              العربية
            </button>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}
