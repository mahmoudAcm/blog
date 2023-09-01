'use client';

import { useQuery } from '@tanstack/react-query';
import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Comment from '@/src/components/Comment';
import { useParams } from 'next/navigation';
import chakraStyled from '@/src/utils/styles';

const StyledHeading = chakraStyled(Heading)(({ mode }) => ({
  fontSize: 24 / 16 + 'rem',
  fontWeight: 600,
  lineHeight: 32 / 24,
  color: mode === 'DARK' ? 'black' : undefined
}));

export default function PostDetails() {
  const { id } = useParams();
  const { data: details } = useQuery({
    queryKey: ['post-' + id],
    queryFn: async () => {}
  });

  const { data: comments } = useQuery({
    queryKey: ['comments-' + id],
    queryFn: async () => {}
  });

  return (
    <Box display='grid' gap='32px' gridRow={{ base: 1, lg: 2 }}>
      <Heading
        fontSize='clamp(0.75rem, 0.321rem + 2.143vw, 2.25rem)'
        fontWeight={600}
        lineHeight={20 / 14}
        color='hsl(258, 54%, 52%)'
      >
        Sunday, 1 Jan 2023
      </Heading>
      <Heading fontSize={36 / 16 + 'rem'} fontWeight={700} lineHeight={32 / 36}>
        Grid system for better Design User Interface
      </Heading>
      <Image
        src='/postDetailsImage.svg'
        alt='post image'
        width={778}
        height={426}
        style={{ borderRadius: 2, width: '100%' }}
      />
      <Text>
        Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike.
        Be sure to communicate with your developers the grid structure used when creating the design, so they can
        implement it accordingly.
      </Text>
      <Box bg='hsl(200, 27%, 98%)' py={{ base: '16px', lg: '62px' }} px={{ base: '18px', lg: '64px' }}>
        <StyledHeading>9 Comments</StyledHeading>
        <Box display='grid' gap='16px' mt='32px'>
          <Comment />
          <Comment />
          <Comment />
        </Box>
      </Box>
    </Box>
  );
}
