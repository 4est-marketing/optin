import { LayoutDashboard, Users, Package } from "lucide-react";

const PILLARS = [
  {
    icon: LayoutDashboard,
    title: "Plataforma (SaaS)",
    text: "Crie campanhas, gere QR codes e artes, acompanhe respostas e resultados em um painel simples, pensado para o dia a dia do varejo.",
  },
  {
    icon: Users,
    title: "Serviço",
    text: "Nosso time ajuda a desenhar os objetivos certos para cada campanha e a interpretar os resultados para gerar melhoria real.",
  },
  {
    icon: Package,
    title: "Produto",
    text: "Também confeccionamos materiais físicos e digitais — placas de mesa, adesivos, displays — para ativar suas campanhas no ponto de venda.",
  },
];

export default function Pillars() {
  return (
    <section id="solucao" className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-purple">
            Nossa solução
          </p>
          <h2 className="font-display mt-3 text-3xl text-brand-ink sm:text-4xl">
            Tecnologia, gente e materiais — tudo em um só lugar
          </h2>
          <p className="mt-4 text-lg text-brand-ink/70">
            A Optin não entrega só um software. Entregamos a camada completa para
            colocar a escuta ativa em prática no seu negócio.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl bg-white p-8 shadow-sm shadow-black/[0.03]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-purple text-white">
                <Icon size={24} />
              </div>
              <h3 className="font-display mt-5 text-xl text-brand-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
