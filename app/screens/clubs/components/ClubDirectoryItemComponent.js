import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';
import {DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import MemberProfilePictureComponent from '../../members/components/MemberProfilePictureComponent';
import MemberDetailsService from '../../members/services/MemberDetailsService';

const ClubDirectoryItemComponent: () => React$Node = (props) => {
    return (
        <>
            <View style={{}}>
                {
                    props.directoryItem.leoMembers.map((member) => {
                        return <View style={{flexDirection: 'row', paddingTop: 15}}>
                            <View>
                                <MemberProfilePictureComponent size={40}/>
                            </View>
                            <View style={{flex: 1, paddingLeft: 10}}>
                                <Text style={{fontWeight: 'bold'}}>{props.directoryItem.name}</Text>
                                <Text>{MemberDetailsService.getFullName(member)}</Text>
                            </View>
                        </View>;
                    })
                }
            </View>
        </>
    );
};

ClubDirectoryItemComponent.propTypes = {
    directoryItem: PropTypes.object,
};

export default ClubDirectoryItemComponent;

