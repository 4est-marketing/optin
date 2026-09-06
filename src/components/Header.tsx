"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#alavancas", label: "Alavancas de crescimento" },
  { href: "#cliente-oculto", label: "Cliente oculto" },
  { href: "#solucao", label: "Solução" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-brand-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-ink/80 transition hover:text-brand-purple"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#cliente-oculto"
            className="text-sm font-semibold text-brand-purple hover:text-brand-purple-dark"
          >
            Sou cliente oculto
          </a>
          <a
            href="#demo"
            className="rounded-full bg-brand-purple px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-purple/30 transition hover:bg-brand-purple-dark"
          >
            Agendar demonstração
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden rounded-md p-2 text-brand-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-brand-cream px-5 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-brand-ink/85 hover:bg-black/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cliente-oculto"
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-base font-semibold text-brand-purple hover:bg-black/5"
            >
              Sou cliente oculto
            </a>
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-purple px-5 py-3 text-center text-base font-semibold text-white"
            >
              Agendar demonstração
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
