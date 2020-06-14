import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import MemberProfilePictureComponent from '../../members/components/MemberProfilePictureComponent';
import MemberDetailsService from '../../members/services/MemberDetailsService';
import TouchableComponent from '../../../common/components/TouchableComponent';

const MultipleDistrictDirectoryItemComponent: () => React$Node = (props) => {
    return (
        <>
            <View style={{}}>
                {
                    props.directoryItem.leoMembers.map((member, id) => {
                        return <View style={{flexDirection: 'row', paddingTop: 15}} key={id}>
                            <TouchableComponent onPress={() => {
                                props.onPressProfilePicture(member.id);
                            }}>
                                <View>
                                    <MemberProfilePictureComponent size={40}/>
                                </View>
                            </TouchableComponent>
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

MultipleDistrictDirectoryItemComponent.propTypes = {
    directoryItem: PropTypes.object,
};

export default MultipleDistrictDirectoryItemComponent;

