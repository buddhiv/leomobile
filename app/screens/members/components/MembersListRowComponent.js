import React from 'react';
import {
    View,
    Text,
    StyleSheet,
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
                <View style={styles.rowStyle}>
                    <View>
                        <MemberProfilePictureComponent size={40}/>
                    </View>
                    <View style={{paddingLeft: 10}}>
                        <Text
                            style={styles.memberNameText}>Leo {MemberDetailsService.getFullName(props.member.item)}</Text>
                        <Text style={{}}>{props.member.item.email}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

const styles = StyleSheet.create({
    rowStyle: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        flexDirection: 'row',
    },
    memberNameText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    secondRowText: {
        flexDirection: 'row',
    },
});

export default MembersListRowComponent;
