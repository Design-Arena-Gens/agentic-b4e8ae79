"use client";

import { motion } from "framer-motion";

const cases = [
  {
    company: "NeoBank",
    tagline: "Support client augmenté 24/7",
    impact: ["85% des conversations traitées par l'IA", "-62% de temps moyen de résolution"],
    description:
      "Agent principal multi-canaux pour le support bancaire avec personnalisation du ton par persona, escalade intelligente vers les conseillers et suggestions automatiques d'offres."
  },
  {
    company: "Helios SaaS",
    tagline: "Pipeline commercial orchestré par l'IA",
    impact: [
      "+38% de conversion inbound",
      "Fonction commerciale autonomisée"
    ],
    description:
      "Chatbot qualifiant les leads selon ICP, synchronisé à HubSpot, déclenchant des séquences sales et fournissant des briefs contextualisés aux account executives."
  },
  {
    company: "Luma Retail",
    tagline: "Expérience retail phygitale",
    impact: ["+27% de panier moyen", "NPS +21 points"],
    description:
      "Concierge IA omnicanal reliant e-commerce, app mobile et boutique, recommandant des produits en temps réel selon la météo, le stock et le profil client."
  }
];

export function CaseStudies() {
  return (
    <section
      id="cases"
      className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-x-0 -top-24 -z-10 h-[40rem] bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(94,234,212,0.25),transparent)]" />
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-200">
            Success stories
          </p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Des chatbots qui engagent, convertissent et fidélisent
          </h2>
          <p className="text-lg text-slate-300">
            Nous alignons votre stratégie conversationnelle avec la data,
            l&apos;automation et la créativité pour délivrer des expériences à
            forte valeur.
          </p>
        </div>
        <p className="max-w-lg text-sm text-slate-400">
          « Intelliwave a transformé notre relation client. L&apos;agent IA
          orchestre désormais les conversations de façon fluide et proactive. »
          – CMO Helios
        </p>
      </div>
      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {cases.map((item, index) => (
          <motion.article
            key={item.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-white/10/10 via-white/5 to-transparent p-8 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-brand-400/40 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase text-brand-200">
                {item.company}
              </span>
              <span className="text-sm text-slate-400">{item.tagline}</span>
            </div>
            <p className="mt-6 text-sm text-slate-300">{item.description}</p>
            <div className="mt-6 flex flex-col gap-3 text-sm font-medium text-white">
              {item.impact.map((impact) => (
                <span key={impact} className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  {impact}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
