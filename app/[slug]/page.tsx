import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ALL, getItem, excerpt } from '@/lib/content';
import { PageShell } from '@/components/PageShell';
import type { Item } from '@/lib/content';

// Títulos que já ranqueiam no Google foram mantidos; só os vazios ganham título novo.
const TITULOS: Record<string, string> = {
  'energia-solar-por-assinatura': 'Energia Solar por Assinatura na Bahia: até 20% de Desconto',
  'energia-solar-residencial-em-salvador-e-lauro-de-freitas': 'Energia Solar Residencial em Salvador e Lauro de Freitas',
  'energia-solar-para-condominios-em-salvador': 'Energia Solar para Condomínios em Salvador',
  'servicos-executados': 'Obras de Energia Solar Realizadas na Bahia',
  contato: 'Contato e Orçamento de Energia Solar em Salvador',
  'simulador-de-energia-solar': 'Simulador de Energia Solar: Calcule sua Economia',
};

// Descrições para páginas que vieram do WordPress sem meta description
const DESCRICOES: Record<string, string> = {
  contato: 'Fale com a Energia Solar Bahia: WhatsApp (71) 98350-8448, telefone (71) 3190-9858 ou formulário. Simulação e orçamento de energia solar em Salvador e na Bahia.',
};

function seoTitle(item: Item) {
  const base = (TITULOS[item.slug] || item.seoTitle || item.title)
    .replace(/\s*%sep%\s*%sitename%/g, '')
    .replace(/%sitename%/g, 'Energia Solar Bahia')
    .replace(/%[a-z_]+%/g, '')
    .trim();
  return /Energia Solar Bahia/i.test(base) ? base : `${base} | Energia Solar Bahia`;
}

export function generateStaticParams() {
  return ALL.filter((i) => i.slug).map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<'/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) return {};
  const title = seoTitle(item);
  const description = DESCRICOES[slug] || item.description || excerpt(item);
  return {
    title,
    description,
    alternates: { canonical: `/${slug}/` },
    openGraph: {
      title, description, url: `/${slug}/`,
      type: item.type === 'post' ? 'article' : 'website',
      images: item.image ? [item.image] : undefined,
    },
  };
}

export default async function Page({ params }: PageProps<'/[slug]'>) {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) notFound();
  return <PageShell item={item} />;
}
