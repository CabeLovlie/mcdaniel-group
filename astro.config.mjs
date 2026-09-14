import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.mcdanielgrp.com',
  // Emit /contact.html and serve it at /contact so URLs match the canonical tags
  // on Vercel and Netlify alike.
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
