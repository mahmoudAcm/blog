'use client';

import { Box, Container, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box as='footer' py='30px'>
      <Container maxW={{ md: 1256 }} px={{ base: '32px', md: '16px' }} mx='auto'>
        <Text as='span'>© 2023</Text>
      </Container>
    </Box>
  );
}
