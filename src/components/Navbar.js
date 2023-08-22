import React from 'react';
import { useUserType } from '../UserTypeContext';
import { Link } from 'react-router-dom';
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
  const { userType } = useUserType();

  const NAV_ITEMS = userType === 'user' ?  [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Locations',
      href: '/locations',
    },
    {
      label: 'Your Application',
      href: '/application',
    },
    {
      label: 'Organizations',
      href: '/organizations',
    }
  ] : [
    {
      label: 'AddLocation',
      href: '/addlocation',
    },
    {
      label: 'Messages',
      href: '/messages',
    },
    {
      label: 'Reservations',
      href: '/reservations',
    },
  ];



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
            <DesktopNav navItems={NAV_ITEMS} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button 
            as={Link} 
            fontSize={'sm'} 
            fontWeight={600} 
            variant={'solid'} 
            colorScheme="gray" 
            to="/signin"> 
            Log In
          </Button>
          <Button 
            as={Link} 
            fontSize={'sm'} 
            fontWeight={600} 
            variant={'solid'} 
            colorScheme="gray" 
            to="/signup"> 
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={NAV_ITEMS} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ navItems }) => {
  return (
    <Stack direction={'row'} spacing={4}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Box
            as={Link} 
            p={2}
            to={navItem.href} 
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

const MobileNav = ({ navItems }) => {
  return (
    <Stack bg="#458471" p={4} display={{ md: 'none' }}>
      {navItems.map((navItem) => (
        <Box key={navItem.label} py={2} as={Link} to={navItem.href} color="white">  // Update here
          {navItem.label}
        </Box>
      ))}
    </Stack>
  );
};
