import React from "react";
import { Flex, Input, Button } from "@chakra-ui/react";


const Footer = ({ inputMessage, setInputMessage, handleSendMessage }) => {
  return (
    <Flex w="100%" mt="5" direction={['column-reverse', 'row']} spacing={4}>
      <Input
        placeholder="Type Something..."
        border="none"
        borderRadius="none"
        _focus={{ border: '1px solid black' }}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleSendMessage();
          }
        }}
        value={inputMessage}
        onChange={e => setInputMessage(e.target.value)}
        mb={['4', '0']}
        fontSize={['md', 'md', 'lg']}
      />
      <Button
        bg="black"
        color="white"
        borderRadius="md"
        _hover={{
          bg: 'white',
          color: 'black',
          border: '1px solid black',
        }}
        disabled={inputMessage.trim().length <= 0}
        onClick={handleSendMessage}
        width={['100%', 'auto']}
        fontSize={['md', 'md', 'lg']}
      >
        Send
      </Button>
    </Flex>
  );
};

export default Footer;