import { useState } from 'react';
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
} from '@chakra-ui/react';
import ChatPopup from '../components/ChatPopup';
import ImgGallery from '../components/ImgGallery';

const ViewHome = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <VStack spacing={6} align="center" w="100%">
      <Heading as="h1" size="2xl" mt={6}>
        Emaus Dristor
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
            <ImgGallery />
          </Box>

          <VStack
            spacing={4}
            alignItems="center"
            justifyContent="center"
            h="full"
            pl={2} // Left padding
            pr={2} // Right padding
          >
            <Heading size={{ base: 'md', md: 'lg' }}>Emaus- Dristor, Sector 3</Heading>
            <Text fontSize={{ base: 'sm', md: 'lg' }}>Garsoniera din zona Dristor dispune de bucătărie tip open-space, baie complet utilată, alături de un spațiu de odihnă care poate fi amenajat după gustul fiecăruia. </Text>
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
            <Button size="lg" variant="solid" colorScheme="blue" mt={4}>
              Rezervă
            </Button>
            <Link
              href="#"
            >
              Deschide adresa în Google Maps
            </Link>
          </VStack>
        </Grid>
      </Box>
      <ChatPopup />
    </VStack>
  );
};

export default ViewHome;
