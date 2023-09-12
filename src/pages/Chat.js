import { Flex, useColorModeValue, Box } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Divider from '../components/ChatDivider';
import Footer from '../components/ChatFooter';
import Header from '../components/ChatHeader';
import Messages from '../components/Messages';
import ConversationsList from '../components/ConversationsList';
import { useBreakpointValue } from '@chakra-ui/react';
import { fetchOrganizationChat, getCurrentFormattedDate } from '../axios/RequestsOrganization';
import Cookies from 'js-cookie';
import { fetchSendMessage } from '../axios/RequestsOrganization';

const Chat = () => {
  const breakpoint = useBreakpointValue({ base: 'base', md: 'md', lg: 'lg' });

  const [selectedChatId, setSelectedChatId] = useState(null);
  const [selectedChatById, setSelectedChatById] = useState(null);
  const handleConversationClick = id => {
    
    const messagesForChats = chatMessages.filter(item => item.beneficiaryID === id)
    .sort((a, b) => new Date(a.sendDate) - new Date(b.sendDate));
    setSelectedChatById(messagesForChats)
    setSelectedChatId(id);
    setInputMessage("");
  };
  const [inputMessage, setInputMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await fetchOrganizationChat(Cookies.get("primarySid"));
                setChatHistory(result.chatHistoryOrgs);
                setChatMessages(result.messagesForChats);
            } catch (error) {
                console.error("There was an error:", error);
            }
        }

        fetchData();
      }, []);
      

  const bgColor = useColorModeValue('gray.50', 'gray.800');


  const handleSendMessage = async() => {
    const body={
      messageSend: inputMessage,
      isOrganization: true,
      organizationID: parseInt(Cookies.get("primarySid")),
      beneficiaryID: selectedChatById[0].beneficiaryID
    }
    
    const newMessage ={
    sendDate: getCurrentFormattedDate(),
    messageSend: inputMessage,
    toName:"Name",
    beneficiaryID: selectedChatById[0].beneficiaryID,
    organizationID: parseInt(Cookies.get("primarySid")),
    isOrganization: true
    }

    setSelectedChatById(selectedChatById.concat(newMessage))
    setInputMessage("")
    await fetchSendMessage(body);
  };

  return (
    <Flex
      w="100%"
      h="100vh"
      justify="center"
      align="flex-start"
      px={['4', '6']}
      py="6"
    >
      {breakpoint === 'base' ? (
        // Mobile View
        <Box w="90%">
          {selectedChatId ? (
            <Flex
              w="100%"
              h={['80vh', '85vh', '90vh']}
              flexDir="column"
              bg={bgColor}
              borderRadius="md"
              p={4}
            >
              <Header name={selectedChatById[0].toName}/>
              <Divider />
              <Messages messages={selectedChatById} />
              <Divider />
              <Footer
                inputMessage={inputMessage}
                setInputMessage={setInputMessage}
                handleSendMessage={handleSendMessage}
              />
            </Flex>
          ) : (
            <Box w="100%" pr={4}>
              <ConversationsList
                onConversationClick={handleConversationClick}
                chatHistory={chatHistory}
              />
            </Box>
          )}
        </Box>
      ) : (
        // Desktop/Tablet View
        <>
          <Box w={['90%', '80%', '70%', '30%']} mr={16}>
            {' '}
            {/* Adjust the 8 value to what feels right */}
            <ConversationsList
              onConversationClick={handleConversationClick}
              chatHistory={chatHistory}
            />
          </Box>
          {selectedChatById != null ? (
            <Flex
              w={['90%', '80%', '70%', '50%']}
              h={['80vh', '85vh', '90vh']}
              flexDir="column"
              bg={bgColor}
              borderRadius="md"
              p={4}
            >
              <Header name={selectedChatById[0].toName} />
              <Divider />
              <Messages messages={selectedChatById} />
              <Divider />
              <Footer
                inputMessage={inputMessage}
                setInputMessage={setInputMessage}
                handleSendMessage={handleSendMessage}
              />
            </Flex>
          ) : (
            <Flex
              w={['90%', '80%', '70%', '50%']}
              h={['80vh', '85vh', '90vh']}
              flexDir="column"
              bg={bgColor}
              borderRadius="md"
              p={4}
            >
              {/* TODO: Schimbare chat pentru conversatie goala/ neselectata */}
              {/* <Header name={selectedChatById} />
              <Divider />
              <Messages messages={messages} />
              <Divider />
              <Footer
                inputMessage={inputMessage}
                setInputMessage={setInputMessage}
                handleSendMessage={handleSendMessage}
              /> */}
            </Flex>
          )}
        </>
      )}
    </Flex>
  );
};

export default Chat;
