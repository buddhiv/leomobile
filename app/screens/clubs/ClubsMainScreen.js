import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ClubsScreen from './ClubsScreen';
import ClubDetailsScreen from './ClubDetailsScreen';
import DrawerLeftButtonComponent from '../../common/components/DrawerLeftButtonComponent';
import ClubsFilterScreen from './ClubsFilterScreen';

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
                <Stack.Screen name="Club Details" component={ClubDetailsScreen}/>
                <Stack.Screen name="Filter Clubs" component={ClubsFilterScreen}/>
            </Stack.Navigator>
        </>
    );
};

export default ClubsMainScreen;
