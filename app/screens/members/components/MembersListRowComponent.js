import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import MemberDetailsService from '../services/MemberDetailsService';
import MemberProfilePictureComponent from './MemberProfilePictureComponent';
import TouchableComponent from '../../../common/components/TouchableComponent';

const MembersListRowComponent: () => React$Node = (props) => {
    return (
        <>
            <TouchableComponent onPress={() => {
                props.onPress(props.member.item);
            }}>
                <View style={{paddingVertical: 10, paddingHorizontal: 15, flexDirection: 'row'}}>
                    <View>
                        <MemberProfilePictureComponent memberId={props.member.item.id} loadAutomatically={true}
                                                       size={40}/>
                    </View>
                    <View style={{paddingLeft: 10, justifyContent: 'center'}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                            Leo {MemberDetailsService.getFullName(props.member.item)}
                        </Text>
                        <Text>{props.member.item.email}</Text>
                    </View>
                </View>
            </TouchableComponent>
        </>
    );
};

export default MembersListRowComponent;
