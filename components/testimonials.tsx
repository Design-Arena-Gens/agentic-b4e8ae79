const testimonials = [
  {
    name: "Camille Laurent",
    role: "VP Customer Experience · NeoBank",
    quote:
      "L'agent conçu par Intelliwave est devenu notre conseiller virtuel de référence. Il anticipe les besoins clients et libère nos équipes sur les sujets à forte valeur."
  },
  {
    name: "Yanis Khaldi",
    role: "CPO · Helios SaaS",
    quote:
      "Nous avons confié l'orchestration de nos interactions inbound à Intelliwave. Résultat : conversion en hausse et alignement parfait avec notre pipeline sales."
  },
  {
    name: "Claire Boucher",
    role: "Chief Digital Officer · Luma Retail",
    quote:
      "Un partenaire rare qui allie vision stratégique et excellence d'exécution. Notre concierge IA contribue directement à notre croissance omnicanale."
  }
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(37,99,235,0.2),transparent)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-200">
            Confiance
          </p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Choisie par les leaders de la relation client innovante
          </h2>
          <p className="text-lg text-slate-300">
            Une approche collaborative, des résultats concrets, des équipes
            engagées sur votre réussite long terme.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6"
            >
              <p className="text-sm italic text-slate-300">
                « {testimonial.quote} »
              </p>
              <div className="pt-4 text-sm font-semibold text-white">
                {testimonial.name}
                <p className="font-normal text-slate-400">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
