import React from "react";
import {
  ChakraProvider,
  Flex,
  Box,
  VStack,
  Text,
  Image,
  Button,
  Grid,
  GridItem,
  Avatar,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Services = () => {
  return (
    <ChakraProvider>
      <Box w={"90vw"} ml={"4.3vw"} mt={"40px"}>
        <Text textColor={"#F5F5F5"} fontSize={"25px"} fontWeight={"semibold"}>
          Service Offers
        </Text>
        {/* start grid */}
        <Grid templateColumns={"repeat(3,1fr)"} gap={"10"} mt={"40px"}>
          <GridItem>
            <Image
              src="images/1.jpg"
              w={"25vw"}
              h={"40vh"}
              borderRadius={"30px 60px 30px 60px"}
              border={"2px solid #A0AEC0"}
              _hover={{zoom:'99%'}}
            />
            <VStack mt={"10px"}>
              <Text
                textColor={"#F5F5F5"}
                fontSize={"25px"}
                fontWeight={"semibold"}
              >
                Web Design
              </Text>
              <Text
                textColor={"#E2E8F0"}
                fontSize={"16px"}
                fontWeight={"semibold"}
                lineHeight={"20px"}
              >
                Web design encompasses many different skills and disciplines in
                the production and maintenance of websites. The different areas
                of web design include web graphic design, user interface design.
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <Image
              src="images/2.jpg"
              w={"25vw"}
              h={"40vh"}
              borderRadius={"30px 60px 30px 60px"}
              border={"2px solid #A0AEC0"}
              _hover={{zoom:'99%'}}
            />
            <VStack mt={"10px"}>
              <Text
                textColor={"#F5F5F5"}
                fontSize={"25px"}
                fontWeight={"semibold"}
              >
                Web Development
              </Text>
              <Text
                textColor={"#E2E8F0"}
                fontSize={"16px"}
                fontWeight={"semibold"}
                lineHeight={"20px"}
              >
                Development is the work involved in developing a websites for
                the internet or the intranent. Web development can range from
                developing a simple single static page of plain text to complex
                web applications, electronic businesses.
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <Image
              src="images/3.jpg"
              w={"25vw"}
              h={"40vh"}
              borderRadius={"30px 60px 30px 60px"}
              border={"2px solid #A0AEC0"}
              _hover={{zoom:'99%'}}
            />
            <VStack mt={"10px"}>
              <Text
                textColor={"#F5F5F5"}
                fontSize={"25px"}
                fontWeight={"semibold"}
              >
                Photography
              </Text>
              <Text
                textColor={"#E2E8F0"}
                fontSize={"16px"}
                fontWeight={"semibold"}
                lineHeight={"20px"}
              >
                Photography is the art, application and practice of creating
                durable images by recording light, either electronically by
                means of an image sensor, or chemically by means of
                light-sensitive material such as photographic film.
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <Image
              src="images/4.jpg"
              w={"25vw"}
              h={"40vh"}
              borderRadius={"30px 60px 30px 60px"}
              border={"2px solid #A0AEC0"}
              _hover={{zoom:'99%'}}
            />
            <VStack mt={"10px"}>
              <Text
                textColor={"#F5F5F5"}
                fontSize={"25px"}
                fontWeight={"semibold"}
              >
                Clipping Path
              </Text>
              <Text
                textColor={"#E2E8F0"}
                fontSize={"16px"}
                fontWeight={"semibold"}
                lineHeight={"20px"}
              >
                Photography is the art, application and practice of creating
                durable images by recording light, either electronically by
                means of an image sensor, or chemically by means of
                light-sensitive material such as photographic film.
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <Image
              src="images/5.jpg"
              w={"25vw"}
              h={"40vh"}
              borderRadius={"30px 60px 30px 60px"}
              border={"2px solid #A0AEC0"}
              _hover={{zoom:'99%'}}
            />
            <VStack mt={"10px"}>
              <Text
                textColor={"#F5F5F5"}
                fontSize={"25px"}
                fontWeight={"semibold"}
              >
                Apps interface
              </Text>
              <Text
                textColor={"#E2E8F0"}
                fontSize={"16px"}
                fontWeight={"semibold"}
                lineHeight={"20px"}
              >
                Web Development is the work involved in developing a websites
                for the internet or the intranent. Web development can range
                from developing a simple single static page of plain text to
                complex web applications, electronic businesses.
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <Image
              src="images/6.jpg"
              w={"25vw"}
              h={"40vh"}
              borderRadius={"30px 60px 30px 60px"}
              border={"2px solid #A0AEC0"}
              _hover={{zoom:'99%'}}
            />
            <VStack mt={"10px"}>
              <Text
                textColor={"#F5F5F5"}
                fontSize={"25px"}
                fontWeight={"semibold"}
              >
                Graphic Design
              </Text>
              <Text
                textColor={"#E2E8F0"}
                fontSize={"16px"}
                fontWeight={"semibold"}
                lineHeight={"20px"}
              >
                Photography is the art, application and practice of creating
                durable images by recording light, either electronically by
                means of an image sensor, or chemically by means of
                light-sensitive material such as photographic film.
              </Text>
            </VStack>
          </GridItem>
        </Grid>
        {/* end grid */}

        {/* start freelancing section */}
        <Text
          textColor={"#F5F5F5"}
          fontSize={"25px"}
          fontWeight={"semibold"}
          mt={"50px"}
          mb={"40px"}
        >
          Happy Clients
        </Text>
        {/* start carousel */}
        <Box>
          <Carousel
            autoPlay
            infiniteLoop
            transitionTime={"2000"}
            interval={"10000"}
          >
            {/* first */}
            <Flex justifyContent={"center"}>
              <VStack bg={"#a1d7c9"} w={"25vw"} h={"70vh"} spacing={"5"}>
                <Avatar
                  size={"2xl"}
                  name="Dan Abrahmov"
                  src="images/1.jpg"
                  mt={"20px"}
                />
                <Text
                  textColor={"black"}
                  fontSize={"18px"}
                  fontWeight={"semibold"}
                  // mt={"50px"}
                >
                  William
                </Text>
                <Text
                  textColor={"black"}
                  fontSize={"14px"}
                  fontWeight={"medium"}
                  lineHeight={"20px"}
                  mt={"30px"}
                >
                  Photography is the art, application and practice of creating
                  durable images by recording light, either electronically by
                  means of an image sensor, or chemically by means of
                  light-sensitive material such as photographic film.
                </Text>
              </VStack>
            </Flex>

            {/* second */}
            <Flex justifyContent={"center"}>
              <VStack bg={"#efc5b5"} w={"25vw"} h={"70vh"} spacing={"5"}>
                <Avatar
                  size={"2xl"}
                  name="Dan Abrahmov"
                  src="images/2.jpg"
                  mt={"20px"}
                />
                <Text
                  textColor={"black"}
                  fontSize={"18px"}
                  fontWeight={"semibold"}
                  // mt={"50px"}
                >
                  Hanry
                </Text>
                <Text
                  textColor={"black"}
                  fontSize={"14px"}
                  fontWeight={"medium"}
                  lineHeight={"20px"}
                  mt={"30px"}
                >
                  Photography is the art, application and practice of creating
                  durable images by recording light, either electronically by
                  means of an image sensor, or chemically by means of
                  light-sensitive material such as photographic film.
                </Text>
              </VStack>
            </Flex>

            {/* third */}
            <Flex justifyContent={"center"}>
              <VStack bg={"#e1d590"} w={"25vw"} h={"70vh"} spacing={"5"}>
                <Avatar
                  size={"2xl"}
                  name="Dan Abrahmov"
                  src="images/3.jpg"
                  mt={"20px"}
                />
                <Text
                  textColor={"black"}
                  fontSize={"18px"}
                  fontWeight={"semibold"}
                  // mt={"50px"}
                >
                  Micheal
                </Text>
                <Text
                  textColor={"black"}
                  fontSize={"14px"}
                  fontWeight={"medium"}
                  lineHeight={"20px"}
                  mt={"30px"}
                >
                  Photography is the art, application and practice of creating
                  durable images by recording light, either electronically by
                  means of an image sensor, or chemically by means of
                  light-sensitive material such as photographic film.
                </Text>
              </VStack>
            </Flex>

            {/* fourth */}
            <Flex justifyContent={"center"}>
              <VStack bg={"#fdefe9"} w={"25vw"} h={"70vh"} spacing={"5"}>
                <Avatar
                  size={"2xl"}
                  name="Dan Abrahmov"
                  src="images/4.jpg"
                  mt={"20px"}
                />
                <Text
                  textColor={"black"}
                  fontSize={"18px"}
                  fontWeight={"semibold"}
                  // mt={"50px"}
                >
                  Daniel
                </Text>
                <Text
                  textColor={"black"}
                  fontSize={"14px"}
                  fontWeight={"medium"}
                  lineHeight={"20px"}
                  mt={"30px"}
                >
                  Photography is the art, application and practice of creating
                  durable images by recording light, either electronically by
                  means of an image sensor, or chemically by means of
                  light-sensitive material such as photographic film.
                </Text>
              </VStack>
            </Flex>
          </Carousel>
        </Box>
        {/* end carousel */}

        <VStack>
          <Flex justifyContent={"flex-start"}>
            <Text
              textColor={"#F5F5F5"}
              fontSize={"35px"}
              fontWeight={"semibold"}
              mt={"50px"}
              mb={"40px"}
            >
              I am available for freelancing
            </Text>
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
            Hire Me
          </Button>
        </VStack>
        {/* end freelancing section */}
      </Box>
    </ChakraProvider>
  );
};

export default Services;
