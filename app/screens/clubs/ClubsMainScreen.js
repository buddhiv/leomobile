import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ClubsScreen from './ClubsScreen';
import ClubDetailsScreen from './ClubDetailsScreen';
import DrawerLeftButtonComponent from '../../common/components/DrawerLeftButtonComponent';
import ClubsFilterScreen from './ClubsFilterScreen';
import MembersScreen from '../members/MembersScreen';
import MemberDetailsScreen from '../members/MemberDetailsScreen';
import ClubDetailsMainScreen from './ClubDetailsMainScreen';

const ClubsMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'Clubs'}>
                <Stack.Screen name="Clubs" component={ClubsScreen}
                    // options={({navigation}) => ({
                    //     headerLeft: () => (
                    //         <DrawerLeftButtonComponent onPress={navigation.toggleDrawer}/>
                    //     ),
                    // })}
                />
                <Stack.Screen name="Club Details" component={ClubDetailsMainScreen}/>
                <Stack.Screen name="Member Details" component={MemberDetailsScreen}/>
                <Stack.Screen name="Filter Clubs" component={ClubsFilterScreen}/>
            </Stack.Navigator>
        </>
    );
};

export default ClubsMainScreen;
