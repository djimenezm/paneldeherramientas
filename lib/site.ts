const productionUrl = 'https://www.paneldeherramientas.es';

export const siteConfig = {
  name: 'Panel de Herramientas',
  shortName: 'Panel',
  title: 'Inventario de aplicaciones para freelancers y autonomos',
  description:
    'Reune en una sola web todas las calculadoras y herramientas publicas del ecosistema: facturacion, presupuestos, mantenimiento web y landing pages.',
  locale: 'es_ES',
  keywords: [
    'panel de herramientas freelance',
    'inventario de apps para autonomos',
    'herramientas para presupuestar',
    'calculadoras freelance espana',
    'apps para autonomos y freelancers',
    'hub de herramientas digitales',
  ],
  url: process.env.NODE_ENV === 'development' ? 'http://localhost:3005' : productionUrl,
  ownerName: 'Equipo de Panel de Herramientas',
  contactEmail: null,
  country: 'Espana',
  themeColor: '#0f766e',
  backgroundColor: '#f4faf8',
} as const;

export function getSiteUrl() {
  return new URL(siteConfig.url);
}
