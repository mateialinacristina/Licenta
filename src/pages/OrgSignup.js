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
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  const { login } = useUserType();
  const navigate = useNavigate();

  async function handleSignUp(){
    const fromData = new FormData();
    fromData.append("name", orgName);
    fromData.append("phoneNumber", phone);
    fromData.append("city", city);
    fromData.append("file", files);
    fromData.append("logo", files);
    fromData.append("confirmPassword", password);
    fromData.append("email", email);
    fromData.append("password", password);

    console.log(fromData);
    await fetchRegisterOrganization(fromData);

    // dupa care sa fie redirectionat
  }

  // const handleSignUp = () => {
  //   if (orgName && email && password && files.length && phone && city) {
  //     login({ role: 'organization' }, navigate); // Sign up as organization
  //   } else {
  //     setShowErrorAlert(true);
  //   }
  // };

  return (
    <Flex
      align={'center'}
      justify={'center'}
      minH="calc(100vh - 120px)"
      ml={['5%', '10%', '15%']}
    >
      <Flex
        direction={['column', 'row']}
        maxW={'1200px'}
        w={'full'}
        spacing={4}
      >
        {/* Left side: The Signup Form */}
        <Stack spacing={4} flex={1} py={4} px={[4, 6]} maxW={['full', 'lg']}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Înscrie-te
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
                Completează toate câmpurile obligatorii!
              </Alert>
            )}
            <Stack spacing={4}>
              <FormControl id="orgName" isRequired>
                <FormLabel>Numele organizației</FormLabel>
                <Input
                  type="text"
                  value={orgName}
                  onChange={e => setOrgName(e.target.value)}
                />
              </FormControl>
              <FormControl id="phone" isRequired>
                <FormLabel>Telefon</FormLabel>
                <Input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </FormControl>
              <FormControl id="city" isRequired>
                <FormLabel>Oras</FormLabel>
                <Input
                  type="text"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Emailul organizației</FormLabel>
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
              <FormControl id="confirmPassword" isRequired>
                <FormLabel>Confirma parola</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
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
              <FormControl id="orgLogo" isRequired>
                <FormLabel>
                  Atașează logo-ul organizatiei
                </FormLabel>
                <Input
                  type="logo"
                  onChange={e => setFiles(e.target.files)}
                />
              </FormControl>
              <FormControl id="orgDocuments" isRequired>
                <FormLabel>
                  Atașează documentele oficiale ale organizației care îi atestă
                  veridicitatea
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
                  Înscrie-te
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Ai deja cont?{' '}
                  <Link color={'blue.400'} href="/orgsignin">
                    Conectează-te
                  </Link>
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
              <strong>**</strong> Documentele oficiale ale organizatiei care ii
              atesta veridicitatea sunt:
            </Text>
            <Text fontSize="lg" mb={2}>
              - statutul asociatiei (inregistrarea juridica);
            </Text>
            <Text fontSize="md" mb={2}>
              <strong>***</strong> Toate actele trebuie încarcate într-un singur fișier pdf!
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
