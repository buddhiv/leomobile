import React from 'react';
import {
    View,
    Text, StyleSheet, ScrollView,
} from 'react-native';
import Layout from '../../common/Layout';
import ClubsAPIService from './services/ClubsAPIService';
import CardComponent from '../../common/components/CardComponent';
import TouchableComponent from '../../common/components/TouchableComponent';
import IconComponent from '../../common/components/IconComponent';
import TableComponent from '../../common/components/TableComponent';
import ClubProfilePictureComponent from './components/ClubProfilePictureComponent';
import moment from 'moment';
import ClubDirectoryItemComponent from './components/ClubDirectoryItemComponent';
import ClubDetailsService from './services/ClubDetailsService';
import ClubDetailsComponent from './components/ClubDetailsComponent';
import ClubMembersListComponent from './components/ClubMembersListComponent';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TabView, SceneMap} from 'react-native-tab-view';
import ClubDetailsScreen from './ClubDetailsScreen';
import MembersScreen from '../members/MembersScreen';

class ClubDetailsMainScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clubId: props.route.params.clubId,
            club: {},
            directory: [],
            loading: true,
        };
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let Tab = createMaterialTopTabNavigator();

        return (
            <>
                <Tab.Navigator>
                    <Tab.Screen name="Club Details" component={ClubDetailsScreen}
                                initialParams={{clubId: this.state.clubId}}/>
                    <Tab.Screen name="Club Members" component={MembersScreen}
                                initialParams={{clubId: this.state.clubId, filterable: false}}/>
                </Tab.Navigator>
            </>
        );
    }
};

export default ClubDetailsMainScreen;
