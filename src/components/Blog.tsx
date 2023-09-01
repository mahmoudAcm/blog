'use client';

import { useQuery } from '@tanstack/react-query';
import { Post, User } from '@/src/types';
import { Box, Button, Heading } from '@chakra-ui/react';
import PostItem from '@/src/components/Post';
import { POST_PER_PAGE } from '@/src/constants';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function Blog({ posts, users }: { posts: Post[]; users: User[] }) {
  const [page, setPage] = useState(1);
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => posts,
    initialData: posts
  });

  const pages = Math.ceil(posts.length / POST_PER_PAGE);

  const pagePosts = posts.slice((page - 1) * POST_PER_PAGE, page * POST_PER_PAGE);

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
        {pagePosts.map(post => (
          <PostItem key={post.id} {...post} users={users} />
        ))}
      </Box>
      <Box display='flex' justifyContent='space-between' mt='30px'>
        <Button
          isDisabled={page === 1}
          leftIcon={<ArrowLeftIcon />}
          variant='solid'
          onClick={() => setPage(page => Math.max(page - 1, 1))}
        >
          Previous
        </Button>
        {page}
        <Button
          rightIcon={<ArrowRightIcon />}
          variant='solid'
          onClick={() => setPage(page => Math.min(page + 1, pages))}
          isDisabled={page === pages}
        >
          Next
        </Button>
      </Box>
    </>
  );
}
