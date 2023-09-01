'use client';

import { useQuery } from '@tanstack/react-query';
import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import CommentItem from '@/src/components/Comment';
import { useParams } from 'next/navigation';
import chakraStyled from '@/src/utils/styles';
import { Post, Comment, User } from '@/src/types';

const StyledHeading = chakraStyled(Heading)(({ mode }) => ({
  fontSize: 24 / 16 + 'rem',
  fontWeight: 600,
  lineHeight: 32 / 24,
  color: mode === 'DARK' ? 'black' : undefined
}));

export default function PostDetails({ users }: { users: User[] }) {
  const createdAt = new Date();
  const { id } = useParams();
  const { data: details } = useQuery({
    queryKey: ['post-' + id],
    queryFn: async () => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
      return (await resp.json()) as Post;
    }
  });

  const { data: comments } = useQuery({
    queryKey: ['comments-' + id],
    queryFn: async () => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments');
      return (await resp.json()) as Comment[];
    }
  });

  const user = users?.find(user => user.id === details?.userId);

  return (
    <Box display='grid' gap='32px' gridRow={{ base: 1, lg: 2 }} w='100%'>
      <Heading
        fontSize='clamp(0.75rem, 0.321rem + 2.143vw, 2.25rem)'
        fontWeight={600}
        lineHeight={20 / 14}
        color='hsl(258, 54%, 52%)'
      >
        {user?.name} •{' '}
        {createdAt.toLocaleDateString('en', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </Heading>
      <Heading fontSize='clamp(1.188rem, 0.884rem + 1.518vw, 2.25rem)' fontWeight={700} lineHeight={32 / 36}>
        {details?.title}
      </Heading>
      <Image
        src='/postDetailsImage.svg'
        alt='post image'
        width={778}
        height={426}
        style={{ borderRadius: 2, maxWidth: '100%' }}
      />
      <Text>{details?.body}</Text>
      {comments?.length ? (
        <Box bg='hsl(200, 27%, 98%)' py={{ base: '16px', lg: '62px' }} px={{ base: '18px', lg: '64px' }}>
          <StyledHeading>{comments?.length} Comments</StyledHeading>
          <Box display='grid' gap='16px' mt='32px'>
            {comments?.map(comment => <CommentItem key={comment.id} {...comment} />)}
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
}
