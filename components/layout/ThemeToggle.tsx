'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  label: string;
  switchToLight: string;
  switchToDark: string;
}
type Theme = 'light' | 'dark';

export function ThemeToggle({ label, switchToLight, switchToDark }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const stored = window.localStorage.getItem('portfolio-theme');
    const initial: Theme = stored === 'light' || stored === 'dark'
      ? stored
      : window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.classList.toggle('light', initial === 'light');
    setTheme(initial);
  }, []);

  function toggleTheme() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('light', next === 'light');
    window.localStorage.setItem('portfolio-theme', next);
    setTheme(next);
  }

  const isLight = theme === 'light';
  return (
    <button type="button" onClick={toggleTheme} aria-label={isLight ? switchToDark : switchToLight} title={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-brand-500/70">
      {isLight ? <Moon className="h-4 w-4" aria-hidden="true" /> : <Sun className="h-4 w-4" aria-hidden="true" />}
    </button>
  );
}
