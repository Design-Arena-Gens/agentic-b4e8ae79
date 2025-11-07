import { CaseStudies } from "@/components/case-studies";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Process } from "@/components/process";
import { Resources } from "@/components/resources";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { Sparkles } from "lucide-react";

const partners = [
  "BackMarket",
  "Deel",
  "Doctolib",
  "Alan",
  "Spendesk",
  "Qonto",
  "Swile"
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-30 bg-slate-950" />
      <div className="absolute inset-x-0 top-0 -z-20 h-[50vh] bg-gradient-to-b from-brand-500/20 via-transparent to-transparent blur-3xl" />
      <Navbar />
      <main className="space-y-24 pb-24">
        <Hero />
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col rounded-3xl border border-white/10 bg-white/5/20 px-8 py-6 backdrop-blur-lg sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-400/10 text-brand-200">
                <Sparkles className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-200">
                  +40 clients accompagnés
                </p>
                <p className="text-sm text-slate-300">
                  Scale-ups, fintech, retail, SaaS B2B & services premium
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400 sm:mt-0 sm:justify-end">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="rounded-full border border-white/10 px-4 py-1"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </section>
        <Services />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Resources />
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 via-slate-900 to-slate-950 p-8 text-center shadow-[0_24px_80px_-40px_rgba(16,185,129,0.6)] sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
              Programme 30 jours
            </p>
            <h3 className="mt-4 font-display text-3xl text-white sm:text-4xl">
              Passez de l&apos;idée au prototype d&apos;agent IA opérationnel en
              un mois
            </h3>
            <p className="mt-4 text-lg text-slate-200">
              Atelier immersion, design conversationnel, intégration à votre
              stack et KPI co-pilotés. Une méthodologie éprouvée pour lancer
              votre agent sur un périmètre stratégique.
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
