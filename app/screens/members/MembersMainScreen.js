import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MembersScreen from './MembersScreen';
import MemberDetailsScreen from './MemberDetailsScreen';
import DrawerLeftButtonComponent from '../../common/components/DrawerLeftButtonComponent';
import MembersFilterScreen from './MembersFilterScreen';

const MembersMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'Search Member'}>
                <Stack.Screen name="Members" component={MembersScreen}
                              // options={({navigation}) => ({
                              //     headerLeft: () => (
                              //         <DrawerLeftButtonComponent onPress={navigation.toggleDrawer}/>
                              //     ),
                              // })}
                />
                <Stack.Screen name="Member Details" component={MemberDetailsScreen}/>
                <Stack.Screen name="Filter Members" component={MembersFilterScreen}/>
            </Stack.Navigator>
        </>
    );
};

export default MembersMainScreen;
