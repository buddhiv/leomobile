import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import MemberProfilePictureComponent from '../../members/components/MemberProfilePictureComponent';
import MemberDetailsService from '../../members/services/MemberDetailsService';

const DistrictDirectoryItemComponent: () => React$Node = (props) => {
    return (
        <>
            <View style={{}}>
                {
                    props.directoryItem.leoMembers.map((member, id) => {
                        return <View style={{flexDirection: 'row', paddingTop: 15}} key={id}>
                            <View>
                                <MemberProfilePictureComponent size={40}/>
                            </View>
                            <View style={{flex: 1, paddingLeft: 10}}>
                                <Text style={{fontWeight: 'bold'}}>{props.directoryItem.designationType.name}</Text>
                                <Text>{MemberDetailsService.getFullName(member)}</Text>
                            </View>
                        </View>;
                    })
                }
            </View>
        </>
    );
};

DistrictDirectoryItemComponent.propTypes = {
    directoryItem: PropTypes.object,
};

export default DistrictDirectoryItemComponent;

