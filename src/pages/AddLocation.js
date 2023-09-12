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
  List,
} from '@chakra-ui/react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { CalendarIcon } from '@chakra-ui/icons';
import 'react-datepicker/dist/react-datepicker.css';
import { fetchAddLocation } from '../axios/RequestsLocations';
import Cookies from 'js-cookie';

export default function AddLocationCard() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [startDateDB, setStartDateDB] = useState('');
  const [endDateDB, setEndDateDB] = useState('');

  const handleDateChange = dates => {
    const [start, end] = dates;
    if(!(start === null)){
      setStartDateDB(start.toISOString());
    }
    if(!(end === null)){
      setEndDateDB(end.toISOString());

    }
    setStartDate(start);
    setEndDate(end);
  };

    const[files, setFiles] = useState();
    const[mainFile, setMainFile] = useState();
    const[address, setAddress] = useState();
    const[city, setCity] = useState();
    const[linkLocation, setLinkLocation] = useState();
    const[description, setDescription] = useState();

  
    async function OnClickSave(){
      
      console.log(files)
      console.log(mainFile)
      const fromData = new FormData();
      // Array.from(files).forEach((file) => {
      //   console.log(file);
      //  //fromData.append("images", [file]);
      //  });
       var cnt = 1
       for(const file of files){
        console.log(file);
        fromData.append(`images${cnt}`, file);
        cnt= cnt + 1;
       }

      // fromData.append("images1", files[0]);
      // fromData.append("images2", files[1]);
      // fromData.append("images3", files[2]);
      // fromData.append("images4", files[3]);
      fromData.append("address", address);
      fromData.append("city", city);
      fromData.append("linkLocation", linkLocation);
      fromData.append("mainImage", mainFile);
      fromData.append("startDate", startDateDB);
      fromData.append("endDate", endDateDB);
      fromData.append("description", description);
      fromData.append("organizationID",parseInt(Cookies.get("primarySid")));
      console.log(startDateDB, endDateDB, description, linkLocation, city, parseInt(Cookies.get("primarySid")));
      // if (startDate) {
      //   fromData.append("startDate", startDate.toISOString().split('T')[0]); 
      // }
      // if (endDate) {
      //   fromData.append("endDate", endDate.toISOString().split('T')[0]);
      // }

      await fetchAddLocation(fromData);
    }
    ///
    const handleChange = (event) => {
      if (event.target.files.length > 4) {
        alert('You can select up to 4 files only!');
        event.target.value = "";  // Reset the input
      }else{
      setFiles(event.target.files)
      }
    };
    

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
                <option value="Cluj">Cluj</option>
                <option value="Timisoara">Timisoara</option>
                <option value="Sibiu">Sibiu</option>
                <option value="Oradea">Oradea</option>
                <option value="Galati">Galati</option>
                <option value="Arad">Arad</option>
                <option value="Targu Mures">Targu Mures</option>
                <option value="Buzau">Buzau</option>
              </Select>
            </FormControl>
            <FormControl id="photos" isRequired>
              <FormLabel>Adaugă poze cu locația</FormLabel>
              <Input type="file" accept='.img,.png,.jpg,.jpeg' multiple onChange={handleChange} />
            </FormControl>
            <FormControl id="photo" isRequired>
              <FormLabel>Adaugă poza principală a locației adăugate</FormLabel>
              <Input type="file" accept='.img,.png,.jpg,.jpeg' onChange={e => setMainFile(e.target.files[0])} />
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
