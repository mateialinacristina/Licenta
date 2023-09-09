import React, { useState } from 'react';
import { useUserType } from '../UserTypeContext';
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { fetchLogin } from '../axios/RequestsAuthenticate';


export default function SignIn() {
  const { login } = useUserType();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  async function handleSignIn(){
    console.log(credentials)
    await fetchLogin(credentials);
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSignIn = async () => {
  //   if (
  //     credentials.email === 'user@test.com' &&
  //     credentials.password === 'password'
  //   ) {
  //     const userObj = {
  //       email: credentials.email,
  //       role: 'user',
  //     };
  //     login(userObj, navigate);
  //   } else {
  //     console.error('Invalid credentials!');
  //   }
  // };

  return (
    <Flex align={'center'} justify={'center'} minH="calc(100vh - 120px)">
      <Stack spacing={8} mx={'auto'} py={12} px={6} width="100%" maxW="400px">
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Conecteaza-te</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          maxW="800px"
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email </FormLabel>
              <Input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Parola</FormLabel>
              <Input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
              </Stack>
              <Button
                onClick={handleSignIn}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Conecteaza-te
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
