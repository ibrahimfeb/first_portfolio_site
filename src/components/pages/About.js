import React from "react";
import {
  ChakraProvider,
  Flex,
  Box,
  Stack,
  VStack,
  Text,
  Image,
  Button,
  Divider,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

const About = () => {
  return (
    <ChakraProvider>
      <Box w={"90vw"} ml={"4.3vw"} mt={"10px"}>
        <Flex justifyContent={"space-around"}>
          {/* start image */}
          <Flex
            bg={"#444444"}
            width={"28vw"}
            height={"70vh"}
            justifyContent={"end"}
          >
            <Image
              src="images/bio_data_edited.jpg"
              w={"27vw"}
              h={"67.5vh"}
              border={"2px solid #A0AEC0"}
              mt={"15px"}
              _hover={{zoom:'99%'}}
            />
          </Flex>
          {/* end image */}

          <Stack>
            <VStack textColor={"#E2E8F0"} spacing={"5px"}>
              <Text fontSize={"18px"} fontWeight={"semibold"}>
                My Bio-Data
              </Text>
              <Divider />
              <Flex direction={"column"}>
                <Text fontSize={"15px"} fontWeight={"light"}>
                  I'm Muhammad Ibrahim. A Front-End Develop with one <br />
                  year experience.Working on HTML CSS JavaScript Bootstrap and
                  React JS.
                </Text>
                <br />
                <Text fontSize={"15px"} fontWeight={"light"}>
                  I design responsive website and many other designs.
                  <br />
                  In Front-End development I prefer modern technology React JS.
                </Text>
                <Stack>
                  {/* start range */}
                  <br />
                  {/* first */}
                  <Text fontSize={"16px"} fontWeight={"semibold"}>
                    HTML & CSS
                  </Text>
                  <Box
                    bg={"#A0AEC0 "}
                    w={"30vw"}
                    h={"3.5vh"}
                    borderRadius={"2px"}
                  >
                    <Box
                      bg={"#E2E8F0"}
                      w={"20vw"}
                      h={"3.5vh"}
                      borderRadius={"2px"}
                    >
                      <Flex textColor={"black"} justifyContent={"end"}>
                        <Text>80%</Text>
                      </Flex>
                    </Box>
                  </Box>
                  {/* second */}
                  <Text fontSize={"16px"} fontWeight={"semibold"}>
                    JavaScript
                  </Text>
                  <Box
                    bg={"#A0AEC0 "}
                    w={"30vw"}
                    h={"3.5vh"}
                    borderRadius={"2px"}
                  >
                    <Box
                      bg={"#E2E8F0"}
                      w={"15vw"}
                      h={"3.5vh"}
                      borderRadius={"2px"}
                    >
                      <Flex textColor={"black"} justifyContent={"end"}>
                        <Text>50%</Text>
                      </Flex>
                    </Box>
                  </Box>

                  {/* third */}
                  <Text fontSize={"16px"} fontWeight={"semibold"}>
                    Bootstrap
                  </Text>
                  <Box
                    bg={"#A0AEC0 "}
                    w={"30vw"}
                    h={"3.5vh"}
                    borderRadius={"2px"}
                  >
                    <Box
                      bg={"#E2E8F0"}
                      w={"17vw"}
                      h={"3.5vh"}
                      borderRadius={"2px"}
                    >
                      <Flex textColor={"black"} justifyContent={"end"}>
                        <Text>60%</Text>
                      </Flex>
                    </Box>
                  </Box>

                  {/* fourth */}
                  <Text fontSize={"16px"} fontWeight={"semibold"}>
                    React JS
                  </Text>
                  <Box
                    bg={"#A0AEC0 "}
                    w={"30vw"}
                    h={"3.5vh"}
                    borderRadius={"2px"}
                  >
                    <Box
                      bg={"#E2E8F0"}
                      w={"19vw"}
                      h={"3.5vh"}
                      borderRadius={"2px"}
                    >
                      <Flex textColor={"black"} justifyContent={"end"}>
                        <Text>70%</Text>
                      </Flex>
                    </Box>
                  </Box>
                  {/* end range */}
                  <Flex>
                    <Button
                      rightIcon={<DownloadIcon />}
                      colorScheme="blue"
                      variant="outline"
                      size={"sm"}
                      width={"200px"}
                      height={"35px"}
                      mt={"15px"}
                      bg={"#CBD5E0"}
                    >
                      Download Resume
                    </Button>
                  </Flex>
                </Stack>
              </Flex>
            </VStack>
          </Stack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default About;
