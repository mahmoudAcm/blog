'use client';

import { Avatar, Box, Heading, Text } from '@chakra-ui/react';
import chakraStyled from '@/src/utils/styles';
import { Comment as CommentProps } from '@/src/types';

const StyledText = chakraStyled(Text)(({ mode }) => ({
  fontSize: 24 / 16 + 'rem',
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
            @Rowling
          </StyledText>
        </Heading>
        <Text fontSize='16px' color='hsl(221, 13%, 46%)' mt='8px'>
          {props.body}
        </Text>
      </Box>
    </Box>
  );
}
