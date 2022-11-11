import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";

import Header from "./pages/Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const Home = () => {
  return (
    <ChakraProvider>
      <Box w={"100%"} bg={"#222222"}>
        <Header />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </Box>
    </ChakraProvider>
  );
};

export default Home;
