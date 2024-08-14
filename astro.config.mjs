import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  site: 'https://velvetta.us',
  integrations: [sitemap()],
  output: 'server',
  adapter: vercel({
    analytics: true,
  }),
})