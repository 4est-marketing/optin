import { Quote } from "lucide-react";

export default function Authority() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Quote className="mx-auto text-brand-green" size={40} />
        <p className="font-display mt-6 text-2xl leading-snug text-brand-ink sm:text-3xl">
          Acreditamos que o marketing verdadeiro é o que escuta seus clientes e
          foca na co-criação dos seus produtos. A nova era do marketing é a que
          cria com o seu público — não apenas para ele.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
            {
              stat: "100%",
              label: "das avaliações coletadas com consentimento explícito",
            },
            {
              stat: "3 em 1",
              label: "avaliação interna, oculta e externa em um único fluxo",
            },
            {
              stat: "Seu",
              label: "público próprio, pronto para e-mail, WhatsApp e ads",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-black/5 bg-brand-cream/60 p-7"
            >
              <p className="font-display text-3xl text-brand-purple">{item.stat}</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
