import {Constants} from '../constants/Constants';

let initialState = {
    permissions: {},
};

const PermissionsReducer = (state = initialState, action) => {
    console.log('in user reducer');
    console.log(action);

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
