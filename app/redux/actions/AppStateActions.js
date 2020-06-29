import {Constants} from '../constants/Constants';

export const setAppState = (appState) => {
    return {
        type: Constants.APP_STATE,
        payload: appState,
    };
};
