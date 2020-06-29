import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import AppScreen from './AppScreen';
import {StatusBar} from 'react-native';
import InitService from '../../lib/services/InitService';
import LoginService from '../../lib/services/LoginService';
import GlobalService from '../../lib/services/GlobalService';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import LoginAPIService from './services/LoginAPIService';
import {bindActionCreators} from 'redux';
import {setUser} from '../../redux/actions/UserActions';
import {connect} from 'react-redux';

class MainScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedInState: LoginService.NOT_LOGGED_IN,
        };
    }

    async componentDidMount(): void {
        InitService.setGlobalListeners();

        // InitService.getGlobalEventEmitter().addListener('logged_in_state_change', (payload) => {
        //     this.setState({
        //         loggedInState: payload.logged_in_state_changed,
        //     });
        // });
        //
        // GoogleSignin.configure({
        //     webClientId: '782712513524-cisligbg23rdh5tsttd9c651v0lp7pk2.apps.googleusercontent.com',
        //     iosClientId: '782712513524-s2l3jue80cqqtlk1vjh9o7itjvorajrc.apps.googleusercontent.com',
        //     offlineAccess: true,
        // });
        //
        // this.subscriber = auth().onAuthStateChanged(this.onAuthStateChanged);
    }

    componentWillUnmount(): void {
        InitService.removeGlobalListeners();
        // this.subscriber();
    }

    // onAuthStateChanged = (user) => {
    //     console.log('onAuthStateChanged main');
    //     if (user) {
    //         console.log(user);
    //
    //         LoginAPIService.getAuthUserApi(user._user.email).then(async (response) => {
    //             console.log('response');
    //             console.log(response);
    //
    //             if (response.data.data.data) {
    //
    //                 let {user, actions} = this.props;
    //                 actions.setUser(user);
    //
    //                 GlobalService.set('user', response.data.data.data);
    //                 GlobalService.set('permissions', response.data.data.meta);
    //                 this.setState({
    //                     loggedInState: LoginService.IN_APP,
    //                 });
    //             }
    //         });
    //     }
    // };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const MainStack = createStackNavigator();

        let {appState} = this.props;

        return (
            <>
                <StatusBar barStyle="default" networkActivityIndicatorVisible={true}/>

                <NavigationContainer>
                    <MainStack.Navigator headerMode={'none'} screenOptions={{
                        gestureEnabled: false,
                    }}>
                        {
                            appState.appState === LoginService.LOGGED_IN ? (
                                <MainStack.Screen name="App" component={AppScreen}/>
                            ) : (
                                <MainStack.Screen name="Login" component={LoginScreen}/>
                            )
                        }
                    </MainStack.Navigator>
                </NavigationContainer>
            </>
        );
    }
};

let mapStateToProps = state => ({
    user: state.user,
    appState: state.appState,
});

export default connect(mapStateToProps)(MainScreen);
