'use client';

import { ReactNode } from 'react';
import { Box, Heading } from '@chakra-ui/react';

export default function RecentBlogsLayout({ children }: { children: ReactNode }) {
  return (
    <Box mt='64px' display='grid' gap='32px' gridRow={2}>
      <Heading>Recent Posts</Heading>
      {children}
    </Box>
  );
}
