import React from 'react';
import PropTypes from 'prop-types';
import ClubDetailsComponent from './ClubDetailsComponent';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CardComponent from '../../../common/components/CardComponent';
import ClubProfilePictureComponent from './ClubProfilePictureComponent';
import TouchableComponent from '../../../common/components/TouchableComponent';
import IconComponent from '../../../common/components/IconComponent';
import TableComponent from '../../../common/components/TableComponent';
import ClubDetailsService from '../services/ClubDetailsService';
import ClubDirectoryItemComponent from './ClubDirectoryItemComponent';

const ClubOfficersComponent: () => React$Node = (props) => {
    let club = props.route.params.club.club;
    let directory = props.route.params.club.directory;

    let goToClubMembers = () => {
        props.navigation.navigate('Club Members', {
            filterable: false,
            clubId: club.id,
        });
    };

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

                        <CardComponent cardStyle={{padding: 0}}>
                            {ClubDetailsService.isClubKeyOfficersAdded(directory) ? <View style={{
                                padding: 15,
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                borderBottomColor: '#dddddd',
                            }}>
                                <View>
                                    <Text style={{fontWeight: 'bold'}}>Club Key Officers</Text>
                                </View>

                                {/*<View style={{flexDirection: 'row', flexWrap: 'wrap', flex: 1}}>*/}
                                {/*    <View style={{width: '50%', backgroundColor: 'green'}}><Text>sss</Text></View>*/}
                                {/*    <View style={{width: '50%', backgroundColor: 'red'}}><Text>sss</Text></View>*/}
                                {/*    <View style={{width: '50%', backgroundColor: 'green'}}><Text>sss</Text></View>*/}
                                {/*</View>*/}

                                <View>
                                    {
                                        directory.map((directoryItem, index) => {
                                            return <ClubDirectoryItemComponent directoryItem={directoryItem}
                                                                               key={index}
                                                                               onPressProfilePicture={goToMemberDetails}
                                            />;
                                        })
                                    }
                                </View>
                            </View> : null}

                            {/*<TouchableComponent onPress={goToClubMembers}>*/}
                            {/*    <View style={{padding: 15}}>*/}
                            {/*        <Text>See All Members</Text>*/}
                            {/*    </View>*/}
                            {/*</TouchableComponent>*/}

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
                </ScrollView> : null}
        </>
    );
};

ClubOfficersComponent.propTypes = {};

export default ClubOfficersComponent;
