import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ColorService from '../../common/services/ColorService';
import DistrictDetailsScreen from './DistrictDetailsScreen';
import DistrictOfficersScreen from './DistrictOfficersScreen';

const DistrictDetailsMainScreen: () => React$Node = (props) => {
    let districtId = props.route.params.districtId;

    let Tab = createMaterialTopTabNavigator();

    return (
        <>
            <Tab.Navigator tabBarOptions={{
                indicatorStyle: {
                    backgroundColor: ColorService.PRIMARY_COLOR,
                },
            }}>
                <Tab.Screen name="District Details" component={DistrictDetailsScreen}
                            initialParams={{districtId: districtId}}/>
                <Tab.Screen name="District Council" component={DistrictOfficersScreen}
                            initialParams={{districtId: districtId}}/>
            </Tab.Navigator>
        </>
    );
};

export default DistrictDetailsMainScreen;
