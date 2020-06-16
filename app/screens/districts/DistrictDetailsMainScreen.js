import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DistrictDetailsScreen from './DistrictDetailsScreen';
import MembersScreen from '../members/MembersScreen';
import DistrictOfficersScreen from './DistrictOfficersScreen';

const DistrictDetailsMainScreen: () => React$Node = (props) => {
    let districtId = props.route.params.districtId;
    let Tab = createMaterialTopTabNavigator();

    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="District Details" component={DistrictDetailsScreen}
                            initialParams={{districtId: districtId}}/>
                <Tab.Screen name="District Council" component={DistrictOfficersScreen}
                            initialParams={{districtId: districtId}}/>
            </Tab.Navigator>
        </>
    );
};

export default DistrictDetailsMainScreen;
