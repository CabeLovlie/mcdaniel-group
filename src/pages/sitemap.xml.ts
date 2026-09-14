import type { APIRoute } from 'astro';
import { services, site } from '../data/siteContent';

export const GET: APIRoute = () => {
  const paths = ['/', '/about', '/contact', '/privacy', '/disclaimer', ...services.map((service) => `/services/${service.slug}`)];
  const urls = paths.map((path) => `  <url><loc>${new URL(path, site.url).href}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
