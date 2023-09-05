import React from 'react';
import {
  Box,
  List,
  ListItem,
  Heading,
  Text,
  Avatar,
  HStack,
  VStack,
} from '@chakra-ui/react';

// Sample data for conversations (this should ideally come from a database/API)
const sampleConversations = [
  {
    id: 1,
    organizationName: 'Emaus Dristor',
    patientName: 'Ioana Matei',
    lastMessage: 'Buna ziua, as avea o intrebare specifica..'
  },
  {
    id: 2,
    organizationName: 'Emaus Dristor',
    patientName: 'Stefan Giurgea',
    lastMessage: 'Cand ma pot caza la locatie?'
  },
  {
    id: 3,
    organizationName: 'Emaus Dristor',
    patientName: 'Maria Popa',
    lastMessage: 'Data pe care doresc sa o rezerv nu este disponibila'
  },
];

const ConversationsList = ({ onConversationClick }) => {
  return (
    <Box w="100%" p={4} borderWidth="3px" borderColor="gray.300" borderRadius="md">
      <Heading as="h2" size="xl" mb={4}>
        Conversations
      </Heading>
      <List spacing={4}>
        {sampleConversations.map((conversation, index, array) => (
          <ListItem 
            key={conversation.id}
            borderBottomWidth={index === array.length - 1 ? '0px' : '1px'} // Skip the bottom border for the last item
            borderColor="gray.300" 
            borderRadius="md" 
            p={4}
            cursor="pointer"
            _hover={{ backgroundColor: "gray.100" }}
            onClick={() => onConversationClick(conversation.id)}
          >
            <HStack spacing={3}>
              <Avatar name={conversation.patientName} />
              <VStack align="start" spacing={1}>
                <Text fontWeight="bold">
                  {conversation.organizationName} & {conversation.patientName}
                </Text>
                <Text isTruncated maxWidth="300px">
                  {conversation.lastMessage}
                </Text>
              </VStack>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ConversationsList;
