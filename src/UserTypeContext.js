import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';

const UserTypeContext = createContext();

export const UserTypeProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userObj, navigate) => {
    setUser(userObj);
    Cookies.set('userRole', userObj.role);
    if (navigate) {
      navigate('/locations'); 
    }
  };

  const logout = (navigate) => {
    setUser(null);
    Cookies.remove('userRole');
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
