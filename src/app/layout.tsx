import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { roobert } from "./fonts/roobert";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Optin | Marketing como escuta",
  description:
    "Optin transforma seu ponto de venda físico em um canal digital próprio. Colete avaliações com consentimento, gere autoridade online e construa públicos para e-mail, WhatsApp e tráfego pago.",
  metadataBase: new URL("https://optin.promo"),
  openGraph: {
    title: "Optin | Marketing como escuta",
    description:
      "Campanhas de avaliação em minutos, via QR code. Escute seus clientes, ganhe reputação pública e construa audiência própria.",
    url: "https://optin.promo",
    siteName: "Optin",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${roobert.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-cream)] text-[var(--color-ink)]">
        {children}
      </body>
    </html>
  );
}
