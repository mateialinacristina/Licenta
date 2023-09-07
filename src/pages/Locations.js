import { Link } from 'react-router-dom';
import { useState } from 'react';
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

// const BeneficiaryComponent = await Requests();

const cardInfo = [
  {
    title: 'Emaus Dristor',
    city: 'Bucuresti',
    description:
      'Cazare gratuită pentru persoanele cu posibilități financiare reduse, care vin din alte localități la Bucuresti pentru tratament medical.',
    image:
      'https://plus.unsplash.com/premium_photo-1673014201877-64e88f4b5542?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRhbWVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    link: '/viewhome',
  },
  {
    title: 'Emaus Iancului',
    city: 'Bucuresti',
    description:
      'Cazare gratuită pentru persoanele cu posibilități financiare reduse, care vin din alte localități la Bucuresti pentru tratament medical.',
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRhbWVudCUyMHJvb21zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    link: '/viewhome',
  },
  {
    title: 'MagicHome',
    city: 'Bucuresti',
    description: 'MagicHOME înseamnă acasă pentru familiile cu copii diagnosticaţi cu cancer sau alte afecţiuni grave. Aproape de spitalele de pediatrie, este o locuință disponibila.',
    image:
      'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0YW1lbnQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    link: '/viewhome',
  },
  {
    title: 'Amethyst',
    city: 'Bucuresti',
    description: 'MagicHOME înseamnă acasă pentru familiile cu copii diagnosticaţi cu cancer sau alte afecţiuni grave. Aproape de spitalele de pediatrie, este o locuință disponibila.',
    image:
      'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0YW1lbnQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    link: '/viewhome',
  },
  {
    title: 'SusInima',
    city: 'Bucuresti',
    description: 'MagicHOME înseamnă acasă pentru familiile cu copii diagnosticaţi cu cancer sau alte afecţiuni grave. Aproape de spitalele de pediatrie, este o locuință disponibila.',
    image:
      'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0YW1lbnQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    link: '/viewhome',
  },
  {
    title: 'Emaus Muncii',
    city: 'Cluj',
    description: 'MagicHOME înseamnă acasă pentru familiile cu copii diagnosticaţi cu cancer sau alte afecţiuni grave. Aproape de spitalele de pediatrie, este o locuință disponibila.',
    image:
      'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0YW1lbnQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    link: '/viewhome',
  },
  {
    title: 'Emaus Hasdeu',
    city: 'Cluj',
    description: 'MagicHOME înseamnă acasă pentru familiile cu copii diagnosticaţi cu cancer sau alte afecţiuni grave. Aproape de spitalele de pediatrie, este o locuință disponibila.',
    image:
      'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0YW1lbnQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    link: '/viewhome',
  },
  {
    title: 'Emaus Rasaritului',
    city: 'Cluj',
    description: 'MagicHOME înseamnă acasă pentru familiile cu copii diagnosticaţi cu cancer sau alte afecţiuni grave. Aproape de spitalele de pediatrie, este o locuință disponibila.',
    image:
      'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0YW1lbnQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    link: '/viewhome',
  },
  {
    title: 'Emaus Fantanele',
    city: 'Cluj',
    description: 'MagicHOME înseamnă acasă pentru familiile cu copii diagnosticaţi cu cancer sau alte afecţiuni grave. Aproape de spitalele de pediatrie, este o locuință disponibila.',
    image:
      'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0YW1lbnQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    link: '/viewhome',
  },
  {
    title: 'Casa Filip',
    city: 'Cluj',
    description: 'MagicHOME înseamnă acasă pentru familiile cu copii diagnosticaţi cu cancer sau alte afecţiuni grave. Aproape de spitalele de pediatrie, este o locuință disponibila.',
    image:
      'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0YW1lbnQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    link: '/viewhome',
  },
  {
    title: 'Solidaris',
    city: 'Cluj',
    description: 'MagicHOME înseamnă acasă pentru familiile cu copii diagnosticaţi cu cancer sau alte afecţiuni grave. Aproape de spitalele de pediatrie, este o locuință disponibila.',
    image:
      'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0YW1lbnQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    link: '/viewhome',
  },
  {
    title: 'Institutul de Oncologie Iasi',
    city: 'Iasi',
    description: 'MagicHOME înseamnă acasă pentru familiile cu copii diagnosticaţi cu cancer sau alte afecţiuni grave. Aproape de spitalele de pediatrie, este o locuință disponibila.',
    image:
      'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0YW1lbnQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    link: '/viewhome',
  },
  {
    title: 'Amethyst',
    city: 'Timisoara',
    description: 'MagicHOME înseamnă acasă pentru familiile cu copii diagnosticaţi cu cancer sau alte afecţiuni grave. Aproape de spitalele de pediatrie, este o locuință disponibila.',
    image:
      'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0YW1lbnQlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    link: '/viewhome',
  },
  
];

const Locations = () => {
  const [selectedCity, setSelectedCity] = useState('Bucuresti'); 

  const cities = ['Bucuresti', 'Cluj', 'Timisoara', 'Iasi'];

  const filteredCardInfo = cardInfo.filter(card => card.city === selectedCity);
  return (
    <Box width="full" mt={8} pl={8} pr={4}>
       <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Heading mb={4}>Locații</Heading>
        <Flex>
          {cities.map((city) => (
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
                  src={card.image}
                  alt={card.title}
                  borderRadius="lg"
                  width="100%"
                  height="200px" 
                  objectFit="cover"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{card.title}</Heading>
                  <Text>{card.description}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter d="flex" justifyContent="center">
                <Button
                  as={Link}
                  variant="solid"
                  colorScheme="blue"
                  to={card.link}
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
};

export default Locations;
