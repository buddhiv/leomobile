import AsyncStorage from '@react-native-community/async-storage';
import {GoogleSignin} from '@react-native-community/google-signin';
import InitService from './InitService';
import auth from '@react-native-firebase/auth';

const LoginService = {
    NOT_LOGGED_IN: 'not_logged_in',
    LOGGED_IN: 'logged_in',
    IN_APP: 'in_app',
    logOut: async () => {
        await auth().signOut();

        InitService.getGlobalEventEmitter().emit('logged_in_state_change', {
            logged_in_state_changed: LoginService.NOT_LOGGED_IN,
        });
    },
};

export default LoginService;
