import { createContext, useContext } from 'react';

const UserTypeContext = createContext();

export const useUserType = () => {
    return useContext(UserTypeContext);
};

export default UserTypeContext;
