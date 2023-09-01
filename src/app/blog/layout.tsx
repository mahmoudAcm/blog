'use client';

import { ReactNode } from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import chakraStyled from '@/src/utils/styles';
import { usePathname } from 'next/navigation';

const MainHeading = chakraStyled(Heading)(theme => ({
  borderColor: theme.mode === 'DARK' ? 'white !important' : 'hsla(0, 0%, 0%, 34%) !important'
}));

export default function BlogLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === '/blog/create') return children;

  return (
    <>
      <Box mt={{ base: '22px', lg: '50px' }}>
        <Container maxW={1256} mx='auto'>
          <MainHeading
            fontSize='clamp(3.438rem, 0.066rem + 16.857vw, 15.238rem)'
            lineHeight={295 / 243.8}
            fontWeight={700}
            textAlign='center'
            borderTop='1px solid transparent'
            borderBottom='1px solid transparent'
          >
            THE BLOG
          </MainHeading>
        </Container>
      </Box>
      <Container maxW={{ md: 1256 }} px={{ base: '32px', md: '16px' }} mx='auto'>
        {children}
      </Container>
    </>
  );
}
