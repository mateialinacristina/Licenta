import React from 'react';
import { ChakraProvider, Flex, Box, CSSReset } from "@chakra-ui/react";
import Home from './pages/Home';
import SignIn from './pages/SignIn.js';
import SignUp from './pages/SignUp.js';
import Navbar from "./components/Navbar.js"
import Footer from "./components/Footer.js"
import Locations from './pages/Locations';
import ViewHome from './pages/ViewHome';
import Application from './pages/Application.js';
import OrgSignup from './pages/OrgSignup';
import AddLocation from './pages/AddLocation';
import Chat from './pages/Chat';


function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Flex direction="column" minH="100vh" >
        <Navbar />
        <Box bg="#D6E9EF" flex="1">
          <Chat />
        </Box>
        <Footer/>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
