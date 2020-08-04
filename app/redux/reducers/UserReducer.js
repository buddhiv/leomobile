import {Constants} from '../constants/Constants';

let initialState = {
    user: {},
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case Constants.EDIT_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default UserReducer;
