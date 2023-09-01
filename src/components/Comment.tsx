'use client';

import { Avatar, Box, Heading, Text } from '@chakra-ui/react';
import chakraStyled from '@/src/utils/styles';

const StyledText = chakraStyled(Text)(({ mode }) => ({
  fontSize: 24 / 16 + 'rem',
  fontWeight: 600,
  lineHeight: 32 / 24,
  color: mode === 'DARK' ? 'black' : undefined
}));

export default function Comment() {
  return (
    <Box display='flex' gap='8px'>
      <Avatar name='JK' />
      <Box>
        <Heading display='flex' alignItems='center'>
          <StyledText>J.K. Rowling</StyledText>
          <StyledText color='hsl(258, 54%, 52%)' ml='8px'>
            @Rowling
          </StyledText>
        </Heading>
        <Text fontSize='16px' color='hsl(221, 13%, 46%)' mt='8px'>
          Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the
          number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to
          prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally
          flexible enough for most design needs.
        </Text>
      </Box>
    </Box>
  );
}
