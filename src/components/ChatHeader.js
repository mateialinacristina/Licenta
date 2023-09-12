import React from "react";
import { Flex, Avatar, AvatarBadge, Text } from "@chakra-ui/react";

const Header = ({name}) => {
  return (
    <Flex
      w="100%"
      direction={['column', 'row']}
      alignItems="center"
      justifyContent="center"
    >
      <Avatar
        size={['md', 'lg']}
        //name={name}
        //src="https://bit.ly/dan-abramov"
      >
        <AvatarBadge boxSize={['0.9em', '1.25em']} bg="green.500" />
      </Avatar>
      <Flex flexDirection="column" mx="5" justify="center">
        <Text fontSize={['md', 'lg']} fontWeight="bold">
        {name}
        </Text>
        <Text color="green.500">Online</Text>
      </Flex>
    </Flex>
  );
};

export default Header;