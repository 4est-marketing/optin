import { Store, EyeOff, Users2 } from "lucide-react";

const POINTS = [
  {
    icon: Store,
    title: "O varejo físico é surdo por padrão",
    text: "O cliente entra, consome, sai — e a loja não sabe quem ele é, o que achou, nem como falar com ele de novo.",
  },
  {
    icon: EyeOff,
    title: "Feedback vira reclamação nas redes",
    text: "Sem um canal ativo de escuta, o problema só aparece publicamente: numa nota baixa no Google ou num post que viraliza.",
  },
  {
    icon: Users2,
    title: "Nenhum público próprio é construído",
    text: "Cada visita é uma oportunidade perdida de gerar um contato — e-mail, WhatsApp ou base para anúncios — que você possa ativar depois.",
  },
];

export default function Problem() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-green-dark">
            O problema
          </p>
          <h2 className="font-display mt-3 text-3xl text-brand-ink sm:text-4xl">
            Sua loja física não tem um ponto de contato digital
          </h2>
          <p className="mt-4 text-lg text-brand-ink/70">
            Enquanto o e-commerce sabe tudo sobre cada visitante, o varejo físico
            segue no escuro — sem dados, sem consentimento e sem canal de volta
            para o cliente.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {POINTS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-black/5 bg-brand-cream/60 p-7"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
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
