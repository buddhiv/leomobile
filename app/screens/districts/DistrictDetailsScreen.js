import React from 'react';
import {
    View,
    Text, FlatList, ScrollView,
} from 'react-native';
import Layout from '../../common/Layout';
import DistrictsAPIService from './services/DistrictsAPIService';
import DistrictsListRowComponent from './components/DistrictsListRowComponent';
import CardComponent from '../../common/components/CardComponent';
import DistrictProfilePictureComponent from './components/DistrictProfilePictureComponent';
import TouchableComponent from '../../common/components/TouchableComponent';
import IconComponent from '../../common/components/IconComponent';
import TableComponent from '../../common/components/TableComponent';
import {connect} from 'react-redux';

class DistrictDetailsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.districtId = props.route.params.districtId;

        this.state = {
            districtId: this.districtId,
            district: {},
            loading: true,
        };
    }

    componentDidMount(): void {
        this.getDistrictDetails(this.state.districtId);
    }

    getDistrictDetails = async (districtId) => {
        try {
            let districtResult = await DistrictsAPIService.getDistrictDetailsApi(districtId);

            let stateObj = {
                district: districtResult.data.data.district,
                loading: false,
            };

            if (!districtResult.data.error) {
                this.setState(stateObj);
            }
        } catch (e) {
            console.log(e);
            this.setState({
                loading: false,
            });
        }
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

    getDistrictSocialInformation = () => {
        return this.state.district.id ? [
            ['Website', this.state.district.website],
            ['Email', this.state.district.email],
            ['Facebook', this.state.district.facebook],
            ['Instagram', this.state.district.instagram],
            ['Linkedin', this.state.district.linkedin],
            ['Twitter', this.state.district.twitter],
        ] : [];
    };

    goToMemberDetails = (memberId) => {
        this.props.navigation.navigate('Member Details', {
            memberId: memberId,
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
                                {this.state.district.name ? this.state.district.name : ''}
                            </Text>
                        </CardComponent>

                        <View style={{alignItems: 'center'}}>
                            <DistrictProfilePictureComponent districtId={this.state.district.id} size={100}
                                                             border={false}/>
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
                                <Text style={{fontWeight: 'bold'}}>Social</Text>

                                <View style={{paddingTop: 10}}>
                                    <TableComponent data={this.getDistrictSocialInformation()}
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

export default connect(mapStateToProps)(DistrictDetailsScreen);