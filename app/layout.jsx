import './globals.css';
import Script from 'next/script';
import LucideInit from '../components/LucideInit';

export const metadata = {
  metadataBase: new URL('https://eduardamouraadvogados.adv.br'),
  title: {
    default: 'Advogada Trabalhista em Salvador | Dra. Eduarda Moura',
    template: '%s',
  },
  description:
    'Advogada trabalhista em Salvador (BA). Horas extras, rescisão, assédio moral, FGTS e mais. Atendimento humano, presencial e on-line.',
  icons: { icon: '/favicon.svg' },
};

export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script src="https://unpkg.com/lucide@latest" strategy="afterInteractive" />
        <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
        <LucideInit />
      </body>
    </html>
  );
}
