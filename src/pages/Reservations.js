import React, { useState, useEffect } from 'react';
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
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  IconButton,
  useBreakpointValue,
  Icon,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { fetchOrganizationRequests, fetchOrganizationRequestsResponse } from '../axios/RequestsOrganization';
import Cookies from 'js-cookie';

export default function Reservations() {

  const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await fetchOrganizationRequests(Cookies.get("primarySid")); 
                setData(result);
                console.log(result);
            } catch (error) {
                console.error("There was an error:", error);
            }
        }
        fetchData();
      }, []);
      console.log(data);

      const[id, setId] = useState();
      //const[isApprove, setIsApprove] = useState()
    
      // async function ChangeStatusRequest(){
      //   //id si isApprove trebuie adaugate
      //   const body = {
      //     id: 4,
      //     isApprove: false
      //   }
      //     await fetchOrganizationRequestsResponse(4, true);
      //   }



  // Sample reservation data, replace this with your actual data fetched from API
  // const [reservations, setReservations] = useState([
  //   {
  //     id: 1,
  //     patientName: 'Maria Popa',
  //     datesForHousing: '01 Jan - 07 Jan',
  //     address: "str. Elev Stefan Stefanescu nr 5",
  //     documents: '/docs/doc1.pdf',
  //     acceptance: null,
  //     isDecisionFinal: false,
  //   },
  //   {
  //     id: 2,
  //     patientName: 'Ion Neagu',
  //     datesForHousing: '15 Feb - 21 Feb',
  //     address: "str. Elev Stefan Stefanescu nr 5",
  //     documents: '/docs/doc2.pdf',
  //     acceptance: null,
  //     isDecisionFinal: false,
  //   },
  //   {
  //     id: 3,
  //     patientName: 'Stefan Giurgea',
  //     datesForHousing: '10 Mar - 13 Mar ',
  //     address: "str. Elev Stefan Stefanescu nr 5",
  //     documents: '/docs/doc2.pdf',
  //     acceptance: null,
  //     isDecisionFinal: false,
  //   },
  //   {
  //     id: 4,
  //     patientName: 'Ioana Matei',
  //     datesForHousing: '5 Feb - 8 Feb',
  //     address: "str. Elev Stefan Stefanescu nr 5",
  //     documents: '/docs/doc2.pdf',
  //     acceptance: null,
  //     isDecisionFinal: false,
  //   },
  // ]);

  // const handleAcceptanceChange = (value, id) => {
  //   const updatedReservations = reservations.map(reservation => {
  //     if (reservation.id === id) {
  //       return {
  //         ...reservation,
  //         acceptance: value,
  //         isDecisionFinal: true, // Set the flag when a decision is made
  //       };
  //     }
  //     return reservation;
  //   });
  //   setReservations(updatedReservations);
  // };

  const getStatusTag = (acceptance) => {

    if (acceptance === undefined) {
      return (
        <Tag size={'md'} variant="solid" colorScheme="orange">
          In așteptare
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

  const [isOpen, setIsOpen] = useState(false);
  const [selectedDecision, setSelectedDecision] = useState(null);
  const [selectedReservationId, setSelectedReservationId] = useState(null);

  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const openConfirmation = (decision, reservationId) => {
    setSelectedDecision(decision);
    setSelectedReservationId(reservationId);
    setIsOpen(true);
  };

  ///////

  async function confirmDecision(){
    await fetchOrganizationRequestsResponse(id, selectedDecision);
  }
  // const confirmDecision = () => {

  //   handleAcceptanceChange(selectedDecision, selectedReservationId);
  //   onClose();
  // };

  const tableStyle = useBreakpointValue({
    base: { fontSize: 'sm', overflowX: 'scroll' },
    md: { fontSize: 'md' },
  });

  const displayType = useBreakpointValue({ base: 'mobile', md: 'desktop' });
  const isMobile = displayType === 'mobile';

  return (
    <VStack p={4} mx={4} rounded="md" spacing={4}>
      <Heading as="h1" size="xl" pb={4}>
        Gestionează rezervările
      </Heading>
      <Box
        w="100%"
        p="4"
        bg="white"
        rounded="md"
        overflowX={isMobile ? 'scroll' : 'visible'}
      >
        <Table variant="simple" pt={4}>
          <Thead>
            <Tr>
              <Th>Numele beneficiarului</Th>
              <Th>Data cazării</Th>
              <Th>Adresa</Th>
              {!isMobile && <Th>Documente</Th>}
              <Th>Decizie cerere</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(reservation => (
              <Tr key={reservation.locationId}>
                <Td>{reservation.beneficiaryName}</Td>
                <Td>{reservation.startDate}-{reservation.endDate}</Td>
                <Td>{reservation.address}</Td>
                {isMobile ? (
                  <Td>
                    <IconButton
                      icon={<Icon as={DownloadIcon} />}
                      variant="ghost"
                      aria-label="Download Document"
                      href={reservation.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  </Td>
                ) : (
                  <Td>
                    <a
                      href={reservation.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </Td>
                )}
                <Td>
                  <Stack spacing={4} direction="row">
                    <Checkbox
                      isChecked={reservation.acceptance === true}
                      isDisabled={reservation.isDecisionFinal} 
                      onChange={() => {openConfirmation(true, reservation.id);
                        setId(reservation.locationId);}}
                    >
                      Acceptă
                    </Checkbox>
                    <Checkbox
                      isChecked={reservation.acceptance === false}
                      isDisabled={reservation.isDecisionFinal} 
                      onChange={() => {
                        setId(reservation.locationId);
                        openConfirmation(false, reservation.id);
                    }}
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
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirmare
            </AlertDialogHeader>
            <AlertDialogBody>
              {selectedDecision
                ? 'Sunteti sigur ca doriti sa acceptati cererea de cazare?'
                : 'Sunteti sigur ca doriti sa respingeti cererea de cazare?'}
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Anuleaza
              </Button>
              <Button colorScheme="red" onClick={confirmDecision} ml={3}>
                Da, sunt sigur
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </VStack>
  );
}
