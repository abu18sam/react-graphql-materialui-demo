import { USER_DETAILS } from '../constants/localStorageKeys';

import { DEFAULT_USER } from '../customHooks/AuthCustomHooks';

const getUserFromStorage = () => {
    const userData = localStorage.getItem(USER_DETAILS);

    if(userData) {
        return JSON.parse(userData);
    }
    return DEFAULT_USER;
}

export default getUserFromStorage;