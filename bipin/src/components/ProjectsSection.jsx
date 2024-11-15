import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Projectcard from "./Projectcard";

const projects = [
  {
    title: "Akira Clone (Stability Automation | DTV)",
    description:
      "Developed Python-based automation script integrating video recording with motion detection, real-time Android log collection via ADB, automated ATSC application control using pywinauto. Employed multi-threading to handle concurrent tasks such as video capture, log monitoring, remote control input simulation, XML file modifications, automated stream selection and directory creation. ",   
    getImageSrc: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/photo1.jpg",
    path: "/DigiAutomate"
  },
  {
    title: "Deep learning based recognition of crop disease by image classification | 2022",
    description:
      "Developed and deployed a crop disease detection system using the NVIDIA Jetson Nano, training a ResNet-basedConvolutional Neural Network (CNN) with labeled plant leaf images. Utilized Python with TensorFlow and Keras for model training and optimization, enabling real-time disease identification and classification.",    
    getImageSrc: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/deeplearning.png",
    path: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/FINAL+_REPORT.pdf"
  },
  {
    title: "Test script generation with python",
    description:
      "Developed a Python-based tool in a Jupyter Notebook environment that automates test case script generation for Android TV by analyzing getlogcat logs, extracting remote control keywords, and calculating time differences between operations. Integrated with Akira and DigiTV Automate ",    
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
        {projects.map((project, index) => (
          <Projectcard
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc}
            path={project.path}
            isLeft={index % 2 === 0} // Alternate between left and right
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
