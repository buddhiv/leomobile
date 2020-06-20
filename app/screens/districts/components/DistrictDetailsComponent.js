import React from 'react';
import {
    View,
    Text, StyleSheet, ScrollView,
} from 'react-native';
import Layout from '../../../common/Layout';
import moment from 'moment';
import CardComponent from '../../../common/components/CardComponent';
import DistrictProfilePictureComponent from './DistrictProfilePictureComponent';
import DistrictsAPIService from '../services/DistrictsAPIService';
import IconComponent from '../../../common/components/IconComponent';
import TouchableComponent from '../../../common/components/TouchableComponent';
import TableComponent from '../../../common/components/TableComponent';
import DistrictDirectoryItemComponent from './DistrictDirectoryItemComponent';
import DistrictDetailsService from '../services/DistrictDetailsService';
import ClubDetailsComponent from '../../clubs/components/ClubDetailsComponent';

const DistrictDetailsComponent: () => React$Node = (props) => {

    let district = props.route.params.district.district;

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

    let getDistrictSocialInformation = () => {
        return district.id ? [
            ['Website', district.website],
            ['Email', district.email],
            ['Facebook', district.facebook],
            ['Instagram', district.instagram],
            ['Linkedin', district.linkedin],
            ['Twitter', district.twitter],
        ] : [];
    };

    let goToMemberDetails = (memberId) => {
        props.navigation.navigate('Member Details', {
            memberId: memberId,
        });
    };

    return (
        <>
            {district.id ?
                <ScrollView>
                    <View style={{padding: 15}}>
                        <View style={{flexDirection: 'column-reverse'}}>
                            <CardComponent cardStyle={{
                                alignItems: 'center',
                                paddingTop: 50,
                                marginTop: -40,
                            }}>
                                <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}} numberOfLines={2}>
                                    {district.name ? district.name : ''}
                                </Text>
                            </CardComponent>

                            <View style={{alignItems: 'center'}}>
                                <DistrictProfilePictureComponent size={100} border={false}/>
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
                                    <Text style={{fontWeight: 'bold'}}>Social</Text>

                                    <View style={{paddingTop: 10}}>
                                        <TableComponent data={getDistrictSocialInformation()}
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

DistrictDetailsComponent.propTypes = {};

export default DistrictDetailsComponent;
