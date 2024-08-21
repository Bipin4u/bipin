import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Skillcard from "./Skillcard";

const myskill = [
  {
    title: "Python",
    getImageSrc: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/python.png",
  },
  {
    title: "React",
    getImageSrc: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/React.png",
  },
  {
    title: "HTML",
    getImageSrc: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/HTML.png",
  },
  {
    title: "CSS",
    getImageSrc: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/CSS.png",
  },
  {
    title: "JavaScript",
    getImageSrc: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/JS.png",
  },
  {
    title: "C++",
    getImageSrc: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/C%2B%2B.png",
  },
  {
    title: "SQL",
    getImageSrc: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/SQL.png",
  },
  {
    title: "GIT",
    getImageSrc: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/GIT.png",
  },
];

const Skills = () => {
  return (
    <FullScreenSection
      backgroundColor="#2A4365"
      isDarkBackground
      alignItems="center" // Center items horizontally
      padding={{ base: 4, md: 6 }} // Responsive padding
      spacing={8} // Adjust spacing
    >

      <Heading
        as="h1"
        id="skills-section" fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} color="white"
      >
      Skills
      </Heading>
      <Box
      marginLeft='7%'
      marginTop="5%"
       justifyContent="center" // Centers the grid items horizontally
       alignItems="center" // Centers the grid items vertically
        display="grid"
        gridTemplateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }} // Responsive grid
        
        // gap={{ base: 4, md: 6 }} // Responsive gap
        gridRowGap="10%"
        width="100%"
        height="30%px"
        
      >
        {myskill.map((skill, index) => (
          <Skillcard
            key={skill.title}
            title={skill.title}
            imageSrc={skill.getImageSrc}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default Skills;
