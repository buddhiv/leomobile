import React from 'react';
import {
    View,
    Text, StyleSheet, Button,
} from 'react-native';
import Layout from './Layout';
import auth from '@react-native-firebase/auth';
import {GoogleSignin, GoogleSigninButton} from '@react-native-community/google-signin';
import LoginService from '../lib/services/LoginService';
import InitService from '../lib/services/InitService';
import LoginAPIService from './services/LoginAPIService';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
            error: '',
        };
    }

    async componentDidMount(): void {
        this.subscriber = auth().onAuthStateChanged(this.onAuthStateChanged);
    }

    componentWillUnmount(): void {
        this.subscriber();
    }

    onAuthStateChanged = (user) => {
        console.log('onAuthStateChanged login');

        if (user) {
            LoginAPIService.getAuthUserApi(user._user.email).then(async (response) => {
                if (!response.data.data.data) {
                    let authUser = {
                        name: user._user.displayName,
                        email: user._user.email,
                    };

                    this.setState({
                        loggedInState: LoginService.LOGGED_IN,
                        authUser: authUser,
                        error: 'No User Account Associated',
                    });
                }
            });
        }
    };

    onGoogleSignInButtonPress = async () => {
        // Get the users ID token
        let {idToken} = await GoogleSignin.signIn();

        // Create a Google credential with the token
        let googleToken = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        let authResponse = await auth().signInWithCredential(googleToken);
    };

    goToApplication = async () => {
        InitService.getGlobalEventEmitter().emit('logged_in_state_change', {
            logged_in_state_changed: LoginService.IN_APP,
        });
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout>
                <View style={{flex: 1}}>
                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: StyleSheet.hairlineWidth,
                            borderColor: '#acacac',
                            padding: 50,
                        }}>

                            {this.state.authUser ?
                                <View style={{marginBottom: 50, alignItems: 'center'}}>
                                    <Text style={{fontSize: 18}}>Welcome, {this.state.authUser.name}</Text>
                                    <Text style={{color: '#777777'}}>{this.state.authUser.email}</Text>

                                    {this.state.error !== '' ? <Text>{this.state.error}</Text> : null}
                                    <View style={{marginTop: 10}}>
                                        <Button
                                            title="Continue to Application"
                                            onPress={this.goToApplication}>
                                        </Button>
                                    </View>
                                </View>
                                : null}

                            <View style={{alignItems: 'center'}}>
                                <Text>{this.state.authUser ? 'Login Using Your Google Account' : 'Login Using Google'}</Text>
                                <View style={{marginTop: 10}}>
                                    <GoogleSigninButton
                                        style={{width: 192, height: 48}}
                                        size={GoogleSigninButton.Size.Wide}
                                        color={GoogleSigninButton.Color.Dark}
                                        onPress={this.onGoogleSignInButtonPress}/>
                                </View>

                            </View>
                        </View>
                    </View>
                    <View style={{alignItems: 'center', marginBottom: 10}}>
                        <Text>Leo Mobile</Text>
                        <Text style={{color: '#777777'}}>Powered by PulseQue.</Text>
                    </View>
                </View>
            </Layout>
        );
    }
};

export default LoginScreen;
