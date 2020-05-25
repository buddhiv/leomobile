import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyHistoryScreen from './MyHistoryScreen';
import MemberDetailsScreen from '../members/MemberDetailsScreen';

const MyProfileMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'My Profile'}>
                <Stack.Screen name="My Profile" component={MemberDetailsScreen} initialParams={{
                    mode: 'my',
                }}/>
                <Stack.Screen name="My History" component={MyHistoryScreen}/>
            </Stack.Navigator>
        </>
    );
};

export default MyProfileMainScreen;
