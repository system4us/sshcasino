import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://system4us.github.io',
  base: process.env.GITHUB_ACTIONS ? '/sshcasino' : '/',
  integrations: [tailwind()],
});
