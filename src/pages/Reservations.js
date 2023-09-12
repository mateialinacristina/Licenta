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
            } catch (error) {
                console.error("There was an error:", error);
            }
        }
        fetchData();
      }, []);

      const[id, setId] = useState();

  const getStatusTag = (isApproved) => {

    if (isApproved === undefined || isApproved === null) {
      return (
        <Tag size={'md'} variant="solid" colorScheme="orange">
          In așteptare
        </Tag>
      );
    } else if (isApproved) {
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
  const [emailBen, setEmailBen] = useState(null);

  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const openConfirmation = (decision, reservationId) => {
    setSelectedDecision(decision);
    setSelectedReservationId(reservationId);
    setIsOpen(true);
  };

  async function confirmDecision(){
    await fetchOrganizationRequestsResponse(id, selectedDecision, emailBen);
  }


  const tableStyle = useBreakpointValue({
    base: { fontSize: 'sm', overflowX: 'scroll', overflowY: 'visible' },
    md: { fontSize: 'md', overflowX: 'visible' },
  });
  
  const displayType = useBreakpointValue({ base: 'mobile', md: 'desktop' });
  const isMobile = displayType === 'mobile';

  return (
    <VStack p={4} mx={4} rounded="md" spacing={4}>
    <Heading as="h1" size="xl" pb={4}>
      Gestionează rezervările
    </Heading>
    <Box w="100%" p="4" bg="white" rounded="md">
      <Table variant="simple" pt={4} {...tableStyle}>
        <Thead>
          <Tr>
            <Th>Numele beneficiarului</Th>
            <Th>Data cazării</Th>
            {isMobile ? (
              <Th isTruncated maxWidth="100px">Adresa</Th> // Truncate Adresa on mobile
            ) : (
              <Th>Adresa</Th>
            )}
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
                      isChecked={reservation.isApproved === true}
                      isDisabled={reservation.isApproved != null} 
                      onChange={() => {openConfirmation(true, reservation.id);
                        setId(reservation.locationId);
                        setEmailBen(reservation.emailBeneficiary);
                      }}
                    >
                      Acceptă
                    </Checkbox>
                    <Checkbox
                      isChecked={reservation.isApproved === false}
                      isDisabled={reservation.isApproved != null} 
                      onChange={() => {
                        setId(reservation.locationId);
                        openConfirmation(false, reservation.id);
                        setEmailBen(reservation.emailBeneficiary);
                    }}
                    >
                      Respinge
                    </Checkbox>
                  </Stack>
                </Td>
                <Td>{getStatusTag(reservation.isApproved)}</Td>
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
