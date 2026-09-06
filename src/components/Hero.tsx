import { Star, CheckCircle2 } from "lucide-react";
import QrGlyph from "./QrGlyph";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-cream pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-brand-purple/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-purple/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-purple">
            Marketing como escuta
          </span>

          <h1 className="font-display mt-6 text-4xl leading-[1.08] text-brand-ink sm:text-5xl lg:text-[3.4rem]">
            Transforme cada cliente que passa pela sua loja em{" "}
            <span className="text-brand-purple">dado</span>,{" "}
            <span className="text-brand-green-dark">reputação</span> e{" "}
            <span className="text-brand-purple">público próprio</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-ink/75">
            A Optin cria, em minutos, campanhas de avaliação com QR code para o seu
            varejo físico. Com o consentimento do cliente, você escuta, melhora a
            experiência, ganha autoridade em avaliações públicas e constrói uma base
            própria para ativar por e-mail, WhatsApp e tráfego pago.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-full bg-brand-purple px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-purple/30 transition hover:bg-brand-purple-dark"
            >
              Quero uma demonstração
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center rounded-full border-2 border-brand-ink/10 bg-white/60 px-7 py-3.5 text-base font-semibold text-brand-ink transition hover:border-brand-purple/30 hover:bg-white"
            >
              Ver como funciona
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-ink/60">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-brand-green-dark" />
              Campanha pronta em minutos
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-brand-green-dark" />
              Dados coletados com consentimento
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-brand-green-dark" />
              Sem app para o cliente instalar
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="relative rounded-[2rem] border border-black/5 bg-white p-6 shadow-2xl shadow-brand-purple/10 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-gray">
                  Campanha ativa
                </p>
                <p className="font-display text-lg text-brand-ink">
                  Avaliação — Atendimento
                </p>
              </div>
              <span className="rounded-full bg-brand-green/15 px-3 py-1 text-xs font-semibold text-brand-green-dark">
                ao vivo
              </span>
            </div>

            <div className="mt-6 flex justify-center rounded-2xl bg-brand-cream p-6">
              <QrGlyph className="w-40 sm:w-48" />
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-brand-cream/70 px-4 py-3">
                <span className="text-sm font-medium text-brand-ink/70">
                  Como foi seu atendimento hoje?
                </span>
                <div className="flex gap-0.5 text-brand-green">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-brand-cream/70 px-4 py-3">
                <span className="text-sm font-medium text-brand-ink/70">
                  Redirecionado para
                </span>
                <span className="text-sm font-semibold text-brand-purple">
                  Google · Ficha da loja
                </span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-brand-green/10 px-4 py-3">
                <span className="text-sm font-medium text-brand-ink/70">
                  Novo contato capturado
                </span>
                <span className="text-sm font-semibold text-brand-green-dark">
                  +1 no seu público
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-brand-purple px-5 py-4 text-white shadow-xl sm:block">
            <p className="text-2xl font-bold leading-none">4.8</p>
            <p className="mt-1 text-xs text-white/80">nota média gerada</p>
          </div>
        </div>
      </div>
    </section>
  );
}
