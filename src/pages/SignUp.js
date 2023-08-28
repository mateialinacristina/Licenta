import React, { useState } from 'react';
import { useUserType } from '../UserTypeContext';
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useUserType();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("handleSubmit is triggered");

    if (
      !formData.firstName.trim() ||
      !formData.email.trim() ||
      !formData.password.trim()
    ) {
      setShowErrorAlert(true);
      console.log('One or more required fields are empty.');
      return;
    } else {
      setShowErrorAlert(false);
    }

    if (
      formData.email === 'user@test.com' &&
      formData.password === 'password'
    ) {
      login({ role: 'user' });
      navigate("/locations");
      console.log('Mockup signup successful for user!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
    } else {
      console.error('Invalid signup credentials!');
    }
  };

  return (
    <Flex align={'center'} justify={'center'} minH="calc(100vh - 120px)">
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          {showErrorAlert && (
            <Alert status="error" mb={4}>
              <AlertIcon />
              Trebuie sa completezi toate campurile marcate!
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Prenume</FormLabel>
                    <Input
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Nume</FormLabel>
                    <Input
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Parola</FormLabel>
                <InputGroup>
                  <Input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword(showPassword => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={handleSubmit} // Using onClick temporarily
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'} href="/signin">Login</Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
