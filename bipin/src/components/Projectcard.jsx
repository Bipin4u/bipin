import React from "react";
import { Card, CardBody, Stack, Heading, Divider, Text } from "@chakra-ui/react";
import '../CSS/Projectcard.css'; // Your custom styles
import { Link } from "react-router-dom";

const Projectcard = ({ title, description, imageSrc , path}) => {
  return (
    <Card
      maxW="100%" // Full width for responsiveness
      minW={{ base: "100%", sm: "90%", md: "80%" }} // Ensure cards are responsive
      overflow="hidden"
      boxShadow="lg" // Enhanced shadow
      borderRadius="lg" // More rounded corners
      display="flex"
      flexDirection="column"
      height="100%" // Ensure cards take full height within their grid cell
      bg="gray.800" // Background color to match the theme
      p={4} // Padding around the content
      transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out" // Smooth transition for hover effects
      _hover={{
        transform: "scale(1.05)", // Slightly enlarge the card on hover
        boxShadow: "xl", // Increase shadow intensity on hover
      }}
    >
      <Link to= {path} >
      <CardBody p={0}> {/* Remove padding around the image */}
        <img 
          src={imageSrc}
          alt={title}
          style={{ 
            width: "100%", // Full width image
            height: "auto", // Maintain aspect ratio
            borderRadius: 'lg', // Rounded corners for the image
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow around the image
            transition: 'transform 0.3s ease-in-out', // Smooth transition for image hover effect
          }}
        />
        <Stack mt='4' spacing='3'>
          <Heading size='md' color="white">
            {title}
          </Heading>
          <Text color="gray.300">
            {description}
          </Text>      
        </Stack>
      </CardBody>
      </Link>
      <Divider borderColor="gray.600" />
    </Card>
  );
};

export default Projectcard;
