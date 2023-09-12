import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  VStack,
  Grid,
  Link,
  Alert,
  AlertIcon
} from '@chakra-ui/react';
import ChatPopup from '../components/ChatPopup';
import ImgGallery from '../components/ImgGallery';
import { redirect, useParams } from 'react-router-dom';
import {fetchSpecificLocation} from '../axios/RequestsLocations'
import { useEffect , useState} from 'react';
import {formatDateToISOString} from '../axios/RequestsOrganization'
import { fetchBeneficiaryReservation } from '../axios/RequestsBeneficiary';
import Cookies from 'js-cookie';

const ViewHome = () => {
  const params = useParams();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [startDateDB, setStartDateDB] = useState('');
  const [endDateDB, setEndDateDB] = useState('');

  const [data, setData] = useState("");
  const[reservation, setReservation] = useState('')
    useEffect(() => {
        async function fetchData() {
            try {
                const respone = await fetchSpecificLocation(params.id);
                console.log(respone.location)
                return respone
            } catch (error) {
                console.error("There was an error:", error);
            }
        }
        fetchData().then(respone => {setData(respone.location);setReservation(respone.reservations)});
      }, []);

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
    
    const SubmitReservation = async () => {
      const body = {
        startDate: startDateDB,
        endDate: endDateDB,
        beneficiaryID: Cookies.get("primarySid"),
        locationID:parseInt(data.locationID)
      };
      console.log(body)

      await fetchBeneficiaryReservation(body);
    };
    
    return (
      <VStack spacing={6} align="center" w="100%">
        <Heading as="h1" size="2xl" mt={6}>
          {data.city}
        </Heading>

        <Box
          w={{ base: '90%', md: '80%', lg: '70%' }}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bg="rgba(255,255,255,0.8)"
          boxShadow="md"
          p={4}
          mb={12}
        >
          <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={6}>
            <Box p={2}>
              {data.images != undefined ? (
                <ImgGallery imga={data.images} />
              ) : (
                <></>
              )}
            </Box>

            <VStack
              spacing={4}
              alignItems="center"
              justifyContent="center"
              h="full"
              pl={2}
              pr={2}
            >
              <Heading size={{ base: 'md', md: 'lg' }}>{data.address}</Heading>
              <Text fontSize={{ base: 'sm', md: 'lg' }}>
                {data.description}{' '}
              </Text>
              <Box width={{ base: '90%', md: '80%' }} mt="2">
                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  dateFormat="MMMM d, yyyy"
                  isClearable
                  placeholderText="Selecteaza data dorita"
                  customInput={<Input variant="filled" />}
                />
              </Box>

              {Cookies.get('role') == 'Beneficiary' &&
              Cookies.get('primarySid') != 'undefined' ? (
                <Button
                  size="lg"
                  variant="solid"
                  colorScheme="blue"
                  mt={4}
                  onClick={SubmitReservation}
                >
                  Rezervă
                </Button>
              ) : (
                <></>
              )}

              <Link href={data.linkLocation}>
                Deschide adresa în Google Maps
              </Link>
            </VStack>
          </Grid>
        </Box>
        {/* // adaugat chat pop functionalitate starsa */}
        {data != null ? (
          <ChatPopup organizationID={data.organizationID} />
        ) : (
          <></>
        )}
      </VStack>
    );
}

export default ViewHome;
