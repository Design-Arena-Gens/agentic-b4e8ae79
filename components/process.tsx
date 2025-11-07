"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Diagnostic & cadrage",
    description:
      "Audit de vos interactions existantes, identification des quick wins et co-définition des cas d'usage prioritaires."
  },
  {
    id: "02",
    title: "Prototype haute fidélité",
    description:
      "Création d'un agent conversationnel sur un périmètre ciblé, entraînement sur vos données et tests utilisateurs."
  },
  {
    id: "03",
    title: "Déploiement orchestré",
    description:
      "Montée en échelle progressive avec intégration à votre stack, scénarios multi-agents et formation équipes internes."
  },
  {
    id: "04",
    title: "Pilotage continu",
    description:
      "Monitoring en temps réel, optimisation des prompts et flux, documentation vivante, plan d'évolution trimestriel."
  }
];

export function Process() {
  return (
    <section id="process" className="bg-slate-950/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-200">
            Méthodologie
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-white sm:text-4xl">
            Une trajectoire maîtrisée de l&apos;idée au run opérationnel
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Nous combinons design conversationnel, ingénierie IA et conduite du
            changement pour faire de votre agent un moteur de croissance durable.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold text-brand-200">
                  {step.id}
                </span>
                <div className="h-12 w-12 rounded-full border border-white/10 bg-white/5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
