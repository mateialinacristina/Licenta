import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg="#458471"
        color="white"
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            fontSize={'xl'}
            color="white">
            Free Housing
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button as={'a'} fontSize={'sm'} fontWeight={600} variant={'solid'} colorScheme="gray" href={'#'}>
            Log In
          </Button>
          <Button as={'a'} fontSize={'sm'} fontWeight={600} variant={'solid'} colorScheme="gray" href={'#'}>
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Box
            as="a"
            p={2}
            href={navItem.href}
            fontSize={'m'}
            fontWeight={500}
            color="white"
            _hover={{
              textDecoration: 'none',
              color: 'gray.200',
            }}>
            {navItem.label}
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg="#458471" p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} py={2} as="a" href={navItem.href} color="white">
          {navItem.label}
        </Box>
      ))}
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '#',
  },{
    label: 'Locations',
    href: '#',
  },
  {
    label: 'Your Application',
    href: '#',
  },
  {
    label: 'Organizations',
    href: '#',
  }
];