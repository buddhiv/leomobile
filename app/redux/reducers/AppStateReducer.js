import {Constants} from '../constants/Constants';
import LoginService from '../../lib/services/LoginService';

let initialState = {
    appState: LoginService.NOT_LOGGED_IN,
};

const AppStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.APP_STATE:
            return {
                ...state,
                appState: action.payload,
            };
        default:
            return state;
    }
};

export default AppStateReducer;
