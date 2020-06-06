import React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';
import MemberDetailsService from '../services/MemberDetailsService';
import MemberProfilePictureComponent from './MemberProfilePictureComponent';

const MembersListRowComponent: () => React$Node = (props) => {
    return (
        <>
            <TouchableWithoutFeedback onPress={() => {
                props.onPress(props.member.item);
            }}>
                <View style={{paddingVertical: 5, paddingHorizontal: 15, flexDirection: 'row'}}>
                    <View>
                        <MemberProfilePictureComponent size={40}/>
                    </View>
                    <View style={{paddingLeft: 10}}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}>Leo {MemberDetailsService.getFullName(props.member.item)}</Text>
                        <Text>{props.member.item.email}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

export default MembersListRowComponent;
