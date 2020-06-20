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

class ClubDetailsMainScreen extends React.Component {
    constructor(props) {
        super(props);

        this.clubId = props.route.params.clubId;

        this.state = {
            clubId: this.clubId,
            club: {},
            filters: this.getDefaultFilter(),
            loading: true,
        };
    }

    componentDidMount(): void {
        this.getClubDetails(this.state.clubId);
    }

    getDefaultFilter = () => {
        return {
            filters: {
                name: '',
                gender: '',
                clubId: this.clubId,
                mylciId: '',
            },
        };
    };

    getClubDetails = async () => {
        try {
            let clubResult = await ClubsAPIService.getClubDetailsApi(this.state.clubId);
            // let membersResult = await MembersAPIService.getMembersListApi(this.state.filters);

            let stateObj = {
                club: clubResult.data.data,
                // membersList: membersResult.data.data,
                loading: false,
            };

            if (!clubResult.data.error) {
                this.setState(stateObj);
            }
        } catch (e) {
            console.log(e);
            this.setState({
                loading: false,
            });
        }
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let Tab = createMaterialTopTabNavigator();

        return (
            <>
                <Layout loading={this.state.loading} scrollEnabled={false}>

                    {this.state.club.club ? <Tab.Navigator tabBarOptions={{
                        indicatorStyle: {
                            backgroundColor: ColorService.PRIMARY_COLOR,
                        },
                    }}>
                        <Tab.Screen name="Club Details" component={ClubDetailsComponent}
                                    initialParams={{club: this.state.club}}/>
                        <Tab.Screen name="Club Officers" component={ClubOfficersComponent}
                                    initialParams={{club: this.state.club}}/>
                        {/*<Tab.Screen name="Club Members" component={MembersScreen}*/}
                        {/*            initialParams={{clubId: this.state.clubId, filterable: false}}/>*/}
                    </Tab.Navigator> : <View></View>}

                </Layout>
            </>
        );
    }
}

export default ClubDetailsMainScreen;
