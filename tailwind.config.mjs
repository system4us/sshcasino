/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#06080a',
        vault: '#0b0f14',
        card: '#11161f',
        neon: {
          green: '#00ff66',
          gold: '#eab308',
          red: '#ff2a54',
          cyan: '#00f0ff',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        display: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'neon-green': '0 0 20px rgba(0, 255, 102, 0.25)',
        'neon-gold': '0 0 25px rgba(234, 179, 8, 0.3)',
        'neon-red': '0 0 25px rgba(255, 42, 84, 0.35)',
      }
    },
  },
  plugins: [],
};
