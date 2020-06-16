import React from 'react';
import {
    View,
    Text, StyleSheet,
} from 'react-native';
import Layout from '../../common/Layout';
import MultipleDistrictAPIService from './services/MultipleDistrictAPIService';
import CardComponent from '../../common/components/CardComponent';
import MultipleDistrictProfilePictureComponent from './components/MultipleDistrictProfilePictureComponent';
import TouchableComponent from '../../common/components/TouchableComponent';
import IconComponent from '../../common/components/IconComponent';
import TableComponent from '../../common/components/TableComponent';
import MemberDetailsService from '../members/services/MemberDetailsService';
import MultipleDistrictDirectoryItemComponent from './components/MultipleDistrictDirectoryItemComponent';
import MultipleDistrictDetailsService from './services/MultipleDistrictDetailsService';
import UserService from '../../common/services/UserService';

class MultipleDistrictOfficersScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            multipleDistrict: {},
            directory: [],
            loading: true,
        };
    }

    componentDidMount(): void {
        this.getMultipleDistrictDetails();
    }

    getMultipleDistrictDetails = async () => {
        try {
            let currentUser = UserService.getCurrentUser();
            let multipleDistrictResult = await MultipleDistrictAPIService.getMultipleDistrictDetailsApi(MemberDetailsService.getMultipleDistrictId(currentUser));

            if (!multipleDistrictResult.data.error) {
                this.setState({
                    multipleDistrict: multipleDistrictResult.data.data.multipleDistrict,
                    directory: multipleDistrictResult.data.data.directory,
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

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={this.state.loading} scrollEnabled={true}>
                <View style={{padding: 15}}>

                    {MultipleDistrictDetailsService.isMultipleDistrictKeyOfficersAdded(this.state.directory) ?
                        <CardComponent cardStyle={{padding: 0}}>
                            <View style={{
                                padding: 15,
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                borderBottomColor: '#dddddd',
                            }}>
                                <View>
                                    <Text style={{fontWeight: 'bold'}}>Multiple District Key Officers</Text>
                                </View>
                                <View>
                                    {
                                        this.state.directory.map((directoryItem, index) => {
                                            return <MultipleDistrictDirectoryItemComponent
                                                directoryItem={directoryItem}
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

export default MultipleDistrictOfficersScreen;
