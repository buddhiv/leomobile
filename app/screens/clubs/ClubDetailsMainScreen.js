import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ClubDetailsScreen from './ClubDetailsScreen';
import MembersScreen from '../members/MembersScreen';
import ClubOfficersScreen from './ClubOfficersScreen';

const ClubDetailsMainScreen: () => React$Node = (props) => {
    let clubId = props.route.params.clubId;
    let Tab = createMaterialTopTabNavigator();

    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="Club Details" component={ClubDetailsScreen}
                            initialParams={{clubId: clubId}}/>
                <Tab.Screen name="Club Officers" component={ClubOfficersScreen}
                            initialParams={{clubId: clubId}}/>
                <Tab.Screen name="Club Members" component={MembersScreen}
                            initialParams={{clubId: clubId, filterable: false}}/>
            </Tab.Navigator>
        </>
    );
};

export default ClubDetailsMainScreen;
