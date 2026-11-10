import { ImageResponse } from 'next/og';

// Imagem que aparece ao compartilhar o site no WhatsApp, Facebook e LinkedIn.
export const alt = 'Energia Solar Bahia – energia solar em Salvador e na Bahia';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#163432', color: '#ffffff', padding: '72px' }}>
        <div style={{ display: 'flex', fontSize: 40, fontWeight: 700 }}>
          <span>Energia Solar&nbsp;</span><span style={{ color: '#f5c518' }}>Bahia</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, maxWidth: 1000 }}>Energia solar em Salvador e em toda a Bahia</div>
          <div style={{ fontSize: 30, color: '#cfd8de' }}>Projeto, instalação, homologação na Coelba, financiamento e energia por assinatura.</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 28 }}>
          <span style={{ background: '#f5c518', color: '#1d1600', padding: '12px 24px', borderRadius: 12, fontWeight: 700 }}>WhatsApp (71) 98350-8448</span>
          <span style={{ color: '#cfd8de' }}>energiasolarbahia.com.br</span>
        </div>
      </div>
    ),
    size,
  );
}
