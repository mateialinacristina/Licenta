import React from 'react'
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
    <Flex
      align={'center'}
      justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={6} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Fill out your details
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Please provide all the necessary details.
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="caretaker" isRequired>
              <FormLabel>Will you come with a caretaker?</FormLabel>
              <Select placeholder="Select option">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
            </FormControl>
            <FormControl id="medical-files" isRequired>
              <FormLabel>Attach your medical files here</FormLabel>
              <Input type="file" accept=".png, .jpg, .jpeg, .doc, .docx, .pdf" multiple />
            </FormControl>
            <FormControl id="details">
              <FormLabel>Give us more details about your situation</FormLabel>
              <Textarea placeholder="Details here..." size="md" />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Saving"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Save
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
