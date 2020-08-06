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
    loginUsingGoogle: async () => {
        GoogleSignin.configure({
            webClientId: '782712513524-cisligbg23rdh5tsttd9c651v0lp7pk2.apps.googleusercontent.com',
            iosClientId: '782712513524-s2l3jue80cqqtlk1vjh9o7itjvorajrc.apps.googleusercontent.com',
            offlineAccess: true,
        });

        // Get the users ID token
        let {idToken} = await GoogleSignin.signIn();

        // Create a Google credential with the token
        let googleToken = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return await auth().signInWithCredential(googleToken);
    },
    logOut: async () => {
        await auth().signOut();
        await AsyncStorage.multiRemove(['username', 'password']);
    },
};

export default LoginService;
