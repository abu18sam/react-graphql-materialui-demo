import React, { useState } from 'react';

import { USER_DETAILS } from '../constants/localStorageKeys';

export type UserAuth = {
    id: string,
    firstName: string,
    lastName: string,
    name: string,
    email: string,
    token?: string,
}

export const DEFAULT_USER: UserAuth = {
    id: "",
    firstName: "",
    lastName: "",
    name: "",
    email: ""
}

const useAuthHandler = (InitialState: UserAuth) => {
    const [auth, setAuth] = useState(InitialState);

    const setLoginData = (userAuth: UserAuth) => {
        const updatedAuth = { ...userAuth };
        localStorage.setItem(USER_DETAILS, JSON.stringify(updatedAuth));
        setAuth(updatedAuth);
    };

    const setLogout = () => {
        localStorage.clear();
        setAuth(DEFAULT_USER);
    }

    return {
        auth,
        setLoginData,
        setLogout
    };
};

export default useAuthHandler;