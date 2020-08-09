import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MembersScreen from './MembersScreen';
import MemberDetailsScreen from './MemberDetailsScreen';
import DrawerLeftButtonComponent from '../../common/components/DrawerLeftButtonComponent';
import MembersFilterScreen from './MembersFilterScreen';
import ColorService from '../../common/services/ColorService';

const MembersMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'Search Member'}
                             screenOptions={{
                                 headerTintColor: 'white',
                                 headerStyle: {
                                     backgroundColor: ColorService.PRIMARY_COLOR,
                                 },
                             }}>
                <Stack.Screen name="Members" component={MembersScreen}/>
                <Stack.Screen name="Member Details" component={MemberDetailsScreen}/>
                <Stack.Screen name="Filter Members" component={MembersFilterScreen}/>
            </Stack.Navigator>
        </>
    );
};

export default MembersMainScreen;
