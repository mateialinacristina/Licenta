import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Box,
  VStack,
  Tag,
  Heading,
  Stack,
} from '@chakra-ui/react';

export default function Reservations() {
  // Sample reservation data, replace this with your actual data fetched from API
  const [reservations, setReservations] = useState([
    {
      id: 1,
      patientName: 'Maria Popa',
      datesForHousing: '01 Jan - 07 Jan',
      documents: '/docs/doc1.pdf',
      acceptance: null,
    },
    {
      id: 2,
      patientName: 'Ion Neagu',
      datesForHousing: '15 Feb - 21 Feb',
      documents: '/docs/doc2.pdf',
      acceptance: null,
    },
    {
      id: 3,
      patientName: 'Stefan Giurgea',
      datesForHousing: '10 Mar - 13 Mar ',
      documents: '/docs/doc2.pdf',
      acceptance: null,
    },
    {
      id: 4,
      patientName: 'Ioana Matei',
      datesForHousing: '5 Feb - 8 Feb',
      documents: '/docs/doc2.pdf',
      acceptance: null,
    },
  ]);

  const handleAcceptanceChange = (value, id) => {
    const updatedReservations = reservations.map(reservation => {
      if (reservation.id === id) {
        return {
          ...reservation,
          acceptance: value,
        };
      }
      return reservation;
    });
    setReservations(updatedReservations);
  };
  const getStatusTag = acceptance => {
    if (acceptance === null) {
      return (
        <Tag size={'md'} variant="solid" colorScheme="orange">
          In asteptare
        </Tag>
      );
    } else if (acceptance) {
      return (
        <Tag size={'md'} variant="solid" colorScheme="teal">
          Acceptat
        </Tag>
      );
    } else {
      return (
        <Tag size={'md'} variant="solid" colorScheme="red">
          Respins
        </Tag>
      );
    }
  };

  return (
    <VStack p={4} mx={4} rounded="md" spacing={4}>
      <Heading as="h1" size="xl" pb={4}>
        Gestioneaza rezervarile
      </Heading>
      <Box w="100%" p="4" bg="white" rounded="md">
        <Table variant="simple" pt={4}>
          <Thead>
            <Tr>
              <Th>Numele beneficiarului</Th>
              <Th>Data cazarii</Th>
              <Th>Documente</Th>
              <Th>Decizie cerere</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {reservations.map(reservation => (
              <Tr key={reservation.id}>
                <Td>{reservation.patientName}</Td>
                <Td>{reservation.datesForHousing}</Td>
                <Td>
                  <a
                    href={reservation.documents}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download
                  </a>
                </Td>
                <Td>
                  <Stack spacing={4} direction="row">
                    <Checkbox
                      isChecked={reservation.acceptance === true}
                      onChange={e =>
                        handleAcceptanceChange(
                          e.target.checked ? true : null,
                          reservation.id
                        )
                      }
                    >
                      Accepta
                    </Checkbox>
                    <Checkbox
                      isChecked={reservation.acceptance === false}
                      onChange={e =>
                        handleAcceptanceChange(
                          e.target.checked ? false : null,
                          reservation.id
                        )
                      }
                    >
                      Respinge
                    </Checkbox>
                  </Stack>
                </Td>
                <Td>{getStatusTag(reservation.acceptance)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </VStack>
  );
}
