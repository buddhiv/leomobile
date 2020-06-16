import React from 'react';
import {
    View,
    Text, StyleSheet,
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

class ClubOfficersScreen extends React.Component {
    constructor(props) {
        super(props);

        console.log('props.route');
        console.log(props.route);

        this.state = {
            clubId: props.route.params.clubId,
            club: {},
            directory: [],
            loading: true,
        };
    }

    componentDidMount(): void {
        ClubsAPIService.getClubDetailsApi(this.state.clubId).then((result) => {
            console.log('result');
            console.log(result);

            this.setState({
                club: result.data.data.club,
                directory: result.data.data.directory,
                loading: false,
            });
        });
    }

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

    getClubGeneralInformation = () => {
        return this.state.club.id ? [
            ['District', ClubDetailsService.getDistrictName(this.state.club)],
            ['Zone', ClubDetailsService.getZoneName(this.state.club)],
            ['Charter ID', this.state.club.charterId],
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

    goToClubMembers = () => {
        this.props.navigation.navigate('Club Members', {
            filterable: false,
            clubId: this.state.club.id,
        });
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

                    <CardComponent cardStyle={{padding: 0}}>
                        {ClubDetailsService.isClubKeyOfficersAdded(this.state.directory) ? <View style={{
                            padding: 15,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            borderBottomColor: '#dddddd',
                        }}>
                            <View>
                                <Text style={{fontWeight: 'bold'}}>Club Key Officers</Text>
                            </View>
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
                        </View> : null}

                        <TouchableComponent onPress={this.goToClubMembers}>
                            <View style={{padding: 15}}>
                                <Text>See All Members</Text>
                            </View>
                        </TouchableComponent>

                        {/*<TouchableComponent>*/}
                        {/*    <View style={{*/}
                        {/*        padding: 15,*/}
                        {/*        borderTopWidth: StyleSheet.hairlineWidth,*/}
                        {/*        borderTopColor: '#dddddd',*/}
                        {/*    }}>*/}
                        {/*        <Text>Add Member</Text>*/}
                        {/*    </View>*/}
                        {/*</TouchableComponent>*/}
                    </CardComponent>
                </View>
            </Layout>
        );
    }
};

export default ClubOfficersScreen;
