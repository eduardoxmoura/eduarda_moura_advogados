import type { Metadata } from 'next';
import '@fontsource-variable/inter';
import '@fontsource-variable/bricolage-grotesque';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SITE, waLink } from '@/lib/site';


export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Empresa de Energia Solar em Salvador | Energia Solar Bahia', template: '%s' },
  description:
    'Economize até 95% na conta de luz com energia solar em Salvador e na Bahia. Projeto, instalação, homologação na Coelba, financiamento e energia por assinatura.',
  openGraph: { siteName: SITE.name, locale: 'pt_BR', type: 'website' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.url}/#empresa`,
  name: SITE.name,
  legalName: SITE.legalName,
  taxID: SITE.cnpj,
  image: `${SITE.url}/logo-energia-solar-bahia.png`,
  url: SITE.url,
  logo: `${SITE.url}/logo-energia-solar-bahia.png`,
  telephone: '+55-71-3190-9858',
  email: SITE.email,
  address: { '@type': 'PostalAddress', streetAddress: 'Rua Doutor José Peroba, 275', addressLocality: 'Salvador', addressRegion: 'BA', addressCountry: 'BR' },
  areaServed: 'Bahia',
  sameAs: [SITE.instagram, SITE.facebook],
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body className="flex min-h-screen flex-col font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <a
          href={waLink()}
          target="_blank"
          rel="noopener"
          aria-label="Falar no WhatsApp"
          className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1fa855] text-white shadow-lg transition hover:scale-105"
        >
          <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden>
            <path d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.2.6 4.4 1.7 6.3L3.2 29l7.3-1.9c1.8 1 3.9 1.5 6 1.5 7 0 12.7-5.6 12.7-12.6S23 3 16 3zm0 23.1c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-4.3 1.1 1.2-4.2-.3-.4a10.4 10.4 0 0 1-1.6-5.5C5.3 9.8 10.1 5.1 16 5.1s10.6 4.7 10.6 10.5S21.9 26.1 16 26.1zm5.8-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.6-1.6-1-.8-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.7 5 .8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.7-.5z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
