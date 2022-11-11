import React from "react";
import {
  ChakraProvider,
  Flex,
  Box,
  HStack,
  VStack,
  Text,
  Image,
  Button,
  FormControl,
  Input,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

const Contact = () => {
  return (
    <ChakraProvider>
      <Box w={"90vw"} ml={"4.3vw"} mt={"10px"}>
        <Text
          textColor={"#F5F5F5"}
          fontSize={"25px"}
          fontWeight={"semibold"}
          mt={"30px"}
          mb={"40px"}
        >
          Contact Me
        </Text>
        {/* start from */}
        <FormControl>
          <HStack spacing={"10"}>
            <Input
              type="text"
              w={"300px"}
              mr={"10px"}
              placeholder={"Name"}
              focusBorderColor={"#A0AEC0"}
            />
            <Input
              type="email"
              w={"300px"}
              placeholder={"Email"}
              focusBorderColor={"#A0AEC0"}
            />
          </HStack>
          <br />
          <Flex direction={"column"}>
            <Input
              type="text"
              w={"650px"}
              placeholder={"Subject"}
              focusBorderColor={"#A0AEC0"}
            />
            <br />
            <Input
              type="textarea"
              w={"650px"}
              placeholder={"Message"}
              focusBorderColor={"#A0AEC0"}
            />
            <br />
          </Flex>
          <Button
            colorScheme="blue"
            variant="outline"
            size={"sm"}
            width={"200px"}
            height={"35px"}
            mt={"15px"}
            bg={"#CBD5E0"}
          >
            Message Me
          </Button>
        </FormControl>
        {/* end form */}

        {/* start footer */}
        <Flex justifyContent={"space-around"} mt={"40px"} bg={"#444444"}>
          <Flex direction={"column"}>
            <Text
              textColor={"#F5F5F5"}
              fontSize={"25px"}
              fontWeight={"semibold"}
              mt={"30px"}
              // mb={"40px"}
            >
              About
            </Text>
            <Text
              textColor={"#E2E8F0"}
              fontSize={"16px"}
              fontWeight={"semibold"}
            >
              I design responsive website and many other desgins.
              <br />
              In Front-End development I prefer modern technology <br />
              which is React JS.
            </Text>
          </Flex>
          <Flex direction={"column"}>
            <Text
              textColor={"#F5F5F5"}
              fontSize={"25px"}
              fontWeight={"semibold"}
              mt={"30px"}
              // mb={"40px"}
            >
              Links
            </Text>
            <Text
              textColor={"#E2E8F0"}
              fontSize={"16px"}
              fontWeight={"semibold"}
            >
              Home
              <br />
              About
              <br />
              Services
              <br />
              Portfolio
              <br />
              Contact
            </Text>
          </Flex>
          <Flex direction={"column"}>
            <Text
              textColor={"#F5F5F5"}
              fontSize={"25px"}
              fontWeight={"semibold"}
              mt={"30px"}
              // mb={"40px"}
            >
              Services
            </Text>
            <Text
              textColor={"#E2E8F0"}
              fontSize={"16px"}
              fontWeight={"semibold"}
            >
              Web Design
              <br />
              Web Development
              <br />
              Online Classes
              <br />
              YouTube Courses
              <br />
              Mern
            </Text>
          </Flex>
          <Flex direction={"column"}>
            <Text
              textColor={"#F5F5F5"}
              fontSize={"25px"}
              fontWeight={"semibold"}
              mt={"30px"}
              // mb={"40px"}
            >
              Have a Questions?
            </Text>
            <HStack>
              <Text
                textColor={"#E2E8F0"}
                fontSize={"16px"}
                fontWeight={"semibold"}
              >
                Lives at Islamabad, Pakistan
              </Text>
            </HStack>
            <HStack>
              <PhoneIcon
                textColor={"#E2E8F0"}
                fontSize={"16px"}
                fontWeight={"semibold"}
              />
              <Text
                textColor={"#E2E8F0"}
                fontSize={"16px"}
                fontWeight={"semibold"}
              >
                0304-3544252
              </Text>
            </HStack>
            <HStack>
              <EmailIcon
                textColor={"#E2E8F0"}
                fontSize={"16px"}
                fontWeight={"semibold"}
              />
              <Text
                textColor={"#E2E8F0"}
                fontSize={"16px"}
                fontWeight={"semibold"}
              >
                muhammadibrahim5644@gmail.com
              </Text>
            </HStack>
          </Flex>
        </Flex>
        {/* end footer */}
        {/* start lower footer */}
        <VStack bg={"#444444"} spacing={"-5px"}>
          <Image src="images/footer.png" w={"200px"} h={"100"} _hover={{zoom:'99%'}} 
 />
          <Text textColor={"#E2E8F0"} fontSize={"16px"} fontWeight={"semibold"}>
            Copyright All rights reserved | This design is made by Muhammad
            Ibrahim
          </Text>
        </VStack>
        {/* end lower footer */}
      </Box>
    </ChakraProvider>
  );
};

export default Contact;
