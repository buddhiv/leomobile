import {Constants} from '../constants/Constants';

export const setPermissions = (permissions) => {
    return {
        type: Constants.SET_PERMISSIONS,
        payload: permissions,
    };
};

export const updatePermissions = (permissions) => {
    return {
        type: Constants.UPDATE_PERMISSIONS,
        payload: permissions,
    };
};

