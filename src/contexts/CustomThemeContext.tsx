'use client';

import { THEMES } from '@/src/constants';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { useCustomTheme } from '@/src/themes';
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';

type Mode = keyof typeof THEMES;

export interface ThemeContextState {
  mode: Mode;
  theme: ReturnType<typeof useCustomTheme>;
  toggleTheme: () => void;
}

export const CustomThemeContext = createContext<ThemeContextState | null>(null);

export function CustomThemeProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<Mode>('LIGHT');
  const theme = useCustomTheme(mode);

  const toggleTheme = () => {
    const newMode = mode === 'DARK' ? 'LIGHT' : 'DARK';
    localStorage.setItem('theme', newMode);
    setMode(newMode);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const mode = mediaQuery.matches ? 'DARK' : 'LIGHT';
    setMode((localStorage.getItem('theme') as Mode) || mode);
    setLoading(false);

    const handleColorSchemeChange = (e: any) => {
      const mode = e.matches ? 'DARK' : 'LIGHT';
      localStorage.setItem('theme', mode);
      setMode(mode);
    };

    mediaQuery.addEventListener('change', handleColorSchemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleColorSchemeChange);
    };
  }, []);

  return (
    <CustomThemeContext.Provider
      value={{
        mode,
        theme,
        toggleTheme
      }}
    >
      <CacheProvider>{!loading && <ChakraProvider theme={theme}>{children}</ChakraProvider>}</CacheProvider>
    </CustomThemeContext.Provider>
  );
}
