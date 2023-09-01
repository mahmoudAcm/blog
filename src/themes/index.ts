import { THEMES } from '@/src/constants';
import { Inter } from 'next/font/google';
import { defineStyleConfig, extendTheme, ThemeOverride } from '@chakra-ui/react';

const interFont = Inter({
  weight: ['400', '500', '600', '800', '900'],
  subsets: ['latin', 'greek'],
  display: 'swap'
});

const Button = defineStyleConfig({
  defaultProps: {
    variant: 'default'
  },
  variants: {
    default: {
      fontSize: '1rem',
      fontWeight: 500,
      height: 'auto',
      lineHeight: 24 / 16,
      padding: '12px 20px',
      rounded: '8px',
      border: '1px solid currentColor',
      _disabled: {
        _hover: {
          background: 'currentColor'
        }
      }
    },
    contained: {
      fontSize: '1rem',
      fontWeight: 500,
      height: 'auto',
      lineHeight: 24 / 16,
      padding: '12px 20px',
      bg: 'hsl(259, 63%, 59%)',
      color: 'white',
      rounded: '8px',
      _disabled: {
        _hover: {
          background: 'hsl(259, 63%, 59%) !important'
        }
      }
    }
  }
});
const baseOptions: ThemeOverride = {
  fonts: {
    heading: interFont.style.fontFamily,
    body: interFont.style.fontFamily
  },
  breakpoints: {
    base: 0,
    sm: '600px',
    md: '834px',
    lg: '1200px',
    xl: '1536px'
  },
  components: {
    Button
  }
};

const themeOptions: Record<keyof typeof THEMES, ThemeOverride> = {
  [THEMES.LIGHT]: {
    styles: {
      global: {
        body: {
          color: 'hsl(0, 0%, 10%)'
        }
      }
    },
    components: {
      Heading: {
        baseStyle: {
          color: 'hsl(0, 0%, 10%)'
        }
      }
    }
  },
  [THEMES.DARK]: {
    styles: {
      global: {
        body: {
          bg: 'hsl(229, 55%, 8%)',
          color: 'white'
        }
      }
    },
    components: {
      Heading: {
        baseStyle: {
          color: 'white'
        }
      }
    }
  }
};

export const useCustomTheme = (mode: keyof typeof THEMES) => {
  let theme = themeOptions[mode];

  if (!theme) {
    console.warn('unknown theme was given');
    theme = themeOptions[THEMES.LIGHT];
  }

  return extendTheme(baseOptions, theme) as typeof theme;
};
