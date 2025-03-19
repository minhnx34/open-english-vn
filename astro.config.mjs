// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://gianguyen1234.github.io/open-english-vn',
  output: 'static',
  integrations: [tailwind()],
});

