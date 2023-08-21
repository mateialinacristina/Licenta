import React from 'react';
import {
  Box,
  List,
  ListItem,
  Heading,
  Text,
  Avatar,
  HStack,
  VStack
} from '@chakra-ui/react';

// Sample data for conversations (this should ideally come from a database/API)
const sampleConversations = [
  {
    id: 1,
    organizationName: 'Emaus Dristor',
    patientName: 'John Doe',
    lastMessage: 'Hey, can you help me with...'
  },
  {
    id: 2,
    organizationName: 'MedCare Center',
    patientName: 'Alice Smith',
    lastMessage: 'When is my next appointment?'
  },
  // ... add more sample conversations as needed
];

const ConversationsList = () => {
  return (
    <Box w="100%" p={4}>
      <Heading as="h2" size="xl" mb={4}>
        Conversations
      </Heading>
      <List spacing={4}>
        {sampleConversations.map((conversation) => (
          <ListItem key={conversation.id} borderWidth="1px" borderRadius="lg" p={4}>
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
