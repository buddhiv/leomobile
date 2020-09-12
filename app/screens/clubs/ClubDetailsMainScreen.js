import React from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MembersScreen from '../members/MembersScreen';
import ColorService from '../../common/services/ColorService';
import ClubsAPIService from './services/ClubsAPIService';
import MembersAPIService from '../members/services/MembersAPIService';
import ClubDetailsComponent from './components/ClubDetailsComponent';
import Layout from '../../common/Layout';
import ClubOfficersComponent from './components/ClubOfficersComponent';
import DistrictsAPIService from '../districts/services/DistrictsAPIService';
import MemberDetailsService from '../members/services/MemberDetailsService';
import UserService from '../../common/services/UserService';
import ClubOfficersScreen from './ClubOfficersScreen';
import ClubDetailsScreen from './ClubDetailsScreen';

const ClubDetailsMainScreen: () => React$Node = (props) => {
    let clubId = props.route.params.clubId;

    let Tab = createMaterialTopTabNavigator();

    return (
        <>
            <Tab.Navigator
                tabBarOptions={{
                    indicatorStyle: {
                        backgroundColor: ColorService.PRIMARY_COLOR,
                    },
                }}>
                <Tab.Screen name="Club Details" component={ClubDetailsScreen}
                            initialParams={{clubId: clubId}}/>
                <Tab.Screen name="Club Officers" component={ClubOfficersScreen}
                            initialParams={{clubId: clubId}}/>
            </Tab.Navigator>
        </>
    );
};

export default ClubDetailsMainScreen;
