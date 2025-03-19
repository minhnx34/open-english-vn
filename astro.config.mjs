// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://gianguyen1234.github.io',
  base: '/open-english-vn',
  output: 'static',
  integrations: [tailwind()],
});
