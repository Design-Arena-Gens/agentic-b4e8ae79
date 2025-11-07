"use client";

import { BrainCircuit, MessagesSquare, Sparkles, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Cartographie conversationnelle",
    description:
      "Analyse de vos parcours clients, identification des micro-moments à fort impact et définition des KPI d'automatisation.",
    icon: Workflow,
    results: ["Blueprint conversationnel", "Roadmap IA 90 jours", "Charte de ton"]
  },
  {
    title: "Chatbots multi-agents",
    description:
      "Conception de systèmes conversationnels orchestrés par plusieurs agents spécialisés (qualif, support, vente, onboarding...).",
    icon: BrainCircuit,
    results: ["Agents interconnectés", "Orchestration dynamique", "Monitorings en temps réel"]
  },
  {
    title: "Contenus dynamiques & fine-tuning",
    description:
      "Curations de bases de connaissances, prompts évolutifs, fine-tuning de LLM ou RAG pour répondre avec précision à votre contexte.",
    icon: Sparkles,
    results: ["RAG personnalisé", "Moteur de tone-of-voice", "Scénarios multilingues"]
  },
  {
    title: "Intégrations & automatisations",
    description:
      "Connexion à vos outils métiers (CRM, support, ERP), déclenchement d'automatisations et synchronisation de vos données.",
    icon: MessagesSquare,
    results: ["API & Webhooks", "CRM/ERP sync", "Automations Zapier/Make"]
  }
];

export function Services() {
  return (
    <section
      id="services"
      className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-x-8 -z-10 rounded-3xl bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent blur-3xl" />
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="max-w-xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-200">
            Expertise
          </p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Nous orchestrons la relation client augmentée par l&apos;IA
          </h2>
          <p className="text-lg leading-relaxed text-slate-300">
            Notre équipe hybride strategy x engineering accompagne les scale-ups
            et entreprises ambitieuses qui souhaitent industrialiser leur
            relation client grâce à des expériences conversationnelles
            intelligentes.
          </p>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              • Workshops stratégiques pour définir l&apos;automation roadmap
            </li>
            <li>
              • Architecture multi-agents alignée sur vos processus métiers
            </li>
            <li>
              • Gouvernance continue via dashboard décisionnel
            </li>
          </ul>
        </div>
        <div className="grid flex-1 gap-6 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-6 shadow-[0_10px_40px_-20px_rgba(15,23,42,0.9)] transition hover:border-brand-400/40 hover:shadow-[0_16px_50px_-18px_rgba(17,94,89,0.45)]"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-400/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-400/10 text-brand-200">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-xl text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-400">
                  {service.results.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
