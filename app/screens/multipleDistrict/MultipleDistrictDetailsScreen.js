import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import Layout from '../../common/Layout';
import moment from 'moment';
import MultipleDistrictAPIService from './services/MultipleDistrictAPIService';
import CardComponent from '../../common/components/CardComponent';
import MultipleDistrictProfilePictureComponent from './components/MultipleDistrictProfilePictureComponent';
import TouchableComponent from '../../common/components/TouchableComponent';
import IconComponent from '../../common/components/IconComponent';
import TableComponent from '../../common/components/TableComponent';
import GlobalService from '../../lib/services/GlobalService';
import MemberDetailsScreen from '../members/MemberDetailsScreen';
import MemberDetailsService from '../members/services/MemberDetailsService';
import MembersAPIService from '../members/services/MembersAPIService';

class MultipleDistrictDetailsScreen extends React.Component {
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
            let currentUser = GlobalService.get('user');
            let memberResult = await MembersAPIService.getMemberDetailsApi(currentUser.id);

            console.log(currentUser);
            console.log(memberResult);

            let multipleDistrictResult = await MultipleDistrictAPIService.getMultipleDistrictDetailsApi(MemberDetailsService.getMultipleDistrictId(memberResult.data.data));
            if (!multipleDistrictResult.data.error) {
                this.setState({
                    multipleDistrict: multipleDistrictResult.data.data,
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
                                {this.state.multipleDistrict.id ? this.state.multipleDistrict.name : ''}
                            </Text>
                        </CardComponent>

                        <View style={{alignItems: 'center'}}>
                            <MultipleDistrictProfilePictureComponent size={100} border={false}/>
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
                                    <TableComponent data={this.getMultipleDistrictSocialInformation()}
                                                    columnRatio={[1, 2]}/>
                                </View>
                            </View>
                        </CardComponent>
                    </View>

                    {/*<View style={{paddingTop: 10}}>*/}
                    {/*    <CardComponent cardStyle={{padding: 0}}>*/}
                    {/*        {ClubDetailsService.isClubKeyOfficersAdded(this.state.directory) ? <View style={{*/}
                    {/*            padding: 15,*/}
                    {/*            borderBottomWidth: StyleSheet.hairlineWidth,*/}
                    {/*            borderBottomColor: '#dddddd',*/}
                    {/*        }}>*/}
                    {/*            <View>*/}
                    {/*                <Text style={{fontWeight: 'bold'}}>Club Key Officers</Text>*/}
                    {/*            </View>*/}
                    {/*            <View>*/}
                    {/*                {*/}
                    {/*                    this.state.directory.map((directoryItem, index) => {*/}
                    {/*                        return <ClubDirectoryItemComponent directoryItem={directoryItem}*/}
                    {/*                                                           key={index}/>;*/}
                    {/*                    })*/}
                    {/*                }*/}
                    {/*            </View>*/}
                    {/*        </View> : null}*/}

                    {/*        <TouchableComponent onPress={this.goToClubMembers}>*/}
                    {/*            <View style={{padding: 15}}>*/}
                    {/*                <Text>See All Members</Text>*/}
                    {/*            </View>*/}
                    {/*        </TouchableComponent>*/}
                    {/*    </CardComponent>*/}
                    {/*</View>*/}
                </View>
            </Layout>
        );
    }
};

export default MultipleDistrictDetailsScreen;
