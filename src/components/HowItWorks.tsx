import { Sparkles, QrCode, GitBranch, Send } from "lucide-react";

const STEPS = [
  {
    icon: Sparkles,
    tag: "01",
    title: "Crie a campanha em minutos",
    text: "Escolha o objetivo — atendimento, um prato novo, uma enquete — e a Optin gera o QR code e as artes de ativação prontas para imprimir ou exibir na loja.",
  },
  {
    icon: QrCode,
    tag: "02",
    title: "O cliente escaneia e responde",
    text: "Sem app, sem fricção. O cliente responde direto do celular, em segundos, e, se quiser, deixa o contato para receber novidades.",
  },
  {
    icon: GitBranch,
    tag: "03",
    title: "Cada resposta recebe o cuidado certo",
    text: "Nota baixa chega primeiro para você, com a chance de resolver: o cliente pode pedir contato na hora. E todos, com qualquer nota, recebem o convite opcional para compartilhar a experiência no Google, TripAdvisor ou para seguir seu Instagram.",
  },
  {
    icon: Send,
    tag: "04",
    title: "Você constrói um público próprio",
    text: "Cada cliente que aceita receber novidades vira um contato seu, pronto para e-mail, WhatsApp e públicos personalizados de anúncios, sempre com consentimento.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-purple">
            Como funciona
          </p>
          <h2 className="font-display mt-3 text-3xl text-brand-ink sm:text-4xl">
            Da escuta ao público próprio, em um fluxo só
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-4 lg:gap-6">
          {STEPS.map(({ icon: Icon, tag, title, text }, i) => (
            <div key={tag} className="relative">
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-0">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-purple text-white">
                  <Icon size={26} />
                </div>
                <span className="font-display text-3xl text-brand-ink/15 lg:mt-4">
                  {tag}
                </span>
              </div>
              <h3 className="font-display mt-4 text-xl text-brand-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">{text}</p>

              {i < STEPS.length - 1 && (
                <div
                  className="absolute right-0 top-7 hidden h-px w-6 translate-x-full bg-brand-ink/15 lg:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
