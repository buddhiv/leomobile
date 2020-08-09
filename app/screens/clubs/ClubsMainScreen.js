import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ClubsScreen from './ClubsScreen';
import ClubsFilterScreen from './ClubsFilterScreen';
import MemberDetailsScreen from '../members/MemberDetailsScreen';
import ClubDetailsMainScreen from './ClubDetailsMainScreen';
import EditClubDetailsScreen from './EditClubDetailsScreen';
import ColorService from '../../common/services/ColorService';

const ClubsMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'Clubs'}
                             screenOptions={{
                                 headerTintColor: 'white',
                                 headerStyle: {
                                     backgroundColor: ColorService.PRIMARY_COLOR,
                                 },
                             }}>
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
                <Stack.Screen name="Edit Club" component={EditClubDetailsScreen}/>
            </Stack.Navigator>
        </>
    );
};

export default ClubsMainScreen;
