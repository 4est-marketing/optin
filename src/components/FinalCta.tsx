import LeadForm from "./LeadForm";

export default function FinalCta() {
  return (
    <section id="demo" className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid gap-10 rounded-[2rem] bg-brand-ink px-6 py-12 text-white sm:px-12 sm:py-14 lg:grid-cols-[1.1fr,1fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">
              Vamos começar
            </p>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl">
              Veja a Optin funcionando no seu negócio
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              Em uma conversa de 20 minutos, mostramos como montar sua primeira
              campanha de avaliação e o que fazer com os dados que ela vai gerar.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/80">
              <li className="flex gap-2">
                <span className="text-brand-green">→</span> Diagnóstico rápido do seu
                ponto de venda
              </li>
              <li className="flex gap-2">
                <span className="text-brand-green">→</span> Sugestão de alavancas de
                crescimento para o seu caso
              </li>
              <li className="flex gap-2">
                <span className="text-brand-green">→</span> Proposta sob medida —
                plataforma, serviço e materiais
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/5 p-6 sm:p-8">
            <LeadForm
              theme="dark"
              fields={[
                { name: "nome", label: "Nome" },
                { name: "empresa", label: "Empresa" },
                { name: "whatsapp", label: "WhatsApp", type: "tel" },
                { name: "email", label: "E-mail", type: "email" },
              ]}
              submitLabel="Agendar demonstração"
              successMessage="Recebemos seus dados! Nosso time vai entrar em contato para agendar sua demonstração."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
