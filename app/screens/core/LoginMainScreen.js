import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import ColorService from '../../common/services/ColorService';

const LoginMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'Login'} headerMode={'none'}>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen}/>
            </Stack.Navigator>
        </>
    );
};

export default LoginMainScreen;
