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
      alignItems="center"
      padding={{ base: 4, md: 6 }}
      spacing={8}
    >
      <Heading
        as="h1"
        id="skills-section"
        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
        color="white"
        textAlign="center"
      >
        Skills
      </Heading>
      <Box
        margin="0 auto"
        marginTop={{ base: "5%", md: "5%" }}
        display="grid"
        gridTemplateColumns={{
          base: "repeat(2, 1fr)", 
          sm: "repeat(3, 1fr)",    
          md: "repeat(4, 1fr)",    
        }}
        gap={{ base: 4, md: 6 }}
        width="90%"
      >
        {myskill.map((skill, index) => (
          <Skillcard
            key={skill.title}
            title={skill.title}
            imageSrc={skill.getImageSrc}
            isLeft={index % 2 === 0} // Alternate between left and right
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default Skills;
