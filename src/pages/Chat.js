import { Flex, useColorModeValue, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Divider from "../components/ChatDivider";
import Footer from "../components/ChatFooter";
import Header from "../components/ChatHeader";
import Messages from "../components/Messages";
import ConversationsList from "../components/ConversationsList";

const Chat = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.800'); 
  const [messages, setMessages] = useState([
    { from: "computer", text: "Hi, My Name is HoneyChat" },
    { from: "me", text: "Hey there" },
    { from: "me", text: "Myself Ferin Patel" },
    {
      from: "computer",
      text: "Nice to meet you. You can send me a message and I'll reply to you with the same message.",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;

    setMessages((old) => [...old, { from: "me", text: data }]);
    setInputMessage("");

    setTimeout(() => {
      setMessages((old) => [...old, { from: "computer", text: data }]);
    }, 1000);
  };

  return (
    <Flex w="100%" h="100vh" justify="center" align="center" px={["4", "6"]}>
{/*       
      <Box w={["90%", "80%", "70%", "30%"]} pr={4}>
        <ConversationsList /> 
      </Box> 
      */}

      <Flex
        w={["90%", "80%", "70%", "50%"]}
        h={["80vh", "85vh", "90vh"]}
        flexDir="column"
        bg={bgColor}
        borderRadius="md"
        p={4}
      >
        <Header />
        <Divider />
        <Messages messages={messages} />
        <Divider />
        <Footer
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      </Flex>

    </Flex>
  );
};
export default Chat;
