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
import { fetchAddLocation } from '../axios/RequestsLocations';


export default function AddLocationCard() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleDateChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

    ///

    const[file, setFile] = useState();
    const[fileName, setFileName] = useState()
    const[address, setAddress] = useState();
    const[city, setCity] = useState();
    const[linkLocation, setLinkLocation] = useState();
    const[description, setDescription] = useState();
    const[organizationId, setOrganizationId] = useState();
    const[AvilableDate, setAvailableDate] = useState();

    const saveFile =(e)=>{
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name)
    }
  
    async function OnClickSave(){
      const fromData = new FormData();
      fromData.append("images", file);
      fromData.append("id", 1253);
      fromData.append("address", "caeav");
      fromData.append("city", "sadfsd");
      fromData.append("isAvilable", true);
      fromData.append("linkLocation", "fileName");
      fromData.append("mainImage", file);
      fromData.append("AvilableDate", "2023-02-02");
      fromData.append("description", "ceva");
      fromData.append("organizationID", 1);
      console.log(fromData);
      if (startDate) {
        fromData.append("startDate", startDate.toISOString().split('T')[0]); // e.g., "2023-02-02"
      }
      if (endDate) {
        fromData.append("endDate", endDate.toISOString().split('T')[0]);
      }
      await fetchAddLocation(fromData);
    }
    ///

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={6} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Adaugă o locație
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
              <FormLabel>Selectează orașul</FormLabel>
              <Select
                placeholder="Alege un oras"
                value={city}
                onChange={e => setCity(e.target.value)}
              >
                <option value="Bucuresti">Bucuresti</option>
                <option value="Iasi">Iasi</option>
                <option value="Bucuresti">Cluj</option>
                <option value="Iasi">Timisoara</option>
                <option value="Bucuresti">Sibiu</option>
                <option value="Iasi">Oradea</option>
                <option value="Bucuresti">Galati</option>
                <option value="Iasi">Arad</option>
                <option value="Bucuresti">Targu Mures</option>
                <option value="Iasi">Buzau</option>
              </Select>
            </FormControl>
            <FormControl id="photos" isRequired>
              <FormLabel>Adaugă poze cu locația</FormLabel>
              <Input type="file" multiple onChange={e => saveFile(e)} />
            </FormControl>
            <FormControl id="photo" isRequired>
              <FormLabel>Adaugă poza principală a locației adăugate</FormLabel>
              <Input type="file" onChange={e => saveFile(e)} />
            </FormControl>
            <FormControl id="address" isRequired>
              <FormLabel>Adaugă adresa completă a locației</FormLabel>
              <Input
                type="text"
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
            </FormControl>
            <FormControl id="googleMapsLink" isRequired>
              <FormLabel>Adaugă link-ul de Google Maps către locație</FormLabel>
              <Input
                type="text"
                value={linkLocation}
                onChange={e => setLinkLocation(e.target.value)}
              />
            </FormControl>
            <FormControl id="availabilityDate" isRequired>
              <FormLabel>Specifică disponibilitatea locației</FormLabel>
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
              <FormLabel>Adaugă detalii despre locație</FormLabel>
              <Textarea
                placeholder="Scrie aici.."
                resize="none"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
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
              onClick={OnClickSave}
            >
              Salvează
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
