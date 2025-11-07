const footerLinks = [
  { label: "Mentions légales", href: "#" },
  { label: "Politique de confidentialité", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Newsletter", href: "#" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-lg text-white">Intelliwave</p>
          <p className="text-xs text-slate-500">
            Membre d&apos;AI Builders Collective · Paris · Montréal
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Intelliwave. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
