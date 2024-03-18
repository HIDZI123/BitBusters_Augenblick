import { Box, HStack, Heading, Img, Text, VStack } from "@chakra-ui/react";
import img from "../assets/img3.jpg";
import { SiClockify } from "react-icons/si";

/* import React from 'react' */
const Home = () => {
  return (
    <VStack
      justifyContent={"flex-start"}
      w={"full"}
      minH={"100vh"}
      backgroundColor={"#1A202C"}
      color={"white"}
    >
      <Box
        w={"full"}
        h={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <HStack w={"80%"} justifyContent={"flex-start"}>
          <Box w={"full"}>
            <Heading fontSize={"2rem"} p={"5"} w={"80vh"}>
              Empowering Solutions, Exceeding Expectations: Your Premier
              Customer Care Destination
            </Heading>
          </Box>

          <Img
            p={"2rem"}
            ml={"10rem"}
            src={img}
            alt={"mainImg"}
            w={"80vh"}
            h={"80vh"}
            objectFit={"contain"}
            mt={"3rem"}
            borderRadius={"100px 100px 100px 100px"}
            width={"50%"}
          />
        </HStack>
      </Box>

      <Box
        w={"full"}
        h={"70vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VStack>
          <Heading p={"1rem"} m={"1rem"} borderBottom={'1px solid white'} >
            About Us
          </Heading>
          <HStack>
            <Cards />
            <Cards />
            <Cards />
          </HStack>
        </VStack>
      </Box>
    </VStack>
  );
};

const Cards = () => {
  return (
    <Box
      h={"24rem"}
      w={"24rem"}
      p={"10"}
      display={"flex"}
      flexDirection={"column"}
      gap={"10"}
      justifyContent={"center"}
      alignItems={"center"}
      _hover={{ transform: "scale(1.1)", transition: "all 0.5s" }}
    >
      <SiClockify fontSize={"40"} />
      <Heading>Available 24 x 7</Heading>
      <Text>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime animi
        sequi assumenda voluptatem quae quidem magni deserunt laborum id totam,
        aperiam quaerat debitis repellat itaque dicta blanditiis nihil
        reprehenderit iusto!{" "}
      </Text>
    </Box>
  );
};

export default Home;
