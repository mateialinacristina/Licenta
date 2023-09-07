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

export default function Application() {
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
            <Text fontSize={['md', 'lg']} color={'gray.600'}>
              Te rugăm să adaugi toate detaliile necesare!
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
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Prenume</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="phoneNumber" isRequired>
                <FormLabel>Telefon</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="medical-files" isRequired>
                <FormLabel>
                  Atasează-ți documentele necesare anchetei sociale
                </FormLabel>
                <Input
                  type="file"
                  accept=".png, .jpg, .jpeg, .doc, .docx, .pdf"
                  multiple
                />
              </FormControl>
              <FormControl id="details">
                <FormLabel>
                  Oferă mai multe detalii despre situația ta
                </FormLabel>
                <Textarea placeholder="Scrie aici..." size="md" />
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
            <Text fontSize="md">- adeverință de venit sau cupon de pensie</Text>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
