import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sshcasino.system4us.com',
  base: '/',
  integrations: [tailwind()],
});
