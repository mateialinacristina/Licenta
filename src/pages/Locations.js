import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Divider,
  CardFooter,
  Button,
} from '@chakra-ui/react';
import { fetchLocation } from '../axios/RequestsLocations';


function Locations() {
  //const Locations = async() => {
  const [selectedCity, setSelectedCity] = useState('Bucuresti');

  const [data, setData] = useState([]);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchLocation();
        setData(result['locations']);
        setCities(result['citys']);
        //console.log(result);
      } catch (error) {
        console.error('There was an error:', error);
      }
    }

    fetchData();
  }, []);

  const filteredCardInfo = data.filter(card => card.city === selectedCity);
  return (
    <Box width="full" mt={8} pl={8} pr={4}>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Heading mb={4}>Locații</Heading>
        <Flex>
          {cities.map(city => (
            <ChakraLink
              key={city}
              href="#"
              marginX={2}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </ChakraLink>
          ))}
        </Flex>
      </Flex>

      <Flex
        direction={['column', 'row']}
        wrap="wrap"
        justifyContent="center"
        mt={6}
      >
        {filteredCardInfo.map((card, i) => (
          <Box key={i} width={['full', '32%', '32%']} p={2}>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={card.mainImage}
                  alt={card.address}
                  borderRadius="lg"
                  width="100%"
                  height="200px"
                  objectFit="cover"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{card.address}</Heading>
                  <Text>{card.description}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter d="flex" justifyContent="center">
                <Button
                  as={Link}
                  variant="solid"
                  colorScheme="blue"
                  to={`/viewhome/${card.locationID}`}
                >
                  Vezi locația
                </Button>
              </CardFooter>
            </Card>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default Locations;
