import React from 'react';
import {
    View,
    Text, StyleSheet, ScrollView,
} from 'react-native';
import Layout from '../../../common/Layout';
import MultipleDistrictAPIService from '../services/MultipleDistrictAPIService';
import CardComponent from '../../../common/components/CardComponent';
import MultipleDistrictProfilePictureComponent from './MultipleDistrictProfilePictureComponent';
import TouchableComponent from '../../../common/components/TouchableComponent';
import IconComponent from '../../../common/components/IconComponent';
import TableComponent from '../../../common/components/TableComponent';
import MemberDetailsService from '../../members/services/MemberDetailsService';
import MultipleDistrictDirectoryItemComponent from './MultipleDistrictDirectoryItemComponent';
import MultipleDistrictDetailsService from '../services/MultipleDistrictDetailsService';
import UserService from '../../../common/services/UserService';

const MultipleDistrictDetailsComponent: () => React$Node = (props) => {

    let multipleDistrict = props.route.params.multipleDistrict.multipleDistrict;

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

    let getMultipleDistrictSocialInformation = () => {
        return multipleDistrict.id ? [
            ['Website', multipleDistrict.website],
            ['Email', multipleDistrict.email],
            ['Facebook', multipleDistrict.facebook],
            ['Instagram', multipleDistrict.instagram],
            ['Linkedin', multipleDistrict.linkedin],
            ['Twitter', multipleDistrict.twitter],
        ] : [];
    };

    return (
        <>
            {multipleDistrict.id ?
                <ScrollView>
                    <View style={{padding: 15}}>

                        <View style={{flexDirection: 'column-reverse'}}>
                            <CardComponent cardStyle={{
                                alignItems: 'center',
                                paddingTop: 50,
                                marginTop: -40,
                            }}>
                                <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}} numberOfLines={2}>
                                    {multipleDistrict.name ? multipleDistrict.name : ''}
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
                                        <TableComponent data={getMultipleDistrictSocialInformation()}
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

MultipleDistrictDetailsComponent.propTypes = {};

export default MultipleDistrictDetailsComponent;
