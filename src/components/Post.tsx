import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { ExternalLinkIcon } from '@/src/icons/ExternalLinkIcon';

export default function Post() {
  const createdAt = new Date();
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
        Alec Whitten •{' '}
        {createdAt.toLocaleDateString('en', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </Heading>
      <Box display='flex' justifyContent='space-between'>
        <Heading fontSize={24 / 16 + 'rem'} fontWeight={600} lineHeight={32 / 24}>
          Bill Walsh leadership lessons
        </Heading>
        <ExternalLinkIcon mt='4px' />
      </Box>
      <Text fontSize='1rem' lineHeight={24 / 16} color='hsl(220, 13%, 46%)'>
        Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?
      </Text>
    </Box>
  );
}
