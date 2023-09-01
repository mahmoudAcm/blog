'use client';

import NextLink from 'next/link';
import {
  Box,
  Button,
  CloseButton,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  IconButton,
  Link,
  styled,
  useBreakpoint,
  useBreakpointValue,
  useMediaQuery
} from '@chakra-ui/react';
import ThemeSwitcher from '@/src/components/ThemeSwitcher';
import chakraStyled from '@/src/utils/styles';
import { MenuIcon } from '@/src/icons/MenuIcon';
import { useEffect, useState } from 'react';

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
  },
  css: {
    '&.mobile': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      '& ul': {
        marginTop: 10,
        flexDirection: 'column'
      },
      '& .actions': {
        width: '100%',
        margin: '16px 0px 0px',
        flexDirection: 'column'
      }
    }
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

const StyledMenuButton = chakraStyled(IconButton)(() => ({}));

export default function Header() {
  const [isLargerThan834, isDesktop] = useMediaQuery(['(min-width: 834px)', '(hover: none)']);
  const [open, setOpen] = useState(false);

  //close menu if the device doesn't support hover or device width is Larger Than 834 px
  useEffect(() => {
    if (isLargerThan834 || isDesktop) setOpen(false);
  }, [isLargerThan834, isDesktop]);

  const nav = (type?: 'mobile') => (
    <Nav alignItems='center' className={type ? type + '' : undefined}>
      <Box as='ul' display='flex' gap={30} fontWeight={400} listStyleType='none'>
        <Item>
          <Link as={NextLink} href='/blog'>
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
      <Box display='flex' gap='20px' ml='20px' alignItems='center' className='actions'>
        <Button variant='contained' as={NextLink} href='/blog/create' width={{ base: '100%', md: 'fit-content' }}>
          New blog
        </Button>
        <ThemeSwitcher />
      </Box>
    </Nav>
  );

  return (
    <Box as='header' py={{ base: '20px', lg: '10px' }} mt={{ base: '0px', lg: '30px' }}>
      <Container maxW={1248} mx='auto'>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <MainHeading fontWeight={600} lineHeight={24 / 20}>
            Your name
          </MainHeading>
          {nav()}
          <StyledMenuButton
            display={{ md: 'none' }}
            aria-label='Main menu'
            icon={<MenuIcon />}
            onClick={() => setOpen(true)}
          />
        </Box>
      </Container>
      <Drawer isOpen={open} onClose={() => setOpen(false)} size='xs'>
        <DrawerOverlay />
        <DrawerContent bg='bg'>
          <DrawerHeader borderBottomWidth='1px' display='flex' alignItems='center'>
            <MainHeading fontWeight={600} lineHeight={24 / 20}>
              Your name
            </MainHeading>
            <CloseButton onClick={() => setOpen(false)} ml='auto' mr='-8px' />
          </DrawerHeader>
          <DrawerBody>{nav('mobile')}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
