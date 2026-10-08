import type { Metadata } from "next";
import Header from "@/components/Header";
import MysteryShopper from "@/components/MysteryShopper";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cliente oculto | Optin",
  description:
    "Seja cliente oculto da Optin: consuma, avalie com honestidade e receba o valor do seu voucher via Pix.",
  alternates: { canonical: "/cliente-oculto" },
};

export default function ClienteOculto() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-purple">
        <MysteryShopper />
      </main>
      <Footer />
    </>
  );
}
