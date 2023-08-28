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
      patientName: 'John Doe',
      datesForHousing: '01 Jan - 07 Jan',
      documents: '/docs/doc1.pdf',
      acceptance: null,
    },
    {
      id: 2,
      patientName: 'Jane Doe',
      datesForHousing: '15 Feb - 21 Feb',
      documents: '/docs/doc2.pdf',
      acceptance: null,
    },
    {
      id: 2,
      patientName: 'Jason',
      datesForHousing: '10 Mar - 13 Mar ',
      documents: '/docs/doc2.pdf',
      acceptance: null,
    },
    {
      id: 2,
      patientName: 'Johanna',
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
          Pending
        </Tag>
      );
    } else if (acceptance) {
      return (
        <Tag size={'md'} variant="solid" colorScheme="teal">
          Accepted
        </Tag>
      );
    } else {
      return (
        <Tag size={'md'} variant="solid" colorScheme="red">
          Rejected
        </Tag>
      );
    }
  };

  return (
    <VStack p={4} mx={4} rounded="md" spacing={4}>
      <Heading as="h1" size="xl" pb={4}>
        Manage Reservations
      </Heading>
      <Box w="100%" p="4" bg="white" rounded="md">
        <Table variant="simple" pt={4}>
          <Thead>
            <Tr>
              <Th>Patient Name</Th>
              <Th>Dates for Housing</Th>
              <Th>Patient Documents</Th>
              <Th>Acceptance</Th>
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
                      Accept
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
                      Reject
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
