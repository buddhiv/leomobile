import React from 'react';
import {
    View,
    Text, StyleSheet, Button, Image,
} from 'react-native';
import Layout from '../../common/Layout';
import auth from '@react-native-firebase/auth';
import {GoogleSignin, GoogleSigninButton} from '@react-native-community/google-signin';
import LoginService from '../../lib/services/LoginService';
import InitService from '../../lib/services/InitService';
import LoginAPIService from './services/LoginAPIService';
import CardComponent from '../../common/components/CardComponent';
import TextWidget from '../../common/widgets/TextWidget';
import ColorService from '../../common/services/ColorService';
import TouchableComponent from '../../common/components/TouchableComponent';
import {bindActionCreators} from 'redux';
import {setUser} from '../../redux/actions/UserActions';
import {setPermissions} from '../../redux/actions/PermissionActions';
import {setAppState} from '../../redux/actions/AppStateActions';
import {connect} from 'react-redux';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
            error: '',
            username: '',
            password: '',
        };
    }

    async componentDidMount(): void {
        // this.subscriber = auth().onAuthStateChanged(this.onAuthStateChanged);
    }

    componentWillUnmount(): void {
        // this.subscriber();
    }

    // onAuthStateChanged = (user) => {
    //     console.log('onAuthStateChanged login');
    //
    //     if (user) {
    //         LoginAPIService.getAuthUserApi(user._user.email).then(async (response) => {
    //             if (!response.data.data.data) {
    //                 let authUser = {
    //                     name: user._user.displayName,
    //                     email: user._user.email,
    //                 };
    //
    //                 this.setState({
    //                     loggedInState: LoginService.LOGGED_IN,
    //                     authUser: authUser,
    //                     error: 'No User Account Associated',
    //                 });
    //             }
    //         });
    //     }
    // };

    onGoogleSignInButtonPress = async () => {
        // // Get the users ID token
        // let {idToken} = await GoogleSignin.signIn();
        //
        // // Create a Google credential with the token
        // let googleToken = auth.GoogleAuthProvider.credential(idToken);
        //
        // // Sign-in the user with the credential
        // let authResponse = await auth().signInWithCredential(googleToken);
    };

    goToApplication = async () => {
        // InitService.getGlobalEventEmitter().emit('logged_in_state_change', {
        //     logged_in_state_changed: LoginService.IN_APP,
        // });
    };

    onLoginButtonPress = async () => {
        let username = this.state.username;
        let password = this.state.password;

        let loginResult = await LoginService.loginUsingCredentials(username, password);

        if (loginResult) {
            let {actions} = this.props;
            actions.setUser(loginResult.data.data);
            actions.setPermissions(loginResult.data.meta.permissions);
            actions.setAppState(LoginService.LOGGED_IN);
        }
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={false} scrollEnabled={true}>
                <View style={{flex: 1, padding: 15}}>
                    <View style={{
                        flex: 1,
                        // backgroundColor: 'red',
                    }}>
                        <View style={{alignItems: 'center', marginTop: 50}}>
                            <Image source={require('../../assets/app-logo.png')}
                                   style={{
                                       height: 100,
                                       resizeMode: 'contain',
                                   }}/>
                        </View>

                        <CardComponent>
                            <View>
                                <Text>Login to Leo Mobile</Text>
                            </View>

                            <View style={{marginTop: 20}}>
                                <TextWidget label={'Username'}
                                            value={this.state.username}
                                            onChangeText={(text) => {
                                                this.setState({
                                                    username: text,
                                                });
                                            }}/>
                            </View>

                            <View style={{marginTop: 20}}>
                                <TextWidget label={'Password'}
                                            value={this.state.password}
                                            secured={true}
                                            onChangeText={(text) => {
                                                this.setState({
                                                    password: text,
                                                });
                                            }}/>
                            </View>

                            <View style={{marginTop: 15}}>
                                <Button title={'LOGIN'} onPress={this.onLoginButtonPress}
                                        color={ColorService.PRIMARY_COLOR}/>
                            </View>

                            <View style={{flex: 1, marginTop: 15, alignItems: 'flex-end'}}>
                                <TouchableComponent>
                                    <View style={{}}>
                                        <Text>Forgot Password?</Text>
                                    </View>
                                </TouchableComponent>
                            </View>
                        </CardComponent>

                        <View>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>
                                <GoogleSigninButton
                                    style={{width: 192, height: 48}}
                                    size={GoogleSigninButton.Size.Wide}
                                    color={GoogleSigninButton.Color.Light}
                                    onPress={this.onGoogleSignInButtonPress}/>
                            </View>
                        </View>

                        {/*<View style={{*/}
                        {/*    alignItems: 'center',*/}
                        {/*    justifyContent: 'center',*/}
                        {/*    borderWidth: StyleSheet.hairlineWidth,*/}
                        {/*    borderColor: '#acacac',*/}
                        {/*    padding: 50,*/}
                        {/*}}>*/}

                        {/*    <View style={{}}>*/}
                        {/*        <Text>Login to Leo Mobile</Text>*/}
                        {/*    </View>*/}

                        {/*    {this.state.authUser ?*/}
                        {/*        <View style={{marginBottom: 50, alignItems: 'center'}}>*/}
                        {/*            <Text style={{fontSize: 18}}>Welcome, {this.state.authUser.name}</Text>*/}
                        {/*            <Text style={{color: '#777777'}}>{this.state.authUser.email}</Text>*/}

                        {/*            {this.state.error !== '' ? <Text>{this.state.error}</Text> : null}*/}
                        {/*            <View style={{marginTop: 10}}>*/}
                        {/*                <Button*/}
                        {/*                    title="Continue to Application"*/}
                        {/*                    onPress={this.goToApplication}>*/}
                        {/*                </Button>*/}
                        {/*            </View>*/}
                        {/*        </View>*/}
                        {/*        : null}*/}

                        {/*    <View style={{alignItems: 'center'}}>*/}
                        {/*        <Text>{this.state.authUser ? 'Login Using Your Google Account' : 'Login Using Google'}</Text>*/}
                        {/*        <View style={{marginTop: 10}}>*/}
                        {/*            <GoogleSigninButton*/}
                        {/*                style={{width: 192, height: 48}}*/}
                        {/*                size={GoogleSigninButton.Size.Wide}*/}
                        {/*                color={GoogleSigninButton.Color.Dark}*/}
                        {/*                onPress={this.onGoogleSignInButtonPress}/>*/}
                        {/*        </View>*/}
                        {/*    </View>*/}
                        {/*</View>*/}
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text>Leo Mobile</Text>
                        <Text style={{color: '#777777'}}>Powered by PulseQue.</Text>
                    </View>
                </View>
            </Layout>
        );
    }
};

let mapStateToProps = state => ({
    user: state.user,
});

let mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({setUser, setPermissions, setAppState}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
