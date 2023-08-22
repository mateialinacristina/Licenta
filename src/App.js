import React, { useState } from 'react';
import { ChakraProvider, Flex, Box, CSSReset } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserTypeContext from './UserTypeContext'

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Locations from './pages/Locations';
import ViewHome from './pages/ViewHome';
import Application from './pages/Application';
import OrgSignup from './pages/OrgSignup';
import OrgSignin from './pages/OrgSignin';
import AddLocation from './pages/AddLocation';
import Chat from './pages/Chat';
import Organizations from './pages/Organizations';

function App() {
  const [userType, setUserType] = useState('user'); 
  return (
    <UserTypeContext.Provider value={{ userType, setUserType }}> 
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Flex direction="column" minH="100vh">
          <Navbar />
          <Box bg="#D6E9EF" flex="1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/viewhome" element={<ViewHome />} />
              <Route path="/application" element={<Application />} />
              <Route path="/orgsignup" element={<OrgSignup />} />
              <Route path="/orgsignin" element={<OrgSignin />} />
              <Route path="/addlocation" element={<AddLocation />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/organizations" element={<Organizations />} />
            </Routes>
          </Box>
          <Footer />
        </Flex>
      </Router>
    </ChakraProvider>
    </UserTypeContext.Provider> 
  );
}

export default App;
