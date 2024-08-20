import React from 'react';
import 'swiper/css';
import Swiper_ from "./Swiper_";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import '../CSS/Swipper.css';
import { Heading } from "@chakra-ui/react";

const awards = [
  { title: "College", src: "../images/College.png" },
  { title: "ERS", src: "../images/ERS.png" },
  { title: "State", src: "../images/State.png" },
  { title: "Texas", src: "../images/Texas.png" },
];

const sports = [
  { title: "26", src: "../images/26.png" },
  { title: "25", src: "../images/25.png" },
  { title: "24", src: "../images/24.png" },
  { title: "23", src: "../images/23.png" },
  { title: "22", src: "../images/22.png" },
  { title: "21", src: "../images/21.png" },
  { title: "20", src: "../images/20.png" },
  { title: "19", src: "../images/19.png" },
  { title: "18", src: "../images/18.png" },
  { title: "17", src: "../images/17.png" },
  { title: "16", src: "../images/16.png" },
  { title: "15", src: "../images/15.png" },
  { title: "14", src: "../images/14.png" },
  { title: "13", src: "../images/13.png" },
  { title: "12", src: "../images/12.png" },
  { title: "11", src: "../images/11.png" },
  { title: "10", src: "../images/10.png" },
  { title: "9", src: "../images/9.png" },
  { title: "8", src: "../images/8.png" },
  { title: "7", src: "../images/7.png" },
  { title: "6", src: "../images/6.png" },
  { title: "5", src: "../images/5.png" },
  { title: "4", src: "../images/4.png" },
  { title: "3", src: "../images/3.png" },
  { title: "2", src: "../images/2.png" },
  { title: "1", src: "../images/1.png" },
];

const ImageSlider = () => {
  return (
    <main className='slider_image'>
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
      <Heading color="white">Awads</Heading>
      <Swiper_ awards={awards} />
      <Heading color="white">Sports and Co-curricular Activities</Heading>
      <Swiper_ awards={sports} />

    </main>
  );
}

export default ImageSlider;
