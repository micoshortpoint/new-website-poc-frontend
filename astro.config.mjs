import { defineConfig } from 'astro/config';

import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";

import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), tailwind()],
  site: 'https://micoshortpoint.github.io',
  base: '/new-website-poc-frontend',
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }), 
});