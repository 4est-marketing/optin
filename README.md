# Optin — Landing Page

Landing page de vendas da Optin, construída com [Next.js](https://nextjs.org) (App Router) e Tailwind CSS v4.

A Optin é uma plataforma de marketing como escuta: cria campanhas de avaliação
via QR code em minutos, coleta dados com consentimento (opt-in), direciona o
cliente para avaliação interna, oculta ou externa (Google, TripAdvisor) e
constrói público próprio para ativação por e-mail, WhatsApp e tráfego pago.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

- `src/app` — layout, metadata e página principal (App Router).
- `src/components` — seções da landing page (Hero, Como funciona, Alavancas de
  crescimento, Cliente oculto, Solução, CTA final, etc).
- `public/images` — logo/ícone da marca.
- `public/fonts` — fonte primária da marca (Roobert Regular).

Tipografia: **Roobert** (títulos/display) + **Montserrat** (texto), cores da
marca em `src/app/globals.css` (`--color-purple`, `--color-green`,
`--color-gray`, `--color-cream`).

## Build

```bash
npm run build
npm run start
```

## Deploy

Este projeto está preparado para deploy na [Vercel](https://vercel.com), com
domínio final em `optin.promo`.
