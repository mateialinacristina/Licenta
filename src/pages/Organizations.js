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
    name: "Hope House",
    description: "Providing shelter and hope for those in need.",
    phoneNumber: "123-456-7890",
    email: "hope@house.org",
    image: "https://images.unsplash.com/photo-1628133287836-40bd5453bed1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Safe Stay",
    description: "Safety and comfort for all.",
    phoneNumber: "234-567-8901",
    email: "contact@safestay.org",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Harbor Homes",
    description: "Your port in the storm.",
    phoneNumber: "345-678-9012",
    email: "info@harborhomes.org",
    image: "https://images.unsplash.com/photo-1593398395073-ae53c3870037?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdXNpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Community Cover",
    description: "Covering you with love and care.",
    phoneNumber: "456-789-0123",
    email: "hello@communitycover.org",
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
