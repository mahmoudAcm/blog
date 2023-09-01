'use client';

import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { ExternalLinkIcon } from '@/src/icons/ExternalLinkIcon';
import { Post as PostProps } from '@/src/types';
import chakraStyled from '@/src/utils/styles';
import { useRouter } from 'next/navigation';

const StyledExternalLinkIcon = chakraStyled(ExternalLinkIcon)(({ mode }) => ({
  cursor: 'pointer',
  transition: 'transform 250ms',
  _hover: {
    transform: 'translate(5px, -5px)'
  },
  css: {
    '& path': {
      stroke: mode === 'DARK' ? 'white' : undefined
    }
  }
}));

export default function Post(props: PostProps) {
  const router = useRouter();
  const createdAt = new Date();

  const user = props.users?.find(user => user.id === props.userId);

  return (
    <Box display='grid' gap='12px'>
      <Image
        src='/postImage.svg'
        alt='post image'
        width={384}
        height={240}
        style={{ borderRadius: 2, width: '100%' }}
      />
      <Heading color='hsl(258, 54%, 52%)' fontSize={14 / 16 + 'rem'} fontWeight={600} lineHeight={20 / 14} mt='20px'>
        {user?.name} •{' '}
        {createdAt.toLocaleDateString('en', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </Heading>
      <Box display='flex' justifyContent='space-between'>
        <Heading fontSize={24 / 16 + 'rem'} fontWeight={600} lineHeight={32 / 24}>
          {props.title}
        </Heading>

        <span
          onClick={() => {
            router.push('/posts/' + props.id);
          }}
        >
          <StyledExternalLinkIcon mt='4px' />
        </span>
      </Box>
      <Text fontSize='1rem' lineHeight={24 / 16} color='hsl(220, 13%, 46%)'>
        {props.body}
      </Text>
    </Box>
  );
}
