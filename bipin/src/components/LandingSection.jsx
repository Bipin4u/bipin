import React from "react";
import { Avatar, Heading, VStack, Text, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    padding={{ base: 4, md: 8 }} // Responsive padding
  >
    <VStack spacing={{ base: 6, md: 8 }} textAlign="center" width="100%">
      <Avatar
        size={{ base: "xl", md: "2xl" }} // Responsive size
        name="Bipin Kumar"
        src='https://myresumeimage.s3.ap-south-1.amazonaws.com/images/Bipin.jpg'
        borderWidth="4px"
        borderColor="black"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)"
      />
      <Heading
        as="h1"
        size={{ base: "xl", md: "2xl" }} // Responsive font size
        color="white"
        fontWeight="bold"
        mb={2}
      >
        Hello, I am Bipin!
      </Heading>
      <Text
        fontSize={{ base: "md", md: "lg", lg: "xl" }} // Responsive font size
        color="white"
        maxWidth="80%"
        mx="auto"
        lineHeight="1.5"
        fontStyle="italic"
      >
        A front-end developer specialized in React
      </Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
