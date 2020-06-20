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

const MultipleDistrictOfficersComponent: () => React$Node = (props) => {

    let multipleDistrict = props.route.params.multipleDistrict.multipleDistrict;
    let directory = props.route.params.multipleDistrict.directory;

    let goToMemberDetails = (memberId) => {
        props.navigation.navigate('Member Details', {
            memberId: memberId,
        });
    };

    return (
        <>
            {directory.length > 0 ?
                <ScrollView>
                    <View style={{padding: 15}}>

                        {MultipleDistrictDetailsService.isMultipleDistrictKeyOfficersAdded(directory) ?
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
                                            directory.map((directoryItem, index) => {
                                                return <MultipleDistrictDirectoryItemComponent
                                                    directoryItem={directoryItem}
                                                    key={index}
                                                    onPressProfilePicture={goToMemberDetails}
                                                />;
                                            })
                                        }
                                    </View>
                                </View>
                            </CardComponent> : null}
                    </View>
                </ScrollView> : null}
        </>
    );
};

export default MultipleDistrictOfficersComponent;
