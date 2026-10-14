import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 950: '#0B1120', 900: '#111827', 800: '#172033' },
        brand: { 400: '#60A5FA', 500: '#3B82F6', 600: '#2563EB', 700: '#1D4ED8' },
        accent: '#22D3EE',
        ink: '#F8FAFC',
        muted: '#94A3B8',
        line: '#263449',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 24px 48px -28px rgba(0,0,0,0.65)',
      },
    },
  },
  plugins: [],
};

export default config;
