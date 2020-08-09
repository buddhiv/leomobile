import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyHistoryScreen from './MyHistoryScreen';
import MemberDetailsScreen from '../members/MemberDetailsScreen';
import {Text} from 'react-native';
import DrawerLeftButtonComponent from '../../common/components/DrawerLeftButtonComponent';
import EditMemberDetailsScreen from '../members/EditMemberDetailsScreen';
import ColorService from '../../common/services/ColorService';

const MyProfileMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'My Profile'}
                             screenOptions={{
                                 headerTintColor: 'white',
                                 headerStyle: {
                                     backgroundColor: ColorService.PRIMARY_COLOR,
                                 },
                             }}>
                <Stack.Screen name="My Profile" component={MemberDetailsScreen}
                              initialParams={{mode: 'my'}}/>
                <Stack.Screen name="Edit Profile" component={EditMemberDetailsScreen}
                              initialParams={{mode: 'my'}}/>
            </Stack.Navigator>
        </>
    );
};

export default MyProfileMainScreen;
