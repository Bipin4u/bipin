import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b" py={4} px={{ base: 4, sm: 6, md: 12 }}>
      <Flex
        direction="column"
        align="center"
        color="white"
        maxWidth="1024px"
        margin="0 auto"
      >
        <Text fontSize={{ base: "sm", md: "md" }} textAlign="center">
          Bipin • © 2024
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
