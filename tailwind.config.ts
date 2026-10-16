import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: {
      navy: { 950: 'rgb(var(--color-navy-950) / <alpha-value>)', 900: 'rgb(var(--color-navy-900) / <alpha-value>)', 800: 'rgb(var(--color-navy-800) / <alpha-value>)' },
      brand: { 400: '#60A5FA', 500: '#3B82F6', 600: '#2563EB', 700: '#1D4ED8' },
      accent: '#22D3EE',
      ink: 'rgb(var(--color-ink) / <alpha-value>)',
      muted: 'rgb(var(--color-muted) / <alpha-value>)',
      line: 'rgb(var(--color-line) / <alpha-value>)',
    },
    fontFamily: { sans: ['var(--font-inter)', 'system-ui', 'sans-serif'], display: ['var(--font-display)', 'var(--font-inter)', 'system-ui', 'sans-serif'] },
    boxShadow: { card: 'var(--shadow-card)' },
  }},
  plugins: [],
};
export default config;
