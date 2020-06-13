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

class ClubDetailsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clubId: props.route.params.clubId,
            club: {},
            directory: [],
            loading: true,
        };
    }

    componentDidMount(): void {
        ClubsAPIService.getClubDetailsApi(this.state.clubId).then((result) => {
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
                                {this.state.club.id ? this.state.club.name : ''}
                            </Text>
                            <Text style={{}} numberOfLines={2}>
                                {this.state.club.id ? 'Leo District 306 A2' : ''}
                            </Text>
                        </CardComponent>

                        <View style={{alignItems: 'center'}}>
                            <ClubProfilePictureComponent size={100} border={false}/>
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
                                <Text style={{fontWeight: 'bold'}}>General</Text>

                                <View style={{paddingVertical: 10}}>
                                    <TableComponent data={this.getClubGeneralInformation()}
                                                    columnRatio={[1, 2]}/>
                                </View>
                            </View>
                            <View>
                                <Text style={{fontWeight: 'bold'}}>Social</Text>

                                <View style={{paddingTop: 10}}>
                                    <TableComponent data={this.getClubSocialInformation()}
                                                    columnRatio={[1, 2]}/>
                                </View>
                            </View>
                        </CardComponent>
                    </View>

                    <View style={{paddingTop: 10}}>
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
                                                                               key={index}/>;
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
                </View>
            </Layout>
        );
    }
};

export default ClubDetailsScreen;
