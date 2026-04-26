import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

const routes = [
  '/',
  '/herramientas-para-freelancers',
  '/recursos-para-autonomos',
  '/mejores-herramientas-para-presupuestos-freelance',
  '/mejores-herramientas-para-mantenimiento-web',
  '/mejores-herramientas-para-landing-pages',
  '/aviso-legal',
  '/privacidad',
  '/cookies',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified,
  }));
}
