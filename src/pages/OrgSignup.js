import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserType } from '../UserTypeContext';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
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

export default function OrgSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [orgName, setOrgName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [files, setFiles] = useState([]);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const { login } = useUserType();
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (orgName && email && password && files.length) {
      login({ role: 'organization' }, navigate); // Sign up as organization
    } else {
      setShowErrorAlert(true);
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
              Please fill in all required fields!
            </Alert>
          )}
          <Stack spacing={4}>
            <FormControl id="orgName" isRequired>
              <FormLabel>Organization name</FormLabel>
              <Input
                type="text"
                value={orgName}
                onChange={e => setOrgName(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Organization email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
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
            <FormControl id="orgDocuments" isRequired>
              <FormLabel>
                Attach your organization’s official documents that attest its
                veridicity
              </FormLabel>
              <Input
                type="file"
                multiple
                onChange={e => setFiles(e.target.files)}
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSignUp}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}  href="/orgsignin">Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
