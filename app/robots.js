const BASE = 'https://eduardamouraadvogados.adv.br';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: BASE + '/sitemap.xml',
  };
}
