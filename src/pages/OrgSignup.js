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
    <Flex align={'center'} justify={'center'} minH="calc(100vh - 120px)" ml={['5%', '10%', '15%']}>
    <Flex direction={['column', 'row']} maxW={'1200px'} w={'full'} spacing={4}>
      
      {/* Left side: The Signup Form */}
      <Stack spacing={4} flex={1} py={4} px={[4, 6]} maxW={['full', 'lg']}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Inscrie-te
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
              Completeaza toate campurile obligatorii!
            </Alert>
          )}
          <Stack spacing={4}>
            <FormControl id="orgName" isRequired>
              <FormLabel>Numele organizatiei</FormLabel>
              <Input
                type="text"
                value={orgName}
                onChange={e => setOrgName(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Emailul organizatiei</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Parola</FormLabel>
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
                Ataseaza documentele oficiale ale organizatiei care ii atesta veridicitatea
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
                Inscrie-te
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Ai deja cont? <Link color={'blue.400'}  href="/orgsignin">Conecteaza-te</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      {/* Right side: Additional Text */}
      <Box
        d={['none', 'flex']} 
        maxW={'lg'}
        pl={[0, 6]}
        pt={20}
        flex={1}
        flexDirection="column"
        justifyContent="center"
      >
        <Stack spacing={2}>
          <Text fontSize="lg" mb={2}>
            <strong>*</strong> Campurile marcate cu * sunt obligatorii!
          </Text>
          <Text fontSize="lg" mb={2}>
            <strong>**</strong> Documentele oficiale ale organizatiei care ii atesta veridicitatea sunt:
          </Text>
          <Text fontSize="lg" mb={2}>
            - statutul asociatiei (inregistrarea juridica);
          </Text>
        </Stack>
      </Box>

    </Flex>
  </Flex>
  );
}
