import {
    Box,
    Flex,
    IconButton,
    useDisclosure,
    Input,
    Button,
    VStack,
  } from "@chakra-ui/react";
  import { ChatIcon, CloseIcon } from "@chakra-ui/icons";
  import { useState, useEffect } from "react";
import { fetchSendMessage } from "../axios/RequestsOrganization";
import Cookies from "js-cookie";
  import { fetchBeneficiarySendMessage } from "../axios/RequestsBeneficiary";
import { getCurrentFormattedDate } from "../axios/RequestsOrganization";

// nu merge scroll to bottom, verifica in Messages.js

  function ChatPopup(organizationID) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");
    const [chatHistory, setChatHistory] = useState("")
    useEffect(() => {
      async function fetchData() {
          try {
            console.log(organizationID)
              const result = await fetchBeneficiarySendMessage(Cookies.get("primarySid"));
              console.log(result)
              setChatHistory(result
                .filter(item => item.organizationID == organizationID.organizationID)
                .sort((a, b) => new Date(a.sendDate) - new Date(b.sendDate)));
          } catch (error) {
              console.error("There was an error:", error);
          }
      }
      
      fetchData();
    }, []);


    const handleSendMessage = async() => {
      if (currentMessage.trim()) {
        const body={
          messageSend: currentMessage,
          isOrganization: false,
          organizationID: organizationID.organizationID,
          beneficiaryID: parseInt(Cookies.get("primarySid"))
        }

        const newMessage ={
          sendDate: getCurrentFormattedDate(),
          beneficiaryID: parseInt(Cookies.get("primarySid")),
          isOrganization: false,
          messageSend: currentMessage,
          organizationID: organizationID.organizationID,
          toName: "Chat"
          }
          setChatHistory(chatHistory.concat(newMessage))
          setCurrentMessage("")

        await fetchSendMessage(body)
      }
    };
  
    return (
      <Box position="fixed" right="1rem" bottom="1rem" zIndex="modal">
        {isOpen ? (
          <Flex
            direction="column"
            maxW="300px"
            minH="400px"
            p={4}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            bg="white"
            boxShadow="md"
          >
            <Flex justify="space-between" alignItems="center" mb="4">
              <Box fontWeight="bold">Chat</Box>
              <IconButton icon={<CloseIcon />} onClick={onClose} size="sm" />
            </Flex>
            <VStack
              flex="1"
              overflowY="scroll"
              maxH='300px'
              spacing="4"
              align="start"
            >
              {chatHistory.map((message, idx) => (
                <Flex
                  key={idx}
                  alignSelf={message.isOrganization != true ? "flex-end" : "flex-start"}
                >
                  <Box
                    bg={message.isOrganization != true ? "blue.500" : "gray.200"}
                    color={message.isOrganization != true ? "white" : "black"}
                    p={2}
                    borderRadius="md"
                  >
                    {message.messageSend}
                  </Box>
                </Flex>
              ))}
            </VStack>
            <Flex mt="4">
              <Input
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyUp={(e) => {
                  if (e.key === "Enter") handleSendMessage();
                }}
                placeholder="Type your message..."
                mr="2"
              />
              <Button onClick={handleSendMessage}>Send</Button>
            </Flex>
          </Flex>
        ) : (
          <IconButton
            aria-label="Open chat"
            icon={<ChatIcon />}
            onClick={onOpen}
            borderRadius="50%"
            boxShadow="md"
          />
        )}
      </Box>
    );
  }
  
  export default ChatPopup;
  