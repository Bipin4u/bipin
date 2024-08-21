import React from "react";
import { Card, CardBody, Stack, Heading, Divider, Center } from "@chakra-ui/react";

const Skillcard = ({ title, imageSrc }) => {
  return (
    <Card
      maxW="100%" // Full width for better alignment in grid
      overflow="hidden"
      boxShadow="lg" // Enhanced shadow
      borderRadius="lg" // More rounded corners
      display="flex"
      flexDirection="column"
      justifyContent="center" // Center horizontally
      alignItems="center" // Center vertically
      bg="gray.800" // Background color
      p={4} // Padding around the content
      transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out" // Smooth transition for hover effects
      _hover={{
        transform: "scale(1.05)", // Slightly enlarge the card on hover
        boxShadow: "xl", // Increase shadow intensity on hover
      }}
    >
      <CardBody p={0}>
        <Center>
          <img
            src={imageSrc}
            alt={title}
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: 'md',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease-in-out',
            }}
          />
        </Center>
        <Stack mt={4} spacing={3} align="center">
          <Heading size="md" color="white">
            {title}
          </Heading>
        </Stack>
      </CardBody>
      <Divider borderColor="gray.600" />
    </Card>
  );
};

export default Skillcard;
