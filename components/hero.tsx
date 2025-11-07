"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-radial-glow opacity-90" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_#0f172a,_#020617_55%)]" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Automatisation IA
          </div>
          <h1 className="max-w-3xl font-display text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
            Des agents conversationnels{" "}
            <span className="bg-gradient-to-r from-brand-200 via-brand-400 to-emerald-300 bg-clip-text text-transparent">
              Intelligents et humains
            </span>{" "}
            qui propulsent votre croissance
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Intelliwave conçoit des chatbots IA sur mesure qui orchestrent vos
            interactions client, automatisent les tâches répétitives et alignent
            chaque conversation avec vos objectifs business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button icon={<span aria-hidden>→</span>}>
            Réserver un atelier découverte
          </Button>
          <a
            href="#cases"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            Explorer nos projets
            <span aria-hidden>→</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
          className="grid w-full gap-6 rounded-3xl border border-white/10 bg-white/5/20 p-6 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                {metric.label}
              </p>
              <p className="font-display text-3xl text-white">{metric.value}</p>
              <p className="text-sm text-slate-400">{metric.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const metrics = [
  {
    label: "Expérience client",
    value: "+92%",
    description: "de satisfaction moyenne post-déploiement"
  },
  {
    label: "Temps de réponse",
    value: "x6",
    description: "de gain sur les scénarios support et relation client"
  },
  {
    label: "Automatisation",
    value: "68%",
    description: "des demandes prises en charge par l'IA en autonomie"
  },
  {
    label: "ROI moyen",
    value: "3,4 mois",
    description: "pour rentabiliser l'investissement initial"
  }
];
