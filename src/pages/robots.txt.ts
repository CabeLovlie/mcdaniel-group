import type { APIRoute } from 'astro';
import { site } from '../data/siteContent';

export const GET: APIRoute = () => {
  const body = site.indexingEnabled
    ? `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
