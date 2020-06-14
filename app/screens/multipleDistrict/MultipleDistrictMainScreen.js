import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MultipleDistrictDetailsScreen from './MultipleDistrictDetailsScreen';
import MemberDetailsScreen from '../members/MemberDetailsScreen';

const MultipleDistrictMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'Multiple District'}>
                <Stack.Screen name="Multiple District" component={MultipleDistrictDetailsScreen}
                    // options={({navigation}) => ({
                    //     headerLeft: () => (
                    //         <DrawerLeftButtonComponent onPress={navigation.toggleDrawer}/>
                    //     ),
                    // })}
                />
                <Stack.Screen name="Member Details" component={MemberDetailsScreen}/>
            </Stack.Navigator>
        </>
    );
};

export default MultipleDistrictMainScreen;
