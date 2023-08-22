import { Link } from 'react-router-dom';
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



const Locations = () => {
  return (
    <Box width="full" mt={8} pl={8} pr={4}>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Heading mb={4}>Locatii</Heading>
        <Flex>
          <ChakraLink href="#" marginX={2}>
            Bucuresti
          </ChakraLink>
          <ChakraLink href="#" marginX={2}>
            Cluj
          </ChakraLink>
          <ChakraLink href="#" marginX={2}>
            Timisoara
          </ChakraLink>
          <ChakraLink href="#" marginX={2}>
            Iasi
          </ChakraLink>
          {/* Add more links here */}
        </Flex>
      </Flex>

      <Flex
        direction={['column', 'row']}
        wrap="wrap"
        justifyContent="center"
        mt={6}
      >
        {[...Array(3)].map((_, i) => (
          <Box key={i} width={['full', '32%', '32%']} p={2}>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Emaus Dristor</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design
                    with a sprinkle of vintage design.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter d="flex" justifyContent="center">
                <Button as={Link} variant="solid" colorScheme="blue" to="/viewhome">
                  Vezi locatia
                </Button>
              </CardFooter>
            </Card>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Locations;
