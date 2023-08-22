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
  Divider,
} from '@chakra-ui/react';

// Sample data for conversations (this should ideally come from a database/API)
const sampleConversations = [
  {
    id: 1,
    organizationName: 'Emaus Dristor',
    patientName: 'John Doe',
    lastMessage: 'Hey, can you help me with the application for a reservation?'
  },
  {
    id: 2,
    organizationName: 'MedCare Center',
    patientName: 'Alice Smith',
    lastMessage: 'When is my next appointment?'
  },
  {
    id: 3,
    organizationName: 'Emaus Iancului',
    patientName: 'Ferin Patel',
    lastMessage: 'Can i make a reservation?'
  },
];

const ConversationsList = ({ onConversationClick }) => {
  return (
    <Box w="100%" p={4}>
      <Heading as="h2" size="xl" mb={4}>
        Conversations
      </Heading>
      <List spacing={4}>
        {sampleConversations.map((conversation) => (
          <ListItem 
            key={conversation.id} 
            borderWidth="1px" 
            borderRadius="lg" 
            p={4}
            cursor="pointer"  // change cursor to indicate item is clickable
            _hover={{ backgroundColor: "gray.100" }}  // optional hover effect
            onClick={() => onConversationClick(conversation.id)} // Click event
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
