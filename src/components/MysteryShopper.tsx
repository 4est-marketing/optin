import { Wallet, Camera, ClipboardCheck } from "lucide-react";
import LeadForm from "./LeadForm";

const STEPS = [
  {
    icon: Wallet,
    title: "Consuma no estabelecimento",
    text: "Você recebe um valor de voucher para consumir normalmente, como qualquer cliente.",
  },
  {
    icon: ClipboardCheck,
    title: "Envie sua avaliação oculta",
    text: "Responda com detalhes sobre atendimento, ambiente e experiência — sem que a equipe saiba.",
  },
  {
    icon: Camera,
    title: "Envie a foto da conta e receba o Pix",
    text: "Faça o upload do comprovante e receba o valor do voucher direto via Pix.",
  },
];

export default function MysteryShopper() {
  return (
    <section
      id="cliente-oculto"
      className="relative overflow-hidden bg-brand-purple py-20 text-white sm:py-28"
    >
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brand-green/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr,1fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">
            Programa de cliente oculto
          </p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl">
            Seja cliente oculto da Optin e receba por avaliar
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
            Ajude estabelecimentos a melhorar de verdade. Consuma, avalie com
            honestidade e receba o valor do seu voucher via Pix após enviar sua
            avaliação oculta.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <div key={title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-brand-green">
                  <Icon size={22} />
                </div>
                <p className="mt-3 text-xs font-semibold text-brand-green">
                  Passo {i + 1}
                </p>
                <h3 className="font-display mt-1 text-lg">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white/5 p-6 sm:p-8" id="cadastro-cliente-oculto">
          <h3 className="font-display text-xl">Cadastre-se como cliente oculto</h3>
          <p className="mt-1.5 text-sm text-white/70">
            Deixe seus dados e avise quando abrirmos vagas na sua região.
          </p>
          <div className="mt-6">
            <LeadForm
              theme="dark"
              fields={[
                { name: "nome", label: "Nome completo" },
                { name: "cidade", label: "Cidade" },
                { name: "whatsapp", label: "WhatsApp", type: "tel" },
              ]}
              submitLabel="Quero ser cliente oculto"
              successMessage="Recebemos seu cadastro! Assim que abrirmos vagas na sua região, avisaremos pelo WhatsApp."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
