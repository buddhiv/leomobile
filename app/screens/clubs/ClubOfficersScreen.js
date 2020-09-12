import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, ScrollView, View, Text, Image, StyleSheet, Button} from 'react-native';
import moment from 'moment';
import Layout from '../../common/Layout';
import ClubDetailsService from './services/ClubDetailsService';
import ClubDirectoryItemComponent from './components/ClubDirectoryItemComponent';
import CardComponent from '../../common/components/CardComponent';
import ClubsAPIService from './services/ClubsAPIService';
import DistrictsAPIService from '../districts/services/DistrictsAPIService';
import MemberDetailsService from '../members/services/MemberDetailsService';
import UserService from '../../common/services/UserService';
import ColorService from '../../common/services/ColorService';
import TouchableComponent from '../../common/components/TouchableComponent';
import IconComponent from '../../common/components/IconComponent';
import PermissionsService from '../../common/services/PermissionsService';
import {connect} from 'react-redux';

class ClubOfficersScreen extends React.Component {

    constructor(props) {
        super(props);

        this.clubId = props.route.params.clubId;

        this.state = {
            clubId: this.clubId,
            directory: [],
            loading: false,
        };
    }

    componentDidMount(): void {
        this.getClubDetails(this.state.clubId);
    }

    getClubDetails = async (clubId) => {
        try {
            let clubResult = await ClubsAPIService.getClubDetailsApi(clubId);

            let stateObj = {
                directory: clubResult.data.data.directory,
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

    goToMemberDetails = (memberId) => {
        this.props.navigation.navigate('Member Details', {
            memberId: memberId,
        });
    };

    goToManageClubOfficers = () => {

    };

    isClubEditable = () => {
        //TODO: need to be improved
        // return (PermissionsService.getPermission(this.props.permissions.permissions, 'club_profile').update && (MemberDetailsService.getClubId(this.props.user.user) === this.state.club.id));
        return true;
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={this.state.loading} scrollEnabled={true}>
                <View style={{padding: 15}}>
                    {ClubDetailsService.isClubKeyOfficersAdded(this.state.directory) ?
                        <CardComponent cardStyle={{padding: 0}}>
                            <View style={{
                                padding: 15,
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                borderBottomColor: '#dddddd',
                            }}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={{flex: 1}}>
                                        <Text style={{fontWeight: 'bold'}}>Club Key Officers</Text>
                                    </View>

                                    {this.isClubEditable() ? <TouchableComponent onPress={this.goToManageClubOfficers}>
                                        <IconComponent.MaterialCommunityIcons name={'playlist-edit'} size={18}
                                                                              color={ColorService.SECONDARY_COLOR_DARK}/>
                                    </TouchableComponent> : null}
                                </View>

                                {/*<View style={{flexDirection: 'row', flexWrap: 'wrap', flex: 1}}>*/}
                                {/*    <View style={{width: '50%', backgroundColor: 'green'}}><Text>sss</Text></View>*/}
                                {/*    <View style={{width: '50%', backgroundColor: 'red'}}><Text>sss</Text></View>*/}
                                {/*    <View style={{width: '50%', backgroundColor: 'green'}}><Text>sss</Text></View>*/}
                                {/*</View>*/}

                                <View>
                                    {
                                        this.state.directory.map((directoryItem, index) => {
                                            return <ClubDirectoryItemComponent directoryItem={directoryItem}
                                                                               key={index}
                                                                               onPressProfilePicture={this.goToMemberDetails}
                                            />;
                                        })
                                    }
                                </View>
                            </View>
                        </CardComponent> : <View style={{flex: 1, alignItems: 'center', marginVertical: 50}}>
                            <Text style={{color: '#777777', textAlign: 'center'}}>
                                No Club Officers Appointed.
                            </Text>
                        </View>}
                </View>
            </Layout>
        );
    }
};

let mapStateToProps = state => ({
    user: state.user,
    permissions: state.permissions,
});

export default connect(mapStateToProps)(ClubOfficersScreen);

