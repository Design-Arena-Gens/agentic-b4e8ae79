import { FileText, LineChart, Radio } from "lucide-react";

const resources = [
  {
    title: "Playbook Agents Conversationnels",
    description:
      "Un guide de 40 pages pour structurer vos agents IA multi-canaux, avec matrices de qualification et prompts templates.",
    icon: FileText,
    href: "#"
  },
  {
    title: "Benchmark IA & KPIs 2024",
    description:
      "Reference sheet des métriques à suivre pour piloter l'impact de vos chatbots sur l'expérience client.",
    icon: LineChart,
    href: "#"
  },
  {
    title: "Podcast Waveforms",
    description:
      "Retours d'expérience de CPO, CMO et CTO ayant lancé un agent IA autonome dans leur organisation.",
    icon: Radio,
    href: "#"
  }
];

export function Resources() {
  return (
    <section id="resources" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-200">
            Insights
          </p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Ressources exclusives pour accélérer vos projets IA
          </h2>
          <p className="text-lg text-slate-300">
            Restez à la pointe des technologies conversationnelles grâce à nos
            formats actionnables et retours de terrain.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <a
                key={resource.title}
                href={resource.href}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5/20 p-6 transition hover:border-brand-300/60 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-400/10 text-brand-200 transition group-hover:bg-brand-400 group-hover:text-slate-950">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-lg text-white">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {resource.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">
                  Télécharger
                  <span aria-hidden className="transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
