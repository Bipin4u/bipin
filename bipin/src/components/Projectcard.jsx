import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  Text,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "../CSS/Projectcard.css"; // Your custom styles

const MotionCard = motion(Card);

const Projectcard = ({ title, description, imageSrc, path, isLeft }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    } else {
      controls.start({ opacity: 0, x: isLeft ? -50 : 50 }); // Left or Right
    }
  }, [controls, inView, isLeft]);

  return (
    <MotionCard
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }} // Animate from left or right
      animate={controls}
      maxW="100%"
      overflow="hidden"
      boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1)"
      borderRadius="lg"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="gray.800"
      p={4}
      transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background 0.3s ease"
      _hover={{
        transform: "scale(1.1)", // More zoom effect on hover
        boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.3)", // Stronger shadow on hover
        bg: "gray.700", // Lighter background on hover
      }}
    >
      <Link to={path}>
        <CardBody p={0}>
          <img
            src={imageSrc}
            alt={title}
            style={{
              width: "100%",
              height: "70%",
              borderRadius: "lg",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease-in-out",
            }}
          />
          <Stack mt="4" spacing="3">
            <Heading
              fontSize={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }}
              color="white"
            >
              {title}
            </Heading>

            {/* <Text style={{ textAlign: "justify" }} color="gray.300">
              {description}
            </Text> */}
          </Stack>
        </CardBody>
      </Link>
      {/* <Divider borderColor="gray.600" /> */}
    </MotionCard>
  );
};

export default Projectcard;
