'use client';

import { Box, Container, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box as='footer' py='30px'>
      <Container maxW={1248} mx='auto'>
        <Text as='span'>© 2023</Text>
      </Container>
    </Box>
  );
}
