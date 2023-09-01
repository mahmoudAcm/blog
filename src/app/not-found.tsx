'use client';

import NextLink from 'next/link';
import { Box, Container, Link, Tag } from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Container mx='auto'>
      <Box display='grid' placeItems='center' height='50vh'>
        <Tag>
          Pages is under construction{' '}
          <Link ml='5px' color='blue.300' as={NextLink} href='/blog'>
            working page
          </Link>
        </Tag>
      </Box>
    </Container>
  );
}
