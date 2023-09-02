'use client';

import { Avatar, Box, Heading, Text } from '@chakra-ui/react';
import chakraStyled from '@/src/utils/styles';
import { Comment as CommentProps } from '@/src/types';

const StyledText = chakraStyled(Text)(({ mode }) => ({
  fontSize: 'clamp(0.938rem, 0.777rem + 0.804vw, 1.5rem)',
  fontWeight: 600,
  lineHeight: 32 / 24,
  color: mode === 'DARK' ? 'black' : undefined
}));

export default function Comment(props: CommentProps) {
  return (
    <Box display='flex' gap='8px'>
      <Avatar name={props.email} />
      <Box>
        <Heading display='flex' alignItems='center'>
          <StyledText>{props.name}</StyledText>
          <StyledText color='hsl(258, 54%, 52%)' ml='8px'>
            {props.email?.replace(/.*@/, '@') ?? '@Rowling'}
          </StyledText>
        </Heading>
        <Text fontSize='clamp(0.813rem, 0.759rem + 0.268vw, 1rem)' color='hsl(221, 13%, 46%)' mt='8px'>
          {props.body}
        </Text>
      </Box>
    </Box>
  );
}
