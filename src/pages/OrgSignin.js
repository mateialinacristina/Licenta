import React from 'react'
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useUserType } from '../UserTypeContext';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function OrgSignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useUserType();
    const navigate = useNavigate();

    const handleSignIn = () => {
      if (email === "org@freehousing.com" && password === "password") {
        login({ role: "organization" }, navigate); 
      } else {
        alert("Invalid credentials!");
      }
    };
    return (
      <Flex
        align={'center'}
        justify={'center'}
        minH="calc(100vh - 120px)">
        <Stack spacing={8} mx={'auto'} py={12} px={6} width="100%" maxW="400px">
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Conecteaza-te</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input 
                  type="email" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Parola</FormLabel>
                <Input                  
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Text color={'blue.400'}>Ai uitat parola?</Text>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSignIn}>
                  Conecteaza-te
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  