import React, { createContext } from 'react';

import getUserFromLocalStorage from '../utils/getUserFromStorage';

import useAuthHandler, { UserAuth, DEFAULT_USER } from '../customHooks/AuthCustomHooks';


type AuthContext = {
    auth: UserAuth;
    setLoginData: (userAuth: UserAuth) => void;
    setLogout: () => void;
}

export const authContext = createContext<AuthContext>({
    auth: DEFAULT_USER,
    setLoginData: () => { },
    setLogout: () => { }
})

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const { auth, setLoginData, setLogout } = useAuthHandler(getUserFromLocalStorage());

    return (
        <authContext.Provider value={{ auth, setLoginData, setLogout }}>
            {children}
        </authContext.Provider>
    )

};

export default AuthContextProvider;