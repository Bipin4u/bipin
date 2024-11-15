import React, { useEffect } from "react";
import { Card, CardBody, Stack, Heading, Divider, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import '../CSS/Projectcard.css'; // Your custom styles

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
      minW={{ base: "100%", sm: "90%", md: "80%" }}
      overflow="hidden"
      boxShadow="lg"
      borderRadius="lg"
      display="flex"
      flexDirection="column"
      height="100%"
      bg="gray.800"
      p={4}
      transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "xl",
      }}
    >
      <Link to={path}>
        <CardBody p={0}>
          <img
            src={imageSrc}
            alt={title}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "lg",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease-in-out",
            }}
          />
          <Stack mt="4" spacing="3">
            <Heading size="md" color="white">
              {title}
            </Heading>
            <Text color="gray.300">{description}</Text>
          </Stack>
        </CardBody>
      </Link>
      <Divider borderColor="gray.600" />
    </MotionCard>
  );
};

export default Projectcard;
