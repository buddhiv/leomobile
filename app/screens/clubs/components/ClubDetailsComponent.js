import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import CardComponent from '../../../common/components/CardComponent';
import ClubProfilePictureComponent from './ClubProfilePictureComponent';
import TouchableComponent from '../../../common/components/TouchableComponent';
import IconComponent from '../../../common/components/IconComponent';
import TableComponent from '../../../common/components/TableComponent';
import ClubDetailsService from '../services/ClubDetailsService';
import moment from 'moment';

const ClubDetailsComponent: () => React$Node = (props) => {

    let club = props.route.params.club.club;

    let goToWebsite = () => {

    };

    let goToFacebook = () => {

    };

    let goToInstagram = () => {

    };

    let goToTwitter = () => {

    };

    let goToLinkedin = () => {

    };

    let goToEmail = () => {

    };

    let getClubGeneralInformation = () => {
        return club.id ? [
            ['District', ClubDetailsService.getDistrictName(club)],
            ['Zone', ClubDetailsService.getZoneName(club)],
            ['Charter ID', club.charterId],
            ['Lions Club', ClubDetailsService.getLionsClubName(club)],
            ['Created at', moment(club.createdAt).format('YYYY-MM-DD')],
        ] : [];
    };

    let getClubSocialInformation = () => {
        return club.id ? [
            ['Email', club.email],
            ['Website', club.website],
            ['Facebook', club.facebook],
            ['Instagram', club.instagram],
            ['Linkedin', club.linkedin],
            ['Twitter', club.twitter],
        ] : [];
    };

    return (
        <>
            {club.id ?
                <ScrollView>
                    <View style={{padding: 15}}>
                        <View style={{flexDirection: 'column-reverse'}}>
                            <CardComponent cardStyle={{
                                alignItems: 'center',
                                paddingTop: 50,
                                marginTop: -40,
                            }}>
                                <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}} numberOfLines={2}>
                                    {club.name ? club.name : ''}
                                </Text>
                                <Text style={{}} numberOfLines={2}>
                                    {club.id ? 'Leo District 306 A2' : ''}
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
                                        <TouchableComponent onPress={goToWebsite}>
                                            <IconComponent.MaterialCommunityIcons name={'web'} size={28}/>
                                        </TouchableComponent>
                                    </View>
                                    <View style={{flex: 1, alignItems: 'center'}}>
                                        <TouchableComponent onPress={goToFacebook}>
                                            <IconComponent.MaterialCommunityIcons name={'facebook'} size={28}/>
                                        </TouchableComponent>
                                    </View>
                                    <View style={{flex: 1, alignItems: 'center'}}>
                                        <TouchableComponent onPress={goToInstagram}>
                                            <IconComponent.MaterialCommunityIcons name={'instagram'} size={28}/>
                                        </TouchableComponent>
                                    </View>
                                    <View style={{flex: 1, alignItems: 'center'}}>
                                        <TouchableComponent onPress={goToTwitter}>
                                            <IconComponent.MaterialCommunityIcons name={'twitter'} size={28}/>
                                        </TouchableComponent>
                                    </View>
                                    <View style={{flex: 1, alignItems: 'center'}}>
                                        <TouchableComponent onPress={goToLinkedin}>
                                            <IconComponent.MaterialCommunityIcons name={'linkedin'} size={28}/>
                                        </TouchableComponent>
                                    </View>
                                    <View style={{flex: 1, alignItems: 'center'}}>
                                        <TouchableComponent onPress={goToEmail}>
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
                                        <TableComponent data={getClubGeneralInformation()}
                                                        columnRatio={[1, 2]}/>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{fontWeight: 'bold'}}>Social</Text>

                                    <View style={{paddingTop: 10}}>
                                        <TableComponent data={getClubSocialInformation()}
                                                        columnRatio={[1, 2]}/>
                                    </View>
                                </View>
                            </CardComponent>
                        </View>
                    </View>
                </ScrollView> : null}
        </>
    );
};

ClubDetailsComponent.propTypes = {};

export default ClubDetailsComponent;

