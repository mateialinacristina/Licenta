import React from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';

const organizations = [
  {
    name: "Emaus Bucuresti",
    phoneNumber: "0753 551 526",
    email: " emausbucuresti@gmail.com",
    image: "https://images.unsplash.com/photo-1628133287836-40bd5453bed1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Emaus Cluj",
    phoneNumber: " 0785 423 785",
    email: "centruleumaus@gmail.com",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "SusInima",
    phoneNumber: "+40 751 138 783",
    email: "contact@susinima.eu",
    image: "https://images.unsplash.com/photo-1593398395073-ae53c3870037?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdXNpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "MagicHome",
    phoneNumber: "0724 003 696",
    email: "contact@asociatiamagic.ro",
    image: "https://images.unsplash.com/photo-1628780678694-e3d299908f49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGhvdXNpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Amethyst Bucuresti",
    phoneNumber: "021.9368",
    email: "office.otopeni@amethyst-radiotherapy.com",
    image: "https://images.unsplash.com/photo-1628780678694-e3d299908f49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGhvdXNpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Amethyst Timisoara",
    phoneNumber: "021.9368",
    email: "office.timisoara@amethyst-radiotherapy.com",
    image: "https://images.unsplash.com/photo-1628780678694-e3d299908f49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGhvdXNpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Casa Filip Cluj",
    phoneNumber: "0751 151 796",
    email: "contact@casafilip.org",
    image: "https://images.unsplash.com/photo-1628780678694-e3d299908f49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGhvdXNpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Solidaris Cluj",
    phoneNumber: "40 265  55 55 55",
    email: "office@solidaris.ro",
    image: "https://images.unsplash.com/photo-1628780678694-e3d299908f49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGhvdXNpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Institutul de Onclologie Iasi",
    phoneNumber: "0374 278 810",
    email: "oncoiasi@iroiasi.ro",
    image: "https://images.unsplash.com/photo-1628780678694-e3d299908f49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGhvdXNpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  },
];

export default function Organizations() {
  const bgColor = useColorModeValue('white', 'gray.900');
  const headingColor = useColorModeValue('gray.700', 'white');

  return (
    <Center py={6}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {organizations.map((org) => (
          <Box
            key={org.name}
            maxW={'445px'}
            w={'full'}
            bg={bgColor}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
          >
            <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
              <img src={org.image} alt={org.name} style={{ width: '100%', height: '210px', objectFit: 'cover' }} />
            </Box>
            <Stack>
              <Heading
                color={headingColor}
                fontSize={'2xl'}
                fontFamily={'body'}
              >
                {org.name}
              </Heading>
              <Text color={'gray.500'}>
                {org.description}
              </Text>
              <Text color={'gray.500'}>
                Phone: {org.phoneNumber}
              </Text>
              <Text color={'gray.500'}>
                Email: {org.email}
              </Text>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Center>
  );
}
