import React from "react";
import { NavLink } from "react-router-dom";
import {
  ChakraProvider,
  Flex,
  Box,
  HStack,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <ChakraProvider>
      <Box w={"90vw"} ml={"4.3vw"}>
        {/* start header menu */}
        <Flex height={"10vh"}>
          <HStack>
            <Text
              textColor={"#F5F5F5"}
              fontSize={"24px"}
              fontWeight={"semibold"}
            >
              Muhammad
            </Text>
            <Text
              textColor={"#A0AEC0"}
              fontSize={"24px"}
              fontWeight={"semibold"}
            >
              Ibrahim
            </Text>

            <HStack
              // textColor={"#E2E8F0"}
              textColor={"#A0AEC0"}
              spacing={"20"}
              justifyContent={"end"}
              w={"73vw"}
              fontSize={"16px"}
              fontWeight={"medium"}
            >
              {/* <Text>Home</Text> */}
              <NavLink
                to="/home"
                style={({ isActive }) => {
                  return { color: isActive ? "#F5F5F5" : "" };
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                style={({ isActive }) => {
                  return { color: isActive ? "#F5F5F5" : "" };
                }}
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                style={({ isActive }) => {
                  return { color: isActive ? "#F5F5F5" : "" };
                }}
              >
                Services
              </NavLink>
              <NavLink
                to="/portfolio"
                style={({ isActive }) => {
                  return { color: isActive ? "#F5F5F5" : "" };
                }}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/contact"
                style={({ isActive }) => {
                  return { color: isActive ? "#F5F5F5" : "" };
                }}
              >
                Contact
              </NavLink>
            </HStack>
          </HStack>
        </Flex>
        {/* end header menu */}

        {/* start header profile */}
        <Flex justifyContent={"space-around"} mt={"70px"} marginBottom={"40px"}>
          <Flex direction={"column"} mt={"70px"}>
            <Text textColor={"#A0AEC0"} fontSize={"14px"} fontWeight={"medium"}>
              THIS IS ME
            </Text>
            <Text
              textColor={"#F5F5F5"}
              fontSize={"18px"}
              fontWeight={"semibold"}
            >
              Muhammad Ibrahim
            </Text>
            <Text
              textColor={"#E2E8F0"}
              fontSize={"16px"}
              fontWeight={"semibold"}
            >
              A Front-End Developer with one year experience.
            </Text>
            <Text
              textColor={"#E2E8F0"}
              fontSize={"16px"}
              fontWeight={"semibold"}
            >
              Working on HTML CSS Bootstrap and React JS.
            </Text>
            <Button
              rightIcon={<ArrowForwardIcon />}
              // colorScheme="cyan"
              colorScheme="blue"
              variant="outline"
              size={"sm"}
              width={"100px"}
              height={"35px"}
              mt={"15px"}
              bg={"#CBD5E0"}
            >
              Hire Me
            </Button>
          </Flex>

          <Image
            src="images/display.jpg"
            w={"24vw"}
            h={"52vh"}
            border={"2px solid #A0AEC0"}
            borderRadius={"full"}
            _hover={{zoom:'99%'}}
          />
        </Flex>
        {/* end header profile */}
      </Box>
    </ChakraProvider>
  );
};

export default Header;
