/* import React from 'react' */

import { Box, Button, HStack, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      w={"full"}
      backgroundColor={"#1A202C"}
      h={"5rem"}
      borderBottom={"3px solid white"}
      color={"white"}
    >
      <HStack
        alignItems={"center"}
        justifyContent={"flex-start"}
        spacing={"10"}
      >
        <Heading ml={"2rem"}>
          <Link to={"/"}>BitBusters</Link>
        </Heading>
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          p={"1rem"}
          w={"60%"}
        >
          <Button
            fontSize={"1rem"}
            m={"0 1rem"}
            backgroundColor={"#1A202C"}
            color={"white"}
            mt={"0.5rem"}
            _hover={{
              backgroundColor: "#1A202C",
              transform: "scale(1.1)",
              transition: "all 0.3s",
            }}
          >
            {" "}
            <Link to={"/care"}>Customer Support</Link>
          </Button>
          <Button
            fontSize={"1rem"}
            m={"0 1rem"}
            backgroundColor={"#1A202C"}
            color={"white"}
            mt={"0.5rem"}
            _hover={{
              backgroundColor: "#1A202C",
              transform: "scale(1.1)",
              transition: "all 0.3s",
            }}
          >
            {" "}
            Pricing
          </Button>
          <Button
            fontSize={"1rem"}
            m={"0 1rem"}
            backgroundColor={"#1A202C"}
            color={"white"}
            mt={"0.5rem"}
            _hover={{
              backgroundColor: "#1A202C",
              transform: "scale(1.1)",
              transition: "all 0.3s",
            }}
          >
            {" "}
            Getting Started{" "}
          </Button>
        </Box>

        <Box>
          <Button
            fontSize={"1rem"}
            m={"0 1rem"}
            backgroundColor={"#1A202C"}
            color={"white"}
            mt={"0.5rem"}
            _hover={{
              backgroundColor: "#1A202C",
              transform: "scale(1.1)",
              transition: "all 0.3s",
            }}
          >
            {" "}
            Sign Up
          </Button>
          <Button
            fontSize={"1rem"}
            m={"0 1rem"}
            backgroundColor={"#1A202C"}
            color={"white"}
            mt={"0.5rem"}
            _hover={{
              backgroundColor: "#1A202C",
              transform: "scale(1.1)",
              transition: "all 0.3s",
            }}
          >
            Log-In
          </Button>
        </Box>
      </HStack>
    </Box>
  );
};

export default Header;
