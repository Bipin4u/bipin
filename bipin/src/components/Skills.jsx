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
          base: "repeat(2, 1fr)",  // 2 items per row on mobile
          sm: "repeat(3, 1fr)",    // 3 items per row on small screens
          md: "repeat(4, 1fr)",    // 4 items per row on medium and up
        }}
        gap={{ base: 4, md: 6 }} // Responsive gap
        width="90%" // Full width with small margin
      >
        {myskill.map((skill) => (
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
