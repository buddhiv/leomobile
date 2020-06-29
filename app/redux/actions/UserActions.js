import {Constants} from '../constants/Constants';

export const setUser = (user) => {
    return {
        type: Constants.SET_USER,
        payload: user,
    };
};

export const updateUser = (user) => {
    return {
        type: Constants.EDIT_USER,
        payload: user,
    };
};

