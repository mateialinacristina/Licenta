import React from 'react';
import { ChakraProvider, Flex, Box, CSSReset } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserTypeProvider } from './UserTypeContext'

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Locations from './pages/Locations';
import ViewHome from './pages/ViewHome';
import Application from './pages/Application';
import OrgSignup from './pages/OrgSignup';
import AddLocation from './pages/AddLocation';
import Chat from './pages/Chat';
import Organizations from './pages/Organizations';
import Reservations from './pages/Reservations';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';




function App() {
  return (
    <UserTypeProvider> 
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Flex direction="column" minH="100vh">
          <Navbar />
          
          <Box bg="#D6E9EF" flex="1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/organizations" element={<Organizations />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/viewhome/:id" element={<ViewHome />} />
              <Route path="/application" element={<Application />} />
              <Route path="/orgsignup" element={<OrgSignup />} />
              {Cookies.get("role") === "Organization"?
              <>
              <Route path="/addlocation" element={<AddLocation />}/>
              <Route path="/chat" element={<Chat />} />
              <Route path="/reservations" element={<Reservations />} />
              </>
              : <></>}
            </Routes>
          </Box>
          <Footer />
        </Flex>
      </Router>
      <ToastContainer />
    </ChakraProvider>
    </UserTypeProvider> 
    
  );
}

export default App;
