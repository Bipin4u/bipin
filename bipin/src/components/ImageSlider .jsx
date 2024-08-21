import React from 'react';
import 'swiper/css';
import Swiper_ from "./Swiper_";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import '../CSS/Swipper.css';
import { Heading } from "@chakra-ui/react";

const awards = [
  { title: "College", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/College.png" },
  { title: "ERS", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/ERS.png" },
  { title: "State", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/State.png" },
  { title: "Texas", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/Texas.png" },
];

const coursera = [
  { title: "13", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/COURSERA13.png" },
  { title: "12", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/COURSERA12.png" },
  { title: "11", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/COURSERA11.png" },
  { title: "10", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/COURSERA10.png" },
  { title: "9", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/COURSERA9.png" },
  { title: "8", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/COURSERA8.png" },
  { title: "7", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/COURSERA7.png" },
  { title: "6", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/COURSERA6.png" },
  { title: "5", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/COURSERA5.png" },
  { title: "4", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/COURSERA4.png" },
  { title: "3", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/COURSERA3.png" },
  { title: "2", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/COURSERA2.png" },
  { title: "1", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/COURSERA1.png" },
]

const sports = [
  { title: "26", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/26.png" },
  { title: "25", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/25.png" },
  { title: "24", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/24.png" },
  { title: "23", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/23.png" },
  { title: "22", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/22.png" },
  { title: "21", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/21.png" },
  { title: "20", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/20.png" },
  { title: "19", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/19.png" },
  { title: "18", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/18.png" },
  { title: "17", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/17.png" },
  { title: "16", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/16.png" },
  { title: "15", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/15.png" },
  { title: "14", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/14.png" },
  { title: "13", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/13.png" },
  { title: "12", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/12.png" },
  { title: "11", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/11.png" },
  { title: "10", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/10.png" },
  { title: "9", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/9.png" },
  { title: "8", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/8.png" },
  { title: "7", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/7.png" },
  { title: "6", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/6.png" },
  { title: "5", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/5.png" },
  { title: "4", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/4.png" },
  { title: "3", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/3.png" },
  { title: "2", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/2.png" },
  { title: "1", src: "https://myresumeimage.s3.ap-south-1.amazonaws.com/images/1.png" },
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
            <Heading
        as="h1"
        id="achievement-section"
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        color="white"
        mb={1}
        textAlign="center"
        mx="auto"
        my={2}
      >Awads</Heading>
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
      >Course Certificates</Heading>
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
      >Sports and Co-curricular Activities</Heading>
      <Swiper_ awards={sports} />

    </main>
  );
}

export default ImageSlider;
