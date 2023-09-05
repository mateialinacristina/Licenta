import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Select,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { CalendarIcon } from '@chakra-ui/icons';
import 'react-datepicker/dist/react-datepicker.css';

export default function AddLocationCard() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleDateChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={6} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Adauga o locatie
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="city" isRequired>
              <FormLabel>Selecteaza orasul</FormLabel>
              <Select placeholder="Alege un oras">
                <option value="Bucuresti">Bucuresti</option>
                <option value="Iasi">Iasi</option>
              </Select>
            </FormControl>
            <FormControl id="photos" isRequired>
              <FormLabel>Adauga poze cu locatia</FormLabel>
              <Input type="file" multiple />
            </FormControl>
            <FormControl id="address" isRequired>
              <FormLabel>Adauga adresa completa a locatiei</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="googleMapsLink" isRequired>
              <FormLabel>
                Adauga link-ul de Google Maps catre locatie
              </FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="availabilityDate" isRequired>
              <FormLabel>Specifica disponibilitatea locatiei</FormLabel>
              <Box width="80%" mt="2">
                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  dateFormat="MMMM d, yyyy"
                  isClearable
                  placeholderText="Selecteaza o perioada"
                  customInput={<Input variant="filled" />}
                />
              </Box>
            </FormControl>
            <FormControl id="details" isRequired>
              <FormLabel>Adauga detalii despre locatie</FormLabel>
              <Textarea placeholder="Scrie aici.." resize="none" />
            </FormControl>
            <Button
              leftIcon={<CalendarIcon />}
              loadingText="Submitting"
              size="lg"
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
            >
              Salveaza
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
