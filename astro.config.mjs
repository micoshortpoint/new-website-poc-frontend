import { defineConfig } from 'astro/config';

import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";

import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), tailwind()],
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }), 
});