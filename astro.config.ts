import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'

import { SITE_BASE } from './src/const/url'

// https://astro.build/config
export default defineConfig({
	prefetch: true,
  site: SITE_BASE,
  integrations: [sitemap()],
  output: 'server',
  adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	})
})