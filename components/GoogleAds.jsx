'use client';
import Script from 'next/script';
import { useEffect } from 'react';

// Google Ads — conta Eduarda Silva de Moura (691-568-7841)
const AW_ID = 'AW-18497074468';
const WA_CONVERSION = 'AW-18497074468/-4zvCKPl65IdEKTqi_RE'; // Clique WhatsApp
const WA_NUMBER = '5571992202100';

function registrarConversao() {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', { send_to: WA_CONVERSION });
  }
}

function enviarFormulario() {
  const v = (id) => (document.getElementById(id)?.value || '').trim();
  const nome = v('f-nome');
  const tel = v('f-tel');
  const email = v('f-email');
  const assunto = v('f-assunto');
  const msg = v('f-msg');
  if (!nome || !msg) {
    alert('Preencha pelo menos o nome e a mensagem.');
    return;
  }
  const texto = [
    'Olá, vim pelo site e gostaria de falar com a Dra. Eduarda.',
    `Nome: ${nome}`,
    tel && `Telefone: ${tel}`,
    email && `E-mail: ${email}`,
    assunto && `Assunto: ${assunto}`,
    `Mensagem: ${msg}`,
  ]
    .filter(Boolean)
    .join('\n');
  registrarConversao();
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(texto)}`, '_blank');
}

export default function GoogleAds() {
  useEffect(() => {
    const onClick = (e) => {
      const btn = e.target.closest?.('[data-acao="enviar-whatsapp"]');
      if (btn) {
        e.preventDefault();
        enviarFormulario();
        return;
      }
      const link = e.target.closest?.('a[href]');
      if (link && /(wa\.me|api\.whatsapp\.com)/.test(link.getAttribute('href'))) {
        registrarConversao();
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${AW_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${AW_ID}');`}
      </Script>
    </>
  );
}
