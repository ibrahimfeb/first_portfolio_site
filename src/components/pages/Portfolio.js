import Reactn from "react";
import {
  ChakraProvider,
  Flex,
  Box,
  Stack,
  VStack,
  Text,
  Image,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";


const Portfolio = () => {
  return (
    <ChakraProvider>
      <Box w={"90vw"} ml={"4.3vw"} mt={"10px"}>
        <Stack>
          <Text textColor={"#F5F5F5"} fontSize={"25px"} fontWeight={"semibold"}>
            Latest Works
          </Text>
          <Text
            textColor={"#E2E8F0"}
            fontSize={"16px"}
            fontWeight={"semibold"}
            lineHeight={"20px"}
          >
            I design responsive website and many other desgins.
            <br />
            In Front-End development I prefer modern technology <br />
            which is React JS.
          </Text>
        </Stack>
        <Stack>
          <Flex justifyContent={"space-around"}>
            <Button
              colorScheme="gray"
              size={"sm"}
              width={"200px"}
              height={"35px"}
              mt={"15px"}
            >
              Websites
            </Button>
            <Button
              colorScheme="gray"
              size={"sm"}
              width={"200px"}
              height={"35px"}
              mt={"15px"}
            >
              YouTube
            </Button>
            <Button
              colorScheme="gray"
              size={"sm"}
              width={"200px"}
              height={"35px"}
              mt={"15px"}
            >
              Design
            </Button>
          </Flex>
        </Stack>
        {/* start grid */}
        <Grid templateColumns={"repeat(3,1fr)"} gap={"10"} mt={"40px"}>
          <GridItem >
            <Image
              src="images/1.jpg"
              w={"40vw"}
              h={"50vh"}
              borderRadius={"30px 60px 30px 60px"}
              border={"2px solid #A0AEC0"}
              _hover={{zoom:'99%'}}
            />
          </GridItem>
          <GridItem>
            <Image
              src="images/2.jpg"
              w={"40vw"}
              h={"50vh"}
              borderRadius={"30px 60px 30px 60px"}
              border={"2px solid #A0AEC0"}
              _hover={{zoom:'99%'}}
            />
          </GridItem>
          <GridItem>
            <Image
              src="images/3.jpg"
              w={"40vw"}
              h={"50vh"}
              borderRadius={"30px 60px 30px 60px"}
              border={"2px solid #A0AEC0"}
              _hover={{zoom:'99%'}}
            />
          </GridItem>
          <GridItem>
            <Image
              src="images/4.jpg"
              w={"40vw"}
              h={"50vh"}
              borderRadius={"30px 60px 30px 60px"}
              border={"2px solid #A0AEC0"}
              _hover={{zoom:'99%'}}
            />
          </GridItem>
          <GridItem>
            <Image
              src="images/5.jpg"
              w={"40vw"}
              h={"50vh"}
              borderRadius={"30px 60px 30px 60px"}
              border={"2px solid #A0AEC0"}
              _hover={{zoom:'99%'}}
            />
          </GridItem>
          <GridItem>
            <Image
              src="images/6.jpg"
              w={"40vw"}
              h={"50vh"}
              borderRadius={"30px 60px 30px 60px"}
              border={"2px solid #A0AEC0"}
              _hover={{zoom:'99%'}}
            />
          </GridItem>
        </Grid>
        {/* end grid */}

        {/* start history */}
        <Flex justifyContent={"space-around"} mt={"40px"}>
          <VStack>
            <Text
              textColor={"#F5F5F5"}
              fontSize={"25px"}
              fontWeight={"semibold"}
            >
              100+
            </Text>
            <Text textColor={"#F5F5F5"} fontSize={"20px"}>
              Project Completed
            </Text>
          </VStack>
          <VStack>
            <Text
              textColor={"#F5F5F5"}
              fontSize={"25px"}
              fontWeight={"semibold"}
            >
              90+
            </Text>
            <Text textColor={"#F5F5F5"} fontSize={"20px"}>
              Happy Clients
            </Text>
          </VStack>
          <VStack>
            <Text
              textColor={"#F5F5F5"}
              fontSize={"25px"}
              fontWeight={"semibold"}
            >
              3000+
            </Text>
            <Text textColor={"#F5F5F5"} fontSize={"20px"}>
              Cups of Coffee
            </Text>
          </VStack>
          <VStack>
            <Text
              textColor={"#F5F5F5"}
              fontSize={"25px"}
              fontWeight={"semibold"}
            >
              100+
            </Text>
            <Text textColor={"#F5F5F5"} fontSize={"20px"}>
              Project Completed
            </Text>
          </VStack>
        </Flex>
        {/* end history */}
      </Box>
    </ChakraProvider>
  );
};

export default Portfolio;
