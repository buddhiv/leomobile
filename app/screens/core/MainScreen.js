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
import LoginMainScreen from './LoginMainScreen';

class MainScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedInState: LoginService.NOT_LOGGED_IN,
        };
    }

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
                                <MainStack.Screen name="Login" component={LoginMainScreen}/>
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
