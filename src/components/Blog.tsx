'use client';

import { useQuery } from '@tanstack/react-query';
import { Post, User } from '@/src/types';
import { Box, Button, Heading } from '@chakra-ui/react';
import PostItem from '@/src/components/Post';
import { POST_PER_PAGE } from '@/src/constants';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

export default function Blog({ posts, users }: { posts: Post[]; users: User[] }) {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => posts,
    initialData: posts
  });

  const pages = Math.ceil(posts.length / POST_PER_PAGE);

  console.log(pages);

  return (
    <>
      <Heading fontSize={24 / 16 + 'rem'} lineHeight={32 / 24} mt='30px' mb='32px' fontWeight={600}>
        All blog posts
      </Heading>
      <Box
        display='grid'
        gridTemplateColumns={{ md: 'repeat(2, 1fr)', xl: 'repeat(auto-fit, minmax(320px, 384px))' }}
        gap='32px'
        justifyContent={{ md: 'space-between' }}
      >
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </Box>
      <Box display='flex' justifyContent='space-between' mt='30px'>
        <Button leftIcon={<ArrowLeftIcon />} variant='solid'>
          Previous
        </Button>
        <Button rightIcon={<ArrowRightIcon />} variant='solid'>
          Next
        </Button>
      </Box>
    </>
  );
}
