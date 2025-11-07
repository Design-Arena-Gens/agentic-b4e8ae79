import { Button } from "./ui/button";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-gradient-to-br from-brand-500/10 via-slate-900 to-slate-950 px-6 py-20 sm:px-10"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-200">
            Passer à l&apos;action
          </p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Lancez votre agent conversationnel sur-mesure
          </h2>
          <p className="text-lg text-slate-200">
            Partagez vos ambitions, nous revenons vers vous en 24h avec une
            proposition d&apos;atelier diagnostic et un plan d&apos;action
            personnalisé.
          </p>
          <div className="space-y-3 text-sm text-slate-300">
            <p>• Audit de vos parcours et interactions clés</p>
            <p>• Recommandations technologiques adaptées</p>
            <p>• Modèle de gouvernance et roadmap 90 jours</p>
          </div>
        </div>
        <form className="grid gap-6">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-white">
              Prénom & Nom
            </label>
            <input
              id="name"
              name="name"
              placeholder="Alex Martin"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300/30"
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-white">
              Email professionnel
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="alex@entreprise.com"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300/30"
              required
            />
          </div>
          <div className="grid gap-2">
            <label
              htmlFor="company"
              className="text-sm font-semibold text-white"
            >
              Société
            </label>
            <input
              id="company"
              name="company"
              placeholder="Intelliwave"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300/30"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="need" className="text-sm font-semibold text-white">
              Projet ou besoin
            </label>
            <textarea
              id="need"
              name="need"
              rows={4}
              placeholder="Décrivez le contexte, vos objectifs et les défis actuels."
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300/30"
            />
          </div>
          <Button type="submit" icon={<span aria-hidden>→</span>}>
            Envoyer ma demande
          </Button>
        </form>
      </div>
    </section>
  );
}
