'use client';

import { ReactNode } from 'react';
import { Box, Container } from '@chakra-ui/react';

export default function PostDetailsLayout({ children }: { children: ReactNode }) {
  return (
    <Container maxW={1184} mx='auto'>
      <Box
        display='grid'
        gridTemplateColumns={{ lg: '342px 1fr' }}
        gridTemplateRows={{ base: 'auto 1fr', lg: '1fr' }}
        mt={{ base: '20px', lg: '52px' }}
        gap='32px'
        alignItems='flex-start'
      >
        {children}
      </Box>
    </Container>
  );
}
