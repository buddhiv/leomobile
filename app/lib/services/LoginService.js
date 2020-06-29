import AsyncStorage from '@react-native-community/async-storage';
import {GoogleSignin} from '@react-native-community/google-signin';
import InitService from './InitService';
import auth from '@react-native-firebase/auth';
import LoginAPIService from '../../screens/core/services/LoginAPIService';

const LoginService = {
    NOT_LOGGED_IN: 'not_logged_in',
    LOGGED_IN: 'logged_in',
    IN_APP: 'in_app',
    loginUsingCredentials: async (username, password) => {
        let loginAPIResult = await LoginAPIService.getLoginAPI({
            email: username,
            password: password,
        });

        console.log('login api result');
        console.log(loginAPIResult);

        if (!loginAPIResult.data.error) {
            return loginAPIResult.data;
        } else {
            return loginAPIResult.data.error;
        }
    },
    logOut: async () => {
        await auth().signOut();

        InitService.getGlobalEventEmitter().emit('logged_in_state_change', {
            logged_in_state_changed: LoginService.NOT_LOGGED_IN,
        });
    },
};

export default LoginService;
