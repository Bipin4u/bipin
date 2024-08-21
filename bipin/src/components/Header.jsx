import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, IconButton, useDisclosure, VStack, useBreakpointValue } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const socials = [
  { icon: faEnvelope, url: "mailto:bipin.kumar.pros@gmail.com" },
  { icon: faGithub, url: "https://github.com/bipin4u/" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/bipin-kumar-2449a71b9/" }
];

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (isMobile) onToggle(); // Close the menu on mobile when an item is clicked
  };

  const downloadResume = () => {
    const resumeUrl = 'https://github.com/Bipin4u/Resume/raw/main/Resume.pdf'; 
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'Resume.pdf'; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

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
          <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
            {socials.map((social, index) => (
              <Link key={index} href={social.url} isExternal>
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </Link>
            ))}
          </HStack>

          {/* Hamburger Menu Button for Mobile */}
          {isMobile && (
            <IconButton
              aria-label="Toggle Menu"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={onToggle}
              variant="outline"
              color="white"
            />
          )}

          {/* Navigation Links */}
          <HStack
            spacing={4}
            display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
            flexDirection={{ base: 'column', md: 'row' }}
            align="center"
          >
            <Link onClick={() => handleClick('projects')} _hover={{ textDecoration: 'underline' }}>Projects</Link>
            <Link onClick={() => handleClick('skills')} _hover={{ textDecoration: 'underline' }}>Skills</Link>
            <Link onClick={() => handleClick('achievement')} _hover={{ textDecoration: 'underline' }}>Achievements</Link>
            <Link onClick={() => handleClick('contactme')} _hover={{ textDecoration: 'underline' }}>Contact</Link>


            <Link onClick={downloadResume} _hover={{ textDecoration: 'underline' }}>Resume</Link>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
