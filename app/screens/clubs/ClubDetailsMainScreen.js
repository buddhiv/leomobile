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
    // constructor(props) {
    //     super(props);
    //
    //     console.log('in club details main props');
    //     console.log(props);
    //
    //     this.clubId = props.route.params.clubId;
    //     this.districtsList = props.route.params.districtsList;
    //     this.regionsList = props.route.params.regionsList;
    //
    //     this.state = {
    //         clubId: this.clubId,
    //         club: {},
    //         filters: this.getDefaultFilter(),
    //         loading: true,
    //     };
    // }

    // componentDidMount(): void {
    //     this.getClubDetails(this.state.clubId);
    // }
    //
    // getDefaultFilter = () => {
    //     return {
    //         filters: {
    //             name: '',
    //             gender: '',
    //             clubId: this.clubId,
    //             mylciId: '',
    //         },
    //     };
    // };
    //
    // getClubDetails = async (clubId) => {
    //     try {
    //         let clubResult = await ClubsAPIService.getClubDetailsApi(clubId);
    //         // let membersResult = await MembersAPIService.getMembersListApi(this.state.filters);
    //
    //         let stateObj = {
    //             club: clubResult.data.data,
    //             // membersList: membersResult.data.data,
    //             loading: false,
    //         };
    //
    //         if (!this.districtsList || !this.regionsList) {
    //             let districtsResult = await DistrictsAPIService.getDistrictsListApi();
    //             let regionsResult = await DistrictsAPIService.getRegionsListApi(MemberDetailsService.getDistrictId(UserService.getCurrentUser()));
    //
    //             this.districtsList = districtsResult.data.data;
    //             this.regionsList = regionsResult.data.data;
    //         }
    //
    //         if (!clubResult.data.error) {
    //             this.setState(stateObj);
    //         }
    //     } catch (e) {
    //         console.log(e);
    //         this.setState({
    //             loading: false,
    //         });
    //     }
    // };
    //
    // saveCallback = (clubData) => {
    //     console.log('save callback');
    //     console.log(clubData);
    //
    //     // this.setState({
    //     //     club: {},
    //     // }, () => {
    //     this.state.club.club = clubData;
    //
    //     this.setState({
    //         club: this.state.club,
    //     });
    //     // });
    // };
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
                            initialParams={{
                                clubId: clubId,
                            }}/>
                <Tab.Screen name="Club Officers" component={ClubOfficersScreen}
                            initialParams={{
                                clubId: clubId,
                            }}/>
                {/*<Tab.Screen name="Club Members" component={MembersScreen}*/}
                {/*            initialParams={{clubId: this.state.clubId, filterable: false}}/>*/}
            </Tab.Navigator>
        </>
    );
};

export default ClubDetailsMainScreen;
