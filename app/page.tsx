import type { Metadata } from 'next';
import Link from 'next/link';
import { getItem, POSTS } from '@/lib/content';
import { Blocks, Img } from '@/components/Blocks';
import { Simulator } from '@/components/Simulator';
import { LeadForm } from '@/components/LeadForm';
import { PostCard } from '@/components/PageShell';
import { SITE, RULES, waLink } from '@/lib/site';
import { faqSchema, jsonLd } from '@/lib/schema';

const home = getItem('')!;

export const metadata: Metadata = {
  title: 'Energia Solar Bahia | Empresa de Energia Solar em Salvador',
  description: home.description,
  alternates: { canonical: '/' },
};

const SOLUCOES = [
  { t: 'Residencial', d: 'Casas em Salvador, Lauro de Freitas e região.', h: '/energia-solar-residencial-em-salvador-e-lauro-de-freitas/', img: '/images/2026/03/Alannn-2.webp' },
  { t: 'Empresas', d: 'Comércio, serviços e indústria: menos custo fixo.', h: '/energia-solar-para-empresas-em-salvador-lauro-de-freitas-e-camacari/', img: '/images/2026/03/JM-Grafica-1.webp' },
  { t: 'Condomínios', d: 'Energia para as áreas comuns e taxa menor.', h: '/energia-solar-para-condominios-em-salvador/', img: '/images/2026/03/Cobertura.webp' },
  { t: 'Rural e Agronegócio', d: 'Fazendas, irrigação e bombeamento solar.', h: '/energia-solar-rural/', img: '/images/2026/04/Energia-Solar-Bahia.webp' },
  { t: 'Usinas Solares', d: 'Projeto e construção de usinas em solo.', h: '/usina-solar/', img: '/images/2026/03/Usina-Solar-Itapetinga-1.webp' },
  { t: 'Baterias e Híbridos', d: 'Energia mesmo quando falta luz da Coelba.', h: '/baterias-energia-solar/', img: '/images/2026/03/Kit-off-grid.jpg' },
];

const OBRAS = [
  { img: '/images/2026/03/Usina-Solar-Itapetinga-1.webp', t: 'Usina de 1.013 kWp', l: 'Itapetinga-BA · 112.000 kWh/mês' },
  { img: '/images/2026/03/JM-Grafica-1.webp', t: 'Gráfica', l: 'Salvador-BA · 6.030 kWh/mês' },
  { img: '/images/2026/03/Heloiza-Grazzi.webp', t: 'Residência — 52 placas', l: 'Salvador-BA · 3.900 kWh/mês' },
  { img: '/images/2026/03/Usinas-Solange.webp', t: 'Duas usinas de 75 kW', l: 'Vitória da Conquista-BA · 20.000 kWh/mês' },
];

const PASSOS = [
  { t: 'Análise da conta', d: 'Você envia a conta de luz e fazemos o estudo de economia.' },
  { t: 'Visita e projeto', d: 'Engenheiro avalia telhado, sombras e instalação elétrica.' },
  { t: 'Instalação', d: 'Equipe própria, normas NR-10 e NR-35, materiais contra maresia.' },
  { t: 'Homologação Coelba', d: 'Cuidamos de toda a burocracia até a troca do medidor.' },
];

export default function Home() {
  const seo = [...home.blocks.slice(3, 10), ...home.blocks.slice(16, 56)];
  return (
    <>
      {faqSchema(home.blocks) && <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(home.blocks)!)} />}
      {/* HERO */}
      <section className="relative overflow-hidden bg-deep text-white">
        <Img src="/images/2026/04/Afro-no-telhado-com-placa-solar.webp" alt="" priority sizes="100vw" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/90 to-deep/40" aria-hidden />
        <div className="container-x relative py-16 md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-sun">Empresa de energia solar em Salvador</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Pare de pagar caro na conta da Coelba.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85 md:text-xl">
            Duas formas de economizar com o sol da Bahia. Escolha a sua:
          </p>

          <div className="mt-8 grid max-w-4xl gap-4 md:grid-cols-2">
            <Link href="/quanto-custa-energia-solar/" className="group rounded-3xl bg-white p-6 text-ink shadow-xl transition hover:-translate-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-ember">Quero meu próprio sistema</p>
              <p className="mt-2 font-display text-2xl font-extrabold text-deep">Economize até 95% na conta</p>
              <ul className="mt-3 space-y-1 text-[15px] text-muted">
                <li>✓ Parcela do financiamento no lugar da conta</li>
                <li>✓ Retorno em 3 a 5 anos</li>
                <li>✓ Para contas a partir de R$ {RULES.contaMinimaSistema}</li>
              </ul>
              <span className="mt-4 inline-block font-semibold text-deep group-hover:text-ember">Ver preços →</span>
            </Link>
            <Link href="/energia-solar-por-assinatura/" className="group rounded-3xl border-2 border-sun bg-deep-2/80 p-6 shadow-xl backdrop-blur transition hover:-translate-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-sun">Quero desconto sem instalar nada</p>
              <p className="mt-2 font-display text-2xl font-extrabold">Até {RULES.descontoAssinatura * 100}% de desconto</p>
              <ul className="mt-3 space-y-1 text-[15px] text-white/80">
                <li>✓ Sem placas, sem obra, sem investimento</li>
                <li>✓ Ideal para apartamento e comércio</li>
                <li>✓ Para contas a partir de R$ {RULES.contaMinimaAssinatura}</li>
              </ul>
              <span className="mt-4 inline-block font-semibold text-sun">Como funciona →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <div className="border-b border-line bg-sand">
        <div className="container-x grid grid-cols-2 gap-6 py-8 text-center md:grid-cols-4">
          {[
            [SITE.projects, 'projetos executados'],
            [`Desde ${SITE.since}`, 'em Salvador'],
            ['1 MW', 'maior usina construída'],
            ['BA · DF · RJ · SP', 'estados atendidos'],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-2xl font-extrabold text-deep md:text-3xl">{n}</p>
              <p className="text-sm text-muted">{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SIMULADOR */}
      <section className="container-x py-14 md:py-20">
        <Simulator />
      </section>

      {/* SOLUÇÕES */}
      <section className="bg-sand py-14 md:py-20">
        <div className="container-x">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Soluções</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-extrabold text-deep md:text-4xl">Energia solar para cada tipo de imóvel</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUCOES.map((s) => (
              <Link key={s.h} href={s.h} className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                <Img src={s.img} alt={s.t} sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="aspect-[16/10] w-full object-cover" />
                <div className="p-5">
                  <p className="font-display text-xl font-bold text-deep">{s.t}</p>
                  <p className="mt-1 text-[15px] text-muted">{s.d}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-ember">Saiba mais →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OBRAS */}
      <section className="container-x py-14 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Obras realizadas</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-deep md:text-4xl">Da residência à usina de 1 MW</h2>
          </div>
          <Link href="/servicos-executados/" className="btn btn-ghost text-deep">Ver todas as obras</Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OBRAS.map((o) => (
            <figure key={o.img} className="overflow-hidden rounded-2xl border border-line">
              <Img src={o.img} alt={`${o.t} — ${o.l}`} sizes="(min-width: 1024px) 290px, 50vw" className="aspect-square w-full object-cover" />
              <figcaption className="p-4">
                <p className="font-display font-bold text-deep">{o.t}</p>
                <p className="text-sm text-muted">{o.l}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* PASSOS */}
      <section className="bg-deep py-14 text-white md:py-20">
        <div className="container-x">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun">Como funciona</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Do estudo à energia gerada</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-4">
            {PASSOS.map((p, i) => (
              <li key={p.t} className="rounded-2xl bg-white/5 p-5">
                <span className="font-display text-4xl font-extrabold text-sun">{i + 1}</span>
                <p className="mt-2 font-display text-lg font-bold">{p.t}</p>
                <p className="mt-1 text-[15px] text-white/75">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTEÚDO (SEO) */}
      <section className="container-x py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold text-deep md:text-4xl">Guia completo: energia solar em Salvador</h2>
          <div className="mt-8">
            <Blocks blocks={seo} simulatorShown />
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="bg-sand py-14 md:py-20">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-extrabold text-deep md:text-4xl">Últimos artigos</h2>
            <Link href="/blog/" className="btn btn-ghost text-deep">Ver o blog</Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {POSTS.slice(0, 3).map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="container-x py-14 md:py-20">
        <div className="grid gap-10 rounded-3xl border border-line p-6 md:p-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-deep">Receba seu estudo de economia gratuito</h2>
            <p className="mt-3 text-muted">Envie seus dados e a nossa engenharia responde com a solução ideal para o seu consumo.</p>
            <ul className="mt-6 space-y-2 text-[15px]">
              <li><a className="font-semibold text-deep hover:underline" href={waLink()} target="_blank" rel="noopener">WhatsApp {SITE.whatsapp}</a></li>
              <li><a className="hover:underline" href={SITE.phoneHref}>Telefone {SITE.phone}</a></li>
              <li><a className="hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li className="text-muted">{SITE.hours}</li>
            </ul>
          </div>
          <LeadForm origem="Home — formulário final" />
        </div>
      </section>
    </>
  );
}
