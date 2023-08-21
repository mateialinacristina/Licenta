import {
    Box,
    Flex,
    IconButton,
    useDisclosure,
    Input,
    Button,
    VStack,
    Text,
  } from "@chakra-ui/react";
  import { ChatIcon, CloseIcon } from "@chakra-ui/icons";
  import { useState } from "react";
  
  function ChatPopup() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");
  
    const handleSendMessage = () => {
      if (currentMessage.trim()) {
        setMessages([...messages, { from: "user", text: currentMessage.trim() }]);
        setCurrentMessage("");
        // Simulated response from "support"
        setTimeout(() => {
          setMessages([...messages, { from: "user", text: currentMessage.trim() }, { from: "support", text: "Thank you for your message!" }]);
        }, 1000);
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
              overflowY="auto"
              spacing="4"
              align="start"
              divider={<Box border="1px solid" borderColor="gray.200" w="full" />}
            >
              {messages.map((message, idx) => (
                <Flex
                  key={idx}
                  alignSelf={message.from === "user" ? "flex-end" : "flex-start"}
                >
                  <Box
                    bg={message.from === "user" ? "blue.500" : "gray.200"}
                    color={message.from === "user" ? "white" : "black"}
                    p={2}
                    borderRadius="md"
                  >
                    {message.text}
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
  