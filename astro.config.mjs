import { defineConfig } from 'astro/config';

import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), tailwind()],
  site: 'https://micoshortpoint.github.io',
  base: '/new-website-poc-frontend',
});