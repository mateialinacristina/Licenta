import React, { useEffect, useRef, useState } from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";

const Messages = ({ messages }) => {

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  return (
    <Flex
      w="100%"
      h="80%"
      overflowY="scroll"
      flexDirection="column"
      p={['1', '3']}
    >
      {messages.map((item, index) => {
        const isFromMe = item.isOrganization === true;
        return (
          <Flex
            key={index}
            w="100%"
            justify={isFromMe ? 'flex-end' : 'flex-start'}
          >
            <Flex
              bg={isFromMe ? 'black' : 'gray.100'}
              color={isFromMe ? 'white' : 'black'}
              minW="80px"
              maxW={['250px', '300px', '350px']}
              my="1"
              p="3"
            >
              {!isFromMe && (
                <Avatar
                  name="Computer"
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                  bg="blue.300"
                  size="xs"
                  mr="3"
                />
              )}
              <Text>{item.messageSend}</Text>
            </Flex>
          </Flex>
        );
      })}
      <AlwaysScrollToBottom />
    </Flex>
  );
};

export default Messages;