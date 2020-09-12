import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import moment from 'moment';
import CardComponent from '../../common/components/CardComponent';
import ClubProfilePictureComponent from './components/ClubProfilePictureComponent';
import TouchableComponent from '../../common/components/TouchableComponent';
import IconComponent from '../../common/components/IconComponent';
import ColorService from '../../common/services/ColorService';
import TableComponent from '../../common/components/TableComponent';
import Layout from '../../common/Layout';
import ClubDetailsService from './services/ClubDetailsService';
import PermissionsService from '../../common/services/PermissionsService';
import MemberDetailsService from '../members/services/MemberDetailsService';
import ClubsAPIService from './services/ClubsAPIService';
import DistrictsAPIService from '../districts/services/DistrictsAPIService';

import {connect} from 'react-redux';

class ClubDetailsScreen extends React.Component {

    constructor(props) {
        super(props);

        this.clubId = props.route.params.clubId;

        this.state = {
            clubId: this.clubId,
            club: {},
            loading: true,
        };
    }

    componentDidMount(): void {
        this.getClubDetails(this.state.clubId);
    }

    getClubDetails = async (clubId) => {
        try {
            let clubResult = await ClubsAPIService.getClubDetailsApi(clubId);

            let districtsResult = await DistrictsAPIService.getDistrictsListApi();

            let regionsResult = await DistrictsAPIService.getRegionsListApi(MemberDetailsService.getDistrictId(this.props.user.user));

            let stateObj = {
                club: clubResult.data.data.club,
                loading: false,
                districtsList: districtsResult.data.data,
                regionsList: regionsResult.data.data,
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

    getClubGeneralInformation = () => {
        return this.state.club.id ? [
            ['Charter ID', this.state.club.charterId],
            ['District', ClubDetailsService.getDistrictName(this.state.club)],
            ['Zone', ClubDetailsService.getZoneName(this.state.club)],
            ['Lions Club', ClubDetailsService.getLionsClubName(this.state.club)],
            ['Created at', moment(this.state.club.createdAt).format('YYYY-MM-DD')],
        ] : [];
    };

    getClubSocialInformation = () => {
        return this.state.club.id ? [
            ['Email', this.state.club.email],
            ['Website', this.state.club.website],
            ['Facebook', this.state.club.facebook],
            ['Instagram', this.state.club.instagram],
            ['Linkedin', this.state.club.linkedin],
            ['Twitter', this.state.club.twitter],
        ] : [];
    };

    isClubEditable = () => {
        return (PermissionsService.getPermission(this.props.permissions.permissions, 'club_profile').update && (MemberDetailsService.getClubId(this.props.user.user) === this.state.club.id));
    };

    goToEditClub = (sectionName) => {
        this.props.navigation.navigate('Edit Club', {
            club: Object.assign({}, this.state.club),
            sectionName: sectionName,
            districtsList: this.state.districtsList,
            regionsList: this.state.regionsList,
            saveCallback: this.saveCallback,
        });
    };

    saveCallback = (newClubObj) => {
        this.setState({
            club: newClubObj,
        });
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={this.state.loading} scrollEnabled={true}>
                <View style={{padding: 15}}>
                    <View style={{flexDirection: 'column-reverse'}}>
                        <CardComponent cardStyle={{
                            alignItems: 'center',
                            paddingTop: 50,
                            marginTop: -40,
                        }}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}} numberOfLines={2}>
                                {this.state.club.name ? this.state.club.name : ''}
                            </Text>
                            <Text style={{}} numberOfLines={2}>
                                {this.state.club.id ? 'Leo District 306 A2' : ''}
                            </Text>
                        </CardComponent>

                        <View style={{alignItems: 'center'}}>
                            <ClubProfilePictureComponent size={100} border={false} clubId={this.state.clubId}/>
                        </View>
                    </View>

                    <View style={{paddingTop: 10}}>
                        <CardComponent>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.goToWebsite}>
                                        <IconComponent.MaterialCommunityIcons name={'web'} size={28}/>
                                    </TouchableComponent>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.goToFacebook}>
                                        <IconComponent.MaterialCommunityIcons name={'facebook'} size={28}/>
                                    </TouchableComponent>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.goToInstagram}>
                                        <IconComponent.MaterialCommunityIcons name={'instagram'} size={28}/>
                                    </TouchableComponent>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.goToTwitter}>
                                        <IconComponent.MaterialCommunityIcons name={'twitter'} size={28}/>
                                    </TouchableComponent>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.goToLinkedin}>
                                        <IconComponent.MaterialCommunityIcons name={'linkedin'} size={28}/>
                                    </TouchableComponent>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.goToEmail}>
                                        <IconComponent.MaterialCommunityIcons name={'email'} size={28}/>
                                    </TouchableComponent>
                                </View>
                            </View>
                        </CardComponent>
                    </View>

                    <View style={{paddingTop: 10}}>
                        <CardComponent>
                            <View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={{flex: 1}}>
                                        <Text style={{fontWeight: 'bold'}}>General</Text>
                                    </View>

                                    {this.isClubEditable() ?
                                        <TouchableComponent onPress={() => {
                                            this.goToEditClub('general');
                                        }}>
                                            <IconComponent.MaterialCommunityIcons name={'playlist-edit'} size={18}
                                                                                  color={ColorService.SECONDARY_COLOR_DARK}/>
                                        </TouchableComponent>
                                        : null}
                                </View>

                                <View style={{paddingVertical: 10}}>
                                    <TableComponent data={this.getClubGeneralInformation()}
                                                    columnRatio={[1, 2]}/>
                                </View>
                            </View>
                            <View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={{flex: 1}}>
                                        <Text style={{fontWeight: 'bold'}}>Social</Text>
                                    </View>

                                    {this.isClubEditable() ?
                                        <TouchableComponent onPress={() => {
                                            this.goToEditClub('social');
                                        }}>
                                            <IconComponent.MaterialCommunityIcons name={'playlist-edit'} size={18}
                                                                                  color={ColorService.SECONDARY_COLOR_DARK}/>
                                        </TouchableComponent>
                                        : null}
                                </View>

                                <View style={{paddingTop: 10}}>
                                    <TableComponent data={this.getClubSocialInformation()}
                                                    columnRatio={[1, 2]}/>
                                </View>
                            </View>
                        </CardComponent>
                    </View>
                </View>
            </Layout>
        );
    }
};

let mapStateToProps = state => ({
    user: state.user,
    permissions: state.permissions,
});

export default connect(mapStateToProps)(ClubDetailsScreen);

