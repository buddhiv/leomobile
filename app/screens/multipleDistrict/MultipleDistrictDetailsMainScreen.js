import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MultipleDistrictDetailsScreen from './MultipleDistrictDetailsScreen';
import MultipleDistrictOfficersScreen from './MultipleDistrictOfficersScreen';

const MultipleDistrictDetailsMainScreen: () => React$Node = (props) => {
    let Tab = createMaterialTopTabNavigator();

    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="MD 306 Details" component={MultipleDistrictDetailsScreen}/>
                <Tab.Screen name="MD 306 Council" component={MultipleDistrictOfficersScreen}/>
            </Tab.Navigator>
        </>
    );
};

export default MultipleDistrictDetailsMainScreen;
