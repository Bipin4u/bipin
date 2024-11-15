import React from "react";
import { Avatar, Heading, VStack, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import FullScreenSection from "./FullScreenSection";

// Create motion components
const MotionVStack = motion(VStack);
const MotionAvatar = motion(Avatar);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    padding={{ base: 4, md: 8 }} // Responsive padding
  >
    <MotionVStack
      spacing={{ base: 6, md: 8 }}
      textAlign="center"
      width="100%"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <MotionAvatar
        size={{ base: "xl", md: "2xl" }}
        name="Bipin Kumar"
        src="https://myresumeimage.s3.ap-south-1.amazonaws.com/images/Bipin.jpg"
        borderWidth="4px"
        borderColor="black"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      />
      <MotionHeading
        as="h1"
        size={{ base: "xl", md: "2xl" }}
        color="white"
        fontWeight="bold"
        mb={2}
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        Hello, I am Bipin!
      </MotionHeading>
      <MotionText
        fontSize={{ base: "md", md: "lg", lg: "xl" }}
        color="white"
        maxWidth="80%"
        mx="auto"
        lineHeight="1.5"
        fontStyle="italic"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        A front-end developer specialized in React
      </MotionText>
    </MotionVStack>
  </FullScreenSection>
);

export default LandingSection;
