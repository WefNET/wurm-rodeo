// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://wurm.rodeo',

  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
    })
  ],

  trailingSlash: 'never',

  vite: {
    server: {
      watch: { usePolling: true },
    },
  },

  adapter: vercel(),
});