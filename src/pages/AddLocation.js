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
            Add a Location
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
              <FormLabel>Select the city</FormLabel>
              <Select placeholder="Choose a city">
                <option value="Bucuresti">Bucuresti</option>
                <option value="Iasi">Iasi</option>
                {/* Add other city options similarly */}
              </Select>
            </FormControl>
            <FormControl id="photos" isRequired>
              <FormLabel>Add the photos of your location</FormLabel>
              <Input type="file" multiple />
            </FormControl>
            <FormControl id="address" isRequired>
              <FormLabel>Enter the address of your location</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="googleMapsLink" isRequired>
              <FormLabel>
                Add the Google Maps link for your location's address
              </FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="availabilityDate">
              <FormLabel>Specify availability</FormLabel>
              <Box width="80%" mt="2">
                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  dateFormat="MMMM d, yyyy"
                  isClearable
                  placeholderText="Select a date range"
                  customInput={<Input variant="filled" />}
                />
              </Box>
            </FormControl>
            <FormControl id="details">
              <FormLabel>Enter details</FormLabel>
              <Textarea placeholder="Enter details" resize="none" />
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
              Submit
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
