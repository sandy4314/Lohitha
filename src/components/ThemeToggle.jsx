// src/components/ThemeToggle.jsx
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // avoid hydration mismatch

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      className="btn btn-sm btn-outline"
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle Dark Mode"
    >
      {currentTheme === 'dark' ? '☀️' : '🌚'}
    </button>
  );
};

export default ThemeToggle;
