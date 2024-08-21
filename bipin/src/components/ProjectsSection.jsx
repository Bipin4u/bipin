import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Projectcard from "./Projectcard";

const projects = [
  {
    title: "Akira Clone (Stability Automation | DTV)",
    description:
      "An application to automate Android TV. Performs TV, stream selection operation & simultaneously captures logs and video & if issue (No AV) is observed, bug report is generated.",   
    getImageSrc: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/photo1.jpg",
    path: "/DigiAutomate"
  },
  {
    title: "Deep learning based recognition of crop disease by image classification | 2022",
    description:
      "A crop disease detection system to classify different plant disease | Python",    
    getImageSrc: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/deeplearning.png",
    path: "/"
  },
  {
    title: "Test script generation with python",
    description:
      "An application to generate test case script from TV logs for TV automation | Jupyter",    
    getImageSrc: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/photo3.jpg",
    path: "/"
  },
  {
    title: "TextForms | React.js",
    description:
      "The Textform performs uniquely flexible capabilities for processing textual data.",
    getImageSrc: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/textform.png",
    path: "/"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#2A4365"
      isDarkBackground
      spacing={12}
      padding={{ base: 4, md: 6 }} // Responsive padding
    >
<Heading
  as="h1"
  id="projects-section"
  fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
  color="white"
>
  Projects
</Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // Responsive grid
        gap={{ base: 4, md: 6 }} // Responsive gap
        width="100%" // Ensure grid takes full width
        padding={{ base: 4, md: 6 }} // Add padding around the grid
      >
        {projects.map((project) => (
          <Projectcard
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc}
            path = {project.path}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
