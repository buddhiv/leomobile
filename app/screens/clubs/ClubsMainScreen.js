import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import ClubsScreen from "./ClubsScreen";
import ClubDetailsScreen from "./ClubDetailsScreen";

const ClubsMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'Clubs'}>
                <Stack.Screen name="Clubs" component={ClubsScreen}/>
                <Stack.Screen name="Club Details" component={ClubDetailsScreen}/>
            </Stack.Navigator>
        </>
    )
}

export default ClubsMainScreen;
