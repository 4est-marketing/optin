import { UtensilsCrossed, Headset, ListChecks, Gift, Star, Building2 } from "lucide-react";

const LEVERS = [
  {
    icon: Headset,
    title: "Atendimento",
    text: "Meça a experiência em tempo real e corrija a rota antes que vire uma reclamação pública.",
  },
  {
    icon: UtensilsCrossed,
    title: "Produto ou prato novo",
    text: "Lance uma novidade e colha reações reais do seu público antes de escalar.",
  },
  {
    icon: ListChecks,
    title: "Enquetes e co-criação",
    text: "Pergunte o que seu cliente quer ver a seguir. O marketing que escuta cria produtos junto com o público.",
  },
  {
    icon: Building2,
    title: "Avaliação oculta",
    text: "Audite discretamente a operação de uma unidade sem alertar a equipe.",
  },
  {
    icon: Star,
    title: "Avaliação externa",
    text: "Direcione clientes satisfeitos para Google, TripAdvisor e outras plataformas de reputação pública.",
  },
  {
    icon: Gift,
    title: "Avaliação premiada",
    text: "Ofereça um voucher de benefício para estimular a participação e fidelizar quem responde.",
  },
];

export default function GrowthLevers() {
  return (
    <section id="alavancas" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-green-dark">
            Alavancas de crescimento
          </p>
          <h2 className="font-display mt-3 text-3xl text-brand-ink sm:text-4xl">
            Uma campanha de avaliação para cada objetivo
          </h2>
          <p className="mt-4 text-lg text-brand-ink/70">
            Chamamos de &ldquo;campanha de avaliação&rdquo; porque ela assume o formato que o
            seu negócio precisa agora — e muda conforme o objetivo muda.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LEVERS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-black/5 p-6 transition hover:border-brand-purple/20 hover:shadow-lg hover:shadow-brand-purple/5"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green-dark transition group-hover:bg-brand-purple group-hover:text-white">
                <Icon size={22} />
              </div>
              <h3 className="font-display mt-4 text-lg text-brand-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-ink/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
