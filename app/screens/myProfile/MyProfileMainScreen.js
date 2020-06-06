import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyHistoryScreen from './MyHistoryScreen';
import MemberDetailsScreen from '../members/MemberDetailsScreen';
import {Text} from 'react-native';
import DrawerLeftButtonComponent from '../../common/components/DrawerLeftButtonComponent';

const MyProfileMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'My Profile'}>
                <Stack.Screen name="My Profile" component={MemberDetailsScreen}
                              initialParams={{
                                  mode: 'my',
                              }}
                              // options={({navigation}) => ({
                              //     headerLeft: () => (
                              //         <DrawerLeftButtonComponent onPress={navigation.toggleDrawer}/>
                              //     ),
                              // })}
                />
            </Stack.Navigator>
        </>
    );
};

export default MyProfileMainScreen;
