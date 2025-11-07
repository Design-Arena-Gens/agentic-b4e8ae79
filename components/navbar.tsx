"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Méthodologie", href: "#process" },
  { name: "Réalisations", href: "#cases" },
  { name: "Ressources", href: "#resources" },
  { name: "Contact", href: "#contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 via-brand-500 to-indigo-500 text-base font-bold text-white shadow-lg">
            IW
          </span>
          <span className="font-display text-xl">Intelliwave</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button>
            Planifier un diagnostic
            <span aria-hidden>→</span>
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" aria-label="Menu">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}
