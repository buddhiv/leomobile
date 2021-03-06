import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DistrictsScreen from './DistrictsScreen';
import DistrictDetailsMainScreen from './DistrictDetailsMainScreen';
import MemberDetailsScreen from '../members/MemberDetailsScreen';
import ColorService from '../../common/services/ColorService';
import DrawerLeftButtonComponent from '../../common/components/DrawerLeftButtonComponent';
import EditClubDetailsScreen from '../clubs/EditClubDetailsScreen';
import EditDistrictDetailsScreen from './EditDistrictDetailsScreen';

const DistrictsMainScreen: () => React$Node = (props) => {
    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator initialRouteName={'Districts'}
                             screenOptions={{
                                 headerTintColor: 'white',
                                 headerStyle: {
                                     backgroundColor: ColorService.SECONDARY_COLOR_DARK,
                                 },
                             }}>
                <Stack.Screen name="Districts" component={DistrictsScreen}
                    options={({navigation}) => ({
                        headerLeft: () => (
                            <DrawerLeftButtonComponent onPress={navigation.toggleDrawer}/>
                        ),
                    })}
                />
                <Stack.Screen name="District Details" component={DistrictDetailsMainScreen}/>
                <Stack.Screen name="Member Details" component={MemberDetailsScreen}/>
                <Stack.Screen name="Edit District" component={EditDistrictDetailsScreen}/>
            </Stack.Navigator>
        </>
    );
};

export default DistrictsMainScreen;
