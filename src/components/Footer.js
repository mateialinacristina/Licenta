import React from 'react'
import {
  Box,
  Container,
  Text,
  useColorModeValue,
  Center
} from '@chakra-ui/react'

  
export default function SmallWithSocial() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          maxW={'6xl'}
          py={4}
        >
          <Center>
            <Text>© 2023 Free Housing. All rights reserved</Text>
          </Center>
        </Container>
      </Box>
    );
  }

