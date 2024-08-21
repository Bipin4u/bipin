import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const socials = [
  { icon: faEnvelope, url: "mailto:bipinkumar9739340018@gmail.com" },
  { icon: faGithub, url: "https://github.com/bipin4u/" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/bipin-kumar-2449a71b9/" }
];

const Header = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={2}
      bg="#18181b"
      color="white"
      p={4}
      boxShadow="md"
      width="100%"
    >
      <Box maxWidth="1280px" margin="0 auto">
        <HStack
          spacing={4}
          align="center"
          justify="space-between"
          wrap="wrap"
        >
          {/* Social Media Icons */}
          <HStack spacing={4}>
            {socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
          </HStack>

          {/* Navigation Links */}
          <HStack spacing={4}>
            <Link to="/" _hover={{ textDecoration: 'underline' }}>Home</Link>
            {/* Add more links here as needed */}
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;

