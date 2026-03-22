"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/data/company";

const navLinks = [
  { href: "#about", label: "О компании" },
  { href: "#services", label: "Услуги" },
  { href: "#pricing", label: "Цены" },
  { href: "#contacts", label: "Контакты" },
];

export default function Navbar({ onOpenForm }: { onOpenForm: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src="/logo.svg" alt={company.shortName} className="h-10 sm:h-12" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-text-primary hover:text-primary"
                  : "text-white hover:text-accent"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${company.phoneRaw}`}
            className={`text-sm font-bold ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            {company.phone}
          </a>
          <button
            onClick={() => onOpenForm()}
            className="bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
          >
            Оставить заявку
          </button>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2"
          aria-label="Меню"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-full transition-all ${
                isScrolled ? "bg-text-primary" : "bg-white"
              } ${isMobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-full transition-all ${
                isScrolled ? "bg-text-primary" : "bg-white"
              } ${isMobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-full transition-all ${
                isScrolled ? "bg-text-primary" : "bg-white"
              } ${isMobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-text-primary font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a href={`tel:${company.phoneRaw}`} className="text-primary font-bold py-2">
                {company.phone}
              </a>
              <button
                onClick={() => {
                  setIsMobileOpen(false);
                  onOpenForm();
                }}
                className="bg-accent text-white px-5 py-3 rounded-xl font-semibold"
              >
                Оставить заявку
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
