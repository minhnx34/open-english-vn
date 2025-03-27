import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://gianguyen1234.github.io/open-english-vn',
  base: '/open-english-vn',  // ✅ Fixes asset paths for GitHub Pages
  output: 'static',
  outDir: 'dist',
  integrations: [tailwind()],
});
