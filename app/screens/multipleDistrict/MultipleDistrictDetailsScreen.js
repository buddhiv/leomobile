import React from 'react';
import {
    View,
    Text, FlatList, ScrollView,
} from 'react-native';
import Layout from '../../common/Layout';
import CardComponent from '../../common/components/CardComponent';
import TouchableComponent from '../../common/components/TouchableComponent';
import IconComponent from '../../common/components/IconComponent';
import TableComponent from '../../common/components/TableComponent';
import {connect} from 'react-redux';
import ColorService from '../../common/services/ColorService';
import PermissionsService from '../../common/services/PermissionsService';
import MemberDetailsService from '../members/services/MemberDetailsService';
import MultipleDistrictAPIService from './services/MultipleDistrictAPIService';
import MultipleDistrictProfilePictureComponent from './components/MultipleDistrictProfilePictureComponent';

class MultipleDistrictDetailsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            multipleDistrict: {},
            loading: true,
        };
    }

    componentDidMount(): void {
        this.getMultipleDistrictDetails();
    }

    getMultipleDistrictDetails = async () => {
        try {
            let currentUser = this.props.user.user;
            let multipleDistrictResult = await MultipleDistrictAPIService.getMultipleDistrictDetailsApi(MemberDetailsService.getMultipleDistrictId(currentUser));

            if (!multipleDistrictResult.data.error) {
                this.setState({
                    multipleDistrict: multipleDistrictResult.data.data.multipleDistrict,
                    loading: false,
                });
            }
        } catch (e) {
            console.log(e);
            this.setState({
                loading: false,
            });
        }
    };

    goToWebsite = () => {

    };

    goToFacebook = () => {

    };

    goToInstagram = () => {

    };

    goToTwitter = () => {

    };

    goToLinkedin = () => {

    };

    goToEmail = () => {

    };

    getMultipleDistrictSocialInformation = () => {
        return this.state.multipleDistrict.id ? [
            ['Website', this.state.multipleDistrict.website],
            ['Email', this.state.multipleDistrict.email],
            ['Facebook', this.state.multipleDistrict.facebook],
            ['Instagram', this.state.multipleDistrict.instagram],
            ['Linkedin', this.state.multipleDistrict.linkedin],
            ['Twitter', this.state.multipleDistrict.twitter],
        ] : [];
    };

    goToMemberDetails = (memberId) => {
        this.props.navigation.navigate('Member Details', {
            memberId: memberId,
        });
    };

    isMultipleDistrictEditable = () => {
        //TODO: need to be improved
        return (PermissionsService.getPermission(this.props.permissions.permissions, 'multiple_district_profile').update && (MemberDetailsService.getMultipleDistrictId(this.props.user.user) === this.state.multipleDistrict.id));
    };

    goToEditMultipleDistrict = (sectionName) => {
        this.props.navigation.navigate('Edit Multiple District', {
            multipleDistrict: Object.assign({}, this.state.multipleDistrict),
            sectionName: sectionName,
            saveCallback: this.saveCallback,
        });
    };

    saveCallback = (newMultipleDistrictObj) => {
        this.setState({multipleDistrict: newMultipleDistrictObj});
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
                                {this.state.multipleDistrict.name ? this.state.multipleDistrict.name : ''}
                            </Text>
                        </CardComponent>

                        <View style={{alignItems: 'center'}}>
                            <MultipleDistrictProfilePictureComponent multipleDistrictId={this.state.multipleDistrict.id}
                                                                     size={100}
                                                                     border={false}/>
                        </View>
                    </View>

                    <View style={{paddingTop: 10}}>
                        <CardComponent>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.goToWebsite}>
                                        <IconComponent.MaterialCommunityIcons name={'web'} size={28}
                                                                              color={ColorService.SECONDARY_COLOR_DARK}/>
                                    </TouchableComponent>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.goToFacebook}>
                                        <IconComponent.MaterialCommunityIcons name={'facebook'} size={28}
                                                                              color={ColorService.SECONDARY_COLOR_DARK}/>
                                    </TouchableComponent>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.goToInstagram}>
                                        <IconComponent.MaterialCommunityIcons name={'instagram'} size={28}
                                                                              color={ColorService.SECONDARY_COLOR_DARK}/>
                                    </TouchableComponent>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.goToTwitter}>
                                        <IconComponent.MaterialCommunityIcons name={'twitter'} size={28}
                                                                              color={ColorService.SECONDARY_COLOR_DARK}/>
                                    </TouchableComponent>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.goToLinkedin}>
                                        <IconComponent.MaterialCommunityIcons name={'linkedin'} size={28}
                                                                              color={ColorService.SECONDARY_COLOR_DARK}/>
                                    </TouchableComponent>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableComponent onPress={this.goToEmail}>
                                        <IconComponent.MaterialCommunityIcons name={'email'} size={28}
                                                                              color={ColorService.SECONDARY_COLOR_DARK}/>
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
                                        <Text style={{fontWeight: 'bold'}}>Social</Text>
                                    </View>

                                    {this.isMultipleDistrictEditable() ?
                                        <TouchableComponent onPress={() => {
                                            this.goToEditMultipleDistrict('social');
                                        }}>
                                            <IconComponent.MaterialCommunityIcons name={'playlist-edit'} size={18}
                                                                                  color={ColorService.SECONDARY_COLOR_DARK}/>
                                        </TouchableComponent>
                                        : null}
                                </View>

                                <View style={{paddingTop: 10}}>
                                    <TableComponent data={this.getMultipleDistrictSocialInformation()}
                                                    columnRatio={[1, 2]}/>
                                </View>
                            </View>
                        </CardComponent>
                    </View>
                </View>
            </Layout>
        );
    }
}

let mapStateToProps = state => ({
    user: state.user,
    permissions: state.permissions,
});

export default connect(mapStateToProps)(MultipleDistrictDetailsScreen);
