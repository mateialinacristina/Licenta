import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function SplitScreen() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="calc(100vh - 120px)"
    >
      <Stack direction={{ base: 'column', md: 'row' }} spacing={8}>
        <Flex p={4} flex={1} align={'center'} justify={'center'} flexShrink={1}>
          <Stack spacing={4} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}
              >
                Free Housing
              </Text>
              <br />
              <Text color={'blue.400'} as={'span'}>
                Sprijin in timpul tratamentului
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Dacă sunteți pacient oncologic și căutați cazare gratuită în
              timpul tratamentului în orașele din România, suntem aici pentru
              voi. Găsiți și rezervați cu ușurință locuri de cazare, iar
              confidențialitatea datelor dumneavoastră este asigurată. Împreună
              către vindecare!
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                as={Link}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                to="/signup"
              >
                Inscrie-te
              </Button>
            </Stack>
            <Text fontSize={{ base: 'md', lg: 'lg' }} mt={4} color={'black'}>
              Dorești să-ți înregistrezi organizația pentru a oferi cazare
              gratuită?{' '}
              <Text
                as={Link}
                color={'black'}
                to="/orgsignup"
                textDecoration="underline"
              >
                
                Începe aici
              </Text>
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1} align="center" justify="center" flexShrink={1}>
          <Image
            alt={'Home Image'}
            objectFit={'cover'}
            maxH={{ base: '30vh', md: '50vh' }}
            src={
              'https://economictimes.indiatimes.com/thumb/msid-83033066,width-1200,height-900,resizemode-4,imgsize-202355/home-loan-above-rs-30-lakh-to-rs-75-lakh.jpg?from=mdr'
            }
          />
        </Flex>
      </Stack>
    </Flex>
  );
}
