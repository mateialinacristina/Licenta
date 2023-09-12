import React from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Textarea,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
} from '@chakra-ui/react';
import { fetchAddBeneficiary , fetchUpdateBeneficiary, fetchSpecificBeneficiaryByUserId} from '../axios/RequestsBeneficiary';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';


export default function Application() {

    const [data, setData] = useState("");

    useEffect(() => {
      async function fetchData() {
        try {
          if(Cookies.get('id') != undefined){
          const result = await fetchSpecificBeneficiaryByUserId(
            Cookies.get('id')
          );
          setData(result);
          }
        } catch (error) {
          console.error('There was an error:', error);
        }
      }
      fetchData();
    }, []); 
      

  const [file, setFile] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [details, setDetails] = useState();

  const saveFile =(e)=>{
    setFile(e.target.files[0]);
  }
  async function OnClickSave(){
    if (Cookies.get('id') == undefined) {
      window.location.replace('/signin');
    } else {
      const fromData = new FormData();
      if (Cookies.get('primarySid') != 'undefined') {
        fromData.append('id', parseInt(Cookies.get('primarySid')));
      }
      fromData.append('detailsSituation', details);
      fromData.append('isVerify', false);
      fromData.append('phoneNumber', phoneNumber);
      fromData.append('userID', Cookies.get('id'));
      fromData.append('files', file);

      if (Cookies.get('primarySid') == 'undefined') {
        await fetchAddBeneficiary(fromData);
      } else {
        await fetchUpdateBeneficiary(fromData);
      }
    }
  }

  function FailClick(){
    toast.error(`Tebuie sa fii logat`)
  }

  return (
    <Flex align={'center'} justify={'center'} mt={4} ml={['5%', '10%', '15%']}>
      <Flex
        direction={['column', 'row']}
        maxW={'1200px'}
        w={'full'}
        spacing={4}
      >
        {/* Left side: Your Form */}
        <Stack spacing={4} flex={1} py={4} px={[4, 6]} maxW={['full', 'lg']}>
          <Stack align={'center'}>
            <Heading fontSize={['2xl', '4xl']} textAlign={'center'}>
              Adaugă-ți datele
            </Heading>
            <Text fontSize={['md', 'lg']} color={'gray.600'} textAlign={'center'}>
              Pentru a putea rezerva o locație, trebuie să completezi toate câmpurile de mai jos!
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={6}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Nume</FormLabel>
                    <Input
                      type="text"
                      value={data.firstName}
                      onChange={e=> setFirstName(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Prenume</FormLabel>
                    <Input
                      type="text"
                      value={data.lastName}
                      onChange={e => setLastName(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="phoneNumber" isRequired>
                <FormLabel>Telefon</FormLabel>
                <Input
                  type="text"
                  value={data.phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                />
              </FormControl>
              <FormControl id="medical-files" isRequired>
                <FormLabel>
                  Atasează-ți documentele necesare anchetei sociale
                </FormLabel>
                <Input type="file" accept=".pdf" onChange={saveFile} />
              </FormControl>
              <FormControl id="details">
                <FormLabel>
                  Oferă mai multe detalii despre situația ta
                </FormLabel>
                <Textarea
                  placeholder="Scrie aici..."
                  size="md"
                  value={data.details}
                  onChange={e => setDetails(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Saving"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={Cookies.get('id') != undefined ? OnClickSave : FailClick}
                >
                  Salvează
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        {/* Right side: The Additional Text */}
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
            {' '}
            {/* Adjust the mt value to align with "Nume" and "Prenume" fields */}
            <Text fontSize="md" mb={2}>
              <strong>*</strong> Câmpurile marcate cu * sunt obligatorii!
            </Text>
            <Text fontSize="md" mb={2}>
              <strong>**</strong> Documentele necesare anchetei sociale sunt:
            </Text>
            <Text fontSize="md" mb={2}>
              - buletin sau C.I;
            </Text>
            <Text fontSize="md" mb={2}>
              - ultimele documente medicale care să ateste boala sau ultimele
              documente de ieșire din spital sau documentul doveditor trimiterii
              la tratament in orașul selectat;
            </Text>
            <Text fontSize="md" mb={2}>
              - adeverință de venit sau cupon de pensie
            </Text>
            <Text fontSize="md" mb={2}>
              <strong>***</strong> Toate actele trebuie încarcate într-un singur
              fișier pdf!
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
