import React from 'react';
import {
    View,
    Text, StyleSheet,
} from 'react-native';
import Layout from '../../common/Layout';
import moment from 'moment';
import CardComponent from '../../common/components/CardComponent';
import DistrictProfilePictureComponent from './components/DistrictProfilePictureComponent';
import DistrictsAPIService from './services/DistrictsAPIService';
import IconComponent from '../../common/components/IconComponent';
import TouchableComponent from '../../common/components/TouchableComponent';
import TableComponent from '../../common/components/TableComponent';
import DistrictDirectoryItemComponent from './components/DistrictDirectoryItemComponent';
import DistrictDetailsService from './services/DistrictDetailsService';

class DistrictOfficersScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            districtId: props.route.params.districtId,
            district: {},
            directory: [],
            loading: true,
        };
    }

    componentDidMount(): void {
        this.getDistrictDetails();
    }

    getDistrictDetails = async () => {
        try {
            let result = await DistrictsAPIService.getDistrictDetailsApi(this.state.districtId);

            if (!result.data.error) {
                this.setState({
                    district: result.data.data.district,
                    directory: result.data.data.directory,
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
                    {DistrictDetailsService.isDistrictKeyOfficersAdded(this.state.directory) ?
                        <CardComponent cardStyle={{padding: 0}}>
                            <View style={{
                                padding: 15,
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                borderBottomColor: '#dddddd',
                            }}>
                                <View>
                                    <Text style={{fontWeight: 'bold'}}>District Key Officers</Text>
                                </View>
                                <View>
                                    {
                                        this.state.directory.map((directoryItem, index) => {
                                            return <DistrictDirectoryItemComponent directoryItem={directoryItem}
                                                                                   key={index}
                                                                                   onPressProfilePicture={this.goToMemberDetails}
                                            />;
                                        })
                                    }
                                </View>
                            </View>
                        </CardComponent> : null}
                </View>
            </Layout>
        );
    }
};

export default DistrictOfficersScreen;
