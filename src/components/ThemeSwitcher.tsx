import { Box } from '@chakra-ui/react';
import { SunIcon } from '@/src/icons/SunIcon';
import { MoonIcon } from '@/src/icons/MoonIcon';
import useThemeContext from '@/src/hooks/useThemeContext';

export default function ThemeSwitcher() {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      py='8px'
      px='16px'
      rounded='29px'
      bg={mode === 'DARK' ? 'white' : '#090D1F'}
      w='96px'
      ml='20px'
      _after={{
        content: '" "',
        position: 'absolute',
        width: '24px',
        height: '24px',
        rounded: '50%',
        bg: mode === 'LIGHT' ? 'white' : '#090D1F',
        transition: 'transform 200ms, background 150ms',
        transform: mode == 'DARK' ? 'translateX(0px)' : 'translateX(calc(16px + 24px))'
      }}
      tabIndex={0}
      onKeyDown={evt => {
        if (evt.key === 'Enter') toggleTheme();
      }}
    >
      <SunIcon cursor='pointer' onClick={toggleTheme} />
      <MoonIcon cursor='pointer' onClick={toggleTheme} />
    </Box>
  );
}
