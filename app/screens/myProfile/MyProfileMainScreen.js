import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import MyProfileScreen from "./MyProfileScreen";
import MyHistoryScreen from "./MyHistoryScreen";

const MyProfileMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'My Profile'}>
                <Stack.Screen name="My Profile" component={MyProfileScreen}/>
                <Stack.Screen name="My History" component={MyHistoryScreen}/>
            </Stack.Navigator>
        </>
    )
}

export default MyProfileMainScreen;
