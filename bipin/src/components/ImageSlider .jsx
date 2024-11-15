import React, { useState, useEffect } from "react";
import "swiper/css";
import Swiper_ from "./Swiper_";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "../CSS/Swipper.css";
import { Heading } from "@chakra-ui/react";


const ImageSlider = () => {
  const [awards, setAwards] = useState([]);
  const [coursera, setCoursera] = useState([]);
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://tq5z9zzcp5.execute-api.ap-south-1.amazonaws.com/portfolio"
        );
        const jsonResponse = await response.json();

        // Parsing the JSON string in the body field
        const data = JSON.parse(jsonResponse.body);

        setAwards(data.awards || []);
        setCoursera(data.coursera || []);
        setSports(data.sports || []);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="slider_image">
      <Heading
        as="h1"
        id="achievement-section"
        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
        color="white"
        mb={4}
        textAlign="center"
        mx="auto"
        my={4}
      >
        Achievements
      </Heading>
      <Heading
        as="h1"
        id="achievement-section"
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        color="white"
        mb={1}
        textAlign="center"
        mx="auto"
        my={2}
      >
        Awards
      </Heading>
      <Swiper_ awards={awards} />
      <Heading
        as="h1"
        id="achievement-section"
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        color="white"
        mb={1}
        textAlign="center"
        mx="auto"
        my={2}
      >
        Course Certificates
      </Heading>
      <Swiper_ awards={coursera} />
      <Heading
        as="h1"
        id="achievement-section"
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        color="white"
        mb={1}
        textAlign="center"
        mx="auto"
        my={2}
      >
        Sports and Co-curricular Activities
      </Heading>
      <Swiper_ awards={sports} />
    </main>
  );
};

export default ImageSlider;
