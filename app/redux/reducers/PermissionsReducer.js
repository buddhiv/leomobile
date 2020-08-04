import {Constants} from '../constants/Constants';

let initialState = {
    permissions: {},
};

const PermissionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.SET_PERMISSIONS:
            return {
                ...state,
                permissions: action.payload,
            };
        case Constants.UPDATE_PERMISSIONS:
            return {
                ...state,
                permissions: action.payload,
            };
        default:
            return state;
    }
};

export default PermissionsReducer;
