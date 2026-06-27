const BASE = 'https://eduardamouraadvogados.adv.br';

export default function sitemap() {
  const now = new Date();
  const core = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/sobre', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/areas', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/contato', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/artigos', priority: 0.8, changeFrequency: 'weekly' },
  ];
  const cities = [
    'advogado-trabalhista-lauro-de-freitas',
    'advogado-trabalhista-camacari',
    'advogado-trabalhista-dias-davila',
    'advogado-trabalhista-simoes-filho',
    'advogado-trabalhista-mata-de-sao-joao',
  ].map((s) => ({ path: '/' + s, priority: 0.9, changeFrequency: 'monthly' }));
  const articles = [
    'artigo-quanto-custa-advogado-trabalhista',
    'artigo-justa-causa',
    'artigo-sacar-fgts',
    'artigo-pejotizacao',
    'artigo-estabilidade-gestante',
    'artigo-horas-extras',
    'artigo-assedio-moral',
    'artigo-insalubridade-periculosidade',
    'artigo-empregada-domestica',
    'artigo-seguro-desemprego',
    'artigo-rescisao-indireta',
    'artigo-acidente-trabalho',
    'artigo-equiparacao-salarial',
    'artigo-trabalhista-para-empresas',
    'artigo-advogado-trabalhista-online',
    'artigo-direitos-do-bancario',
    'artigo-verbas-rescisorias',
    'artigo-trabalhador-pcd',
  ].map((s) => ({ path: '/' + s, priority: 0.7, changeFrequency: 'monthly' }));

  return [...core, ...cities, ...articles].map((r) => ({
    url: BASE + r.path,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
