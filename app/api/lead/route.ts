import { Resend } from 'resend';
import { SITE, waLink } from '@/lib/site';

// Variáveis na Vercel: RESEND_API_KEY, LEADS_TO, LEADS_FROM
const esc = (s: unknown) => String(s ?? '').replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' })[c]!);

export async function POST(req: Request) {
  let data: Record<string, string>;
  try {
    data = await req.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
  if (data.empresa_site) return Response.json({ ok: true }); // robô
  if (!data.nome || !data.telefone) return Response.json({ ok: false, error: 'Nome e WhatsApp são obrigatórios' }, { status: 400 });

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error('RESEND_API_KEY não configurada');
    return Response.json({ ok: false }, { status: 500 });
  }

  const campos: [string, string | undefined][] = [
    ['Nome', data.nome], ['WhatsApp', data.telefone], ['E-mail', data.email], ['Conta de luz', data.conta],
    ['Cidade/bairro', data.cidade], ['Mensagem', data.mensagem], ['Simulação', data.resumo], ['Origem', data.origem],
  ];
  const html = `<h2>Novo contato pelo site Energia Solar Bahia</h2><table cellpadding="6">${campos
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`)
    .join('')}</table>`;

  const resend = new Resend(key);
  const { error } = await resend.emails.send({
    from: process.env.LEADS_FROM || 'Site Energia Solar Bahia <site@kriartengenharia.com.br>',
    to: (process.env.LEADS_TO || 'contato@energiasolarbahia.com.br').split(','),
    replyTo: data.email || undefined,
    subject: `Novo lead solar: ${data.nome} (${data.origem || 'site'})`,
    html,
  });
  if (error) {
    console.error(error);
    return Response.json({ ok: false }, { status: 500 });
  }

  // Confirmação automática para o cliente (se falhar, não atrapalha o contato principal)
  const email = String(data.email || '').trim();
  if (/^[^\s@<>"]+@[^\s@<>"]+\.[a-z]{2,}$/i.test(email)) {
    const nome = esc(String(data.nome).trim().split(/\s+/)[0].slice(0, 40));
    const wa = waLink('Olá! Enviei uma mensagem pelo site e gostaria de complementar.');
    await resend.emails
      .send({
        from: process.env.LEADS_CONFIRM_FROM || 'Energia Solar Bahia <site@kriartengenharia.com.br>',
        to: [email],
        replyTo: SITE.email,
        subject: 'Recebemos sua mensagem — Energia Solar Bahia',
        html: `<div style="font-family:Arial,Helvetica,sans-serif;color:#1d2a33;max-width:560px;margin:0 auto;padding:24px">
<p style="font-size:18px;font-weight:bold;margin:0 0 14px">Olá, ${nome}!</p>
<p style="font-size:15px;line-height:1.6;margin:0 0 14px">Recebemos sua mensagem. Um especialista da Energia Solar Bahia vai analisar e retorna em breve pelo WhatsApp ou e-mail que você informou.</p>
<p style="font-size:15px;line-height:1.6;margin:0 0 20px">Para adiantar a simulação, tenha em mãos a sua última conta de luz da Coelba.</p>
<p style="margin:0 0 24px"><a href="${wa}" style="display:inline-block;background:#1fa855;color:#fff;text-decoration:none;font-weight:bold;padding:12px 20px;border-radius:6px">Falar no WhatsApp</a></p>
<p style="font-size:14px;line-height:1.7;color:#4c5a63;margin:0">WhatsApp: ${SITE.whatsapp} · Telefone: ${SITE.phone}<br>E-mail: ${SITE.email}</p>
<p style="font-size:12px;line-height:1.6;color:#6b7780;border-top:1px solid #dde3e6;padding-top:12px;margin-top:20px">${SITE.legalName} · CNPJ ${SITE.cnpj} · ${SITE.address}<br>Você recebeu este e-mail porque enviou uma mensagem pelo site energiasolarbahia.com.br.</p>
</div>`,
      })
      .catch(() => null);
  }
  return Response.json({ ok: true });
}
