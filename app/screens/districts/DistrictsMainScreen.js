import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DistrictsScreen from './DistrictsScreen';
import DistrictDetailsScreen from './DistrictDetailsScreen';
import MemberDetailsScreen from '../members/MemberDetailsScreen';

const DistrictsMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'Districts'}>
                <Stack.Screen name="Districts" component={DistrictsScreen}
                    // options={({navigation}) => ({
                    //     headerLeft: () => (
                    //         <DrawerLeftButtonComponent onPress={navigation.toggleDrawer}/>
                    //     ),
                    // })}
                />
                <Stack.Screen name="District Details" component={DistrictDetailsScreen}/>
                <Stack.Screen name="Member Details" component={MemberDetailsScreen}/>
            </Stack.Navigator>
        </>
    );
};

export default DistrictsMainScreen;
