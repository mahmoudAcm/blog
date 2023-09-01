'use client';

import NextLink from 'next/link';
import { Box, Container, Heading, IconButton, Link } from '@chakra-ui/react';
import ThemeSwitcher from '@/src/components/ThemeSwitcher';
import chakraStyled from '@/src/utils/styles';
import { MenuIcon } from '@/src/icons/MenuIcon';

const MainHeading = chakraStyled(Heading)(() => ({
  fontSize: {
    base: 18 / 16 + 'rem',
    lg: 20 / 16 + 'rem'
  }
}));

const Nav = chakraStyled('nav')(() => ({
  display: {
    base: 'none',
    md: 'flex'
  }
}));

const Item = chakraStyled('li')(({ theme }) => ({
  fontSize: {
    base: 18 / 16 + 'rem',
    lg: 20 / 16 + 'rem'
  },
  lineHeight: {
    base: 24 / 18,
    lg: 24 / 20
  }
}));

export default function Header() {
  return (
    <Box as='header' py={{ base: '20px', lg: '10px' }} mt={{ base: '0px', lg: '30px' }}>
      <Container maxW={1248} mx='auto'>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <MainHeading fontWeight={600} lineHeight={24 / 20}>
            Your name
          </MainHeading>
          <Nav alignItems='center'>
            <Box as='ul' display='flex' gap={30} fontWeight={400} listStyleType='none'>
              <Item>
                <Link as={NextLink} href='/Blog'>
                  Blog
                </Link>
              </Item>
              <Item>
                <Link as={NextLink} href='/projects'>
                  Projects
                </Link>
              </Item>
              <Item>
                <Link as={NextLink} href='/about'>
                  About
                </Link>
              </Item>
              <Item>
                <Link as={NextLink} href='/newsletter'>
                  Newsletter
                </Link>
              </Item>
            </Box>
            <ThemeSwitcher />
          </Nav>
          <IconButton display={{ md: 'none' }} aria-label='Main menu' icon={<MenuIcon />} />
        </Box>
      </Container>
    </Box>
  );
}
