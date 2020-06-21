import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MemberDetailsScreen from '../members/MemberDetailsScreen';
import MultipleDistrictDetailsMainScreen from './MultipleDistrictDetailsMainScreen';

const MultipleDistrictMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'MD 306'}>
                <Stack.Screen name="MD 306" component={MultipleDistrictDetailsMainScreen}
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
