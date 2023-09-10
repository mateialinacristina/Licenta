import React, { createContext, useState, useContext } from 'react';
import Cookies from 'js-cookie';
import { fetchLogout } from './axios/RequestsAuthenticate';

const UserTypeContext = createContext();

export const UserTypeProvider = ({ children }) => {
  const initialUser = {
    email: Cookies.get("email"),
    role: Cookies.get("role") // Assuming you set a cookie named "role" after logging in
  };

  const [user, setUser] = useState(initialUser);


  const login = (userObj, navigate) => {
    setUser(userObj);
    //Cookies.set('email', userObj.email);
    //Cookies.set('role', userObj.role);
    if (navigate) {
      navigate(userObj.role === 'organization' ? '/addlocation' : '/locations');
    }
  };

  const logout = (navigate) => {
    //setUser(null);
    fetchLogout();
    if (navigate) {
      navigate('/');
    }
  };

  return (
    <UserTypeContext.Provider value={{ user, login, logout }}>
      {children}
    </UserTypeContext.Provider>
  );
};

export const useUserType = () => {
  return useContext(UserTypeContext);
};
