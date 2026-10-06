# Eduarda Moura — Advocacia Trabalhista (site)

Site institucional em **Next.js (App Router)**, pronto para deploy na **Vercel**.

## Rodar localmente

```bash
npm install
npm run dev
```
Abra http://localhost:3000

## Build de produção

```bash
npm run build
npm run start
```

## Deploy na Vercel

1. Suba esta pasta para um repositório no GitHub/GitLab/Bitbucket.
2. Em https://vercel.com → **Add New… → Project** → importe o repositório.
3. A Vercel detecta o Next.js automaticamente (sem configuração extra). Clique em **Deploy**.
4. Em **Settings → Domains**, adicione `eduardamouraadvogados.adv.br` e aponte o DNS conforme as instruções da Vercel.

> Dica: você também pode instalar a CLI (`npm i -g vercel`) e rodar `vercel` dentro desta pasta.

## Estrutura

- `app/` — uma pasta por rota (cada `page.jsx` traz seu próprio SEO via `export const metadata` + JSON-LD).
  - `app/page.jsx` — Início
  - `app/sobre`, `app/areas`, `app/contato`
  - `app/artigos` — central de artigos
  - `app/artigo-*` — 18 artigos
  - `app/advogado-trabalhista-*` — 5 páginas de SEO local (cidades)
  - `app/sitemap.js` → gera `/sitemap.xml`
  - `app/robots.js` → gera `/robots.txt`
- `components/` — `PageBody` (render do conteúdo + JSON-LD) e `LucideInit` (ícones Lucide).
- `public/` — imagens e `favicon.svg`.

## Avaliações do Google

O widget de avaliações (Elfsight) foi retirado do site em 06/10/2026 para adequação ao Provimento 205/2021 da OAB.

## Trocar as fotos

As imagens ficam em `public/`:
- `aef74773-...jpg` — retrato do hero (Início)
- `img_2542-mqn5w9rx.jpg` — retrato da página Sobre
- `intro-portrait.webp` — foto da seção de introdução (Início)
- `cta-photo.webp` — foto da faixa de chamada (Início)

Substitua mantendo o mesmo nome de arquivo (ou atualize o `src` na página correspondente em `app/`).

## Observações de SEO

- Títulos, descrições, canonical, Open Graph e dados estruturados (JSON-LD) já estão em cada página.
- Após publicar, cadastre o domínio no **Google Search Console** e envie `/sitemap.xml`.
- Crie/otimize o **Perfil da Empresa no Google** para a busca local.
